// ===== PRESENTATION 9: WATER PURIFICATION SYSTEMS =====
// For: Production Staff | Category: Production Training

const waterPurificationSlides = [
    {
        id: 1,
        type: 'title',
        title: 'WATER PURIFICATION SYSTEMS',
        subtitle: 'Pharmaceutical Grade Water Production',
        tagline: 'Pure Water, Pure Products',
        content: [
            { icon: 'fa-droplet', text: 'Understand water grades' },
            { icon: 'fa-gears', text: 'Learn purification processes' },
            { icon: 'fa-vial', text: 'Know quality requirements' },
            { icon: 'fa-wrench', text: 'Maintain system integrity' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Water in Pharmaceutical Manufacturing',
        subtitle: 'The Most Critical Raw Material',
        columns: [
            {
                heading: 'Why Water Matters',
                icon: 'fa-droplet',
                items: [
                    'Most widely used raw material',
                    'Direct contact with product',
                    'Vehicle for active ingredients',
                    'Used for cleaning equipment',
                    'Quality affects product safety'
                ]
            },
            {
                heading: 'Risks of Poor Water Quality',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Microbial contamination',
                    'Chemical impurities',
                    'Endotoxins',
                    'Product degradation',
                    'Patient safety risk'
                ]
            }
        ],
        goldenRule: 'Water quality = Product quality',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Water Quality Grades',
        subtitle: 'Different Waters for Different Uses',
        columns: [
            {
                heading: 'Potable Water',
                icon: 'fa-faucet',
                items: [
                    'Municipal/well water supply',
                    'Meets drinking water standards',
                    'Used for general purposes',
                    'Cleaning external surfaces',
                    'NOT for product contact'
                ]
            },
            {
                heading: 'Purified Water (PW)',
                icon: 'fa-flask',
                items: [
                    'USP/BP grade requirements',
                    'Produced from potable water',
                    'Used in product formulation',
                    'Equipment final rinse',
                    'Our primary production water'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Water Purification Methods',
        subtitle: 'Technologies We Use',
        columns: [
            {
                heading: 'Pre-Treatment',
                icon: 'fa-filter',
                items: [
                    'Sediment filtration',
                    'Carbon filtration',
                    'Water softening',
                    'Removes large particles',
                    'Protects downstream units'
                ]
            },
            {
                heading: 'Primary Purification',
                icon: 'fa-atom',
                items: [
                    'Reverse Osmosis (RO)',
                    'Electrodeionization (EDI)',
                    'UV disinfection',
                    'Removes dissolved solids',
                    'Achieves USP specifications'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Reverse Osmosis (RO)',
        subtitle: 'Heart of the Purification System',
        columns: [
            {
                heading: 'How RO Works',
                icon: 'fa-circle-right',
                items: [
                    'Semi-permeable membrane',
                    'Pressure-driven separation',
                    'Removes 95-99% of dissolved solids',
                    'Removes bacteria and particles',
                    'Produces permeate and concentrate'
                ]
            },
            {
                heading: 'Critical Parameters',
                icon: 'fa-gauge',
                items: [
                    'Feed pressure',
                    'Recovery rate',
                    'Rejection rate',
                    'Conductivity',
                    'Temperature'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Water Quality Specifications',
        subtitle: 'USP Purified Water Requirements',
        columns: [
            {
                heading: 'Chemical Parameters',
                icon: 'fa-flask',
                items: [
                    'Conductivity: ≤1.3 µS/cm @ 25°C',
                    'TOC: ≤500 ppb',
                    'pH: 5.0-7.0 (as guide)',
                    'Heavy metals: Absent',
                    'Chlorine: Absent'
                ]
            },
            {
                heading: 'Microbial Parameters',
                icon: 'fa-bacteria',
                items: [
                    'Total aerobic count: ≤100 CFU/ml',
                    'Coliforms: Absent',
                    'Pseudomonas: Absent',
                    'Action limits defined',
                    'Alert limits monitored'
                ]
            }
        ],
        goldenRule: 'Meet specifications at all points of use',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Water Distribution System',
        subtitle: 'From Production to Point of Use',
        columns: [
            {
                heading: 'Distribution Design',
                icon: 'fa-sitemap',
                items: [
                    'Continuous circulation loop',
                    'Stainless steel piping',
                    'No dead legs',
                    'Appropriate flow velocity',
                    'Maintained positive pressure'
                ]
            },
            {
                heading: 'Point of Use',
                icon: 'fa-shower',
                items: [
                    'Designated outlets',
                    'Sampling ports',
                    'Controlled access',
                    'Regular flushing',
                    'Documented usage'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Water System Monitoring',
        subtitle: 'Continuous Quality Verification',
        columns: [
            {
                heading: 'Online Monitoring',
                icon: 'fa-computer',
                items: [
                    'Conductivity meters',
                    'Temperature sensors',
                    'Flow meters',
                    'Pressure gauges',
                    'TOC analyzers (where installed)'
                ]
            },
            {
                heading: 'Laboratory Testing',
                icon: 'fa-microscope',
                items: [
                    'Daily microbial sampling',
                    'Weekly full testing',
                    'Point-of-use sampling',
                    'Trend analysis',
                    'Out-of-spec investigation'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Alert and Action Limits',
        subtitle: 'Early Warning System',
        columns: [
            {
                heading: 'Alert Levels',
                icon: 'fa-bell',
                items: [
                    'Early warning indicator',
                    'System trending toward limit',
                    'Increased monitoring',
                    'Investigate cause',
                    'Document actions taken'
                ]
            },
            {
                heading: 'Action Levels',
                icon: 'fa-exclamation-circle',
                items: [
                    'Near specification limit',
                    'Immediate investigation',
                    'Corrective action required',
                    'May require system shutdown',
                    'QA notification required'
                ]
            }
        ],
        goldenRule: 'Never wait for failure to act',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Biofilm Prevention',
        subtitle: 'The Hidden Enemy',
        columns: [
            {
                heading: 'What is Biofilm?',
                icon: 'fa-bacteria',
                items: [
                    'Microbial communities on surfaces',
                    'Protected by slime layer',
                    'Resistant to sanitization',
                    'Source of ongoing contamination',
                    'Difficult to remove once formed'
                ]
            },
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield-halved',
                items: [
                    'Continuous circulation',
                    'Regular sanitization',
                    'Appropriate temperature',
                    'Smooth surface finishes',
                    'No stagnant areas'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'System Sanitization',
        subtitle: 'Keeping the System Clean',
        columns: [
            {
                heading: 'Sanitization Methods',
                icon: 'fa-spray-can',
                items: [
                    'Hot water sanitization (>80°C)',
                    'Chemical sanitization',
                    'Ozone treatment',
                    'UV exposure',
                    'Frequency per SOP'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-check-circle',
                items: [
                    'Follow sanitization SOP',
                    'Document all cycles',
                    'Verify effectiveness',
                    'Monitor temperatures',
                    'Complete all points'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Maintenance Requirements',
        subtitle: 'Keeping the System Running',
        columns: [
            {
                heading: 'Preventive Maintenance',
                icon: 'fa-wrench',
                items: [
                    'Filter replacements',
                    'Membrane cleaning',
                    'Pump servicing',
                    'Valve maintenance',
                    'Instrument calibration'
                ]
            },
            {
                heading: 'Documentation',
                icon: 'fa-file-lines',
                items: [
                    'Maintenance logs',
                    'Calibration records',
                    'Part replacement history',
                    'Performance trends',
                    'Deviation reports'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Operator Responsibilities',
        subtitle: 'Your Role in Water Quality',
        columns: [
            {
                heading: 'Daily Tasks',
                icon: 'fa-list-check',
                items: [
                    'Check system status',
                    'Record readings',
                    'Report abnormalities',
                    'Collect samples as required',
                    'Maintain logbooks'
                ]
            },
            {
                heading: 'Critical Behaviors',
                icon: 'fa-star',
                items: [
                    'Understand alert limits',
                    'Know escalation procedures',
                    'Never bypass alarms',
                    'Report system issues promptly',
                    'Follow SOPs exactly'
                ]
            }
        ],
        goldenRule: 'You are the first line of defense',
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'Troubleshooting Basics',
        subtitle: 'Common Issues and Responses',
        columns: [
            {
                heading: 'Common Problems',
                icon: 'fa-bug',
                items: [
                    'High conductivity',
                    'Microbial excursions',
                    'Low flow/pressure',
                    'Temperature deviations',
                    'Alarm conditions'
                ]
            },
            {
                heading: 'Response Actions',
                icon: 'fa-tools',
                items: [
                    'Check obvious causes first',
                    'Notify supervisor',
                    'Document observations',
                    'Do not use suspect water',
                    'Await QA instructions'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'Water Quality Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-droplet', title: 'Know Your Water', text: 'Understand grades and specifications' },
            { icon: 'fa-gauge', title: 'Monitor Constantly', text: 'Watch parameters and trends' },
            { icon: 'fa-shield-virus', title: 'Prevent Biofilm', text: 'Circulation and sanitization' },
            { icon: 'fa-file-lines', title: 'Document Everything', text: 'Complete, accurate records' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { waterPurificationSlides };
}
