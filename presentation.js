// ===== WOUND CLEX PROTOCOL - PRESENTATION ENGINE =====

let currentSlideIndex = 0;
let totalSlides = 0;
let currentZoom = 1;
let currentTransition = 'morph';
let transitionMode = 'auto'; // 'auto' for smart transitions, 'manual' for user-selected
let transitionSpeed = 800;
let uploadedImages = {};
let currentPresentation = null;
let activeSlides = [];

// SOP Password Protection
const SOP_PASSWORD = 'blackvelvet';
const SOP_PRESENTATIONS = ['sop-wound-clex', 'sop-hera-wound-gel', 'sop-wound-care-gauze'];

function checkSOPAccess(presentationType) {
    if (!SOP_PRESENTATIONS.includes(presentationType)) {
        return true; // Not an SOP, allow access
    }
    
    // Check if already authenticated in this session
    if (sessionStorage.getItem('sopAuthenticated') === 'true') {
        return true;
    }
    
    const password = prompt('🔒 SOP ACCESS RESTRICTED\n\nEnter password to access this SOP:');
    if (password === SOP_PASSWORD) {
        sessionStorage.setItem('sopAuthenticated', 'true');
        return true;
    } else if (password !== null) {
        alert('❌ Incorrect password. Access denied.');
    }
    return false;
}

// ===== PRESENTATION SELECTION =====
function selectPresentation(presentationType) {
    // Check SOP password protection
    if (!checkSOPAccess(presentationType)) {
        return; // Access denied
    }
    
    currentPresentation = presentationType;
    
    // Core Training Presentations
    if (presentationType === 'wound-clex') {
        activeSlides = slidesData;
        document.title = 'WOUND CLEX® PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'hygiene') {
        activeSlides = hygieneSlidesData;
        document.title = 'HYGIENE & STERILITY - BONNESANTE MEDICALS';
    } else if (presentationType === 'organization') {
        activeSlides = organizationSlidesData;
        document.title = 'WORKPLACE ORGANIZATION - BONNESANTE MEDICALS';
    } 
    // General Staff Training (01-05)
    else if (presentationType === 'company-orientation') {
        activeSlides = companyOrientationSlides;
        document.title = 'COMPANY ORIENTATION - BONNESANTE MEDICALS';
    } else if (presentationType === 'basic-wound-care') {
        activeSlides = basicWoundCareSlides;
        document.title = 'BASIC WOUND CARE - BONNESANTE MEDICALS';
    } else if (presentationType === 'product-knowledge') {
        activeSlides = productKnowledgeSlides;
        document.title = 'PRODUCT KNOWLEDGE - BONNESANTE MEDICALS';
    } else if (presentationType === 'qms-awareness') {
        activeSlides = qmsAwarenessSlides;
        document.title = 'QMS AWARENESS - BONNESANTE MEDICALS';
    } else if (presentationType === 'hse-training') {
        activeSlides = hseTrainingSlides;
        document.title = 'HSE TRAINING - BONNESANTE MEDICALS';
    }
    // Production Staff Training (06-13)
    else if (presentationType === 'gmp-production') {
        activeSlides = gmpProductionSlides;
        document.title = 'GMP PRODUCTION - BONNESANTE MEDICALS';
    } else if (presentationType === 'sop-compliance') {
        activeSlides = sopComplianceSlides;
        document.title = 'SOP COMPLIANCE - BONNESANTE MEDICALS';
    } else if (presentationType === 'raw-material') {
        activeSlides = rawMaterialSlides;
        document.title = 'RAW MATERIAL HANDLING - BONNESANTE MEDICALS';
    } else if (presentationType === 'water-purification') {
        activeSlides = waterPurificationSlides;
        document.title = 'WATER PURIFICATION - BONNESANTE MEDICALS';
    } else if (presentationType === 'liquid-compounding') {
        activeSlides = liquidCompoundingSlides;
        document.title = 'LIQUID COMPOUNDING - BONNESANTE MEDICALS';
    } else if (presentationType === 'quality-control') {
        activeSlides = qualityControlSlides;
        document.title = 'QUALITY CONTROL - BONNESANTE MEDICALS';
    } else if (presentationType === 'packaging-labeling') {
        activeSlides = packagingLabelingSlides;
        document.title = 'PACKAGING & LABELING - BONNESANTE MEDICALS';
    } else if (presentationType === 'equipment-handling') {
        activeSlides = equipmentHandlingSlides;
        document.title = 'EQUIPMENT HANDLING - BONNESANTE MEDICALS';
    }
    // Sales Staff Training (14-18)
    else if (presentationType === 'clinical-selling') {
        activeSlides = clinicalSellingSlides;
        document.title = 'CLINICAL SELLING - BONNESANTE MEDICALS';
    } else if (presentationType === 'hospital-sales') {
        activeSlides = hospitalSalesSlides;
        document.title = 'HOSPITAL SALES - BONNESANTE MEDICALS';
    } else if (presentationType === 'regulatory-compliance-sales') {
        activeSlides = regulatoryComplianceSlides;
        document.title = 'REGULATORY COMPLIANCE - BONNESANTE MEDICALS';
    } else if (presentationType === 'customer-service') {
        activeSlides = customerServiceSlides;
        document.title = 'CUSTOMER SERVICE - BONNESANTE MEDICALS';
    } else if (presentationType === 'distribution-awareness') {
        activeSlides = distributionAwarenessSlides;
        document.title = 'DISTRIBUTION AWARENESS - BONNESANTE MEDICALS';
    }
    // Marketing Staff Training (19-23)
    else if (presentationType === 'ethical-marketing') {
        activeSlides = ethicalMarketingSlides;
        document.title = 'ETHICAL MARKETING - BONNESANTE MEDICALS';
    } else if (presentationType === 'market-intelligence') {
        activeSlides = marketIntelligenceSlides;
        document.title = 'MARKET INTELLIGENCE - BONNESANTE MEDICALS';
    } else if (presentationType === 'medical-communication') {
        activeSlides = medicalCommunicationSlides;
        document.title = 'MEDICAL COMMUNICATION - BONNESANTE MEDICALS';
    } else if (presentationType === 'brand-management') {
        activeSlides = brandManagementSlides;
        document.title = 'BRAND MANAGEMENT - BONNESANTE MEDICALS';
    } else if (presentationType === 'digital-marketing') {
        activeSlides = digitalMarketingSlides;
        document.title = 'DIGITAL MARKETING - BONNESANTE MEDICALS';
    }
    // Distribution & Warehouse Staff (24-25)
    else if (presentationType === 'gdp') {
        activeSlides = gdpSlides;
        document.title = 'GOOD DISTRIBUTION PRACTICE - BONNESANTE MEDICALS';
    } else if (presentationType === 'logistics') {
        activeSlides = logisticsSlides;
        document.title = 'LOGISTICS & COLD CHAIN - BONNESANTE MEDICALS';
    }
    // Management & Supervisory (26-28)
    else if (presentationType === 'leadership') {
        activeSlides = leadershipSlides;
        document.title = 'LEADERSHIP & TEAM MANAGEMENT - BONNESANTE MEDICALS';
    } else if (presentationType === 'risk-management') {
        activeSlides = riskManagementSlides;
        document.title = 'RISK MANAGEMENT - BONNESANTE MEDICALS';
    } else if (presentationType === 'inspection-readiness') {
        activeSlides = inspectionReadinessSlides;
        document.title = 'INSPECTION READINESS - BONNESANTE MEDICALS';
    }
    // CPD Training (29-30)
    else if (presentationType === 'advanced-wound-care') {
        activeSlides = advancedWoundCareSlides;
        document.title = 'ADVANCED WOUND CARE - BONNESANTE MEDICALS';
    } else if (presentationType === 'performance-competency') {
        activeSlides = performanceEvaluationSlides;
        document.title = 'PERFORMANCE & COMPETENCY - BONNESANTE MEDICALS';
    }
    // Illustrated SOPs (31-33)
    else if (presentationType === 'sop-wound-clex') {
        activeSlides = sopWoundClexSlides;
        document.title = 'SOP: WOUND-CLEX® - BONNESANTE MEDICALS';
    } else if (presentationType === 'sop-hera-wound-gel') {
        activeSlides = sopHeraWoundGelSlides;
        document.title = 'SOP: HERA WOUND GEL - BONNESANTE MEDICALS';
    } else if (presentationType === 'sop-wound-care-gauze') {
        activeSlides = sopWoundCareGauzeSlides;
        document.title = 'SOP: WOUND CARE GAUZE - BONNESANTE MEDICALS';
    }
    // Operational Protocols (34-42)
    else if (presentationType === 'ppe-wearing') {
        activeSlides = ppeWearingSlides;
        document.title = 'PPE WEARING PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'contamination-breach') {
        activeSlides = contaminationBreachSlides;
        document.title = 'CONTAMINATION BREACH PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'line-cleaning') {
        activeSlides = lineCleaningSlides;
        document.title = 'LINE CLEANING PROTOCOLS - BONNESANTE MEDICALS';
    } else if (presentationType === 'production-planning') {
        activeSlides = productionPlanningSlides;
        document.title = 'PRODUCTION PLANNING PROTOCOLS - BONNESANTE MEDICALS';
    } else if (presentationType === 'bottle-washing') {
        activeSlides = bottleWashingSlides;
        document.title = 'BOTTLE WASHING PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'factory-cleaning') {
        activeSlides = factoryCleaningSlides;
        document.title = 'FACTORY CLEANING PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'packaging-protocol') {
        activeSlides = packagingProtocolSlides;
        document.title = 'PACKAGING PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'warehouse-transfer') {
        activeSlides = warehouseTransferSlides;
        document.title = 'WAREHOUSE TRANSFER PROTOCOL - BONNESANTE MEDICALS';
    } else if (presentationType === 'order-delivery') {
        activeSlides = orderDeliverySlides;
        document.title = 'ORDER & DELIVERY PROTOCOL - BONNESANTE MEDICALS';
    }
    
    totalSlides = activeSlides.length;
    currentSlideIndex = 0;
    
    // Hide menu, show presentation
    document.getElementById('presentationMenu').classList.remove('show');
    document.getElementById('presentationContainer').style.display = 'block';
    
    // Toggle watermarks - show slide watermark, hide menu watermark
    const menuWatermark = document.querySelector('.watermark');
    const slideWatermark = document.querySelector('.slide-watermark');
    if (menuWatermark) menuWatermark.style.display = 'none';
    if (slideWatermark) slideWatermark.style.display = 'block';
    
    // Initialize the selected presentation
    initializePresentation();
    initializeEventListeners();
    loadSavedSettings();
    updateSlideCounter();
    updateProgress();
    generateThumbnails();
    populateSelectors();
}

function showMenu() {
    document.getElementById('presentationMenu').classList.add('show');
    document.getElementById('presentationContainer').style.display = 'none';
    currentPresentation = null;
    
    // Toggle watermarks - show menu watermark, hide slide watermark
    const menuWatermark = document.querySelector('.watermark');
    const slideWatermark = document.querySelector('.slide-watermark');
    if (menuWatermark) menuWatermark.style.display = 'block';
    if (slideWatermark) slideWatermark.style.display = 'none';
    
    // Reset filter to show all
    filterCategory('all');
}

// ===== CATEGORY FILTER =====
function filterCategory(category) {
    const cards = document.querySelectorAll('.presentation-card');
    const tabs = document.querySelectorAll('.category-tab');
    
    // Update active tab
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(category) || 
            (category === 'all' && tab.textContent.toLowerCase() === 'all')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Filter cards
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Show menu first, hide presentation
    document.getElementById('presentationContainer').style.display = 'none';
    document.getElementById('presentationMenu').classList.add('show');
});

function initializePresentation() {
    const wrapper = document.getElementById('slidesWrapper');
    wrapper.innerHTML = '';
    
    activeSlides.forEach((slide, index) => {
        const slideElement = createSlideElement(slide, index);
        wrapper.appendChild(slideElement);
    });
    
    // Activate first slide
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    updateNavigationButtons();
}

function createSlideElement(slide, index) {
    const div = document.createElement('div');
    div.className = `slide ${slide.type === 'title' ? 'title-slide' : ''} ${slide.type === 'conclusion' ? 'conclusion-slide' : ''}`;
    div.id = `slide-${slide.id}`;
    div.dataset.index = index;
    
    // Assign transition type based on slide type for smart transitions
    // Fade: title, conclusion (smooth, professional)
    // Morph: standard columns (seamless content flow)
    // Uncover: highlight, process (reveal for emphasis)
    let transitionType = 'morph';
    if (slide.type === 'title' || slide.type === 'conclusion') {
        transitionType = 'fade';
    } else if (slide.type === 'highlight' || slide.type === 'process') {
        transitionType = 'uncover';
    } else if (slide.type === 'flow') {
        transitionType = 'slide';
    }
    div.dataset.transition = transitionType;
    
    let content = '';
    
    // Header with logo
    content += `
        <div class="slide-header">
            <div class="logo-container">
                <img src="${companyInfo.logo}" alt="${companyInfo.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231a5f7a%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22white%22>BM</text></svg>'">
            </div>
            <div class="slide-number">SLIDE ${slide.id} / ${totalSlides}</div>
        </div>
    `;
    
    content += '<div class="slide-content">';
    
    // Different layouts based on slide type
    if (slide.type === 'title') {
        content += createTitleSlide(slide);
    } else if (slide.type === 'flow') {
        content += createFlowSlide(slide);
    } else if (slide.type === 'conclusion') {
        content += createConclusionSlide(slide);
    } else {
        content += createStandardSlide(slide);
    }
    
    content += '</div>';
    
    div.innerHTML = content;
    return div;
}

function createTitleSlide(slide) {
    let html = `
        <div class="slide-layout">
            <div class="slide-text-area">
                <div class="main-title">${slide.title}</div>
                <div class="tagline">${slide.tagline}</div>
                <div class="slide-subtitle">${slide.subtitle}</div>
                <div class="objectives-grid">
    `;
    
    slide.content.forEach(item => {
        html += `
            <div class="objective-card">
                <i class="fas ${item.icon}"></i>
                <p>${item.text}</p>
            </div>
        `;
    });
    
    html += `</div>
                <div class="company-name">${companyInfo.name}</div>
            </div>
            <div class="slide-image-area">
                ${createImagePlaceholder(slide.id, slide.image)}
            </div>
        </div>
    `;
    
    return html;
}

function createStandardSlide(slide) {
    let html = `
        <div class="slide-layout">
            <div class="slide-text-area">
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-subtitle">${slide.subtitle}</p>
                <div class="slide-body">
    `;
    
    if (slide.columns) {
        slide.columns.forEach(col => {
            html += `
                <div class="content-column">
                    <h3><i class="fas ${col.icon}"></i> ${col.heading}</h3>
                    <ul class="content-list">
            `;
            
            col.items.forEach(item => {
                html += `<li>${item}</li>`;
            });
            
            html += `</ul></div>`;
        });
    }
    
    // Handle highlight slides
    if (slide.type === 'highlight' && slide.highlightBox) {
        html += `
            <div class="highlight-box full-width">
                <div class="highlight-header">
                    <i class="fas ${slide.highlightBox.icon}"></i>
                    <h3>${slide.highlightBox.title}</h3>
                </div>
                <ul class="highlight-list">
        `;
        slide.highlightBox.points.forEach(point => {
            html += `<li>${point}</li>`;
        });
        html += `</ul></div>`;
    }
    
    // Handle process slides
    if (slide.type === 'process' && slide.steps) {
        html += `<div class="process-steps">`;
        slide.steps.forEach(step => {
            html += `
                <div class="process-step">
                    <div class="step-number">${step.number}</div>
                    <div class="step-content">
                        <h4>${step.title}</h4>
                        <p>${step.description}</p>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    html += '</div>';
    
    // Status labels if applicable
    if (slide.hasStatusLabels) {
        html += `
            <div style="margin-top: 20px; text-align: center;">
                <span class="status-label status-quarantine">QUARANTINE</span>
                <span class="status-label status-approved">APPROVED</span>
                <span class="status-label status-rejected">REJECTED</span>
            </div>
        `;
    }
    
    // Golden rule if applicable
    if (slide.goldenRule) {
        html += `
            <div class="golden-rule">
                <p><i class="fas fa-star"></i> ${slide.goldenRule}</p>
            </div>
        `;
    }
    
    html += `
            </div>
            <div class="slide-image-area">
                ${createImagePlaceholder(slide.id, slide.image)}
            </div>
        </div>
    `;
    
    return html;
}

function createFlowSlide(slide) {
    let html = `
        <div class="slide-layout">
            <div class="slide-text-area">
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-subtitle">${slide.subtitle}</p>
                <div class="flow-container">
    `;
    
    slide.flowItems.forEach((item, index) => {
        html += `<div class="flow-item">${item}</div>`;
        if (index < slide.flowItems.length - 1) {
            html += `<span class="flow-arrow"><i class="fas fa-arrow-right"></i></span>`;
        }
    });
    
    html += `
                </div>
            </div>
            <div class="slide-image-area">
                ${createImagePlaceholder(slide.id, slide.image)}
            </div>
        </div>
    `;
    
    return html;
}

function createConclusionSlide(slide) {
    let html = `
        <div class="slide-layout">
            <div class="slide-text-area">
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-subtitle">${slide.subtitle}</p>
                <div class="conclusion-grid">
    `;
    
    // Support both conclusionItems and conclusionPoints
    const items = slide.conclusionItems || slide.conclusionPoints || [];
    items.forEach(item => {
        html += `
            <div class="conclusion-card">
                <i class="fas ${item.icon}"></i>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        `;
    });
    
    html += `</div>
                <div class="highlight-box" style="margin-top: 30px; text-align: center;">
                    <p><i class="fas fa-hands-helping"></i> Thank you for your commitment to quality!</p>
                </div>
                <div class="company-name" style="margin-top: 30px; color: white; text-align: center; font-size: 1.5rem; letter-spacing: 3px;">
                    ${companyInfo.name}
                </div>
            </div>
            <div class="slide-image-area">
                ${createImagePlaceholder(slide.id, slide.image)}
            </div>
        </div>
    `;
    
    return html;
}

function createImagePlaceholder(slideId, existingImage) {
    if (uploadedImages[slideId] || existingImage) {
        const imgSrc = uploadedImages[slideId] || existingImage;
        return `
            <img src="${imgSrc}" alt="Slide Image" class="slide-image" id="slideImage-${slideId}">
        `;
    }
    return `
        <div class="image-placeholder" onclick="openImageUploadForSlide(${slideId})" id="imagePlaceholder-${slideId}">
            <i class="fas fa-image"></i>
            <span>Click to add image (via Settings)</span>
        </div>
    `;
}

// ===== NAVIGATION =====
function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
        navigateToSlide(currentSlideIndex + 1);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        navigateToSlide(currentSlideIndex - 1);
    }
}

function navigateToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const wrapper = document.getElementById('slidesWrapper');
    
    // Get the target slide's preferred transition
    const targetSlide = slides[index];
    const slideTransition = targetSlide.dataset.transition || 'morph';
    
    // Apply the transition type to the wrapper
    wrapper.classList.remove('transition-morph', 'transition-fade', 'transition-slide', 
                             'transition-zoom', 'transition-flip', 'transition-cube', 'transition-uncover');
    wrapper.classList.add(`transition-${slideTransition}`);
    
    // Remove current state
    slides[currentSlideIndex].classList.remove('active');
    slides[currentSlideIndex].classList.add('prev');
    
    // Update index
    currentSlideIndex = index;
    
    // Reset all slides
    setTimeout(() => {
        slides.forEach((slide, i) => {
            slide.classList.remove('prev', 'active');
            if (i === currentSlideIndex) {
                slide.classList.add('active');
            }
        });
    }, 50);
    
    updateSlideCounter();
    updateProgress();
    updateNavigationButtons();
    updateThumbnails();
}

function goToSlide(index) {
    navigateToSlide(index);
    toggleThumbnails();
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentSlideIndex === 0;
    document.getElementById('nextBtn').disabled = currentSlideIndex === totalSlides - 1;
}

function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
    document.getElementById('totalSlides').textContent = totalSlides;
}

function updateProgress() {
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

// ===== THUMBNAILS =====
function generateThumbnails() {
    const container = document.getElementById('thumbnails');
    container.innerHTML = '';
    
    activeSlides.forEach((slide, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === currentSlideIndex ? 'active' : ''}`;
        thumb.textContent = index + 1;
        thumb.onclick = () => goToSlide(index);
        container.appendChild(thumb);
    });
}

function updateThumbnails() {
    const thumbs = document.querySelectorAll('.thumbnail');
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlideIndex);
    });
}

function toggleThumbnails() {
    document.getElementById('thumbnails').classList.toggle('show');
}

// ===== FULLSCREEN =====
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.querySelector('.fullscreen-btn i').classList.replace('fa-expand', 'fa-compress');
    } else {
        document.exitFullscreen();
        document.querySelector('.fullscreen-btn i').classList.replace('fa-compress', 'fa-expand');
    }
}

// ===== ZOOM =====
function openZoom() {
    const modal = document.getElementById('zoomModal');
    const zoomedContent = document.getElementById('zoomedSlide');
    const currentSlide = document.querySelector('.slide.active');
    
    zoomedContent.innerHTML = `<div class="zoomed-slide-content">${currentSlide.innerHTML}</div>`;
    modal.classList.add('show');
    currentZoom = 1;
    updateZoomDisplay();
}

function closeZoom() {
    document.getElementById('zoomModal').classList.remove('show');
}

function adjustZoom(delta) {
    currentZoom = Math.max(0.5, Math.min(3, currentZoom + delta));
    updateZoomDisplay();
}

function resetZoom() {
    currentZoom = 1;
    updateZoomDisplay();
}

function updateZoomDisplay() {
    document.getElementById('zoomLevel').textContent = Math.round(currentZoom * 100) + '%';
    const content = document.querySelector('.zoomed-slide-content');
    if (content) {
        content.style.transform = `scale(${currentZoom})`;
    }
}

// ===== SETTINGS =====
function toggleSettings() {
    document.getElementById('settingsPanel').classList.toggle('show');
}

function populateSelectors() {
    const slideSelector = document.getElementById('slideSelector');
    const imageSelector = document.getElementById('imageSlideSelector');
    
    slideSelector.innerHTML = '';
    imageSelector.innerHTML = '';
    
    activeSlides.forEach((slide, index) => {
        const option1 = new Option(`Slide ${index + 1}: ${slide.title}`, index);
        const option2 = new Option(`Slide ${index + 1}: ${slide.title}`, slide.id);
        slideSelector.add(option1);
        imageSelector.add(option2);
    });
}

function loadSlideForEdit() {
    const index = parseInt(document.getElementById('slideSelector').value);
    const slide = activeSlides[index];
    
    document.getElementById('editTitle').value = slide.title;
    
    // Convert content to editable format
    let contentText = '';
    if (slide.columns) {
        slide.columns.forEach(col => {
            contentText += `[${col.heading}]\n`;
            col.items.forEach(item => {
                contentText += `|${item}\n`;
            });
            contentText += '\n';
        });
    } else if (slide.content) {
        slide.content.forEach(item => {
            contentText += `|${item.text}\n`;
        });
    } else if (slide.flowItems) {
        slide.flowItems.forEach(item => {
            contentText += `|${item}\n`;
        });
    } else if (slide.conclusionItems) {
        slide.conclusionItems.forEach(item => {
            contentText += `|${item.title}: ${item.text}\n`;
        });
    }
    
    document.getElementById('editContent').value = contentText;
}

function saveSlideChanges() {
    const index = parseInt(document.getElementById('slideSelector').value);
    const newTitle = document.getElementById('editTitle').value;
    const newContent = document.getElementById('editContent').value;
    
    // Update slide data
    activeSlides[index].title = newTitle;
    
    // Parse content (basic implementation)
    const lines = newContent.split('\n').filter(l => l.trim());
    
    if (activeSlides[index].columns) {
        let currentColumn = -1;
        activeSlides[index].columns.forEach(col => col.items = []);
        
        lines.forEach(line => {
            if (line.startsWith('[') && line.endsWith(']')) {
                currentColumn++;
                if (activeSlides[index].columns[currentColumn]) {
                    activeSlides[index].columns[currentColumn].heading = line.slice(1, -1);
                }
            } else if (line.startsWith('|') && currentColumn >= 0) {
                if (activeSlides[index].columns[currentColumn]) {
                    activeSlides[index].columns[currentColumn].items.push(line.slice(1));
                }
            }
        });
    }
    
    // Regenerate slides
    initializePresentation();
    navigateToSlide(index);
    
    // Save to localStorage
    saveSettings();
    
    alert('Slide changes saved!');
}

// ===== IMAGE HANDLING =====
function handleImageUpload() {
    const input = document.getElementById('imageUpload');
    const preview = document.getElementById('imagePreview');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.dataset.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function applyImage() {
    const slideId = parseInt(document.getElementById('imageSlideSelector').value);
    const preview = document.getElementById('imagePreview');
    const imageData = preview.dataset.imageData;
    
    if (imageData) {
        const key = `${currentPresentation}-${slideId}`;
        uploadedImages[key] = imageData;
        
        // Update slide data
        const slideIndex = activeSlides.findIndex(s => s.id === slideId);
        if (slideIndex >= 0) {
            activeSlides[slideIndex].image = imageData;
        }
        
        // Regenerate slides
        initializePresentation();
        navigateToSlide(slideIndex >= 0 ? slideIndex : currentSlideIndex);
        
        // Save to localStorage
        saveSettings();
        
        alert('Image applied to slide!');
    }
}

function openImageUploadForSlide(slideId) {
    toggleSettings();
    document.getElementById('imageSlideSelector').value = slideId;
}

// ===== TRANSITION SETTINGS =====
function updateTransition() {
    currentTransition = document.getElementById('transitionType').value;
    const wrapper = document.getElementById('slidesWrapper');
    
    // Remove all transition classes
    wrapper.classList.remove('transition-morph', 'transition-fade', 'transition-slide', 
                             'transition-zoom', 'transition-flip', 'transition-cube');
    
    // Add new transition class
    wrapper.classList.add(`transition-${currentTransition}`);
    
    saveSettings();
}

function updateTransitionSpeed() {
    transitionSpeed = document.getElementById('transitionSpeed').value;
    document.getElementById('speedValue').textContent = transitionSpeed + 'ms';
    document.documentElement.style.setProperty('--transition-speed', transitionSpeed + 'ms');
    saveSettings();
}

// ===== THEME SETTINGS =====
function updateTheme() {
    const primary = document.getElementById('primaryColor').value;
    const secondary = document.getElementById('secondaryColor').value;
    const accent = document.getElementById('accentColor').value;
    
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
    document.documentElement.style.setProperty('--accent-color', accent);
    
    // Update gradients
    document.documentElement.style.setProperty('--gradient-1', 
        `linear-gradient(135deg, ${primary} 0%, ${accent} 50%, ${secondary} 100%)`);
    document.documentElement.style.setProperty('--gradient-3', 
        `linear-gradient(180deg, ${hexToRgba(primary, 0.95)} 0%, ${hexToRgba(accent, 0.95)} 100%)`);
    
    saveSettings();
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ===== PERSISTENCE =====
function saveSettings() {
    const settings = {
        transition: currentTransition,
        transitionSpeed: transitionSpeed,
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        accentColor: document.getElementById('accentColor').value,
        uploadedImages: uploadedImages,
        woundClexSlides: slidesData,
        hygieneSlides: hygieneSlidesData,
        organizationSlides: organizationSlidesData
    };
    
    localStorage.setItem('woundClexSettings', JSON.stringify(settings));
}

function loadSavedSettings() {
    const saved = localStorage.getItem('woundClexSettings');
    
    if (saved) {
        const settings = JSON.parse(saved);
        
        // Restore transition
        if (settings.transition) {
            currentTransition = settings.transition;
            document.getElementById('transitionType').value = settings.transition;
            document.getElementById('slidesWrapper').classList.add(`transition-${settings.transition}`);
        }
        
        // Restore speed
        if (settings.transitionSpeed) {
            transitionSpeed = settings.transitionSpeed;
            document.getElementById('transitionSpeed').value = settings.transitionSpeed;
            document.getElementById('speedValue').textContent = settings.transitionSpeed + 'ms';
            document.documentElement.style.setProperty('--transition-speed', settings.transitionSpeed + 'ms');
        }
        
        // Restore colors
        if (settings.primaryColor) {
            document.getElementById('primaryColor').value = settings.primaryColor;
            document.getElementById('secondaryColor').value = settings.secondaryColor;
            document.getElementById('accentColor').value = settings.accentColor;
            updateTheme();
        }
        
        // Restore images
        if (settings.uploadedImages) {
            uploadedImages = settings.uploadedImages;
        }
        
        // Restore slide data based on current presentation
        if (currentPresentation === 'wound-clex' && settings.woundClexSlides) {
            settings.woundClexSlides.forEach((savedSlide, index) => {
                if (slidesData[index]) {
                    slidesData[index] = { ...slidesData[index], ...savedSlide };
                }
            });
            activeSlides = slidesData;
            initializePresentation();
        } else if (currentPresentation === 'hygiene' && settings.hygieneSlides) {
            settings.hygieneSlides.forEach((savedSlide, index) => {
                if (hygieneSlidesData[index]) {
                    hygieneSlidesData[index] = { ...hygieneSlidesData[index], ...savedSlide };
                }
            });
            activeSlides = hygieneSlidesData;
            initializePresentation();
        } else if (currentPresentation === 'organization' && settings.organizationSlides) {
            settings.organizationSlides.forEach((savedSlide, index) => {
                if (organizationSlidesData[index]) {
                    organizationSlidesData[index] = { ...organizationSlidesData[index], ...savedSlide };
                }
            });
            activeSlides = organizationSlidesData;
            initializePresentation();
        }
    }
}

// ===== KEYBOARD NAVIGATION =====
function initializeEventListeners() {
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowRight':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                navigateToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                navigateToSlide(totalSlides - 1);
                break;
            case 'f':
            case 'F':
                if (!e.ctrlKey && !e.metaKey) {
                    toggleFullscreen();
                }
                break;
            case 'Escape':
                closeZoom();
                document.getElementById('settingsPanel').classList.remove('show');
                break;
            case 'z':
            case 'Z':
                if (!e.ctrlKey && !e.metaKey) {
                    openZoom();
                }
                break;
        }
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + threshold) {
            prevSlide();
        }
    }
    
    // Fullscreen change handler
    document.addEventListener('fullscreenchange', function() {
        const icon = document.querySelector('.fullscreen-btn i');
        if (document.fullscreenElement) {
            icon.classList.replace('fa-expand', 'fa-compress');
        } else {
            icon.classList.replace('fa-compress', 'fa-expand');
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function resetPresentation() {
    localStorage.removeItem('woundClexSettings');
    location.reload();
}

// Export for debugging
window.presentationDebug = {
    slidesData,
    hygieneSlidesData,
    organizationSlidesData,
    activeSlides: () => activeSlides,
    currentSlideIndex,
    uploadedImages,
    currentPresentation: () => currentPresentation,
    resetPresentation,
    saveSettings,
    loadSavedSettings,
    showMenu
};
