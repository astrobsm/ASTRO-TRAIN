/**
 * ASTRO-BSM Factory Operations
 * Production Scheduling Module
 */

// Cache for production data
let productionCache = [];

// Production stages/tasks
const PRODUCTION_STAGES = [
    { id: 'raw_material_prep', name: 'Raw Material Preparation', order: 1 },
    { id: 'packaging_prep', name: 'Packaging Preparation', order: 2 },
    { id: 'compounding', name: 'Compounding', order: 3 },
    { id: 'packaging', name: 'Packaging', order: 4 },
    { id: 'transfer', name: 'Transfer to Warehouse', order: 5 },
    { id: 'cleaning', name: 'Equipment Cleaning', order: 6 },
    { id: 'line_clearance', name: 'Line Clearance', order: 7 }
];

// Product list
const PRODUCTS = [
    { id: 'wound_clex', name: 'WOUND CLEX® Solution', unit: 'bottles' },
    { id: 'hera_gel', name: 'HERA Wound Gel', unit: 'tubes' },
    { id: 'wound_gauze', name: 'Wound Care Gauze', unit: 'packs' },
    { id: 'sanitizer', name: 'Hand Sanitizer', unit: 'bottles' },
    { id: 'disinfectant', name: 'Surface Disinfectant', unit: 'liters' }
];

/**
 * Load all production schedules
 */
async function loadProduction() {
    try {
        productionCache = await DB.getAll(DB.STORES.PRODUCTION);
        renderProductionList();
        updateProductionStats();
        return productionCache;
    } catch (error) {
        console.error('Error loading production:', error);
        Utils.showToast('error', 'Error', 'Failed to load production data');
        return [];
    }
}

/**
 * Render production list
 */
function renderProductionList() {
    const container = document.getElementById('productionList');
    
    if (!productionCache || productionCache.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 60px;">
                <i class="fas fa-flask" style="font-size: 64px; color: var(--gray-400); margin-bottom: 20px;"></i>
                <h3 style="color: var(--gray-600); margin-bottom: 8px;">No Production Scheduled</h3>
                <p style="color: var(--gray-500);">Click "New Production Schedule" to plan your next production run.</p>
            </div>
        `;
        return;
    }
    
    // Sort by date (most recent first)
    const sorted = [...productionCache].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sorted.map(production => {
        const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
        const completedTasks = production.tasks ? production.tasks.filter(t => t.completed).length : 0;
        const totalTasks = production.tasks ? production.tasks.length : 0;
        const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        return `
            <div class="production-card" data-id="${production.id}">
                <div class="production-header">
                    <div class="production-info">
                        <h3>${Utils.escapeHtml(product.name)}</h3>
                        <div class="production-meta">
                            <span><i class="fas fa-calendar"></i> ${Utils.formatDateDisplay(production.date)}</span>
                            <span><i class="fas fa-clock"></i> ${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}</span>
                            <span><i class="fas fa-boxes"></i> Target: ${production.targetQuantity} ${product.unit}</span>
                        </div>
                    </div>
                    <span class="production-status ${production.status}">${Utils.capitalize(production.status)}</span>
                </div>
                
                <div class="production-body">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h4 style="color: var(--gray-700);"><i class="fas fa-tasks" style="color: var(--primary-500);"></i> Production Tasks</h4>
                        <span style="color: var(--gray-600); font-size: 14px;">
                            ${completedTasks}/${totalTasks} completed (${progress}%)
                        </span>
                    </div>
                    
                    <div style="background: var(--gray-200); height: 8px; border-radius: 4px; margin-bottom: 16px;">
                        <div style="background: ${progress === 100 ? 'var(--success-500)' : 'var(--primary-500)'}; height: 100%; width: ${progress}%; border-radius: 4px; transition: width 0.3s;"></div>
                    </div>
                    
                    <div class="production-tasks">
                        <div class="task-row task-header">
                            <div>Task</div>
                            <div>Assigned To</div>
                            <div>Time</div>
                            <div>Status</div>
                            <div>Verified</div>
                        </div>
                        ${production.tasks ? production.tasks.map(task => `
                            <div class="task-row" data-task-id="${task.id}">
                                <div class="task-name">${Utils.escapeHtml(task.name)}</div>
                                <div class="task-staff">${task.staffId ? Staff.getName(task.staffId) : '-'}</div>
                                <div class="task-time">${task.startTime ? Utils.formatTime(task.startTime) : '-'}</div>
                                <div>
                                    <span class="status-badge status-${task.completed ? 'completed' : 'pending'}">
                                        ${task.completed ? 'Done' : 'Pending'}
                                    </span>
                                </div>
                                <div class="task-checkbox">
                                    <input type="checkbox" 
                                           ${task.completed ? 'checked' : ''} 
                                           onchange="toggleTaskCompletion(${production.id}, '${task.id}', this.checked)"
                                           ${production.status === 'completed' ? 'disabled' : ''}>
                                </div>
                            </div>
                        `).join('') : '<div class="task-row"><div colspan="5" class="empty-state">No tasks defined</div></div>'}
                    </div>
                </div>
                
                <div class="production-footer">
                    <div style="font-size: 14px; color: var(--gray-500);">
                        Created: ${Utils.formatDateTime(production.createdAt)}
                    </div>
                    <div style="display: flex; gap: 8px;">
                        ${production.status !== 'completed' ? `
                            <button class="btn btn-sm btn-success" onclick="completeProduction(${production.id})">
                                <i class="fas fa-check"></i> Complete
                            </button>
                        ` : ''}
                        <button class="btn btn-sm btn-secondary" onclick="editProduction(${production.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="viewProductionDetails(${production.id})">
                            <i class="fas fa-eye"></i> Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update production statistics
 */
function updateProductionStats() {
    const today = new Date();
    const upcomingCount = productionCache.filter(p => 
        new Date(p.date) >= today && p.status !== 'completed'
    ).length;
    
    const statElement = document.getElementById('statProductionCount');
    if (statElement) {
        statElement.textContent = upcomingCount;
    }
}

/**
 * Show Add Production Modal
 */
function showAddProductionModal() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const content = `
        <form id="productionForm" onsubmit="saveProduction(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Production Date</label>
                    <input type="date" class="form-control" id="productionDateInput" 
                           value="${Utils.formatDate(tomorrow)}" required>
                </div>
                <div class="form-group">
                    <label class="required">Product</label>
                    <select class="form-control" id="productionProductInput" required>
                        <option value="">Select Product</option>
                        ${PRODUCTS.map(p => `<option value="${p.id}">${Utils.escapeHtml(p.name)}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="productionStartTimeInput" 
                           value="08:30" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="productionEndTimeInput" 
                           value="17:00" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Target Quantity</label>
                    <input type="number" class="form-control" id="productionQuantityInput" 
                           placeholder="e.g., 1000" min="1" required>
                </div>
                <div class="form-group">
                    <label>Batch Number</label>
                    <input type="text" class="form-control" id="productionBatchInput" 
                           placeholder="e.g., BTH-2026-001">
                </div>
            </div>
            
            <div class="form-group">
                <label>Required Staff</label>
                <div id="staffSelectionContainer" style="max-height: 150px; overflow-y: auto; border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${Staff.getActive().map(staff => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="staff_${staff.id}" name="selectedStaff" value="${staff.id}">
                            <label for="staff_${staff.id}">${Utils.escapeHtml(staff.name)} (${Utils.escapeHtml(staff.role)})</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Production Tasks</label>
                <div id="tasksContainer" style="border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${PRODUCTION_STAGES.map(stage => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="task_${stage.id}" name="selectedTasks" value="${stage.id}" checked>
                            <label for="task_${stage.id}">${Utils.escapeHtml(stage.name)}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="productionNotesInput" 
                          placeholder="Special instructions or remarks"></textarea>
            </div>
            
            <input type="hidden" id="productionEditId" value="">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('productionForm').requestSubmit()">
            <i class="fas fa-save"></i> Schedule Production
        </button>
    `;
    
    Utils.showModal('New Production Schedule', content, footer);
}

/**
 * Save Production
 */
async function saveProduction(event) {
    event.preventDefault();
    
    const editId = document.getElementById('productionEditId').value;
    
    // Get selected staff
    const selectedStaff = [];
    document.querySelectorAll('input[name="selectedStaff"]:checked').forEach(cb => {
        selectedStaff.push(parseInt(cb.value));
    });
    
    // Get selected tasks
    const selectedTasks = [];
    document.querySelectorAll('input[name="selectedTasks"]:checked').forEach(cb => {
        const stage = PRODUCTION_STAGES.find(s => s.id === cb.value);
        if (stage) {
            selectedTasks.push({
                id: stage.id,
                name: stage.name,
                order: stage.order,
                staffId: null,
                startTime: null,
                endTime: null,
                completed: false,
                remarks: ''
            });
        }
    });
    
    // Sort tasks by order
    selectedTasks.sort((a, b) => a.order - b.order);
    
    const productionData = {
        date: document.getElementById('productionDateInput').value,
        productId: document.getElementById('productionProductInput').value,
        startTime: document.getElementById('productionStartTimeInput').value,
        endTime: document.getElementById('productionEndTimeInput').value,
        targetQuantity: parseInt(document.getElementById('productionQuantityInput').value),
        batchNumber: document.getElementById('productionBatchInput').value.trim(),
        assignedStaff: selectedStaff,
        tasks: selectedTasks,
        notes: document.getElementById('productionNotesInput').value.trim(),
        status: 'scheduled'
    };
    
    // Validation
    if (!productionData.productId) {
        Utils.showToast('error', 'Validation Error', 'Please select a product');
        return;
    }
    
    if (selectedTasks.length === 0) {
        Utils.showToast('error', 'Validation Error', 'Please select at least one production task');
        return;
    }
    
    try {
        if (editId) {
            productionData.id = parseInt(editId);
            await DB.update(DB.STORES.PRODUCTION, productionData);
            Utils.showToast('success', 'Success', 'Production schedule updated');
        } else {
            await DB.add(DB.STORES.PRODUCTION, productionData);
            Utils.showToast('success', 'Success', 'Production scheduled successfully');
        }
        
        closeModal();
        await loadProduction();
    } catch (error) {
        console.error('Error saving production:', error);
        Utils.showToast('error', 'Error', 'Failed to save production schedule');
    }
}

/**
 * Toggle task completion
 */
async function toggleTaskCompletion(productionId, taskId, completed) {
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, productionId);
        if (!production) return;
        
        const task = production.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = completed;
            task.completedAt = completed ? Utils.getTimestamp() : null;
            task.completedBy = completed ? (await DB.getSetting('currentUser') || 'Unknown') : null;
        }
        
        // Update production status if all tasks completed
        const allCompleted = production.tasks.every(t => t.completed);
        if (allCompleted && production.status !== 'completed') {
            production.status = 'in-progress';
        }
        
        await DB.update(DB.STORES.PRODUCTION, production);
        await loadProduction();
    } catch (error) {
        console.error('Error toggling task:', error);
        Utils.showToast('error', 'Error', 'Failed to update task');
    }
}

/**
 * Complete Production
 */
async function completeProduction(id) {
    const content = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="fas fa-check-circle" style="font-size: 48px; color: var(--success-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                Are you sure you want to mark this production as <strong>completed</strong>?
            </p>
        </div>
        
        <div class="form-group">
            <label>Actual Quantity Produced</label>
            <input type="number" class="form-control" id="actualQuantityInput" placeholder="Enter actual quantity" min="0">
        </div>
        
        <div class="form-group">
            <label>Completion Notes</label>
            <textarea class="form-control" id="completionNotesInput" placeholder="Any remarks about this production run"></textarea>
        </div>
        
        <div class="form-group">
            <label class="required">Supervisor Approval</label>
            <input type="text" class="form-control" id="supervisorApprovalInput" placeholder="Enter supervisor name" required>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-success" onclick="executeCompleteProduction(${id})">
            <i class="fas fa-check"></i> Complete Production
        </button>
    `;
    
    Utils.showModal('Complete Production', content, footer);
}

/**
 * Execute complete production
 */
async function executeCompleteProduction(id) {
    const supervisor = document.getElementById('supervisorApprovalInput').value.trim();
    if (!supervisor) {
        Utils.showToast('error', 'Required', 'Supervisor approval is required');
        return;
    }
    
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, id);
        if (!production) return;
        
        production.status = 'completed';
        production.completedAt = Utils.getTimestamp();
        production.actualQuantity = parseInt(document.getElementById('actualQuantityInput').value) || production.targetQuantity;
        production.completionNotes = document.getElementById('completionNotesInput').value.trim();
        production.supervisorApproval = supervisor;
        
        // Mark all tasks as completed
        production.tasks.forEach(task => {
            if (!task.completed) {
                task.completed = true;
                task.completedAt = Utils.getTimestamp();
            }
        });
        
        await DB.update(DB.STORES.PRODUCTION, production);
        closeModal();
        Utils.showToast('success', 'Completed', 'Production marked as completed');
        await loadProduction();
    } catch (error) {
        console.error('Error completing production:', error);
        Utils.showToast('error', 'Error', 'Failed to complete production');
    }
}

/**
 * View Production Details
 */
async function viewProductionDetails(id) {
    const production = await DB.get(DB.STORES.PRODUCTION, id);
    if (!production) {
        Utils.showToast('error', 'Error', 'Production not found');
        return;
    }
    
    const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
    const assignedStaffNames = production.assignedStaff.map(id => Staff.getName(id)).join(', ') || 'None assigned';
    
    const content = `
        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--primary-800); margin-bottom: 4px;">${Utils.escapeHtml(product.name)}</h3>
            <span class="status-badge status-${production.status === 'completed' ? 'completed' : production.status === 'in-progress' ? 'pending' : 'active'}">
                ${Utils.capitalize(production.status)}
            </span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px;">
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Date</div>
                <div style="font-weight: 600;">${Utils.formatDateDisplay(production.date)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Time</div>
                <div style="font-weight: 600;">${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Target Quantity</div>
                <div style="font-weight: 600;">${production.targetQuantity} ${product.unit}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Batch Number</div>
                <div style="font-weight: 600;">${production.batchNumber || '-'}</div>
            </div>
        </div>
        
        ${production.status === 'completed' ? `
            <div style="background: var(--success-100); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="color: var(--success-500); margin-bottom: 8px;"><i class="fas fa-check-circle"></i> Completion Details</h4>
                <p style="margin: 4px 0;"><strong>Actual Quantity:</strong> ${production.actualQuantity || production.targetQuantity} ${product.unit}</p>
                <p style="margin: 4px 0;"><strong>Completed:</strong> ${Utils.formatDateTime(production.completedAt)}</p>
                <p style="margin: 4px 0;"><strong>Approved By:</strong> ${production.supervisorApproval || '-'}</p>
                ${production.completionNotes ? `<p style="margin: 4px 0;"><strong>Notes:</strong> ${Utils.escapeHtml(production.completionNotes)}</p>` : ''}
            </div>
        ` : ''}
        
        <div style="margin-bottom: 16px;">
            <h4 style="color: var(--gray-700); margin-bottom: 8px;"><i class="fas fa-users" style="color: var(--primary-500);"></i> Assigned Staff</h4>
            <p style="color: var(--gray-600);">${Utils.escapeHtml(assignedStaffNames)}</p>
        </div>
        
        <div>
            <h4 style="color: var(--gray-700); margin-bottom: 8px;"><i class="fas fa-tasks" style="color: var(--primary-500);"></i> Tasks</h4>
            <div style="border: 1px solid var(--gray-200); border-radius: 8px; overflow: hidden;">
                ${production.tasks.map(task => `
                    <div style="display: flex; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid var(--gray-100);">
                        <span>${Utils.escapeHtml(task.name)}</span>
                        <span class="status-badge status-${task.completed ? 'completed' : 'pending'}">
                            ${task.completed ? 'Done' : 'Pending'}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        ${production.status !== 'completed' ? `
            <button class="btn btn-primary" onclick="closeModal(); editProduction(${production.id})">
                <i class="fas fa-edit"></i> Edit
            </button>
        ` : ''}
    `;
    
    Utils.showModal('Production Details', content, footer);
}

/**
 * Edit Production
 */
async function editProduction(id) {
    const production = await DB.get(DB.STORES.PRODUCTION, id);
    if (!production) {
        Utils.showToast('error', 'Error', 'Production not found');
        return;
    }
    
    const selectedTaskIds = production.tasks.map(t => t.id);
    
    const content = `
        <form id="productionForm" onsubmit="saveProduction(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Production Date</label>
                    <input type="date" class="form-control" id="productionDateInput" 
                           value="${production.date}" required>
                </div>
                <div class="form-group">
                    <label class="required">Product</label>
                    <select class="form-control" id="productionProductInput" required>
                        <option value="">Select Product</option>
                        ${PRODUCTS.map(p => `<option value="${p.id}" ${p.id === production.productId ? 'selected' : ''}>${Utils.escapeHtml(p.name)}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="productionStartTimeInput" 
                           value="${production.startTime}" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="productionEndTimeInput" 
                           value="${production.endTime}" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Target Quantity</label>
                    <input type="number" class="form-control" id="productionQuantityInput" 
                           value="${production.targetQuantity}" min="1" required>
                </div>
                <div class="form-group">
                    <label>Batch Number</label>
                    <input type="text" class="form-control" id="productionBatchInput" 
                           value="${Utils.escapeHtml(production.batchNumber || '')}">
                </div>
            </div>
            
            <div class="form-group">
                <label>Required Staff</label>
                <div id="staffSelectionContainer" style="max-height: 150px; overflow-y: auto; border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${Staff.getActive().map(staff => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="staff_${staff.id}" name="selectedStaff" value="${staff.id}"
                                   ${production.assignedStaff.includes(staff.id) ? 'checked' : ''}>
                            <label for="staff_${staff.id}">${Utils.escapeHtml(staff.name)} (${Utils.escapeHtml(staff.role)})</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Production Tasks</label>
                <div id="tasksContainer" style="border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${PRODUCTION_STAGES.map(stage => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="task_${stage.id}" name="selectedTasks" value="${stage.id}"
                                   ${selectedTaskIds.includes(stage.id) ? 'checked' : ''}>
                            <label for="task_${stage.id}">${Utils.escapeHtml(stage.name)}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="productionNotesInput">${Utils.escapeHtml(production.notes || '')}</textarea>
            </div>
            
            <input type="hidden" id="productionEditId" value="${production.id}">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="deleteProduction(${production.id})" style="margin-right: auto;">
            <i class="fas fa-trash"></i> Delete
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('productionForm').requestSubmit()">
            <i class="fas fa-save"></i> Update
        </button>
    `;
    
    Utils.showModal('Edit Production Schedule', content, footer);
}

/**
 * Delete Production
 */
async function deleteProduction(id) {
    try {
        await DB.delete(DB.STORES.PRODUCTION, id);
        closeModal();
        Utils.showToast('success', 'Deleted', 'Production schedule deleted');
        await loadProduction();
    } catch (error) {
        console.error('Error deleting production:', error);
        Utils.showToast('error', 'Error', 'Failed to delete production');
    }
}

/**
 * Get upcoming production
 */
function getUpcomingProduction() {
    const today = Utils.formatDate(new Date());
    return productionCache
        .filter(p => p.date >= today && p.status !== 'completed')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
}

// Export production module
window.Production = {
    load: loadProduction,
    render: renderProductionList,
    getUpcoming: getUpcomingProduction,
    STAGES: PRODUCTION_STAGES,
    PRODUCTS,
    cache: () => productionCache
};
