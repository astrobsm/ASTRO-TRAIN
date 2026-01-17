// ===== PRESENTATION 39: FACTORY CLEANING PROTOCOL =====
// For: All Production Staff | Category: Pre-Production Procedures

const factoryCleaningSlides = [
    {
        id: 1,
        type: 'title',
        title: 'FACTORY CLEANING PROTOCOL',
        subtitle: 'Pre-Production Cleaning Procedures',
        tagline: 'Clean Factory, Safe Products',
        content: [
            { icon: 'fa-broom', text: 'Daily cleaning requirements' },
            { icon: 'fa-spray-can-sparkles', text: 'Sanitization procedures' },
            { icon: 'fa-clipboard-check', text: 'Verification methods' },
            { icon: 'fa-calendar-week', text: 'Periodic deep cleaning' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'PRE-PRODUCTION CLEANING IMPORTANCE',
        subtitle: 'Why We Clean Before We Start',
        highlightBox: {
            icon: 'fa-exclamation-circle',
            title: 'CRITICAL REASONS FOR CLEANING',
            points: [
                'Eliminates dust and particulates from overnight settling',
                'Removes any residue from previous production',
                'Prevents cross-contamination between products',
                'Ensures controlled environment for sterile production',
                'Required by Good Manufacturing Practice (GMP)',
                'Protects product quality and patient safety',
                'Creates professional, organized workspace'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'CLEANING ZONES',
        subtitle: 'Area Classification',
        columns: [
            {
                heading: 'Critical Zone (Grade A/B)',
                icon: 'fa-shield-virus',
                items: [
                    'Mixing and filling areas',
                    'Open product containers',
                    'Direct product contact surfaces',
                    'HIGHEST cleaning standards',
                    'Clean LAST, just before production'
                ]
            },
            {
                heading: 'Support Zone (Grade C/D)',
                icon: 'fa-warehouse',
                items: [
                    'Material staging areas',
                    'Personnel gowning areas',
                    'Equipment storage rooms',
                    'Standard cleaning procedures',
                    'Clean FIRST each day'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'process',
        title: 'DAILY CLEANING SEQUENCE',
        subtitle: 'Start from Outside, Work Inward',
        steps: [
            {
                number: '1',
                title: 'Outer Areas',
                description: 'Clean corridors, gowning rooms, and staging areas first (7:00 AM)'
            },
            {
                number: '2',
                title: 'Support Areas',
                description: 'Clean equipment storage, material staging areas (7:15 AM)'
            },
            {
                number: '3',
                title: 'Production Floor',
                description: 'Clean production room floors, walls, and general surfaces (7:30 AM)'
            },
            {
                number: '4',
                title: 'Equipment & Contact',
                description: 'Clean and sanitize equipment surfaces and work stations (7:45 AM)'
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'APPROVED CLEANING AGENTS',
        subtitle: 'Use Only These Products',
        highlightBox: {
            icon: 'fa-flask-vial',
            title: 'CLEANING SOLUTIONS LIST',
            points: [
                'GENERAL CLEANING: Diluted neutral detergent (1:50 ratio)',
                'SANITIZATION: 70% Isopropyl Alcohol (IPA)',
                'FLOOR CLEANING: Approved floor cleaner per SOP',
                'EQUIPMENT SURFACES: 70% IPA or approved sanitizer',
                'STAINLESS STEEL: IPA or approved SS cleaner',
                'NEVER USE: Bleach on stainless steel, ammonia products',
                'All solutions must be freshly prepared daily'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'FLOOR CLEANING PROCEDURE',
        subtitle: 'The Foundation of Clean',
        columns: [
            {
                heading: 'Dry Cleaning First',
                icon: 'fa-broom',
                items: [
                    'Remove large debris manually',
                    'Dry mop from far corners inward',
                    'Work toward exit door',
                    'Use clean, lint-free mops',
                    'Collect all loose material'
                ]
            },
            {
                heading: 'Wet Cleaning Second',
                icon: 'fa-droplet',
                items: [
                    'Prepare fresh cleaning solution',
                    'Wet mop in same pattern',
                    'Change solution when dirty',
                    'Allow to air dry or use squeegee',
                    'Verify no residue remains'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'process',
        title: 'WALL AND SURFACE CLEANING',
        subtitle: 'Top to Bottom Approach',
        steps: [
            {
                number: 'TOP',
                title: 'Ceiling & Upper Walls',
                description: 'Wipe light fixtures, ceiling tiles (if accessible), upper wall sections'
            },
            {
                number: 'MID',
                title: 'Mid-Level Surfaces',
                description: 'Clean shelving, equipment exteriors, switches, door handles'
            },
            {
                number: 'LOW',
                title: 'Lower Walls & Baseboards',
                description: 'Wipe lower wall sections and baseboards with damp cloth'
            },
            {
                number: 'FINAL',
                title: 'Sanitize',
                description: 'Apply sanitizer spray to high-touch surfaces, allow contact time'
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'highlight',
        title: 'EQUIPMENT CLEANING',
        subtitle: 'Production Equipment Preparation',
        highlightBox: {
            icon: 'fa-gears',
            title: 'EQUIPMENT CLEANING STEPS',
            points: [
                'VERIFY equipment is powered OFF and locked out',
                'Remove any product residue from previous batch',
                'Wipe all external surfaces with 70% IPA',
                'Clean control panels with dry cloth (no liquids)',
                'Inspect and clean filling nozzles/dispensers',
                'Wipe down work tables and stands',
                'Allow surfaces to dry completely before use'
            ]
        },
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'WORK STATION PREPARATION',
        subtitle: 'Individual Work Areas',
        columns: [
            {
                heading: 'Clearing & Organizing',
                icon: 'fa-border-all',
                items: [
                    'Remove all non-essential items',
                    'Clear work surface completely',
                    'Organize tools and materials',
                    'Position required documents',
                    'Check lighting is adequate'
                ]
            },
            {
                heading: 'Sanitizing',
                icon: 'fa-spray-can',
                items: [
                    'Spray surface with 70% IPA',
                    'Wipe with clean lint-free cloth',
                    'Allow 2-minute contact time',
                    'Wipe dry if needed',
                    'Ready for production'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'process',
        title: 'VERIFICATION CHECKLIST',
        subtitle: 'Confirm Cleaning Complete',
        steps: [
            {
                number: '✓',
                title: 'Visual Check',
                description: 'Inspect all surfaces for visible debris, dust, residue, or contamination'
            },
            {
                number: '✓',
                title: 'Touch Test',
                description: 'Gloved hand check - surfaces should feel clean, not sticky or gritty'
            },
            {
                number: '✓',
                title: 'Odor Check',
                description: 'No unusual smells - cleaning agents dissipated, no product odors'
            },
            {
                number: '✓',
                title: 'Sign Off',
                description: 'Complete cleaning log with date, time, areas cleaned, and signature'
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'highlight',
        title: 'CLEANING DOCUMENTATION',
        subtitle: 'Record Your Work',
        highlightBox: {
            icon: 'fa-file-signature',
            title: 'REQUIRED DOCUMENTATION',
            points: [
                'Daily Cleaning Log: Date, time started/completed',
                'Areas Cleaned: Checklist of all zones',
                'Cleaning Agents Used: Solution type and dilution',
                'Operator Name: Who performed cleaning',
                'Verification: Supervisor sign-off',
                'Any Issues: Report abnormalities or maintenance needs',
                'Attach to production batch record'
            ]
        },
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'WEEKLY DEEP CLEANING',
        subtitle: 'Enhanced Cleaning Schedule',
        columns: [
            {
                heading: 'Additional Weekly Tasks',
                icon: 'fa-calendar-week',
                items: [
                    'Clean behind and under equipment',
                    'Detailed ceiling and vent cleaning',
                    'Deep clean drains and floor drains',
                    'Wash walls fully from top to bottom',
                    'Clean storage areas thoroughly'
                ]
            },
            {
                heading: 'Monthly Tasks',
                icon: 'fa-calendar',
                items: [
                    'Air handling unit filter check',
                    'Light fixture interior cleaning',
                    'Equipment calibration verification',
                    'Pest control inspection points',
                    'Environmental monitoring review'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'CLEANING EQUIPMENT CARE',
        subtitle: 'Maintain Your Tools',
        highlightBox: {
            icon: 'fa-toolbox',
            title: 'CLEANING TOOL MANAGEMENT',
            points: [
                'Use dedicated cleaning tools for each area (color-coded)',
                'Wash mops and cloths after each use',
                'Replace worn or frayed mop heads',
                'Store cleaning tools in designated area',
                'Never use production area tools elsewhere',
                'Sanitize buckets and containers daily',
                'Dispose of cleaning cloths as required'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'standard',
        title: 'SAFETY DURING CLEANING',
        subtitle: 'Protect Yourself',
        columns: [
            {
                heading: 'Required PPE',
                icon: 'fa-user-shield',
                items: [
                    'Cleaning gloves (rubber/nitrile)',
                    'Safety goggles if using sprays',
                    'Closed-toe shoes (non-slip)',
                    'Apron if wet cleaning',
                    'Face mask if chemical sensitivity'
                ]
            },
            {
                heading: 'Safety Practices',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Read chemical labels/SDSs',
                    'Never mix cleaning chemicals',
                    'Ensure adequate ventilation',
                    'Use wet floor signs',
                    'Report spills or accidents'
                ]
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'FACTORY CLEANING EXCELLENCE',
        subtitle: 'Start Clean, Stay Clean',
        conclusionPoints: [
            {
                icon: 'fa-clock',
                title: 'Clean Before Production',
                text: 'Complete all cleaning before production starts'
            },
            {
                icon: 'fa-arrows-to-circle',
                title: 'Outside to Inside',
                text: 'Clean from outer areas toward critical zones'
            },
            {
                icon: 'fa-clipboard-check',
                title: 'Verify & Document',
                text: 'Inspect all areas and complete cleaning log'
            },
            {
                icon: 'fa-rotate',
                title: 'Daily Discipline',
                text: 'Consistent daily cleaning ensures quality'
            }
        ],
        image: null
    }
];
