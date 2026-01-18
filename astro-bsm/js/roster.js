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
        
        // Handle both regular duties and production-linked tasks
        let dutyName, duty, isProductionTask;
        if (assignment.isProductionTask) {
            dutyName = assignment.dutyName || 'Production Task';
            duty = null;
            isProductionTask = true;
        } else {
            dutyName = Duties.getName(assignment.dutyId);
            duty = Duties.getById(assignment.dutyId);
            isProductionTask = false;
        }
        
        const statusClass = assignment.status === 'completed' ? 'status-completed' : 
                          assignment.status === 'in-progress' ? 'status-pending' : '';
        
        return `
            <div class="assignment-item ${isProductionTask ? 'production-linked' : ''}" data-id="${assignment.id}" style="${isProductionTask ? 'border-left: 3px solid var(--success-500);' : ''}">
                <div class="assignment-duty">
                    ${isProductionTask ? '<i class="fas fa-cogs" style="color: var(--success-500); margin-right: 4px;" title="Production Task"></i>' : ''}
                    ${Utils.escapeHtml(dutyName)}
                </div>
                <div class="assignment-staff">
                    <i class="fas fa-user"></i> ${Utils.escapeHtml(staffName)}
                </div>
                ${duty ? `
                    <div class="assignment-time">
                        <i class="fas fa-clock"></i> ${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}
                    </div>
                ` : isProductionTask ? `
                    <div class="assignment-time" style="color: var(--success-500);">
                        <i class="fas fa-industry"></i> Production Task
                    </div>
                ` : ''}
                ${assignment.notes ? `
                    <div class="assignment-notes" style="font-size: 11px; color: var(--gray-500); margin-top: 4px;">
                        <i class="fas fa-sticky-note"></i> ${Utils.escapeHtml(assignment.notes.substring(0, 50))}${assignment.notes.length > 50 ? '...' : ''}
                    </div>
                ` : ''}
                <div class="assignment-status" style="margin-top: 8px;">
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
    cache: () => rosterCache,
    generateFromProduction: generateRosterFromProduction
};

/**
 * Export roster to PDF for WhatsApp sharing
 */
function exportRosterToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const weekDates = Utils.getWeekDates(currentWeek);
    const weekRoster = rosterCache.filter(r => r.weekNumber === currentWeek);
    
    if (weekRoster.length === 0) {
        Utils.showToast('warning', 'No Data', 'No roster assignments for this week to export');
        return;
    }
    
    // Header with company branding
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM', 105, 18, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Weekly Duty Roster', 105, 28, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Week ${currentWeek.split('-W')[1]} of ${currentWeek.split('-W')[0]}`, 105, 38, { align: 'center' });
    
    let yPos = 55;
    
    // Week summary box
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(15, yPos, 180, 25, 3, 3, 'F');
    doc.setDrawColor(26, 54, 93);
    doc.roundedRect(15, yPos, 180, 25, 3, 3, 'S');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('📅 Week Overview', 20, yPos + 8);
    doc.setFont('helvetica', 'normal');
    doc.text(`Monday: ${Utils.formatDateDisplay(weekDates.monday)}`, 20, yPos + 16);
    doc.text(`Wednesday: ${Utils.formatDateDisplay(weekDates.wednesday)}`, 80, yPos + 16);
    doc.text(`Saturday: ${Utils.formatDateDisplay(weekDates.saturday)}`, 140, yPos + 16);
    doc.text(`Total Assignments: ${weekRoster.length}`, 20, yPos + 22);
    
    yPos += 35;
    
    // Working days
    const workingDays = [
        { key: 'monday', name: 'MONDAY', date: weekDates.monday },
        { key: 'wednesday', name: 'WEDNESDAY', date: weekDates.wednesday },
        { key: 'saturday', name: 'SATURDAY', date: weekDates.saturday }
    ];
    
    workingDays.forEach((day, dayIndex) => {
        const dateStr = Utils.formatDate(day.date);
        const dayAssignments = weekRoster.filter(r => r.date === dateStr);
        
        // Check if we need a new page
        if (yPos > 240) {
            doc.addPage();
            yPos = 20;
        }
        
        // Day header
        doc.setFillColor(46, 125, 50);
        doc.rect(15, yPos, 180, 12, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${day.name} - ${Utils.formatDateDisplay(day.date)}`, 20, yPos + 8);
        doc.text(`${dayAssignments.length} assignments`, 180, yPos + 8, { align: 'right' });
        
        yPos += 18;
        doc.setTextColor(0, 0, 0);
        
        if (dayAssignments.length === 0) {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(128, 128, 128);
            doc.text('No assignments scheduled for this day', 20, yPos);
            yPos += 12;
        } else {
            // Table header
            doc.setFillColor(248, 249, 250);
            doc.rect(15, yPos - 3, 180, 10, 'F');
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(60, 60, 60);
            doc.text('#', 18, yPos + 4);
            doc.text('Staff Member', 28, yPos + 4);
            doc.text('Duty / Task', 80, yPos + 4);
            doc.text('Time', 140, yPos + 4);
            doc.text('Status', 170, yPos + 4);
            
            yPos += 12;
            
            // Table rows
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            
            dayAssignments.forEach((assignment, idx) => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                
                const staffName = Staff.getName(assignment.staffId);
                const dutyName = Duties.getName(assignment.dutyId);
                const duty = Duties.getById(assignment.dutyId);
                const timeStr = duty ? `${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}` : '-';
                const statusIcon = assignment.status === 'completed' ? '✅' : '⬜';
                
                // Alternating row colors
                if (idx % 2 === 0) {
                    doc.setFillColor(255, 255, 255);
                } else {
                    doc.setFillColor(250, 250, 250);
                }
                doc.rect(15, yPos - 4, 180, 10, 'F');
                
                doc.setFontSize(9);
                doc.text(`${idx + 1}.`, 18, yPos + 2);
                doc.setFont('helvetica', 'bold');
                doc.text(staffName.substring(0, 25), 28, yPos + 2);
                doc.setFont('helvetica', 'normal');
                doc.text(dutyName.substring(0, 30), 80, yPos + 2);
                doc.setFontSize(8);
                doc.text(timeStr, 140, yPos + 2);
                doc.text(statusIcon, 175, yPos + 2);
                
                yPos += 8;
            });
        }
        
        yPos += 10;
    });
    
    // Production-linked roster indicator
    const productionLinked = weekRoster.filter(r => r.linkedProductionId);
    if (productionLinked.length > 0) {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setFillColor(255, 243, 205);
        doc.roundedRect(15, yPos, 180, 15, 3, 3, 'F');
        doc.setFontSize(9);
        doc.setTextColor(133, 100, 4);
        doc.text(`📋 ${productionLinked.length} assignments are linked to production schedules`, 20, yPos + 9);
        yPos += 20;
    }
    
    // Footer on all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(128, 128, 128);
        doc.line(15, 280, 195, 280);
        doc.text('ASTRO-BSM Factory Operations | Duty Roster Management', 105, 285, { align: 'center' });
        doc.text(`Generated: ${new Date().toLocaleString()}`, 15, 290);
        doc.text(`Page ${i} of ${pageCount}`, 195, 290, { align: 'right' });
    }
    
    // Save PDF
    const fileName = `Duty_Roster_Week${currentWeek.split('-W')[1]}_${currentWeek.split('-W')[0]}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Ready', 'Duty roster exported successfully!');
    
    // Show share modal
    setTimeout(() => {
        showRosterShareModal(fileName);
    }, 500);
}

/**
 * Show roster share modal
 */
function showRosterShareModal(fileName) {
    const content = `
        <div style="text-align: center; padding: 20px;">
            <i class="fab fa-whatsapp" style="font-size: 64px; color: #25D366; margin-bottom: 20px;"></i>
            <h3 style="color: var(--gray-700); margin-bottom: 16px;">Duty Roster PDF Ready!</h3>
            <p style="color: var(--gray-600); margin-bottom: 20px;">
                Your roster has been saved as:<br>
                <strong style="color: var(--primary-600);">${fileName}</strong>
            </p>
            <div style="background: var(--gray-100); border-radius: 8px; padding: 16px; text-align: left;">
                <h4 style="color: var(--gray-700); margin-bottom: 12px;"><i class="fas fa-share-alt"></i> Share Options:</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 15px;">
                    <button class="btn btn-success" onclick="window.open('https://wa.me/?text=Check%20out%20the%20duty%20roster%20for%20this%20week!', '_blank'); closeModal();">
                        <i class="fab fa-whatsapp"></i> Open WhatsApp
                    </button>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 12px; background: #E3F2FD; border-radius: 8px;">
                <p style="color: #1565C0; margin: 0; font-size: 13px;">
                    <i class="fas fa-info-circle"></i> The PDF is in your Downloads folder. 
                    Attach it when sharing on WhatsApp.
                </p>
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-primary" onclick="closeModal()">
            <i class="fas fa-check"></i> Done
        </button>
    `;
    
    Utils.showModal('Share Duty Roster', content, footer);
}

/**
 * Generate roster entries from a production schedule
 * Called when production is scheduled to auto-create duty assignments
 */
async function generateRosterFromProduction(production) {
    if (!production || !production.tasks || !production.assignedStaff) {
        return { success: false, message: 'Invalid production data' };
    }
    
    const productionDate = production.date;
    const weekNumber = Utils.getWeekNumber(new Date(productionDate));
    let assignmentsCreated = 0;
    let duplicatesSkipped = 0;
    
    try {
        // Get existing roster for this week
        const existingRoster = await DB.getAll(DB.STORES.ROSTER);
        const weekRoster = existingRoster.filter(r => r.weekNumber === weekNumber);
        
        // Create duty assignments from production tasks
        for (const task of production.tasks) {
            if (!task.staffId) continue; // Skip unassigned tasks
            
            // Check for duplicates - same staff, same day, same task linked to same production
            const isDuplicate = weekRoster.some(r => 
                r.date === productionDate && 
                r.staffId === task.staffId &&
                r.linkedProductionId === production.id &&
                r.linkedTaskId === task.id
            );
            
            if (isDuplicate) {
                duplicatesSkipped++;
                continue;
            }
            
            // Create roster entry
            const rosterEntry = {
                date: productionDate,
                weekNumber: weekNumber,
                staffId: task.staffId,
                dutyId: null, // Production task, not a predefined duty
                dutyName: task.name, // Store task name directly
                linkedProductionId: production.id,
                linkedTaskId: task.id,
                productName: production.productId,
                notes: `Production Task: ${task.name} (Batch: ${production.batchNumber || 'N/A'})`,
                status: 'pending',
                isProductionTask: true
            };
            
            await DB.add(DB.STORES.ROSTER, rosterEntry);
            assignmentsCreated++;
        }
        
        // Reload roster cache
        rosterCache = await DB.getAll(DB.STORES.ROSTER);
        
        return {
            success: true,
            assignmentsCreated,
            duplicatesSkipped,
            message: `Created ${assignmentsCreated} duty assignments${duplicatesSkipped > 0 ? `, skipped ${duplicatesSkipped} duplicates` : ''}`
        };
    } catch (error) {
        console.error('Error generating roster from production:', error);
        return { success: false, message: 'Failed to generate roster entries' };
    }
}

/**
 * Sync roster with production schedules - ensures no mismatches
 */
async function syncRosterWithProduction() {
    try {
        const productions = await DB.getAll(DB.STORES.PRODUCTION);
        const activeProductions = productions.filter(p => p.status !== 'completed');
        
        let totalCreated = 0;
        let totalSkipped = 0;
        
        for (const production of activeProductions) {
            const result = await generateRosterFromProduction(production);
            if (result.success) {
                totalCreated += result.assignmentsCreated;
                totalSkipped += result.duplicatesSkipped;
            }
        }
        
        if (totalCreated > 0) {
            Utils.showToast('success', 'Roster Synced', `Created ${totalCreated} new assignments from production schedules`);
        }
        
        await loadRoster();
    } catch (error) {
        console.error('Error syncing roster:', error);
        Utils.showToast('error', 'Sync Error', 'Failed to sync roster with production');
    }
}
