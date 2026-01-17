// ===== PRESENTATION 32: ILLUSTRATED SOP FOR HERA WOUND GEL =====
// For: Production Staff | Category: SOP Training

const sopHeraWoundGelSlides = [
    {
        id: 1,
        type: 'title',
        title: 'ILLUSTRATED SOP FOR HERA WOUND GEL',
        subtitle: 'Standard Operating Procedure',
        tagline: 'Complete Manufacturing Guide',
        content: [
            { icon: 'fa-prescription-bottle', text: 'Wound Healing Gel Production' },
            { icon: 'fa-list-ol', text: '12 Critical Steps' },
            { icon: 'fa-temperature-high', text: 'Emulsion Technology' },
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
        title: 'STEP 5: Oil Phase Preparation',
        subtitle: 'Measure and Heat Oil Components',
        highlightBox: {
            icon: 'fa-oil-can',
            title: 'OIL PHASE PROCESSING',
            points: [
                'Measure out the OIL PHASE ingredients accurately',
                'Transfer to the 50L OIL TANK',
                'Ensure tank is pre-sanitized and dry',
                'HEAT to 100°C (212°F)',
                'Monitor temperature with calibrated thermometer',
                'Maintain temperature until ready for next step'
            ]
        },
        image: null
    },
    {
        id: 7,
        type: 'highlight',
        title: 'STEP 6: Water Phase Preparation',
        subtitle: 'Measure and Heat Water Components',
        highlightBox: {
            icon: 'fa-droplet',
            title: 'WATER PHASE PROCESSING',
            points: [
                'Measure out the WATER PHASE ingredients accurately',
                'Transfer to the 50L WATER TANK',
                'Ensure tank is pre-sanitized and dry',
                'HEAT to 100°C (212°F)',
                'Monitor temperature with calibrated thermometer',
                'Both phases must reach 100°C before proceeding'
            ]
        },
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'STEP 7: Filtration',
        subtitle: 'Oil Phase Purification',
        steps: [
            {
                number: '7A',
                title: 'Temperature Check',
                description: 'When OIL PHASE reaches 100°C, turn off the gas burner'
            },
            {
                number: '7B',
                title: 'Filter Oil Phase',
                description: 'Filter the oil phase to remove any impurities'
            },
            {
                number: '7C',
                title: 'Collect Filtered Oil',
                description: 'Collect the filtered OIL PHASE in a separate sterile container'
            },
            {
                number: '7D',
                title: 'Maintain Temperature',
                description: 'Keep filtered oil phase warm until homogenization'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'highlight',
        title: 'STEP 8: Homogenization',
        subtitle: 'Critical Emulsion Formation',
        highlightBox: {
            icon: 'fa-blender',
            title: 'HOMOGENIZATION PROTOCOL',
            points: [
                'Add WATER PHASE FIRST into the MIXING TANK',
                'Turn ON the homogenizer to SPEED 30',
                'GENTLY add the OIL PHASE into the water phase',
                'INCREASE speed to 60 after oil is added',
                'Run for 15-minute intervals up to 30 minutes total',
                'Allow 3-minute rest between intervals'
            ]
        },
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'STEP 9: Slow Cooling',
        subtitle: 'Temperature Management',
        columns: [
            {
                heading: 'Cooling Process',
                icon: 'fa-temperature-low',
                items: [
                    'Turn on the cooling line',
                    'Gradually reduce temperature',
                    'Bring back to room temperature',
                    'Monitor cooling rate continuously',
                    'Avoid rapid temperature changes'
                ]
            },
            {
                heading: 'Holding Period',
                icon: 'fa-clock',
                items: [
                    'Seal the tank securely',
                    'Hold for 24 HOURS minimum',
                    'Document seal time in log',
                    'Monitor for any anomalies',
                    'Do not disturb during holding'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'highlight',
        title: 'STEP 10: Ingredient Phase',
        subtitle: 'Active Ingredient Addition',
        highlightBox: {
            icon: 'fa-prescription',
            title: 'INGREDIENT PREPARATION',
            points: [
                'Prepare active ingredients as per formulation',
                'Verify ingredient purity and potency',
                'Measure accurately using calibrated scales',
                'Document all ingredient batch numbers',
                'Ensure proper storage conditions were maintained',
                'Prepare for mixing in appropriate quantities'
            ]
        },
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'STEP 11: Mixing the Ingredient',
        subtitle: 'Batch Preparation',
        columns: [
            {
                heading: 'Portioning',
                icon: 'fa-scale-balanced',
                items: [
                    'Each 8 LITERS of base gel',
                    'Mixed with appropriate portion',
                    'Of active ingredient',
                    'Use precise measurements',
                    'Follow batch formula exactly'
                ]
            },
            {
                heading: 'Table Mixer Process',
                icon: 'fa-blender',
                items: [
                    'Use the TABLE MIXER for blending',
                    'Mix until homogeneous',
                    'Check for uniform consistency',
                    'No lumps or separation',
                    'Document mixing time'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'process',
        title: 'STEP 12: Tube Filling & Sealing',
        subtitle: 'Final Packaging Process',
        steps: [
            {
                number: '12A',
                title: 'Prepare Tubes',
                description: 'Ensure all tubes are pre-sterilized and inspected for defects'
            },
            {
                number: '12B',
                title: 'Filling Process',
                description: 'Fill tubes to specified volume using calibrated filling equipment'
            },
            {
                number: '12C',
                title: 'Sealing',
                description: 'Crimp and seal tube ends ensuring proper seal integrity'
            },
            {
                number: '12D',
                title: 'Labeling',
                description: 'Apply batch labels with manufacturing date and expiry information'
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'highlight',
        title: 'QUALITY CONTROL SUMMARY',
        subtitle: 'Critical Control Points',
        highlightBox: {
            icon: 'fa-clipboard-check',
            title: 'QC CHECKPOINTS FOR HERA WOUND GEL',
            points: [
                'Hand hygiene and PPE verification at each step',
                'Temperature monitoring: Both phases at 100°C',
                'Filtration effectiveness verified',
                'Homogenization speed and timing documented',
                '24-hour holding period observed',
                'Ingredient mixing ratio confirmed',
                'Tube seal integrity tested',
                'Final batch release approval obtained'
            ]
        },
        image: null
    },
    {
        id: 15,
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
                text: 'Monitor and record all temperature parameters accurately'
            },
            {
                icon: 'fa-clock',
                title: 'Timing Matters',
                text: 'Observe all holding and processing times precisely'
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
