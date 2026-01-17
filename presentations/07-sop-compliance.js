// ===== PRESENTATION 7: SOP DEVELOPMENT & COMPLIANCE =====
// For: Production Staff | Category: Production Training

const sopComplianceSlides = [
    {
        id: 1,
        type: 'title',
        title: 'SOP DEVELOPMENT & COMPLIANCE',
        subtitle: 'Standard Operating Procedures',
        tagline: 'The Right Way, Every Time',
        content: [
            { icon: 'fa-file-lines', text: 'Understand SOP importance' },
            { icon: 'fa-pen-to-square', text: 'Learn SOP structure' },
            { icon: 'fa-list-check', text: 'Follow procedures correctly' },
            { icon: 'fa-refresh', text: 'Participate in SOP updates' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is an SOP?',
        subtitle: 'Standard Operating Procedure Defined',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'Written step-by-step instructions',
                    'Describes how to perform a task',
                    'Ensures consistency',
                    'Controlled document',
                    'Part of Quality Management System'
                ]
            },
            {
                heading: 'Purpose',
                icon: 'fa-bullseye',
                items: [
                    'Ensure tasks done correctly',
                    'Reduce errors and variability',
                    'Train new personnel',
                    'Regulatory compliance',
                    'Reference for troubleshooting'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Why SOPs Matter',
        subtitle: 'Benefits of Written Procedures',
        columns: [
            {
                heading: 'For Quality',
                icon: 'fa-certificate',
                items: [
                    'Consistent product quality',
                    'Reduced batch failures',
                    'Traceable processes',
                    'Easier deviation investigation',
                    'Continuous improvement basis'
                ]
            },
            {
                heading: 'For Compliance',
                icon: 'fa-shield-halved',
                items: [
                    'GMP requirement',
                    'Regulatory expectation',
                    'Audit evidence',
                    'Legal protection',
                    'Industry standard'
                ]
            }
        ],
        goldenRule: 'Without SOPs, there is no controlled process',
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'SOP Structure',
        subtitle: 'Standard Components',
        columns: [
            {
                heading: 'Header Information',
                icon: 'fa-heading',
                items: [
                    'Title and SOP number',
                    'Version/revision number',
                    'Effective date',
                    'Department/area',
                    'Approval signatures'
                ]
            },
            {
                heading: 'Body Content',
                icon: 'fa-file-alt',
                items: [
                    'Purpose/Objective',
                    'Scope',
                    'Responsibilities',
                    'Materials & Equipment',
                    'Procedure (step-by-step)',
                    'References/Attachments'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Writing Effective SOPs',
        subtitle: 'Best Practices for SOP Development',
        columns: [
            {
                heading: 'Language Guidelines',
                icon: 'fa-language',
                items: [
                    'Use clear, simple language',
                    'Active voice preferred',
                    'One action per step',
                    'Number steps sequentially',
                    'Define technical terms'
                ]
            },
            {
                heading: 'Content Guidelines',
                icon: 'fa-list-check',
                items: [
                    'Include all necessary details',
                    'Add warnings/cautions',
                    'Include acceptance criteria',
                    'Reference related documents',
                    'Use visuals when helpful'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'SOP Lifecycle',
        subtitle: 'From Creation to Retirement',
        columns: [
            {
                heading: 'Development Phase',
                icon: 'fa-pen',
                items: [
                    'Draft by subject expert',
                    'Review by stakeholders',
                    'Quality review',
                    'Management approval',
                    'Distribution and training'
                ]
            },
            {
                heading: 'Maintenance Phase',
                icon: 'fa-rotate',
                items: [
                    'Periodic review (annual)',
                    'Update when needed',
                    'Version control',
                    'Supersede old versions',
                    'Retire obsolete SOPs'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Following SOPs Correctly',
        subtitle: 'Compliance Requirements',
        columns: [
            {
                heading: 'Before Starting',
                icon: 'fa-play',
                items: [
                    'Read the complete SOP',
                    'Ensure you are trained',
                    'Gather required materials',
                    'Check you have current version',
                    'Clarify any questions first'
                ]
            },
            {
                heading: 'During Execution',
                icon: 'fa-cogs',
                items: [
                    'Follow steps in order',
                    'Don\'t skip steps',
                    'Don\'t modify procedure',
                    'Document as you go',
                    'Stop if unclear or problem occurs'
                ]
            }
        ],
        goldenRule: 'If you can\'t follow it, don\'t start',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'When SOPs Don\'t Fit',
        subtitle: 'Handling Procedure Gaps',
        columns: [
            {
                heading: 'What NOT to Do',
                icon: 'fa-ban',
                items: [
                    'Don\'t improvise',
                    'Don\'t modify on your own',
                    'Don\'t ignore the problem',
                    'Don\'t document what you didn\'t do',
                    'Don\'t blame the SOP'
                ]
            },
            {
                heading: 'What TO Do',
                icon: 'fa-check',
                items: [
                    'Stop the activity',
                    'Notify supervisor',
                    'Document the issue',
                    'Await instructions',
                    'Suggest improvements'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'SOP Change Control',
        subtitle: 'Managing Procedure Updates',
        columns: [
            {
                heading: 'Why Changes Occur',
                icon: 'fa-question-circle',
                items: [
                    'Regulatory updates',
                    'Process improvements',
                    'Equipment changes',
                    'Error corrections',
                    'Best practice updates'
                ]
            },
            {
                heading: 'Change Process',
                icon: 'fa-arrows-rotate',
                items: [
                    'Submit change request',
                    'Impact assessment',
                    'Draft revision',
                    'Review and approval',
                    'Training and implementation'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Your Role in SOP Updates',
        subtitle: 'Contributing to Improvement',
        columns: [
            {
                heading: 'Providing Feedback',
                icon: 'fa-comments',
                items: [
                    'Identify unclear instructions',
                    'Report errors or gaps',
                    'Suggest improvements',
                    'Share practical experience',
                    'Participate in reviews'
                ]
            },
            {
                heading: 'Accepting Changes',
                icon: 'fa-thumbs-up',
                items: [
                    'Complete training on new version',
                    'Return old copies',
                    'Use only current version',
                    'Ask questions if unclear',
                    'Support implementation'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'SOP Training Requirements',
        subtitle: 'Learning Before Doing',
        columns: [
            {
                heading: 'Training Types',
                icon: 'fa-graduation-cap',
                items: [
                    'Read and understand',
                    'Classroom training',
                    'On-the-job training',
                    'Competency assessment',
                    'Refresher training'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-signature',
                items: [
                    'Training records maintained',
                    'Sign-off required',
                    'Track training status',
                    'Retraining for updates',
                    'Verify before assigning tasks'
                ]
            }
        ],
        goldenRule: 'No training = No authorization to work',
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Common SOP Compliance Issues',
        subtitle: 'Mistakes to Avoid',
        columns: [
            {
                heading: 'Compliance Failures',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Using outdated versions',
                    'Not reading before starting',
                    'Skipping or modifying steps',
                    'Not documenting execution',
                    'Training not completed'
                ]
            },
            {
                heading: 'Consequences',
                icon: 'fa-gavel',
                items: [
                    'Product quality issues',
                    'Regulatory findings',
                    'Batch failures',
                    'Safety incidents',
                    'Disciplinary action'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Types of SOPs in Production',
        subtitle: 'Procedures We Use',
        columns: [
            {
                heading: 'Manufacturing SOPs',
                icon: 'fa-industry',
                items: [
                    'Batch manufacturing',
                    'Equipment operation',
                    'In-process controls',
                    'Line clearance',
                    'Yield reconciliation'
                ]
            },
            {
                heading: 'Support SOPs',
                icon: 'fa-hands-helping',
                items: [
                    'Cleaning procedures',
                    'Sampling techniques',
                    'Documentation practices',
                    'Gowning procedures',
                    'Equipment maintenance'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'SOP Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-book-open', title: 'Read First', text: 'Understand the procedure before starting' },
            { icon: 'fa-check-double', title: 'Follow Exactly', text: 'Every step, every time' },
            { icon: 'fa-comments', title: 'Give Feedback', text: 'Help improve our procedures' },
            { icon: 'fa-graduation-cap', title: 'Stay Trained', text: 'Training is ongoing' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sopComplianceSlides };
}
