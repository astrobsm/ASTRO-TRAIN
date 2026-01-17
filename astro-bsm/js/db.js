/**
 * ASTRO-BSM Factory Operations
 * IndexedDB Database Module
 * Handles all local data storage with full offline support
 */

const DB_NAME = 'ASTROBSM_DB';
const DB_VERSION = 1;

// Store names
const STORES = {
    STAFF: 'staff',
    DUTIES: 'duties',
    ROSTER: 'roster',
    PRODUCTION: 'production',
    LOGS: 'logs',
    SETTINGS: 'settings'
};

let db = null;

/**
 * Initialize the IndexedDB database
 */
async function initDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            console.error('Failed to open database:', request.error);
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            console.log('Database opened successfully');
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const database = event.target.result;

            // Staff Store
            if (!database.objectStoreNames.contains(STORES.STAFF)) {
                const staffStore = database.createObjectStore(STORES.STAFF, { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                staffStore.createIndex('staffId', 'staffId', { unique: true });
                staffStore.createIndex('name', 'name', { unique: false });
                staffStore.createIndex('status', 'status', { unique: false });
            }

            // Duties Store
            if (!database.objectStoreNames.contains(STORES.DUTIES)) {
                const dutiesStore = database.createObjectStore(STORES.DUTIES, { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                dutiesStore.createIndex('name', 'name', { unique: false });
                dutiesStore.createIndex('status', 'status', { unique: false });
            }

            // Roster Store
            if (!database.objectStoreNames.contains(STORES.ROSTER)) {
                const rosterStore = database.createObjectStore(STORES.ROSTER, { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                rosterStore.createIndex('date', 'date', { unique: false });
                rosterStore.createIndex('weekNumber', 'weekNumber', { unique: false });
                rosterStore.createIndex('staffId', 'staffId', { unique: false });
                rosterStore.createIndex('dutyId', 'dutyId', { unique: false });
            }

            // Production Store
            if (!database.objectStoreNames.contains(STORES.PRODUCTION)) {
                const productionStore = database.createObjectStore(STORES.PRODUCTION, { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                productionStore.createIndex('date', 'date', { unique: false });
                productionStore.createIndex('product', 'product', { unique: false });
                productionStore.createIndex('status', 'status', { unique: false });
            }

            // Logs Store (Audit Trail)
            if (!database.objectStoreNames.contains(STORES.LOGS)) {
                const logsStore = database.createObjectStore(STORES.LOGS, { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                logsStore.createIndex('timestamp', 'timestamp', { unique: false });
                logsStore.createIndex('action', 'action', { unique: false });
                logsStore.createIndex('entity', 'entity', { unique: false });
            }

            // Settings Store
            if (!database.objectStoreNames.contains(STORES.SETTINGS)) {
                database.createObjectStore(STORES.SETTINGS, { keyPath: 'key' });
            }

            console.log('Database schema created/updated');
        };
    });
}

/**
 * Generic CRUD Operations
 */

// Add a record
async function dbAdd(storeName, data) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        
        // Add timestamp for all records
        data.createdAt = new Date().toISOString();
        data.updatedAt = new Date().toISOString();
        
        const request = store.add(data);
        
        request.onsuccess = () => {
            // Log the action
            logAction('CREATE', storeName, { id: request.result, ...data });
            resolve(request.result);
        };
        
        request.onerror = () => reject(request.error);
    });
}

// Get a single record by ID
async function dbGet(storeName, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get(id);
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Get all records from a store
async function dbGetAll(storeName) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
    });
}

// Get records by index
async function dbGetByIndex(storeName, indexName, value) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const index = store.index(indexName);
        const request = index.getAll(value);
        
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
    });
}

// Update a record
async function dbUpdate(storeName, data) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        
        // Update timestamp
        data.updatedAt = new Date().toISOString();
        
        const request = store.put(data);
        
        request.onsuccess = () => {
            // Log the action
            logAction('UPDATE', storeName, data);
            resolve(request.result);
        };
        
        request.onerror = () => reject(request.error);
    });
}

// Delete a record
async function dbDelete(storeName, id) {
    return new Promise(async (resolve, reject) => {
        // Get the record first for logging
        const record = await dbGet(storeName, id);
        
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);
        
        request.onsuccess = () => {
            // Log the action
            logAction('DELETE', storeName, { id, ...record });
            resolve(true);
        };
        
        request.onerror = () => reject(request.error);
    });
}

// Clear all records from a store
async function dbClear(storeName) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.clear();
        
        request.onsuccess = () => {
            logAction('CLEAR', storeName, {});
            resolve(true);
        };
        
        request.onerror = () => reject(request.error);
    });
}

/**
 * Settings Operations
 */
async function getSetting(key) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SETTINGS, 'readonly');
        const store = transaction.objectStore(STORES.SETTINGS);
        const request = store.get(key);
        
        request.onsuccess = () => resolve(request.result?.value);
        request.onerror = () => reject(request.error);
    });
}

async function setSetting(key, value) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SETTINGS, 'readwrite');
        const store = transaction.objectStore(STORES.SETTINGS);
        const request = store.put({ key, value, updatedAt: new Date().toISOString() });
        
        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Audit Logging
 */
async function logAction(action, entity, data) {
    const logEntry = {
        action,
        entity,
        data: JSON.stringify(data),
        timestamp: new Date().toISOString(),
        user: await getSetting('currentUser') || 'System'
    };
    
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.LOGS, 'readwrite');
        const store = transaction.objectStore(STORES.LOGS);
        const request = store.add(logEntry);
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Backup & Restore
 */
async function exportAllData() {
    const data = {
        staff: await dbGetAll(STORES.STAFF),
        duties: await dbGetAll(STORES.DUTIES),
        roster: await dbGetAll(STORES.ROSTER),
        production: await dbGetAll(STORES.PRODUCTION),
        logs: await dbGetAll(STORES.LOGS),
        settings: await dbGetAll(STORES.SETTINGS),
        exportDate: new Date().toISOString(),
        version: DB_VERSION
    };
    
    return data;
}

async function importAllData(data) {
    // Validate data format
    if (!data.version || !data.staff || !data.duties) {
        throw new Error('Invalid backup file format');
    }
    
    // Clear existing data
    await dbClear(STORES.STAFF);
    await dbClear(STORES.DUTIES);
    await dbClear(STORES.ROSTER);
    await dbClear(STORES.PRODUCTION);
    
    // Import data
    for (const staff of data.staff) {
        delete staff.id; // Remove old ID to generate new one
        await dbAdd(STORES.STAFF, staff);
    }
    
    for (const duty of data.duties) {
        delete duty.id;
        await dbAdd(STORES.DUTIES, duty);
    }
    
    for (const roster of data.roster) {
        delete roster.id;
        await dbAdd(STORES.ROSTER, roster);
    }
    
    for (const production of data.production) {
        delete production.id;
        await dbAdd(STORES.PRODUCTION, production);
    }
    
    // Restore settings
    for (const setting of data.settings) {
        await setSetting(setting.key, setting.value);
    }
    
    logAction('IMPORT', 'ALL', { importDate: new Date().toISOString() });
    
    return true;
}

/**
 * Seed Default Data - Only seeds system settings (no placeholder data)
 */
async function seedDefaultData() {
    // Check if settings already exist
    const existingSettings = await dbGetAll(STORES.SETTINGS);
    if (existingSettings.length > 0) {
        console.log('Settings already exist, skipping seed');
        return;
    }
    
    console.log('Seeding default settings...');
    
    // Default Settings Only (No placeholder staff/duties)
    await setSetting('workStartTime', '08:30');
    await setSetting('workEndTime', '17:00');
    await setSetting('workingDays', ['monday', 'wednesday', 'saturday']);
    await setSetting('userRole', 'admin');
    await setSetting('currentUser', 'Administrator');
    
    console.log('Default settings seeded successfully');
}

// Export for use in other modules
window.DB = {
    init: initDatabase,
    add: dbAdd,
    get: dbGet,
    getAll: dbGetAll,
    getByIndex: dbGetByIndex,
    update: dbUpdate,
    delete: dbDelete,
    clear: dbClear,
    getSetting,
    setSetting,
    logAction,
    exportAll: exportAllData,
    importAll: importAllData,
    seedDefault: seedDefaultData,
    STORES
};
