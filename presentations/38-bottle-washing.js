// ===== PRESENTATION 38: BOTTLE WASHING PROTOCOL =====
// For: Production Staff | Category: Equipment Preparation

const bottleWashingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'BOTTLE WASHING PROTOCOL',
        subtitle: 'Container Preparation Procedures',
        tagline: 'Clean Containers, Pure Products',
        content: [
            { icon: 'fa-bottle-water', text: 'Bottle types and requirements' },
            { icon: 'fa-hand-sparkles', text: 'Washing procedures' },
            { icon: 'fa-check-double', text: 'Inspection and verification' },
            { icon: 'fa-boxes-stacked', text: 'Storage before use' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'WHY BOTTLE WASHING MATTERS',
        subtitle: 'Critical Quality Step',
        highlightBox: {
            icon: 'fa-exclamation-triangle',
            title: 'IMPORTANCE OF CLEAN CONTAINERS',
            points: [
                'Bottles may contain dust from manufacturing/shipping',
                'Residue can contaminate finished products',
                'Particles can affect product stability',
                'Clean containers ensure product sterility',
                'Required for GMP compliance',
                'Prevents customer complaints and recalls',
                'Protects patient safety'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'BOTTLE TYPES IN USE',
        subtitle: 'Know Your Containers',
        columns: [
            {
                heading: 'WOUND CLEX® Bottles',
                icon: 'fa-flask',
                items: [
                    'HDPE or PET plastic bottles',
                    'Various sizes (100mL, 250mL, 500mL, 1L)',
                    'Wide-mouth or narrow-mouth',
                    'Compatible with antiseptic solution',
                    'Must be clean and dry before filling'
                ]
            },
            {
                heading: 'Caps and Closures',
                icon: 'fa-circle-stop',
                items: [
                    'Screw caps (matching to bottle size)',
                    'Dispensing caps if applicable',
                    'Tamper-evident seals',
                    'Clean and free from debris',
                    'Store separately from bottles'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'BOTTLE WASHING WORKFLOW',
        subtitle: 'Step-by-Step Process',
        steps: [
            {
                number: '1',
                title: 'Unpacking',
                description: 'Remove bottles from shipping cartons in designated staging area'
            },
            {
                number: '2',
                title: 'Pre-Rinse',
                description: 'Rinse bottles with purified/distilled water to remove loose particles'
            },
            {
                number: '3',
                title: 'Washing',
                description: 'Wash with appropriate cleaning solution using bottle rinser or manual method'
            },
            {
                number: '4',
                title: 'Final Rinse',
                description: 'Multiple rinses with distilled water to remove all cleaning agent residue'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'CLEANING SOLUTIONS',
        subtitle: 'Approved Washing Agents',
        highlightBox: {
            icon: 'fa-pump-soap',
            title: 'CLEANING AGENT OPTIONS',
            points: [
                'DISTILLED WATER: Primary rinse agent for all bottles',
                'PURIFIED WATER: Acceptable for pre-rinse',
                'DILUTE DETERGENT: Only if heavily soiled (1:100 ratio)',
                'ISOPROPYL ALCOHOL (70%): For final sanitization if required',
                'NEVER USE: Tap water, harsh chemicals, abrasives',
                'Always follow with distilled water rinse',
                'Verify no residue remains before drying'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'WASHING METHODS',
        subtitle: 'Equipment and Techniques',
        columns: [
            {
                heading: 'Automatic Bottle Rinser',
                icon: 'fa-industry',
                items: [
                    'Load bottles onto rinser nozzles',
                    'Set rinse cycle (30-60 seconds)',
                    'Use distilled water supply',
                    'Ensure proper drainage',
                    'Collect for drying'
                ]
            },
            {
                heading: 'Manual Washing',
                icon: 'fa-hands',
                items: [
                    'Fill bottle with distilled water',
                    'Shake vigorously 10 times',
                    'Empty completely',
                    'Repeat 3 times minimum',
                    'Invert to drain'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'process',
        title: 'DRYING PROCESS',
        subtitle: 'Moisture-Free Containers',
        steps: [
            {
                number: '1',
                title: 'Drain',
                description: 'Invert bottles on clean drying rack for initial drainage (15-30 minutes)'
            },
            {
                number: '2',
                title: 'Air Dry',
                description: 'Place in clean air drying cabinet or area with filtered air flow'
            },
            {
                number: '3',
                title: 'Heat Dry (Optional)',
                description: 'Use drying oven at 50-60°C if faster drying needed (10-20 minutes)'
            },
            {
                number: '4',
                title: 'Verify',
                description: 'Visually inspect for complete dryness - no water droplets remaining'
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'highlight',
        title: 'INSPECTION CRITERIA',
        subtitle: 'Quality Verification',
        highlightBox: {
            icon: 'fa-magnifying-glass',
            title: 'VISUAL INSPECTION CHECKLIST',
            points: [
                '✓ No visible particles or debris inside bottle',
                '✓ No water droplets (completely dry)',
                '✓ No scratches or damage to bottle',
                '✓ No discoloration or staining',
                '✓ No odors or residue from cleaning agents',
                '✓ Cap thread area clean and undamaged',
                'REJECT any bottle failing inspection'
            ]
        },
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'CAP WASHING PROTOCOL',
        subtitle: 'Closure Preparation',
        columns: [
            {
                heading: 'Washing Caps',
                icon: 'fa-circle-dot',
                items: [
                    'Place caps in clean mesh basket',
                    'Submerge in distilled water',
                    'Agitate gently for 30 seconds',
                    'Drain and repeat 2x',
                    'Remove from basket'
                ]
            },
            {
                heading: 'Drying Caps',
                icon: 'fa-wind',
                items: [
                    'Spread caps on clean drying tray',
                    'Liner side facing up',
                    'Air dry in filtered area',
                    'Do NOT use heat (may damage liner)',
                    'Verify completely dry before use'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'highlight',
        title: 'STORAGE BEFORE USE',
        subtitle: 'Maintaining Cleanliness',
        highlightBox: {
            icon: 'fa-box-archive',
            title: 'CLEAN BOTTLE STORAGE',
            points: [
                'Store washed bottles inverted or covered',
                'Use clean, dust-free containers or bags',
                'Keep in production area or staging room',
                'Label with wash date and batch',
                'Use within 24 hours of washing ideally',
                'If stored longer than 24 hours, re-wash before use',
                'Never store on floor - use clean shelving'
            ]
        },
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'COMMON WASHING PROBLEMS',
        subtitle: 'Troubleshooting Guide',
        columns: [
            {
                heading: 'Problems',
                icon: 'fa-bug',
                items: [
                    'Water spots after drying',
                    'Particles still visible',
                    'Bottles not drying completely',
                    'Chemical odor remaining',
                    'Static attracting dust'
                ]
            },
            {
                heading: 'Solutions',
                icon: 'fa-screwdriver-wrench',
                items: [
                    'Use only distilled water for final rinse',
                    'Extend rinse time or repeat',
                    'Increase drying time/temperature',
                    'Additional distilled water rinses',
                    'Use anti-static rinse agent'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'process',
        title: 'BATCH DOCUMENTATION',
        subtitle: 'Recording Your Work',
        steps: [
            {
                number: 'LOG',
                title: 'Record Batch',
                description: 'Document number of bottles/caps washed, date, time, and operator name'
            },
            {
                number: 'VERIFY',
                title: 'QC Check',
                description: 'QC verifies sample bottles from batch - records inspection results'
            },
            {
                number: 'LABEL',
                title: 'Tag Storage',
                description: 'Attach label to storage container with wash date and QC status'
            },
            {
                number: 'FILE',
                title: 'Batch Record',
                description: 'Attach documentation to production batch record when bottles used'
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'SAFETY REMINDERS',
        subtitle: 'Protect Yourself',
        highlightBox: {
            icon: 'fa-shield-halved',
            title: 'SAFETY DURING BOTTLE WASHING',
            points: [
                'Wear appropriate PPE (gloves, apron)',
                'Handle wet bottles carefully (slippery)',
                'Use proper lifting techniques for boxes',
                'Ensure good drainage to prevent slips',
                'Keep work area organized and clean',
                'Report any broken bottles immediately',
                'Do not handle bottles with cuts on hands'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'BOTTLE WASHING SUCCESS',
        subtitle: 'Every Container Counts',
        conclusionPoints: [
            {
                icon: 'fa-water',
                title: 'Distilled Water Only',
                text: 'Final rinse always with distilled water'
            },
            {
                icon: 'fa-sun',
                title: 'Complete Drying',
                text: 'No moisture before filling operations'
            },
            {
                icon: 'fa-eye',
                title: 'Visual Inspection',
                text: 'Every bottle checked before use'
            },
            {
                icon: 'fa-file-pen',
                title: 'Document Everything',
                text: 'Wash records linked to production batches'
            }
        ],
        image: null
    }
];
