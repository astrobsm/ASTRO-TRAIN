/**
 * ASTRO-BSM Factory Operations
 * Supabase Integration & Cross-Device Sync Module
 * Provides robust 2-way sync with offline support
 */

// Supabase Configuration
const SUPABASE_URL = 'https://nznytmaujhmqpygxgkgf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56bnl0bWF1amhtcXB5Z3hna2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMDUzODQsImV4cCI6MjA4MTY4MTM4NH0.vKNdDpWDgdrXjMyycUdh6YqjKW8xgTZJdKdOY4GPf5U';

// Authentication Configuration
const AUTH_CONFIG = {
    users: {
        admin: {
            password: 'blackvelvet',
            role: 'admin',
            permissions: ['read', 'write', 'delete', 'manage_staff', 'manage_settings', 'view_reports', 'manage_production']
        },
        supervisor: {
            password: 'pinkpetals',
            role: 'supervisor',
            permissions: ['read', 'write', 'view_reports', 'manage_production']
        }
    },
    sessionKey: 'bsm_auth_session',
    sessionDuration: 24 * 60 * 60 * 1000 // 24 hours
};

// Current user session
let currentUser = null;

// Sync Configuration
const SYNC_CONFIG = {
    BATCH_SIZE: 50,           // Number of records per sync batch
    RETRY_ATTEMPTS: 3,        // Number of retry attempts for failed syncs
    RETRY_DELAY: 2000,        // Delay between retries (ms)
    SYNC_INTERVAL: 30000,     // Auto-sync interval (30 seconds)
    CONFLICT_RESOLUTION: 'server_wins', // 'server_wins', 'client_wins', or 'latest_wins'
    REALTIME_ENABLED: true    // Enable real-time subscriptions
};

// Supabase client instance (named supabaseClient to avoid conflict with CDN global)
let supabaseClient = null;
let syncInProgress = false;
let lastSyncTime = null;
let realtimeChannels = [];
let syncQueue = [];
let networkOnline = navigator.onLine;

// Table mappings (IndexedDB store -> Supabase table)
const TABLE_MAPPINGS = {
    staff: 'bsm_staff',
    duties: 'bsm_duties',
    roster: 'bsm_roster',
    production: 'bsm_production',
    logs: 'bsm_logs',
    settings: 'bsm_settings'
};

/**
 * Initialize Supabase client
 */
async function initSupabase() {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('Supabase not configured. Running in offline-only mode.');
        updateSyncStatus('offline', 'Supabase not configured');
        return false;
    }

    try {
        // Initialize Supabase client using the global supabase object from CDN
        const { createClient } = window.supabase;
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: {
                persistSession: true,
                autoRefreshToken: true
            },
            realtime: {
                params: {
                    eventsPerSecond: 10
                }
            }
        });

        console.log('Supabase client initialized');

        // Setup network listeners
        setupNetworkListeners();

        // Setup real-time subscriptions if enabled
        if (SYNC_CONFIG.REALTIME_ENABLED) {
            await setupRealtimeSubscriptions();
        }

        // Perform initial sync
        await performFullSync();

        // Start auto-sync interval
        startAutoSync();

        updateSyncStatus('synced', 'Connected to cloud');
        return true;

    } catch (error) {
        console.error('Failed to initialize Supabase:', error);
        updateSyncStatus('error', 'Connection failed');
        return false;
    }
}

/**
 * Setup network status listeners
 */
function setupNetworkListeners() {
    window.addEventListener('online', async () => {
        networkOnline = true;
        console.log('Network online - starting sync');
        updateSyncStatus('syncing', 'Reconnecting...');
        
        // Process queued changes
        await processOfflineQueue();
        
        // Full sync to catch up
        await performFullSync();
    });

    window.addEventListener('offline', () => {
        networkOnline = false;
        console.log('Network offline - switching to local mode');
        updateSyncStatus('offline', 'Working offline');
    });
}

/**
 * Setup real-time subscriptions for live updates
 */
async function setupRealtimeSubscriptions() {
    if (!supabaseClient) return;

    // Clean up existing subscriptions
    realtimeChannels.forEach(channel => {
        supabaseClient.removeChannel(channel);
    });
    realtimeChannels = [];

    // Subscribe to each table
    for (const [localStore, remoteTable] of Object.entries(TABLE_MAPPINGS)) {
        const channel = supabaseClient
            .channel(`${remoteTable}_changes`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: remoteTable
                },
                (payload) => handleRealtimeChange(localStore, payload)
            )
            .subscribe((status) => {
                console.log(`Realtime subscription for ${remoteTable}: ${status}`);
            });

        realtimeChannels.push(channel);
    }

    console.log('Real-time subscriptions established');
}

/**
 * Handle real-time changes from Supabase
 */
async function handleRealtimeChange(localStore, payload) {
    console.log(`Real-time update for ${localStore}:`, payload.eventType);

    try {
        const record = payload.new || payload.old;
        
        switch (payload.eventType) {
            case 'INSERT':
                await syncRecordToLocal(localStore, record);
                break;
            case 'UPDATE':
                await syncRecordToLocal(localStore, record);
                break;
            case 'DELETE':
                await deleteLocalRecord(localStore, record.id);
                break;
        }

        // Trigger UI refresh
        triggerUIRefresh(localStore);

    } catch (error) {
        console.error('Error handling real-time change:', error);
    }
}

/**
 * Sync a record from Supabase to local IndexedDB
 */
async function syncRecordToLocal(storeName, record) {
    if (!record) return;

    try {
        // Convert Supabase record to local format
        const localRecord = convertFromSupabase(record);
        
        // Check if record exists locally
        const existingRecord = await DB.get(DB.STORES[storeName.toUpperCase()], localRecord.id);
        
        if (existingRecord) {
            // Conflict resolution
            if (shouldUpdateLocal(existingRecord, localRecord)) {
                await DB.update(DB.STORES[storeName.toUpperCase()], localRecord);
                console.log(`Updated local record in ${storeName}:`, localRecord.id);
            }
        } else {
            // New record from server
            await DB.add(DB.STORES[storeName.toUpperCase()], localRecord);
            console.log(`Added new record to ${storeName}:`, localRecord.id);
        }

    } catch (error) {
        console.error(`Error syncing record to local ${storeName}:`, error);
    }
}

/**
 * Delete a record from local IndexedDB
 */
async function deleteLocalRecord(storeName, id) {
    try {
        await DB.delete(DB.STORES[storeName.toUpperCase()], id);
        console.log(`Deleted local record from ${storeName}:`, id);
    } catch (error) {
        console.error(`Error deleting local record from ${storeName}:`, error);
    }
}

/**
 * Determine if local record should be updated based on conflict resolution strategy
 */
function shouldUpdateLocal(localRecord, serverRecord) {
    switch (SYNC_CONFIG.CONFLICT_RESOLUTION) {
        case 'server_wins':
            return true;
        case 'client_wins':
            return false;
        case 'latest_wins':
        default:
            const localTime = new Date(localRecord.updatedAt || localRecord.createdAt || 0);
            const serverTime = new Date(serverRecord.updatedAt || serverRecord.createdAt || 0);
            return serverTime >= localTime;
    }
}

/**
 * Perform full 2-way sync
 */
async function performFullSync() {
    if (!supabaseClient || !networkOnline || syncInProgress) {
        return { success: false, reason: 'Sync not available' };
    }

    syncInProgress = true;
    updateSyncStatus('syncing', 'Syncing...');

    const syncResults = {
        pushed: 0,
        pulled: 0,
        conflicts: 0,
        errors: []
    };

    try {
        // Sync each store
        for (const [localStore, remoteTable] of Object.entries(TABLE_MAPPINGS)) {
            try {
                const result = await syncStore(localStore, remoteTable);
                syncResults.pushed += result.pushed;
                syncResults.pulled += result.pulled;
                syncResults.conflicts += result.conflicts;
            } catch (error) {
                syncResults.errors.push({ store: localStore, error: error.message });
            }
        }

        lastSyncTime = new Date();
        await DB.setSetting('lastSyncTime', lastSyncTime.toISOString());

        console.log('Full sync completed:', syncResults);
        updateSyncStatus('synced', `Last sync: ${formatSyncTime(lastSyncTime)}`);

        return { success: true, results: syncResults };

    } catch (error) {
        console.error('Full sync failed:', error);
        updateSyncStatus('error', 'Sync failed');
        return { success: false, error: error.message };

    } finally {
        syncInProgress = false;
    }
}

/**
 * Sync a specific store with Supabase
 */
async function syncStore(localStoreName, remoteTableName) {
    const result = { pushed: 0, pulled: 0, conflicts: 0 };
    const storeName = DB.STORES[localStoreName.toUpperCase()];

    // Get all local records
    const localRecords = await DB.getAll(storeName);
    
    // Get all remote records
    const { data: remoteRecords, error } = await supabaseClient
        .from(remoteTableName)
        .select('*');

    if (error) {
        throw new Error(`Failed to fetch ${remoteTableName}: ${error.message}`);
    }

    // Create maps for quick lookup
    const localMap = new Map(localRecords.map(r => [r.id, r]));
    const remoteMap = new Map((remoteRecords || []).map(r => [r.id, r]));

    // Process local records (push to server)
    for (const [id, localRecord] of localMap) {
        const remoteRecord = remoteMap.get(id);
        
        if (!remoteRecord) {
            // New local record - push to server
            await pushToSupabase(remoteTableName, localRecord);
            result.pushed++;
        } else {
            // Record exists on both - check for updates
            const conflict = await resolveConflict(localRecord, convertFromSupabase(remoteRecord));
            if (conflict.action === 'push') {
                await pushToSupabase(remoteTableName, localRecord);
                result.pushed++;
            } else if (conflict.action === 'pull') {
                await syncRecordToLocal(localStoreName, remoteRecord);
                result.pulled++;
            }
            if (conflict.hadConflict) result.conflicts++;
        }
    }

    // Process remote records not in local (pull from server)
    for (const [id, remoteRecord] of remoteMap) {
        if (!localMap.has(id)) {
            await syncRecordToLocal(localStoreName, remoteRecord);
            result.pulled++;
        }
    }

    return result;
}

/**
 * Resolve conflict between local and remote records
 */
async function resolveConflict(localRecord, remoteRecord) {
    const localTime = new Date(localRecord.updatedAt || localRecord.createdAt || 0).getTime();
    const remoteTime = new Date(remoteRecord.updatedAt || remoteRecord.createdAt || 0).getTime();
    
    // Check if records are different
    const localHash = hashRecord(localRecord);
    const remoteHash = hashRecord(remoteRecord);
    
    if (localHash === remoteHash) {
        return { action: 'none', hadConflict: false };
    }

    // Records are different - resolve conflict
    let action;
    switch (SYNC_CONFIG.CONFLICT_RESOLUTION) {
        case 'server_wins':
            action = 'pull';
            break;
        case 'client_wins':
            action = 'push';
            break;
        case 'latest_wins':
        default:
            action = localTime > remoteTime ? 'push' : 'pull';
    }

    return { action, hadConflict: true };
}

/**
 * Simple hash function for record comparison
 */
function hashRecord(record) {
    const { id, createdAt, updatedAt, syncedAt, ...data } = record;
    return JSON.stringify(data);
}

/**
 * Push a record to Supabase
 */
async function pushToSupabase(tableName, record) {
    const supabaseRecord = convertToSupabase(record);
    
    let error;
    
    // Handle different table types
    if (tableName === 'bsm_settings') {
        // Settings table uses 'key' as primary key, not 'id'
        const result = await supabaseClient
            .from(tableName)
            .upsert(supabaseRecord, { onConflict: 'key' });
        error = result.error;
    } else if (tableName === 'bsm_logs') {
        // Logs table - insert only (no upsert) since IDs are auto-generated
        // Check if record already exists on server
        const { data: existing } = await supabaseClient
            .from(tableName)
            .select('id')
            .eq('id', supabaseRecord.id)
            .single();
        
        if (!existing) {
            // Remove local id for insert (let server generate it)
            const { id, ...insertRecord } = supabaseRecord;
            const result = await supabaseClient
                .from(tableName)
                .insert(insertRecord);
            error = result.error;
        }
        // If exists, skip (already synced)
    } else {
        // All other tables use 'id' as primary key
        const result = await supabaseClient
            .from(tableName)
            .upsert(supabaseRecord, { onConflict: 'id' });
        error = result.error;
    }

    if (error) {
        throw new Error(`Failed to push to ${tableName}: ${error.message}`);
    }

    // Update local record with sync time
    record.syncedAt = new Date().toISOString();
}

/**
 * Convert local record to Supabase format
 */
function convertToSupabase(record) {
    const converted = { ...record };
    
    // Ensure required fields
    if (!converted.createdAt) {
        converted.createdAt = new Date().toISOString();
    }
    converted.updatedAt = new Date().toISOString();
    
    // Convert arrays and objects to JSON strings for storage
    for (const [key, value] of Object.entries(converted)) {
        if (Array.isArray(value) || (typeof value === 'object' && value !== null && !(value instanceof Date))) {
            converted[key] = JSON.stringify(value);
        }
    }
    
    // Convert camelCase to snake_case for Supabase
    const snakeCaseRecord = {};
    for (const [key, value] of Object.entries(converted)) {
        const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        snakeCaseRecord[snakeKey] = value;
    }
    
    return snakeCaseRecord;
}

/**
 * Convert Supabase record to local format
 */
function convertFromSupabase(record) {
    if (!record) return null;
    
    const converted = {};
    
    // Convert snake_case to camelCase
    for (const [key, value] of Object.entries(record)) {
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        converted[camelKey] = value;
    }
    
    // Parse JSON strings back to arrays/objects
    const jsonFields = ['tasks', 'assignedStaff', 'taskSteps', 'taskQcChecks', 'productsWorked', 'breakdown'];
    for (const field of jsonFields) {
        if (converted[field] && typeof converted[field] === 'string') {
            try {
                converted[field] = JSON.parse(converted[field]);
            } catch (e) {
                // Keep as string if not valid JSON
            }
        }
    }
    
    return converted;
}

/**
 * Queue a change for offline sync
 */
function queueOfflineChange(action, storeName, record) {
    syncQueue.push({
        id: Date.now(),
        action,
        storeName,
        record,
        timestamp: new Date().toISOString(),
        attempts: 0
    });
    
    // Persist queue to localStorage
    localStorage.setItem('bsm_sync_queue', JSON.stringify(syncQueue));
}

/**
 * Process queued offline changes
 */
async function processOfflineQueue() {
    const queuedChanges = JSON.parse(localStorage.getItem('bsm_sync_queue') || '[]');
    
    if (queuedChanges.length === 0) return;

    console.log(`Processing ${queuedChanges.length} queued changes`);

    const failedChanges = [];

    for (const change of queuedChanges) {
        try {
            const tableName = TABLE_MAPPINGS[change.storeName];
            
            switch (change.action) {
                case 'create':
                case 'update':
                    await pushToSupabase(tableName, change.record);
                    break;
                case 'delete':
                    await supabaseClient.from(tableName).delete().eq('id', change.record.id);
                    break;
            }
        } catch (error) {
            change.attempts++;
            if (change.attempts < SYNC_CONFIG.RETRY_ATTEMPTS) {
                failedChanges.push(change);
            } else {
                console.error('Giving up on change after max retries:', change);
            }
        }
    }

    // Update queue with failed changes
    syncQueue = failedChanges;
    localStorage.setItem('bsm_sync_queue', JSON.stringify(syncQueue));
}

/**
 * Start auto-sync interval
 */
function startAutoSync() {
    setInterval(async () => {
        if (networkOnline && !syncInProgress) {
            await performFullSync();
        }
    }, SYNC_CONFIG.SYNC_INTERVAL);
}

/**
 * Update sync status in UI
 */
function updateSyncStatus(status, message) {
    const statusElement = document.getElementById('syncStatus');
    if (!statusElement) return;

    let icon, color;
    switch (status) {
        case 'synced':
            icon = 'fas fa-cloud-check';
            color = 'var(--success-500)';
            break;
        case 'syncing':
            icon = 'fas fa-sync fa-spin';
            color = 'var(--primary-500)';
            break;
        case 'offline':
            icon = 'fas fa-cloud-slash';
            color = 'var(--warning-500)';
            break;
        case 'error':
            icon = 'fas fa-exclamation-triangle';
            color = 'var(--danger-500)';
            break;
        default:
            icon = 'fas fa-cloud';
            color = 'var(--gray-500)';
    }

    statusElement.innerHTML = `
        <i class="${icon}" style="color: ${color};"></i>
        <span>${message}</span>
    `;
}

/**
 * Format sync time for display
 */
function formatSyncTime(date) {
    if (!date) return 'Never';
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
}

/**
 * Trigger UI refresh after sync
 */
function triggerUIRefresh(storeName) {
    // Dispatch custom event for UI components to listen to
    window.dispatchEvent(new CustomEvent('bsm-data-updated', { 
        detail: { store: storeName } 
    }));

    // Refresh specific modules
    switch (storeName) {
        case 'staff':
            if (typeof Staff !== 'undefined') Staff.load();
            break;
        case 'duties':
            if (typeof Duties !== 'undefined') Duties.load();
            break;
        case 'roster':
            if (typeof Roster !== 'undefined') Roster.load();
            break;
        case 'production':
            if (typeof Production !== 'undefined') Production.load();
            break;
        case 'logs':
            if (typeof Reports !== 'undefined') Reports.loadAuditLog();
            break;
    }
}

/**
 * Manual sync trigger
 */
async function manualSync() {
    if (!networkOnline) {
        Utils.showToast('warning', 'Offline', 'Cannot sync while offline');
        return;
    }
    
    Utils.showToast('info', 'Syncing', 'Starting sync...');
    const result = await performFullSync();
    
    if (result.success) {
        Utils.showToast('success', 'Synced', 
            `Pushed: ${result.results.pushed}, Pulled: ${result.results.pulled}`);
    } else {
        Utils.showToast('error', 'Sync Failed', result.error || 'Unknown error');
    }
}

/**
 * Get sync status
 */
function getSyncStatus() {
    return {
        isOnline: networkOnline,
        syncInProgress,
        lastSyncTime,
        queuedChanges: syncQueue.length,
        supabaseConnected: supabaseClient !== null
    };
}

/**
 * Wrapper functions for CRUD operations with sync
 */
const SyncDB = {
    /**
     * Add record with sync
     */
    async add(storeName, record) {
        // Add timestamps
        record.createdAt = new Date().toISOString();
        record.updatedAt = record.createdAt;
        
        // Save locally first
        const id = await DB.add(storeName, record);
        record.id = id;
        
        // Sync to cloud
        if (networkOnline && supabaseClient) {
            try {
                const tableName = TABLE_MAPPINGS[getStoreKey(storeName)];
                await pushToSupabase(tableName, record);
            } catch (error) {
                console.error('Failed to sync add:', error);
                queueOfflineChange('create', getStoreKey(storeName), record);
            }
        } else {
            queueOfflineChange('create', getStoreKey(storeName), record);
        }
        
        return id;
    },

    /**
     * Update record with sync
     */
    async update(storeName, record) {
        // Update timestamp
        record.updatedAt = new Date().toISOString();
        
        // Save locally first
        await DB.update(storeName, record);
        
        // Sync to cloud
        if (networkOnline && supabaseClient) {
            try {
                const tableName = TABLE_MAPPINGS[getStoreKey(storeName)];
                await pushToSupabase(tableName, record);
            } catch (error) {
                console.error('Failed to sync update:', error);
                queueOfflineChange('update', getStoreKey(storeName), record);
            }
        } else {
            queueOfflineChange('update', getStoreKey(storeName), record);
        }
    },

    /**
     * Delete record with sync
     */
    async delete(storeName, id) {
        // Get record before deleting for queue
        const record = await DB.get(storeName, id);
        
        // Delete locally first
        await DB.delete(storeName, id);
        
        // Sync to cloud
        if (networkOnline && supabaseClient) {
            try {
                const tableName = TABLE_MAPPINGS[getStoreKey(storeName)];
                await supabaseClient.from(tableName).delete().eq('id', id);
            } catch (error) {
                console.error('Failed to sync delete:', error);
                queueOfflineChange('delete', getStoreKey(storeName), { id });
            }
        } else {
            queueOfflineChange('delete', getStoreKey(storeName), { id });
        }
    }
};

/**
 * Get store key from store name
 */
function getStoreKey(storeName) {
    for (const [key, value] of Object.entries(DB.STORES)) {
        if (value === storeName) return key.toLowerCase();
    }
    return storeName;
}

// =============================================
// AUTHENTICATION FUNCTIONS
// =============================================

/**
 * Show login screen
 */
function showLoginScreen() {
    const app = document.getElementById('app');
    const existingLogin = document.getElementById('loginScreen');
    if (existingLogin) existingLogin.remove();

    const loginScreen = document.createElement('div');
    loginScreen.id = 'loginScreen';
    loginScreen.className = 'login-screen';
    loginScreen.innerHTML = `
        <div class="login-container">
            <div class="login-header">
                <div class="login-logo">
                    <i class="fas fa-industry"></i>
                </div>
                <h1>ASTRO-BSM</h1>
                <p>Factory Operations System</p>
            </div>
            <form id="loginForm" class="login-form" onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label for="loginUsername">
                        <i class="fas fa-user"></i> Username
                    </label>
                    <input type="text" id="loginUsername" placeholder="Enter username" required autocomplete="username">
                </div>
                <div class="form-group">
                    <label for="loginPassword">
                        <i class="fas fa-lock"></i> Password
                    </label>
                    <div class="password-input">
                        <input type="password" id="loginPassword" placeholder="Enter password" required autocomplete="current-password">
                        <button type="button" class="toggle-password" onclick="togglePasswordVisibility()">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div id="loginError" class="login-error hidden"></div>
                <button type="submit" class="btn btn-primary login-btn">
                    <i class="fas fa-sign-in-alt"></i> Login
                </button>
            </form>
            <div class="login-footer">
                <p>Secure Access Only</p>
                <small>v1.1.0</small>
            </div>
        </div>
    `;

    document.body.insertBefore(loginScreen, app);
    app.style.display = 'none';
    
    // Focus on username field
    setTimeout(() => document.getElementById('loginUsername').focus(), 100);
}

/**
 * Toggle password visibility
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('loginPassword');
    const toggleBtn = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleBtn.className = 'fas fa-eye';
    }
}

/**
 * Handle login form submission
 */
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    const loginBtn = document.querySelector('.login-btn');
    
    // Show loading state
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    errorDiv.classList.add('hidden');
    
    // Simulate network delay for security
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Validate credentials
    const user = AUTH_CONFIG.users[username];
    
    if (user && user.password === password) {
        // Successful login
        currentUser = {
            username,
            role: user.role,
            permissions: user.permissions,
            loginTime: new Date().toISOString()
        };
        
        // Save session
        const session = {
            ...currentUser,
            expires: Date.now() + AUTH_CONFIG.sessionDuration
        };
        localStorage.setItem(AUTH_CONFIG.sessionKey, JSON.stringify(session));
        
        // Log the login
        console.log(`User logged in: ${username} (${user.role})`);
        
        // Hide login screen and show app
        document.getElementById('loginScreen').remove();
        document.getElementById('app').style.display = '';
        
        // Update UI for user role
        updateUIForRole();
        
        // Show welcome message
        if (typeof Utils !== 'undefined') {
            Utils.showToast('success', 'Welcome', `Logged in as ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}`);
        }
        
    } else {
        // Failed login
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.classList.remove('hidden');
        
        // Shake animation
        document.querySelector('.login-container').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.login-container').classList.remove('shake');
        }, 500);
        
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
    }
}

/**
 * Check for existing session
 */
function checkSession() {
    const sessionData = localStorage.getItem(AUTH_CONFIG.sessionKey);
    
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            
            // Check if session is still valid
            if (session.expires > Date.now()) {
                currentUser = {
                    username: session.username,
                    role: session.role,
                    permissions: session.permissions,
                    loginTime: session.loginTime
                };
                return true;
            } else {
                // Session expired
                localStorage.removeItem(AUTH_CONFIG.sessionKey);
            }
        } catch (e) {
            localStorage.removeItem(AUTH_CONFIG.sessionKey);
        }
    }
    
    return false;
}

/**
 * Update UI based on user role
 */
function updateUIForRole() {
    if (!currentUser) return;
    
    // Update header to show current user
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        // Remove existing user badge if any
        const existingBadge = headerActions.querySelector('.user-badge');
        if (existingBadge) existingBadge.remove();
        
        // Add user badge
        const userBadge = document.createElement('div');
        userBadge.className = 'user-badge';
        userBadge.innerHTML = `
            <span class="role-indicator ${currentUser.role}">
                <i class="fas fa-${currentUser.role === 'admin' ? 'user-shield' : 'user-tie'}"></i>
                ${currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}
            </span>
            <button class="btn-icon" onclick="logout()" title="Logout">
                <i class="fas fa-sign-out-alt"></i>
            </button>
        `;
        headerActions.insertBefore(userBadge, headerActions.firstChild);
    }
    
    // Hide/show elements based on permissions
    if (currentUser.role === 'supervisor') {
        // Hide admin-only elements
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = 'none';
        });
        
        // Hide settings nav for supervisors
        const settingsNav = document.querySelector('[data-page="settings"]');
        if (settingsNav) settingsNav.style.display = 'none';
    }
}

/**
 * Check if user has permission
 */
function hasPermission(permission) {
    if (!currentUser) return false;
    return currentUser.permissions.includes(permission);
}

/**
 * Logout user
 */
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem(AUTH_CONFIG.sessionKey);
        currentUser = null;
        
        // Show login screen
        showLoginScreen();
        
        console.log('User logged out');
    }
}

/**
 * Get current user
 */
function getCurrentUser() {
    return currentUser;
}

// Export Supabase sync module
window.SupabaseSync = {
    init: initSupabase,
    sync: performFullSync,
    manualSync,
    getStatus: getSyncStatus,
    SyncDB,
    isOnline: () => networkOnline,
    isConnected: () => supabaseClient !== null
};

// Export Auth module
window.Auth = {
    showLogin: showLoginScreen,
    checkSession,
    logout,
    getCurrentUser,
    hasPermission,
    updateUIForRole
};

// Export SyncDB globally for easy access
window.SyncDB = SyncDB;
