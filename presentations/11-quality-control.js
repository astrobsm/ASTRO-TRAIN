// ===== PRESENTATION 11: QUALITY CONTROL & IN-PROCESS TESTING =====
// For: Production Staff | Category: Production Training

const qualityControlSlides = [
    {
        id: 1,
        type: 'title',
        title: 'QUALITY CONTROL & IN-PROCESS TESTING',
        subtitle: 'Ensuring Product Quality',
        tagline: 'Test Right, Get It Right',
        content: [
            { icon: 'fa-microscope', text: 'Understand QC role' },
            { icon: 'fa-vial', text: 'Learn testing requirements' },
            { icon: 'fa-clipboard-check', text: 'Master sampling techniques' },
            { icon: 'fa-check-double', text: 'Interpret results correctly' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Quality Control vs Quality Assurance',
        subtitle: 'Different but Complementary Roles',
        columns: [
            {
                heading: 'Quality Control (QC)',
                icon: 'fa-flask',
                items: [
                    'Laboratory testing',
                    'Product and material testing',
                    'Sampling and analysis',
                    'Pass/fail decisions',
                    'Reactive: Tests products made'
                ]
            },
            {
                heading: 'Quality Assurance (QA)',
                icon: 'fa-shield-halved',
                items: [
                    'System oversight',
                    'Procedure compliance',
                    'Auditing',
                    'Release decisions',
                    'Proactive: Prevents problems'
                ]
            }
        ],
        goldenRule: 'QC tests, QA assures, both protect quality',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Types of Quality Control Testing',
        subtitle: 'When Testing Occurs',
        columns: [
            {
                heading: 'Material Testing',
                icon: 'fa-boxes-stacked',
                items: [
                    'Raw material receipt',
                    'Identity verification',
                    'Purity testing',
                    'Specification compliance',
                    'Before use approval'
                ]
            },
            {
                heading: 'Product Testing',
                icon: 'fa-prescription-bottle',
                items: [
                    'In-process testing',
                    'Bulk product testing',
                    'Finished product testing',
                    'Stability testing',
                    'Before release approval'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'In-Process Controls (IPC)',
        subtitle: 'Testing During Manufacturing',
        columns: [
            {
                heading: 'Purpose of IPC',
                icon: 'fa-bullseye',
                items: [
                    'Monitor critical parameters',
                    'Detect deviations early',
                    'Allow real-time correction',
                    'Ensure batch consistency',
                    'Part of process control'
                ]
            },
            {
                heading: 'Common IPC Tests',
                icon: 'fa-list-check',
                items: [
                    'pH measurement',
                    'Weight/volume checks',
                    'Appearance inspection',
                    'Temperature monitoring',
                    'Fill volume verification'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Sampling Principles',
        subtitle: 'Getting Representative Samples',
        columns: [
            {
                heading: 'Sampling Requirements',
                icon: 'fa-droplet',
                items: [
                    'Representative of the batch',
                    'Correct quantity',
                    'Proper containers',
                    'Appropriate labeling',
                    'Maintained sample integrity'
                ]
            },
            {
                heading: 'Sampling Techniques',
                icon: 'fa-hand-holding-droplet',
                items: [
                    'Follow sampling SOP',
                    'Use clean equipment',
                    'Aseptic technique for sterile',
                    'Record sample details',
                    'Submit promptly to lab'
                ]
            }
        ],
        goldenRule: 'A bad sample gives bad results',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Physical Testing',
        subtitle: 'Appearance and Physical Properties',
        columns: [
            {
                heading: 'Visual Inspection',
                icon: 'fa-eye',
                items: [
                    'Clarity (clear solutions)',
                    'Color consistency',
                    'Particulate matter',
                    'Container integrity',
                    'Label correctness'
                ]
            },
            {
                heading: 'Physical Measurements',
                icon: 'fa-ruler',
                items: [
                    'pH value',
                    'Specific gravity',
                    'Viscosity',
                    'Fill volume/weight',
                    'Temperature'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Chemical Testing',
        subtitle: 'Active Ingredient Analysis',
        columns: [
            {
                heading: 'Assay Testing',
                icon: 'fa-flask',
                items: [
                    'Measures active ingredient content',
                    'Must meet specification range',
                    'Validated test methods',
                    'Calibrated instruments',
                    'Documented results'
                ]
            },
            {
                heading: 'Related Tests',
                icon: 'fa-vial',
                items: [
                    'Impurity testing',
                    'Degradation products',
                    'Related substances',
                    'Preservative content',
                    'Heavy metals'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Microbiological Testing',
        subtitle: 'Ensuring Microbial Quality',
        columns: [
            {
                heading: 'Microbial Tests',
                icon: 'fa-bacteria',
                items: [
                    'Total aerobic count',
                    'Yeast and mold count',
                    'Specified organisms',
                    'Sterility testing (if sterile)',
                    'Endotoxin testing (if applicable)'
                ]
            },
            {
                heading: 'Sampling for Micro',
                icon: 'fa-hand-sparkles',
                items: [
                    'Aseptic technique critical',
                    'Sterile containers',
                    'Minimize exposure time',
                    'Prompt submission',
                    'Environmental controls'
                ]
            }
        ],
        goldenRule: 'Aseptic technique prevents false results',
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'WOUND CLEX® Specifications',
        subtitle: 'Our Product Quality Requirements',
        columns: [
            {
                heading: 'Physical/Chemical',
                icon: 'fa-flask',
                items: [
                    'Appearance: Clear solution',
                    'Color: Within specification',
                    'pH: Defined range',
                    'Assay: 95-105% of label claim',
                    'Volume: Within tolerance'
                ]
            },
            {
                heading: 'Microbiological',
                icon: 'fa-shield-virus',
                items: [
                    'Sterility: Pass',
                    'No specified organisms',
                    'Endotoxins: Within limit',
                    'Particulates: Within limit',
                    'Container closure integrity'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Test Methods & Equipment',
        subtitle: 'Tools of Quality Control',
        columns: [
            {
                heading: 'Method Requirements',
                icon: 'fa-file-code',
                items: [
                    'Validated test methods',
                    'Written procedures',
                    'Trained analysts',
                    'Documented results',
                    'Method verification'
                ]
            },
            {
                heading: 'Equipment Requirements',
                icon: 'fa-gears',
                items: [
                    'Qualified equipment',
                    'Regular calibration',
                    'Maintenance records',
                    'Use logs',
                    'Out-of-calibration procedures'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Out-of-Specification Results',
        subtitle: 'When Results Don\'t Meet Specs',
        columns: [
            {
                heading: 'OOS Process',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Stop and notify supervisor',
                    'Document original result',
                    'Investigation initiated',
                    'Lab and/or process review',
                    'Root cause determination'
                ]
            },
            {
                heading: 'Possible Outcomes',
                icon: 'fa-code-branch',
                items: [
                    'Lab error confirmed → retest',
                    'Process issue → batch decision',
                    'True OOS → reject batch',
                    'CAPA initiated',
                    'Never discard OOS results'
                ]
            }
        ],
        goldenRule: 'Never hide or ignore OOS results',
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Documentation in QC',
        subtitle: 'Recording Test Results',
        columns: [
            {
                heading: 'Recording Requirements',
                icon: 'fa-pen',
                items: [
                    'Record raw data',
                    'Document calculations',
                    'Note equipment used',
                    'Sign and date entries',
                    'Second person verification'
                ]
            },
            {
                heading: 'Data Integrity',
                icon: 'fa-shield-halved',
                items: [
                    'ALCOA principles',
                    'Attributable',
                    'Legible',
                    'Contemporaneous',
                    'Original, Accurate'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Production Staff Role in QC',
        subtitle: 'How You Support Quality',
        columns: [
            {
                heading: 'Your Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Perform IPC tests correctly',
                    'Collect samples properly',
                    'Document accurately',
                    'Report abnormalities',
                    'Await QC results'
                ]
            },
            {
                heading: 'Working with QC Lab',
                icon: 'fa-handshake',
                items: [
                    'Communicate clearly',
                    'Submit samples on time',
                    'Provide batch information',
                    'Respect hold times',
                    'Support investigations'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Quality Control Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-droplet', title: 'Sample Correctly', text: 'Representative samples are essential' },
            { icon: 'fa-clipboard-check', title: 'Test Accurately', text: 'Follow validated methods' },
            { icon: 'fa-pen', title: 'Document Completely', text: 'Data integrity matters' },
            { icon: 'fa-comments', title: 'Report Issues', text: 'OOS results need investigation' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { qualityControlSlides };
}
