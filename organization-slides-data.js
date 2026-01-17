// ===== WORKPLACE ORGANIZATION PROTOCOL - SLIDES DATA =====
// Comprehensive training on maintaining an organized and orderly work environment

const organizationSlidesData = [
    // SLIDE 1 - Title
    {
        id: 1,
        type: 'title',
        title: 'WORKPLACE ORGANIZATION',
        subtitle: '5S Principles & Factory Standards',
        tagline: 'A Place for Everything, Everything in Its Place',
        content: [
            { icon: 'fa-sitemap', text: 'Understand the 5S methodology' },
            { icon: 'fa-arrows-to-dot', text: 'Return every item to its designated place' },
            { icon: 'fa-industry', text: 'Maintain factory order and cleanliness' },
            { icon: 'fa-chart-line', text: 'Improve efficiency and safety' }
        ],
        image: null
    },
    // SLIDE 2 - Why Organization Matters
    {
        id: 2,
        type: 'standard',
        title: 'Why Organization Matters',
        subtitle: 'The Foundation of Excellence',
        columns: [
            {
                heading: 'Benefits of Organization',
                icon: 'fa-thumbs-up',
                items: [
                    'Increased productivity and efficiency',
                    'Reduced time searching for items',
                    'Fewer errors and mistakes',
                    'Improved safety conditions',
                    'Lower stress levels',
                    'Better product quality'
                ]
            },
            {
                heading: 'Costs of Disorganization',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Wasted time looking for tools/materials',
                    'Increased risk of accidents',
                    'Product contamination risks',
                    'Equipment damage',
                    'Poor morale and frustration',
                    'Failed audits and inspections'
                ]
            }
        ],
        image: null
    },
    // SLIDE 3 - Introduction to 5S
    {
        id: 3,
        type: 'standard',
        title: 'Introduction to 5S',
        subtitle: 'The Japanese Methodology for Workplace Organization',
        columns: [
            {
                heading: 'The 5S Principles',
                icon: 'fa-list-ol',
                items: [
                    '1. SORT (Seiri) - Remove unnecessary items',
                    '2. SET IN ORDER (Seiton) - Organize remaining items',
                    '3. SHINE (Seiso) - Clean the workplace',
                    '4. STANDARDIZE (Seiketsu) - Create standards',
                    '5. SUSTAIN (Shitsuke) - Maintain discipline'
                ]
            },
            {
                heading: 'Why 5S Works',
                icon: 'fa-check-circle',
                items: [
                    'Creates visual workplace',
                    'Problems become immediately visible',
                    'Establishes consistent practices',
                    'Builds discipline and habits',
                    'Foundation for continuous improvement'
                ]
            }
        ],
        image: null
    },
    // SLIDE 4 - SORT (Seiri)
    {
        id: 4,
        type: 'standard',
        title: '1st S: SORT (Seiri)',
        subtitle: 'Remove What You Don\'t Need',
        columns: [
            {
                heading: 'What to Do',
                icon: 'fa-filter',
                items: [
                    'Identify all items in your work area',
                    'Separate needed from unneeded items',
                    'Remove broken or obsolete equipment',
                    'Dispose of expired materials',
                    'Red-tag questionable items for review'
                ]
            },
            {
                heading: 'Red Tag System',
                icon: 'fa-tag',
                items: [
                    'Tag items not immediately needed',
                    'Move to holding area',
                    'Review after set period (30 days)',
                    'Dispose, relocate, or return',
                    'Document all decisions'
                ]
            }
        ],
        goldenRule: 'When in doubt, move it out!',
        image: null
    },
    // SLIDE 5 - SET IN ORDER (Seiton)
    {
        id: 5,
        type: 'standard',
        title: '2nd S: SET IN ORDER (Seiton)',
        subtitle: 'A Place for Everything',
        columns: [
            {
                heading: 'Organization Principles',
                icon: 'fa-th-large',
                items: [
                    'Assign a specific location for every item',
                    'Place items based on frequency of use',
                    'Most used items closest to work area',
                    'Rarely used items in storage',
                    'Use vertical space efficiently'
                ]
            },
            {
                heading: 'Visual Management',
                icon: 'fa-eye',
                items: [
                    'Label all storage locations',
                    'Use shadow boards for tools',
                    'Color-code by category or area',
                    'Floor markings for equipment',
                    'Signs and visual indicators'
                ]
            }
        ],
        goldenRule: 'Everything in its place, a place for everything!',
        image: null
    },
    // SLIDE 6 - SHINE (Seiso)
    {
        id: 6,
        type: 'standard',
        title: '3rd S: SHINE (Seiso)',
        subtitle: 'Clean and Inspect',
        columns: [
            {
                heading: 'Daily Cleaning Tasks',
                icon: 'fa-broom',
                items: [
                    'Clean work surfaces after each task',
                    'Sweep floors at end of shift',
                    'Wipe down equipment',
                    'Empty waste containers',
                    'Return cleaning supplies to storage'
                ]
            },
            {
                heading: 'Cleaning = Inspection',
                icon: 'fa-search',
                items: [
                    'Notice abnormalities while cleaning',
                    'Check for equipment wear',
                    'Identify potential problems early',
                    'Report issues immediately',
                    'Prevent small problems becoming big'
                ]
            }
        ],
        goldenRule: 'Clean daily, problems go away!',
        image: null
    },
    // SLIDE 7 - STANDARDIZE (Seiketsu)
    {
        id: 7,
        type: 'standard',
        title: '4th S: STANDARDIZE (Seiketsu)',
        subtitle: 'Create Consistent Practices',
        columns: [
            {
                heading: 'Standardization Methods',
                icon: 'fa-clipboard-list',
                items: [
                    'Written procedures for organization',
                    'Checklists for daily tasks',
                    'Visual standards (photos of ideal state)',
                    'Defined responsibilities',
                    'Regular audit schedules'
                ]
            },
            {
                heading: 'Visual Standards',
                icon: 'fa-image',
                items: [
                    'Before/After photos posted',
                    'Color-coded systems documented',
                    'Maps showing item locations',
                    'Cleaning schedules displayed',
                    'Responsibility charts visible'
                ]
            }
        ],
        image: null
    },
    // SLIDE 8 - SUSTAIN (Shitsuke)
    {
        id: 8,
        type: 'standard',
        title: '5th S: SUSTAIN (Shitsuke)',
        subtitle: 'Maintain the Discipline',
        columns: [
            {
                heading: 'Building Habits',
                icon: 'fa-sync-alt',
                items: [
                    'Practice 5S every day',
                    'Make it part of the routine',
                    'Self-discipline is key',
                    'Hold each other accountable',
                    'Celebrate successes'
                ]
            },
            {
                heading: 'Sustaining Methods',
                icon: 'fa-check-double',
                items: [
                    'Regular 5S audits',
                    'Management walkthrough',
                    'Training and retraining',
                    'Recognition programs',
                    'Continuous improvement culture'
                ]
            }
        ],
        goldenRule: '5S is not an event, it\'s a way of life!',
        image: null
    },
    // SLIDE 9 - Return Items to Position
    {
        id: 9,
        type: 'standard',
        title: 'CRITICAL: Return Items to Position',
        subtitle: 'The Most Important Habit',
        columns: [
            {
                heading: 'The Rule',
                icon: 'fa-undo',
                items: [
                    'Every tool has a designated home',
                    'Return item IMMEDIATELY after use',
                    'Do not set items down "temporarily"',
                    'Never borrow without returning',
                    'If you move it, return it'
                ]
            },
            {
                heading: 'Why This Matters',
                icon: 'fa-lightbulb',
                items: [
                    'Next person can find it instantly',
                    'No time wasted searching',
                    'Tools stay in good condition',
                    'Accountability is clear',
                    'Prevents loss and theft'
                ]
            }
        ],
        goldenRule: 'Use it → Return it → Immediately!',
        image: null
    },
    // SLIDE 10 - Tool Organization
    {
        id: 10,
        type: 'standard',
        title: 'Tool Organization Standards',
        subtitle: 'Managing Equipment and Tools',
        columns: [
            {
                heading: 'Shadow Boards',
                icon: 'fa-border-all',
                items: [
                    'Outline shape of each tool on board',
                    'Missing tools instantly visible',
                    'Correct placement obvious',
                    'Located near point of use',
                    'Regular inventory verification'
                ]
            },
            {
                heading: 'Tool Control',
                icon: 'fa-tools',
                items: [
                    'Sign-out/sign-in for shared tools',
                    'Personal tool sets when appropriate',
                    'Tool condition inspection before/after',
                    'Report damaged tools immediately',
                    'Never use damaged equipment'
                ]
            }
        ],
        image: null
    },
    // SLIDE 11 - Material Storage
    {
        id: 11,
        type: 'standard',
        title: 'Material Storage Standards',
        subtitle: 'Organizing Raw Materials & Supplies',
        columns: [
            {
                heading: 'Storage Principles',
                icon: 'fa-warehouse',
                items: [
                    'FIFO - First In, First Out',
                    'Clear labeling of all materials',
                    'Designated areas for each material',
                    'Maximum/minimum quantity markers',
                    'Protected from contamination'
                ]
            },
            {
                heading: 'Best Practices',
                icon: 'fa-star',
                items: [
                    'Heavy items at waist height',
                    'Frequently used items accessible',
                    'Stack safely within limits',
                    'Keep aisles clear',
                    'Close containers after use'
                ]
            }
        ],
        image: null
    },
    // SLIDE 12 - Document Organization
    {
        id: 12,
        type: 'standard',
        title: 'Document Organization',
        subtitle: 'Managing Paperwork & Records',
        columns: [
            {
                heading: 'Paper Documents',
                icon: 'fa-folder-open',
                items: [
                    'Designated filing locations',
                    'Color-coded folders',
                    'Clear labeling system',
                    'Regular purging of outdated docs',
                    'Sign-out system for removal'
                ]
            },
            {
                heading: 'Work Area Documents',
                icon: 'fa-file-alt',
                items: [
                    'Current SOPs displayed properly',
                    'Batch records in designated holders',
                    'Completed forms filed immediately',
                    'No loose papers on work surfaces',
                    'Logbooks in assigned locations'
                ]
            }
        ],
        goldenRule: 'File it now, find it later!',
        image: null
    },
    // SLIDE 13 - Floor Marking Standards
    {
        id: 13,
        type: 'standard',
        title: 'Floor Marking Standards',
        subtitle: 'Visual Factory Management',
        columns: [
            {
                heading: 'Color Code System',
                icon: 'fa-palette',
                items: [
                    'YELLOW - Walkways and aisles',
                    'WHITE - Equipment positions',
                    'GREEN - Material storage areas',
                    'RED - Defect/reject areas',
                    'BLUE - Work in progress',
                    'BLACK/YELLOW - Hazard zones'
                ]
            },
            {
                heading: 'Marking Rules',
                icon: 'fa-ruler',
                items: [
                    'Keep markings visible and clean',
                    'Never place items outside markings',
                    'Report damaged floor markings',
                    'Respect aisle boundaries',
                    'Equipment must stay within lines'
                ]
            }
        ],
        image: null
    },
    // SLIDE 14 - Work Station Organization
    {
        id: 14,
        type: 'standard',
        title: 'Workstation Organization',
        subtitle: 'Your Personal Work Area',
        columns: [
            {
                heading: 'Workstation Setup',
                icon: 'fa-desktop',
                items: [
                    'Only necessary items on work surface',
                    'Tools arranged by frequency of use',
                    'Adequate lighting for tasks',
                    'Ergonomic arrangement',
                    'Personal items in designated spots'
                ]
            },
            {
                heading: 'End of Shift Checklist',
                icon: 'fa-list-check',
                items: [
                    'Return all tools to proper locations',
                    'Clear work surface completely',
                    'Dispose of waste properly',
                    'File all documents',
                    'Clean and wipe down area',
                    'Report any issues'
                ]
            }
        ],
        goldenRule: 'Leave your station better than you found it!',
        image: null
    },
    // SLIDE 15 - Cleaning Equipment Organization
    {
        id: 15,
        type: 'standard',
        title: 'Cleaning Equipment Organization',
        subtitle: 'Managing Cleaning Supplies',
        columns: [
            {
                heading: 'Storage Requirements',
                icon: 'fa-spray-can',
                items: [
                    'Designated cleaning closet/area',
                    'Color-coded equipment by zone',
                    'Hooks and holders for mops/brooms',
                    'Labeled containers for solutions',
                    'MSDS sheets accessible'
                ]
            },
            {
                heading: 'After Use Protocol',
                icon: 'fa-undo-alt',
                items: [
                    'Rinse and clean equipment',
                    'Hang to dry properly',
                    'Return to designated spot',
                    'Report worn or damaged items',
                    'Refill dispensers if needed'
                ]
            }
        ],
        image: null
    },
    // SLIDE 16 - PPE Organization
    {
        id: 16,
        type: 'standard',
        title: 'PPE Organization',
        subtitle: 'Personal Protective Equipment Management',
        columns: [
            {
                heading: 'PPE Storage',
                icon: 'fa-hard-hat',
                items: [
                    'Designated PPE stations',
                    'Clean, dry storage conditions',
                    'Labeled by size/type',
                    'Stock levels maintained',
                    'Easy access when needed'
                ]
            },
            {
                heading: 'Personal PPE Care',
                icon: 'fa-vest',
                items: [
                    'Store in assigned locker/area',
                    'Keep clean and maintained',
                    'Inspect before each use',
                    'Return reusable PPE properly',
                    'Dispose of single-use items correctly'
                ]
            }
        ],
        image: null
    },
    // SLIDE 17 - Waste Management Organization
    {
        id: 17,
        type: 'standard',
        title: 'Waste Management Organization',
        subtitle: 'Proper Waste Handling',
        columns: [
            {
                heading: 'Waste Container Standards',
                icon: 'fa-trash',
                items: [
                    'Color-coded bins for waste types',
                    'Clear labels on all containers',
                    'Strategically placed throughout facility',
                    'Never overfill containers',
                    'Lids closed when not in use'
                ]
            },
            {
                heading: 'Disposal Responsibilities',
                icon: 'fa-recycle',
                items: [
                    'Dispose of waste immediately',
                    'Use correct container for waste type',
                    'Empty bins before overflow',
                    'Clean spills around containers',
                    'Report full containers'
                ]
            }
        ],
        image: null
    },
    // SLIDE 18 - Inventory Control
    {
        id: 18,
        type: 'standard',
        title: 'Inventory Control',
        subtitle: 'Managing Stock Levels',
        columns: [
            {
                heading: 'Visual Inventory Management',
                icon: 'fa-boxes-stacked',
                items: [
                    'Kanban cards for reorder signals',
                    'Min/Max quantity indicators',
                    'Two-bin system for supplies',
                    'Clear quantity labels',
                    'Regular stock counts'
                ]
            },
            {
                heading: 'Staff Responsibilities',
                icon: 'fa-user-check',
                items: [
                    'Report low stock immediately',
                    'Never take last item without reporting',
                    'Use materials in FIFO order',
                    'Return unused materials properly',
                    'Document all usage accurately'
                ]
            }
        ],
        image: null
    },
    // SLIDE 19 - Equipment Placement
    {
        id: 19,
        type: 'standard',
        title: 'Equipment Placement Rules',
        subtitle: 'Fixed Positions for All Equipment',
        columns: [
            {
                heading: 'Placement Standards',
                icon: 'fa-arrows-alt',
                items: [
                    'All equipment has marked position',
                    'Never move without authorization',
                    'Return to exact position after cleaning',
                    'Wheels locked when stationary',
                    'Cords/hoses properly routed'
                ]
            },
            {
                heading: 'Benefits',
                icon: 'fa-check',
                items: [
                    'Consistent workflow maintained',
                    'Safety paths always clear',
                    'Easy to spot missing equipment',
                    'Cleaning routine consistent',
                    'Visitors can navigate safely'
                ]
            }
        ],
        image: null
    },
    // SLIDE 20 - Shift Changeover
    {
        id: 20,
        type: 'standard',
        title: 'Shift Changeover Organization',
        subtitle: 'Smooth Transitions Between Shifts',
        columns: [
            {
                heading: 'End of Shift Duties',
                icon: 'fa-clock',
                items: [
                    'Complete all work in progress',
                    'Return all tools and materials',
                    'Clean and organize work area',
                    'Document status clearly',
                    'Communicate issues to next shift'
                ]
            },
            {
                heading: 'Start of Shift Duties',
                icon: 'fa-play',
                items: [
                    'Verify area is organized',
                    'Check all tools are present',
                    'Review previous shift notes',
                    'Report any missing items',
                    'Prepare for production'
                ]
            }
        ],
        goldenRule: 'The next shift should find everything ready!',
        image: null
    },
    // SLIDE 21 - Common Organization Mistakes
    {
        id: 21,
        type: 'standard',
        title: 'Common Organization Mistakes',
        subtitle: 'What to Avoid',
        columns: [
            {
                heading: 'Bad Habits to Break',
                icon: 'fa-ban',
                items: [
                    '"I\'ll put it back later"',
                    '"Someone else will clean up"',
                    'Keeping "just in case" items',
                    'Using wrong item because right one missing',
                    'Piling items on surfaces',
                    'Ignoring organizational systems'
                ]
            },
            {
                heading: 'Good Habits to Build',
                icon: 'fa-thumbs-up',
                items: [
                    'Return items immediately after use',
                    'Take ownership of your area',
                    'Keep only what\'s needed',
                    'Maintain designated places',
                    'Clean as you go',
                    'Follow the system consistently'
                ]
            }
        ],
        image: null
    },
    // SLIDE 22 - 5S Audit Process
    {
        id: 22,
        type: 'standard',
        title: '5S Audit Process',
        subtitle: 'Measuring and Maintaining Standards',
        columns: [
            {
                heading: 'Audit Elements',
                icon: 'fa-clipboard-check',
                items: [
                    'Weekly self-audits by team',
                    'Monthly supervisor audits',
                    'Quarterly management audits',
                    'Scoring system (1-5 scale)',
                    'Photographic documentation'
                ]
            },
            {
                heading: 'Audit Questions',
                icon: 'fa-question-circle',
                items: [
                    'Are unnecessary items removed?',
                    'Is everything in its place?',
                    'Is the area clean and safe?',
                    'Are standards being followed?',
                    'Is the system being sustained?'
                ]
            }
        ],
        image: null
    },
    // SLIDE 23 - Benefits of Organization
    {
        id: 23,
        type: 'standard',
        title: 'Measurable Benefits',
        subtitle: 'What Organization Achieves',
        columns: [
            {
                heading: 'Efficiency Gains',
                icon: 'fa-rocket',
                items: [
                    'Up to 50% reduction in search time',
                    'Faster changeovers',
                    'Reduced equipment downtime',
                    'Improved workflow',
                    'Higher productivity'
                ]
            },
            {
                heading: 'Quality & Safety',
                icon: 'fa-shield-alt',
                items: [
                    'Fewer contamination incidents',
                    'Reduced accident rates',
                    'Better product quality',
                    'Successful audits',
                    'Improved employee morale'
                ]
            }
        ],
        image: null
    },
    // SLIDE 24 - Personal Responsibility
    {
        id: 24,
        type: 'standard',
        title: 'Personal Responsibility',
        subtitle: 'Your Role in Organization',
        columns: [
            {
                heading: 'Your Commitments',
                icon: 'fa-hand-holding-heart',
                items: [
                    'Own your workspace organization',
                    'Follow all organizational standards',
                    'Return every item after use',
                    'Clean your area daily',
                    'Report problems immediately'
                ]
            },
            {
                heading: 'Team Commitments',
                icon: 'fa-users',
                items: [
                    'Hold each other accountable',
                    'Share best practices',
                    'Help maintain common areas',
                    'Respect shared equipment',
                    'Support continuous improvement'
                ]
            }
        ],
        goldenRule: 'Organization is everyone\'s responsibility!',
        image: null
    },
    // SLIDE 25 - Quick Reference Guide
    {
        id: 25,
        type: 'standard',
        title: 'Quick Reference Guide',
        subtitle: 'Daily Organization Checklist',
        columns: [
            {
                heading: 'Start of Day',
                icon: 'fa-sun',
                items: [
                    '☐ Verify tools are in place',
                    '☐ Check materials available',
                    '☐ Review work area condition',
                    '☐ Gather needed items',
                    '☐ Prepare workstation'
                ]
            },
            {
                heading: 'During Work',
                icon: 'fa-clock',
                items: [
                    '☐ Return items immediately after use',
                    '☐ Keep work area clear',
                    '☐ Dispose of waste properly',
                    '☐ Maintain organization'
                ]
            },
            {
                heading: 'End of Day',
                icon: 'fa-moon',
                items: [
                    '☐ Return ALL items to positions',
                    '☐ Clean work surfaces',
                    '☐ File all documents',
                    '☐ Check nothing is missing',
                    '☐ Leave area ready for next shift'
                ]
            }
        ],
        image: null
    },
    // SLIDE 26 - Conclusion
    {
        id: 26,
        type: 'conclusion',
        title: 'Organization Summary',
        subtitle: 'Building a Culture of Order',
        conclusionItems: [
            { icon: 'fa-undo', title: 'Return Items', text: 'Every item back to its place immediately' },
            { icon: 'fa-broom', title: 'Clean Daily', text: 'Maintain cleanliness as you work' },
            { icon: 'fa-clipboard-check', title: 'Follow Standards', text: 'Consistency creates excellence' },
            { icon: 'fa-users', title: 'Team Effort', text: 'Everyone contributes to organization' }
        ],
        image: null
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { organizationSlidesData };
}
