// ===== PRESENTATION 42: ORDER & DELIVERY PROTOCOL =====
// For: Sales, Customer Service & Delivery Staff | Category: Distribution

const orderDeliverySlides = [
    {
        id: 1,
        type: 'title',
        title: 'ORDER & DELIVERY PROTOCOL',
        subtitle: 'From Order to Feedback',
        tagline: 'Complete Customer Satisfaction',
        content: [
            { icon: 'fa-phone', text: 'Order taking process' },
            { icon: 'fa-check-circle', text: 'Order confirmation' },
            { icon: 'fa-truck', text: 'Delivery procedures' },
            { icon: 'fa-comments', text: 'Feedback collection' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'ORDER MANAGEMENT OVERVIEW',
        subtitle: 'The Complete Cycle',
        highlightBox: {
            icon: 'fa-arrows-spin',
            title: 'ORDER-TO-DELIVERY CYCLE',
            points: [
                '1. ORDER TAKING: Receive customer order accurately',
                '2. CONFIRMATION: Verify details and confirm with customer',
                '3. PROCESSING: Pick, pack, and prepare for shipment',
                '4. DELIVERY: Transport to customer location safely',
                '5. HANDOFF: Deliver to authorized recipient',
                '6. FEEDBACK: Collect customer satisfaction input',
                'Each step requires documentation and verification'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'ORDER TAKING PROCESS',
        subtitle: 'Capturing Customer Requirements',
        columns: [
            {
                heading: 'Information to Collect',
                icon: 'fa-clipboard-list',
                items: [
                    'Customer/Facility name',
                    'Contact person and phone number',
                    'Delivery address (complete)',
                    'Products and quantities ordered',
                    'Requested delivery date/time'
                ]
            },
            {
                heading: 'Order Recording',
                icon: 'fa-file-invoice',
                items: [
                    'Assign unique order number',
                    'Enter in order management system',
                    'Verify stock availability',
                    'Note any special instructions',
                    'Record order date and time'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'ORDER VERIFICATION STEPS',
        subtitle: 'Getting It Right',
        steps: [
            {
                number: '1',
                title: 'Read Back',
                description: 'Repeat order details back to customer while on call/chat'
            },
            {
                number: '2',
                title: 'Confirm Spelling',
                description: 'Verify spelling of names and addresses letter by letter if needed'
            },
            {
                number: '3',
                title: 'Check Stock',
                description: 'Verify inventory availability in real-time before confirming'
            },
            {
                number: '4',
                title: 'Agree on Terms',
                description: 'Confirm pricing, payment terms, and delivery timeline'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'ORDER CONFIRMATION',
        subtitle: 'Formal Acknowledgment',
        highlightBox: {
            icon: 'fa-envelope-circle-check',
            title: 'CONFIRMATION REQUIREMENTS',
            points: [
                'Send written confirmation (email, SMS, or letter)',
                'Include complete order details and amounts',
                'State confirmed delivery date and time window',
                'Provide order reference number',
                'Include contact information for questions',
                'Request acknowledgment from customer if possible',
                'Keep record of confirmation sent'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'ORDER PROCESSING',
        subtitle: 'Preparing the Shipment',
        columns: [
            {
                heading: 'Picking',
                icon: 'fa-hand-holding-box',
                items: [
                    'Print pick list from order',
                    'Locate products in warehouse',
                    'Verify batch and expiry dates',
                    'Pick correct quantities',
                    'FIFO - oldest stock first'
                ]
            },
            {
                heading: 'Packing',
                icon: 'fa-box-taped',
                items: [
                    'Use appropriate packaging',
                    'Protect products from damage',
                    'Include packing slip/invoice',
                    'Seal and label packages',
                    'Apply delivery address label'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'process',
        title: 'DELIVERY PREPARATION',
        subtitle: 'Before Dispatch',
        steps: [
            {
                number: '1',
                title: 'Final Check',
                description: 'Verify order completeness against pick list, check package integrity'
            },
            {
                number: '2',
                title: 'Documentation',
                description: 'Prepare delivery note, invoice, receipt for signature'
            },
            {
                number: '3',
                title: 'Route Planning',
                description: 'Plan delivery route for efficiency, confirm address accessibility'
            },
            {
                number: '4',
                title: 'Load Vehicle',
                description: 'Load delivery vehicle safely, organize by delivery sequence'
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'highlight',
        title: 'DELIVERY EXECUTION',
        subtitle: 'At the Customer Location',
        highlightBox: {
            icon: 'fa-truck-ramp-box',
            title: 'DELIVERY PROCEDURE',
            points: [
                'Announce arrival (call or present at reception)',
                'Identify authorized recipient by name/role',
                'Present delivery note for verification',
                'Allow customer to inspect packages',
                'Obtain signature on delivery receipt',
                'Record name and signature clearly',
                'Note date and time of delivery'
            ]
        },
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'DELIVERY DOCUMENTATION',
        subtitle: 'Proof of Delivery',
        columns: [
            {
                heading: 'Delivery Receipt Content',
                icon: 'fa-file-signature',
                items: [
                    'Order/Delivery reference number',
                    'Product names and quantities',
                    'Batch numbers (for traceability)',
                    'Recipient name (printed)',
                    'Recipient signature'
                ]
            },
            {
                heading: 'Additional Records',
                icon: 'fa-camera',
                items: [
                    'Date and time of delivery',
                    'Condition of delivery (any issues)',
                    'Photo proof if applicable',
                    'Vehicle/driver identification',
                    'Return with documentation'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'highlight',
        title: 'HANDLING DELIVERY ISSUES',
        subtitle: 'Problem Resolution',
        highlightBox: {
            icon: 'fa-circle-exclamation',
            title: 'COMMON ISSUES & ACTIONS',
            points: [
                'CUSTOMER UNAVAILABLE: Call contact, wait reasonable time, reschedule',
                'ADDRESS NOT FOUND: Call customer for directions, update records',
                'DAMAGED ON DELIVERY: Document with photos, note on receipt, report',
                'QUANTITY DISCREPANCY: Verify against order, note shortage, report',
                'CUSTOMER REFUSES: Document reason, return product, inform sales',
                'Always contact office for guidance on unusual situations',
                'Complete incident report for any delivery issues'
            ]
        },
        image: null
    },
    {
        id: 11,
        type: 'process',
        title: 'FEEDBACK COLLECTION',
        subtitle: 'Post-Delivery Follow-Up',
        steps: [
            {
                number: '1',
                title: 'Initial Contact',
                description: 'Contact customer within 24-48 hours after delivery'
            },
            {
                number: '2',
                title: 'Confirm Receipt',
                description: 'Verify order received complete and in good condition'
            },
            {
                number: '3',
                title: 'Satisfaction Inquiry',
                description: 'Ask about satisfaction with products and delivery service'
            },
            {
                number: '4',
                title: 'Capture Feedback',
                description: 'Record all feedback (positive and negative) in system'
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'FEEDBACK QUESTIONS',
        subtitle: 'What to Ask',
        columns: [
            {
                heading: 'Product Feedback',
                icon: 'fa-flask',
                items: [
                    'Product arrived in good condition?',
                    'Packaging was adequate?',
                    'Product meets expectations?',
                    'Any quality concerns?',
                    'Would you reorder?'
                ]
            },
            {
                heading: 'Service Feedback',
                icon: 'fa-headset',
                items: [
                    'Order process was easy?',
                    'Delivery was on time?',
                    'Delivery staff was professional?',
                    'Communication was adequate?',
                    'Any suggestions for improvement?'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'HANDLING COMPLAINTS',
        subtitle: 'Turning Issues into Opportunities',
        highlightBox: {
            icon: 'fa-comment-medical',
            title: 'COMPLAINT HANDLING PROCEDURE',
            points: [
                'LISTEN: Let customer explain fully without interruption',
                'ACKNOWLEDGE: Show understanding and apologize for inconvenience',
                'DOCUMENT: Record details of complaint accurately',
                'ACT: Take immediate corrective action if possible',
                'ESCALATE: Involve supervisor for serious issues',
                'FOLLOW-UP: Contact customer after resolution to confirm satisfaction',
                'LEARN: Report feedback for process improvement'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'FEEDBACK ANALYSIS',
        subtitle: 'Using Customer Input',
        columns: [
            {
                heading: 'Recording Feedback',
                icon: 'fa-database',
                items: [
                    'Enter in customer relationship system',
                    'Categorize by type (product/service)',
                    'Rate severity (positive/neutral/negative)',
                    'Link to order number',
                    'Tag for trend analysis'
                ]
            },
            {
                heading: 'Taking Action',
                icon: 'fa-chart-line',
                items: [
                    'Regular feedback review meetings',
                    'Identify patterns and trends',
                    'Implement improvements',
                    'Share positive feedback with team',
                    'Address recurring issues'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'ORDER & DELIVERY EXCELLENCE',
        subtitle: 'Customer Satisfaction at Every Step',
        conclusionPoints: [
            {
                icon: 'fa-list-check',
                title: 'Accurate Orders',
                text: 'Verify all details before confirmation'
            },
            {
                icon: 'fa-clock',
                title: 'On-Time Delivery',
                text: 'Meet promised delivery timelines'
            },
            {
                icon: 'fa-signature',
                title: 'Document Everything',
                text: 'Complete delivery proof with signatures'
            },
            {
                icon: 'fa-comment-dots',
                title: 'Collect Feedback',
                text: 'Every delivery is a chance to improve'
            }
        ],
        image: null
    }
];
