// ===== PRESENTATION 6: GOOD MANUFACTURING PRACTICE (GMP) FOR PRODUCTION =====
// For: Production Staff | Category: Production Training

const gmpProductionSlides = [
    {
        id: 1,
        type: 'title',
        title: 'GOOD MANUFACTURING PRACTICE',
        subtitle: 'GMP for Production Staff',
        tagline: 'Quality Built Into Every Step',
        content: [
            { icon: 'fa-industry', text: 'Understand GMP principles' },
            { icon: 'fa-clipboard-check', text: 'Learn compliance requirements' },
            { icon: 'fa-shield-halved', text: 'Prevent contamination' },
            { icon: 'fa-certificate', text: 'Build quality into products' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is GMP?',
        subtitle: 'Good Manufacturing Practice Defined',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'System ensuring products are consistently:',
                    '→ Produced according to quality standards',
                    '→ Controlled according to specifications',
                    'Required for pharmaceutical manufacturing',
                    'Regulatory requirement worldwide'
                ]
            },
            {
                heading: 'Purpose',
                icon: 'fa-bullseye',
                items: [
                    'Minimize risks that cannot be eliminated by testing:',
                    '→ Contamination',
                    '→ Mix-ups',
                    '→ Errors',
                    'Ensure patient safety'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'The 5 P\'s of GMP',
        subtitle: 'Foundation of Quality Manufacturing',
        columns: [
            {
                heading: 'People & Premises',
                icon: 'fa-users',
                items: [
                    'PEOPLE: Trained & qualified',
                    '→ Know their responsibilities',
                    '→ Follow procedures',
                    'PREMISES: Clean & maintained',
                    '→ Designed to prevent contamination',
                    '→ Proper layout and flow'
                ]
            },
            {
                heading: 'Processes, Products & Procedures',
                icon: 'fa-gears',
                items: [
                    'PROCESSES: Validated & controlled',
                    'PRODUCTS: Quality materials used',
                    '→ Tested and approved',
                    'PROCEDURES: Written & followed',
                    '→ SOPs for all operations',
                    '→ Documentation maintained'
                ]
            }
        ],
        goldenRule: 'Master the 5 P\'s for GMP success',
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'GMP Golden Rules',
        subtitle: 'Never Compromise on These',
        columns: [
            {
                heading: 'Rules 1-5',
                icon: 'fa-list-ol',
                items: [
                    '1. Get trained BEFORE working',
                    '2. Follow procedures EXACTLY',
                    '3. Document EVERYTHING',
                    '4. Validate CRITICAL processes',
                    '5. Use PROPER facilities'
                ]
            },
            {
                heading: 'Rules 6-10',
                icon: 'fa-list-ol',
                items: [
                    '6. Maintain CLEAN environment',
                    '7. Be QUALITY conscious',
                    '8. Prevent CONTAMINATION',
                    '9. Know your RESPONSIBILITIES',
                    '10. Practice GOOD hygiene'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Personnel Requirements',
        subtitle: 'The Human Element in GMP',
        columns: [
            {
                heading: 'Training Requirements',
                icon: 'fa-graduation-cap',
                items: [
                    'Initial GMP training',
                    'Job-specific training',
                    'Regular refresher training',
                    'Training documentation',
                    'Competency assessment'
                ]
            },
            {
                heading: 'Personal Hygiene',
                icon: 'fa-soap',
                items: [
                    'Clean work attire daily',
                    'Proper gowning procedures',
                    'Hand hygiene before work',
                    'Report illness immediately',
                    'No eating/drinking in production'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Facility & Equipment GMP',
        subtitle: 'Premises Requirements',
        columns: [
            {
                heading: 'Facility Design',
                icon: 'fa-building',
                items: [
                    'Logical process flow',
                    'Adequate space',
                    'Proper lighting and ventilation',
                    'Easy to clean surfaces',
                    'Controlled access'
                ]
            },
            {
                heading: 'Equipment Requirements',
                icon: 'fa-gears',
                items: [
                    'Designed for purpose',
                    'Easy to clean',
                    'Properly maintained',
                    'Calibrated regularly',
                    'Qualified/validated'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Documentation in GMP',
        subtitle: 'The Backbone of Compliance',
        columns: [
            {
                heading: 'Document Types',
                icon: 'fa-folder-open',
                items: [
                    'Batch Manufacturing Records',
                    'Standard Operating Procedures',
                    'Specifications',
                    'Logbooks',
                    'Labels'
                ]
            },
            {
                heading: 'Documentation Rules',
                icon: 'fa-pen',
                items: [
                    'Write clearly in permanent ink',
                    'Date and sign all entries',
                    'No overwriting or white-out',
                    'Make corrections properly',
                    'Record at time of action'
                ]
            }
        ],
        goldenRule: 'If it wasn\'t documented, it didn\'t happen',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Material Management',
        subtitle: 'Quality from Start to Finish',
        columns: [
            {
                heading: 'Raw Materials',
                icon: 'fa-boxes-stacked',
                items: [
                    'Approved suppliers only',
                    'Receipt and inspection',
                    'Quarantine until approved',
                    'Proper storage conditions',
                    'FIFO/FEFO principles'
                ]
            },
            {
                heading: 'In-Process & Finished',
                icon: 'fa-box',
                items: [
                    'Line clearance before starting',
                    'In-process controls',
                    'Proper labeling',
                    'Quarantine until released',
                    'Full traceability'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Contamination Prevention',
        subtitle: 'The Three Types of Contamination',
        columns: [
            {
                heading: 'Contamination Types',
                icon: 'fa-biohazard',
                items: [
                    'MICROBIAL: Bacteria, fungi, viruses',
                    'PARTICULATE: Dust, fibers, metal',
                    'CHEMICAL: Wrong ingredients, cleaning residues',
                    'CROSS-CONTAMINATION: Between products',
                    'All are preventable!'
                ]
            },
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield-virus',
                items: [
                    'Proper gowning and hygiene',
                    'Clean environment',
                    'Controlled access',
                    'Dedicated equipment when needed',
                    'Effective cleaning procedures'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Production Controls',
        subtitle: 'Ensuring Quality During Manufacturing',
        columns: [
            {
                heading: 'Before Production',
                icon: 'fa-play',
                items: [
                    'Line clearance completed',
                    'Materials verified',
                    'Equipment clean and ready',
                    'Documents available',
                    'Personnel trained'
                ]
            },
            {
                heading: 'During Production',
                icon: 'fa-cogs',
                items: [
                    'Follow batch record exactly',
                    'In-process checks',
                    'Monitor critical parameters',
                    'Document all actions',
                    'Report any deviations'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Quality Control',
        subtitle: 'Testing for Quality',
        columns: [
            {
                heading: 'Sampling',
                icon: 'fa-flask',
                items: [
                    'Representative samples',
                    'Proper sampling technique',
                    'Correct containers',
                    'Proper labeling',
                    'Timely submission to QC'
                ]
            },
            {
                heading: 'Testing',
                icon: 'fa-vial',
                items: [
                    'Validated test methods',
                    'Calibrated instruments',
                    'Trained analysts',
                    'Documented results',
                    'Pass/fail decisions'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Deviations & CAPA',
        subtitle: 'When Things Don\'t Go as Planned',
        columns: [
            {
                heading: 'What to Do',
                icon: 'fa-exclamation-circle',
                items: [
                    'Stop if product quality at risk',
                    'Report to supervisor immediately',
                    'Document the deviation',
                    'Isolate affected materials',
                    'Await instructions'
                ]
            },
            {
                heading: 'Investigation',
                icon: 'fa-magnifying-glass',
                items: [
                    'Root cause analysis',
                    'Impact assessment',
                    'Corrective actions',
                    'Preventive actions',
                    'Effectiveness verification'
                ]
            }
        ],
        goldenRule: 'Hiding problems creates bigger problems',
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'GMP Inspections',
        subtitle: 'Regulatory Oversight',
        columns: [
            {
                heading: 'Types of Inspections',
                icon: 'fa-clipboard-check',
                items: [
                    'NAFDAC inspections',
                    'Internal audits',
                    'Customer audits',
                    'Third-party audits',
                    'Self-inspections'
                ]
            },
            {
                heading: 'Your Role',
                icon: 'fa-user-tie',
                items: [
                    'Work as if being inspected',
                    'Answer questions honestly',
                    'Show actual practices',
                    'Have documents ready',
                    'Stay calm and professional'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'Consequences of GMP Failures',
        subtitle: 'Why Compliance Matters',
        columns: [
            {
                heading: 'Patient Impact',
                icon: 'fa-user-injured',
                items: [
                    'Contaminated products',
                    'Ineffective medicines',
                    'Adverse reactions',
                    'Patient harm or death',
                    'Loss of trust'
                ]
            },
            {
                heading: 'Company Impact',
                icon: 'fa-building',
                items: [
                    'Product recalls',
                    'Warning letters',
                    'License suspension',
                    'Legal liability',
                    'Business closure'
                ]
            }
        ],
        goldenRule: 'GMP protects patients and our company',
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'GMP Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-graduation-cap', title: 'Be Trained', text: 'Never work without proper training' },
            { icon: 'fa-clipboard-list', title: 'Follow SOPs', text: 'Procedures exist for a reason' },
            { icon: 'fa-pen', title: 'Document All', text: 'Complete, accurate records' },
            { icon: 'fa-shield-virus', title: 'Prevent Contamination', text: 'Quality is built, not tested in' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gmpProductionSlides };
}
