// ===== PRESENTATION 24: GOOD DISTRIBUTION PRACTICE (GDP) =====
// For: Distribution & Warehouse Staff | Category: Distribution Training

const gdpSlides = [
    {
        id: 1,
        type: 'title',
        title: 'GOOD DISTRIBUTION PRACTICE (GDP)',
        subtitle: 'Ensuring Quality Throughout the Supply Chain',
        tagline: 'Quality Doesn\'t Stop at the Factory Gate',
        content: [
            { icon: 'fa-truck', text: 'Proper distribution practices' },
            { icon: 'fa-temperature-half', text: 'Storage conditions compliance' },
            { icon: 'fa-file-lines', text: 'Complete documentation' },
            { icon: 'fa-shield-halved', text: 'Product integrity protection' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is Good Distribution Practice?',
        subtitle: 'GDP Definition and Purpose',
        columns: [
            {
                heading: 'GDP Definition',
                icon: 'fa-book',
                items: [
                    'Part of quality assurance',
                    'Covers distribution activities',
                    'From manufacturer to end user',
                    'Ensures product integrity',
                    'Regulatory requirement'
                ]
            },
            {
                heading: 'Why GDP Matters',
                icon: 'fa-star',
                items: [
                    'Maintains product quality',
                    'Protects patient safety',
                    'Prevents counterfeits',
                    'Ensures traceability',
                    'Regulatory compliance'
                ]
            }
        ],
        goldenRule: 'The product in the patient\'s hands must be as good as when it left the factory',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'GDP Principles',
        subtitle: 'Core Requirements',
        columns: [
            {
                heading: 'Key Principles',
                icon: 'fa-list-check',
                items: [
                    'Documented quality system',
                    'Qualified personnel',
                    'Suitable premises',
                    'Proper equipment',
                    'Effective procedures'
                ]
            },
            {
                heading: 'Continuous Requirements',
                icon: 'fa-rotate',
                items: [
                    'Record keeping',
                    'Self-inspection',
                    'Complaints handling',
                    'Recall capability',
                    'Continuous improvement'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Warehouse Organization',
        subtitle: 'Storage Requirements',
        columns: [
            {
                heading: 'Facility Requirements',
                icon: 'fa-warehouse',
                items: [
                    'Clean and orderly',
                    'Adequate space',
                    'Separate areas (received, approved, rejected)',
                    'Quarantine area',
                    'Pest control program'
                ]
            },
            {
                heading: 'Environmental Control',
                icon: 'fa-temperature-half',
                items: [
                    'Temperature monitoring',
                    'Humidity control',
                    'Light protection',
                    'Ventilation',
                    'Continuous recording'
                ]
            }
        ],
        goldenRule: 'A place for everything, everything in its place',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Temperature Management',
        subtitle: 'Cold Chain Requirements',
        columns: [
            {
                heading: 'Storage Conditions',
                icon: 'fa-snowflake',
                items: [
                    'Room temperature (15-25°C)',
                    'Cool storage (8-15°C)',
                    'Refrigerated (2-8°C)',
                    'Frozen (<-20°C)',
                    'Follow product requirements'
                ]
            },
            {
                heading: 'Monitoring Requirements',
                icon: 'fa-chart-line',
                items: [
                    'Continuous monitoring',
                    'Calibrated equipment',
                    'Recording of data',
                    'Excursion management',
                    'Regular verification'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Receiving Operations',
        subtitle: 'Incoming Goods Handling',
        columns: [
            {
                heading: 'Receipt Procedure',
                icon: 'fa-truck-ramp-box',
                items: [
                    'Verify shipment documents',
                    'Check delivery against order',
                    'Inspect for damage',
                    'Record batch numbers',
                    'Check expiry dates'
                ]
            },
            {
                heading: 'Quarantine Process',
                icon: 'fa-lock',
                items: [
                    'Physical or system quarantine',
                    'Quality checks performed',
                    'Authorization before use',
                    'Proper documentation',
                    'Clear status labeling'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Stock Management',
        subtitle: 'Inventory Control',
        columns: [
            {
                heading: 'FIFO & FEFO',
                icon: 'fa-arrows-rotate',
                items: [
                    'FIFO: First In First Out',
                    'FEFO: First Expired First Out',
                    'FEFO takes priority',
                    'Proper stock rotation',
                    'Prevent expiry in warehouse'
                ]
            },
            {
                heading: 'Inventory Practices',
                icon: 'fa-boxes-stacked',
                items: [
                    'Regular stock counts',
                    'Batch tracking',
                    'Expiry monitoring',
                    'Discrepancy investigation',
                    'Accurate records'
                ]
            }
        ],
        goldenRule: 'FEFO ensures patients get fresh product',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Picking and Packing',
        subtitle: 'Order Fulfillment',
        columns: [
            {
                heading: 'Picking Process',
                icon: 'fa-hand-holding-box',
                items: [
                    'Accurate order interpretation',
                    'Correct product selection',
                    'Batch number recording',
                    'Quantity verification',
                    'Double-check system'
                ]
            },
            {
                heading: 'Packing Standards',
                icon: 'fa-box',
                items: [
                    'Appropriate packaging',
                    'Protection from damage',
                    'Temperature protection',
                    'Proper labeling',
                    'Documentation enclosed'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Transportation',
        subtitle: 'Moving Products Safely',
        columns: [
            {
                heading: 'Transport Requirements',
                icon: 'fa-truck',
                items: [
                    'Clean vehicles',
                    'Temperature control',
                    'Protection from weather',
                    'Secure loading',
                    'No contamination risk'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-lines',
                items: [
                    'Delivery notes',
                    'Batch details',
                    'Temperature records',
                    'Proof of delivery',
                    'Transport conditions'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Documentation and Records',
        subtitle: 'If It Wasn\'t Written, It Didn\'t Happen',
        columns: [
            {
                heading: 'Required Documents',
                icon: 'fa-folder-open',
                items: [
                    'Standard Operating Procedures',
                    'Receiving records',
                    'Distribution records',
                    'Temperature logs',
                    'Training records'
                ]
            },
            {
                heading: 'Record Principles',
                icon: 'fa-pen',
                items: [
                    'Complete and accurate',
                    'Contemporaneous (real-time)',
                    'Legible and indelible',
                    'Properly stored',
                    'Readily retrievable'
                ]
            }
        ],
        goldenRule: 'Good documentation = Good distribution',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Traceability',
        subtitle: 'Tracking Products Through the Chain',
        columns: [
            {
                heading: 'Traceability Requirements',
                icon: 'fa-route',
                items: [
                    'Track from receipt to dispatch',
                    'Batch number recording',
                    'Customer identification',
                    'Date and quantity',
                    'Complete audit trail'
                ]
            },
            {
                heading: 'Purpose',
                icon: 'fa-bullseye',
                items: [
                    'Enable recalls',
                    'Investigate complaints',
                    'Prevent counterfeits',
                    'Regulatory compliance',
                    'Quality assurance'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Returns and Recalls',
        subtitle: 'Reverse Logistics',
        columns: [
            {
                heading: 'Returns Handling',
                icon: 'fa-rotate-left',
                items: [
                    'Segregate returned products',
                    'Assess condition',
                    'Check storage history',
                    'Decision on disposition',
                    'Document everything'
                ]
            },
            {
                heading: 'Recall Readiness',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Effective recall system',
                    '24/7 contact capability',
                    'Rapid distribution information',
                    'Customer notification',
                    'Product retrieval'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Counterfeit Prevention',
        subtitle: 'Protecting Product Integrity',
        columns: [
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield',
                items: [
                    'Authorized suppliers only',
                    'Verify product authenticity',
                    'Inspect packaging',
                    'Report suspicious products',
                    'Secure supply chain'
                ]
            },
            {
                heading: 'Warning Signs',
                icon: 'fa-magnifying-glass',
                items: [
                    'Unusual pricing',
                    'Unknown suppliers',
                    'Poor packaging quality',
                    'Missing documentation',
                    'Suspicious product appearance'
                ]
            }
        ],
        goldenRule: 'Know your supply chain',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'GDP Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-temperature-half', title: 'Control Conditions', text: 'Temperature and environment' },
            { icon: 'fa-file-lines', title: 'Document Everything', text: 'Complete traceability' },
            { icon: 'fa-shield', title: 'Protect Quality', text: 'From warehouse to patient' },
            { icon: 'fa-rotate', title: 'Apply FEFO', text: 'First Expired First Out' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gdpSlides };
}
