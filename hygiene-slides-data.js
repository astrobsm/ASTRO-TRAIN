// ===== HYGIENE & STERILITY PROTOCOL - SLIDES DATA =====
// Comprehensive training on hygiene and maintaining sterility during production

const hygieneSlidesData = [
    // SLIDE 1 - Title
    {
        id: 1,
        type: 'title',
        title: 'HYGIENE & STERILITY PROTOCOL',
        subtitle: 'Production Environment Standards',
        tagline: 'Maintaining Excellence in Cleanliness',
        content: [
            { icon: 'fa-hand-sparkles', text: 'Master personal hygiene requirements' },
            { icon: 'fa-shield-virus', text: 'Understand contamination prevention' },
            { icon: 'fa-broom', text: 'Learn cleaning & sanitization procedures' },
            { icon: 'fa-microscope', text: 'Implement sterility monitoring' }
        ],
        image: null
    },
    // SLIDE 2 - Why Hygiene Matters
    {
        id: 2,
        type: 'standard',
        title: 'Why Hygiene Matters',
        subtitle: 'The Foundation of Quality Production',
        columns: [
            {
                heading: 'Patient Safety Impact',
                icon: 'fa-heartbeat',
                items: [
                    'Contaminated products can cause infections',
                    'Patients with wounds are vulnerable',
                    'Medical products must be sterile/clean',
                    'One mistake can harm many patients'
                ]
            },
            {
                heading: 'Business Impact',
                icon: 'fa-building',
                items: [
                    'Product recalls damage reputation',
                    'Regulatory penalties are severe',
                    'Loss of hospital trust',
                    'Legal liability concerns'
                ]
            }
        ],
        image: null
    },
    // SLIDE 3 - Types of Contamination
    {
        id: 3,
        type: 'standard',
        title: 'Types of Contamination',
        subtitle: 'Know Your Enemy',
        columns: [
            {
                heading: 'Microbial Contamination',
                icon: 'fa-bacterium',
                items: [
                    'Bacteria (E. coli, Staphylococcus)',
                    'Fungi and molds',
                    'Yeasts',
                    'Viruses'
                ]
            },
            {
                heading: 'Physical Contamination',
                icon: 'fa-dust',
                items: [
                    'Dust and particles',
                    'Hair and skin flakes',
                    'Fibers from clothing',
                    'Metal fragments',
                    'Glass particles'
                ]
            },
            {
                heading: 'Chemical Contamination',
                icon: 'fa-flask',
                items: [
                    'Cleaning agent residues',
                    'Lubricants from equipment',
                    'Cross-contamination from other products',
                    'Environmental pollutants'
                ]
            }
        ],
        image: null
    },
    // SLIDE 4 - Sources of Contamination
    {
        id: 4,
        type: 'standard',
        title: 'Sources of Contamination',
        subtitle: 'Where Contamination Comes From',
        columns: [
            {
                heading: 'Personnel (Primary Source)',
                icon: 'fa-user',
                items: [
                    'Skin cells shed constantly (30,000-40,000/minute)',
                    'Hair and hair follicles',
                    'Respiratory droplets',
                    'Hand contact',
                    'Clothing and shoes'
                ]
            },
            {
                heading: 'Environment & Equipment',
                icon: 'fa-industry',
                items: [
                    'Air particles and dust',
                    'Water quality issues',
                    'Unclean equipment surfaces',
                    'Raw material contamination',
                    'Packaging materials'
                ]
            }
        ],
        goldenRule: 'People are the #1 source of contamination in production areas',
        image: null
    },
    // SLIDE 5 - Clean Room Classification
    {
        id: 5,
        type: 'standard',
        title: 'Production Area Classification',
        subtitle: 'Understanding Cleanliness Zones',
        columns: [
            {
                heading: 'Zone Types',
                icon: 'fa-layer-group',
                items: [
                    'Grade A: Highest risk operations (aseptic filling)',
                    'Grade B: Background for Grade A zones',
                    'Grade C: Less critical manufacturing steps',
                    'Grade D: General production areas'
                ]
            },
            {
                heading: 'Zone Controls',
                icon: 'fa-lock',
                items: [
                    'Air filtration (HEPA filters)',
                    'Positive pressure differentials',
                    'Temperature and humidity control',
                    'Personnel restrictions',
                    'Gowning requirements increase with grade'
                ]
            }
        ],
        image: null
    },
    // SLIDE 6 - Personal Hygiene Requirements
    {
        id: 6,
        type: 'standard',
        title: 'Personal Hygiene Requirements',
        subtitle: 'Before Entering Production',
        columns: [
            {
                heading: 'Daily Requirements',
                icon: 'fa-shower',
                items: [
                    'Shower/bathe before work',
                    'Clean, trimmed fingernails',
                    'No nail polish or artificial nails',
                    'No jewelry (rings, watches, earrings)',
                    'No makeup or strong perfumes'
                ]
            },
            {
                heading: 'Health Status',
                icon: 'fa-notes-medical',
                items: [
                    'Report any illness immediately',
                    'No entry with colds, flu, or infections',
                    'Open wounds must be covered and reported',
                    'Skin conditions require clearance',
                    'Regular health screenings required'
                ]
            }
        ],
        image: null
    },
    // SLIDE 7 - Hand Hygiene
    {
        id: 7,
        type: 'standard',
        title: 'Hand Hygiene Protocol',
        subtitle: 'The Most Important Hygiene Practice',
        columns: [
            {
                heading: 'When to Wash Hands',
                icon: 'fa-hand-holding-water',
                items: [
                    'Before entering production area',
                    'After using the restroom',
                    'After touching face, hair, or body',
                    'After handling waste or contaminated items',
                    'After breaks or eating',
                    'After sneezing or coughing',
                    'Before and after gloving'
                ]
            },
            {
                heading: 'Proper Hand Washing Steps',
                icon: 'fa-hands-wash',
                items: [
                    '1. Wet hands with clean water',
                    '2. Apply approved soap/sanitizer',
                    '3. Scrub all surfaces for 20-30 seconds',
                    '4. Clean between fingers and under nails',
                    '5. Rinse thoroughly',
                    '6. Dry with single-use towel',
                    '7. Use towel to turn off faucet'
                ]
            }
        ],
        goldenRule: 'Clean hands = Safe products',
        image: null
    },
    // SLIDE 8 - Gowning Procedure Overview
    {
        id: 8,
        type: 'flow',
        title: 'Gowning Procedure Overview',
        subtitle: 'Step-by-Step Process',
        flowItems: [
            'Remove Personal Items',
            'Enter Changing Room',
            'Remove Street Clothes',
            'Put on Undergarments',
            'Wash Hands',
            'Don Gown/Coverall',
            'Put on Hair Cover',
            'Put on Beard Cover (if applicable)',
            'Put on Face Mask',
            'Put on Safety Glasses',
            'Put on Shoe Covers',
            'Sanitize Hands',
            'Put on Gloves',
            'Enter Production'
        ],
        image: null
    },
    // SLIDE 9 - PPE Requirements
    {
        id: 9,
        type: 'standard',
        title: 'Personal Protective Equipment (PPE)',
        subtitle: 'Required Attire in Production',
        columns: [
            {
                heading: 'Standard PPE Items',
                icon: 'fa-vest',
                items: [
                    'Clean room gown or coverall',
                    'Hair cover (bouffant cap)',
                    'Beard cover (if applicable)',
                    'Face mask',
                    'Safety glasses or goggles',
                    'Shoe covers or dedicated footwear',
                    'Gloves (appropriate type)'
                ]
            },
            {
                heading: 'PPE Rules',
                icon: 'fa-list-check',
                items: [
                    'Inspect PPE before wearing',
                    'Replace damaged items immediately',
                    'Never reuse disposable PPE',
                    'Change gloves frequently',
                    'PPE stays in production area only',
                    'Follow donning sequence exactly'
                ]
            }
        ],
        image: null
    },
    // SLIDE 10 - Glove Protocol
    {
        id: 10,
        type: 'standard',
        title: 'Glove Protocol',
        subtitle: 'Proper Glove Use and Care',
        columns: [
            {
                heading: 'When to Change Gloves',
                icon: 'fa-sync',
                items: [
                    'After touching non-sterile surfaces',
                    'When gloves are torn or punctured',
                    'Between different operations',
                    'After handling waste',
                    'At regular intervals (every 1-2 hours)',
                    'When visibly contaminated'
                ]
            },
            {
                heading: 'Glove Best Practices',
                icon: 'fa-thumbs-up',
                items: [
                    'Select correct size for snug fit',
                    'Inspect for holes before use',
                    'Never blow into gloves',
                    'Sanitize gloves when required',
                    'Remove properly (inside-out technique)',
                    'Dispose in designated containers'
                ]
            }
        ],
        image: null
    },
    // SLIDE 11 - Behavior in Production Areas
    {
        id: 11,
        type: 'standard',
        title: 'Behavior in Production Areas',
        subtitle: 'Do\'s and Don\'ts',
        columns: [
            {
                heading: 'Prohibited Actions',
                icon: 'fa-ban',
                items: [
                    'No eating, drinking, or chewing gum',
                    'No smoking anywhere on premises',
                    'No touching face or adjusting PPE',
                    'No running or rapid movements',
                    'No personal items (phones, bags)',
                    'No unnecessary talking or shouting',
                    'No leaning on equipment or surfaces'
                ]
            },
            {
                heading: 'Required Behaviors',
                icon: 'fa-check-circle',
                items: [
                    'Move calmly and deliberately',
                    'Keep doors closed',
                    'Minimize traffic in and out',
                    'Stay in designated work areas',
                    'Report any spills immediately',
                    'Follow one-way traffic patterns',
                    'Maintain proper posture'
                ]
            }
        ],
        image: null
    },
    // SLIDE 12 - Air Quality Management
    {
        id: 12,
        type: 'standard',
        title: 'Air Quality Management',
        subtitle: 'Controlling Airborne Contamination',
        columns: [
            {
                heading: 'Air Handling Systems',
                icon: 'fa-wind',
                items: [
                    'HEPA filtration (99.97% efficiency)',
                    'Laminar airflow in critical areas',
                    'Positive pressure maintenance',
                    'Regular filter replacement',
                    'Air changes per hour (ACH) monitored'
                ]
            },
            {
                heading: 'Staff Responsibilities',
                icon: 'fa-user-cog',
                items: [
                    'Never block air vents',
                    'Report unusual odors or drafts',
                    'Keep airlocks closed properly',
                    'Minimize unnecessary movement',
                    'Never prop doors open'
                ]
            }
        ],
        image: null
    },
    // SLIDE 13 - Cleaning Principles
    {
        id: 13,
        type: 'standard',
        title: 'Cleaning Principles',
        subtitle: 'The Foundation of Cleanliness',
        columns: [
            {
                heading: 'Cleaning vs Sanitizing vs Sterilizing',
                icon: 'fa-spray-can',
                items: [
                    'CLEANING: Removes visible dirt and debris',
                    'SANITIZING: Reduces microorganisms to safe levels',
                    'DISINFECTING: Kills most microorganisms',
                    'STERILIZING: Eliminates ALL microorganisms'
                ]
            },
            {
                heading: 'Cleaning Sequence',
                icon: 'fa-list-ol',
                items: [
                    '1. Remove gross contamination',
                    '2. Apply cleaning agent',
                    '3. Scrub/agitate surface',
                    '4. Rinse thoroughly',
                    '5. Apply sanitizer/disinfectant',
                    '6. Allow proper contact time',
                    '7. Rinse if required',
                    '8. Dry properly'
                ]
            }
        ],
        image: null
    },
    // SLIDE 14 - Cleaning Agents
    {
        id: 14,
        type: 'standard',
        title: 'Cleaning Agents & Sanitizers',
        subtitle: 'Using the Right Products',
        columns: [
            {
                heading: 'Types of Agents',
                icon: 'fa-flask',
                items: [
                    'Detergents (remove soil)',
                    'Alkaline cleaners (fats/proteins)',
                    'Acidic cleaners (mineral deposits)',
                    'Neutral cleaners (general purpose)',
                    'Sanitizers (reduce microbial load)',
                    'Disinfectants (kill microorganisms)'
                ]
            },
            {
                heading: 'Usage Rules',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Use only approved products',
                    'Follow dilution instructions exactly',
                    'Never mix different chemicals',
                    'Observe contact time requirements',
                    'Wear appropriate PPE',
                    'Rotate disinfectants periodically'
                ]
            }
        ],
        image: null
    },
    // SLIDE 15 - Equipment Cleaning
    {
        id: 15,
        type: 'standard',
        title: 'Equipment Cleaning Procedures',
        subtitle: 'Keeping Equipment Sterile',
        columns: [
            {
                heading: 'Before Production',
                icon: 'fa-play',
                items: [
                    'Verify cleaning status (label check)',
                    'Visual inspection for residues',
                    'Check equipment log',
                    'Sanitize contact surfaces',
                    'Document pre-use check'
                ]
            },
            {
                heading: 'After Production',
                icon: 'fa-stop',
                items: [
                    'Disassemble removable parts',
                    'Rinse immediately after use',
                    'Clean with approved agents',
                    'Sanitize all surfaces',
                    'Dry completely',
                    'Cover or protect clean equipment',
                    'Complete cleaning log'
                ]
            }
        ],
        goldenRule: 'Clean equipment = Clean product',
        image: null
    },
    // SLIDE 16 - Surface Cleaning
    {
        id: 16,
        type: 'standard',
        title: 'Surface & Area Cleaning',
        subtitle: 'Maintaining Clean Environments',
        columns: [
            {
                heading: 'Cleaning Frequency',
                icon: 'fa-clock',
                items: [
                    'Work surfaces: Before/after each batch',
                    'Floors: Daily minimum',
                    'Walls: Weekly or as needed',
                    'Ceilings: Monthly or as scheduled',
                    'Light fixtures: Quarterly',
                    'Immediately after any spill'
                ]
            },
            {
                heading: 'Cleaning Techniques',
                icon: 'fa-broom',
                items: [
                    'Work from clean to dirty areas',
                    'Work from top to bottom',
                    'Use overlapping strokes',
                    'Change cleaning cloths frequently',
                    'Never double-dip dirty cloths',
                    'Allow surfaces to dry completely'
                ]
            }
        ],
        image: null
    },
    // SLIDE 17 - Water System Hygiene
    {
        id: 17,
        type: 'standard',
        title: 'Water System Hygiene',
        subtitle: 'Protecting the Primary Ingredient',
        columns: [
            {
                heading: 'Water Quality Controls',
                icon: 'fa-tint',
                items: [
                    'Regular microbial testing',
                    'Conductivity monitoring',
                    'TOC (Total Organic Carbon) testing',
                    'Endotoxin testing (if required)',
                    'Point-of-use sampling'
                ]
            },
            {
                heading: 'System Maintenance',
                icon: 'fa-tools',
                items: [
                    'Regular sanitization cycles',
                    'No dead legs in piping',
                    'Continuous recirculation',
                    'Storage tank sanitization',
                    'Filter maintenance and replacement',
                    'Temperature control (hot or cold)'
                ]
            }
        ],
        image: null
    },
    // SLIDE 18 - Environmental Monitoring
    {
        id: 18,
        type: 'standard',
        title: 'Environmental Monitoring',
        subtitle: 'Verifying Cleanliness',
        columns: [
            {
                heading: 'Monitoring Methods',
                icon: 'fa-microscope',
                items: [
                    'Air sampling (settle plates, active)',
                    'Surface sampling (swabs, contact plates)',
                    'Personnel monitoring (glove prints)',
                    'Water sampling',
                    'Particle counting'
                ]
            },
            {
                heading: 'Monitoring Schedule',
                icon: 'fa-calendar-check',
                items: [
                    'Critical areas: Each production day',
                    'Support areas: Weekly minimum',
                    'After cleaning validation',
                    'After maintenance activities',
                    'Investigation of excursions',
                    'Trend analysis monthly'
                ]
            }
        ],
        image: null
    },
    // SLIDE 19 - Waste Management
    {
        id: 19,
        type: 'standard',
        title: 'Waste Management',
        subtitle: 'Proper Disposal Procedures',
        columns: [
            {
                heading: 'Waste Segregation',
                icon: 'fa-trash-alt',
                items: [
                    'General waste (non-hazardous)',
                    'Chemical waste (hazardous)',
                    'Pharmaceutical waste',
                    'Sharps containers',
                    'Recyclable materials'
                ]
            },
            {
                heading: 'Disposal Rules',
                icon: 'fa-recycle',
                items: [
                    'Use correct colored containers',
                    'Never overfill waste bins',
                    'Remove waste regularly',
                    'Do not store waste in production',
                    'Secure waste storage areas',
                    'Document disposal properly'
                ]
            }
        ],
        image: null
    },
    // SLIDE 20 - Pest Control
    {
        id: 20,
        type: 'standard',
        title: 'Pest Control',
        subtitle: 'Preventing Infestations',
        columns: [
            {
                heading: 'Prevention Measures',
                icon: 'fa-bug-slash',
                items: [
                    'Sealed building envelope',
                    'Air curtains at entrances',
                    'Screen on windows/vents',
                    'Proper waste management',
                    'No food storage in production',
                    'Regular inspections'
                ]
            },
            {
                heading: 'Monitoring & Response',
                icon: 'fa-search',
                items: [
                    'Professional pest control service',
                    'Bait stations and traps',
                    'Regular inspection reports',
                    'Immediate action on sightings',
                    'Documentation of all activities',
                    'Staff training on reporting'
                ]
            }
        ],
        goldenRule: 'Report any pest sightings immediately!',
        image: null
    },
    // SLIDE 21 - Cleaning Validation
    {
        id: 21,
        type: 'standard',
        title: 'Cleaning Validation',
        subtitle: 'Proving Cleanliness',
        columns: [
            {
                heading: 'Why Validate?',
                icon: 'fa-check-double',
                items: [
                    'Prove cleaning procedures work',
                    'Prevent cross-contamination',
                    'Meet regulatory requirements',
                    'Establish cleaning limits',
                    'Document effectiveness'
                ]
            },
            {
                heading: 'Validation Elements',
                icon: 'fa-clipboard-check',
                items: [
                    'Written cleaning procedures',
                    'Defined acceptance criteria',
                    'Sampling methods (swab, rinse)',
                    'Analytical methods',
                    'Three consecutive successful runs',
                    'Ongoing verification'
                ]
            }
        ],
        image: null
    },
    // SLIDE 22 - Documentation Requirements
    {
        id: 22,
        type: 'standard',
        title: 'Hygiene Documentation',
        subtitle: 'Recording Compliance',
        columns: [
            {
                heading: 'Required Records',
                icon: 'fa-file-alt',
                items: [
                    'Cleaning logs (equipment, areas)',
                    'Environmental monitoring results',
                    'Personnel training records',
                    'Gowning qualification records',
                    'Pest control reports',
                    'Cleaning validation reports'
                ]
            },
            {
                heading: 'Documentation Rules',
                icon: 'fa-pen',
                items: [
                    'Complete in real-time',
                    'Use indelible ink',
                    'Initial and date all entries',
                    'No blank spaces',
                    'Corrections signed and dated',
                    'Retain for required period'
                ]
            }
        ],
        goldenRule: 'If it wasn\'t documented, it wasn\'t done!',
        image: null
    },
    // SLIDE 23 - Common Mistakes
    {
        id: 23,
        type: 'standard',
        title: 'Common Hygiene Mistakes',
        subtitle: 'Learn from Others\' Errors',
        columns: [
            {
                heading: 'Avoid These Errors',
                icon: 'fa-times-circle',
                items: [
                    'Rushing through gowning procedure',
                    'Not changing gloves frequently enough',
                    'Touching face or adjusting mask',
                    'Improper hand washing technique',
                    'Using wrong cleaning agents',
                    'Skipping documentation'
                ]
            },
            {
                heading: 'Critical Reminders',
                icon: 'fa-lightbulb',
                items: [
                    'Take your time with procedures',
                    'When in doubt, change gloves',
                    'Follow SOPs exactly as written',
                    'Ask questions if unsure',
                    'Report deviations immediately',
                    'Never take shortcuts'
                ]
            }
        ],
        image: null
    },
    // SLIDE 24 - Training Requirements
    {
        id: 24,
        type: 'standard',
        title: 'Training Requirements',
        subtitle: 'Building Competency',
        columns: [
            {
                heading: 'Initial Training',
                icon: 'fa-user-graduate',
                items: [
                    'GMP fundamentals',
                    'Personal hygiene requirements',
                    'Gowning qualification',
                    'Hand washing technique',
                    'Cleaning procedures',
                    'Documentation practices'
                ]
            },
            {
                heading: 'Ongoing Training',
                icon: 'fa-sync-alt',
                items: [
                    'Annual refresher courses',
                    'SOP updates training',
                    'Deviation review sessions',
                    'Best practice sharing',
                    'Competency assessments',
                    'Requalification as needed'
                ]
            }
        ],
        image: null
    },
    // SLIDE 25 - Responding to Contamination
    {
        id: 25,
        type: 'standard',
        title: 'Responding to Contamination Events',
        subtitle: 'When Things Go Wrong',
        columns: [
            {
                heading: 'Immediate Actions',
                icon: 'fa-exclamation-circle',
                items: [
                    'Stop production immediately',
                    'Isolate affected area/product',
                    'Notify supervisor at once',
                    'Do not attempt to hide issues',
                    'Preserve evidence for investigation'
                ]
            },
            {
                heading: 'Investigation Process',
                icon: 'fa-search',
                items: [
                    'Document what happened',
                    'Identify root cause',
                    'Determine scope of impact',
                    'Implement corrective actions',
                    'Preventive measures for future',
                    'Update procedures if needed'
                ]
            }
        ],
        image: null
    },
    // SLIDE 26 - Key Performance Indicators
    {
        id: 26,
        type: 'standard',
        title: 'Hygiene Key Performance Indicators',
        subtitle: 'Measuring Success',
        columns: [
            {
                heading: 'Metrics Tracked',
                icon: 'fa-chart-bar',
                items: [
                    'Environmental monitoring excursions',
                    'Cleaning validation failures',
                    'Hygiene-related deviations',
                    'Personnel monitoring results',
                    'Pest control incidents',
                    'Training completion rates'
                ]
            },
            {
                heading: 'Goals',
                icon: 'fa-bullseye',
                items: [
                    'Zero contamination events',
                    '100% documentation compliance',
                    'All staff trained and qualified',
                    'Environmental limits met consistently',
                    'Continuous improvement trends'
                ]
            }
        ],
        image: null
    },
    // SLIDE 27 - Conclusion
    {
        id: 27,
        type: 'conclusion',
        title: 'Hygiene & Sterility Summary',
        subtitle: 'Your Commitment to Excellence',
        conclusionItems: [
            { icon: 'fa-hand-sparkles', title: 'Personal Hygiene', text: 'You are the first line of defense' },
            { icon: 'fa-procedures', title: 'Follow Procedures', text: 'SOPs exist to protect patients' },
            { icon: 'fa-file-signature', title: 'Document Everything', text: 'Complete and accurate records' },
            { icon: 'fa-users', title: 'Team Responsibility', text: 'Everyone plays a critical role' }
        ],
        image: null
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hygieneSlidesData };
}
