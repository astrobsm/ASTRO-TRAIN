// ===== PRESENTATION 41: WAREHOUSE TRANSFER PROTOCOL =====
// For: Production & Warehouse Staff | Category: Material Handling

const warehouseTransferSlides = [
    {
        id: 1,
        type: 'title',
        title: 'WAREHOUSE TRANSFER PROTOCOL',
        subtitle: 'Product Handoff Procedures',
        tagline: 'Secure Transfer, Complete Traceability',
        content: [
            { icon: 'fa-dolly', text: 'Transfer preparation' },
            { icon: 'fa-clipboard-check', text: 'Documentation requirements' },
            { icon: 'fa-handshake', text: 'Handoff verification' },
            { icon: 'fa-warehouse', text: 'Warehouse receiving' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'PURPOSE OF TRANSFER PROTOCOL',
        subtitle: 'Why Formal Handoff Matters',
        highlightBox: {
            icon: 'fa-shield-halved',
            title: 'TRANSFER PROTOCOL IMPORTANCE',
            points: [
                'Ensures complete product accountability',
                'Maintains chain of custody documentation',
                'Prevents product loss or misplacement',
                'Enables accurate inventory tracking',
                'Supports batch traceability for recalls',
                'Verifies QC release before warehouse storage',
                'Protects product integrity during movement'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'BEFORE TRANSFER',
        subtitle: 'Pre-Transfer Requirements',
        columns: [
            {
                heading: 'Production Side',
                icon: 'fa-industry',
                items: [
                    'Packaging 100% complete',
                    'QC in-process checks passed',
                    'Batch record completed to transfer point',
                    'Product properly labeled',
                    'Shipper cartons sealed and labeled'
                ]
            },
            {
                heading: 'Verification',
                icon: 'fa-magnifying-glass-chart',
                items: [
                    'Unit count verified and documented',
                    'All cartons accounted for',
                    'Transfer form prepared',
                    'Supervisor sign-off obtained',
                    'Warehouse notified for receiving'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'TRANSFER DOCUMENTATION',
        subtitle: 'Completing the Transfer Form',
        steps: [
            {
                number: '1',
                title: 'Product Details',
                description: 'Product name, batch number, manufacturing date, expiry date'
            },
            {
                number: '2',
                title: 'Quantity Details',
                description: 'Number of units, number of shipper cartons, weight (if applicable)'
            },
            {
                number: '3',
                title: 'Status Information',
                description: 'QC status (Released/Quarantine), storage conditions required'
            },
            {
                number: '4',
                title: 'Signatures',
                description: 'Transferred by, date/time, received by, date/time'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'QC RELEASE STATUS',
        subtitle: 'Critical Before Transfer',
        highlightBox: {
            icon: 'fa-flask-vial',
            title: 'RELEASE STATUS TYPES',
            points: [
                'RELEASED (GREEN): QC approved, can be sold/distributed',
                'QUARANTINE (YELLOW): Awaiting QC testing, NOT for distribution',
                'REJECTED (RED): Failed QC, segregate for investigation',
                'Most products transfer to QUARANTINE first',
                'RELEASED status applied after full QC testing',
                'NEVER transfer REJECTED product to saleable inventory',
                'Status must be clearly marked on transfer form'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'PHYSICAL TRANSFER PROCESS',
        subtitle: 'Moving Product Safely',
        columns: [
            {
                heading: 'Handling Guidelines',
                icon: 'fa-hand-holding-heart',
                items: [
                    'Use appropriate handling equipment',
                    'Palletize cartons if quantity warrants',
                    'Stack cartons according to markings',
                    'Protect from damage during movement',
                    'Maintain proper orientation (THIS END UP)'
                ]
            },
            {
                heading: 'Movement Rules',
                icon: 'fa-route',
                items: [
                    'Use designated transfer routes',
                    'Avoid contamination areas',
                    'Keep products covered if needed',
                    'Do not leave unattended in transit',
                    'Direct path from production to warehouse'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'process',
        title: 'WAREHOUSE RECEIVING',
        subtitle: 'Accepting the Transfer',
        steps: [
            {
                number: '1',
                title: 'Receive Documents',
                description: 'Accept transfer form, verify product details match physical product'
            },
            {
                number: '2',
                title: 'Count Verification',
                description: 'Count all cartons/units, confirm matches transfer form quantity'
            },
            {
                number: '3',
                title: 'Condition Check',
                description: 'Inspect for damage, check labels intact, verify carton seals'
            },
            {
                number: '4',
                title: 'Sign Acceptance',
                description: 'Sign transfer form, note any discrepancies, return copy to production'
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'highlight',
        title: 'QUARANTINE STORAGE',
        subtitle: 'Pre-Release Product Handling',
        highlightBox: {
            icon: 'fa-lock',
            title: 'QUARANTINE AREA RULES',
            points: [
                'Designated quarantine zone in warehouse',
                'Physically separated from released inventory',
                'Clear QUARANTINE signage on area',
                'Product cannot leave quarantine without QC release',
                'FIFO (First In, First Out) organization',
                'Regular status review with QC',
                'Access restricted to authorized personnel'
            ]
        },
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'RELEASED PRODUCT STORAGE',
        subtitle: 'Saleable Inventory Placement',
        columns: [
            {
                heading: 'Location Assignment',
                icon: 'fa-map-location-dot',
                items: [
                    'Assign specific warehouse location',
                    'Record location in inventory system',
                    'Group by product type if applicable',
                    'FIFO placement (new stock behind old)',
                    'Accessible for order picking'
                ]
            },
            {
                heading: 'Storage Conditions',
                icon: 'fa-temperature-half',
                items: [
                    'Store at label conditions',
                    'Protect from direct sunlight',
                    'Keep away from heat sources',
                    'Maintain dry environment',
                    'Monitor temperature if required'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'process',
        title: 'INVENTORY SYSTEM UPDATE',
        subtitle: 'Recording in System',
        steps: [
            {
                number: 'LOG',
                title: 'Enter Receipt',
                description: 'Enter product, batch, quantity, and date into inventory management system'
            },
            {
                number: 'LOC',
                title: 'Assign Location',
                description: 'Record storage location (aisle, shelf, bin) in system'
            },
            {
                number: 'STATUS',
                title: 'Set Status',
                description: 'Set inventory status to match QC status (Quarantine or Released)'
            },
            {
                number: 'CONFIRM',
                title: 'Verify Entry',
                description: 'Double-check all entries for accuracy, print confirmation if needed'
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'highlight',
        title: 'DISCREPANCY HANDLING',
        subtitle: 'When Counts Do Not Match',
        highlightBox: {
            icon: 'fa-triangle-exclamation',
            title: 'DISCREPANCY PROCEDURE',
            points: [
                'STOP - Do not sign transfer form if discrepancy exists',
                'RECOUNT - Both parties recount physical product',
                'INVESTIGATE - Check production area for missing product',
                'DOCUMENT - Record discrepancy details on transfer form',
                'NOTIFY - Inform supervisors and QC immediately',
                'RESOLVE - Must be resolved before completing transfer',
                'Never adjust records to match without investigation'
            ]
        },
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'SPECIAL TRANSFER SITUATIONS',
        subtitle: 'Handling Exceptions',
        columns: [
            {
                heading: 'Partial Batch Transfer',
                icon: 'fa-diagram-next',
                items: [
                    'May occur if packaging ongoing',
                    'Document as partial on form',
                    'Note expected final quantity',
                    'Complete transfer forms for each part',
                    'Reconcile when batch complete'
                ]
            },
            {
                heading: 'Rejected Product',
                icon: 'fa-ban',
                items: [
                    'Transfer to segregated REJECT area',
                    'Use REJECT transfer form',
                    'Clearly mark as REJECTED',
                    'QC disposition required',
                    'Document destruction if applicable'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'DOCUMENTATION RETENTION',
        subtitle: 'Keeping Records',
        highlightBox: {
            icon: 'fa-folder-open',
            title: 'RECORD KEEPING REQUIREMENTS',
            points: [
                'Transfer form copy in production batch record',
                'Transfer form copy in warehouse receiving file',
                'Electronic entry in inventory system',
                'Retain records per company retention policy',
                'Typically minimum 5 years or product expiry +2 years',
                'Records must be retrievable for audits',
                'Store in organized, accessible manner'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'COMMUNICATION',
        subtitle: 'Coordinating Transfer',
        columns: [
            {
                heading: 'Production Responsibility',
                icon: 'fa-bullhorn',
                items: [
                    'Notify warehouse in advance',
                    'Provide expected time and quantity',
                    'Ensure forms are complete',
                    'Accompany product to warehouse',
                    'Resolve any issues same day'
                ]
            },
            {
                heading: 'Warehouse Responsibility',
                icon: 'fa-comments',
                items: [
                    'Confirm readiness to receive',
                    'Have personnel available',
                    'Respond to transfer promptly',
                    'Report issues immediately',
                    'Update inventory same day'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'TRANSFER EXCELLENCE',
        subtitle: 'Accountable at Every Step',
        conclusionPoints: [
            {
                icon: 'fa-file-signature',
                title: 'Document Everything',
                text: 'Complete transfer forms with all details'
            },
            {
                icon: 'fa-calculator',
                title: 'Verify Quantities',
                text: 'Count and confirm before signing'
            },
            {
                icon: 'fa-tags',
                title: 'Check Status',
                text: 'Confirm QC status before storage placement'
            },
            {
                icon: 'fa-handshake',
                title: 'Two-Party Sign-Off',
                text: 'Both transfer and receive signatures required'
            }
        ],
        image: null
    }
];
