// ===== PRESENTATION 31: ILLUSTRATED SOP FOR WOUND-CLEX =====
// For: Production Staff | Category: SOP Training

const sopWoundClexSlides = [
    {
        id: 1,
        type: 'title',
        title: 'ILLUSTRATED SOP FOR WOUND-CLEX®',
        subtitle: 'Standard Operating Procedure',
        tagline: 'Step-by-Step Manufacturing Guide',
        content: [
            { icon: 'fa-flask', text: 'Antiseptic Solution Production' },
            { icon: 'fa-list-ol', text: '6 Critical Steps' },
            { icon: 'fa-shield-virus', text: 'Sterility & Safety Protocols' },
            { icon: 'fa-certificate', text: 'GMP Compliance' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'STEP 1: Hand Hygiene',
        subtitle: 'On Arrival - First Priority',
        columns: [
            {
                heading: 'Wash Your Hands',
                icon: 'fa-hands-bubbles',
                items: [
                    'Upon arrival at production area',
                    'Use approved antimicrobial soap',
                    'Wash for minimum 20 seconds',
                    'Cover all surfaces thoroughly',
                    'Between fingers and under nails'
                ]
            },
            {
                heading: 'Sanitize Your Hands',
                icon: 'fa-pump-soap',
                items: [
                    'Apply alcohol-based sanitizer',
                    'Minimum 70% alcohol content',
                    'Rub until completely dry',
                    'Do not rinse after sanitizing',
                    'Repeat before each critical step'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'highlight',
        title: 'STEP 2: C.M.G Protocol',
        subtitle: 'Personal Protective Equipment',
        highlightBox: {
            icon: 'fa-user-shield',
            title: 'CAP - MASK - GLOVES',
            points: [
                'CAP: Cover all hair completely - prevents contamination',
                'MASK: Surgical mask covering nose and mouth',
                'GLOVES: Sterile nitrile or latex gloves',
                'Ensure proper fit on all PPE items',
                'Replace immediately if damaged or compromised',
                'Never touch face or non-sterile surfaces'
            ]
        },
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'STEP 3: Clean Work Area',
        subtitle: 'Tables and Floor Sanitization',
        columns: [
            {
                heading: 'Clean The Tables',
                icon: 'fa-table',
                items: [
                    'Remove all items from surfaces',
                    'Wipe with approved disinfectant',
                    'Use clean lint-free cloths',
                    'Work from clean to dirty areas',
                    'Allow proper contact time'
                ]
            },
            {
                heading: 'Clean The Floor',
                icon: 'fa-broom',
                items: [
                    'Sweep to remove debris first',
                    'Mop with disinfectant solution',
                    'Pay attention to corners',
                    'Allow floor to dry completely',
                    'Document cleaning in log'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'process',
        title: 'STEP 4: Equipment Sanitization',
        subtitle: 'Tanks, Heaters, and Filters',
        steps: [
            {
                number: '4A',
                title: 'First Wash',
                description: 'Wash all equipment with clean water and soap thoroughly'
            },
            {
                number: '4B',
                title: 'Acid Treatment',
                description: 'Apply 5% Acetic Acid solution to all surfaces'
            },
            {
                number: '4C',
                title: 'UV Sterilization',
                description: 'Expose all equipment to UV rays for complete sterilization'
            },
            {
                number: '4D',
                title: 'Verification',
                description: 'Inspect all equipment before use - document sanitization'
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'highlight',
        title: 'STEP 5: Component Measurement',
        subtitle: 'Precise Formulation',
        highlightBox: {
            icon: 'fa-vials',
            title: 'WOUND-CLEX® FORMULATION TABLE',
            points: [
                'DISTILLED WATER: 100 Liters - Base solvent',
                'ACETIC ACID GLACIAL: 350 mL - pH adjustment',
                'POVIDONE IODINE: 250 mL - Active antiseptic',
                'PEROXIDE: 10 mL - Oxidizing agent',
                'Measure each component precisely using calibrated equipment',
                'Add components to mixing tank in specified order'
            ]
        },
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'STEP 5 (Continued): UV Exposure',
        subtitle: 'Final Sterilization of Mixture',
        columns: [
            {
                heading: 'UV Ray Treatment',
                icon: 'fa-sun',
                items: [
                    'Transfer mixture to mixing tank',
                    'Position UV light source correctly',
                    'Expose for exactly 20 minutes',
                    'Ensure complete coverage',
                    'Do not disturb during exposure'
                ]
            },
            {
                heading: 'Quality Checks',
                icon: 'fa-check-double',
                items: [
                    'Verify UV exposure time logged',
                    'Check solution clarity',
                    'Confirm no contamination',
                    'Record batch number',
                    'Proceed to filling immediately'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'STEP 6: Bottle Filling & Sealing',
        subtitle: 'Final Packaging Process',
        steps: [
            {
                number: '6A',
                title: 'Prepare Bottles',
                description: 'Ensure all bottles are pre-sterilized and inspected for defects'
            },
            {
                number: '6B',
                title: 'Filling Process',
                description: 'Fill bottles to specified volume using calibrated filling equipment'
            },
            {
                number: '6C',
                title: 'Sealing',
                description: 'Apply tamper-evident caps and ensure proper seal integrity'
            },
            {
                number: '6D',
                title: 'Labeling',
                description: 'Apply batch labels with manufacturing date and expiry information'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'highlight',
        title: 'QUALITY CONTROL SUMMARY',
        subtitle: 'Critical Control Points',
        highlightBox: {
            icon: 'fa-clipboard-check',
            title: 'QC CHECKPOINTS FOR WOUND-CLEX®',
            points: [
                'Hand hygiene verification before and after each step',
                'PPE integrity check - CAP, MASK, GLOVES',
                'Work area sanitization confirmation',
                'Equipment sterilization log complete',
                'Component measurement accuracy verified',
                'UV exposure time documented (20 min)',
                'Bottle seal integrity tested',
                'Final batch release approval'
            ]
        },
        image: null
    },
    {
        id: 10,
        type: 'conclusion',
        title: 'SOP COMPLIANCE REMINDER',
        subtitle: 'Excellence in Every Batch',
        conclusionPoints: [
            {
                icon: 'fa-book',
                title: 'Follow SOP Exactly',
                text: 'No deviations without documented approval from QA'
            },
            {
                icon: 'fa-pen',
                title: 'Document Everything',
                text: 'Record all parameters, times, and observations in batch record'
            },
            {
                icon: 'fa-triangle-exclamation',
                title: 'Report Issues',
                text: 'Immediately report any deviations or abnormalities to supervisor'
            },
            {
                icon: 'fa-certificate',
                title: 'Quality First',
                text: 'Patient safety depends on your attention to detail'
            }
        ],
        image: null
    }
];
