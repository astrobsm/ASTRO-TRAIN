// ===== PRESENTATION 1: COMPANY ORIENTATION & ETHICAL CONDUCT =====
// For: All Staff | Category: General Training

const companyOrientationSlides = [
    {
        id: 1,
        type: 'title',
        title: 'COMPANY ORIENTATION',
        subtitle: 'Ethical Conduct & Professional Standards',
        tagline: 'Building Excellence Through Integrity',
        content: [
            { icon: 'fa-building', text: 'Understand company mission and values' },
            { icon: 'fa-handshake', text: 'Learn professional conduct standards' },
            { icon: 'fa-shield-halved', text: 'Master confidentiality requirements' },
            { icon: 'fa-scale-balanced', text: 'Commit to ethical business practices' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Our Company Mission',
        subtitle: 'Why We Exist',
        columns: [
            {
                heading: 'Mission Statement',
                icon: 'fa-bullseye',
                items: [
                    'Provide high-quality wound care solutions',
                    'Support healthcare professionals worldwide',
                    'Improve patient outcomes through innovation',
                    'Maintain highest manufacturing standards',
                    'Be a trusted partner to hospitals and clinics'
                ]
            },
            {
                heading: 'Our Vision',
                icon: 'fa-eye',
                items: [
                    'Global leader in wound care solutions',
                    'Setting industry standards for quality',
                    'Recognized for ethical business practices',
                    'Continuous innovation and improvement',
                    'Sustainable and responsible growth'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Core Values',
        subtitle: 'The Principles That Guide Us',
        columns: [
            {
                heading: 'Patient-Centered Values',
                icon: 'fa-heart',
                items: [
                    'SAFETY: Patient safety above all else',
                    'QUALITY: Zero compromise on product quality',
                    'INTEGRITY: Honest in all our dealings',
                    'RESPECT: Value every stakeholder'
                ]
            },
            {
                heading: 'Operational Values',
                icon: 'fa-gears',
                items: [
                    'EXCELLENCE: Strive for continuous improvement',
                    'ACCOUNTABILITY: Own our responsibilities',
                    'TEAMWORK: Collaborate for success',
                    'COMPLIANCE: Follow all regulations'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Quality Policy',
        subtitle: 'Our Commitment to Excellence',
        columns: [
            {
                heading: 'Quality Commitments',
                icon: 'fa-award',
                items: [
                    'Meet or exceed regulatory requirements',
                    'Comply with GMP/GDP standards',
                    'Continuous quality improvement',
                    'Customer satisfaction focus',
                    'Zero tolerance for defects'
                ]
            },
            {
                heading: 'Your Role in Quality',
                icon: 'fa-user-check',
                items: [
                    'Follow all procedures exactly',
                    'Report deviations immediately',
                    'Suggest improvements',
                    'Take pride in your work',
                    'Quality is everyone\'s responsibility'
                ]
            }
        ],
        goldenRule: 'Quality is not an act, it is a habit',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Professional Conduct with Healthcare Institutions',
        subtitle: 'Representing the Company',
        columns: [
            {
                heading: 'Professional Standards',
                icon: 'fa-user-tie',
                items: [
                    'Always be truthful and accurate',
                    'Respect healthcare professionals\' time',
                    'Dress appropriately for clinical settings',
                    'Maintain professional boundaries',
                    'Never make unauthorized claims'
                ]
            },
            {
                heading: 'Communication Guidelines',
                icon: 'fa-comments',
                items: [
                    'Use only approved promotional materials',
                    'Respond promptly to inquiries',
                    'Document all significant interactions',
                    'Escalate concerns appropriately',
                    'Maintain consistent messaging'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Confidentiality Requirements',
        subtitle: 'Protecting Sensitive Information',
        columns: [
            {
                heading: 'What is Confidential',
                icon: 'fa-lock',
                items: [
                    'Manufacturing processes and formulas',
                    'Customer lists and pricing',
                    'Business strategies and plans',
                    'Employee personal information',
                    'Financial data and projections',
                    'Research and development data'
                ]
            },
            {
                heading: 'Your Obligations',
                icon: 'fa-user-shield',
                items: [
                    'Never share confidential information',
                    'Secure documents and devices',
                    'Use strong passwords',
                    'Report suspected breaches',
                    'Obligations continue after employment'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Data Protection & Privacy',
        subtitle: 'International Standards Compliance',
        columns: [
            {
                heading: 'Data Protection Principles',
                icon: 'fa-database',
                items: [
                    'Collect only necessary data',
                    'Use data only for stated purposes',
                    'Keep data accurate and updated',
                    'Retain only as long as needed',
                    'Protect data with appropriate security'
                ]
            },
            {
                heading: 'Privacy Regulations',
                icon: 'fa-globe',
                items: [
                    'GDPR (European Union)',
                    'HIPAA (Healthcare - US)',
                    'Local data protection laws',
                    'Industry-specific requirements',
                    'Customer consent requirements'
                ]
            }
        ],
        goldenRule: 'When in doubt about data sharing, DON\'T',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Anti-Bribery & Corruption',
        subtitle: 'Zero Tolerance Policy',
        columns: [
            {
                heading: 'What Constitutes Bribery',
                icon: 'fa-ban',
                items: [
                    'Cash payments to influence decisions',
                    'Excessive gifts to officials',
                    'Lavish entertainment',
                    'Kickbacks or secret commissions',
                    'Facilitation payments',
                    'Donations to gain advantage'
                ]
            },
            {
                heading: 'Our Commitment',
                icon: 'fa-shield-halved',
                items: [
                    'Never offer bribes to anyone',
                    'Never accept improper payments',
                    'Report all suspicious requests',
                    'Keep accurate financial records',
                    'Comply with FCPA, UK Bribery Act, local laws'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Ethical Sales Conduct',
        subtitle: 'Integrity in Healthcare Sales',
        columns: [
            {
                heading: 'Ethical Selling Principles',
                icon: 'fa-handshake',
                items: [
                    'Provide accurate product information',
                    'Never disparage competitors unfairly',
                    'Respect customer decision-making',
                    'Honor all commitments made',
                    'Compete fairly and legally'
                ]
            },
            {
                heading: 'Prohibited Practices',
                icon: 'fa-times-circle',
                items: [
                    'Off-label promotion',
                    'Misleading claims about efficacy',
                    'Inducements to prescribe/purchase',
                    'Inappropriate gifts to HCPs',
                    'Falsifying sales reports'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Gifts & Entertainment Policy',
        subtitle: 'Appropriate Business Courtesies',
        columns: [
            {
                heading: 'Acceptable',
                icon: 'fa-check-circle',
                items: [
                    'Modest educational materials',
                    'Reasonable business meals',
                    'Items under $50 value',
                    'Branded promotional items',
                    'Conference registration (educational)'
                ]
            },
            {
                heading: 'Not Acceptable',
                icon: 'fa-times-circle',
                items: [
                    'Cash or cash equivalents',
                    'Personal gifts to HCPs',
                    'Entertainment without business purpose',
                    'Travel for non-business purposes',
                    'Gifts during tender processes'
                ]
            }
        ],
        goldenRule: 'If it feels wrong, it probably is - ASK FIRST',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Conflicts of Interest',
        subtitle: 'Transparency and Disclosure',
        columns: [
            {
                heading: 'Examples of Conflicts',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Personal relationships with suppliers',
                    'Outside business interests',
                    'Family members at competitors',
                    'Financial interests in customers',
                    'Second jobs in healthcare'
                ]
            },
            {
                heading: 'What To Do',
                icon: 'fa-clipboard-check',
                items: [
                    'Disclose all potential conflicts',
                    'Complete annual disclosure forms',
                    'Seek guidance when uncertain',
                    'Recuse from conflicted decisions',
                    'Update disclosures as situations change'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Reporting Concerns',
        subtitle: 'Speaking Up is Protected',
        columns: [
            {
                heading: 'How to Report',
                icon: 'fa-phone',
                items: [
                    'Direct supervisor',
                    'Human Resources',
                    'Compliance Officer',
                    'Anonymous hotline',
                    'Written confidential report'
                ]
            },
            {
                heading: 'Whistleblower Protection',
                icon: 'fa-shield-halved',
                items: [
                    'No retaliation for good faith reports',
                    'Confidentiality protected',
                    'Independent investigation',
                    'Legal protection under law',
                    'Management accountability'
                ]
            }
        ],
        goldenRule: 'See something wrong? Say something. You are protected.',
        image: null
    },
    {
        id: 13,
        type: 'conclusion',
        title: 'Your Ethical Commitment',
        subtitle: 'Integrity in Everything We Do',
        conclusionItems: [
            { icon: 'fa-building', title: 'Mission-Driven', text: 'Align actions with company values' },
            { icon: 'fa-lock', title: 'Confidentiality', text: 'Protect all sensitive information' },
            { icon: 'fa-scale-balanced', title: 'Ethical Conduct', text: 'Zero tolerance for bribery or corruption' },
            { icon: 'fa-phone', title: 'Speak Up', text: 'Report concerns without fear' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { companyOrientationSlides };
}
