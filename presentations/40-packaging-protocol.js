// ===== PRESENTATION 40: PACKAGING PROTOCOL =====
// For: Packaging Staff | Category: Final Product Handling

const packagingProtocolSlides = [
    {
        id: 1,
        type: 'title',
        title: 'PRODUCT PACKAGING PROTOCOL',
        subtitle: 'Final Product Packaging Procedures',
        tagline: 'Package with Precision and Care',
        content: [
            { icon: 'fa-box', text: 'Packaging fundamentals' },
            { icon: 'fa-flask', text: 'WOUND CLEX® packaging' },
            { icon: 'fa-prescription-bottle', text: 'HERA Gel packaging' },
            { icon: 'fa-bandage', text: 'Gauze packaging' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'PACKAGING AREA REQUIREMENTS',
        subtitle: 'Set Up for Success',
        highlightBox: {
            icon: 'fa-warehouse',
            title: 'PACKAGING ZONE SETUP',
            points: [
                'Clean and sanitized work tables',
                'Adequate lighting for visual inspection',
                'Organized material placement',
                'Labels, cartons, and inserts staged',
                'Weighing scale calibrated and ready',
                'Packaging equipment cleaned and tested',
                'Batch record and documentation at hand'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'GENERAL PACKAGING PRINCIPLES',
        subtitle: 'Apply to All Products',
        columns: [
            {
                heading: 'Before Packaging',
                icon: 'fa-clipboard-list',
                items: [
                    'Verify QC release for product',
                    'Confirm correct packaging materials',
                    'Check batch and expiry on labels',
                    'Clear area of other product materials',
                    'Complete line clearance checklist'
                ]
            },
            {
                heading: 'During Packaging',
                icon: 'fa-box-open',
                items: [
                    'Inspect each unit before packing',
                    'Apply labels straight and complete',
                    'Check fill level/seal integrity',
                    'Maintain count accuracy',
                    'Document any rejects'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'LINE CLEARANCE PROCEDURE',
        subtitle: 'Critical First Step',
        steps: [
            {
                number: '1',
                title: 'Clear Previous',
                description: 'Remove ALL materials from previous batch (labels, cartons, products, documents)'
            },
            {
                number: '2',
                title: 'Clean Area',
                description: 'Wipe down all surfaces with approved sanitizer, allow to dry'
            },
            {
                number: '3',
                title: 'Stage New Materials',
                description: 'Bring only current batch labels, cartons, and packaging materials'
            },
            {
                number: '4',
                title: 'Verify & Sign',
                description: 'Complete line clearance form, second person verifies, supervisor signs'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'WOUND CLEX® PACKAGING',
        subtitle: 'Antiseptic Solution Bottles',
        highlightBox: {
            icon: 'fa-flask',
            title: 'WOUND CLEX® PACKAGING STEPS',
            points: [
                'Receive filled and capped bottles from filling line',
                'Verify cap is secure and seal is intact',
                'Check fill level is within specification',
                'Apply front label (centered, straight, no bubbles)',
                'Apply back label with batch/expiry (if applicable)',
                'Wipe bottle exterior clean (no drips or residue)',
                'Pack in secondary carton per pack configuration'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'WOUND CLEX® LABELING DETAILS',
        subtitle: 'Label Inspection Points',
        columns: [
            {
                heading: 'Label Content Check',
                icon: 'fa-tags',
                items: [
                    'Product name: WOUND CLEX®',
                    'Volume/size correct',
                    'Batch number matches batch record',
                    'Manufacturing date correct',
                    'Expiry date correct (typically 2 years)',
                    'Company information present'
                ]
            },
            {
                heading: 'Label Placement',
                icon: 'fa-arrows-left-right',
                items: [
                    'Centered on bottle face',
                    'Parallel to bottle edges',
                    'No wrinkles or air bubbles',
                    'Not covering any mold marks',
                    'Tamper seal over cap (if used)',
                    'Readable and undamaged'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'highlight',
        title: 'HERA WOUND GEL PACKAGING',
        subtitle: 'Tube Packaging Procedure',
        highlightBox: {
            icon: 'fa-prescription-bottle',
            title: 'HERA GEL PACKAGING STEPS',
            points: [
                'Receive filled and crimped tubes from filling line',
                'Verify crimp seal is complete and secure',
                'Check fill weight against specification',
                'Verify cap is present and tight',
                'Apply tube label (rolled smoothly, no overlap)',
                'Insert into unit carton with leaflet (if applicable)',
                'Seal carton ends or tuck flaps'
            ]
        },
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'HERA GEL QUALITY CHECKS',
        subtitle: 'Inspection Points',
        columns: [
            {
                heading: 'Tube Inspection',
                icon: 'fa-eye',
                items: [
                    'No visible leaks at crimp',
                    'Cap present and secure',
                    'Tube body undamaged',
                    'Fill level consistent',
                    'Crimp seal complete across tube'
                ]
            },
            {
                heading: 'Carton Inspection',
                icon: 'fa-box',
                items: [
                    'Correct carton for product',
                    'Batch/expiry printed or stamped',
                    'All carton text readable',
                    'Leaflet inserted (if required)',
                    'Carton sealed properly'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'highlight',
        title: 'WOUND CARE GAUZE PACKAGING',
        subtitle: 'Sterile Dressing Packaging',
        highlightBox: {
            icon: 'fa-bandage',
            title: 'GAUZE PACKAGING STEPS',
            points: [
                'Receive immersed gauze from production',
                'Carefully place gauze in sterile packaging pouch',
                'Remove excess air from pouch',
                'Seal pouch using heat sealer (verify seal temp)',
                'Apply product label with batch and expiry',
                'Visual check for seal integrity',
                'Place in secondary packaging (carton or bag)'
            ]
        },
        image: null
    },
    {
        id: 10,
        type: 'process',
        title: 'GAUZE SEAL VERIFICATION',
        subtitle: 'Ensuring Sterile Barrier',
        steps: [
            {
                number: '1',
                title: 'Visual Check',
                description: 'Seal line is continuous, no gaps, wrinkles, or foreign material in seal'
            },
            {
                number: '2',
                title: 'Width Check',
                description: 'Seal width meets minimum specification (typically 5mm or more)'
            },
            {
                number: '3',
                title: 'Peel Test (Sample)',
                description: 'Periodic peel test on samples to verify seal strength'
            },
            {
                number: '4',
                title: 'Document',
                description: 'Record seal temperature, samples tested, and results in batch record'
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'SECONDARY PACKAGING',
        subtitle: 'Shipper Carton Packing',
        columns: [
            {
                heading: 'Carton Preparation',
                icon: 'fa-box-archive',
                items: [
                    'Use correct shipper carton size',
                    'Assemble carton securely',
                    'Line with protective material if needed',
                    'Count units per carton spec',
                    'Arrange for stability'
                ]
            },
            {
                heading: 'Carton Closing',
                icon: 'fa-tape',
                items: [
                    'Verify count matches specification',
                    'Close carton securely',
                    'Apply packing tape',
                    'Apply shipper label (batch, qty, date)',
                    'Record carton number in log'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'highlight',
        title: 'REJECT HANDLING',
        subtitle: 'Managing Non-Conforming Units',
        highlightBox: {
            icon: 'fa-ban',
            title: 'REJECT PROCEDURE',
            points: [
                'Immediately segregate any rejected units',
                'Place in designated REJECT container',
                'Label container with batch, date, reason',
                'Count and document all rejects',
                'Do NOT attempt to rework without approval',
                'Inform supervisor if reject rate exceeds 2%',
                'Dispose or rework per QC decision only'
            ]
        },
        image: null
    },
    {
        id: 13,
        type: 'process',
        title: 'END-OF-LINE RECONCILIATION',
        subtitle: 'Accounting for Everything',
        steps: [
            {
                number: 'COUNT',
                title: 'Final Count',
                description: 'Count all packed units, rejected units, and unused labels/cartons'
            },
            {
                number: 'CALC',
                title: 'Calculate Yield',
                description: 'Packed + Rejects + Samples = Starting quantity (should balance)'
            },
            {
                number: 'DOC',
                title: 'Document',
                description: 'Record all counts in batch record, explain any discrepancies'
            },
            {
                number: 'DESTROY',
                title: 'Destroy Excess',
                description: 'Unused labels destroyed and recorded - never save for future batches'
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'PACKAGING DOCUMENTATION',
        subtitle: 'Required Records',
        columns: [
            {
                heading: 'Batch Record Entries',
                icon: 'fa-file-lines',
                items: [
                    'Line clearance verification',
                    'Material lot numbers used',
                    'Equipment IDs used',
                    'Start and end times',
                    'Operator and verifier names'
                ]
            },
            {
                heading: 'Quantities Recorded',
                icon: 'fa-calculator',
                items: [
                    'Starting quantity received',
                    'Units packed (good)',
                    'Units rejected',
                    'Samples taken',
                    'Labels used and destroyed'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'PACKAGING EXCELLENCE',
        subtitle: 'The Final Quality Gate',
        conclusionPoints: [
            {
                icon: 'fa-broom',
                title: 'Line Clearance',
                text: 'Always verify area is clear of previous products'
            },
            {
                icon: 'fa-eye',
                title: 'Inspect Every Unit',
                text: '100% visual inspection during packaging'
            },
            {
                icon: 'fa-tags',
                title: 'Label Accuracy',
                text: 'Verify batch and expiry on every label'
            },
            {
                icon: 'fa-scale-balanced',
                title: 'Reconcile',
                text: 'All quantities must balance at end of batch'
            }
        ],
        image: null
    }
];
