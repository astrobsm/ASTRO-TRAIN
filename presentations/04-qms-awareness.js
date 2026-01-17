// ===== PRESENTATION 4: QUALITY MANAGEMENT SYSTEM (QMS) AWARENESS =====
// For: All Staff | Category: General Training

const qmsAwarenessSlides = [
    {
        id: 1,
        type: 'title',
        title: 'QUALITY MANAGEMENT SYSTEM',
        subtitle: 'QMS Awareness Training',
        tagline: 'Quality is Everyone\'s Responsibility',
        content: [
            { icon: 'fa-certificate', text: 'Understand QMS principles' },
            { icon: 'fa-sitemap', text: 'Learn quality documentation' },
            { icon: 'fa-users', text: 'Know your role in quality' },
            { icon: 'fa-chart-line', text: 'Contribute to improvement' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is a Quality Management System?',
        subtitle: 'Foundation of Excellence',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'Formalized system for managing quality',
                    'Documented policies and procedures',
                    'Processes and responsibilities',
                    'Ensures consistent quality',
                    'Framework for continuous improvement'
                ]
            },
            {
                heading: 'Purpose',
                icon: 'fa-bullseye',
                items: [
                    'Meet customer requirements',
                    'Comply with regulations',
                    'Ensure product safety',
                    'Drive operational efficiency',
                    'Enable continuous improvement'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'ISO 9001:2015 Quality Principles',
        subtitle: 'International Standard Foundation',
        columns: [
            {
                heading: 'Core Principles (1-4)',
                icon: 'fa-list-ol',
                items: [
                    '1. Customer Focus',
                    '2. Leadership',
                    '3. Engagement of People',
                    '4. Process Approach'
                ]
            },
            {
                heading: 'Core Principles (5-7)',
                icon: 'fa-list-ol',
                items: [
                    '5. Improvement',
                    '6. Evidence-Based Decision Making',
                    '7. Relationship Management'
                ]
            }
        ],
        goldenRule: 'These 7 principles guide everything we do',
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Pharmaceutical Quality Standards',
        subtitle: 'GMP Integration with QMS',
        columns: [
            {
                heading: 'GMP Requirements',
                icon: 'fa-industry',
                items: [
                    'Good Manufacturing Practice',
                    'WHO GMP guidelines',
                    'NAFDAC requirements',
                    'Product quality assurance',
                    'Process validation'
                ]
            },
            {
                heading: 'QMS Integration',
                icon: 'fa-puzzle-piece',
                items: [
                    'GMP is part of our QMS',
                    'Quality policy drives GMP',
                    'Documentation system supports both',
                    'Training addresses both',
                    'Audits verify compliance'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Quality Documentation Hierarchy',
        subtitle: 'The Documentation Pyramid',
        columns: [
            {
                heading: 'Level 1: Policy',
                icon: 'fa-file-contract',
                items: [
                    'Quality Policy',
                    'Quality Manual',
                    'Highest level documents',
                    'States what we do',
                    'Approved by top management'
                ]
            },
            {
                heading: 'Levels 2-4',
                icon: 'fa-folder-tree',
                items: [
                    'Level 2: SOPs (How we do it)',
                    'Level 3: Work Instructions (Details)',
                    'Level 4: Records (Evidence)',
                    'Each level supports the one above',
                    'Controlled document system'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Our Quality Policy',
        subtitle: 'Commitment to Excellence',
        columns: [
            {
                heading: 'Key Commitments',
                icon: 'fa-handshake',
                items: [
                    'Manufacture safe, effective products',
                    'Comply with all regulations',
                    'Meet customer expectations',
                    'Continuously improve',
                    'Train and develop staff'
                ]
            },
            {
                heading: 'Your Role',
                icon: 'fa-user-check',
                items: [
                    'Know our quality policy',
                    'Understand how it applies to you',
                    'Follow established procedures',
                    'Report quality concerns',
                    'Suggest improvements'
                ]
            }
        ],
        goldenRule: 'Every employee is a quality guardian',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Standard Operating Procedures (SOPs)',
        subtitle: 'The Heart of Our QMS',
        columns: [
            {
                heading: 'What are SOPs?',
                icon: 'fa-clipboard-list',
                items: [
                    'Step-by-step written instructions',
                    'Define how tasks are performed',
                    'Ensure consistency',
                    'Controlled documents',
                    'Must be followed exactly'
                ]
            },
            {
                heading: 'SOP Requirements',
                icon: 'fa-check-double',
                items: [
                    'Read before performing task',
                    'Available at work station',
                    'Use current version only',
                    'Report if unclear',
                    'Request training if needed'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Document Control',
        subtitle: 'Managing Quality Documents',
        columns: [
            {
                heading: 'Control Principles',
                icon: 'fa-file-shield',
                items: [
                    'All documents are numbered',
                    'Version control maintained',
                    'Review and approval required',
                    'Distribution is controlled',
                    'Old versions are removed'
                ]
            },
            {
                heading: 'Your Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Use only controlled documents',
                    'Check version number',
                    'Return obsolete documents',
                    'Don\'t photocopy controlled docs',
                    'Report document issues'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Records & Documentation',
        subtitle: 'Evidence of Quality',
        columns: [
            {
                heading: 'Good Documentation Practice',
                icon: 'fa-pen',
                items: [
                    'Use permanent ink (blue/black)',
                    'Write legibly',
                    'Date and sign entries',
                    'No overwriting or white-out',
                    'Cross out errors with single line'
                ]
            },
            {
                heading: 'Record Requirements',
                icon: 'fa-file-lines',
                items: [
                    'Complete all fields',
                    'Record data immediately',
                    'Initial corrections',
                    'Maintain traceability',
                    'Records tell our story'
                ]
            }
        ],
        goldenRule: 'If it isn\'t documented, it didn\'t happen',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Deviations & Non-Conformances',
        subtitle: 'When Things Don\'t Go as Planned',
        columns: [
            {
                heading: 'What is a Deviation?',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Departure from approved procedure',
                    'Unexpected event or result',
                    'Equipment malfunction',
                    'Out of specification result',
                    'Any unplanned occurrence'
                ]
            },
            {
                heading: 'What to Do',
                icon: 'fa-clipboard-check',
                items: [
                    'Stop if patient safety at risk',
                    'Report to supervisor immediately',
                    'Document what happened',
                    'Don\'t hide or cover up',
                    'Participate in investigation'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'CAPA: Corrective & Preventive Action',
        subtitle: 'Fixing Problems Permanently',
        columns: [
            {
                heading: 'Corrective Action',
                icon: 'fa-wrench',
                items: [
                    'Fixes existing problem',
                    'Addresses root cause',
                    'Prevents recurrence',
                    'Documents solution',
                    'Verifies effectiveness'
                ]
            },
            {
                heading: 'Preventive Action',
                icon: 'fa-shield-halved',
                items: [
                    'Prevents potential problems',
                    'Based on risk assessment',
                    'Proactive improvement',
                    'Identifies trends',
                    'Continuous improvement'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Internal Quality Audits',
        subtitle: 'Checking Our System',
        columns: [
            {
                heading: 'Purpose of Audits',
                icon: 'fa-magnifying-glass',
                items: [
                    'Verify compliance',
                    'Identify improvement areas',
                    'Check procedure effectiveness',
                    'Prepare for external audits',
                    'Required by QMS'
                ]
            },
            {
                heading: 'During an Audit',
                icon: 'fa-user-tie',
                items: [
                    'Answer honestly',
                    'Show actual practice',
                    'Provide requested documents',
                    'Ask if you don\'t understand',
                    'Don\'t be nervous'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Continuous Improvement',
        subtitle: 'Getting Better Every Day',
        columns: [
            {
                heading: 'Improvement Sources',
                icon: 'fa-lightbulb',
                items: [
                    'Employee suggestions',
                    'Audit findings',
                    'Customer feedback',
                    'Deviation trends',
                    'Performance metrics'
                ]
            },
            {
                heading: 'Your Contribution',
                icon: 'fa-comments',
                items: [
                    'Suggest improvements',
                    'Report near-misses',
                    'Share good practices',
                    'Participate in improvement teams',
                    'Support changes positively'
                ]
            }
        ],
        goldenRule: 'Small improvements lead to big results',
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'Quality Metrics & KPIs',
        subtitle: 'Measuring Our Performance',
        columns: [
            {
                heading: 'Key Quality Indicators',
                icon: 'fa-chart-bar',
                items: [
                    'Batch success rate',
                    'Customer complaints',
                    'Deviation frequency',
                    'CAPA closure rate',
                    'Training completion'
                ]
            },
            {
                heading: 'Why Metrics Matter',
                icon: 'fa-chart-line',
                items: [
                    'Objective performance measure',
                    'Identify trends',
                    'Drive decisions',
                    'Demonstrate improvement',
                    'Regulatory expectation'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'Quality is Everyone\'s Job',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-clipboard-list', title: 'Follow SOPs', text: 'Procedures ensure consistency and safety' },
            { icon: 'fa-pen', title: 'Document Properly', text: 'Good records are essential evidence' },
            { icon: 'fa-comments', title: 'Report Issues', text: 'Deviations help us improve' },
            { icon: 'fa-lightbulb', title: 'Suggest Improvements', text: 'Your ideas drive continuous improvement' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { qmsAwarenessSlides };
}
