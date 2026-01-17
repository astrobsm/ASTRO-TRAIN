// ===== PRESENTATION 19: ETHICAL PHARMACEUTICAL MARKETING =====
// For: Marketing Staff | Category: Marketing Training

const ethicalMarketingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'ETHICAL PHARMACEUTICAL MARKETING',
        subtitle: 'Marketing with Integrity',
        tagline: 'Build Trust, Build Brand',
        content: [
            { icon: 'fa-scale-balanced', text: 'Understand marketing ethics' },
            { icon: 'fa-gavel', text: 'Know regulatory requirements' },
            { icon: 'fa-shield-halved', text: 'Avoid compliance pitfalls' },
            { icon: 'fa-heart', text: 'Build sustainable brand value' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why Ethical Marketing Matters',
        subtitle: 'The Foundation of Trust',
        columns: [
            {
                heading: 'Patient Safety',
                icon: 'fa-user-injured',
                items: [
                    'Healthcare decisions affect lives',
                    'Misinformation causes harm',
                    'Trust is essential in healthcare',
                    'Patient welfare comes first',
                    'Ethical duty to society'
                ]
            },
            {
                heading: 'Business Sustainability',
                icon: 'fa-building',
                items: [
                    'Reputation is our greatest asset',
                    'Regulatory violations are costly',
                    'HCP trust drives prescribing',
                    'Long-term brand building',
                    'Sustainable competitive advantage'
                ]
            }
        ],
        goldenRule: 'Short-term gains from unethical marketing lead to long-term losses',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Regulatory Framework for Marketing',
        subtitle: 'Rules That Govern Our Activities',
        columns: [
            {
                heading: 'Key Regulations',
                icon: 'fa-gavel',
                items: [
                    'NAFDAC advertising guidelines',
                    'PCN ethical codes',
                    'WHO ethical criteria',
                    'Industry self-regulation',
                    'Company policies'
                ]
            },
            {
                heading: 'Key Requirements',
                icon: 'fa-list-check',
                items: [
                    'Pre-approval of materials',
                    'Truthful and balanced claims',
                    'No misleading information',
                    'Appropriate use of data',
                    'Documentation and records'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Truthful and Balanced Claims',
        subtitle: 'Accuracy in All Communications',
        columns: [
            {
                heading: 'Truthful Claims',
                icon: 'fa-check',
                items: [
                    'Based on evidence',
                    'Consistent with approval',
                    'Not exaggerated',
                    'References available',
                    'Updated with new data'
                ]
            },
            {
                heading: 'Balanced Presentation',
                icon: 'fa-scale-balanced',
                items: [
                    'Include safety information',
                    'Note limitations',
                    'Present fair comparisons',
                    'Not misleading by omission',
                    'Complete picture'
                ]
            }
        ],
        goldenRule: 'Say what we can prove, prove what we say',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Promotional Material Development',
        subtitle: 'Creating Compliant Content',
        columns: [
            {
                heading: 'Required Elements',
                icon: 'fa-file-lines',
                items: [
                    'Product name and composition',
                    'Approved indications',
                    'Dosage information',
                    'Safety/warning information',
                    'Company name and contact'
                ]
            },
            {
                heading: 'Approval Process',
                icon: 'fa-clipboard-check',
                items: [
                    'Medical/regulatory review',
                    'Legal review if needed',
                    'Reference verification',
                    'Documentation of approval',
                    'Version control'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Use of Clinical Data',
        subtitle: 'Evidence-Based Marketing',
        columns: [
            {
                heading: 'Data Requirements',
                icon: 'fa-flask',
                items: [
                    'From published sources',
                    'Properly referenced',
                    'Presented in context',
                    'Not cherry-picked',
                    'Current and relevant'
                ]
            },
            {
                heading: 'What to Avoid',
                icon: 'fa-ban',
                items: [
                    'Selective data presentation',
                    'Outdated studies',
                    'Misinterpretation',
                    'Inappropriate extrapolation',
                    'Competitor disparagement'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Comparative Claims',
        subtitle: 'Fair and Accurate Comparisons',
        columns: [
            {
                heading: 'Permissible Comparisons',
                icon: 'fa-check-circle',
                items: [
                    'Based on head-to-head data',
                    'Like-for-like comparison',
                    'Significant differences',
                    'Properly referenced',
                    'Balanced presentation'
                ]
            },
            {
                heading: 'Prohibited',
                icon: 'fa-times-circle',
                items: [
                    'Unfair comparisons',
                    'Denigrating competitors',
                    'Misleading claims',
                    'Cherry-picked endpoints',
                    'Different populations/doses'
                ]
            }
        ],
        goldenRule: 'If you can\'t prove it, don\'t say it',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Digital and Social Media Marketing',
        subtitle: 'Online Ethical Considerations',
        columns: [
            {
                heading: 'Digital Principles',
                icon: 'fa-globe',
                items: [
                    'Same rules apply online',
                    'Control of content',
                    'Monitoring required',
                    'Adverse event reporting',
                    'Privacy compliance'
                ]
            },
            {
                heading: 'Specific Considerations',
                icon: 'fa-mobile',
                items: [
                    'Character limits don\'t excuse omissions',
                    'User-generated content monitoring',
                    'Influencer disclosures',
                    'Platform terms of service',
                    'Quick correction of errors'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Interactions with Healthcare Professionals',
        subtitle: 'Professional Engagement Standards',
        columns: [
            {
                heading: 'Acceptable Activities',
                icon: 'fa-handshake',
                items: [
                    'Educational programs',
                    'Scientific meetings',
                    'Advisory boards',
                    'Research collaborations',
                    'Modest hospitality'
                ]
            },
            {
                heading: 'Boundaries',
                icon: 'fa-ban',
                items: [
                    'No lavish hospitality',
                    'No personal gifts',
                    'No entertainment funding',
                    'No quid pro quo',
                    'Transparency required'
                ]
            }
        ],
        goldenRule: 'Would you be comfortable if this was public?',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Gifts and Hospitality',
        subtitle: 'Clear Guidelines',
        columns: [
            {
                heading: 'Permitted',
                icon: 'fa-check',
                items: [
                    'Educational materials',
                    'Modest branded items',
                    'Reasonable meals at meetings',
                    'Appropriate venue costs',
                    'Travel for legitimate purposes'
                ]
            },
            {
                heading: 'Not Permitted',
                icon: 'fa-times',
                items: [
                    'Cash or cash equivalents',
                    'Personal gifts',
                    'Entertainment',
                    'Travel for family',
                    'Lavish hospitality'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Sponsorship and Events',
        subtitle: 'Supporting Medical Education',
        columns: [
            {
                heading: 'Event Standards',
                icon: 'fa-calendar-check',
                items: [
                    'Educational purpose',
                    'Appropriate venue',
                    'No resort locations',
                    'Transparent sponsorship',
                    'Focus on content'
                ]
            },
            {
                heading: 'Speaker Programs',
                icon: 'fa-microphone',
                items: [
                    'Qualified speakers',
                    'Balanced content',
                    'Appropriate compensation',
                    'Written agreements',
                    'Disclosure of relationship'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Record Keeping and Transparency',
        subtitle: 'Documentation Requirements',
        columns: [
            {
                heading: 'What to Document',
                icon: 'fa-file-lines',
                items: [
                    'Material approvals',
                    'HCP interactions',
                    'Payments and transfers',
                    'Event details',
                    'Compliance reviews'
                ]
            },
            {
                heading: 'Transparency Requirements',
                icon: 'fa-eye',
                items: [
                    'Disclosure obligations',
                    'Reporting requirements',
                    'Audit readiness',
                    'Internal monitoring',
                    'External accountability'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Consequences of Non-Compliance',
        subtitle: 'What\'s at Stake',
        columns: [
            {
                heading: 'Company Consequences',
                icon: 'fa-building',
                items: [
                    'Regulatory sanctions',
                    'Financial penalties',
                    'Reputation damage',
                    'Loss of trust',
                    'Business impact'
                ]
            },
            {
                heading: 'Personal Consequences',
                icon: 'fa-user',
                items: [
                    'Disciplinary action',
                    'Career impact',
                    'Professional reputation',
                    'Potential legal liability',
                    'Ethical responsibility'
                ]
            }
        ],
        goldenRule: 'Ethics is not negotiable',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Ethical Marketing Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-check', title: 'Be Truthful', text: 'Only make claims you can prove' },
            { icon: 'fa-scale-balanced', title: 'Be Balanced', text: 'Include benefits and risks' },
            { icon: 'fa-file-lines', title: 'Get Approval', text: 'Review all materials before use' },
            { icon: 'fa-heart', title: 'Put Patients First', text: 'Their welfare is our purpose' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ethicalMarketingSlides };
}
