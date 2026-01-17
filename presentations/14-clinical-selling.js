// ===== PRESENTATION 14: CLINICAL SELLING SKILLS =====
// For: Sales Staff | Category: Sales Training

const clinicalSellingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'CLINICAL SELLING SKILLS',
        subtitle: 'Evidence-Based Sales Excellence',
        tagline: 'Sell with Science, Win with Trust',
        content: [
            { icon: 'fa-user-doctor', text: 'Understand clinical needs' },
            { icon: 'fa-chart-line', text: 'Present clinical evidence' },
            { icon: 'fa-handshake', text: 'Build HCP relationships' },
            { icon: 'fa-award', text: 'Achieve ethical sales success' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is Clinical Selling?',
        subtitle: 'More Than Product Promotion',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'Evidence-based sales approach',
                    'Focus on clinical benefits',
                    'Understanding patient needs',
                    'Ethical promotion',
                    'Building trust with HCPs'
                ]
            },
            {
                heading: 'Why It Matters',
                icon: 'fa-star',
                items: [
                    'HCPs want scientific evidence',
                    'Differentiates from competitors',
                    'Builds long-term relationships',
                    'Regulatory compliance',
                    'Professional reputation'
                ]
            }
        ],
        goldenRule: 'Clinical credibility = Sales success',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Understanding Your Customers',
        subtitle: 'Healthcare Professional Profiles',
        columns: [
            {
                heading: 'Medical Professionals',
                icon: 'fa-user-doctor',
                items: [
                    'Surgeons (general, plastic)',
                    'Emergency physicians',
                    'General practitioners',
                    'Wound care specialists',
                    'Dermatologists'
                ]
            },
            {
                heading: 'Other Key Customers',
                icon: 'fa-users',
                items: [
                    'Nurses (wound care, theatre)',
                    'Pharmacists (hospital, community)',
                    'Procurement officers',
                    'Hospital administrators',
                    'Distributors'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'The Clinical Sales Call',
        subtitle: 'Structured Approach to Success',
        columns: [
            {
                heading: 'Pre-Call Planning',
                icon: 'fa-clipboard-list',
                items: [
                    'Know the customer',
                    'Set clear objectives',
                    'Prepare materials',
                    'Anticipate questions',
                    'Plan your message'
                ]
            },
            {
                heading: 'During the Call',
                icon: 'fa-comments',
                items: [
                    'Open professionally',
                    'Probe for needs',
                    'Present benefits',
                    'Handle objections',
                    'Close appropriately'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Needs-Based Selling',
        subtitle: 'Asking the Right Questions',
        columns: [
            {
                heading: 'Probing Techniques',
                icon: 'fa-question-circle',
                items: [
                    'Open-ended questions',
                    'Listen actively',
                    'Understand their challenges',
                    'Identify clinical needs',
                    'Confirm understanding'
                ]
            },
            {
                heading: 'Key Questions',
                icon: 'fa-comments',
                items: [
                    '"What wound types do you commonly treat?"',
                    '"What challenges do you face?"',
                    '"What products do you currently use?"',
                    '"What would an ideal solution look like?"',
                    '"How do you evaluate new products?"'
                ]
            }
        ],
        goldenRule: 'Listen 70%, talk 30%',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Presenting Clinical Evidence',
        subtitle: 'Science That Sells',
        columns: [
            {
                heading: 'Types of Evidence',
                icon: 'fa-flask',
                items: [
                    'Clinical studies',
                    'Product specifications',
                    'Case studies',
                    'Expert endorsements',
                    'Comparative data'
                ]
            },
            {
                heading: 'Presentation Tips',
                icon: 'fa-presentation-screen',
                items: [
                    'Keep it relevant to needs',
                    'Use visuals effectively',
                    'Explain in simple terms',
                    'Relate to patient outcomes',
                    'Have materials available'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'FAB Selling Technique',
        subtitle: 'Features → Advantages → Benefits',
        columns: [
            {
                heading: 'The FAB Model',
                icon: 'fa-list-ol',
                items: [
                    'FEATURE: What it is',
                    'ADVANTAGE: What it does',
                    'BENEFIT: Why it matters',
                    'Connect to customer needs',
                    'Make it personal'
                ]
            },
            {
                heading: 'WOUND CLEX® Example',
                icon: 'fa-prescription-bottle',
                items: [
                    'Feature: Antimicrobial solution',
                    'Advantage: Reduces bacterial load',
                    'Benefit: "Helps your patients heal faster with fewer infections"',
                    'Always end with benefits',
                    'Link to expressed needs'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Handling Objections',
        subtitle: 'Turning No into Yes',
        columns: [
            {
                heading: 'Common Objections',
                icon: 'fa-ban',
                items: [
                    '"Price is too high"',
                    '"We already use another product"',
                    '"I need more evidence"',
                    '"Let me think about it"',
                    '"Budget constraints"'
                ]
            },
            {
                heading: 'Response Approach',
                icon: 'fa-check',
                items: [
                    'Listen completely',
                    'Acknowledge the concern',
                    'Clarify if needed',
                    'Respond with evidence/value',
                    'Confirm resolution'
                ]
            }
        ],
        goldenRule: 'Objections are opportunities to provide value',
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Price Objection Handling',
        subtitle: 'Selling Value, Not Just Price',
        columns: [
            {
                heading: 'Price Perspective',
                icon: 'fa-money-bill',
                items: [
                    'Price is only one factor',
                    'Total cost of care matters',
                    'Quality reduces complications',
                    'Time savings have value',
                    'Local availability matters'
                ]
            },
            {
                heading: 'Value Response',
                icon: 'fa-balance-scale',
                items: [
                    'Calculate cost per treatment',
                    'Compare to outcomes',
                    'Highlight GMP quality',
                    'Emphasize reliability',
                    'Offer trial opportunity'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Closing Techniques',
        subtitle: 'Asking for the Business',
        columns: [
            {
                heading: 'When to Close',
                icon: 'fa-clock',
                items: [
                    'Buying signals observed',
                    'Objections addressed',
                    'Agreement on benefits',
                    'Positive engagement',
                    'Don\'t wait too long'
                ]
            },
            {
                heading: 'Closing Approaches',
                icon: 'fa-handshake',
                items: [
                    'Direct close: "Can we start?"',
                    'Alternative close: "100ml or 250ml?"',
                    'Trial close: "Would you try it?"',
                    'Summary close: Review benefits',
                    'Next steps close: Schedule follow-up'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Building Relationships',
        subtitle: 'Beyond the Transaction',
        columns: [
            {
                heading: 'Relationship Building',
                icon: 'fa-heart',
                items: [
                    'Be reliable and consistent',
                    'Follow up as promised',
                    'Provide valuable information',
                    'Respect their time',
                    'Be a resource, not just seller'
                ]
            },
            {
                heading: 'Long-Term Partnership',
                icon: 'fa-handshake',
                items: [
                    'Regular visits',
                    'Educational support',
                    'Problem solving',
                    'Feedback collection',
                    'Continuous improvement'
                ]
            }
        ],
        goldenRule: 'Customers buy from people they trust',
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Post-Call Activities',
        subtitle: 'Completing the Sales Cycle',
        columns: [
            {
                heading: 'Immediate Actions',
                icon: 'fa-list-check',
                items: [
                    'Record call details',
                    'Note commitments made',
                    'Update customer records',
                    'Plan follow-up actions',
                    'Submit required reports'
                ]
            },
            {
                heading: 'Follow-Up',
                icon: 'fa-rotate-right',
                items: [
                    'Send promised materials',
                    'Schedule next visit',
                    'Track orders',
                    'Monitor usage',
                    'Gather feedback'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Ethical Selling',
        subtitle: 'Integrity in Every Interaction',
        columns: [
            {
                heading: 'Ethical Principles',
                icon: 'fa-scale-balanced',
                items: [
                    'Truthful claims only',
                    'No misleading information',
                    'Respect HCP decisions',
                    'Patient safety first',
                    'Follow company policies'
                ]
            },
            {
                heading: 'What NOT to Do',
                icon: 'fa-ban',
                items: [
                    'No off-label promotion',
                    'No inappropriate gifts',
                    'No false comparisons',
                    'No pressure tactics',
                    'No confidentiality breaches'
                ]
            }
        ],
        goldenRule: 'Sell ethically, win sustainably',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Clinical Selling Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-ear-listen', title: 'Listen First', text: 'Understand needs before presenting' },
            { icon: 'fa-flask', title: 'Use Evidence', text: 'Clinical data builds credibility' },
            { icon: 'fa-heart', title: 'Build Relationships', text: 'Trust leads to lasting partnerships' },
            { icon: 'fa-scale-balanced', title: 'Sell Ethically', text: 'Integrity is non-negotiable' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { clinicalSellingSlides };
}
