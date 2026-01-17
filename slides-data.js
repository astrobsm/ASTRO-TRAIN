// ===== WOUND CLEX PROTOCOL - SLIDES DATA =====
// This file contains all slide content and can be edited to modify the presentation

const slidesData = [
    // SLIDE 1 - Title & Objectives
    {
        id: 1,
        type: 'title',
        title: 'WOUND CLEX® PROTOCOL',
        subtitle: 'Production Process Training',
        tagline: 'From Planning to Warehouse Transfer',
        content: [
            { icon: 'fa-book-open', text: 'Understand each stage of production' },
            { icon: 'fa-shield-alt', text: 'Ensure safety, quality, and compliance' },
            { icon: 'fa-users-cog', text: 'Standardize staff responsibilities' },
            { icon: 'fa-ban', text: 'Prevent contamination, errors, and waste' }
        ],
        image: null
    },
    // SLIDE 2 - Product Overview
    {
        id: 2,
        type: 'standard',
        title: 'Product Overview',
        subtitle: 'WOUND CLEX® at a Glance',
        columns: [
            {
                heading: 'Product Information',
                icon: 'fa-info-circle',
                items: [
                    'Product Name: WOUND CLEX®',
                    'Category: Medical wound cleaning solution',
                    'Intended Use: Hospital and clinical wound care',
                    'Dosage Form: Liquid solution',
                    'Packaging: Sealed plastic bottles (various volumes)'
                ]
            },
            {
                heading: 'Key Principles',
                icon: 'fa-star',
                items: [
                    'Patient safety first',
                    'Consistency of formulation',
                    'Zero tolerance for contamination'
                ]
            }
        ],
        image: null
    },
    // SLIDE 3 - Regulatory & Quality Framework
    {
        id: 3,
        type: 'standard',
        title: 'Regulatory & Quality Framework',
        subtitle: 'Standards & Compliance',
        columns: [
            {
                heading: 'Standards Followed',
                icon: 'fa-certificate',
                items: [
                    'Good Manufacturing Practice (GMP)',
                    'Internal Standard Operating Procedures (SOPs)',
                    'Batch traceability and documentation',
                    'Hospital-grade hygiene standards'
                ]
            },
            {
                heading: 'Core Quality Pillars',
                icon: 'fa-columns',
                items: [
                    'Raw material control',
                    'Process validation',
                    'In-process quality checks',
                    'Final product verification'
                ]
            }
        ],
        image: null
    },
    // SLIDE 4 - Production Flow Overview
    {
        id: 4,
        type: 'flow',
        title: 'Production Flow Overview',
        subtitle: 'End-to-End Process',
        flowItems: [
            'Production Planning',
            'Raw Material Procurement',
            'Raw Material Inspection',
            'Water Purification',
            'Solution Compounding',
            'In-Process QC',
            'Filtration',
            'Bottle Preparation',
            'Filling',
            'Capping & Sealing',
            'Labeling',
            'Final Inspection',
            'Packaging',
            'Warehouse Transfer'
        ],
        image: null
    },
    // SLIDE 5 - Production Planning
    {
        id: 5,
        type: 'standard',
        title: 'Production Planning',
        subtitle: 'Setting the Foundation',
        columns: [
            {
                heading: 'Activities',
                icon: 'fa-tasks',
                items: [
                    'Confirm production target (units & volume)',
                    'Assign batch number',
                    'Confirm availability of raw materials',
                    'Confirm packaging materials availability',
                    'Verify clean equipment readiness',
                    'Ensure trained personnel availability'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-alt',
                items: [
                    'Production order',
                    'Batch Manufacturing Record (BMR)'
                ]
            }
        ],
        image: null
    },
    // SLIDE 6 - Raw Material Procurement
    {
        id: 6,
        type: 'standard',
        title: 'Raw Material Procurement',
        subtitle: 'Sourcing Quality Ingredients',
        columns: [
            {
                heading: 'Materials May Include',
                icon: 'fa-flask',
                items: [
                    'Purified water (primary component)',
                    'Active cleansing agents',
                    'Stabilizers / buffers',
                    'Preservatives (if applicable)'
                ]
            },
            {
                heading: 'Rules',
                icon: 'fa-gavel',
                items: [
                    'Approved suppliers only',
                    'Certificate of Analysis (CoA) required',
                    'No expired or damaged materials accepted'
                ]
            }
        ],
        image: null
    },
    // SLIDE 7 - Raw Material Receipt & Inspection
    {
        id: 7,
        type: 'standard',
        title: 'Raw Material Receipt & Inspection',
        subtitle: 'Quality Gate #1',
        columns: [
            {
                heading: 'Inspection Checks',
                icon: 'fa-search',
                items: [
                    'Correct name & batch number',
                    'Integrity of container',
                    'Expiry date verification',
                    'CoA verification'
                ]
            },
            {
                heading: 'Status & Storage',
                icon: 'fa-warehouse',
                items: [
                    'QUARANTINE - Pending review',
                    'APPROVED - Ready for use',
                    'REJECTED - Do not use',
                    'Clean, dry, labeled storage area',
                    'FIFO (First-In-First-Out) policy'
                ]
            }
        ],
        hasStatusLabels: true,
        image: null
    },
    // SLIDE 8 - Water Purification
    {
        id: 8,
        type: 'standard',
        title: 'Water Purification',
        subtitle: 'The Foundation of Quality',
        columns: [
            {
                heading: 'Purification Steps',
                icon: 'fa-tint',
                items: [
                    'Water Standard: Purified water suitable for medical use',
                    'Filtration process',
                    'Softening treatment',
                    'Reverse osmosis / distillation',
                    'Storage in sanitized tank'
                ]
            },
            {
                heading: 'Monitoring',
                icon: 'fa-chart-line',
                items: [
                    'Conductivity testing',
                    'Microbial load analysis',
                    'Daily log documentation'
                ]
            }
        ],
        image: null
    },
    // SLIDE 9 - Equipment Preparation
    {
        id: 9,
        type: 'standard',
        title: 'Equipment Preparation',
        subtitle: 'Ready for Production',
        columns: [
            {
                heading: 'Equipment Includes',
                icon: 'fa-cogs',
                items: [
                    'Mixing tanks',
                    'Measuring cylinders',
                    'Pumps',
                    'Transfer hoses'
                ]
            },
            {
                heading: 'Before Use Protocol',
                icon: 'fa-clipboard-check',
                items: [
                    'Cleaning and sanitization',
                    'Visual inspection',
                    'Cleaning log signed'
                ]
            }
        ],
        goldenRule: 'No clean log = No production',
        image: null
    },
    // SLIDE 10 - Solution Compounding
    {
        id: 10,
        type: 'standard',
        title: 'Solution Compounding (Mixing)',
        subtitle: 'Creating the Formula',
        columns: [
            {
                heading: 'Procedure',
                icon: 'fa-blender',
                items: [
                    'Load measured purified water',
                    'Add ingredients in correct sequence',
                    'Maintain specified mixing speed',
                    'Observe temperature limits',
                    'Mix for validated time'
                ]
            },
            {
                heading: 'Critical Control Points',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Accurate weighing',
                    'Correct order of addition',
                    'Avoid foaming or overheating'
                ]
            }
        ],
        image: null
    },
    // SLIDE 11 - In-Process Quality Control
    {
        id: 11,
        type: 'standard',
        title: 'In-Process Quality Control',
        subtitle: 'Continuous Verification',
        columns: [
            {
                heading: 'Checks Performed',
                icon: 'fa-vial',
                items: [
                    'Appearance (clear, uniform)',
                    'pH testing',
                    'Odor evaluation',
                    'Volume confirmation'
                ]
            },
            {
                heading: 'Action Protocol',
                icon: 'fa-bolt',
                items: [
                    'Record all results immediately',
                    'Correct deviations immediately',
                    'Escalate abnormal findings to supervisor'
                ]
            }
        ],
        image: null
    },
    // SLIDE 12 - Filtration
    {
        id: 12,
        type: 'standard',
        title: 'Filtration (If Applicable)',
        subtitle: 'Ensuring Purity',
        columns: [
            {
                heading: 'Purpose',
                icon: 'fa-filter',
                items: [
                    'Remove particulate matter',
                    'Improve clarity and safety'
                ]
            },
            {
                heading: 'Method & Documentation',
                icon: 'fa-file-medical',
                items: [
                    'Inline or batch filtration',
                    'Sterile or validated filters',
                    'Filter batch number recorded',
                    'Integrity confirmation documented'
                ]
            }
        ],
        image: null
    },
    // SLIDE 13 - Bottle Preparation
    {
        id: 13,
        type: 'standard',
        title: 'Bottle Preparation',
        subtitle: 'Container Readiness',
        columns: [
            {
                heading: 'Bottle Handling',
                icon: 'fa-prescription-bottle',
                items: [
                    'Approved food/medical-grade bottles',
                    'Visual inspection required',
                    'Washing or air-blowing',
                    'Drying in clean area'
                ]
            },
            {
                heading: 'Rejection Criteria',
                icon: 'fa-times-circle',
                items: [
                    'Cracked bottles',
                    'Deformed bottles',
                    'Dirty bottles'
                ]
            }
        ],
        image: null
    },
    // SLIDE 14 - Filling Operation
    {
        id: 14,
        type: 'standard',
        title: 'Filling Operation',
        subtitle: 'Precision Dispensing',
        columns: [
            {
                heading: 'Process',
                icon: 'fa-fill-drip',
                items: [
                    'Transfer solution to filling tank',
                    'Set fill volume accurately',
                    'Fill bottles under clean conditions'
                ]
            },
            {
                heading: 'Controls',
                icon: 'fa-sliders-h',
                items: [
                    'Volume calibration verified',
                    'Spill prevention measures',
                    'Line cleanliness maintained'
                ]
            }
        ],
        image: null
    },
    // SLIDE 15 - Capping & Sealing
    {
        id: 15,
        type: 'standard',
        title: 'Capping & Sealing',
        subtitle: 'Securing Product Integrity',
        columns: [
            {
                heading: 'Steps',
                icon: 'fa-lock',
                items: [
                    'Immediate capping after filling',
                    'Tamper-evident seal application',
                    'Torque verification (if screw cap)'
                ]
            },
            {
                heading: 'Inspection',
                icon: 'fa-eye',
                items: [
                    'Leak test performed',
                    'Seal integrity verified'
                ]
            }
        ],
        image: null
    },
    // SLIDE 16 - Labeling
    {
        id: 16,
        type: 'standard',
        title: 'Labeling',
        subtitle: 'Product Identity',
        columns: [
            {
                heading: 'Label Must Contain',
                icon: 'fa-tag',
                items: [
                    'Product name',
                    'Batch number',
                    'Manufacturing date',
                    'Expiry date',
                    'Directions for use',
                    'Manufacturer details'
                ]
            },
            {
                heading: 'Critical Rule',
                icon: 'fa-exclamation-circle',
                items: [
                    'Every label must be verified',
                    'Correct placement required',
                    'No damaged or illegible labels'
                ]
            }
        ],
        goldenRule: 'No label = Not a product',
        image: null
    },
    // SLIDE 17 - Final Quality Inspection
    {
        id: 17,
        type: 'standard',
        title: 'Final Quality Inspection',
        subtitle: 'Last Quality Gate',
        columns: [
            {
                heading: 'Final Checks',
                icon: 'fa-check-double',
                items: [
                    'Correct fill level',
                    'Clear solution appearance',
                    'Proper label placement',
                    'Correct batch details'
                ]
            },
            {
                heading: 'Disposition',
                icon: 'fa-balance-scale',
                items: [
                    'APPROVED FOR PACKAGING',
                    'REJECTED (document reason)'
                ]
            }
        ],
        image: null
    },
    // SLIDE 18 - Secondary Packaging
    {
        id: 18,
        type: 'standard',
        title: 'Secondary Packaging',
        subtitle: 'Protection & Presentation',
        columns: [
            {
                heading: 'Packaging Includes',
                icon: 'fa-box-open',
                items: [
                    'Cartons',
                    'Inserts / leaflets',
                    'Shrink wrapping (if used)'
                ]
            },
            {
                heading: 'Requirements',
                icon: 'fa-clipboard-list',
                items: [
                    'Batch consistency maintained',
                    'Protection from light & damage',
                    'Proper stacking and handling'
                ]
            }
        ],
        image: null
    },
    // SLIDE 19 - Warehouse Transfer
    {
        id: 19,
        type: 'standard',
        title: 'Warehouse Transfer',
        subtitle: 'Final Destination',
        columns: [
            {
                heading: 'Procedure',
                icon: 'fa-dolly',
                items: [
                    'Generate transfer note',
                    'Move to finished goods store',
                    'Store under recommended conditions',
                    'FIFO strictly enforced'
                ]
            },
            {
                heading: 'Warehouse Records',
                icon: 'fa-database',
                items: [
                    'Batch location documented',
                    'Quantity verified',
                    'Release status updated'
                ]
            }
        ],
        image: null
    },
    // SLIDE 20 - Staff Responsibilities
    {
        id: 20,
        type: 'standard',
        title: 'Staff Responsibilities',
        subtitle: 'Everyone Has a Role',
        columns: [
            {
                heading: 'Production Staff',
                icon: 'fa-hard-hat',
                items: [
                    'Follow SOPs strictly',
                    'Report any deviations',
                    'Maintain cleanliness'
                ]
            },
            {
                heading: 'Quality Control',
                icon: 'fa-user-check',
                items: [
                    'Verify all parameters',
                    'Document findings',
                    'Release or reject products'
                ]
            },
            {
                heading: 'Supervisors',
                icon: 'fa-user-tie',
                items: [
                    'Ensure compliance',
                    'Maintain discipline',
                    'Train and guide staff'
                ]
            },
            {
                heading: 'All Staff',
                icon: 'fa-users',
                items: [
                    'Report deviations immediately',
                    'Maintain quality mindset'
                ]
            }
        ],
        image: null
    },
    // SLIDE 21 - Safety & Hygiene Rules
    {
        id: 21,
        type: 'standard',
        title: 'Safety & Hygiene Rules',
        subtitle: 'Non-Negotiable Standards',
        columns: [
            {
                heading: 'Personal Protection',
                icon: 'fa-user-shield',
                items: [
                    'Proper PPE at all times',
                    'Hand hygiene mandatory',
                    'Appropriate footwear required',
                    'Hair covering in production area'
                ]
            },
            {
                heading: 'Area Rules',
                icon: 'fa-building',
                items: [
                    'No eating in production area',
                    'No phones in production area',
                    'Report illness immediately',
                    'Follow gowning procedures'
                ]
            }
        ],
        image: null
    },
    // SLIDE 22 - Documentation & Traceability
    {
        id: 22,
        type: 'standard',
        title: 'Documentation & Traceability',
        subtitle: 'The Paper Trail',
        columns: [
            {
                heading: 'Key Records',
                icon: 'fa-folder-open',
                items: [
                    'Batch Manufacturing Record',
                    'Cleaning logs',
                    'QC reports',
                    'Warehouse logs',
                    'Deviation reports'
                ]
            },
            {
                heading: 'Documentation Principle',
                icon: 'fa-pen',
                items: [
                    'Write clearly and legibly',
                    'Date and sign all entries',
                    'No erasures - cross out errors',
                    'Complete in real-time'
                ]
            }
        ],
        goldenRule: 'If it is not documented, it did not happen.',
        image: null
    },
    // SLIDE 23 - Conclusion
    {
        id: 23,
        type: 'conclusion',
        title: 'Conclusion',
        subtitle: 'Commitment to Excellence',
        conclusionItems: [
            { icon: 'fa-award', title: 'Quality', text: 'Quality is everyone\'s responsibility' },
            { icon: 'fa-heartbeat', title: 'Patients', text: 'Consistency protects patients' },
            { icon: 'fa-medal', title: 'Brand', text: 'Discipline sustains the brand' },
            { icon: 'fa-hospital', title: 'Trust', text: 'Compliance ensures hospital trust' }
        ],
        image: null
    }
];

// Company Information
const companyInfo = {
    name: 'BONNESANTE MEDICALS',
    logo: 'LOGO.PNG',
    tagline: 'Excellence in Healthcare',
    year: 2026
};

// Export for use in presentation.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { slidesData, companyInfo };
}
