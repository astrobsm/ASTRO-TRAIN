// ===== PRESENTATION 15: HOSPITAL SALES & KEY ACCOUNT MANAGEMENT =====
// For: Sales Staff | Category: Sales Training

const hospitalSalesSlides = [
    {
        id: 1,
        type: 'title',
        title: 'HOSPITAL SALES & KEY ACCOUNT MANAGEMENT',
        subtitle: 'Winning Institutional Business',
        tagline: 'Strategic Partnerships, Sustainable Growth',
        content: [
            { icon: 'fa-hospital', text: 'Understand hospital buying' },
            { icon: 'fa-sitemap', text: 'Navigate decision structures' },
            { icon: 'fa-handshake', text: 'Build key account relationships' },
            { icon: 'fa-chart-line', text: 'Grow institutional business' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Hospital Market Overview',
        subtitle: 'Understanding the Institutional Market',
        columns: [
            {
                heading: 'Hospital Types',
                icon: 'fa-hospital',
                items: [
                    'Teaching/University hospitals',
                    'Federal Medical Centers',
                    'State government hospitals',
                    'Private hospitals',
                    'Specialist clinics'
                ]
            },
            {
                heading: 'Market Characteristics',
                icon: 'fa-chart-pie',
                items: [
                    'Large volume purchases',
                    'Formal procurement process',
                    'Multiple decision makers',
                    'Long sales cycles',
                    'Contract-based relationships'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Hospital Buying Process',
        subtitle: 'How Hospitals Make Decisions',
        columns: [
            {
                heading: 'Process Steps',
                icon: 'fa-list-ol',
                items: [
                    'Need identification',
                    'Specification development',
                    'Supplier selection',
                    'Tender/quotation process',
                    'Contract award and ordering'
                ]
            },
            {
                heading: 'Key Factors',
                icon: 'fa-key',
                items: [
                    'Clinical efficacy',
                    'Price competitiveness',
                    'NAFDAC registration',
                    'Supply reliability',
                    'Vendor reputation'
                ]
            }
        ],
        goldenRule: 'Know the process, influence at each stage',
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Decision Making Unit (DMU)',
        subtitle: 'Who Influences the Purchase',
        columns: [
            {
                heading: 'Clinical Influencers',
                icon: 'fa-user-doctor',
                items: [
                    'Surgeons and physicians',
                    'Head nurses',
                    'Wound care teams',
                    'Infection control',
                    'Pharmacists'
                ]
            },
            {
                heading: 'Administrative Influencers',
                icon: 'fa-user-tie',
                items: [
                    'Medical Director',
                    'Procurement Manager',
                    'Finance Director',
                    'Hospital Administrator',
                    'Pharmacy Committee'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Mapping the DMU',
        subtitle: 'Understanding Roles and Influence',
        columns: [
            {
                heading: 'Role Categories',
                icon: 'fa-users',
                items: [
                    'Initiators: Identify the need',
                    'Users: Use the product daily',
                    'Influencers: Provide opinion',
                    'Deciders: Make final choice',
                    'Buyers: Execute purchase'
                ]
            },
            {
                heading: 'Mapping Exercise',
                icon: 'fa-sitemap',
                items: [
                    'Identify all stakeholders',
                    'Understand their role',
                    'Assess their influence',
                    'Know their priorities',
                    'Build relationships with each'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Key Account Management',
        subtitle: 'Strategic Customer Focus',
        columns: [
            {
                heading: 'What is a Key Account?',
                icon: 'fa-star',
                items: [
                    'High volume potential',
                    'Strategic importance',
                    'Long-term partnership value',
                    'Reference/influence potential',
                    'Merits dedicated resources'
                ]
            },
            {
                heading: 'KAM Approach',
                icon: 'fa-handshake',
                items: [
                    'Dedicated relationship manager',
                    'Customized value proposition',
                    'Regular business reviews',
                    'Joint business planning',
                    'Problem-solving partnership'
                ]
            }
        ],
        goldenRule: 'Treat key accounts as strategic partners',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Account Planning',
        subtitle: 'Strategic Approach to Key Accounts',
        columns: [
            {
                heading: 'Account Analysis',
                icon: 'fa-magnifying-glass',
                items: [
                    'Hospital profile and size',
                    'Current suppliers',
                    'Decision-making process',
                    'Growth opportunities',
                    'Challenges they face'
                ]
            },
            {
                heading: 'Action Planning',
                icon: 'fa-clipboard-list',
                items: [
                    'Set specific objectives',
                    'Define strategies',
                    'Plan activities/visits',
                    'Allocate resources',
                    'Monitor progress'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Value Proposition for Hospitals',
        subtitle: 'What We Offer Institutions',
        columns: [
            {
                heading: 'Product Value',
                icon: 'fa-prescription-bottle',
                items: [
                    'GMP-quality products',
                    'NAFDAC registered',
                    'Effective wound cleansing',
                    'Range of pack sizes',
                    'Competitive pricing'
                ]
            },
            {
                heading: 'Service Value',
                icon: 'fa-hands-helping',
                items: [
                    'Reliable supply',
                    'Clinical education',
                    'Technical support',
                    'Responsive service',
                    'Local manufacturer advantage'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Tender Process',
        subtitle: 'Winning Formal Bids',
        columns: [
            {
                heading: 'Tender Stages',
                icon: 'fa-file-contract',
                items: [
                    'Tender announcement',
                    'Document collection',
                    'Submission preparation',
                    'Bid submission',
                    'Evaluation and award'
                ]
            },
            {
                heading: 'Success Factors',
                icon: 'fa-trophy',
                items: [
                    'Pre-tender positioning',
                    'Complete documentation',
                    'Competitive pricing',
                    'Meet all requirements',
                    'Follow up appropriately'
                ]
            }
        ],
        goldenRule: 'Tenders are won before they are announced',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Hospital Formulary Listing',
        subtitle: 'Getting on the Approved List',
        columns: [
            {
                heading: 'Formulary Process',
                icon: 'fa-list-check',
                items: [
                    'Submit product dossier',
                    'Pharmacy committee review',
                    'Clinical evaluation',
                    'Pricing negotiation',
                    'Approval and listing'
                ]
            },
            {
                heading: 'Dossier Contents',
                icon: 'fa-folder-open',
                items: [
                    'Product information',
                    'NAFDAC certificate',
                    'Clinical evidence',
                    'Pricing proposal',
                    'Company credentials'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Relationship Building in Hospitals',
        subtitle: 'Multi-Level Engagement',
        columns: [
            {
                heading: 'Clinical Level',
                icon: 'fa-stethoscope',
                items: [
                    'Regular ward visits',
                    'Product demonstrations',
                    'Clinical education sessions',
                    'Case study collection',
                    'Feedback gathering'
                ]
            },
            {
                heading: 'Administrative Level',
                icon: 'fa-building',
                items: [
                    'Scheduled meetings',
                    'Business reviews',
                    'Problem resolution',
                    'Contract discussions',
                    'Partnership development'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Overcoming Hospital Challenges',
        subtitle: 'Common Obstacles and Solutions',
        columns: [
            {
                heading: 'Common Challenges',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Budget constraints',
                    'Incumbent suppliers',
                    'Long decision cycles',
                    'Access difficulties',
                    'Payment delays'
                ]
            },
            {
                heading: 'Solutions',
                icon: 'fa-lightbulb',
                items: [
                    'Demonstrate value/savings',
                    'Differentiate on quality/service',
                    'Patience and persistence',
                    'Build multiple contacts',
                    'Clear payment terms'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Tracking and Reporting',
        subtitle: 'Managing Hospital Accounts',
        columns: [
            {
                heading: 'What to Track',
                icon: 'fa-chart-line',
                items: [
                    'Sales volume by hospital',
                    'Product mix',
                    'Call frequency',
                    'Pipeline opportunities',
                    'Competitive activity'
                ]
            },
            {
                heading: 'Reporting Requirements',
                icon: 'fa-file-lines',
                items: [
                    'Weekly/monthly reports',
                    'Tender status updates',
                    'Account plans',
                    'Opportunity tracking',
                    'Feedback reporting'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Hospital Sales Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-sitemap', title: 'Map the DMU', text: 'Know all decision influencers' },
            { icon: 'fa-handshake', title: 'Build Relationships', text: 'At clinical and administrative levels' },
            { icon: 'fa-clipboard-list', title: 'Plan Strategically', text: 'Account plans drive success' },
            { icon: 'fa-clock', title: 'Be Patient', text: 'Hospital sales cycles take time' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hospitalSalesSlides };
}
