// ===== PRESENTATION 37: PRODUCTION PLANNING PROTOCOLS =====
// For: Production Staff & Supervisors | Category: SOP Training

const productionPlanningSlides = [
    {
        id: 1,
        type: 'title',
        title: 'PRODUCTION PLANNING PROTOCOLS',
        subtitle: 'Product-Specific Planning Guidelines',
        tagline: 'Plan Right, Produce Right',
        content: [
            { icon: 'fa-calendar-days', text: 'Planning fundamentals' },
            { icon: 'fa-flask', text: 'WOUND CLEX® planning' },
            { icon: 'fa-prescription-bottle', text: 'HERA Wound Gel planning' },
            { icon: 'fa-bandage', text: 'Wound Care Gauze planning' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'PRODUCTION PLANNING ESSENTIALS',
        subtitle: 'Before You Start',
        highlightBox: {
            icon: 'fa-clipboard-list',
            title: 'PLANNING CHECKLIST',
            points: [
                'Confirm production order/schedule from management',
                'Verify raw material availability (check inventory)',
                'Ensure equipment is clean and ready',
                'Check personnel availability and training status',
                'Review batch record and SOP requirements',
                'Confirm quality control resources available',
                'Plan for packaging materials and labels'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'GENERAL PLANNING WORKFLOW',
        subtitle: 'Universal Steps for All Products',
        columns: [
            {
                heading: 'Day Before Production',
                icon: 'fa-calendar-minus',
                items: [
                    'Review production schedule',
                    'Verify material availability',
                    'Stage raw materials in staging area',
                    'Prepare batch documentation',
                    'Confirm equipment cleaned and released'
                ]
            },
            {
                heading: 'Day of Production',
                icon: 'fa-calendar-check',
                items: [
                    'Pre-production meeting with team',
                    'Final equipment checks',
                    'Environmental monitoring start',
                    'Begin batch record entries',
                    'Commence production per SOP'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'highlight',
        title: 'WOUND CLEX® PRODUCTION PLANNING',
        subtitle: 'Antiseptic Solution Requirements',
        highlightBox: {
            icon: 'fa-flask',
            title: 'WOUND CLEX® MATERIALS CHECKLIST',
            points: [
                'DISTILLED WATER: 100 Liters per batch',
                'ACETIC ACID GLACIAL: 350 mL per batch',
                'POVIDONE IODINE: 250 mL per batch',
                'PEROXIDE: 10 mL per batch',
                'BOTTLES: Required quantity + 5% overage',
                'CAPS: Matching quantity to bottles',
                'LABELS: Batch-specific with expiry dates'
            ]
        },
        image: null
    },
    {
        id: 5,
        type: 'process',
        title: 'WOUND CLEX® PLANNING TIMELINE',
        subtitle: 'Production Day Schedule',
        steps: [
            {
                number: 'T-60',
                title: '60 Min Before',
                description: 'Start area cleaning, equipment sanitization, and environmental monitoring'
            },
            {
                number: 'T-30',
                title: '30 Min Before',
                description: 'Don PPE, final equipment checks, position materials in production area'
            },
            {
                number: 'T-0',
                title: 'Production Start',
                description: 'Begin component measurement and tank preparation'
            },
            {
                number: 'T+60',
                title: 'Mixing Complete',
                description: 'UV exposure (20 min), then begin filling operations'
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'WOUND CLEX® CAPACITY PLANNING',
        subtitle: 'Batch Sizes and Timing',
        columns: [
            {
                heading: 'Standard Batch',
                icon: 'fa-cube',
                items: [
                    'Batch Size: ~100 Liters',
                    'Mixing Time: ~45 minutes',
                    'UV Exposure: 20 minutes',
                    'Filling: ~2 hours (varies by bottle size)',
                    'Total Time: ~4-5 hours'
                ]
            },
            {
                heading: 'Equipment Needed',
                icon: 'fa-gears',
                items: [
                    'Mixing Tank (100L+ capacity)',
                    'UV Sterilization Chamber',
                    'Calibrated measuring equipment',
                    'Bottle filling machine',
                    'Capping equipment'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'highlight',
        title: 'HERA WOUND GEL PRODUCTION PLANNING',
        subtitle: 'Emulsion Product Requirements',
        highlightBox: {
            icon: 'fa-prescription-bottle',
            title: 'HERA GEL MATERIALS CHECKLIST',
            points: [
                'OIL PHASE INGREDIENTS: As per master formula',
                'WATER PHASE INGREDIENTS: As per master formula',
                'ACTIVE INGREDIENTS: Measured per 8L batch portions',
                'TUBES: Required quantity + 5% overage',
                'CARTONS: Secondary packaging as needed',
                'LABELS: With batch and expiry information',
                'Note: Plan for 24-HOUR HOLDING TIME after mixing'
            ]
        },
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'HERA GEL PLANNING TIMELINE',
        subtitle: 'Two-Day Production Cycle',
        steps: [
            {
                number: 'DAY 1',
                title: 'Preparation & Mixing',
                description: 'Oil phase (100°C), water phase (100°C), filtration, homogenization (30 min), cool down'
            },
            {
                number: 'HOLD',
                title: '24-Hour Hold',
                description: 'Sealed tank holding at room temperature - DO NOT DISTURB'
            },
            {
                number: 'DAY 2',
                title: 'Ingredient & Filling',
                description: 'Add active ingredients per 8L portions, mix with table mixer, fill tubes'
            },
            {
                number: 'FINAL',
                title: 'Packaging',
                description: 'Seal tubes, label, pack in cartons, transfer for QC release'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'HERA GEL CAPACITY PLANNING',
        subtitle: 'Batch Sizes and Critical Timing',
        columns: [
            {
                heading: 'Standard Batch',
                icon: 'fa-cube',
                items: [
                    'Oil Tank: 50L capacity',
                    'Water Tank: 50L capacity',
                    'Homogenization: 30 min total',
                    'Holding Time: 24 HOURS (critical)',
                    'Ingredient mixing: 8L portions'
                ]
            },
            {
                heading: 'Time Requirements',
                icon: 'fa-clock',
                items: [
                    'Day 1: 4-5 hours active',
                    'Holding: 24 hours',
                    'Day 2: 3-4 hours active',
                    'TOTAL: 2 calendar days minimum',
                    'Plan production accordingly'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'highlight',
        title: 'WOUND CARE GAUZE PRODUCTION PLANNING',
        subtitle: 'Honey Immersion Product',
        highlightBox: {
            icon: 'fa-bandage',
            title: 'GAUZE MATERIALS CHECKLIST',
            points: [
                'RAW HONEY: 100 Liters per batch',
                'POVIDONE IODINE GEL (Concentrated): 1000 mL per 100L honey',
                'STERILE DENSE GAUZE: 3 packs per daily target',
                'PACKAGING MATERIALS: Sterile pouches/containers',
                'LABELS: With batch and expiry information',
                'Note: Plan for 12-HOUR IMMERSION TIME'
            ]
        },
        image: null
    },
    {
        id: 11,
        type: 'process',
        title: 'GAUZE PLANNING TIMELINE',
        subtitle: 'Immersion Cycle Schedule',
        steps: [
            {
                number: 'AM',
                title: 'Morning Preparation',
                description: 'Pasteurize honey (80°C), filter, mix with povidone (speed 40, 5 min)'
            },
            {
                number: 'MID',
                title: 'Gauze Loading',
                description: 'Load sterile gauze into immersion tank, apply immersion plate, seal tank'
            },
            {
                number: 'HOLD',
                title: '12-Hour Immersion',
                description: 'Sealed immersion for 12 hours minimum - schedule around shift change'
            },
            {
                number: 'PM/AM',
                title: 'Next Cycle',
                description: 'Remove gauze, package, start new batch - can run 2 batches per 24 hours'
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'GAUZE CAPACITY PLANNING',
        subtitle: 'Production Optimization',
        columns: [
            {
                heading: 'Daily Capacity',
                icon: 'fa-chart-bar',
                items: [
                    'Target: 3 packs gauze per immersion',
                    'Immersion time: 12 hours',
                    'Max 2 cycles per 24 hours',
                    'Plan morning and evening shifts',
                    'Stagger batches for efficiency'
                ]
            },
            {
                heading: 'Scheduling Tips',
                icon: 'fa-lightbulb',
                items: [
                    'Start Batch 1 at 6 AM',
                    'Load Batch 2 at 6 PM',
                    'Batch 1 ready at 6 PM',
                    'Batch 2 ready at 6 AM',
                    'Continuous production cycle'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'RESOURCE PLANNING',
        subtitle: 'Personnel and Equipment',
        highlightBox: {
            icon: 'fa-users-gear',
            title: 'RESOURCE REQUIREMENTS',
            points: [
                'WOUND CLEX®: 2 operators minimum, 1 supervisor',
                'HERA GEL: 2-3 operators, 1 supervisor (2 days)',
                'GAUZE: 2 operators per shift, 1 supervisor',
                'QC PERSONNEL: Available for in-process testing',
                'MAINTENANCE: On standby for equipment issues',
                'Always have backup personnel identified'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'CONTINGENCY PLANNING',
        subtitle: 'When Things Do not Go as Planned',
        columns: [
            {
                heading: 'Common Issues',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Material shortage discovered',
                    'Equipment malfunction',
                    'Personnel absence',
                    'Power failure',
                    'QC test failure'
                ]
            },
            {
                heading: 'Response Actions',
                icon: 'fa-wrench',
                items: [
                    'Have alternate suppliers listed',
                    'Backup equipment identified',
                    'Cross-trained personnel available',
                    'UPS for critical equipment',
                    'Deviation procedure ready'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'PRODUCTION PLANNING SUCCESS',
        subtitle: 'Plan, Prepare, Produce',
        conclusionPoints: [
            {
                icon: 'fa-list-check',
                title: 'Verify Materials',
                text: 'Confirm all materials before production day'
            },
            {
                icon: 'fa-clock',
                title: 'Know Your Timing',
                text: 'Understand holding times and cycle durations'
            },
            {
                icon: 'fa-users',
                title: 'Plan Resources',
                text: 'Ensure personnel and equipment available'
            },
            {
                icon: 'fa-file-lines',
                title: 'Document Plan',
                text: 'Written production schedule with all details'
            }
        ],
        image: null
    }
];
