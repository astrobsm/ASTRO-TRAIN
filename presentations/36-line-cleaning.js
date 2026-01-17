// ===== PRESENTATION 36: LINE CLEANING PROTOCOLS =====
// For: Production Staff | Category: SOP Training

const lineCleaningSlides = [
    {
        id: 1,
        type: 'title',
        title: 'LINE CLEANING PROTOCOLS',
        subtitle: 'Product-Specific Cleaning Procedures',
        tagline: 'Clean Lines, Pure Products',
        content: [
            { icon: 'fa-broom', text: 'WOUND CLEX® line cleaning' },
            { icon: 'fa-prescription-bottle', text: 'HERA Wound Gel line cleaning' },
            { icon: 'fa-bandage', text: 'Wound Care Gauze line cleaning' },
            { icon: 'fa-check-double', text: 'Verification and documentation' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'WHY LINE CLEANING MATTERS',
        subtitle: 'Critical for Product Quality',
        highlightBox: {
            icon: 'fa-shield-virus',
            title: 'LINE CLEANING IMPORTANCE',
            points: [
                'Prevents cross-contamination between batches',
                'Removes product residues that harbor microbes',
                'Ensures accurate product composition',
                'Required before EVERY production run',
                'Required when changing products (product changeover)',
                'Required after equipment maintenance',
                'Regulatory requirement for GMP compliance'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'GENERAL CLEANING PRINCIPLES',
        subtitle: 'Apply to All Product Lines',
        columns: [
            {
                heading: 'Cleaning Sequence',
                icon: 'fa-list-ol',
                items: [
                    '1. Dry removal of bulk residue',
                    '2. Water rinse (potable water)',
                    '3. Detergent wash (approved agent)',
                    '4. Clean water rinse',
                    '5. Purified water final rinse',
                    '6. Sanitization/sterilization'
                ]
            },
            {
                heading: 'Required Materials',
                icon: 'fa-box-open',
                items: [
                    'Approved cleaning detergent',
                    '5% Acetic acid solution',
                    'Purified/distilled water',
                    'Lint-free cleaning cloths',
                    'Dedicated cleaning brushes',
                    'UV sterilization equipment'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'highlight',
        title: 'WOUND CLEX® LINE CLEANING',
        subtitle: 'Antiseptic Solution Production Line',
        highlightBox: {
            icon: 'fa-flask',
            title: 'WOUND CLEX® EQUIPMENT TO CLEAN',
            points: [
                'MIXING TANKS - Primary and secondary',
                'FILTERS - All inline filters',
                'HEATERS - Temperature control units',
                'TRANSFER LINES - All piping and hoses',
                'FILLING NOZZLES - Bottle filling equipment',
                'MEASURING VESSELS - All volumetric equipment',
                'UV CHAMBER - Sterilization unit'
            ]
        },
        image: null
    },
    {
        id: 5,
        type: 'process',
        title: 'WOUND CLEX® CLEANING PROCEDURE',
        subtitle: 'Step-by-Step Tank Cleaning',
        steps: [
            {
                number: '1',
                title: 'Drain & Empty',
                description: 'Completely drain all tanks and lines of product residue'
            },
            {
                number: '2',
                title: 'Water Flush',
                description: 'Flush with clean potable water until water runs clear'
            },
            {
                number: '3',
                title: 'Detergent Wash',
                description: 'Scrub all surfaces with approved detergent solution, pay attention to corners'
            },
            {
                number: '4',
                title: 'Acetic Acid Rinse',
                description: 'Apply 5% acetic acid solution to all surfaces, let sit for 10 minutes'
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'process',
        title: 'WOUND CLEX® CLEANING (Continued)',
        subtitle: 'Final Steps',
        steps: [
            {
                number: '5',
                title: 'Purified Water Rinse',
                description: 'Rinse thoroughly with purified/distilled water - minimum 3 rinses'
            },
            {
                number: '6',
                title: 'UV Sterilization',
                description: 'Expose all equipment to UV rays for complete sterilization (20 min)'
            },
            {
                number: '7',
                title: 'Drying',
                description: 'Allow equipment to air dry completely in controlled environment'
            },
            {
                number: '8',
                title: 'Verification',
                description: 'Perform visual inspection and swab testing before use'
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'highlight',
        title: 'HERA WOUND GEL LINE CLEANING',
        subtitle: 'Emulsion Production Line',
        highlightBox: {
            icon: 'fa-prescription-bottle',
            title: 'HERA GEL EQUIPMENT TO CLEAN',
            points: [
                'OIL PHASE TANK (50L) - Critical for emulsion quality',
                'WATER PHASE TANK (50L) - Must be residue-free',
                'MIXING TANK - Homogenization vessel',
                'HOMOGENIZER - Blades and housing',
                'COOLING LINES - Temperature control system',
                'TABLE MIXERS - Ingredient blending equipment',
                'TUBE FILLING MACHINE - All product contact surfaces'
            ]
        },
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'HERA GEL CLEANING PROCEDURE',
        subtitle: 'Special Considerations for Gel Products',
        steps: [
            {
                number: '1',
                title: 'Hot Water Flush',
                description: 'Use HOT water (60-70°C) to dissolve gel residues - cold water will solidify'
            },
            {
                number: '2',
                title: 'Alkaline Detergent',
                description: 'Use alkaline detergent for oil phase residue removal - scrub thoroughly'
            },
            {
                number: '3',
                title: 'Homogenizer Disassembly',
                description: 'Disassemble homogenizer blades for manual cleaning and inspection'
            },
            {
                number: '4',
                title: 'Acid Rinse',
                description: 'Apply 5% acetic acid to neutralize alkaline residue'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'HERA GEL - CRITICAL POINTS',
        subtitle: 'Gel Residue Challenges',
        columns: [
            {
                heading: 'Oil Phase Cleaning',
                icon: 'fa-oil-can',
                items: [
                    'Oil residues require hot water',
                    'Use degreasing detergent',
                    'Multiple wash cycles may be needed',
                    'Check for oily film after rinse',
                    'Dry completely to prevent water spots'
                ]
            },
            {
                heading: 'Homogenizer Care',
                icon: 'fa-blender',
                items: [
                    'Disassemble after each batch',
                    'Clean blades individually',
                    'Inspect for wear or damage',
                    'Lubricate seals if required',
                    'Reassemble with care'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'highlight',
        title: 'WOUND CARE GAUZE LINE CLEANING',
        subtitle: 'Honey Immersion System',
        highlightBox: {
            icon: 'fa-bandage',
            title: 'GAUZE LINE EQUIPMENT TO CLEAN',
            points: [
                'PASTEURIZATION CHAMBERS - Honey heating vessels',
                'HONEY IMMERSION TANK - Main impregnation vessel',
                'IMMERSION PLATE - Gauze pressing mechanism',
                'MIXING CHAMBER - Povidone blending vessel',
                'HOMOGENIZER - For honey-iodine mixing',
                'FILTERS - Honey filtration screens',
                'PACKAGING EQUIPMENT - All contact surfaces'
            ]
        },
        image: null
    },
    {
        id: 11,
        type: 'process',
        title: 'GAUZE LINE CLEANING PROCEDURE',
        subtitle: 'Honey Residue Removal',
        steps: [
            {
                number: '1',
                title: 'Hot Water Dissolution',
                description: 'Use HOT water (70-80°C) to dissolve honey - honey dissolves easily in hot water'
            },
            {
                number: '2',
                title: 'Mechanical Scrubbing',
                description: 'Scrub all surfaces with brushes to remove sticky residues'
            },
            {
                number: '3',
                title: 'Detergent Wash',
                description: 'Apply cleaning detergent, focusing on corners and crevices'
            },
            {
                number: '4',
                title: 'Iodine Residue Check',
                description: 'Inspect for brown iodine staining - may require additional cleaning'
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'GAUZE LINE - SPECIAL CONSIDERATIONS',
        subtitle: 'Unique Cleaning Challenges',
        columns: [
            {
                heading: 'Honey Residue',
                icon: 'fa-jar',
                items: [
                    'Honey is hygroscopic (attracts moisture)',
                    'Must remove completely - supports microbial growth',
                    'Hot water is essential for dissolution',
                    'Check for crystallized honey deposits',
                    'Multiple rinses may be needed'
                ]
            },
            {
                heading: 'Iodine Staining',
                icon: 'fa-droplet',
                items: [
                    'Iodine causes brown staining',
                    'Staining does not affect cleanliness',
                    'Use vitamin C solution to remove stains',
                    'Do not confuse staining with contamination',
                    'Document stain locations in log'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'highlight',
        title: 'CLEANING VERIFICATION',
        subtitle: 'Proving Equipment is Clean',
        highlightBox: {
            icon: 'fa-magnifying-glass-plus',
            title: 'VERIFICATION METHODS',
            points: [
                'VISUAL INSPECTION: No visible residue, stains, or debris',
                'SWAB TESTING: Microbial swabs of critical surfaces',
                'RINSE WATER TESTING: Final rinse water should be clear',
                'TOC TESTING: Total Organic Carbon if required',
                'pH TESTING: Confirm neutral pH after cleaning',
                'DOCUMENT all verification results in cleaning log'
            ]
        },
        image: null
    },
    {
        id: 14,
        type: 'process',
        title: 'DOCUMENTATION REQUIREMENTS',
        subtitle: 'Complete Cleaning Records',
        steps: [
            {
                number: '1',
                title: 'Equipment ID',
                description: 'Record all equipment cleaned with identification numbers'
            },
            {
                number: '2',
                title: 'Cleaning Details',
                description: 'Document cleaning agents used, concentrations, and contact times'
            },
            {
                number: '3',
                title: 'Verification Results',
                description: 'Record results of all verification tests (visual, swab, rinse)'
            },
            {
                number: '4',
                title: 'Sign-Off',
                description: 'Operator signature, date/time, and QA verification signature'
            }
        ],
        image: null
    },
    {
        id: 15,
        type: 'conclusion',
        title: 'LINE CLEANING EXCELLENCE',
        subtitle: 'Clean Equipment, Quality Products',
        conclusionPoints: [
            {
                icon: 'fa-temperature-high',
                title: 'Temperature Matters',
                text: 'Use hot water for gel and honey residues'
            },
            {
                icon: 'fa-list-check',
                title: 'Follow Sequence',
                text: 'Water, detergent, rinse, acid, rinse, sterilize'
            },
            {
                icon: 'fa-eye',
                title: 'Verify Cleanliness',
                text: 'Always confirm with visual and swab testing'
            },
            {
                icon: 'fa-file-signature',
                title: 'Document All',
                text: 'Complete cleaning log with all details'
            }
        ],
        image: null
    }
];
