// ===== PRESENTATION 3: PRODUCT KNOWLEDGE & INDICATIONS =====
// For: All Staff | Category: General Training

const productKnowledgeSlides = [
    {
        id: 1,
        type: 'title',
        title: 'PRODUCT KNOWLEDGE & INDICATIONS',
        subtitle: 'WOUND CLEX® Product Range',
        tagline: 'Know Our Products, Serve Better',
        content: [
            { icon: 'fa-flask', text: 'Understand product formulations' },
            { icon: 'fa-prescription-bottle-medical', text: 'Learn clinical indications' },
            { icon: 'fa-hospital', text: 'Know application settings' },
            { icon: 'fa-award', text: 'Communicate value effectively' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'WOUND CLEX® Brand Overview',
        subtitle: 'Our Flagship Product Line',
        columns: [
            {
                heading: 'Brand Identity',
                icon: 'fa-star',
                items: [
                    'Premium wound cleansing solutions',
                    'Manufactured to GMP standards',
                    'Scientifically formulated',
                    'Nigerian & African market leader',
                    'Trusted by healthcare professionals'
                ]
            },
            {
                heading: 'Market Position',
                icon: 'fa-chart-line',
                items: [
                    'Filling gap in quality wound care',
                    'Alternative to imported products',
                    'Affordable excellence',
                    'Growing hospital acceptance',
                    'Expanding distribution network'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'WOUND CLEX® Products Overview',
        subtitle: 'Complete Product Range',
        columns: [
            {
                heading: 'Current Products',
                icon: 'fa-boxes-stacked',
                items: [
                    'WOUND CLEX® Solution 100ml',
                    'WOUND CLEX® Solution 250ml',
                    'WOUND CLEX® Solution 500ml',
                    'WOUND CLEX® Solution 1000ml',
                    'Various pack sizes for different needs'
                ]
            },
            {
                heading: 'Product Characteristics',
                icon: 'fa-list-check',
                items: [
                    'Sterile liquid solution',
                    'Ready-to-use formulation',
                    'Long shelf life',
                    'Convenient packaging',
                    'Clear labeling'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Active Ingredients & Mechanism',
        subtitle: 'How WOUND CLEX® Works',
        columns: [
            {
                heading: 'Key Ingredients',
                icon: 'fa-flask',
                items: [
                    'Antimicrobial active agents',
                    'Surfactant cleansing components',
                    'Buffered solution base',
                    'Purified water vehicle',
                    'Preservation system'
                ]
            },
            {
                heading: 'Mechanism of Action',
                icon: 'fa-gears',
                items: [
                    'Disrupts bacterial cell membranes',
                    'Lifts debris from wound bed',
                    'Reduces biofilm formation',
                    'Maintains physiological pH',
                    'Gentle on healthy tissue'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Clinical Indications',
        subtitle: 'When to Use WOUND CLEX®',
        columns: [
            {
                heading: 'Primary Indications',
                icon: 'fa-check-circle',
                items: [
                    'Acute traumatic wounds',
                    'Surgical wound care',
                    'Chronic wound management',
                    'Infected wound cleansing',
                    'Burn wound irrigation'
                ]
            },
            {
                heading: 'Specific Applications',
                icon: 'fa-hospital',
                items: [
                    'Diabetic foot ulcers',
                    'Pressure ulcers',
                    'Venous leg ulcers',
                    'Post-operative wounds',
                    'Minor cuts and abrasions'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Usage Guidelines',
        subtitle: 'Proper Application Technique',
        columns: [
            {
                heading: 'Preparation',
                icon: 'fa-hand-sparkles',
                items: [
                    'Perform hand hygiene',
                    'Gather supplies needed',
                    'Position patient comfortably',
                    'Explain procedure to patient',
                    'Remove old dressing carefully'
                ]
            },
            {
                heading: 'Application',
                icon: 'fa-droplet',
                items: [
                    'Pour or spray onto wound',
                    'Allow solution to contact wound bed',
                    'Gently irrigate if needed',
                    'Pat dry surrounding skin',
                    'Apply appropriate dressing'
                ]
            }
        ],
        goldenRule: 'Always follow aseptic technique',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Frequency of Use',
        subtitle: 'Treatment Protocols',
        columns: [
            {
                heading: 'Acute Wounds',
                icon: 'fa-bolt',
                items: [
                    'Initial debridement cleansing',
                    'Daily dressing changes',
                    'As directed by clinician',
                    'Until wound shows improvement',
                    'Typically 1-2 weeks'
                ]
            },
            {
                heading: 'Chronic Wounds',
                icon: 'fa-clock',
                items: [
                    'Part of regular dressing routine',
                    'Each dressing change (2-7 days)',
                    'Continuous use for biofilm control',
                    'Long-term management',
                    'As part of treatment protocol'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Healthcare Settings',
        subtitle: 'Where WOUND CLEX® is Used',
        columns: [
            {
                heading: 'Hospital Settings',
                icon: 'fa-hospital',
                items: [
                    'Emergency departments',
                    'Surgical wards',
                    'ICU/Critical care',
                    'Outpatient clinics',
                    'Wound care centers'
                ]
            },
            {
                heading: 'Other Settings',
                icon: 'fa-house-medical',
                items: [
                    'Primary care clinics',
                    'Community health centers',
                    'Home healthcare',
                    'Long-term care facilities',
                    'Military/field hospitals'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Target Healthcare Professionals',
        subtitle: 'Who Uses Our Products',
        columns: [
            {
                heading: 'Medical Professionals',
                icon: 'fa-user-doctor',
                items: [
                    'Surgeons',
                    'Emergency physicians',
                    'General practitioners',
                    'Wound care specialists',
                    'Dermatologists'
                ]
            },
            {
                heading: 'Nursing & Allied Health',
                icon: 'fa-user-nurse',
                items: [
                    'Wound care nurses',
                    'Theatre nurses',
                    'Community nurses',
                    'Podiatrists',
                    'Physical therapists'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Product Storage & Handling',
        subtitle: 'Maintaining Product Quality',
        columns: [
            {
                heading: 'Storage Requirements',
                icon: 'fa-warehouse',
                items: [
                    'Store at room temperature',
                    'Protect from direct sunlight',
                    'Keep in original packaging',
                    'Maintain in dry conditions',
                    'Check expiry dates regularly'
                ]
            },
            {
                heading: 'Handling Guidelines',
                icon: 'fa-hand-holding-medical',
                items: [
                    'Do not dilute before use',
                    'Discard if contaminated',
                    'Single-patient use recommended',
                    'Do not use past expiry',
                    'Report any defects'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Safety Profile',
        subtitle: 'Contraindications & Precautions',
        columns: [
            {
                heading: 'Generally Safe For',
                icon: 'fa-check',
                items: [
                    'All wound types',
                    'Pediatric patients',
                    'Elderly patients',
                    'Diabetic patients',
                    'Immunocompromised patients'
                ]
            },
            {
                heading: 'Precautions',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Known allergy to ingredients',
                    'Avoid contact with eyes',
                    'External use only',
                    'Not for drinking',
                    'Consult doctor if reaction occurs'
                ]
            }
        ],
        goldenRule: 'When in doubt, consult healthcare provider',
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Competitive Advantages',
        subtitle: 'Why Choose WOUND CLEX®',
        columns: [
            {
                heading: 'Product Benefits',
                icon: 'fa-star',
                items: [
                    'GMP-manufactured quality',
                    'Locally produced, globally standard',
                    'Cost-effective pricing',
                    'Consistent availability',
                    'Reliable supply chain'
                ]
            },
            {
                heading: 'Service Benefits',
                icon: 'fa-handshake',
                items: [
                    'Clinical education support',
                    'Responsive customer service',
                    'Technical information available',
                    'Strong regulatory compliance',
                    'Ongoing product development'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Key Messages for Communication',
        subtitle: 'What Every Staff Should Know',
        columns: [
            {
                heading: 'Core Messages',
                icon: 'fa-bullhorn',
                items: [
                    '"Quality wound care, made in Nigeria"',
                    '"GMP-certified manufacturing"',
                    '"Safe and effective for all wounds"',
                    '"Trusted by healthcare professionals"',
                    '"Affordable excellence in wound care"'
                ]
            },
            {
                heading: 'Evidence Points',
                icon: 'fa-clipboard-check',
                items: [
                    'NAFDAC approved',
                    'GMP compliant facility',
                    'Quality tested products',
                    'Growing clinical acceptance',
                    'Positive user feedback'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Product Knowledge Summary',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-flask', title: 'Know Our Products', text: 'Understand formulations and pack sizes' },
            { icon: 'fa-hospital', title: 'Know Indications', text: 'Acute, chronic, and surgical wounds' },
            { icon: 'fa-shield-halved', title: 'Safety First', text: 'Follow storage and usage guidelines' },
            { icon: 'fa-bullhorn', title: 'Communicate Value', text: 'Share quality and benefits confidently' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productKnowledgeSlides };
}
