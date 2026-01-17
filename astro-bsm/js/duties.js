/**
 * ASTRO-BSM Factory Operations
 * Duties Management Module
 */

// Cache for duties data
let dutiesCache = [];

/**
 * Load all duties
 */
async function loadDuties() {
    try {
        dutiesCache = await DB.getAll(DB.STORES.DUTIES);
        renderDutiesGrid();
        updateDutiesStats();
        return dutiesCache;
    } catch (error) {
        console.error('Error loading duties:', error);
        Utils.showToast('error', 'Error', 'Failed to load duties data');
        return [];
    }
}

/**
 * Render duties grid
 */
function renderDutiesGrid() {
    const grid = document.getElementById('dutiesGrid');
    
    if (!dutiesCache || dutiesCache.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-clipboard-list" style="font-size: 48px; color: var(--gray-400); margin-bottom: 16px;"></i>
                <p>No duties configured. Click "Add Duty" to get started.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = dutiesCache.map(duty => `
        <div class="duty-card" data-id="${duty.id}">
            <div class="duty-card-header">
                <h3>${Utils.escapeHtml(duty.name)}</h3>
                <p>${Utils.truncate(duty.description, 60)}</p>
            </div>
            <div class="duty-card-body">
                <div class="duty-info-row">
                    <label><i class="fas fa-clock"></i> Time</label>
                    <span>${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}</span>
                </div>
                <div class="duty-info-row">
                    <label><i class="fas fa-check-circle"></i> Checks</label>
                    <span>${duty.requiredChecks ? duty.requiredChecks.length : 0} items</span>
                </div>
                <div class="duty-info-row">
                    <label><i class="fas fa-toggle-on"></i> Status</label>
                    <span class="status-badge status-${duty.status}">${Utils.capitalize(duty.status)}</span>
                </div>
            </div>
            <div class="duty-card-footer">
                <button class="btn btn-sm btn-secondary" onclick="viewDutyDetails(${duty.id})">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn btn-sm btn-secondary" onclick="editDuty(${duty.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-sm btn-danger" onclick="confirmDeleteDuty(${duty.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Update duties statistics
 */
function updateDutiesStats() {
    const activeCount = dutiesCache.filter(d => d.status === 'active').length;
    const statElement = document.getElementById('statDutiesCount');
    if (statElement) {
        statElement.textContent = activeCount;
    }
}

/**
 * Show Add Duty Modal
 */
function showAddDutyModal() {
    const content = `
        <form id="dutyForm" onsubmit="saveDuty(event)">
            <div class="form-group">
                <label class="required">Duty Name</label>
                <input type="text" class="form-control" id="dutyNameInput" 
                       placeholder="Enter duty name" required>
            </div>
            <div class="form-group">
                <label class="required">Description</label>
                <textarea class="form-control" id="dutyDescriptionInput" 
                          placeholder="Describe the duty and its purpose" required></textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="dutyStartTimeInput" 
                           value="08:30" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="dutyEndTimeInput" 
                           value="09:30" required>
                </div>
            </div>
            <div class="form-group">
                <label>Required Checks (one per line)</label>
                <textarea class="form-control" id="dutyChecksInput" 
                          placeholder="Enter each required check on a new line" rows="5"></textarea>
            </div>
            <div class="form-group">
                <label class="required">Status</label>
                <select class="form-control" id="dutyStatusInput" required>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <input type="hidden" id="dutyEditId" value="">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('dutyForm').requestSubmit()">
            <i class="fas fa-save"></i> Save Duty
        </button>
    `;
    
    Utils.showModal('Add New Duty', content, footer);
    document.getElementById('dutyNameInput').focus();
}

/**
 * View Duty Details
 */
async function viewDutyDetails(id) {
    const duty = await DB.get(DB.STORES.DUTIES, id);
    if (!duty) {
        Utils.showToast('error', 'Error', 'Duty not found');
        return;
    }
    
    const checksHtml = duty.requiredChecks && duty.requiredChecks.length > 0 
        ? duty.requiredChecks.map((check, i) => `
            <div style="display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid var(--gray-100);">
                <span style="width: 24px; height: 24px; background: var(--primary-100); color: var(--primary-600); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600;">${i + 1}</span>
                <span>${Utils.escapeHtml(check)}</span>
            </div>
        `).join('')
        : '<p class="empty-state">No required checks defined</p>';
    
    const content = `
        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--primary-800); margin-bottom: 8px;">${Utils.escapeHtml(duty.name)}</h3>
            <p style="color: var(--gray-600);">${Utils.escapeHtml(duty.description)}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="color: var(--gray-500); font-size: 12px; margin-bottom: 4px;">Start Time</div>
                <div style="font-weight: 600; color: var(--gray-800);">${Utils.formatTime(duty.startTime)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="color: var(--gray-500); font-size: 12px; margin-bottom: 4px;">End Time</div>
                <div style="font-weight: 600; color: var(--gray-800);">${Utils.formatTime(duty.endTime)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="color: var(--gray-500); font-size: 12px; margin-bottom: 4px;">Status</div>
                <span class="status-badge status-${duty.status}">${Utils.capitalize(duty.status)}</span>
            </div>
        </div>
        
        <div>
            <h4 style="color: var(--gray-700); margin-bottom: 12px;">
                <i class="fas fa-clipboard-check" style="color: var(--primary-500);"></i> Required Checks
            </h4>
            ${checksHtml}
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="closeModal(); editDuty(${duty.id})">
            <i class="fas fa-edit"></i> Edit Duty
        </button>
    `;
    
    Utils.showModal('Duty Details', content, footer);
}

/**
 * Edit Duty
 */
async function editDuty(id) {
    const duty = await DB.get(DB.STORES.DUTIES, id);
    if (!duty) {
        Utils.showToast('error', 'Error', 'Duty not found');
        return;
    }
    
    const checksText = duty.requiredChecks ? duty.requiredChecks.join('\n') : '';
    
    const content = `
        <form id="dutyForm" onsubmit="saveDuty(event)">
            <div class="form-group">
                <label class="required">Duty Name</label>
                <input type="text" class="form-control" id="dutyNameInput" 
                       value="${Utils.escapeHtml(duty.name)}" required>
            </div>
            <div class="form-group">
                <label class="required">Description</label>
                <textarea class="form-control" id="dutyDescriptionInput" 
                          required>${Utils.escapeHtml(duty.description)}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="dutyStartTimeInput" 
                           value="${duty.startTime}" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="dutyEndTimeInput" 
                           value="${duty.endTime}" required>
                </div>
            </div>
            <div class="form-group">
                <label>Required Checks (one per line)</label>
                <textarea class="form-control" id="dutyChecksInput" rows="5">${Utils.escapeHtml(checksText)}</textarea>
            </div>
            <div class="form-group">
                <label class="required">Status</label>
                <select class="form-control" id="dutyStatusInput" required>
                    <option value="active" ${duty.status === 'active' ? 'selected' : ''}>Active</option>
                    <option value="inactive" ${duty.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                </select>
            </div>
            <input type="hidden" id="dutyEditId" value="${duty.id}">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('dutyForm').requestSubmit()">
            <i class="fas fa-save"></i> Update Duty
        </button>
    `;
    
    Utils.showModal('Edit Duty', content, footer);
}

/**
 * Save Duty (Add or Update)
 */
async function saveDuty(event) {
    event.preventDefault();
    
    const editId = document.getElementById('dutyEditId').value;
    const checksText = document.getElementById('dutyChecksInput').value;
    const requiredChecks = checksText.split('\n')
        .map(c => c.trim())
        .filter(c => c.length > 0);
    
    const dutyData = {
        name: document.getElementById('dutyNameInput').value.trim(),
        description: document.getElementById('dutyDescriptionInput').value.trim(),
        startTime: document.getElementById('dutyStartTimeInput').value,
        endTime: document.getElementById('dutyEndTimeInput').value,
        requiredChecks,
        status: document.getElementById('dutyStatusInput').value
    };
    
    // Validation
    const errors = Utils.validateForm(dutyData, {
        name: { required: true, label: 'Duty Name', minLength: 2 },
        description: { required: true, label: 'Description' }
    });
    
    if (errors.length > 0) {
        Utils.showToast('error', 'Validation Error', errors[0]);
        return;
    }
    
    try {
        if (editId) {
            dutyData.id = parseInt(editId);
            await DB.update(DB.STORES.DUTIES, dutyData);
            Utils.showToast('success', 'Success', 'Duty updated successfully');
        } else {
            await DB.add(DB.STORES.DUTIES, dutyData);
            Utils.showToast('success', 'Success', 'Duty added successfully');
        }
        
        closeModal();
        await loadDuties();
    } catch (error) {
        console.error('Error saving duty:', error);
        Utils.showToast('error', 'Error', 'Failed to save duty');
    }
}

/**
 * Confirm Delete Duty
 */
function confirmDeleteDuty(id) {
    const duty = dutiesCache.find(d => d.id === id);
    if (!duty) return;
    
    const content = `
        <div style="text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: var(--danger-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                Are you sure you want to delete the duty<br>
                <strong>"${Utils.escapeHtml(duty.name)}"</strong>?
            </p>
            <p style="color: var(--danger-500); font-size: 14px; margin-top: 12px;">
                This will remove it from all future rosters.
            </p>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="deleteDuty(${id})">
            <i class="fas fa-trash"></i> Delete
        </button>
    `;
    
    Utils.showModal('Confirm Delete', content, footer);
}

/**
 * Delete Duty
 */
async function deleteDuty(id) {
    try {
        await DB.delete(DB.STORES.DUTIES, id);
        Utils.showToast('success', 'Deleted', 'Duty deleted successfully');
        closeModal();
        await loadDuties();
    } catch (error) {
        console.error('Error deleting duty:', error);
        Utils.showToast('error', 'Error', 'Failed to delete duty');
    }
}

/**
 * Get active duties
 */
function getActiveDuties() {
    return dutiesCache.filter(d => d.status === 'active');
}

/**
 * Get duty by ID
 */
function getDutyById(id) {
    return dutiesCache.find(d => d.id === id);
}

/**
 * Get duty name by ID
 */
function getDutyName(id) {
    const duty = getDutyById(parseInt(id));
    return duty ? duty.name : 'Unknown';
}

/**
 * Build duty dropdown options
 */
function buildDutyOptions(selectedId = null) {
    const activeDuties = getActiveDuties();
    return activeDuties.map(duty => 
        `<option value="${duty.id}" ${duty.id === selectedId ? 'selected' : ''}>
            ${Utils.escapeHtml(duty.name)}
        </option>`
    ).join('');
}

// Export duties module functions
window.Duties = {
    load: loadDuties,
    render: renderDutiesGrid,
    getActive: getActiveDuties,
    getById: getDutyById,
    getName: getDutyName,
    buildOptions: buildDutyOptions,
    cache: () => dutiesCache
};
