// ===== PRESENTATION 8: RAW MATERIAL HANDLING & STORAGE =====
// For: Production Staff | Category: Production Training

const rawMaterialSlides = [
    {
        id: 1,
        type: 'title',
        title: 'RAW MATERIAL HANDLING & STORAGE',
        subtitle: 'Proper Material Management',
        tagline: 'Quality Starts with Materials',
        content: [
            { icon: 'fa-boxes-stacked', text: 'Learn receiving procedures' },
            { icon: 'fa-warehouse', text: 'Understand storage requirements' },
            { icon: 'fa-clipboard-check', text: 'Master dispensing techniques' },
            { icon: 'fa-shield-halved', text: 'Prevent contamination' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why Material Handling Matters',
        subtitle: 'Impact on Product Quality',
        columns: [
            {
                heading: 'Quality Begins Here',
                icon: 'fa-star',
                items: [
                    'Materials directly affect product',
                    'Contamination starts at receiving',
                    'Degradation affects efficacy',
                    'Mix-ups cause recalls',
                    'Traceability is essential'
                ]
            },
            {
                heading: 'Regulatory Requirements',
                icon: 'fa-gavel',
                items: [
                    'GMP mandates proper handling',
                    'NAFDAC inspection focus',
                    'Documentation requirements',
                    'Supplier qualification',
                    'Testing requirements'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Material Categories',
        subtitle: 'Types of Raw Materials',
        columns: [
            {
                heading: 'Active Ingredients',
                icon: 'fa-flask',
                items: [
                    'API (Active Pharmaceutical Ingredients)',
                    'Therapeutic effect components',
                    'Critical quality attributes',
                    'Strict specifications',
                    'Certificate of Analysis required'
                ]
            },
            {
                heading: 'Excipients & Packaging',
                icon: 'fa-box',
                items: [
                    'Bulking agents, preservatives',
                    'Water, solvents',
                    'Primary packaging (bottles)',
                    'Secondary packaging (cartons)',
                    'Labels and inserts'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Material Receiving Process',
        subtitle: 'First Point of Quality Control',
        columns: [
            {
                heading: 'Receiving Steps',
                icon: 'fa-truck-ramp-box',
                items: [
                    'Verify delivery against order',
                    'Check container integrity',
                    'Inspect for damage',
                    'Verify labels match documents',
                    'Check expiry dates'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-lines',
                items: [
                    'Log receipt in system',
                    'Assign lot/batch number',
                    'Record quantities received',
                    'File supplier documents',
                    'Apply quarantine label'
                ]
            }
        ],
        goldenRule: 'Reject materials with any integrity issues',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Quarantine System',
        subtitle: 'Hold Until Approved',
        columns: [
            {
                heading: 'Quarantine Requirements',
                icon: 'fa-lock',
                items: [
                    'Separate area or clear marking',
                    'No use until QC approved',
                    'Yellow/hold labels applied',
                    'Prevent accidental use',
                    'Track quarantine status'
                ]
            },
            {
                heading: 'Release Process',
                icon: 'fa-unlock',
                items: [
                    'QC sampling completed',
                    'Testing per specification',
                    'Results meet requirements',
                    'QA review and approval',
                    'Green/approved label applied'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Storage Requirements',
        subtitle: 'Maintaining Material Quality',
        columns: [
            {
                heading: 'General Storage Rules',
                icon: 'fa-warehouse',
                items: [
                    'Store off floor on pallets',
                    'Adequate spacing between items',
                    'Away from walls',
                    'Clean, dry environment',
                    'Pest-free conditions'
                ]
            },
            {
                heading: 'Special Conditions',
                icon: 'fa-temperature-low',
                items: [
                    'Room temperature (15-25°C)',
                    'Cool storage (2-8°C)',
                    'Controlled humidity',
                    'Light-sensitive protection',
                    'Temperature monitoring'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Inventory Management',
        subtitle: 'FIFO and FEFO Principles',
        columns: [
            {
                heading: 'FIFO',
                icon: 'fa-arrow-right',
                items: [
                    'First In, First Out',
                    'Use oldest stock first',
                    'Based on receipt date',
                    'Prevents material aging',
                    'Standard practice'
                ]
            },
            {
                heading: 'FEFO',
                icon: 'fa-calendar',
                items: [
                    'First Expiry, First Out',
                    'Use earliest expiry first',
                    'Takes priority over FIFO',
                    'Prevents expiry waste',
                    'Requires expiry tracking'
                ]
            }
        ],
        goldenRule: 'FEFO always takes precedence',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Material Dispensing',
        subtitle: 'Critical Quality Operation',
        columns: [
            {
                heading: 'Before Dispensing',
                icon: 'fa-clipboard-check',
                items: [
                    'Verify area is clean',
                    'Line clearance completed',
                    'Correct materials identified',
                    'Approved status confirmed',
                    'PPE donned correctly'
                ]
            },
            {
                heading: 'During Dispensing',
                icon: 'fa-scale-balanced',
                items: [
                    'Double-check material identity',
                    'Use calibrated equipment',
                    'Weigh/measure accurately',
                    'Verify by second person',
                    'Document immediately'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Preventing Mix-Ups',
        subtitle: 'Critical Control Point',
        columns: [
            {
                heading: 'Mix-Up Prevention',
                icon: 'fa-shuffle',
                items: [
                    'One material at a time',
                    'Clear labeling always',
                    'Double verification',
                    'Separate work areas',
                    'Complete line clearance'
                ]
            },
            {
                heading: 'Label Management',
                icon: 'fa-tag',
                items: [
                    'Always check labels',
                    'Never remove original labels',
                    'Apply handling labels properly',
                    'Update status labels promptly',
                    'Report any label issues'
                ]
            }
        ],
        goldenRule: 'When in doubt, verify again',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Contamination Prevention',
        subtitle: 'Protecting Material Integrity',
        columns: [
            {
                heading: 'Sources of Contamination',
                icon: 'fa-biohazard',
                items: [
                    'Personnel (skin, hair, breath)',
                    'Environment (dust, moisture)',
                    'Equipment (residues)',
                    'Other materials (cross-contamination)',
                    'Packaging (damaged containers)'
                ]
            },
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield-virus',
                items: [
                    'Proper gowning',
                    'Clean environment',
                    'Controlled access',
                    'Close containers promptly',
                    'Clean equipment'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Water as Raw Material',
        subtitle: 'Special Requirements',
        columns: [
            {
                heading: 'Water Types',
                icon: 'fa-droplet',
                items: [
                    'Potable water (general use)',
                    'Purified water (USP grade)',
                    'Water for Injection (WFI)',
                    'Each has specifications',
                    'Critical for liquid products'
                ]
            },
            {
                heading: 'Water Quality',
                icon: 'fa-vial',
                items: [
                    'Regular testing required',
                    'Microbial monitoring',
                    'Conductivity checks',
                    'System maintenance',
                    'Documentation of tests'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Rejected Materials',
        subtitle: 'Managing Non-Conforming Materials',
        columns: [
            {
                heading: 'Rejection Process',
                icon: 'fa-ban',
                items: [
                    'QC issues rejection report',
                    'Red/rejected label applied',
                    'Move to rejected area',
                    'Segregate from approved',
                    'Prevent accidental use'
                ]
            },
            {
                heading: 'Disposition',
                icon: 'fa-truck',
                items: [
                    'Return to supplier',
                    'Destruction on-site',
                    'Third-party disposal',
                    'Document disposition',
                    'Update inventory'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Documentation Requirements',
        subtitle: 'Material Traceability',
        columns: [
            {
                heading: 'Required Records',
                icon: 'fa-file-lines',
                items: [
                    'Receiving logs',
                    'Storage condition records',
                    'Dispensing records',
                    'Test results',
                    'Status labels'
                ]
            },
            {
                heading: 'Traceability',
                icon: 'fa-link',
                items: [
                    'Lot number tracking',
                    'From receipt to batch',
                    'Expiry date monitoring',
                    'Batch reconciliation',
                    'Full audit trail'
                ]
            }
        ],
        goldenRule: 'Every gram must be accounted for',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Material Handling Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-truck-ramp-box', title: 'Receive Carefully', text: 'First point of quality control' },
            { icon: 'fa-warehouse', title: 'Store Properly', text: 'Maintain required conditions' },
            { icon: 'fa-scale-balanced', title: 'Dispense Accurately', text: 'Verify and document' },
            { icon: 'fa-shield-halved', title: 'Prevent Contamination', text: 'Protect material integrity' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { rawMaterialSlides };
}
