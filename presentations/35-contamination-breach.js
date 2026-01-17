// ===== PRESENTATION 35: CONTAMINATION BREACH PROTOCOL =====
// For: All Staff | Category: SOP Training

const contaminationBreachSlides = [
    {
        id: 1,
        type: 'title',
        title: 'CONTAMINATION BREACH PROTOCOL',
        subtitle: 'Emergency Response Procedures',
        tagline: 'Act Fast, Contain the Risk',
        content: [
            { icon: 'fa-triangle-exclamation', text: 'Identify contamination types' },
            { icon: 'fa-hand-holding-medical', text: 'Immediate response actions' },
            { icon: 'fa-clipboard-list', text: 'Documentation requirements' },
            { icon: 'fa-shield-halved', text: 'Preventive measures' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'WHAT IS A CONTAMINATION BREACH?',
        subtitle: 'Recognizing the Threat',
        highlightBox: {
            icon: 'fa-virus',
            title: 'CONTAMINATION DEFINED',
            points: [
                'Introduction of unwanted substance into product or environment',
                'Physical: Hair, glass, metal, fibers, insects',
                'Chemical: Wrong chemicals, cleaning residues, cross-contamination',
                'Microbial: Bacteria, mold, yeast from personnel or environment',
                'ANY deviation from sterile conditions is a potential breach',
                'Early detection prevents batch loss and patient harm'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'TYPES OF CONTAMINATION BREACHES',
        subtitle: 'Know What You Are Dealing With',
        columns: [
            {
                heading: 'Personnel-Related',
                icon: 'fa-user-xmark',
                items: [
                    'PPE failure (torn glove, fallen mask)',
                    'Improper hand hygiene',
                    'Illness symptoms during production',
                    'Unauthorized personnel entry',
                    'Improper gowning procedure'
                ]
            },
            {
                heading: 'Equipment/Environment',
                icon: 'fa-industry',
                items: [
                    'Equipment malfunction or leak',
                    'Power failure affecting air handling',
                    'Pest sighting in production area',
                    'Water leak or flooding',
                    'Air quality breach (pressure differential)'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'IMMEDIATE RESPONSE: FIRST 5 MINUTES',
        subtitle: 'Critical Actions',
        steps: [
            {
                number: '1',
                title: 'STOP Production',
                description: 'Immediately halt all production activities in the affected area'
            },
            {
                number: '2',
                title: 'ISOLATE the Area',
                description: 'Prevent anyone from entering or leaving the contaminated zone'
            },
            {
                number: '3',
                title: 'ALERT Supervisor',
                description: 'Notify production supervisor and QA immediately - do not delay'
            },
            {
                number: '4',
                title: 'PROTECT Yourself',
                description: 'Ensure your own safety - do not touch contaminated materials without proper PPE'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'THE STOP-ISOLATE-ALERT RULE',
        subtitle: 'Memory Aid for Emergency Response',
        highlightBox: {
            icon: 'fa-hand',
            title: 'S.I.A. PROTOCOL',
            points: [
                'S - STOP: Stop all activities immediately',
                'I - ISOLATE: Isolate affected area and products',
                'A - ALERT: Alert supervisor and QA department',
                'Do NOT attempt to clean up without authorization',
                'Do NOT continue production under any circumstances',
                'Do NOT move potentially contaminated products'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'PPE BREACH RESPONSE',
        subtitle: 'When Personal Protection Fails',
        columns: [
            {
                heading: 'Torn Glove Discovery',
                icon: 'fa-hand',
                items: [
                    'Stop work immediately',
                    'Do not touch any products',
                    'Carefully remove and dispose of gloves',
                    'Sanitize hands thoroughly',
                    'Don fresh gloves',
                    'Report to supervisor immediately'
                ]
            },
            {
                heading: 'Mask/Cap Breach',
                icon: 'fa-head-side-mask',
                items: [
                    'Step away from product area',
                    'Replace compromised PPE',
                    'Report any product exposure',
                    'Identify products in proximity',
                    'Document time and location',
                    'Await QA assessment'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'process',
        title: 'PRODUCT QUARANTINE PROCEDURE',
        subtitle: 'Protecting Potentially Affected Products',
        steps: [
            {
                number: '1',
                title: 'Identify All Affected Products',
                description: 'Determine which batches, containers, or materials may be contaminated'
            },
            {
                number: '2',
                title: 'Apply Quarantine Labels',
                description: 'Mark all suspected products with QUARANTINE labels - do not release'
            },
            {
                number: '3',
                title: 'Move to Quarantine Area',
                description: 'Transfer products to designated quarantine zone if safe to do so'
            },
            {
                number: '4',
                title: 'Document Everything',
                description: 'Record batch numbers, quantities, and exact location of all quarantined items'
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'highlight',
        title: 'DOCUMENTATION REQUIREMENTS',
        subtitle: 'Complete and Accurate Records',
        highlightBox: {
            icon: 'fa-file-lines',
            title: 'INCIDENT REPORT MUST INCLUDE',
            points: [
                'Date, time, and exact location of breach',
                'Type of contamination (physical, chemical, microbial)',
                'Personnel involved and present during incident',
                'Products potentially affected (batch numbers, quantities)',
                'Immediate actions taken',
                'Root cause if known, or investigation needed',
                'Corrective actions implemented',
                'Signatures of reporter and supervisor'
            ]
        },
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'INVESTIGATION PROCESS',
        subtitle: 'Finding the Root Cause',
        columns: [
            {
                heading: 'Investigation Team',
                icon: 'fa-users',
                items: [
                    'QA Manager leads investigation',
                    'Production Supervisor participates',
                    'Involved operators interviewed',
                    'Maintenance if equipment related',
                    'Document all findings'
                ]
            },
            {
                heading: 'Investigation Steps',
                icon: 'fa-magnifying-glass',
                items: [
                    'Review incident timeline',
                    'Examine physical evidence',
                    'Interview all witnesses',
                    'Review batch records',
                    'Identify root cause',
                    'Determine corrective actions'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'process',
        title: 'AREA DECONTAMINATION',
        subtitle: 'Restoring Clean Conditions',
        steps: [
            {
                number: '1',
                title: 'Assessment',
                description: 'QA determines extent of contamination and cleaning required'
            },
            {
                number: '2',
                title: 'Cleaning Protocol',
                description: 'Follow specific decontamination procedure based on contamination type'
            },
            {
                number: '3',
                title: 'Verification',
                description: 'Environmental monitoring (swabs, air sampling) to confirm cleanliness'
            },
            {
                number: '4',
                title: 'Release',
                description: 'QA provides written authorization before production resumes'
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'highlight',
        title: 'PREVENTION STRATEGIES',
        subtitle: 'Stop Breaches Before They Happen',
        highlightBox: {
            icon: 'fa-shield-check',
            title: 'PREVENTIVE MEASURES',
            points: [
                'Strict adherence to PPE protocols at all times',
                'Regular environmental monitoring',
                'Proper training and refresher courses',
                'Equipment maintenance schedules',
                'Immediate reporting culture - no blame for honest reports',
                'Regular audits and inspections',
                'Clear communication channels'
            ]
        },
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'COMMUNICATION FLOW',
        subtitle: 'Who to Contact and When',
        columns: [
            {
                heading: 'Immediate Notification',
                icon: 'fa-phone',
                items: [
                    'Production Supervisor - FIRST',
                    'Quality Assurance Manager',
                    'Line operators in area',
                    'Maintenance if equipment issue'
                ]
            },
            {
                heading: 'Secondary Notification',
                icon: 'fa-envelope',
                items: [
                    'Plant Manager (major incidents)',
                    'Regulatory Affairs if required',
                    'Document in incident log',
                    'Follow-up report within 24 hours'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'conclusion',
        title: 'CONTAMINATION RESPONSE SUMMARY',
        subtitle: 'Remember These Key Points',
        conclusionPoints: [
            {
                icon: 'fa-hand',
                title: 'STOP Immediately',
                text: 'Never continue production after a breach'
            },
            {
                icon: 'fa-ban',
                title: 'ISOLATE Products',
                text: 'Quarantine all potentially affected materials'
            },
            {
                icon: 'fa-bullhorn',
                title: 'REPORT Quickly',
                text: 'Alert supervisor and QA without delay'
            },
            {
                icon: 'fa-pen',
                title: 'DOCUMENT Everything',
                text: 'Complete incident report with all details'
            }
        ],
        image: null
    }
];
