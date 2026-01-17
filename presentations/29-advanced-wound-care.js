// ===== PRESENTATION 29: ADVANCED WOUND CARE SCIENCE =====
// For: Continuing Professional Development | Category: CPD Training

const advancedWoundCareSlides = [
    {
        id: 1,
        type: 'title',
        title: 'ADVANCED WOUND CARE SCIENCE',
        subtitle: 'Deep Understanding for Better Healing',
        tagline: 'Science Behind the Solution',
        content: [
            { icon: 'fa-microscope', text: 'Understand wound biology' },
            { icon: 'fa-dna', text: 'Healing mechanisms' },
            { icon: 'fa-flask', text: 'Evidence-based treatments' },
            { icon: 'fa-lightbulb', text: 'Advanced applications' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Wound Healing Physiology',
        subtitle: 'The Four Phases',
        columns: [
            {
                heading: 'Healing Phases',
                icon: 'fa-stairs',
                items: [
                    '1. HEMOSTASIS (minutes)',
                    '   → Clot formation, bleeding stops',
                    '2. INFLAMMATION (days 1-4)',
                    '   → Immune response, debris removal',
                    '3. PROLIFERATION (days 4-21)',
                    '   → New tissue formation',
                    '4. REMODELING (weeks-years)',
                    '   → Tissue maturation'
                ]
            },
            {
                heading: 'Key Cellular Players',
                icon: 'fa-circle-nodes',
                items: [
                    'Platelets: Clotting initiation',
                    'Neutrophils: Infection defense',
                    'Macrophages: Cleanup and signaling',
                    'Fibroblasts: Collagen production',
                    'Keratinocytes: Re-epithelialization',
                    'Endothelial cells: Angiogenesis'
                ]
            }
        ],
        goldenRule: 'Healing is a cascade of overlapping events',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Wound Bed Preparation',
        subtitle: 'TIME Framework',
        columns: [
            {
                heading: 'TIME Principles',
                icon: 'fa-clock',
                items: [
                    'T - Tissue (non-viable or deficient)',
                    '   → Debridement strategies',
                    'I - Infection or Inflammation',
                    '   → Antimicrobial therapy',
                    'M - Moisture (imbalance)',
                    '   → Optimal dressings',
                    'E - Edge (non-advancing)',
                    '   → Advanced therapies'
                ]
            },
            {
                heading: 'Assessment Goals',
                icon: 'fa-bullseye',
                items: [
                    'Identify barriers to healing',
                    'Address each component',
                    'Create optimal wound environment',
                    'Promote granulation tissue',
                    'Facilitate epithelialization'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Chronic Wound Pathophysiology',
        subtitle: 'Why Some Wounds Don\'t Heal',
        columns: [
            {
                heading: 'Chronic Wound Characteristics',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Stalled in inflammatory phase',
                    'High protease activity',
                    'Growth factor deficiency',
                    'Senescent cells',
                    'Biofilm presence'
                ]
            },
            {
                heading: 'Contributing Factors',
                icon: 'fa-list',
                items: [
                    'Diabetes and hyperglycemia',
                    'Vascular disease',
                    'Poor nutrition',
                    'Immunosuppression',
                    'Repeated trauma'
                ]
            }
        ],
        goldenRule: 'Treat the patient, not just the wound',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Biofilm in Wounds',
        subtitle: 'The Hidden Enemy',
        columns: [
            {
                heading: 'What is Biofilm?',
                icon: 'fa-bacteria',
                items: [
                    'Microbial communities',
                    'Protective matrix (EPS)',
                    'Antibiotic resistance (1000x)',
                    'Present in ~80% chronic wounds',
                    'Difficult to detect clinically'
                ]
            },
            {
                heading: 'Biofilm Management',
                icon: 'fa-shield',
                items: [
                    'Mechanical disruption (debridement)',
                    'Antiseptic agents',
                    'Anti-biofilm dressings',
                    'Combination approaches',
                    'Repeated treatments needed'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Antiseptic Science',
        subtitle: 'Wound CLEX® Mechanism',
        columns: [
            {
                heading: 'Chlorhexidine Action',
                icon: 'fa-flask',
                items: [
                    'Cationic biguanide',
                    'Binds to cell membranes',
                    'Disrupts membrane integrity',
                    'Leakage of cell contents',
                    'Residual activity on skin'
                ]
            },
            {
                heading: 'Clinical Benefits',
                icon: 'fa-star',
                items: [
                    'Broad spectrum activity',
                    'Gram +ve and -ve bacteria',
                    'Rapid onset of action',
                    'Sustained effect (substantivity)',
                    'Low tissue toxicity'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Cetrimide in Wound Care',
        subtitle: 'Complementary Antiseptic',
        columns: [
            {
                heading: 'Cetrimide Properties',
                icon: 'fa-droplet',
                items: [
                    'Quaternary ammonium compound',
                    'Cationic surfactant',
                    'Membrane disruption',
                    'Denaturation of proteins',
                    'Detergent action'
                ]
            },
            {
                heading: 'Synergy with Chlorhexidine',
                icon: 'fa-handshake',
                items: [
                    'Complementary mechanisms',
                    'Enhanced spectrum',
                    'Improved tissue penetration',
                    'Cleaning and antiseptic effect',
                    'Established combination'
                ]
            }
        ],
        goldenRule: 'Combination antiseptics provide broader coverage',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Wound Types and Management',
        subtitle: 'Type-Specific Approaches',
        columns: [
            {
                heading: 'Acute Wounds',
                icon: 'fa-bolt',
                items: [
                    'Surgical wounds',
                    'Traumatic injuries',
                    'Burns',
                    'Usually follow normal healing',
                    'Focus on infection prevention'
                ]
            },
            {
                heading: 'Chronic Wounds',
                icon: 'fa-clock',
                items: [
                    'Diabetic foot ulcers',
                    'Venous leg ulcers',
                    'Pressure injuries',
                    'Arterial ulcers',
                    'Require comprehensive approach'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Diabetic Foot Ulcers',
        subtitle: 'Special Considerations',
        columns: [
            {
                heading: 'Pathophysiology',
                icon: 'fa-foot',
                items: [
                    'Peripheral neuropathy',
                    'Vascular disease',
                    'Impaired immunity',
                    'Poor glycemic control',
                    'Repetitive trauma'
                ]
            },
            {
                heading: 'Management Principles',
                icon: 'fa-clipboard-list',
                items: [
                    'Glycemic control',
                    'Offloading pressure',
                    'Infection management',
                    'Wound care',
                    'Vascular assessment'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Evidence-Based Practice',
        subtitle: 'Clinical Evidence for Wound Care',
        columns: [
            {
                heading: 'Levels of Evidence',
                icon: 'fa-layer-group',
                items: [
                    'Level I: Meta-analyses/RCTs',
                    'Level II: Well-designed trials',
                    'Level III: Observational studies',
                    'Level IV: Expert opinion',
                    'Higher levels preferred'
                ]
            },
            {
                heading: 'Applying Evidence',
                icon: 'fa-check',
                items: [
                    'Review current literature',
                    'Assess quality of evidence',
                    'Consider patient factors',
                    'Apply clinical judgment',
                    'Monitor outcomes'
                ]
            }
        ],
        goldenRule: 'Best practice combines evidence with clinical expertise',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Advanced Wound Therapies',
        subtitle: 'Beyond Standard Care',
        columns: [
            {
                heading: 'Advanced Modalities',
                icon: 'fa-wand-magic-sparkles',
                items: [
                    'Negative pressure wound therapy',
                    'Hyperbaric oxygen',
                    'Growth factors',
                    'Skin substitutes',
                    'Cellular therapy'
                ]
            },
            {
                heading: 'When to Consider',
                icon: 'fa-question-circle',
                items: [
                    'Standard care insufficient',
                    'Stalled wound healing',
                    'Complex wound characteristics',
                    'Patient factors addressed',
                    'Resources available'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Wound Assessment Tools',
        subtitle: 'Measuring Progress',
        columns: [
            {
                heading: 'Assessment Parameters',
                icon: 'fa-ruler',
                items: [
                    'Size (length × width × depth)',
                    'Tissue type (%)',
                    'Exudate (amount, type)',
                    'Periwound condition',
                    'Pain level'
                ]
            },
            {
                heading: 'Documentation Tools',
                icon: 'fa-file-lines',
                items: [
                    'Wound measurement rulers',
                    'Photography (with ruler)',
                    'Standardized assessment forms',
                    'Digital tracking systems',
                    'Regular reassessment'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Nutrition and Wound Healing',
        subtitle: 'Fueling Repair',
        columns: [
            {
                heading: 'Key Nutrients',
                icon: 'fa-utensils',
                items: [
                    'Protein: Tissue repair',
                    'Vitamin C: Collagen synthesis',
                    'Zinc: Immune function',
                    'Vitamin A: Epithelialization',
                    'Calories: Energy for healing'
                ]
            },
            {
                heading: 'Nutritional Support',
                icon: 'fa-clipboard-check',
                items: [
                    'Nutritional screening',
                    'Address deficiencies',
                    'Adequate protein intake',
                    'Hydration',
                    'Consider supplements'
                ]
            }
        ],
        goldenRule: 'You can\'t build new tissue without building blocks',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Advanced Wound Care Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-microscope', title: 'Understand Biology', text: 'Know the healing process' },
            { icon: 'fa-clock', title: 'Use TIME', text: 'Systematic wound bed preparation' },
            { icon: 'fa-user', title: 'Treat Holistically', text: 'Patient factors matter' },
            { icon: 'fa-book', title: 'Stay Updated', text: 'Evidence-based practice' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { advancedWoundCareSlides };
}
