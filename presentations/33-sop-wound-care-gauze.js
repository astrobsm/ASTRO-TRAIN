// ===== PRESENTATION 33: ILLUSTRATED SOP FOR WOUND CARE GAUZE =====
// For: Production Staff | Category: SOP Training

const sopWoundCareGauzeSlides = [
    {
        id: 1,
        type: 'title',
        title: 'ILLUSTRATED SOP FOR WOUND CARE GAUZE',
        subtitle: 'Standard Operating Procedure',
        tagline: 'Honey-Iodine Impregnated Gauze Production',
        content: [
            { icon: 'fa-bandage', text: 'Medicated Gauze Production' },
            { icon: 'fa-list-ol', text: '10 Critical Steps' },
            { icon: 'fa-jar', text: 'Honey Pasteurization Process' },
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
                'APRONS: Must be worn at ALL TIMES during production'
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
        title: 'STEP 5: Pasteurization',
        subtitle: 'Honey Heat Treatment',
        highlightBox: {
            icon: 'fa-fire-flame-curved',
            title: 'PASTEURIZATION PROCESS',
            points: [
                'Fill the PASTEURIZATION CHAMBERS with RAW HONEY',
                'Set the BURNER to appropriate level',
                'Set the THERMOMETER to 80°C (176°F)',
                'WASH and SANITIZE hands before continuing',
                'GLOVES and APRONS must be ON at all times',
                'Monitor temperature continuously until reached'
            ]
        },
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'STEP 6: Gauze Loading',
        subtitle: 'Prepare Honey Immersion Tank',
        columns: [
            {
                heading: 'Load The Tank',
                icon: 'fa-box-open',
                items: [
                    'Load the HONEY IMMERSION TANK',
                    'Use STERILE DENSE GAUZE only',
                    'Handle with sterile gloves',
                    'Avoid touching non-sterile surfaces',
                    'Maintain aseptic technique'
                ]
            },
            {
                heading: 'Daily Target',
                icon: 'fa-bullseye',
                items: [
                    'Load up to desired target for the day',
                    'Standard target: 3 PACKS',
                    'Document quantity loaded',
                    'Verify gauze batch numbers',
                    'Record in production log'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'STEP 7: Filtration',
        subtitle: 'Honey Purification',
        steps: [
            {
                number: '7A',
                title: 'Temperature Check',
                description: 'When honey reaches 80°C, turn OFF the gas burner'
            },
            {
                number: '7B',
                title: 'Filter Honey',
                description: 'Filter the honey to remove all impurities'
            },
            {
                number: '7C',
                title: 'Collect Filtered Honey',
                description: 'Pass filtered honey into the MIXING CHAMBER'
            },
            {
                number: '7D',
                title: 'Verify Clarity',
                description: 'Ensure honey is clear and free from particles'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'highlight',
        title: 'STEP 8: Mixing with Povidone',
        subtitle: 'Active Ingredient Addition',
        highlightBox: {
            icon: 'fa-flask-vial',
            title: 'POVIDONE IODINE MIXING',
            points: [
                'Add 1000 mL of CONCENTRATED POVIDONE IODINE GEL',
                'Into 100L of FILTERED HONEY in the mixing chamber',
                'Turn the HOMOGENIZER ON',
                'Mix at SPEED 40 for 5 MINUTES',
                'Ensure complete and uniform mixing',
                'Document mixing time and speed in log'
            ]
        },
        image: null
    },
    {
        id: 10,
        type: 'process',
        title: 'STEP 9: Honey Immersion Stage',
        subtitle: 'Gauze Impregnation',
        steps: [
            {
                number: '9A',
                title: 'Transfer Mixture',
                description: 'Put the mixed iodized honey into the HONEY IMMERSION TANK'
            },
            {
                number: '9B',
                title: 'Position Plate',
                description: 'Place the IMMERSION PLATE on the tank content'
            },
            {
                number: '9C',
                title: 'Immerse Gauze',
                description: 'Screw to immerse until honey shows up on the plate'
            },
            {
                number: '9D',
                title: 'Verify Coverage',
                description: 'Ensure all gauze is fully immersed in the honey mixture'
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'highlight',
        title: 'STEP 10: Sealing & Holding',
        subtitle: 'Incubation Period',
        highlightBox: {
            icon: 'fa-lock',
            title: 'TANK SEALING PROTOCOL',
            points: [
                'SEAL the tank completely and securely',
                'Hold for 12 HOURS minimum',
                'Do not disturb during holding period',
                'Document seal time in batch record',
                'Maintain room temperature conditions',
                'After 12 hours, proceed to packaging'
            ]
        },
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Final Packaging',
        subtitle: 'Post-Immersion Processing',
        columns: [
            {
                heading: 'Remove Gauze',
                icon: 'fa-hand-holding-medical',
                items: [
                    'After 12-hour holding period',
                    'Open tank using aseptic technique',
                    'Remove impregnated gauze carefully',
                    'Allow excess honey to drain',
                    'Handle with sterile gloves only'
                ]
            },
            {
                heading: 'Package & Label',
                icon: 'fa-box',
                items: [
                    'Place in sterile packaging',
                    'Seal with tamper-evident closures',
                    'Apply batch labels',
                    'Include manufacturing date',
                    'Record expiry date'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'QUALITY CONTROL SUMMARY',
        subtitle: 'Critical Control Points',
        highlightBox: {
            icon: 'fa-clipboard-check',
            title: 'QC CHECKPOINTS FOR WOUND CARE GAUZE',
            points: [
                'Hand hygiene and PPE verification at each step',
                'Pasteurization temperature: 80°C confirmed',
                'Filtration effectiveness verified',
                'Povidone mixing: 1000mL per 100L honey',
                'Homogenizer speed 40 for 5 minutes documented',
                'Complete gauze immersion verified',
                '12-hour holding period observed',
                'Final batch release approval obtained'
            ]
        },
        image: null
    },
    {
        id: 14,
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
                icon: 'fa-thermometer-half',
                title: 'Temperature Critical',
                text: 'Pasteurization at 80°C is essential for product safety'
            },
            {
                icon: 'fa-clock',
                title: '12-Hour Hold',
                text: 'Observe holding time precisely for proper impregnation'
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
