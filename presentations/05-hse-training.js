// ===== PRESENTATION 5: HEALTH, SAFETY & ENVIRONMENTAL (HSE) TRAINING =====
// For: All Staff | Category: General Training

const hseTrainingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'HEALTH, SAFETY & ENVIRONMENT',
        subtitle: 'HSE Awareness Training',
        tagline: 'Safety First, Quality Always',
        content: [
            { icon: 'fa-hard-hat', text: 'Understand workplace safety' },
            { icon: 'fa-fire-extinguisher', text: 'Know emergency procedures' },
            { icon: 'fa-leaf', text: 'Environmental responsibility' },
            { icon: 'fa-shield-virus', text: 'Protect yourself and others' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why HSE Matters',
        subtitle: 'Our Commitment to Safety',
        columns: [
            {
                heading: 'Business Impact',
                icon: 'fa-briefcase',
                items: [
                    'Protects our people',
                    'Ensures regulatory compliance',
                    'Reduces costs from incidents',
                    'Maintains company reputation',
                    'Supports sustainability goals'
                ]
            },
            {
                heading: 'Personal Impact',
                icon: 'fa-user-shield',
                items: [
                    'Your health and wellbeing',
                    'Return home safely each day',
                    'Protect colleagues',
                    'Peace of mind',
                    'Professional responsibility'
                ]
            }
        ],
        goldenRule: 'Every injury is preventable',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'HSE Policy Overview',
        subtitle: 'Our Safety Commitments',
        columns: [
            {
                heading: 'Company Commitments',
                icon: 'fa-building',
                items: [
                    'Provide safe working environment',
                    'Comply with all HSE regulations',
                    'Provide necessary training',
                    'Supply appropriate PPE',
                    'Continuously improve safety'
                ]
            },
            {
                heading: 'Employee Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Follow safety procedures',
                    'Use PPE correctly',
                    'Report hazards and incidents',
                    'Participate in training',
                    'Look out for colleagues'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Hazard Identification',
        subtitle: 'Types of Workplace Hazards',
        columns: [
            {
                heading: 'Physical Hazards',
                icon: 'fa-bolt',
                items: [
                    'Slips, trips, and falls',
                    'Moving machinery',
                    'Electrical hazards',
                    'Noise exposure',
                    'Temperature extremes'
                ]
            },
            {
                heading: 'Chemical Hazards',
                icon: 'fa-flask',
                items: [
                    'Cleaning chemicals',
                    'Raw materials',
                    'Spills and splashes',
                    'Fumes and vapors',
                    'Chemical incompatibility'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Personal Protective Equipment (PPE)',
        subtitle: 'Your Last Line of Defense',
        columns: [
            {
                heading: 'Common PPE Types',
                icon: 'fa-hard-hat',
                items: [
                    'Safety glasses/goggles',
                    'Gloves (various types)',
                    'Lab coats/coveralls',
                    'Safety shoes',
                    'Hearing protection'
                ]
            },
            {
                heading: 'PPE Requirements',
                icon: 'fa-check-circle',
                items: [
                    'Use as required by area/task',
                    'Inspect before each use',
                    'Report damaged PPE',
                    'Store properly after use',
                    'Request replacement when needed'
                ]
            }
        ],
        goldenRule: 'No PPE = No entry to production',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Chemical Safety',
        subtitle: 'Working Safely with Chemicals',
        columns: [
            {
                heading: 'Safety Data Sheets (SDS)',
                icon: 'fa-file-medical',
                items: [
                    'Available for all chemicals',
                    'Contains hazard information',
                    'Handling precautions',
                    'First aid measures',
                    'Storage requirements'
                ]
            },
            {
                heading: 'Safe Handling',
                icon: 'fa-hand-holding-droplet',
                items: [
                    'Know the hazards before use',
                    'Use required PPE',
                    'Follow handling procedures',
                    'Never mix chemicals',
                    'Report spills immediately'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Fire Safety',
        subtitle: 'Prevention and Response',
        columns: [
            {
                heading: 'Fire Prevention',
                icon: 'fa-fire',
                items: [
                    'Good housekeeping',
                    'Proper chemical storage',
                    'No unauthorized heat sources',
                    'Maintain electrical equipment',
                    'Control ignition sources'
                ]
            },
            {
                heading: 'Fire Response',
                icon: 'fa-fire-extinguisher',
                items: [
                    'Know fire exits and routes',
                    'Know assembly points',
                    'RACE: Rescue, Alarm, Contain, Evacuate',
                    'Use extinguisher if trained and safe',
                    'Never use lift during fire'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Emergency Procedures',
        subtitle: 'Be Prepared to Respond',
        columns: [
            {
                heading: 'Emergency Types',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Fire',
                    'Chemical spill',
                    'Medical emergency',
                    'Power failure',
                    'Natural disaster'
                ]
            },
            {
                heading: 'General Response',
                icon: 'fa-person-running',
                items: [
                    'Stay calm',
                    'Alert others/raise alarm',
                    'Follow established procedures',
                    'Evacuate if required',
                    'Report to assembly point'
                ]
            }
        ],
        goldenRule: 'Know your emergency exits and assembly points',
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'First Aid Basics',
        subtitle: 'Initial Response to Injuries',
        columns: [
            {
                heading: 'First Aid Resources',
                icon: 'fa-kit-medical',
                items: [
                    'Know first aid kit locations',
                    'Know first aiders in your area',
                    'Emergency contact numbers',
                    'Eyewash stations',
                    'Safety showers'
                ]
            },
            {
                heading: 'When Injury Occurs',
                icon: 'fa-phone',
                items: [
                    'Ensure scene is safe',
                    'Call for help',
                    'Provide basic aid if trained',
                    'Don\'t move seriously injured',
                    'Stay with victim until help arrives'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Incident Reporting',
        subtitle: 'Why Reporting Matters',
        columns: [
            {
                heading: 'What to Report',
                icon: 'fa-clipboard-list',
                items: [
                    'All injuries (even minor)',
                    'Near misses',
                    'Unsafe conditions',
                    'Equipment problems',
                    'Environmental spills'
                ]
            },
            {
                heading: 'How to Report',
                icon: 'fa-file-lines',
                items: [
                    'Report immediately to supervisor',
                    'Complete incident form',
                    'Provide accurate details',
                    'Identify witnesses',
                    'Cooperate with investigation'
                ]
            }
        ],
        goldenRule: 'Report all incidents - no blame culture',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Environmental Responsibility',
        subtitle: 'Protecting Our Planet',
        columns: [
            {
                heading: 'Waste Management',
                icon: 'fa-recycle',
                items: [
                    'Segregate waste properly',
                    'Follow disposal procedures',
                    'Reduce waste where possible',
                    'Handle hazardous waste safely',
                    'Never pour chemicals down drains'
                ]
            },
            {
                heading: 'Resource Conservation',
                icon: 'fa-leaf',
                items: [
                    'Conserve water',
                    'Save energy',
                    'Reduce paper use',
                    'Report leaks and wastage',
                    'Support sustainability initiatives'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Ergonomics & Manual Handling',
        subtitle: 'Preventing Musculoskeletal Injuries',
        columns: [
            {
                heading: 'Lifting Safely',
                icon: 'fa-box',
                items: [
                    'Assess the load first',
                    'Bend knees, keep back straight',
                    'Hold load close to body',
                    'Avoid twisting',
                    'Get help for heavy loads'
                ]
            },
            {
                heading: 'Workstation Ergonomics',
                icon: 'fa-desktop',
                items: [
                    'Adjust chair height properly',
                    'Screen at eye level',
                    'Take regular breaks',
                    'Stretch periodically',
                    'Report discomfort early'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Safety Signage',
        subtitle: 'Understanding Safety Signs',
        columns: [
            {
                heading: 'Sign Colors & Meanings',
                icon: 'fa-sign',
                items: [
                    'RED: Prohibition/Fire equipment',
                    'YELLOW: Warning/Caution',
                    'BLUE: Mandatory action',
                    'GREEN: Safe condition/First aid',
                    'Know and obey all signs'
                ]
            },
            {
                heading: 'Common Signs',
                icon: 'fa-signs-post',
                items: [
                    'No entry',
                    'PPE required',
                    'Fire exit',
                    'Emergency equipment',
                    'Hazard warnings'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'HSE Culture',
        subtitle: 'Building a Safety Mindset',
        columns: [
            {
                heading: 'Safety Behaviors',
                icon: 'fa-brain',
                items: [
                    'Think before you act',
                    'Follow procedures always',
                    'Speak up about hazards',
                    'Help colleagues work safely',
                    'Lead by example'
                ]
            },
            {
                heading: 'Your Role',
                icon: 'fa-users',
                items: [
                    'Be a safety champion',
                    'Participate in safety meetings',
                    'Suggest improvements',
                    'Complete training',
                    'Make safety personal'
                ]
            }
        ],
        goldenRule: 'Safety is a choice you make',
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'Safety First, Quality Always',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-hard-hat', title: 'Use PPE', text: 'Your protection depends on it' },
            { icon: 'fa-triangle-exclamation', title: 'Report Hazards', text: 'Prevention starts with awareness' },
            { icon: 'fa-fire-extinguisher', title: 'Know Emergencies', text: 'Be prepared to respond' },
            { icon: 'fa-leaf', title: 'Protect Environment', text: 'Sustainability is our responsibility' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hseTrainingSlides };
}
