# BONNESANTE MEDICALS - Training Presentation Portal

## Interactive Training Presentations for GMP Compliance

---

## 📚 Available Presentations

### 1. WOUND CLEX® PROTOCOL
**Production Process Training - From Planning to Warehouse**
- 23 comprehensive slides
- Covers complete manufacturing workflow
- Raw materials to warehouse transfer
- Quality control checkpoints

### 2. HYGIENE & STERILITY PROTOCOL
**Production Environment Standards**
- 27 comprehensive slides
- Personal hygiene requirements
- Contamination prevention
- Cleaning & sanitization procedures
- Environmental monitoring
- PPE and gowning protocols

---

## 🚀 How to Open the Presentation

1. **Open `index.html`** in any modern web browser (Chrome, Firefox, Edge, Safari)
2. Select a presentation from the **Training Portal** menu
3. Navigate through slides using controls or keyboard

---

## 🎮 Controls & Navigation

### Keyboard Shortcuts:
| Key | Action |
|-----|--------|
| `→` or `Space` or `PageDown` | Next Slide |
| `←` or `PageUp` | Previous Slide |
| `Home` | First Slide |
| `End` | Last Slide |
| `F` | Toggle Fullscreen |
| `Z` | Open Zoom View |
| `Esc` | Close Zoom/Settings |

### On-Screen Controls:
- **🏠 Home Button** - Return to presentation menu
- **←→ Navigation Buttons** - Left/Right arrows on screen
- **⚙️ Settings Gear Icon** - Top right corner
- **⛶ Fullscreen Icon** - Top right corner
- **🔍 Zoom Icon** - Top right corner
- **▦ Thumbnail Grid** - Bottom center (click to toggle)

### Touch/Swipe:
- **Swipe Left** - Next Slide
- **Swipe Right** - Previous Slide

---

## ⚙️ Settings Panel Features

### 1. Slide Editor
- Select any slide to edit
- Modify titles and content
- Changes are saved automatically to browser storage

### 2. Image Upload
- Select a slide
- Upload an image (PNG, JPG, GIF, etc.)
- Click "Apply Image" to add it to the slide
- Images are stored in browser memory

### 3. Transition Settings
- **Morph** - Smooth morphing effect (default)
- **Fade** - Classic fade transition
- **Slide** - Horizontal slide effect
- **Zoom** - Zoom in/out effect
- **Flip** - 3D flip animation
- **Cube** - 3D cube rotation
- Adjustable transition speed (300ms - 1500ms)

### 4. Theme Colors
- Primary Color
- Secondary Color
- Accent Color

---

## 📁 File Structure

```
WOUND CLEX TEACHING/
├── index.html              # Main presentation file with menu
├── styles.css              # All styling and animations
├── slides-data.js          # WOUND CLEX slide content
├── hygiene-slides-data.js  # HYGIENE & STERILITY slide content
├── presentation.js         # Presentation engine
├── README.md               # This file
└── E:\ASTRONLOGO.png       # Company logo (external path)
```

---

## 🎨 Customization

### Editing Slide Content:
1. Open `slides-data.js` in any text editor
2. Modify the `slidesData` array
3. Each slide object contains:
   - `id` - Unique slide number
   - `type` - 'title', 'standard', 'flow', or 'conclusion'
   - `title` - Slide title
   - `subtitle` - Slide subtitle
   - `columns` - Content columns with headings and items
   - `image` - Optional image path

### Company Information:
Edit the `companyInfo` object in `slides-data.js`:
```javascript
const companyInfo = {
    name: 'BONNESANTE MEDICALS',
    logo: 'E:\\ASTRONLOGO.png',
    tagline: 'Excellence in Healthcare',
    year: 2026
};
```

### Adding the Company Logo:
1. Place your logo at the specified path: `E:\ASTRONLOGO.png`
2. Or update the path in `slides-data.js`
3. Recommended: PNG format with transparent background
4. Optimal size: 200x200 pixels or larger

---

## 📊 Slide Overview

### WOUND CLEX® PROTOCOL (23 Slides)
| Slide | Title |
|-------|-------|
| 1 | Title & Objectives |
| 2 | Product Overview |
| 3 | Regulatory & Quality Framework |
| 4 | Production Flow Overview |
| 5 | Production Planning |
| 6 | Raw Material Procurement |
| 7 | Raw Material Receipt & Inspection |
| 8 | Water Purification |
| 9 | Equipment Preparation |
| 10 | Solution Compounding |
| 11 | In-Process Quality Control |
| 12 | Filtration |
| 13 | Bottle Preparation |
| 14 | Filling Operation |
| 15 | Capping & Sealing |
| 16 | Labeling |
| 17 | Final Quality Inspection |
| 18 | Secondary Packaging |
| 19 | Warehouse Transfer |
| 20 | Staff Responsibilities |
| 21 | Safety & Hygiene Rules |
| 22 | Documentation & Traceability |
| 23 | Conclusion |

### HYGIENE & STERILITY PROTOCOL (27 Slides)
| Slide | Title |
|-------|-------|
| 1 | Title & Objectives |
| 2 | Why Hygiene Matters |
| 3 | Types of Contamination |
| 4 | Sources of Contamination |
| 5 | Production Area Classification |
| 6 | Personal Hygiene Requirements |
| 7 | Hand Hygiene Protocol |
| 8 | Gowning Procedure Overview |
| 9 | Personal Protective Equipment (PPE) |
| 10 | Glove Protocol |
| 11 | Behavior in Production Areas |
| 12 | Air Quality Management |
| 13 | Cleaning Principles |
| 14 | Cleaning Agents & Sanitizers |
| 15 | Equipment Cleaning Procedures |
| 16 | Surface & Area Cleaning |
| 17 | Water System Hygiene |
| 18 | Environmental Monitoring |
| 19 | Waste Management |
| 20 | Pest Control |
| 21 | Cleaning Validation |
| 22 | Hygiene Documentation |
| 23 | Common Hygiene Mistakes |
| 24 | Training Requirements |
| 25 | Responding to Contamination Events |
| 26 | Hygiene Key Performance Indicators |
| 27 | Conclusion |

---

## 💾 Data Persistence

All settings (colors, transitions, images, edits) are automatically saved to your browser's local storage. To reset everything:

1. Open browser developer tools (F12)
2. Go to Console
3. Type: `window.presentationDebug.resetPresentation()`
4. Press Enter

---

## 🏥 GMP Compliance

This presentation is designed for **Good Manufacturing Practice (GMP)** training for:
- Medical liquid cleaning agents
- Hospital-grade wound care products
- Pharmaceutical manufacturing processes

---

## 📞 Contact

**BONNESANTE MEDICALS**
Excellence in Healthcare

---

© 2026 BONNESANTE MEDICALS - All Rights Reserved
