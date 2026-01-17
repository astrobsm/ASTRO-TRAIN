# ASTRO-BSM Factory Operations

## GMP-Compliant Factory Operations & Duty Roster Management System

A mobile-first Progressive Web Application (PWA) for managing factory operations, staff duties, and production scheduling at BONNESANTE MEDICALS.

---

## 🚀 Features

### Staff Management
- ✅ Add, edit, and manage staff profiles
- ✅ Unique Staff IDs (ASTRO-001, ASTRO-002, etc.)
- ✅ Role-based assignments
- ✅ Active/Inactive status tracking

### Duties Management
- ✅ Configurable duty list with descriptions
- ✅ Required checks/verification items
- ✅ Start/End time scheduling
- ✅ 9 pre-configured GMP duties

### Rotational Duty Roster
- ✅ **Working Days**: Monday, Wednesday, Saturday
- ✅ **Hours**: 08:30 AM - 05:00 PM
- ✅ Weekly rotation logic
- ✅ Auto-generate roster functionality
- ✅ Manual override capability
- ✅ Historical tracking
- ✅ Time-stamped sign-off
- ✅ Completion tracking

### Production Scheduling
- ✅ Production date & time picker
- ✅ Product selection (WOUND CLEX®, HERA Gel, etc.)
- ✅ Target quantity planning
- ✅ Batch number tracking
- ✅ Staff assignment
- ✅ 7 production stages:
  - Raw Material Preparation
  - Packaging Preparation
  - Compounding
  - Packaging
  - Transfer to Warehouse
  - Equipment Cleaning
  - Line Clearance
- ✅ Task verification checkboxes
- ✅ Progress tracking
- ✅ Supervisor approval

### Logs & Reports
- ✅ Daily Duty Report
- ✅ Weekly Roster Report
- ✅ Production Schedule Report
- ✅ Complete Audit Trail
- ✅ Export to PDF (Print)
- ✅ Export to CSV

### Security & Access Control
- ✅ Role-based access (Admin/Supervisor/Staff)
- ✅ PIN protection option
- ✅ Automatic timestamping
- ✅ Immutable audit logs

### PWA Features
- ✅ **100% Offline Functionality**
- ✅ Service Worker caching
- ✅ IndexedDB local storage
- ✅ Install to home screen
- ✅ Works on Android, iOS, and Desktop

---

## 📁 Project Structure

```
astro-bsm/
├── index.html          # Main HTML shell
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── css/
│   └── app.css        # Complete styling
├── js/
│   ├── db.js          # IndexedDB operations
│   ├── utils.js       # Utility functions
│   ├── staff.js       # Staff management
│   ├── duties.js      # Duties management
│   ├── roster.js      # Roster management
│   ├── production.js  # Production scheduling
│   ├── reports.js     # Reports & export
│   └── app.js         # Main application
├── icons/
│   └── icon.svg       # App icon source
└── README.md          # This file
```

---

## 🛠️ Installation

### Local Development

1. Open the `astro-bsm` folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Access at `http://localhost:5500`

### Deploy to Vercel

1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy (no build step required)

### Install as PWA

1. Open the app in Chrome/Edge/Safari
2. Click the install icon in the address bar
3. Or use browser menu → "Install App"

---

## 📱 Working Days Configuration

The system is configured for the following working schedule:

| Day       | Hours           |
|-----------|-----------------|
| Monday    | 08:30 - 17:00   |
| Wednesday | 08:30 - 17:00   |
| Saturday  | 08:30 - 17:00   |

---

## 🔐 Default Data

The application comes pre-seeded with:

### Staff (8 members)
- John Okafor (Production Supervisor)
- Mary Adeyemi (Quality Control Officer)
- David Nwosu (Production Operator)
- Grace Okonkwo (Production Operator)
- Samuel Eze (Packaging Technician)
- Blessing Uche (Hygiene Officer)
- Emmanuel Ikenna (Warehouse Staff)
- Chidinma Agu (Production Operator)

### Duties (9 configured)
1. Floor Sanitation
2. Clothing Hygiene Check
3. Hand Wash Station
4. Tools Inventory
5. Waste Management
6. Line Cleaning
7. Hygiene Compliance Audit
8. Supplies Support
9. Daily Coordination

### Products
- WOUND CLEX® Solution
- HERA Wound Gel
- Wound Care Gauze
- Hand Sanitizer
- Surface Disinfectant

---

## 💾 Data Backup

### Export Data
- Settings → Data Management → Download Backup
- Creates JSON file with all data

### Restore Data
- Settings → Data Management → Restore from Backup
- Select previously exported JSON file

### Reset Data
- Settings → Data Management → Reset Application
- ⚠️ Deletes ALL data permanently

---

## 🎨 Design System

- **Primary Color**: #1a365d (Deep Navy)
- **Accent Color**: #3182ce (Blue)
- **Font**: Inter (Google Fonts)
- **Icons**: Font Awesome 6
- **Design**: Clean, professional, GMP-compliant

---

## 📄 License

© 2026 BONNESANTE MEDICALS. All rights reserved.

---

## 🔧 Technical Details

- **Storage**: IndexedDB (offline-first)
- **UI Framework**: Vanilla JavaScript (no dependencies)
- **Styling**: Custom CSS with CSS Variables
- **PWA**: Service Worker + Web App Manifest
- **Compatibility**: Chrome, Edge, Safari, Firefox (latest)

---

## 📞 Support

For technical support, contact your IT administrator.
