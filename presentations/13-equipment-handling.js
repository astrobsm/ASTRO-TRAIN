// ===== PRESENTATION 13: EQUIPMENT HANDLING & MAINTENANCE =====
// For: Production Staff | Category: Production Training

const equipmentHandlingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'EQUIPMENT HANDLING & MAINTENANCE',
        subtitle: 'Care for Your Tools',
        tagline: 'Well-Maintained Equipment, Quality Products',
        content: [
            { icon: 'fa-gears', text: 'Understand equipment types' },
            { icon: 'fa-wrench', text: 'Learn maintenance basics' },
            { icon: 'fa-clipboard-check', text: 'Master cleaning procedures' },
            { icon: 'fa-file-lines', text: 'Document properly' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why Equipment Care Matters',
        subtitle: 'Impact on Product Quality',
        columns: [
            {
                heading: 'Quality Impact',
                icon: 'fa-star',
                items: [
                    'Equipment affects product',
                    'Contamination risk if not clean',
                    'Inaccurate if not calibrated',
                    'Breakdowns delay production',
                    'GMP requires maintained equipment'
                ]
            },
            {
                heading: 'Safety Impact',
                icon: 'fa-shield-halved',
                items: [
                    'Malfunctions cause accidents',
                    'Proper operation prevents injury',
                    'Guards protect operators',
                    'Emergency stops save lives',
                    'Your safety depends on equipment'
                ]
            }
        ],
        goldenRule: 'Treat equipment with respect',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Production Equipment Overview',
        subtitle: 'Equipment in Our Facility',
        columns: [
            {
                heading: 'Manufacturing Equipment',
                icon: 'fa-industry',
                items: [
                    'Mixing vessels/tanks',
                    'Agitators and homogenizers',
                    'Transfer pumps',
                    'Filling machines',
                    'Capping/sealing equipment'
                ]
            },
            {
                heading: 'Support Equipment',
                icon: 'fa-tools',
                items: [
                    'Water purification system',
                    'HVAC systems',
                    'Autoclaves/sterilizers',
                    'Weighing balances',
                    'Monitoring instruments'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Equipment Qualification',
        subtitle: 'Proving Equipment Works Correctly',
        columns: [
            {
                heading: 'Qualification Stages',
                icon: 'fa-check-double',
                items: [
                    'DQ: Design Qualification',
                    'IQ: Installation Qualification',
                    'OQ: Operational Qualification',
                    'PQ: Performance Qualification',
                    'Must be complete before use'
                ]
            },
            {
                heading: 'Your Role',
                icon: 'fa-user-check',
                items: [
                    'Use only qualified equipment',
                    'Report any changes',
                    'Support qualification activities',
                    'Maintain qualified status',
                    'Don\'t modify without approval'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Equipment Operation',
        subtitle: 'Using Equipment Correctly',
        columns: [
            {
                heading: 'Before Operation',
                icon: 'fa-play',
                items: [
                    'Trained and authorized',
                    'Read relevant SOP',
                    'Pre-use inspection',
                    'Check clean status',
                    'Verify calibration current'
                ]
            },
            {
                heading: 'During Operation',
                icon: 'fa-cogs',
                items: [
                    'Follow SOP exactly',
                    'Monitor critical parameters',
                    'Record readings in logbook',
                    'Report abnormalities',
                    'Never leave unattended if required'
                ]
            }
        ],
        goldenRule: 'Only trained operators use equipment',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Equipment Calibration',
        subtitle: 'Ensuring Accurate Measurements',
        columns: [
            {
                heading: 'What is Calibration?',
                icon: 'fa-bullseye',
                items: [
                    'Comparing to reference standard',
                    'Adjusting to meet specifications',
                    'Documented evidence of accuracy',
                    'Required by GMP',
                    'Scheduled activity'
                ]
            },
            {
                heading: 'Operator Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Check calibration label',
                    'Verify not expired',
                    'Report if due or overdue',
                    'Don\'t use if out of calibration',
                    'Document equipment used'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Equipment Cleaning',
        subtitle: 'Preventing Contamination',
        columns: [
            {
                heading: 'Cleaning Requirements',
                icon: 'fa-broom',
                items: [
                    'Clean after each use/batch',
                    'Follow cleaning SOP',
                    'Use approved cleaning agents',
                    'Validated cleaning procedures',
                    'Visual and verified clean'
                ]
            },
            {
                heading: 'Clean Status Management',
                icon: 'fa-tag',
                items: [
                    'Clean status labels',
                    'Maximum hold time',
                    'Re-clean if expired',
                    'Document cleaning',
                    'Verify before use'
                ]
            }
        ],
        goldenRule: 'Clean equipment = Clean product',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Preventive Maintenance',
        subtitle: 'Fixing Before Breaking',
        columns: [
            {
                heading: 'PM Program',
                icon: 'fa-calendar-check',
                items: [
                    'Scheduled maintenance activities',
                    'Based on manufacturer guidance',
                    'Prevents unexpected failures',
                    'Extends equipment life',
                    'Required by GMP'
                ]
            },
            {
                heading: 'PM Activities',
                icon: 'fa-wrench',
                items: [
                    'Inspection and lubrication',
                    'Part replacement',
                    'Adjustment and alignment',
                    'Filter changes',
                    'Seal replacements'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Equipment Breakdown',
        subtitle: 'When Equipment Fails',
        columns: [
            {
                heading: 'Immediate Actions',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Stop operation safely',
                    'Notify supervisor',
                    'Isolate affected product',
                    'Don\'t attempt repair unless trained',
                    'Document what happened'
                ]
            },
            {
                heading: 'Repair Process',
                icon: 'fa-tools',
                items: [
                    'Maintenance evaluates',
                    'Repair documented',
                    'Requalification if needed',
                    'Clean after maintenance',
                    'Return to service approval'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Equipment Logbooks',
        subtitle: 'Documenting Equipment History',
        columns: [
            {
                heading: 'What to Record',
                icon: 'fa-pen',
                items: [
                    'Each use (date, time, product)',
                    'Cleaning activities',
                    'Calibration events',
                    'Maintenance performed',
                    'Problems encountered'
                ]
            },
            {
                heading: 'Logbook Rules',
                icon: 'fa-book',
                items: [
                    'Entries in permanent ink',
                    'Signed and dated',
                    'Sequential entries',
                    'No blank pages/lines',
                    'Correct errors properly'
                ]
            }
        ],
        goldenRule: 'The logbook tells the equipment\'s story',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Safety Features',
        subtitle: 'Protecting Operators',
        columns: [
            {
                heading: 'Safety Devices',
                icon: 'fa-shield-virus',
                items: [
                    'Emergency stop buttons',
                    'Machine guards',
                    'Interlocks',
                    'Safety sensors',
                    'Pressure relief valves'
                ]
            },
            {
                heading: 'Safety Rules',
                icon: 'fa-hard-hat',
                items: [
                    'Never bypass safety features',
                    'Report damaged guards',
                    'Know E-stop locations',
                    'Use lockout/tagout',
                    'Wear required PPE'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Lockout/Tagout (LOTO)',
        subtitle: 'Safe Maintenance Procedures',
        columns: [
            {
                heading: 'What is LOTO?',
                icon: 'fa-lock',
                items: [
                    'Isolating energy sources',
                    'Preventing unexpected startup',
                    'Required for maintenance',
                    'Protects maintenance workers',
                    'Regulatory requirement'
                ]
            },
            {
                heading: 'LOTO Process',
                icon: 'fa-list-ol',
                items: [
                    'Notify affected personnel',
                    'Shut down equipment',
                    'Isolate energy sources',
                    'Apply locks and tags',
                    'Verify zero energy'
                ]
            }
        ],
        goldenRule: 'LOTO saves lives',
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Change Control for Equipment',
        subtitle: 'Managing Equipment Changes',
        columns: [
            {
                heading: 'When Change Control Needed',
                icon: 'fa-arrows-rotate',
                items: [
                    'Equipment replacement',
                    'Modifications',
                    'Software updates',
                    'Location changes',
                    'Component changes'
                ]
            },
            {
                heading: 'Process',
                icon: 'fa-clipboard-list',
                items: [
                    'Submit change request',
                    'Impact assessment',
                    'Approval required',
                    'Requalification if needed',
                    'Documentation updated'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Equipment Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-clipboard-list', title: 'Follow SOPs', text: 'Operate equipment correctly' },
            { icon: 'fa-broom', title: 'Keep Clean', text: 'Clean after every use' },
            { icon: 'fa-bullseye', title: 'Verify Calibration', text: 'Accurate equipment, accurate results' },
            { icon: 'fa-book', title: 'Document Use', text: 'Complete logbook entries' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { equipmentHandlingSlides };
}
