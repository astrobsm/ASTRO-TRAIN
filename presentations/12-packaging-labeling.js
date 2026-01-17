// ===== PRESENTATION 12: PACKAGING & LABELING OPERATIONS =====
// For: Production Staff | Category: Production Training

const packagingLabelingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'PACKAGING & LABELING OPERATIONS',
        subtitle: 'Protecting Products, Informing Users',
        tagline: 'The Final Critical Step',
        content: [
            { icon: 'fa-box', text: 'Understand packaging types' },
            { icon: 'fa-tag', text: 'Learn labeling requirements' },
            { icon: 'fa-check-double', text: 'Prevent mix-ups' },
            { icon: 'fa-file-lines', text: 'Document accurately' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Importance of Packaging',
        subtitle: 'Why Packaging Matters',
        columns: [
            {
                heading: 'Product Protection',
                icon: 'fa-shield-halved',
                items: [
                    'Maintains sterility',
                    'Prevents contamination',
                    'Protects from light',
                    'Maintains stability',
                    'Prevents tampering'
                ]
            },
            {
                heading: 'User Information',
                icon: 'fa-info-circle',
                items: [
                    'Product identification',
                    'Usage instructions',
                    'Safety information',
                    'Traceability (lot/expiry)',
                    'Regulatory compliance'
                ]
            }
        ],
        goldenRule: 'Packaging is the product\'s voice to the user',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Types of Packaging',
        subtitle: 'Packaging Hierarchy',
        columns: [
            {
                heading: 'Primary Packaging',
                icon: 'fa-prescription-bottle',
                items: [
                    'Direct contact with product',
                    'Bottles, vials, ampoules',
                    'Critical for sterility',
                    'Material compatibility',
                    'Container closure integrity'
                ]
            },
            {
                heading: 'Secondary & Tertiary',
                icon: 'fa-box-open',
                items: [
                    'Secondary: Cartons, inserts',
                    '→ Additional protection',
                    '→ Information vehicle',
                    'Tertiary: Shipping cases',
                    '→ Transport protection'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'WOUND CLEX® Packaging Components',
        subtitle: 'Our Product Packaging',
        columns: [
            {
                heading: 'Primary',
                icon: 'fa-bottle-droplet',
                items: [
                    'HDPE bottles (various sizes)',
                    'Screw caps with tamper evidence',
                    'Inner seal (if applicable)',
                    'Maintains sterility',
                    'Chemical compatibility'
                ]
            },
            {
                heading: 'Secondary',
                icon: 'fa-box',
                items: [
                    'Individual cartons',
                    'Product inserts/leaflets',
                    'Shipper cartons',
                    'Protective dividers',
                    'Company branding'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Labeling Requirements',
        subtitle: 'What Must Appear on Labels',
        columns: [
            {
                heading: 'Mandatory Information',
                icon: 'fa-list-check',
                items: [
                    'Product name',
                    'Active ingredient(s)',
                    'Strength/concentration',
                    'Net contents/volume',
                    'Manufacturer name & address'
                ]
            },
            {
                heading: 'Additional Requirements',
                icon: 'fa-plus',
                items: [
                    'Batch/lot number',
                    'Manufacturing date',
                    'Expiry date',
                    'NAFDAC number',
                    'Storage conditions',
                    'Directions for use'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Line Clearance',
        subtitle: 'Critical Before Starting',
        columns: [
            {
                heading: 'What is Line Clearance?',
                icon: 'fa-broom',
                items: [
                    'Removal of previous materials',
                    'Verification area is clean',
                    'Correct materials staged',
                    'Equipment ready',
                    'Documented check'
                ]
            },
            {
                heading: 'Clearance Checks',
                icon: 'fa-clipboard-check',
                items: [
                    'No previous labels present',
                    'No previous products present',
                    'Correct batch documents',
                    'Equipment clean and set',
                    'Signed off by two people'
                ]
            }
        ],
        goldenRule: 'Never skip line clearance',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Preventing Mix-Ups',
        subtitle: 'The Most Critical Risk',
        columns: [
            {
                heading: 'Mix-Up Risks',
                icon: 'fa-shuffle',
                items: [
                    'Wrong labels applied',
                    'Wrong cartons used',
                    'Wrong batch number',
                    'Mixed batches',
                    'Can cause recalls'
                ]
            },
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield-virus',
                items: [
                    'Complete line clearance',
                    'One product at a time',
                    'Verify before use',
                    'Segregate materials',
                    'Double-check critical items'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Label Control',
        subtitle: 'Managing Labels Carefully',
        columns: [
            {
                heading: 'Label Receipt',
                icon: 'fa-truck-ramp-box',
                items: [
                    'Count on receipt',
                    'Verify against order',
                    'Store securely',
                    'Access controlled',
                    'FIFO issuance'
                ]
            },
            {
                heading: 'Label Reconciliation',
                icon: 'fa-calculator',
                items: [
                    'Labels issued',
                    'Labels used',
                    'Labels damaged/destroyed',
                    'Labels returned',
                    'Must balance exactly'
                ]
            }
        ],
        goldenRule: 'Every label must be accounted for',
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Filling Operations',
        subtitle: 'Transferring Product to Containers',
        columns: [
            {
                heading: 'Filling Requirements',
                icon: 'fa-fill-drip',
                items: [
                    'Calibrated fill volume',
                    'Consistent fill level',
                    'No spillage or contamination',
                    'Proper container handling',
                    'Immediate capping'
                ]
            },
            {
                heading: 'In-Process Checks',
                icon: 'fa-scale-balanced',
                items: [
                    'Fill weight/volume checks',
                    'Visual inspection',
                    'Cap torque verification',
                    'Seal integrity',
                    'Label placement'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Visual Inspection',
        subtitle: 'The Human Quality Gate',
        columns: [
            {
                heading: 'What to Inspect',
                icon: 'fa-eye',
                items: [
                    'Product appearance',
                    'Fill level consistency',
                    'Container defects',
                    'Cap application',
                    'Label quality'
                ]
            },
            {
                heading: 'Label Inspection',
                icon: 'fa-tag',
                items: [
                    'Correct product name',
                    'Correct batch/lot number',
                    'Correct expiry date',
                    'Label positioned correctly',
                    'No damage or smudging'
                ]
            }
        ],
        goldenRule: 'Every unit deserves inspection',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Rejection and Reprocessing',
        subtitle: 'Handling Non-Conforming Units',
        columns: [
            {
                heading: 'Reject Handling',
                icon: 'fa-ban',
                items: [
                    'Segregate rejected units',
                    'Mark clearly as rejected',
                    'Document reject reasons',
                    'Count for reconciliation',
                    'Dispose per procedure'
                ]
            },
            {
                heading: 'Reprocessing Rules',
                icon: 'fa-rotate',
                items: [
                    'Only if approved procedure',
                    'Document reprocessing',
                    'Re-inspect after',
                    'Include in batch record',
                    'QA approval required'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Batch Reconciliation',
        subtitle: 'Accounting for Everything',
        columns: [
            {
                heading: 'What to Reconcile',
                icon: 'fa-calculator',
                items: [
                    'Bulk product in',
                    'Finished units out',
                    'Rejected units',
                    'Samples taken',
                    'In-process losses'
                ]
            },
            {
                heading: 'Acceptable Variance',
                icon: 'fa-percent',
                items: [
                    'Defined tolerance limits',
                    'Investigate if exceeded',
                    'Document all reconciliation',
                    'Sign off by supervisor',
                    'Part of batch release'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Documentation Requirements',
        subtitle: 'Recording Packaging Operations',
        columns: [
            {
                heading: 'Batch Record Entries',
                icon: 'fa-file-lines',
                items: [
                    'Line clearance sign-off',
                    'Component lot numbers',
                    'Equipment used',
                    'In-process check results',
                    'Yield reconciliation'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-star',
                items: [
                    'Record at time of action',
                    'Two-person verification',
                    'Clear, legible entries',
                    'Correct errors properly',
                    'Complete all sections'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Packaging Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-broom', title: 'Line Clearance First', text: 'Clean slate for every batch' },
            { icon: 'fa-shuffle', title: 'Prevent Mix-Ups', text: 'Verify everything, twice' },
            { icon: 'fa-eye', title: 'Inspect Every Unit', text: 'Visual inspection catches defects' },
            { icon: 'fa-calculator', title: 'Reconcile All', text: 'Account for every unit and label' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { packagingLabelingSlides };
}
