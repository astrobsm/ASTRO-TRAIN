/**
 * ASTRO-BSM Factory Operations
 * Staff Management Module
 */

// Cache for staff data
let staffCache = [];

/**
 * Load all staff members
 */
async function loadStaff() {
    try {
        staffCache = await DB.getAll(DB.STORES.STAFF);
        renderStaffTable();
        updateStaffStats();
        return staffCache;
    } catch (error) {
        console.error('Error loading staff:', error);
        Utils.showToast('error', 'Error', 'Failed to load staff data');
        return [];
    }
}

/**
 * Render staff table
 */
function renderStaffTable() {
    const tbody = document.getElementById('staffTableBody');
    
    if (!staffCache || staffCache.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="empty-state">
                    No staff members found. Click "Add Staff" to get started.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = staffCache.map(staff => `
        <tr data-id="${staff.id}">
            <td><strong>${Utils.escapeHtml(staff.staffId)}</strong></td>
            <td>${Utils.escapeHtml(staff.name)}</td>
            <td>${Utils.escapeHtml(staff.role)}</td>
            <td>
                <span class="status-badge status-${staff.status}">
                    ${Utils.capitalize(staff.status)}
                </span>
            </td>
            <td>
                <div class="table-actions">
                    <button class="edit-btn" onclick="editStaff(${staff.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" onclick="confirmDeleteStaff(${staff.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Update staff statistics
 */
function updateStaffStats() {
    const activeCount = staffCache.filter(s => s.status === 'active').length;
    const statElement = document.getElementById('statStaffCount');
    if (statElement) {
        statElement.textContent = activeCount;
    }
}

/**
 * Show Add Staff Modal
 */
function showAddStaffModal() {
    const nextId = generateNextStaffId();
    
    const content = `
        <form id="staffForm" onsubmit="saveStaff(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Staff ID</label>
                    <input type="text" class="form-control" id="staffIdInput" 
                           value="${nextId}" required readonly>
                </div>
                <div class="form-group">
                    <label class="required">Status</label>
                    <select class="form-control" id="staffStatusInput" required>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="required">Full Name</label>
                <input type="text" class="form-control" id="staffNameInput" 
                       placeholder="Enter full name" required>
            </div>
            <div class="form-group">
                <label class="required">Role</label>
                <select class="form-control" id="staffRoleInput" required>
                    <option value="">Select Role</option>
                    <option value="Production Supervisor">Production Supervisor</option>
                    <option value="Quality Control Officer">Quality Control Officer</option>
                    <option value="Production Operator">Production Operator</option>
                    <option value="Packaging Technician">Packaging Technician</option>
                    <option value="Hygiene Officer">Hygiene Officer</option>
                    <option value="Warehouse Staff">Warehouse Staff</option>
                    <option value="Line Cleaner">Line Cleaner</option>
                    <option value="Administrative Staff">Administrative Staff</option>
                </select>
            </div>
            <input type="hidden" id="staffEditId" value="">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('staffForm').requestSubmit()">
            <i class="fas fa-save"></i> Save Staff
        </button>
    `;
    
    Utils.showModal('Add New Staff', content, footer);
    document.getElementById('staffNameInput').focus();
}

/**
 * Generate next staff ID
 */
function generateNextStaffId() {
    if (staffCache.length === 0) {
        return 'ASTRO-001';
    }
    
    const maxNum = staffCache.reduce((max, staff) => {
        const match = staff.staffId.match(/ASTRO-(\d+)/);
        if (match) {
            const num = parseInt(match[1]);
            return num > max ? num : max;
        }
        return max;
    }, 0);
    
    return `ASTRO-${(maxNum + 1).toString().padStart(3, '0')}`;
}

/**
 * Edit Staff
 */
async function editStaff(id) {
    const staff = await DB.get(DB.STORES.STAFF, id);
    if (!staff) {
        Utils.showToast('error', 'Error', 'Staff member not found');
        return;
    }
    
    const content = `
        <form id="staffForm" onsubmit="saveStaff(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Staff ID</label>
                    <input type="text" class="form-control" id="staffIdInput" 
                           value="${Utils.escapeHtml(staff.staffId)}" required readonly>
                </div>
                <div class="form-group">
                    <label class="required">Status</label>
                    <select class="form-control" id="staffStatusInput" required>
                        <option value="active" ${staff.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${staff.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="required">Full Name</label>
                <input type="text" class="form-control" id="staffNameInput" 
                       value="${Utils.escapeHtml(staff.name)}" required>
            </div>
            <div class="form-group">
                <label class="required">Role</label>
                <select class="form-control" id="staffRoleInput" required>
                    <option value="">Select Role</option>
                    <option value="Production Supervisor" ${staff.role === 'Production Supervisor' ? 'selected' : ''}>Production Supervisor</option>
                    <option value="Quality Control Officer" ${staff.role === 'Quality Control Officer' ? 'selected' : ''}>Quality Control Officer</option>
                    <option value="Production Operator" ${staff.role === 'Production Operator' ? 'selected' : ''}>Production Operator</option>
                    <option value="Packaging Technician" ${staff.role === 'Packaging Technician' ? 'selected' : ''}>Packaging Technician</option>
                    <option value="Hygiene Officer" ${staff.role === 'Hygiene Officer' ? 'selected' : ''}>Hygiene Officer</option>
                    <option value="Warehouse Staff" ${staff.role === 'Warehouse Staff' ? 'selected' : ''}>Warehouse Staff</option>
                    <option value="Line Cleaner" ${staff.role === 'Line Cleaner' ? 'selected' : ''}>Line Cleaner</option>
                    <option value="Administrative Staff" ${staff.role === 'Administrative Staff' ? 'selected' : ''}>Administrative Staff</option>
                </select>
            </div>
            <input type="hidden" id="staffEditId" value="${staff.id}">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('staffForm').requestSubmit()">
            <i class="fas fa-save"></i> Update Staff
        </button>
    `;
    
    Utils.showModal('Edit Staff', content, footer);
}

/**
 * Save Staff (Add or Update)
 */
async function saveStaff(event) {
    event.preventDefault();
    
    const editId = document.getElementById('staffEditId').value;
    const staffData = {
        staffId: document.getElementById('staffIdInput').value.trim(),
        name: document.getElementById('staffNameInput').value.trim(),
        role: document.getElementById('staffRoleInput').value,
        status: document.getElementById('staffStatusInput').value
    };
    
    // Validation
    const errors = Utils.validateForm(staffData, {
        name: { required: true, label: 'Full Name', minLength: 2 },
        role: { required: true, label: 'Role' }
    });
    
    if (errors.length > 0) {
        Utils.showToast('error', 'Validation Error', errors[0]);
        return;
    }
    
    try {
        if (editId) {
            // Update existing
            staffData.id = parseInt(editId);
            await DB.update(DB.STORES.STAFF, staffData);
            Utils.showToast('success', 'Success', 'Staff member updated successfully');
        } else {
            // Add new
            await DB.add(DB.STORES.STAFF, staffData);
            Utils.showToast('success', 'Success', 'Staff member added successfully');
        }
        
        closeModal();
        await loadStaff();
    } catch (error) {
        console.error('Error saving staff:', error);
        Utils.showToast('error', 'Error', 'Failed to save staff member');
    }
}

/**
 * Confirm Delete Staff
 */
function confirmDeleteStaff(id) {
    const staff = staffCache.find(s => s.id === id);
    if (!staff) return;
    
    const content = `
        <div style="text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: var(--danger-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                Are you sure you want to delete staff member<br>
                <strong>${Utils.escapeHtml(staff.name)}</strong> (${Utils.escapeHtml(staff.staffId)})?
            </p>
            <p style="color: var(--danger-500); font-size: 14px; margin-top: 12px;">
                This action cannot be undone.
            </p>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="deleteStaff(${id})">
            <i class="fas fa-trash"></i> Delete
        </button>
    `;
    
    Utils.showModal('Confirm Delete', content, footer);
}

/**
 * Delete Staff
 */
async function deleteStaff(id) {
    try {
        await DB.delete(DB.STORES.STAFF, id);
        Utils.showToast('success', 'Deleted', 'Staff member deleted successfully');
        closeModal();
        await loadStaff();
    } catch (error) {
        console.error('Error deleting staff:', error);
        Utils.showToast('error', 'Error', 'Failed to delete staff member');
    }
}

/**
 * Get active staff list
 */
function getActiveStaff() {
    return staffCache.filter(s => s.status === 'active');
}

/**
 * Get staff by ID
 */
function getStaffById(id) {
    return staffCache.find(s => s.id === id);
}

/**
 * Get staff name by ID
 */
function getStaffName(id) {
    const staff = getStaffById(parseInt(id));
    return staff ? staff.name : 'Unknown';
}

/**
 * Build staff dropdown options
 */
function buildStaffOptions(selectedId = null) {
    const activeStaff = getActiveStaff();
    return activeStaff.map(staff => 
        `<option value="${staff.id}" ${staff.id === selectedId ? 'selected' : ''}>
            ${Utils.escapeHtml(staff.name)} (${Utils.escapeHtml(staff.staffId)})
        </option>`
    ).join('');
}

// Export staff module functions
window.Staff = {
    load: loadStaff,
    render: renderStaffTable,
    getActive: getActiveStaff,
    getById: getStaffById,
    getName: getStaffName,
    buildOptions: buildStaffOptions,
    cache: () => staffCache
};
