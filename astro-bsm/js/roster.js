/**
 * ASTRO-BSM Factory Operations
 * Duty Roster Management Module
 */

// Cache for roster data
let rosterCache = [];
let currentWeek = Utils.getWeekNumber(new Date());

/**
 * Load roster data
 */
async function loadRoster() {
    try {
        rosterCache = await DB.getAll(DB.STORES.ROSTER);
        populateWeekSelector();
        loadRosterForWeek();
        return rosterCache;
    } catch (error) {
        console.error('Error loading roster:', error);
        Utils.showToast('error', 'Error', 'Failed to load roster data');
        return [];
    }
}

/**
 * Populate week selector dropdown
 */
function populateWeekSelector() {
    const selector = document.getElementById('rosterWeekSelect');
    if (!selector) return;
    
    const today = new Date();
    const options = [];
    
    // Generate options for past 4 weeks and next 8 weeks
    for (let i = -4; i <= 8; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + (i * 7));
        const weekNum = Utils.getWeekNumber(date);
        const weekDates = Utils.getWeekDates(weekNum);
        
        const label = `Week ${weekNum.split('-W')[1]} (${Utils.formatDateDisplay(weekDates.monday).split(',')[1].trim()})`;
        const selected = weekNum === currentWeek ? 'selected' : '';
        options.push(`<option value="${weekNum}" ${selected}>${label}</option>`);
    }
    
    selector.innerHTML = options.join('');
}

/**
 * Load roster for selected week
 */
function loadRosterForWeek() {
    const selector = document.getElementById('rosterWeekSelect');
    if (selector) {
        currentWeek = selector.value || Utils.getWeekNumber(new Date());
    }
    
    const weekDates = Utils.getWeekDates(currentWeek);
    
    // Update date labels
    document.getElementById('mondayDate').textContent = Utils.formatDateDisplay(weekDates.monday);
    document.getElementById('wednesdayDate').textContent = Utils.formatDateDisplay(weekDates.wednesday);
    document.getElementById('saturdayDate').textContent = Utils.formatDateDisplay(weekDates.saturday);
    
    // Filter roster for current week
    const weekRoster = rosterCache.filter(r => r.weekNumber === currentWeek);
    
    // Render assignments for each day
    renderDayAssignments('monday', Utils.formatDate(weekDates.monday), weekRoster);
    renderDayAssignments('wednesday', Utils.formatDate(weekDates.wednesday), weekRoster);
    renderDayAssignments('saturday', Utils.formatDate(weekDates.saturday), weekRoster);
}

/**
 * Render assignments for a specific day
 */
function renderDayAssignments(day, date, weekRoster) {
    const container = document.getElementById(`${day}Assignments`);
    if (!container) return;
    
    const dayAssignments = weekRoster.filter(r => r.date === date);
    
    if (dayAssignments.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 20px;">
                <i class="fas fa-calendar-times" style="font-size: 24px; color: var(--gray-400); margin-bottom: 8px;"></i>
                <p style="font-size: 14px;">No assignments</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = dayAssignments.map(assignment => {
        const staffName = Staff.getName(assignment.staffId);
        const dutyName = Duties.getName(assignment.dutyId);
        const duty = Duties.getById(assignment.dutyId);
        
        const statusClass = assignment.status === 'completed' ? 'status-completed' : 
                          assignment.status === 'in-progress' ? 'status-pending' : '';
        
        return `
            <div class="assignment-item" data-id="${assignment.id}">
                <div class="assignment-duty">${Utils.escapeHtml(dutyName)}</div>
                <div class="assignment-staff">
                    <i class="fas fa-user"></i> ${Utils.escapeHtml(staffName)}
                </div>
                ${duty ? `
                    <div class="assignment-time">
                        <i class="fas fa-clock"></i> ${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}
                    </div>
                ` : ''}
                <div class="assignment-status">
                    ${assignment.status !== 'pending' ? `
                        <span class="status-badge ${statusClass}">${Utils.capitalize(assignment.status)}</span>
                    ` : ''}
                    ${assignment.status !== 'completed' ? `
                        <button class="btn btn-sm btn-success" onclick="completeAssignment(${assignment.id})" title="Mark Complete">
                            <i class="fas fa-check"></i>
                        </button>
                    ` : ''}
                    <button class="btn btn-sm btn-secondary" onclick="editAssignment(${assignment.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Show Add Roster Modal
 */
function showAddRosterModal() {
    const weekDates = Utils.getWeekDates(currentWeek);
    
    const content = `
        <form id="rosterForm" onsubmit="saveRosterAssignment(event)">
            <div class="form-group">
                <label class="required">Working Day</label>
                <select class="form-control" id="rosterDayInput" required onchange="updateRosterDate()">
                    <option value="monday">Monday - ${Utils.formatDateDisplay(weekDates.monday)}</option>
                    <option value="wednesday">Wednesday - ${Utils.formatDateDisplay(weekDates.wednesday)}</option>
                    <option value="saturday">Saturday - ${Utils.formatDateDisplay(weekDates.saturday)}</option>
                </select>
            </div>
            <div class="form-group">
                <label class="required">Staff Member</label>
                <select class="form-control" id="rosterStaffInput" required>
                    <option value="">Select Staff</option>
                    ${Staff.buildOptions()}
                </select>
            </div>
            <div class="form-group">
                <label class="required">Duty</label>
                <select class="form-control" id="rosterDutyInput" required>
                    <option value="">Select Duty</option>
                    ${Duties.buildOptions()}
                </select>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="rosterNotesInput" 
                          placeholder="Optional notes for this assignment"></textarea>
            </div>
            <input type="hidden" id="rosterDateInput" value="${Utils.formatDate(weekDates.monday)}">
            <input type="hidden" id="rosterWeekInput" value="${currentWeek}">
            <input type="hidden" id="rosterEditId" value="">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('rosterForm').requestSubmit()">
            <i class="fas fa-save"></i> Assign Duty
        </button>
    `;
    
    Utils.showModal('Assign Duty', content, footer);
}

/**
 * Update roster date based on selected day
 */
function updateRosterDate() {
    const day = document.getElementById('rosterDayInput').value;
    const weekDates = Utils.getWeekDates(currentWeek);
    document.getElementById('rosterDateInput').value = Utils.formatDate(weekDates[day]);
}

/**
 * Save roster assignment
 */
async function saveRosterAssignment(event) {
    event.preventDefault();
    
    const editId = document.getElementById('rosterEditId').value;
    const rosterData = {
        date: document.getElementById('rosterDateInput').value,
        weekNumber: document.getElementById('rosterWeekInput').value,
        staffId: parseInt(document.getElementById('rosterStaffInput').value),
        dutyId: parseInt(document.getElementById('rosterDutyInput').value),
        notes: document.getElementById('rosterNotesInput').value.trim(),
        status: 'pending'
    };
    
    // Validation
    if (!rosterData.staffId || !rosterData.dutyId) {
        Utils.showToast('error', 'Validation Error', 'Please select both staff and duty');
        return;
    }
    
    // Check for duplicate assignment
    const existing = rosterCache.find(r => 
        r.date === rosterData.date && 
        r.staffId === rosterData.staffId && 
        r.dutyId === rosterData.dutyId &&
        (!editId || r.id !== parseInt(editId))
    );
    
    if (existing) {
        Utils.showToast('warning', 'Duplicate', 'This staff member is already assigned to this duty on this day');
        return;
    }
    
    try {
        if (editId) {
            rosterData.id = parseInt(editId);
            const existingRecord = await DB.get(DB.STORES.ROSTER, rosterData.id);
            rosterData.status = existingRecord.status; // Preserve status
            await DB.update(DB.STORES.ROSTER, rosterData);
            Utils.showToast('success', 'Success', 'Assignment updated successfully');
        } else {
            await DB.add(DB.STORES.ROSTER, rosterData);
            Utils.showToast('success', 'Success', 'Duty assigned successfully');
        }
        
        closeModal();
        await loadRoster();
    } catch (error) {
        console.error('Error saving roster:', error);
        Utils.showToast('error', 'Error', 'Failed to save assignment');
    }
}

/**
 * Edit assignment
 */
async function editAssignment(id) {
    const assignment = await DB.get(DB.STORES.ROSTER, id);
    if (!assignment) {
        Utils.showToast('error', 'Error', 'Assignment not found');
        return;
    }
    
    const weekDates = Utils.getWeekDates(assignment.weekNumber);
    const dayName = Utils.getDayName(assignment.date);
    
    const content = `
        <form id="rosterForm" onsubmit="saveRosterAssignment(event)">
            <div class="form-group">
                <label class="required">Working Day</label>
                <select class="form-control" id="rosterDayInput" required onchange="updateRosterDate()">
                    <option value="monday" ${dayName === 'monday' ? 'selected' : ''}>Monday - ${Utils.formatDateDisplay(weekDates.monday)}</option>
                    <option value="wednesday" ${dayName === 'wednesday' ? 'selected' : ''}>Wednesday - ${Utils.formatDateDisplay(weekDates.wednesday)}</option>
                    <option value="saturday" ${dayName === 'saturday' ? 'selected' : ''}>Saturday - ${Utils.formatDateDisplay(weekDates.saturday)}</option>
                </select>
            </div>
            <div class="form-group">
                <label class="required">Staff Member</label>
                <select class="form-control" id="rosterStaffInput" required>
                    <option value="">Select Staff</option>
                    ${Staff.buildOptions(assignment.staffId)}
                </select>
            </div>
            <div class="form-group">
                <label class="required">Duty</label>
                <select class="form-control" id="rosterDutyInput" required>
                    <option value="">Select Duty</option>
                    ${Duties.buildOptions(assignment.dutyId)}
                </select>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="rosterNotesInput">${Utils.escapeHtml(assignment.notes || '')}</textarea>
            </div>
            <input type="hidden" id="rosterDateInput" value="${assignment.date}">
            <input type="hidden" id="rosterWeekInput" value="${assignment.weekNumber}">
            <input type="hidden" id="rosterEditId" value="${assignment.id}">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="deleteAssignment(${assignment.id})" style="margin-right: auto;">
            <i class="fas fa-trash"></i> Delete
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('rosterForm').requestSubmit()">
            <i class="fas fa-save"></i> Update
        </button>
    `;
    
    Utils.showModal('Edit Assignment', content, footer);
}

/**
 * Complete assignment
 */
async function completeAssignment(id) {
    try {
        const assignment = await DB.get(DB.STORES.ROSTER, id);
        if (!assignment) return;
        
        assignment.status = 'completed';
        assignment.completedAt = Utils.getTimestamp();
        assignment.completedBy = await DB.getSetting('currentUser') || 'Unknown';
        
        await DB.update(DB.STORES.ROSTER, assignment);
        Utils.showToast('success', 'Completed', 'Assignment marked as completed');
        await loadRoster();
        updatePendingTasksCount();
    } catch (error) {
        console.error('Error completing assignment:', error);
        Utils.showToast('error', 'Error', 'Failed to complete assignment');
    }
}

/**
 * Delete assignment
 */
async function deleteAssignment(id) {
    try {
        await DB.delete(DB.STORES.ROSTER, id);
        Utils.showToast('success', 'Deleted', 'Assignment deleted');
        closeModal();
        await loadRoster();
    } catch (error) {
        console.error('Error deleting assignment:', error);
        Utils.showToast('error', 'Error', 'Failed to delete assignment');
    }
}

/**
 * Generate weekly roster automatically
 */
async function generateWeeklyRoster() {
    const activeStaff = Staff.getActive();
    const activeDuties = Duties.getActive();
    
    if (activeStaff.length === 0) {
        Utils.showToast('warning', 'No Staff', 'Please add active staff members first');
        return;
    }
    
    if (activeDuties.length === 0) {
        Utils.showToast('warning', 'No Duties', 'Please add active duties first');
        return;
    }
    
    const content = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="fas fa-magic" style="font-size: 48px; color: var(--primary-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                This will automatically generate duty assignments for <strong>Week ${currentWeek.split('-W')[1]}</strong>
                based on rotational logic.
            </p>
        </div>
        
        <div style="background: var(--warning-100); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
            <p style="color: var(--warning-500); font-size: 14px; margin: 0;">
                <i class="fas fa-exclamation-triangle"></i>
                Existing assignments for this week will be preserved. Only missing slots will be filled.
            </p>
        </div>
        
        <div style="background: var(--gray-50); padding: 16px; border-radius: 8px;">
            <p style="margin: 0 0 8px 0;"><strong>Staff to assign:</strong> ${activeStaff.length} members</p>
            <p style="margin: 0 0 8px 0;"><strong>Duties to fill:</strong> ${activeDuties.length} duties</p>
            <p style="margin: 0;"><strong>Working days:</strong> Monday, Wednesday, Saturday</p>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="executeAutoGenerate()">
            <i class="fas fa-magic"></i> Generate Roster
        </button>
    `;
    
    Utils.showModal('Auto-Generate Roster', content, footer);
}

/**
 * Execute auto-generate
 */
async function executeAutoGenerate() {
    const activeStaff = Staff.getActive();
    const activeDuties = Duties.getActive();
    const weekDates = Utils.getWeekDates(currentWeek);
    const workingDays = ['monday', 'wednesday', 'saturday'];
    
    let assignmentsCreated = 0;
    
    try {
        // Get existing assignments for this week
        const existingAssignments = rosterCache.filter(r => r.weekNumber === currentWeek);
        
        // For each working day
        for (const day of workingDays) {
            const date = Utils.formatDate(weekDates[day]);
            const dayAssignments = existingAssignments.filter(a => a.date === date);
            const assignedDutyIds = dayAssignments.map(a => a.dutyId);
            
            // Find duties not yet assigned for this day
            const unassignedDuties = activeDuties.filter(d => !assignedDutyIds.includes(d.id));
            
            // Find staff not yet assigned for this day
            const assignedStaffIds = dayAssignments.map(a => a.staffId);
            let availableStaff = activeStaff.filter(s => !assignedStaffIds.includes(s.id));
            
            // Assign unassigned duties to available staff
            for (const duty of unassignedDuties) {
                if (availableStaff.length === 0) {
                    // If no available staff, reset and allow double assignments
                    availableStaff = [...activeStaff];
                }
                
                // Pick a staff member (simple rotation based on duty index)
                const staffIndex = activeDuties.indexOf(duty) % availableStaff.length;
                const staff = availableStaff[staffIndex];
                
                // Create assignment
                await DB.add(DB.STORES.ROSTER, {
                    date,
                    weekNumber: currentWeek,
                    staffId: staff.id,
                    dutyId: duty.id,
                    notes: 'Auto-generated',
                    status: 'pending'
                });
                
                assignmentsCreated++;
                
                // Remove staff from available list
                availableStaff = availableStaff.filter(s => s.id !== staff.id);
            }
        }
        
        closeModal();
        
        if (assignmentsCreated > 0) {
            Utils.showToast('success', 'Generated', `Created ${assignmentsCreated} duty assignments`);
            await loadRoster();
        } else {
            Utils.showToast('info', 'Complete', 'All duties are already assigned for this week');
        }
    } catch (error) {
        console.error('Error generating roster:', error);
        Utils.showToast('error', 'Error', 'Failed to generate roster');
    }
}

/**
 * Get today's schedule
 */
async function getTodaySchedule() {
    const today = Utils.formatDate(new Date());
    const todayAssignments = rosterCache.filter(r => r.date === today);
    
    return todayAssignments.map(a => ({
        ...a,
        staffName: Staff.getName(a.staffId),
        dutyName: Duties.getName(a.dutyId),
        duty: Duties.getById(a.dutyId)
    }));
}

/**
 * Update pending tasks count
 */
async function updatePendingTasksCount() {
    const today = Utils.formatDate(new Date());
    const pendingCount = rosterCache.filter(r => 
        r.date === today && r.status !== 'completed'
    ).length;
    
    const statElement = document.getElementById('statPendingTasks');
    if (statElement) {
        statElement.textContent = pendingCount;
    }
}

// Export roster module functions
window.Roster = {
    load: loadRoster,
    loadForWeek: loadRosterForWeek,
    getTodaySchedule,
    updatePendingCount: updatePendingTasksCount,
    getCurrentWeek: () => currentWeek,
    cache: () => rosterCache
};
