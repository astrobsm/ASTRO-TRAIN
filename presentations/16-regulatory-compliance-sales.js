// ===== PRESENTATION 16: PHARMACEUTICAL REGULATORY COMPLIANCE FOR SALES =====
// For: Sales Staff | Category: Sales Training

const regulatoryComplianceSlides = [
    {
        id: 1,
        type: 'title',
        title: 'REGULATORY COMPLIANCE FOR SALES',
        subtitle: 'Selling Within the Rules',
        tagline: 'Compliant Sales Protect Everyone',
        content: [
            { icon: 'fa-gavel', text: 'Understand regulatory framework' },
            { icon: 'fa-file-contract', text: 'Know promotion rules' },
            { icon: 'fa-shield-halved', text: 'Avoid compliance pitfalls' },
            { icon: 'fa-scale-balanced', text: 'Sell ethically and legally' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why Regulatory Compliance Matters',
        subtitle: 'Consequences of Non-Compliance',
        columns: [
            {
                heading: 'Company Risks',
                icon: 'fa-building',
                items: [
                    'Regulatory sanctions',
                    'License suspension',
                    'Financial penalties',
                    'Reputation damage',
                    'Loss of market access'
                ]
            },
            {
                heading: 'Personal Risks',
                icon: 'fa-user',
                items: [
                    'Disciplinary action',
                    'Job loss',
                    'Personal liability',
                    'Professional reputation',
                    'Legal consequences'
                ]
            }
        ],
        goldenRule: 'Compliance is non-negotiable',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Regulatory Framework',
        subtitle: 'Key Regulatory Bodies and Laws',
        columns: [
            {
                heading: 'NAFDAC',
                icon: 'fa-building-columns',
                items: [
                    'National Agency for Food & Drug Administration',
                    'Product registration',
                    'Manufacturing licensing',
                    'Advertising approval',
                    'Post-market surveillance'
                ]
            },
            {
                heading: 'PCN',
                icon: 'fa-prescription-bottle-medical',
                items: [
                    'Pharmacists Council of Nigeria',
                    'Pharmacy practice regulation',
                    'Professional standards',
                    'Distribution licensing',
                    'Ethical guidelines'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Product Registration Requirements',
        subtitle: 'What Must Be Registered',
        columns: [
            {
                heading: 'Registration Basics',
                icon: 'fa-certificate',
                items: [
                    'All pharma products need NAFDAC registration',
                    'Unique registration number assigned',
                    'Validity period (usually 5 years)',
                    'Renewal required before expiry',
                    'Must be on product label'
                ]
            },
            {
                heading: 'Sales Implications',
                icon: 'fa-handshake',
                items: [
                    'Only sell registered products',
                    'Verify registration is current',
                    'Provide registration number when asked',
                    'Report counterfeit concerns',
                    'Know our product registrations'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Promotional Material Rules',
        subtitle: 'What Can and Cannot Be Used',
        columns: [
            {
                heading: 'Approved Materials',
                icon: 'fa-check-circle',
                items: [
                    'Company-approved materials only',
                    'Consistent with product registration',
                    'Balanced information',
                    'Include required warnings',
                    'Current and dated'
                ]
            },
            {
                heading: 'Prohibited',
                icon: 'fa-ban',
                items: [
                    'Self-created materials',
                    'Unapproved claims',
                    'Competitor disparagement',
                    'Off-label promotion',
                    'Misleading information'
                ]
            }
        ],
        goldenRule: 'Only use approved promotional materials',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Claims and Statements',
        subtitle: 'What You Can Say',
        columns: [
            {
                heading: 'Permitted Claims',
                icon: 'fa-check',
                items: [
                    'Approved indications only',
                    'Supported by evidence',
                    'Consistent with labeling',
                    'Fair and balanced',
                    'Truthful and accurate'
                ]
            },
            {
                heading: 'Not Permitted',
                icon: 'fa-times',
                items: [
                    'Unapproved indications',
                    'Exaggerated claims',
                    'Unsubstantiated statements',
                    'Guarantees of outcomes',
                    'Comparisons without data'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Off-Label Promotion',
        subtitle: 'Understanding the Boundaries',
        columns: [
            {
                heading: 'What is Off-Label?',
                icon: 'fa-question-circle',
                items: [
                    'Use outside approved indications',
                    'Different patient population',
                    'Different dosage/route',
                    'Doctors may prescribe off-label',
                    'But we cannot promote it'
                ]
            },
            {
                heading: 'Our Position',
                icon: 'fa-shield-halved',
                items: [
                    'Never suggest off-label use',
                    'Stick to approved indications',
                    'Refer medical questions appropriately',
                    'Report off-label inquiries',
                    'Protect yourself and company'
                ]
            }
        ],
        goldenRule: 'Promote only approved indications',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Interactions with HCPs',
        subtitle: 'Ethical Engagement Rules',
        columns: [
            {
                heading: 'Permitted Activities',
                icon: 'fa-handshake',
                items: [
                    'Educational presentations',
                    'Product information sharing',
                    'Samples per policy',
                    'Modest hospitality',
                    'Scientific discussions'
                ]
            },
            {
                heading: 'Prohibited Activities',
                icon: 'fa-ban',
                items: [
                    'Gifts above limits',
                    'Personal benefits',
                    'Cash or equivalents',
                    'Entertainment funding',
                    'Prescription incentives'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Sample Management',
        subtitle: 'Rules for Product Samples',
        columns: [
            {
                heading: 'Sample Guidelines',
                icon: 'fa-gift',
                items: [
                    'For HCP evaluation only',
                    'Limited quantities',
                    'Documented distribution',
                    'Proper storage maintained',
                    'Not for resale'
                ]
            },
            {
                heading: 'Your Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Follow sample policy',
                    'Keep accurate records',
                    'Obtain signatures',
                    'Store properly',
                    'Report discrepancies'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Adverse Event Reporting',
        subtitle: 'When Products Cause Problems',
        columns: [
            {
                heading: 'What is an Adverse Event?',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Unexpected negative effect',
                    'Injury or harm to patient',
                    'Product quality complaint',
                    'Lack of expected effect',
                    'Must be reported'
                ]
            },
            {
                heading: 'Your Responsibility',
                icon: 'fa-phone',
                items: [
                    'Listen carefully to reports',
                    'Document key information',
                    'Report to company immediately',
                    'Within 24 hours',
                    'Never dismiss concerns'
                ]
            }
        ],
        goldenRule: 'All adverse events must be reported',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Pharmacovigilance',
        subtitle: 'Safety Monitoring System',
        columns: [
            {
                heading: 'Information to Collect',
                icon: 'fa-clipboard-list',
                items: [
                    'Reporter details',
                    'Patient details (initials, age)',
                    'Product involved',
                    'Description of event',
                    'Outcome if known'
                ]
            },
            {
                heading: 'Internal Process',
                icon: 'fa-arrows-rotate',
                items: [
                    'Report to QA/Medical',
                    'Complete AE form',
                    'Regulatory notification',
                    'Follow-up if needed',
                    'Confidentiality maintained'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Record Keeping',
        subtitle: 'Documentation Requirements',
        columns: [
            {
                heading: 'What to Document',
                icon: 'fa-file-lines',
                items: [
                    'Customer interactions',
                    'Materials distributed',
                    'Samples provided',
                    'Commitments made',
                    'Any issues or complaints'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-star',
                items: [
                    'Record promptly',
                    'Be accurate and complete',
                    'Maintain confidentiality',
                    'Retain per policy',
                    'Available for audit'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Compliance Scenarios',
        subtitle: 'What Would You Do?',
        columns: [
            {
                heading: 'Scenario Examples',
                icon: 'fa-question',
                items: [
                    'Doctor asks about off-label use',
                    'Competitor makes false claims',
                    'Customer reports adverse event',
                    'Request for improper gift',
                    'Pressure to meet targets'
                ]
            },
            {
                heading: 'Correct Response',
                icon: 'fa-check',
                items: [
                    'Decline and refer appropriately',
                    'Don\'t engage, report internally',
                    'Document and report immediately',
                    'Politely decline, explain policy',
                    'Never compromise compliance'
                ]
            }
        ],
        goldenRule: 'When in doubt, ask your manager',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Regulatory Compliance Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-file-contract', title: 'Know the Rules', text: 'Understand regulations that apply' },
            { icon: 'fa-tag', title: 'Use Approved Materials', text: 'Only company-approved content' },
            { icon: 'fa-shield-halved', title: 'Stay On-Label', text: 'Promote only approved indications' },
            { icon: 'fa-phone', title: 'Report Events', text: 'All adverse events within 24 hours' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { regulatoryComplianceSlides };
}
