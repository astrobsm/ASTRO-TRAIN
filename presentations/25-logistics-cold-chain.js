// ===== PRESENTATION 25: LOGISTICS & COLD CHAIN MANAGEMENT =====
// For: Distribution & Warehouse Staff | Category: Distribution Training

const logisticsSlides = [
    {
        id: 1,
        type: 'title',
        title: 'LOGISTICS & COLD CHAIN MANAGEMENT',
        subtitle: 'Maintaining Product Integrity Through Distribution',
        tagline: 'Temperature Is Critical',
        content: [
            { icon: 'fa-truck-fast', text: 'Efficient logistics operations' },
            { icon: 'fa-snowflake', text: 'Cold chain management' },
            { icon: 'fa-route', text: 'Optimized distribution' },
            { icon: 'fa-clock', text: 'Timely delivery' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Pharmaceutical Logistics',
        subtitle: 'Moving Products Safely',
        columns: [
            {
                heading: 'Key Functions',
                icon: 'fa-gears',
                items: [
                    'Order processing',
                    'Inventory management',
                    'Warehousing',
                    'Transportation',
                    'Customer delivery'
                ]
            },
            {
                heading: 'Unique Challenges',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Temperature sensitivity',
                    'Regulatory requirements',
                    'Traceability needs',
                    'Time constraints',
                    'Quality preservation'
                ]
            }
        ],
        goldenRule: 'Logistics moves products; cold chain protects them',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'What is Cold Chain?',
        subtitle: 'Temperature-Controlled Logistics',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-snowflake',
                items: [
                    'Temperature-controlled supply chain',
                    'From manufacturing to patient',
                    'Unbroken chain of proper storage',
                    'Includes transport and handling',
                    'Critical for sensitive products'
                ]
            },
            {
                heading: 'Why It Matters',
                icon: 'fa-star',
                items: [
                    'Maintains product efficacy',
                    'Prevents degradation',
                    'Ensures patient safety',
                    'Regulatory compliance',
                    'Reduces waste'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Temperature Ranges',
        subtitle: 'Storage Classifications',
        columns: [
            {
                heading: 'Standard Ranges',
                icon: 'fa-temperature-half',
                items: [
                    'Frozen: ≤ -15°C',
                    'Refrigerated: 2-8°C',
                    'Cool: 8-15°C',
                    'Room temp: 15-25°C',
                    'Controlled: ≤30°C or ≤25°C'
                ]
            },
            {
                heading: 'WOUND CLEX® Requirements',
                icon: 'fa-box',
                items: [
                    'Store below 30°C',
                    'Protect from light',
                    'Keep away from moisture',
                    'Avoid freezing',
                    'Check label requirements'
                ]
            }
        ],
        goldenRule: 'Know the storage requirements of every product',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Temperature Monitoring',
        subtitle: 'Continuous Surveillance',
        columns: [
            {
                heading: 'Monitoring Equipment',
                icon: 'fa-thermometer',
                items: [
                    'Digital data loggers',
                    'Temperature indicators',
                    'Min/max thermometers',
                    'Real-time monitoring',
                    'Alarm systems'
                ]
            },
            {
                heading: 'Monitoring Practices',
                icon: 'fa-check',
                items: [
                    'Calibrated equipment',
                    'Regular readings',
                    'Records maintained',
                    'Excursion investigation',
                    'Corrective actions'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Temperature Excursions',
        subtitle: 'When Things Go Wrong',
        columns: [
            {
                heading: 'What is an Excursion?',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Deviation from required range',
                    'Can be too hot or too cold',
                    'Duration matters',
                    'Cumulative effect',
                    'Must be documented'
                ]
            },
            {
                heading: 'Excursion Handling',
                icon: 'fa-clipboard-list',
                items: [
                    'Immediate investigation',
                    'Product segregation',
                    'Quality assessment',
                    'Decision documentation',
                    'Root cause correction'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Cold Chain Transportation',
        subtitle: 'Moving Temperature-Sensitive Products',
        columns: [
            {
                heading: 'Transport Methods',
                icon: 'fa-truck',
                items: [
                    'Refrigerated vehicles',
                    'Insulated containers',
                    'Cool boxes with ice packs',
                    'Passive packaging',
                    'Active temperature control'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-check',
                items: [
                    'Pre-condition containers',
                    'Minimize opening frequency',
                    'Use temperature monitors',
                    'Plan routes efficiently',
                    'Backup plans ready'
                ]
            }
        ],
        goldenRule: 'Never break the cold chain',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Packaging for Cold Chain',
        subtitle: 'Protective Solutions',
        columns: [
            {
                heading: 'Passive Systems',
                icon: 'fa-box',
                items: [
                    'Insulated boxes',
                    'Expanded polystyrene',
                    'Gel packs (frozen/chilled)',
                    'Phase change materials',
                    'Validated configurations'
                ]
            },
            {
                heading: 'Packing Procedure',
                icon: 'fa-clipboard-list',
                items: [
                    'Pre-condition coolants',
                    'Layer properly',
                    'Avoid direct contact',
                    'Add buffer material',
                    'Seal properly'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Distribution Planning',
        subtitle: 'Efficient Route Management',
        columns: [
            {
                heading: 'Planning Factors',
                icon: 'fa-map',
                items: [
                    'Customer locations',
                    'Product requirements',
                    'Vehicle capacity',
                    'Traffic patterns',
                    'Delivery windows'
                ]
            },
            {
                heading: 'Optimization Goals',
                icon: 'fa-bullseye',
                items: [
                    'Minimize transit time',
                    'Reduce fuel costs',
                    'Maximize deliveries',
                    'Maintain cold chain',
                    'Customer satisfaction'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Delivery Operations',
        subtitle: 'Last Mile Excellence',
        columns: [
            {
                heading: 'Delivery Process',
                icon: 'fa-dolly',
                items: [
                    'Confirm customer availability',
                    'Verify delivery details',
                    'Check product condition',
                    'Handover properly',
                    'Obtain signature'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-lines',
                items: [
                    'Delivery note',
                    'Temperature records',
                    'Proof of delivery',
                    'Customer acknowledgment',
                    'Any issues noted'
                ]
            }
        ],
        goldenRule: 'The delivery is complete when the customer is satisfied',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Equipment Qualification',
        subtitle: 'Validating Cold Chain Equipment',
        columns: [
            {
                heading: 'What to Qualify',
                icon: 'fa-check-double',
                items: [
                    'Refrigerators and freezers',
                    'Cold rooms/warehouses',
                    'Transport vehicles',
                    'Shipping containers',
                    'Monitoring equipment'
                ]
            },
            {
                heading: 'Qualification Elements',
                icon: 'fa-clipboard-check',
                items: [
                    'Temperature mapping',
                    'Performance testing',
                    'Alarm verification',
                    'Recovery testing',
                    'Re-qualification schedule'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Emergency Procedures',
        subtitle: 'Handling Equipment Failures',
        columns: [
            {
                heading: 'Common Emergencies',
                icon: 'fa-bolt',
                items: [
                    'Equipment breakdown',
                    'Power failure',
                    'Transport delays',
                    'Weather events',
                    'Accidents'
                ]
            },
            {
                heading: 'Response Actions',
                icon: 'fa-list-check',
                items: [
                    'Emergency contacts list',
                    'Backup storage locations',
                    'Alternative transport',
                    'Product protection priority',
                    'Documentation of events'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Training and Competency',
        subtitle: 'Building Capable Teams',
        columns: [
            {
                heading: 'Training Topics',
                icon: 'fa-graduation-cap',
                items: [
                    'Cold chain principles',
                    'Equipment operation',
                    'Temperature monitoring',
                    'Emergency procedures',
                    'Documentation requirements'
                ]
            },
            {
                heading: 'Competency Assurance',
                icon: 'fa-check',
                items: [
                    'Initial training',
                    'Practical demonstration',
                    'Regular refreshers',
                    'Competency assessment',
                    'Training records'
                ]
            }
        ],
        goldenRule: 'A trained team protects the cold chain',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Logistics Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-snowflake', title: 'Protect Cold Chain', text: 'Never break the chain' },
            { icon: 'fa-thermometer', title: 'Monitor Always', text: 'Continuous temperature tracking' },
            { icon: 'fa-file-lines', title: 'Document All', text: 'Complete records' },
            { icon: 'fa-bolt', title: 'Be Prepared', text: 'Emergency procedures ready' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { logisticsSlides };
}
