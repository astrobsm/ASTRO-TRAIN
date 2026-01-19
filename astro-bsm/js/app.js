/**
 * ASTRO-BSM Factory Operations
 * Main Application Module
 */

// Application State
let currentPage = 'dashboard';
let userRole = 'admin';

/**
 * Initialize Application
 */
async function initApp() {
    console.log('Initializing ASTRO-BSM Application...');
    
    try {
        // Initialize database
        await DB.init();
        console.log('Database initialized');
        
        // Seed default data if empty
        await DB.seedDefault();
        
        // Load user settings
        userRole = await DB.getSetting('userRole') || 'admin';
        
        // Setup network status listeners
        Utils.setupNetworkListeners();
        
        // Load all data
        await Promise.all([
            Staff.load(),
            Duties.load(),
            Roster.load(),
            Production.load()
        ]);
        
        // Update current date display
        updateCurrentDate();
        
        // Load dashboard
        loadDashboard();
        
        // Load audit log
        Reports.loadAuditLog();
        
        console.log('Application initialized successfully');
        
    } catch (error) {
        console.error('Failed to initialize application:', error);
        Utils.showToast('error', 'Initialization Error', 'Failed to start application. Please refresh.');
    }
}

/**
 * Navigation
 */
function navigateTo(page) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Update page visibility
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageElement = document.getElementById(`page-${page}`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        staff: 'Staff Management',
        duties: 'Duties Management',
        roster: 'Duty Roster',
        production: 'Production Scheduling',
        logs: 'Logs & Reports',
        performance: 'Staff Performance',
        settings: 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[page] || 'Dashboard';
    
    // Page-specific actions
    if (page === 'logs') {
        Reports.generate();
        Reports.loadAuditLog();
        if (typeof loadTaskExecutionLogs === 'function') {
            loadTaskExecutionLogs();
        }
    }
    
    if (page === 'performance') {
        if (typeof loadPerformanceData === 'function') {
            loadPerformanceData();
        }
    }
    
    currentPage = page;
    
    // Close sidebar on mobile
    if (window.innerWidth < 992) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

/**
 * Toggle Sidebar
 */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

/**
 * Update Current Date Display
 */
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = Utils.formatDateDisplay(new Date());
    }
}

/**
 * Load Dashboard
 */
async function loadDashboard() {
    // Update stats
    const staffCount = Staff.getActive().length;
    const dutiesCount = Duties.getActive().length;
    
    document.getElementById('statStaffCount').textContent = staffCount;
    document.getElementById('statDutiesCount').textContent = dutiesCount;
    
    // Update pending tasks
    await Roster.updatePendingCount();
    
    // Update production count
    const upcomingProduction = Production.getUpcoming();
    document.getElementById('statProductionCount').textContent = upcomingProduction.length;
    
    // Update today's schedule
    await updateTodaySchedule();
    
    // Update upcoming production
    updateUpcomingProduction(upcomingProduction);
    
    // Update today's day badge
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const isWorkingDay = Utils.isWorkingDay(today);
    const dayBadge = document.getElementById('todayDayBadge');
    dayBadge.textContent = dayName;
    dayBadge.style.background = isWorkingDay ? 'var(--success-500)' : 'var(--gray-500)';
}

/**
 * Update Today's Schedule on Dashboard
 */
async function updateTodaySchedule() {
    const container = document.getElementById('todayScheduleContent');
    const today = new Date();
    
    if (!Utils.isWorkingDay(today)) {
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-calendar-times" style="font-size: 36px; color: var(--gray-400); margin-bottom: 12px;"></i>
                <p style="color: var(--gray-500);">Not a working day today.</p>
                <p style="color: var(--gray-400); font-size: 14px;">Working days: Monday, Wednesday, Saturday</p>
            </div>
        `;
        return;
    }
    
    const todaySchedule = await Roster.getTodaySchedule();
    
    if (todaySchedule.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-clipboard" style="font-size: 36px; color: var(--gray-400); margin-bottom: 12px;"></i>
                <p style="color: var(--gray-500);">No duties assigned for today.</p>
                <button class="btn btn-primary" onclick="navigateTo('roster'); showAddRosterModal()">
                    <i class="fas fa-plus"></i> Assign Duties
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = todaySchedule.map(item => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--gray-50); border-radius: 8px; margin-bottom: 8px;">
            <div>
                <div style="font-weight: 600; color: var(--gray-800);">${Utils.escapeHtml(item.dutyName)}</div>
                <div style="font-size: 14px; color: var(--gray-600);">
                    <i class="fas fa-user"></i> ${Utils.escapeHtml(item.staffName)}
                    ${item.duty ? `• ${Utils.formatTime(item.duty.startTime)}` : ''}
                </div>
            </div>
            <span class="status-badge status-${item.status === 'completed' ? 'completed' : 'pending'}">
                ${Utils.capitalize(item.status)}
            </span>
        </div>
    `).join('');
}

/**
 * Update Upcoming Production on Dashboard
 */
function updateUpcomingProduction(productions) {
    const container = document.getElementById('upcomingProductionContent');
    
    if (productions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-flask" style="font-size: 36px; color: var(--gray-400); margin-bottom: 12px;"></i>
                <p style="color: var(--gray-500);">No upcoming production scheduled.</p>
                <button class="btn btn-primary" onclick="navigateTo('production'); showAddProductionModal()">
                    <i class="fas fa-plus"></i> Schedule Production
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productions.slice(0, 3).map(p => {
        const product = Production.PRODUCTS.find(pr => pr.id === p.productId) || { name: p.productId };
        return `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--gray-50); border-radius: 8px; margin-bottom: 8px;">
                <div>
                    <div style="font-weight: 600; color: var(--gray-800);">${Utils.escapeHtml(product.name)}</div>
                    <div style="font-size: 14px; color: var(--gray-600);">
                        <i class="fas fa-calendar"></i> ${Utils.formatDateDisplay(p.date)}
                        • ${p.targetQuantity} units
                    </div>
                </div>
                <span class="production-status ${p.status}">${Utils.capitalize(p.status)}</span>
            </div>
        `;
    }).join('');
}

/**
 * Settings Functions
 */
async function changeUserRole() {
    const role = document.getElementById('userRole').value;
    await DB.setSetting('userRole', role);
    userRole = role;
    Utils.showToast('success', 'Updated', 'User role changed to ' + Utils.capitalize(role));
}

async function saveSettings() {
    const startTime = document.getElementById('workStartTime').value;
    const endTime = document.getElementById('workEndTime').value;
    
    await DB.setSetting('workStartTime', startTime);
    await DB.setSetting('workEndTime', endTime);
    
    Utils.showToast('success', 'Saved', 'Settings saved successfully');
}

function showSetPinModal() {
    const content = `
        <form id="pinForm" onsubmit="savePin(event)">
            <div class="form-group">
                <label class="required">New PIN (4-6 digits)</label>
                <input type="password" class="form-control" id="newPinInput" 
                       pattern="[0-9]{4,6}" maxlength="6" placeholder="Enter PIN" required>
            </div>
            <div class="form-group">
                <label class="required">Confirm PIN</label>
                <input type="password" class="form-control" id="confirmPinInput" 
                       pattern="[0-9]{4,6}" maxlength="6" placeholder="Confirm PIN" required>
            </div>
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('pinForm').requestSubmit()">
            <i class="fas fa-key"></i> Set PIN
        </button>
    `;
    
    Utils.showModal('Set Access PIN', content, footer);
}

async function savePin(event) {
    event.preventDefault();
    
    const newPin = document.getElementById('newPinInput').value;
    const confirmPin = document.getElementById('confirmPinInput').value;
    
    if (newPin !== confirmPin) {
        Utils.showToast('error', 'Mismatch', 'PINs do not match');
        return;
    }
    
    await DB.setSetting('accessPin', newPin);
    closeModal();
    Utils.showToast('success', 'Saved', 'Access PIN has been set');
}

/**
 * Data Management
 */
async function backupData() {
    try {
        const data = await DB.exportAll();
        const filename = `astro-bsm-backup-${Utils.formatDate(new Date())}.json`;
        Utils.downloadJSON(data, filename);
        Utils.showToast('success', 'Backup Created', `Saved as ${filename}`);
    } catch (error) {
        console.error('Backup failed:', error);
        Utils.showToast('error', 'Backup Failed', 'Could not create backup');
    }
}

async function restoreData() {
    const fileInput = document.getElementById('restoreFile');
    const file = fileInput.files[0];
    
    if (!file) return;
    
    try {
        const text = await file.text();
        const data = JSON.parse(text);
        
        const content = `
            <div style="text-align: center;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: var(--warning-500); margin-bottom: 16px;"></i>
                <p style="color: var(--gray-600);">
                    This will <strong>replace all current data</strong> with the backup from:
                </p>
                <p style="font-weight: 600; color: var(--primary-700);">${Utils.formatDateTime(data.exportDate)}</p>
                <p style="color: var(--danger-500); font-size: 14px; margin-top: 12px;">
                    This action cannot be undone!
                </p>
            </div>
        `;
        
        const footer = `
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-warning" onclick="executeRestore()">
                <i class="fas fa-upload"></i> Restore Data
            </button>
        `;
        
        window.pendingRestoreData = data;
        Utils.showModal('Confirm Restore', content, footer);
        
    } catch (error) {
        console.error('Restore failed:', error);
        Utils.showToast('error', 'Invalid File', 'The backup file is invalid or corrupted');
    }
    
    fileInput.value = '';
}

async function executeRestore() {
    if (!window.pendingRestoreData) return;
    
    try {
        await DB.importAll(window.pendingRestoreData);
        closeModal();
        Utils.showToast('success', 'Restored', 'Data has been restored successfully');
        
        // Reload all data
        await Promise.all([
            Staff.load(),
            Duties.load(),
            Roster.load(),
            Production.load()
        ]);
        
        loadDashboard();
        
    } catch (error) {
        console.error('Restore failed:', error);
        Utils.showToast('error', 'Restore Failed', 'Could not restore data');
    }
    
    window.pendingRestoreData = null;
}

function confirmResetData() {
    const content = `
        <div style="text-align: center;">
            <i class="fas fa-skull-crossbones" style="font-size: 48px; color: var(--danger-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                This will <strong>permanently delete ALL data</strong> including:
            </p>
            <ul style="text-align: left; max-width: 300px; margin: 16px auto; color: var(--gray-700);">
                <li>All staff records</li>
                <li>All duty configurations</li>
                <li>All roster assignments</li>
                <li>All production schedules</li>
                <li>All audit logs</li>
            </ul>
            <p style="color: var(--danger-500); font-weight: 600;">
                This action CANNOT be undone!
            </p>
            <div class="form-group" style="margin-top: 16px;">
                <label>Type "RESET" to confirm:</label>
                <input type="text" class="form-control" id="resetConfirmInput" placeholder="Type RESET">
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="executeReset()">
            <i class="fas fa-trash-alt"></i> Reset Everything
        </button>
    `;
    
    Utils.showModal('⚠️ DANGER: Reset All Data', content, footer);
}

async function executeReset() {
    const confirmInput = document.getElementById('resetConfirmInput').value;
    
    if (confirmInput !== 'RESET') {
        Utils.showToast('error', 'Not Confirmed', 'Please type RESET to confirm');
        return;
    }
    
    try {
        await DB.clear(DB.STORES.STAFF);
        await DB.clear(DB.STORES.DUTIES);
        await DB.clear(DB.STORES.ROSTER);
        await DB.clear(DB.STORES.PRODUCTION);
        await DB.clear(DB.STORES.LOGS);
        
        closeModal();
        Utils.showToast('success', 'Reset Complete', 'All data has been deleted');
        
        // Re-seed default data
        await DB.seedDefault();
        
        // Reload
        await Promise.all([
            Staff.load(),
            Duties.load(),
            Roster.load(),
            Production.load()
        ]);
        
        loadDashboard();
        
    } catch (error) {
        console.error('Reset failed:', error);
        Utils.showToast('error', 'Reset Failed', 'Could not reset data');
    }
}

/**
 * Export all data
 */
async function exportData() {
    const content = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="fas fa-download" style="font-size: 48px; color: var(--primary-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">Choose export format:</p>
        </div>
        
        <div style="display: grid; gap: 12px;">
            <button class="btn btn-secondary" onclick="exportAllToJSON()" style="justify-content: flex-start; padding: 16px;">
                <i class="fas fa-file-code" style="font-size: 24px; margin-right: 12px;"></i>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Full Backup (JSON)</div>
                    <div style="font-size: 12px; color: var(--gray-500);">Complete data for restoration</div>
                </div>
            </button>
            <button class="btn btn-secondary" onclick="exportStaffToCSV()" style="justify-content: flex-start; padding: 16px;">
                <i class="fas fa-users" style="font-size: 24px; margin-right: 12px;"></i>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Staff List (CSV)</div>
                    <div style="font-size: 12px; color: var(--gray-500);">Spreadsheet compatible</div>
                </div>
            </button>
            <button class="btn btn-secondary" onclick="exportDutiesToCSV()" style="justify-content: flex-start; padding: 16px;">
                <i class="fas fa-clipboard-list" style="font-size: 24px; margin-right: 12px;"></i>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Duties List (CSV)</div>
                    <div style="font-size: 12px; color: var(--gray-500);">Spreadsheet compatible</div>
                </div>
            </button>
        </div>
    `;
    
    Utils.showModal('Export Data', content, '');
}

async function exportAllToJSON() {
    closeModal();
    await backupData();
}

async function exportStaffToCSV() {
    const data = Staff.cache().map(s => ({
        staffId: s.staffId,
        name: s.name,
        role: s.role,
        status: s.status
    }));
    
    const columns = [
        { key: 'staffId', label: 'Staff ID' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' }
    ];
    
    Utils.downloadCSV(data, columns, `staff-list-${Utils.formatDate(new Date())}.csv`);
    closeModal();
    Utils.showToast('success', 'Exported', 'Staff list saved');
}

async function exportDutiesToCSV() {
    const data = Duties.cache().map(d => ({
        name: d.name,
        description: d.description,
        startTime: d.startTime,
        endTime: d.endTime,
        status: d.status,
        checksCount: d.requiredChecks ? d.requiredChecks.length : 0
    }));
    
    const columns = [
        { key: 'name', label: 'Duty Name' },
        { key: 'description', label: 'Description' },
        { key: 'startTime', label: 'Start Time' },
        { key: 'endTime', label: 'End Time' },
        { key: 'status', label: 'Status' },
        { key: 'checksCount', label: 'Required Checks' }
    ];
    
    Utils.downloadCSV(data, columns, `duties-list-${Utils.formatDate(new Date())}.csv`);
    closeModal();
    Utils.showToast('success', 'Exported', 'Duties list saved');
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Handle page visibility for data refresh
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        updateCurrentDate();
        if (currentPage === 'dashboard') {
            loadDashboard();
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});
