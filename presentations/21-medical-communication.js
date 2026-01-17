// ===== PRESENTATION 21: MEDICAL COMMUNICATION & SCIENTIFIC WRITING =====
// For: Marketing Staff | Category: Marketing Training

const medicalCommunicationSlides = [
    {
        id: 1,
        type: 'title',
        title: 'MEDICAL COMMUNICATION & SCIENTIFIC WRITING',
        subtitle: 'Communicating Science Effectively',
        tagline: 'Where Science Meets Communication',
        content: [
            { icon: 'fa-microscope', text: 'Translate science for audiences' },
            { icon: 'fa-pen', text: 'Write clear scientific content' },
            { icon: 'fa-bullseye', text: 'Reach target audiences' },
            { icon: 'fa-scale-balanced', text: 'Maintain accuracy and compliance' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is Medical Communication?',
        subtitle: 'Science Translation',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'Translating scientific information',
                    'For different audiences',
                    'Through various channels',
                    'To inform and educate',
                    'With accuracy and clarity'
                ]
            },
            {
                heading: 'Importance',
                icon: 'fa-star',
                items: [
                    'Builds credibility',
                    'Educates healthcare providers',
                    'Supports product positioning',
                    'Differentiates from competitors',
                    'Drives appropriate use'
                ]
            }
        ],
        goldenRule: 'Make the complex simple, but not simpler',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Know Your Audience',
        subtitle: 'Tailoring Communication',
        columns: [
            {
                heading: 'Healthcare Professionals',
                icon: 'fa-user-doctor',
                items: [
                    'Scientific language appropriate',
                    'Data and evidence expected',
                    'Clinical focus',
                    'Time-poor—be concise',
                    'Peer-reviewed sources valued'
                ]
            },
            {
                heading: 'General Audience',
                icon: 'fa-users',
                items: [
                    'Plain language essential',
                    'Avoid jargon',
                    'Benefits-focused',
                    'Visual aids helpful',
                    'Simple explanations'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Types of Medical Content',
        subtitle: 'Content Categories',
        columns: [
            {
                heading: 'Scientific Materials',
                icon: 'fa-flask',
                items: [
                    'Product monographs',
                    'Clinical summaries',
                    'Scientific papers',
                    'Conference abstracts',
                    'Posters and presentations'
                ]
            },
            {
                heading: 'Promotional Materials',
                icon: 'fa-bullhorn',
                items: [
                    'Product brochures',
                    'Detail aids',
                    'Sales training materials',
                    'Website content',
                    'Advertising (within regulations)'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Principles of Scientific Writing',
        subtitle: 'Writing with Clarity',
        columns: [
            {
                heading: 'Core Principles',
                icon: 'fa-lightbulb',
                items: [
                    'Accuracy: Facts must be correct',
                    'Clarity: Easy to understand',
                    'Brevity: Concise expression',
                    'Consistency: Uniform terminology',
                    'Objectivity: Balanced presentation'
                ]
            },
            {
                heading: 'Writing Tips',
                icon: 'fa-pen-to-square',
                items: [
                    'Use active voice',
                    'Short sentences',
                    'One idea per paragraph',
                    'Define technical terms',
                    'Use bullet points'
                ]
            }
        ],
        goldenRule: 'ABC: Accuracy, Brevity, Clarity',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Referencing and Citations',
        subtitle: 'Supporting Claims with Evidence',
        columns: [
            {
                heading: 'Reference Types',
                icon: 'fa-book-open',
                items: [
                    'Peer-reviewed journals',
                    'Product monograph/SmPC',
                    'Clinical trial data',
                    'Regulatory documents',
                    'Guidelines (professional bodies)'
                ]
            },
            {
                heading: 'Citation Standards',
                icon: 'fa-check',
                items: [
                    'Every claim needs support',
                    'Primary sources preferred',
                    'Recent data (within 5 years)',
                    'Accurate quotation',
                    'Complete reference details'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Creating a Product Monograph',
        subtitle: 'Key Scientific Document',
        columns: [
            {
                heading: 'Essential Sections',
                icon: 'fa-file-lines',
                items: [
                    'Product description',
                    'Composition and formulation',
                    'Mechanism of action',
                    'Indications and usage',
                    'Clinical evidence'
                ]
            },
            {
                heading: 'Additional Elements',
                icon: 'fa-list',
                items: [
                    'Dosage and administration',
                    'Contraindications/precautions',
                    'Safety information',
                    'Storage conditions',
                    'References'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Writing for Different Channels',
        subtitle: 'Adapting Content',
        columns: [
            {
                heading: 'Print Materials',
                icon: 'fa-newspaper',
                items: [
                    'Detailed content possible',
                    'Longer attention span',
                    'High-quality visuals',
                    'Reference materials',
                    'Leave-behind value'
                ]
            },
            {
                heading: 'Digital Content',
                icon: 'fa-laptop',
                items: [
                    'Scannable content',
                    'Shorter paragraphs',
                    'Multimedia integration',
                    'Interactive elements',
                    'SEO considerations'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Regulatory Compliance in Writing',
        subtitle: 'Legal Requirements',
        columns: [
            {
                heading: 'Key Requirements',
                icon: 'fa-gavel',
                items: [
                    'Truthful and accurate',
                    'Balanced presentation',
                    'No misleading claims',
                    'Within approved indications',
                    'Include safety information'
                ]
            },
            {
                heading: 'Approval Process',
                icon: 'fa-clipboard-check',
                items: [
                    'Medical/scientific review',
                    'Regulatory affairs review',
                    'Legal review if needed',
                    'Documentation of approval',
                    'Version control'
                ]
            }
        ],
        goldenRule: 'If you can\'t prove it, don\'t say it',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Visual Communication',
        subtitle: 'Beyond Words',
        columns: [
            {
                heading: 'Visual Elements',
                icon: 'fa-image',
                items: [
                    'Graphs and charts',
                    'Diagrams and illustrations',
                    'Photographs',
                    'Infographics',
                    'Tables'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-check',
                items: [
                    'Clear and accurate',
                    'Appropriate scale',
                    'Labels and legends',
                    'Consistent styling',
                    'Support the message'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Presenting Scientific Data',
        subtitle: 'Data Visualization',
        columns: [
            {
                heading: 'Chart Selection',
                icon: 'fa-chart-bar',
                items: [
                    'Bar charts: Comparisons',
                    'Line graphs: Trends over time',
                    'Pie charts: Proportions',
                    'Scatter plots: Correlations',
                    'Tables: Precise data'
                ]
            },
            {
                heading: 'Data Integrity',
                icon: 'fa-shield',
                items: [
                    'Accurate representation',
                    'Appropriate axis scales',
                    'No cherry-picking',
                    'Show confidence intervals',
                    'Note sample sizes'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Common Writing Errors',
        subtitle: 'Mistakes to Avoid',
        columns: [
            {
                heading: 'Content Errors',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Unsupported claims',
                    'Off-label promotion',
                    'Unbalanced presentation',
                    'Outdated information',
                    'Comparative claims without data'
                ]
            },
            {
                heading: 'Style Errors',
                icon: 'fa-pen',
                items: [
                    'Jargon overload',
                    'Passive voice overuse',
                    'Too much complexity',
                    'Inconsistent terminology',
                    'Poor structure'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Review and Editing',
        subtitle: 'Quality Assurance',
        columns: [
            {
                heading: 'Self-Review',
                icon: 'fa-user-check',
                items: [
                    'Read aloud',
                    'Check facts and references',
                    'Review against brief',
                    'Simplify language',
                    'Fresh eyes after break'
                ]
            },
            {
                heading: 'Peer Review',
                icon: 'fa-users',
                items: [
                    'Medical/scientific review',
                    'Audience perspective',
                    'Compliance check',
                    'Feedback incorporation',
                    'Final approval'
                ]
            }
        ],
        goldenRule: 'Good writing is rewriting',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Medical Communication Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-bullseye', title: 'Know Your Audience', text: 'Adapt language and depth' },
            { icon: 'fa-check-double', title: 'Be Accurate', text: 'Every claim needs evidence' },
            { icon: 'fa-gavel', title: 'Stay Compliant', text: 'Follow regulations strictly' },
            { icon: 'fa-lightbulb', title: 'Be Clear', text: 'Simplicity is sophistication' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { medicalCommunicationSlides };
}
