// ===== PRESENTATION 2: BASIC WOUND CARE KNOWLEDGE =====
// For: All Staff | Category: General Training

const basicWoundCareSlides = [
    {
        id: 1,
        type: 'title',
        title: 'BASIC WOUND CARE KNOWLEDGE',
        subtitle: 'Understanding Wounds & Healing',
        tagline: 'Essential Knowledge for All Staff',
        content: [
            { icon: 'fa-bandage', text: 'Understand types of wounds' },
            { icon: 'fa-droplet', text: 'Learn wound cleaning principles' },
            { icon: 'fa-shield-virus', text: 'Know infection prevention basics' },
            { icon: 'fa-heart-pulse', text: 'Understand the healing process' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is a Wound?',
        subtitle: 'Basic Definition',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book-medical',
                items: [
                    'A wound is a break in the skin or tissue',
                    'Can be caused by injury, surgery, or disease',
                    'Disrupts normal skin barrier function',
                    'Requires healing process to close',
                    'Risk of infection until healed'
                ]
            },
            {
                heading: 'Skin Functions Disrupted',
                icon: 'fa-hand',
                items: [
                    'Protection from pathogens',
                    'Temperature regulation',
                    'Fluid balance',
                    'Sensation',
                    'Immune defense'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Types of Wounds: Acute Wounds',
        subtitle: 'Recent Injuries Expected to Heal Normally',
        columns: [
            {
                heading: 'Characteristics',
                icon: 'fa-bolt',
                items: [
                    'Recent onset (days to weeks)',
                    'Clear cause identified',
                    'Follows normal healing timeline',
                    'Expected to heal without complications',
                    'Usually in healthy individuals'
                ]
            },
            {
                heading: 'Examples',
                icon: 'fa-list',
                items: [
                    'Surgical incisions',
                    'Traumatic injuries (cuts, lacerations)',
                    'Abrasions and scrapes',
                    'Minor burns',
                    'Puncture wounds'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Types of Wounds: Chronic Wounds',
        subtitle: 'Wounds That Fail to Heal Normally',
        columns: [
            {
                heading: 'Characteristics',
                icon: 'fa-clock',
                items: [
                    'Present for weeks to months',
                    'Stalled in healing process',
                    'Often underlying health conditions',
                    'May require specialized treatment',
                    'Higher infection risk'
                ]
            },
            {
                heading: 'Examples',
                icon: 'fa-list',
                items: [
                    'Diabetic foot ulcers',
                    'Pressure ulcers (bedsores)',
                    'Venous leg ulcers',
                    'Arterial ulcers',
                    'Non-healing surgical wounds'
                ]
            }
        ],
        goldenRule: 'Chronic wounds require specialized care and patience',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Wound Classification by Depth',
        subtitle: 'Understanding Tissue Involvement',
        columns: [
            {
                heading: 'Superficial Wounds',
                icon: 'fa-layer-group',
                items: [
                    'Epidermis only (outer skin layer)',
                    'Minor abrasions and scratches',
                    'Heal quickly without scarring',
                    'Low infection risk',
                    'Minimal intervention needed'
                ]
            },
            {
                heading: 'Deep Wounds',
                icon: 'fa-arrow-down-long',
                items: [
                    'Extend into dermis or deeper',
                    'May involve fat, muscle, bone',
                    'Higher infection and complication risk',
                    'Require professional treatment',
                    'May result in scarring'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'The Wound Healing Process',
        subtitle: 'Four Phases of Normal Healing',
        columns: [
            {
                heading: 'Phase 1 & 2',
                icon: 'fa-play',
                items: [
                    'HEMOSTASIS (0-hours):',
                    '→ Blood clotting to stop bleeding',
                    '→ Platelet plug formation',
                    'INFLAMMATION (1-4 days):',
                    '→ Redness, swelling, warmth',
                    '→ White blood cells fight infection'
                ]
            },
            {
                heading: 'Phase 3 & 4',
                icon: 'fa-forward',
                items: [
                    'PROLIFERATION (4-21 days):',
                    '→ New tissue formation',
                    '→ Blood vessel growth',
                    '→ Wound contraction',
                    'REMODELING (21 days - 2 years):',
                    '→ Scar maturation',
                    '→ Tissue strengthening'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Principles of Wound Cleaning',
        subtitle: 'Why Clean Wounds Matter',
        columns: [
            {
                heading: 'Goals of Wound Cleaning',
                icon: 'fa-bullseye',
                items: [
                    'Remove debris and contaminants',
                    'Reduce bacterial load',
                    'Remove dead tissue',
                    'Prepare wound bed for healing',
                    'Prevent infection'
                ]
            },
            {
                heading: 'Key Principles',
                icon: 'fa-list-check',
                items: [
                    'Use appropriate cleaning solution',
                    'Be gentle to avoid tissue damage',
                    'Clean from center outward',
                    'Use adequate volume of solution',
                    'Document wound status'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Types of Wound Cleaning Solutions',
        subtitle: 'Understanding the Options',
        columns: [
            {
                heading: 'Saline Solutions',
                icon: 'fa-droplet',
                items: [
                    'Isotonic (0.9% sodium chloride)',
                    'Gentle and non-toxic to tissue',
                    'Gold standard for most wounds',
                    'No antimicrobial properties',
                    'Cost-effective'
                ]
            },
            {
                heading: 'Antimicrobial Solutions',
                icon: 'fa-shield-virus',
                items: [
                    'Contain active cleansing agents',
                    'Reduce bacterial contamination',
                    'Various formulations available',
                    'Indicated for infected/at-risk wounds',
                    'Our WOUND CLEX® products'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Signs of Wound Infection',
        subtitle: 'What to Look For',
        columns: [
            {
                heading: 'Local Signs',
                icon: 'fa-search',
                items: [
                    'Increased pain',
                    'Redness spreading from wound',
                    'Swelling and warmth',
                    'Purulent discharge (pus)',
                    'Delayed healing',
                    'Foul odor'
                ]
            },
            {
                heading: 'Systemic Signs',
                icon: 'fa-thermometer',
                items: [
                    'Fever',
                    'Chills',
                    'Fatigue',
                    'Elevated white blood cells',
                    'Signs require immediate medical attention'
                ]
            }
        ],
        goldenRule: 'Early detection of infection saves lives',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Infection Prevention',
        subtitle: 'Breaking the Chain of Infection',
        columns: [
            {
                heading: 'Prevention Strategies',
                icon: 'fa-shield-halved',
                items: [
                    'Proper wound cleaning technique',
                    'Appropriate wound dressings',
                    'Hand hygiene before and after',
                    'Aseptic/clean technique',
                    'Timely dressing changes'
                ]
            },
            {
                heading: 'Risk Factors',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Diabetes',
                    'Poor circulation',
                    'Immunosuppression',
                    'Malnutrition',
                    'Foreign bodies in wound',
                    'Delayed treatment'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Role of Wound Care Solutions in Healing',
        subtitle: 'How Our Products Help',
        columns: [
            {
                heading: 'Wound Cleaning Solutions',
                icon: 'fa-prescription-bottle',
                items: [
                    'Remove barriers to healing',
                    'Reduce bioburden',
                    'Maintain moist wound environment',
                    'Support natural healing process',
                    'Gentle on healthy tissue'
                ]
            },
            {
                heading: 'Clinical Benefits',
                icon: 'fa-chart-line',
                items: [
                    'Faster wound bed preparation',
                    'Reduced infection rates',
                    'Improved patient comfort',
                    'Support for all wound types',
                    'Evidence-based formulations'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Wound Care Best Practices',
        subtitle: 'International Standards',
        columns: [
            {
                heading: 'Assessment First',
                icon: 'fa-clipboard-check',
                items: [
                    'Document wound characteristics',
                    'Measure size and depth',
                    'Note tissue types present',
                    'Assess surrounding skin',
                    'Evaluate for infection'
                ]
            },
            {
                heading: 'Treatment Approach',
                icon: 'fa-hand-holding-medical',
                items: [
                    'Address underlying causes',
                    'Provide optimal wound environment',
                    'Select appropriate products',
                    'Monitor progress regularly',
                    'Adjust treatment as needed'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'conclusion',
        title: 'Wound Care Fundamentals',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-bandage', title: 'Know Wound Types', text: 'Acute vs chronic wounds need different approaches' },
            { icon: 'fa-droplet', title: 'Proper Cleaning', text: 'Foundation of infection prevention' },
            { icon: 'fa-shield-virus', title: 'Prevent Infection', text: 'Early detection and prevention saves lives' },
            { icon: 'fa-prescription-bottle', title: 'Right Products', text: 'Our solutions support the healing process' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { basicWoundCareSlides };
}
