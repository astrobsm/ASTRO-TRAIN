/**
 * ASTRO-BSM Factory Operations
 * Utility Functions Module
 */

/**
 * Date & Time Utilities
 */

// Format date as YYYY-MM-DD
function formatDate(date) {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
}

// Format date for display (e.g., "Mon, Jan 15, 2026")
function formatDateDisplay(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Format time for display (e.g., "08:30 AM")
function formatTime(time) {
    if (!time) return '-';
    const [hours, minutes] = time.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

// Format datetime for display
function formatDateTime(datetime) {
    const d = new Date(datetime);
    return d.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get current timestamp
function getTimestamp() {
    return new Date().toISOString();
}

// Get week number of the year
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getFullYear()}-W${weekNo.toString().padStart(2, '0')}`;
}

// Get dates for a specific week
function getWeekDates(weekString) {
    const [year, week] = weekString.split('-W');
    const jan1 = new Date(year, 0, 1);
    const days = (parseInt(week) - 1) * 7;
    const weekStart = new Date(jan1.getTime() + days * 86400000);
    
    // Adjust to Monday
    const dayOffset = (weekStart.getDay() + 6) % 7;
    weekStart.setDate(weekStart.getDate() - dayOffset);
    
    return {
        monday: new Date(weekStart),
        wednesday: new Date(weekStart.getTime() + 2 * 86400000),
        saturday: new Date(weekStart.getTime() + 5 * 86400000)
    };
}

// Check if date is a working day (Mon, Wed, Sat)
function isWorkingDay(date) {
    const d = new Date(date);
    const day = d.getDay();
    return day === 1 || day === 3 || day === 6; // Mon=1, Wed=3, Sat=6
}

// Get day name from date
function getDayName(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
}

/**
 * String Utilities
 */

// Generate unique ID
function generateId(prefix = 'ID') {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}-${timestamp}${random}`.toUpperCase();
}

// Capitalize first letter
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Truncate text
function truncate(str, length = 50) {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + '...';
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Validation Utilities
 */

// Validate required fields
function validateRequired(value, fieldName) {
    if (!value || (typeof value === 'string' && !value.trim())) {
        return `${fieldName} is required`;
    }
    return null;
}

// Validate time format (HH:MM)
function validateTime(time) {
    const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return regex.test(time);
}

// Validate form data
function validateForm(formData, rules) {
    const errors = [];
    
    for (const field in rules) {
        const value = formData[field];
        const fieldRules = rules[field];
        
        if (fieldRules.required) {
            const error = validateRequired(value, fieldRules.label || field);
            if (error) errors.push(error);
        }
        
        if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
            errors.push(`${fieldRules.label || field} must be at least ${fieldRules.minLength} characters`);
        }
        
        if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
            errors.push(`${fieldRules.label || field} format is invalid`);
        }
    }
    
    return errors;
}

/**
 * DOM Utilities
 */

// Query selector shorthand
function $(selector, parent = document) {
    return parent.querySelector(selector);
}

function $$(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

// Create element with attributes
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'innerHTML') {
            element.innerHTML = value;
        } else if (key === 'textContent') {
            element.textContent = value;
        } else if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === 'dataset') {
            for (const [dataKey, dataValue] of Object.entries(value)) {
                element.dataset[dataKey] = dataValue;
            }
        } else {
            element.setAttribute(key, value);
        }
    }
    
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    }
    
    return element;
}

/**
 * Toast Notifications
 */
function showToast(type, title, message, duration = 5000) {
    const container = document.getElementById('toastContainer');
    
    const icons = {
        success: 'fas fa-check',
        error: 'fas fa-times',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info'
    };
    
    const toast = createElement('div', { className: `toast ${type}` }, [
        createElement('div', { className: 'toast-icon', innerHTML: `<i class="${icons[type]}"></i>` }),
        createElement('div', { className: 'toast-content' }, [
            createElement('div', { className: 'toast-title', textContent: title }),
            createElement('div', { className: 'toast-message', textContent: message })
        ]),
        createElement('button', { 
            className: 'toast-close',
            innerHTML: '<i class="fas fa-times"></i>',
            onClick: () => removeToast(toast)
        })
    ]);
    
    container.appendChild(toast);
    
    // Auto remove
    setTimeout(() => removeToast(toast), duration);
}

function removeToast(toast) {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
}

// Add toast out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes toastOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
    }
`;
document.head.appendChild(style);

/**
 * Modal Utilities
 */
function showModal(title, content, footer = '') {
    const container = document.getElementById('modalContainer');
    const modal = document.getElementById('modalContent');
    
    modal.innerHTML = `
        <div class="modal-header">
            <h2>${escapeHtml(title)}</h2>
            <button class="modal-close" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
            ${content}
        </div>
        ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
    `;
    
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const container = document.getElementById('modalContainer');
    container.classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Confirmation Dialog
 */
function confirmDialog(title, message, onConfirm, onCancel = null) {
    const content = `<p style="text-align: center; color: var(--gray-600);">${escapeHtml(message)}</p>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal(); ${onCancel ? onCancel.name + '()' : ''}">Cancel</button>
        <button class="btn btn-danger" onclick="closeModal(); ${onConfirm.name}()">Confirm</button>
    `;
    
    showModal(title, content, footer);
}

/**
 * Export Utilities
 */

// Generate CSV from data
function generateCSV(data, columns) {
    const headers = columns.map(c => c.label).join(',');
    const rows = data.map(item => 
        columns.map(c => {
            let value = item[c.key];
            if (typeof value === 'string' && value.includes(',')) {
                value = `"${value}"`;
            }
            return value || '';
        }).join(',')
    );
    
    return [headers, ...rows].join('\n');
}

// Download file
function downloadFile(content, filename, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Download JSON
function downloadJSON(data, filename) {
    const content = JSON.stringify(data, null, 2);
    downloadFile(content, filename, 'application/json');
}

// Download CSV
function downloadCSV(data, columns, filename) {
    const content = generateCSV(data, columns);
    downloadFile(content, filename, 'text/csv');
}

/**
 * PDF Generation (Simple HTML-based)
 */
function generatePDFContent(title, content) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${escapeHtml(title)}</title>
            <style>
                body {
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 40px;
                    color: #333;
                }
                h1 {
                    color: #1a365d;
                    border-bottom: 2px solid #3182ce;
                    padding-bottom: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: left;
                }
                th {
                    background: #1a365d;
                    color: white;
                }
                tr:nth-child(even) {
                    background: #f7fafc;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .footer {
                    margin-top: 40px;
                    text-align: center;
                    font-size: 12px;
                    color: #718096;
                }
                .signature-section {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 60px;
                }
                .signature-box {
                    width: 200px;
                    text-align: center;
                }
                .signature-line {
                    border-top: 1px solid #333;
                    margin-top: 50px;
                    padding-top: 5px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${escapeHtml(title)}</h1>
                <p>ASTRO-BSM Factory Operations</p>
                <p>Generated: ${formatDateTime(new Date())}</p>
            </div>
            ${content}
            <div class="footer">
                <p>This is a computer-generated document. © 2026 BONNESANTE MEDICALS</p>
            </div>
        </body>
        </html>
    `;
}

function printPDF(title, content) {
    const html = generatePDFContent(title, content);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

/**
 * Storage Utilities
 */
function getLocalStorage(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch {
        return defaultValue;
    }
}

function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

/**
 * Network Status
 */
function isOnline() {
    return navigator.onLine;
}

function setupNetworkListeners() {
    const indicator = document.getElementById('offlineIndicator');
    
    const updateStatus = () => {
        if (isOnline()) {
            indicator.classList.add('hidden');
        } else {
            indicator.classList.remove('hidden');
        }
    };
    
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
}

/**
 * Debounce Function
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle Function
 */
function throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export utilities
window.Utils = {
    formatDate,
    formatDateDisplay,
    formatTime,
    formatDateTime,
    getTimestamp,
    getWeekNumber,
    getWeekDates,
    isWorkingDay,
    getDayName,
    generateId,
    capitalize,
    truncate,
    escapeHtml,
    validateRequired,
    validateTime,
    validateForm,
    $,
    $$,
    createElement,
    showToast,
    showModal,
    closeModal,
    confirmDialog,
    generateCSV,
    downloadFile,
    downloadJSON,
    downloadCSV,
    printPDF,
    getLocalStorage,
    setLocalStorage,
    isOnline,
    setupNetworkListeners,
    debounce,
    throttle
};
