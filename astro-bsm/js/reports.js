/**
 * ASTRO-BSM Factory Operations
 * Reports & Export Module
 */

/**
 * Generate Report based on selected type
 */
async function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const preview = document.getElementById('reportPreview');
    
    let content = '';
    
    switch (reportType) {
        case 'daily':
            content = await generateDailyDutyReport();
            break;
        case 'weekly':
            content = await generateWeeklyRosterReport();
            break;
        case 'production':
            content = await generateProductionReport();
            break;
        default:
            content = '<p class="empty-state">Select a report type</p>';
    }
    
    preview.innerHTML = content;
}

/**
 * Generate Daily Duty Report
 */
async function generateDailyDutyReport() {
    const today = Utils.formatDate(new Date());
    const rosterData = await DB.getAll(DB.STORES.ROSTER);
    const todayAssignments = rosterData.filter(r => r.date === today);
    
    const completedCount = todayAssignments.filter(a => a.status === 'completed').length;
    const pendingCount = todayAssignments.filter(a => a.status !== 'completed').length;
    
    let tableRows = '';
    if (todayAssignments.length > 0) {
        tableRows = todayAssignments.map(a => {
            const staffName = Staff.getName(a.staffId);
            const dutyName = Duties.getName(a.dutyId);
            const duty = Duties.getById(a.dutyId);
            
            return `
                <tr>
                    <td>${Utils.escapeHtml(dutyName)}</td>
                    <td>${Utils.escapeHtml(staffName)}</td>
                    <td>${duty ? `${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}` : '-'}</td>
                    <td>
                        <span class="status-badge status-${a.status === 'completed' ? 'completed' : 'pending'}">
                            ${Utils.capitalize(a.status)}
                        </span>
                    </td>
                    <td>${a.completedAt ? Utils.formatDateTime(a.completedAt) : '-'}</td>
                </tr>
            `;
        }).join('');
    } else {
        tableRows = '<tr><td colspan="5" class="empty-state">No assignments for today</td></tr>';
    }
    
    return `
        <div class="report-header">
            <h2>Daily Duty Report</h2>
            <p>${Utils.formatDateDisplay(new Date())}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--primary-600);">${todayAssignments.length}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Total Assignments</div>
            </div>
            <div style="background: var(--success-100); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--success-500);">${completedCount}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Completed</div>
            </div>
            <div style="background: var(--warning-100); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--warning-500);">${pendingCount}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Pending</div>
            </div>
        </div>
        
        <table class="data-table">
            <thead>
                <tr>
                    <th>Duty</th>
                    <th>Assigned To</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Completed At</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
}

/**
 * Generate Weekly Roster Report
 */
async function generateWeeklyRosterReport() {
    const currentWeek = Roster.getCurrentWeek();
    const weekDates = Utils.getWeekDates(currentWeek);
    const rosterData = await DB.getAll(DB.STORES.ROSTER);
    const weekRoster = rosterData.filter(r => r.weekNumber === currentWeek);
    
    const days = [
        { name: 'Monday', date: weekDates.monday },
        { name: 'Wednesday', date: weekDates.wednesday },
        { name: 'Saturday', date: weekDates.saturday }
    ];
    
    let daysSummary = days.map(day => {
        const dayAssignments = weekRoster.filter(r => r.date === Utils.formatDate(day.date));
        const completed = dayAssignments.filter(a => a.status === 'completed').length;
        
        return `
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px;">
                <h4 style="color: var(--primary-700); margin-bottom: 8px;">${day.name}</h4>
                <p style="font-size: 14px; color: var(--gray-600); margin-bottom: 4px;">${Utils.formatDateDisplay(day.date)}</p>
                <p style="margin: 0;"><strong>${dayAssignments.length}</strong> assignments</p>
                <p style="margin: 0; color: var(--success-500);">${completed} completed</p>
            </div>
        `;
    }).join('');
    
    let tableRows = '';
    if (weekRoster.length > 0) {
        tableRows = weekRoster.map(a => {
            const staffName = Staff.getName(a.staffId);
            const dutyName = Duties.getName(a.dutyId);
            const dayName = Utils.capitalize(Utils.getDayName(a.date));
            
            return `
                <tr>
                    <td>${dayName}</td>
                    <td>${Utils.formatDateDisplay(a.date)}</td>
                    <td>${Utils.escapeHtml(dutyName)}</td>
                    <td>${Utils.escapeHtml(staffName)}</td>
                    <td>
                        <span class="status-badge status-${a.status === 'completed' ? 'completed' : 'pending'}">
                            ${Utils.capitalize(a.status)}
                        </span>
                    </td>
                </tr>
            `;
        }).join('');
    } else {
        tableRows = '<tr><td colspan="5" class="empty-state">No roster data for this week</td></tr>';
    }
    
    return `
        <div class="report-header">
            <h2>Weekly Roster Report</h2>
            <p>Week ${currentWeek.split('-W')[1]} - ${Utils.formatDateDisplay(weekDates.monday)} to ${Utils.formatDateDisplay(weekDates.saturday)}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
            ${daysSummary}
        </div>
        
        <h3 style="margin-bottom: 16px;"><i class="fas fa-list" style="color: var(--primary-500);"></i> All Assignments</h3>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Duty</th>
                    <th>Staff</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
}

/**
 * Generate Production Report
 */
async function generateProductionReport() {
    const productionData = await DB.getAll(DB.STORES.PRODUCTION);
    
    // Get last 30 days of production
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentProduction = productionData.filter(p => new Date(p.date) >= thirtyDaysAgo);
    
    const completed = recentProduction.filter(p => p.status === 'completed');
    const scheduled = recentProduction.filter(p => p.status === 'scheduled');
    const inProgress = recentProduction.filter(p => p.status === 'in-progress');
    
    // Calculate total quantity produced
    const totalProduced = completed.reduce((sum, p) => sum + (p.actualQuantity || p.targetQuantity), 0);
    
    let tableRows = '';
    if (recentProduction.length > 0) {
        tableRows = recentProduction.sort((a, b) => new Date(b.date) - new Date(a.date)).map(p => {
            const product = Production.PRODUCTS.find(pr => pr.id === p.productId) || { name: p.productId, unit: 'units' };
            
            return `
                <tr>
                    <td>${Utils.formatDateDisplay(p.date)}</td>
                    <td>${Utils.escapeHtml(product.name)}</td>
                    <td>${p.batchNumber || '-'}</td>
                    <td>${p.targetQuantity} ${product.unit}</td>
                    <td>${p.status === 'completed' ? (p.actualQuantity || p.targetQuantity) + ' ' + product.unit : '-'}</td>
                    <td>
                        <span class="status-badge status-${p.status === 'completed' ? 'completed' : p.status === 'in-progress' ? 'pending' : 'active'}">
                            ${Utils.capitalize(p.status)}
                        </span>
                    </td>
                </tr>
            `;
        }).join('');
    } else {
        tableRows = '<tr><td colspan="6" class="empty-state">No production data in the last 30 days</td></tr>';
    }
    
    return `
        <div class="report-header">
            <h2>Production Schedule Report</h2>
            <p>Last 30 Days - ${Utils.formatDateDisplay(thirtyDaysAgo)} to ${Utils.formatDateDisplay(new Date())}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--primary-600);">${recentProduction.length}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Total Runs</div>
            </div>
            <div style="background: var(--success-100); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--success-500);">${completed.length}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Completed</div>
            </div>
            <div style="background: var(--warning-100); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--warning-500);">${scheduled.length + inProgress.length}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Pending</div>
            </div>
            <div style="background: var(--info-100); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: 700; color: var(--info-500);">${totalProduced.toLocaleString()}</div>
                <div style="color: var(--gray-600); font-size: 14px;">Units Produced</div>
            </div>
        </div>
        
        <h3 style="margin-bottom: 16px;"><i class="fas fa-flask" style="color: var(--primary-500);"></i> Production History</h3>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Batch #</th>
                    <th>Target</th>
                    <th>Actual</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
}

/**
 * Export Report
 */
async function exportReport(format) {
    const reportType = document.getElementById('reportType').value;
    const timestamp = new Date().toISOString().split('T')[0];
    
    try {
        if (format === 'pdf') {
            await exportReportPDF(reportType, timestamp);
        } else if (format === 'csv') {
            await exportReportCSV(reportType, timestamp);
        }
    } catch (error) {
        console.error('Error exporting report:', error);
        Utils.showToast('error', 'Export Failed', 'Failed to export report');
    }
}

/**
 * Export Report as PDF (Print)
 */
async function exportReportPDF(reportType, timestamp) {
    let title = '';
    let content = '';
    
    switch (reportType) {
        case 'daily':
            title = 'Daily Duty Report';
            content = await getDailyReportHTML();
            break;
        case 'weekly':
            title = 'Weekly Roster Report';
            content = await getWeeklyReportHTML();
            break;
        case 'production':
            title = 'Production Schedule Report';
            content = await getProductionReportHTML();
            break;
    }
    
    Utils.printPDF(`${title} - ${timestamp}`, content);
    Utils.showToast('success', 'Export', 'Report sent to print');
}

/**
 * Get report HTML for PDF export
 */
async function getDailyReportHTML() {
    const today = Utils.formatDate(new Date());
    const rosterData = await DB.getAll(DB.STORES.ROSTER);
    const todayAssignments = rosterData.filter(r => r.date === today);
    
    let rows = todayAssignments.map(a => {
        const staffName = Staff.getName(a.staffId);
        const dutyName = Duties.getName(a.dutyId);
        const duty = Duties.getById(a.dutyId);
        
        return `
            <tr>
                <td>${dutyName}</td>
                <td>${staffName}</td>
                <td>${duty ? `${Utils.formatTime(duty.startTime)} - ${Utils.formatTime(duty.endTime)}` : '-'}</td>
                <td>${Utils.capitalize(a.status)}</td>
            </tr>
        `;
    }).join('');
    
    return `
        <table>
            <thead>
                <tr>
                    <th>Duty</th>
                    <th>Staff</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        
        <div class="signature-section">
            <div class="signature-box">
                <div class="signature-line">Supervisor</div>
            </div>
            <div class="signature-box">
                <div class="signature-line">Date</div>
            </div>
        </div>
    `;
}

async function getWeeklyReportHTML() {
    const currentWeek = Roster.getCurrentWeek();
    const rosterData = await DB.getAll(DB.STORES.ROSTER);
    const weekRoster = rosterData.filter(r => r.weekNumber === currentWeek);
    
    let rows = weekRoster.map(a => {
        const staffName = Staff.getName(a.staffId);
        const dutyName = Duties.getName(a.dutyId);
        const dayName = Utils.capitalize(Utils.getDayName(a.date));
        
        return `
            <tr>
                <td>${dayName}</td>
                <td>${Utils.formatDateDisplay(a.date)}</td>
                <td>${dutyName}</td>
                <td>${staffName}</td>
                <td>${Utils.capitalize(a.status)}</td>
            </tr>
        `;
    }).join('');
    
    return `
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Duty</th>
                    <th>Staff</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

async function getProductionReportHTML() {
    const productionData = await DB.getAll(DB.STORES.PRODUCTION);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentProduction = productionData.filter(p => new Date(p.date) >= thirtyDaysAgo);
    
    let rows = recentProduction.map(p => {
        const product = Production.PRODUCTS.find(pr => pr.id === p.productId) || { name: p.productId };
        return `
            <tr>
                <td>${Utils.formatDateDisplay(p.date)}</td>
                <td>${product.name}</td>
                <td>${p.batchNumber || '-'}</td>
                <td>${p.targetQuantity}</td>
                <td>${Utils.capitalize(p.status)}</td>
            </tr>
        `;
    }).join('');
    
    return `
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Batch</th>
                    <th>Quantity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

/**
 * Export Report as CSV
 */
async function exportReportCSV(reportType, timestamp) {
    let data = [];
    let columns = [];
    let filename = '';
    
    switch (reportType) {
        case 'daily':
            const today = Utils.formatDate(new Date());
            const rosterData = await DB.getAll(DB.STORES.ROSTER);
            data = rosterData.filter(r => r.date === today).map(a => ({
                duty: Duties.getName(a.dutyId),
                staff: Staff.getName(a.staffId),
                status: a.status,
                completedAt: a.completedAt || ''
            }));
            columns = [
                { key: 'duty', label: 'Duty' },
                { key: 'staff', label: 'Staff' },
                { key: 'status', label: 'Status' },
                { key: 'completedAt', label: 'Completed At' }
            ];
            filename = `daily-duty-report-${timestamp}.csv`;
            break;
            
        case 'weekly':
            const currentWeek = Roster.getCurrentWeek();
            const weekData = await DB.getAll(DB.STORES.ROSTER);
            data = weekData.filter(r => r.weekNumber === currentWeek).map(a => ({
                day: Utils.capitalize(Utils.getDayName(a.date)),
                date: Utils.formatDateDisplay(a.date),
                duty: Duties.getName(a.dutyId),
                staff: Staff.getName(a.staffId),
                status: a.status
            }));
            columns = [
                { key: 'day', label: 'Day' },
                { key: 'date', label: 'Date' },
                { key: 'duty', label: 'Duty' },
                { key: 'staff', label: 'Staff' },
                { key: 'status', label: 'Status' }
            ];
            filename = `weekly-roster-report-${timestamp}.csv`;
            break;
            
        case 'production':
            const prodData = await DB.getAll(DB.STORES.PRODUCTION);
            data = prodData.map(p => {
                const product = Production.PRODUCTS.find(pr => pr.id === p.productId) || { name: p.productId };
                return {
                    date: Utils.formatDateDisplay(p.date),
                    product: product.name,
                    batch: p.batchNumber || '',
                    target: p.targetQuantity,
                    actual: p.actualQuantity || '',
                    status: p.status
                };
            });
            columns = [
                { key: 'date', label: 'Date' },
                { key: 'product', label: 'Product' },
                { key: 'batch', label: 'Batch Number' },
                { key: 'target', label: 'Target Qty' },
                { key: 'actual', label: 'Actual Qty' },
                { key: 'status', label: 'Status' }
            ];
            filename = `production-report-${timestamp}.csv`;
            break;
    }
    
    Utils.downloadCSV(data, columns, filename);
    Utils.showToast('success', 'Exported', `Report saved as ${filename}`);
}

/**
 * Load audit log entries
 */
async function loadAuditLog() {
    const logs = await DB.getAll(DB.STORES.LOGS);
    const container = document.getElementById('auditLogEntries');
    
    if (!logs || logs.length === 0) {
        container.innerHTML = '<p class="empty-state">No audit entries</p>';
        return;
    }
    
    // Sort by timestamp descending and take last 50
    const recentLogs = logs
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 50);
    
    container.innerHTML = recentLogs.map(log => {
        let actionIcon = 'fas fa-circle';
        let actionColor = 'var(--gray-500)';
        
        switch (log.action) {
            case 'CREATE':
                actionIcon = 'fas fa-plus-circle';
                actionColor = 'var(--success-500)';
                break;
            case 'UPDATE':
                actionIcon = 'fas fa-edit';
                actionColor = 'var(--primary-500)';
                break;
            case 'DELETE':
                actionIcon = 'fas fa-trash';
                actionColor = 'var(--danger-500)';
                break;
        }
        
        return `
            <div class="log-entry">
                <div class="log-timestamp">
                    <i class="${actionIcon}" style="color: ${actionColor};"></i>
                    ${Utils.formatDateTime(log.timestamp)}
                </div>
                <div class="log-action">
                    <strong>${log.action}</strong> on <strong>${Utils.capitalize(log.entity)}</strong>
                    by ${log.user || 'System'}
                </div>
            </div>
        `;
    }).join('');
}

// Export reports module
window.Reports = {
    generate: generateReport,
    export: exportReport,
    loadAuditLog,
    loadTaskExecutionLogs
};

// Task execution logs cache
let taskLogsCache = [];

/**
 * Load task execution logs
 */
async function loadTaskExecutionLogs() {
    try {
        const logs = await DB.getAll(DB.STORES.LOGS);
        taskLogsCache = logs.filter(log => log.type === 'task_completion');
        
        // Populate filter dropdowns
        populateLogFilters();
        
        // Apply filters and render
        filterTaskLogs();
        
    } catch (error) {
        console.error('Error loading task logs:', error);
    }
}

/**
 * Show task execution log section
 */
function showTaskExecutionLog() {
    const section = document.getElementById('taskExecutionLogSection');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    loadTaskExecutionLogs();
}

/**
 * Populate log filter dropdowns
 */
function populateLogFilters() {
    // Staff filter
    const staffFilter = document.getElementById('logFilterStaff');
    if (staffFilter) {
        const staffList = Staff.getActive();
        staffFilter.innerHTML = '<option value="all">All Staff</option>' +
            staffList.map(s => `<option value="${s.id}">${Utils.escapeHtml(s.name)}</option>`).join('');
    }
    
    // Product filter
    const productFilter = document.getElementById('logFilterProduct');
    if (productFilter) {
        const products = [...new Set(taskLogsCache.filter(l => l.productName).map(l => l.productName))];
        productFilter.innerHTML = '<option value="all">All Products</option>' +
            products.map(p => `<option value="${p}">${Utils.escapeHtml(p)}</option>`).join('');
    }
}

/**
 * Filter and render task logs
 */
function filterTaskLogs() {
    const dateFilter = document.getElementById('logFilterDate')?.value || 'week';
    const staffFilter = document.getElementById('logFilterStaff')?.value || 'all';
    const productFilter = document.getElementById('logFilterProduct')?.value || 'all';
    const typeFilter = document.getElementById('logFilterType')?.value || 'all';
    
    let filteredLogs = [...taskLogsCache];
    
    // Date filter
    const now = new Date();
    let startDate;
    switch (dateFilter) {
        case 'today':
            startDate = new Date(now.setHours(0, 0, 0, 0));
            break;
        case 'week':
            startDate = new Date(now);
            startDate.setDate(startDate.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(now);
            startDate.setMonth(startDate.getMonth() - 1);
            break;
        case 'all':
        default:
            startDate = null;
    }
    
    if (startDate) {
        filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) >= startDate);
    }
    
    // Staff filter
    if (staffFilter !== 'all') {
        filteredLogs = filteredLogs.filter(log => log.staffId === parseInt(staffFilter));
    }
    
    // Product filter
    if (productFilter !== 'all') {
        filteredLogs = filteredLogs.filter(log => log.productName === productFilter);
    }
    
    // Type filter
    if (typeFilter !== 'all') {
        filteredLogs = filteredLogs.filter(log => log.taskType === typeFilter);
    }
    
    // Sort by timestamp descending
    filteredLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Update summary stats
    updateLogSummary(filteredLogs);
    
    // Render logs
    renderTaskLogs(filteredLogs);
}

/**
 * Update log summary statistics
 */
function updateLogSummary(logs) {
    document.getElementById('logTotalCompleted').textContent = logs.length;
    document.getElementById('logTotalStaff').textContent = new Set(logs.map(l => l.staffId)).size;
    document.getElementById('logTotalProducts').textContent = new Set(logs.filter(l => l.productName).map(l => l.productName)).size;
    document.getElementById('logWithComments').textContent = logs.filter(l => l.comment && l.comment.trim()).length;
    document.getElementById('logEntryCount').textContent = `${logs.length} entries`;
}

/**
 * Render task log entries
 */
function renderTaskLogs(logs) {
    const container = document.getElementById('taskLogEntries');
    if (!container) return;
    
    if (logs.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray-500);">
                <i class="fas fa-clipboard-list" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>No task logs found</p>
                <p style="font-size: 13px;">Complete tasks to start logging!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = logs.map(log => {
        const hasComment = log.comment && log.comment.trim().length > 0;
        const isProductionTask = log.taskType === 'Production Task';
        
        return `
            <div class="log-entry-item" style="padding: 16px; border-bottom: 1px solid var(--gray-100); ${isProductionTask ? 'background: linear-gradient(to right, #E8F5E9, white);' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                            <span style="background: var(--success-500); color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">
                                <i class="fas fa-check"></i> COMPLETED
                            </span>
                            ${isProductionTask ? `
                                <span style="background: #2E7D32; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">
                                    <i class="fas fa-industry"></i> Production
                                </span>
                            ` : ''}
                            ${hasComment ? `
                                <span style="background: var(--primary-500); color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">
                                    <i class="fas fa-comment"></i> Commented
                                </span>
                            ` : ''}
                        </div>
                        <div style="font-weight: 600; color: var(--gray-800); margin-bottom: 4px;">
                            ${log.taskOrder ? `<span style="color: var(--success-500);">#${log.taskOrder}</span> ` : ''}
                            ${Utils.escapeHtml(log.taskName || 'Task')}
                        </div>
                        <div style="font-size: 13px; color: var(--gray-600);">
                            <i class="fas fa-user" style="color: var(--primary-500);"></i> 
                            <strong>${Utils.escapeHtml(log.staffName || 'Unknown')}</strong>
                            ${log.productName ? ` | <i class="fas fa-box"></i> ${Utils.escapeHtml(log.productName)}` : ''}
                            ${log.batchNumber ? ` | Batch: ${Utils.escapeHtml(log.batchNumber)}` : ''}
                        </div>
                        ${hasComment ? `
                            <div style="background: var(--gray-50); padding: 10px; border-radius: 6px; margin-top: 10px; font-size: 13px; color: var(--gray-700);">
                                <i class="fas fa-quote-left" style="color: var(--gray-400); margin-right: 4px;"></i>
                                ${Utils.escapeHtml(log.comment)}
                            </div>
                        ` : ''}
                    </div>
                    <div style="text-align: right; font-size: 12px; color: var(--gray-500);">
                        <div><i class="fas fa-calendar"></i> ${Utils.formatDateDisplay(log.date)}</div>
                        <div><i class="fas fa-clock"></i> ${Utils.formatTime(new Date(log.timestamp).toTimeString().substring(0, 5))}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Export task execution log to PDF
 */
function exportTaskLogToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const dateFilter = document.getElementById('logFilterDate')?.value || 'week';
    const periodLabels = { today: 'Today', week: 'This Week', month: 'This Month', all: 'All Time' };
    
    // Get filtered logs
    let logs = [...taskLogsCache];
    
    // Apply date filter
    const now = new Date();
    let startDate;
    switch (dateFilter) {
        case 'today':
            startDate = new Date(now.setHours(0, 0, 0, 0));
            break;
        case 'week':
            startDate = new Date(now);
            startDate.setDate(startDate.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(now);
            startDate.setMonth(startDate.getMonth() - 1);
            break;
    }
    
    if (startDate) {
        logs = logs.filter(log => new Date(log.timestamp) >= startDate);
    }
    
    logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    if (logs.length === 0) {
        Utils.showToast('warning', 'No Data', 'No task logs to export');
        return;
    }
    
    // Header
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM', 105, 18, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Task Execution Log', 105, 28, { align: 'center' });
    
    doc.setFontSize(11);
    doc.text(`Period: ${periodLabels[dateFilter] || dateFilter}`, 105, 38, { align: 'center' });
    
    let yPos = 55;
    
    // Summary
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(15, yPos, 180, 20, 3, 3, 'F');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary', 20, yPos + 8);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total Completed: ${logs.length}`, 20, yPos + 15);
    doc.text(`Staff: ${new Set(logs.map(l => l.staffId)).size}`, 80, yPos + 15);
    doc.text(`With Comments: ${logs.filter(l => l.comment && l.comment.trim()).length}`, 130, yPos + 15);
    
    yPos += 30;
    
    // Table header
    doc.setFillColor(46, 125, 50);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Date/Time', 18, yPos + 7);
    doc.text('Staff', 50, yPos + 7);
    doc.text('Task', 90, yPos + 7);
    doc.text('Product', 150, yPos + 7);
    
    yPos += 14;
    
    // Log entries
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    logs.forEach((log, idx) => {
        if (yPos > 260) {
            doc.addPage();
            yPos = 20;
        }
        
        if (idx % 2 === 0) {
            doc.setFillColor(255, 255, 255);
        } else {
            doc.setFillColor(250, 250, 250);
        }
        doc.rect(15, yPos - 3, 180, 12, 'F');
        
        doc.setFontSize(8);
        const dateTime = `${Utils.formatDateDisplay(log.date).split(',')[1]?.trim() || log.date}\n${new Date(log.timestamp).toTimeString().substring(0, 5)}`;
        doc.text(dateTime.split('\n')[0] || '', 18, yPos + 2);
        doc.text(dateTime.split('\n')[1] || '', 18, yPos + 7);
        
        doc.setFont('helvetica', 'bold');
        doc.text((log.staffName || 'Unknown').substring(0, 20), 50, yPos + 4);
        doc.setFont('helvetica', 'normal');
        doc.text((log.taskName || 'Task').substring(0, 30), 90, yPos + 4);
        doc.text((log.productName || '-').substring(0, 20), 150, yPos + 4);
        
        yPos += 12;
        
        // Add comment if exists
        if (log.comment && log.comment.trim()) {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            doc.setFillColor(232, 245, 233);
            doc.rect(20, yPos - 2, 170, 8, 'F');
            doc.setFontSize(7);
            doc.setTextColor(60, 60, 60);
            doc.text(`Comment: ${log.comment.substring(0, 80)}${log.comment.length > 80 ? '...' : ''}`, 22, yPos + 3);
            doc.setTextColor(0, 0, 0);
            yPos += 10;
        }
    });
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(128, 128, 128);
        doc.line(15, 280, 195, 280);
        doc.text('ASTRO-BSM Factory Operations | Task Execution Log', 105, 285, { align: 'center' });
        doc.text(`Generated: ${new Date().toLocaleString()}`, 15, 290);
        doc.text(`Page ${i} of ${pageCount}`, 195, 290, { align: 'right' });
    }
    
    // Save
    const fileName = `Task_Log_${dateFilter}_${Utils.formatDate(new Date())}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Ready', 'Task execution log exported!');
}