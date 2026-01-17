// ===== PRESENTATION 10: LIQUID COMPOUNDING & FORMULATION =====
// For: Production Staff | Category: Production Training

const liquidCompoundingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'LIQUID COMPOUNDING & FORMULATION',
        subtitle: 'Manufacturing Liquid Products',
        tagline: 'Precision in Every Drop',
        content: [
            { icon: 'fa-flask-vial', text: 'Understand formulation principles' },
            { icon: 'fa-gears', text: 'Master compounding techniques' },
            { icon: 'fa-vial', text: 'Learn quality controls' },
            { icon: 'fa-shield-virus', text: 'Prevent contamination' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Liquid Pharmaceutical Products',
        subtitle: 'Overview of Liquid Dosage Forms',
        columns: [
            {
                heading: 'Types of Liquids',
                icon: 'fa-bottle-droplet',
                items: [
                    'Solutions (clear liquids)',
                    'Suspensions (particles in liquid)',
                    'Emulsions (two immiscible liquids)',
                    'Syrups (sugar-based)',
                    'Our products: Wound cleansing solutions'
                ]
            },
            {
                heading: 'Characteristics',
                icon: 'fa-list-check',
                items: [
                    'Uniform dosing',
                    'Easy to administer',
                    'Fast absorption possible',
                    'Patient-friendly',
                    'Require careful formulation'
                ]
            }
        ],
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'WOUND CLEX® Formulation',
        subtitle: 'Our Wound Cleansing Solution',
        columns: [
            {
                heading: 'Product Characteristics',
                icon: 'fa-prescription-bottle',
                items: [
                    'Clear aqueous solution',
                    'Antimicrobial properties',
                    'Sterile final product',
                    'Multiple pack sizes',
                    'Ready to use'
                ]
            },
            {
                heading: 'Key Quality Attributes',
                icon: 'fa-star',
                items: [
                    'Correct pH',
                    'Proper concentration',
                    'Sterility',
                    'Clarity/appearance',
                    'Stability over shelf life'
                ]
            }
        ],
        goldenRule: 'Every batch must be identical to the approved formula',
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Compounding Equipment',
        subtitle: 'Key Manufacturing Equipment',
        columns: [
            {
                heading: 'Mixing Equipment',
                icon: 'fa-blender',
                items: [
                    'Manufacturing vessels/tanks',
                    'Agitators/mixers',
                    'Homogenizers',
                    'Transfer pumps',
                    'Inline filters'
                ]
            },
            {
                heading: 'Support Equipment',
                icon: 'fa-gears',
                items: [
                    'Weighing balances',
                    'pH meters',
                    'Conductivity meters',
                    'Temperature probes',
                    'Transfer hoses and fittings'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Pre-Production Preparation',
        subtitle: 'Getting Ready to Compound',
        columns: [
            {
                heading: 'Area Preparation',
                icon: 'fa-broom',
                items: [
                    'Complete line clearance',
                    'Environmental monitoring',
                    'Temperature/humidity check',
                    'Clean equipment verified',
                    'No previous product remnants'
                ]
            },
            {
                heading: 'Material Preparation',
                icon: 'fa-boxes-stacked',
                items: [
                    'All materials dispensed',
                    'Approved status verified',
                    'Quantities confirmed',
                    'Batch record ready',
                    'Labels prepared'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'The Compounding Process',
        subtitle: 'Step-by-Step Manufacturing',
        columns: [
            {
                heading: 'Initial Steps',
                icon: 'fa-play',
                items: [
                    'Add measured water to vessel',
                    'Start agitation',
                    'Heat if required',
                    'Add ingredients in order',
                    'Follow batch record exactly'
                ]
            },
            {
                heading: 'Completion Steps',
                icon: 'fa-flag-checkered',
                items: [
                    'Adjust volume/concentration',
                    'Verify pH, appearance',
                    'Sample for QC testing',
                    'Transfer to holding vessel',
                    'Complete documentation'
                ]
            }
        ],
        goldenRule: 'Order of addition matters',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Critical Process Parameters',
        subtitle: 'What Must Be Controlled',
        columns: [
            {
                heading: 'Physical Parameters',
                icon: 'fa-thermometer',
                items: [
                    'Temperature during mixing',
                    'Agitation speed and time',
                    'Order of ingredient addition',
                    'Holding time limits',
                    'Transfer conditions'
                ]
            },
            {
                heading: 'Quality Parameters',
                icon: 'fa-vial',
                items: [
                    'pH value',
                    'Appearance (clarity, color)',
                    'Active concentration',
                    'Volume/weight',
                    'Microbial limits'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'In-Process Controls',
        subtitle: 'Quality Checks During Manufacturing',
        columns: [
            {
                heading: 'Testing Points',
                icon: 'fa-clipboard-check',
                items: [
                    'After dissolution complete',
                    'After pH adjustment',
                    'After volume makeup',
                    'Before transfer to filling',
                    'Per batch record requirements'
                ]
            },
            {
                heading: 'Parameters Checked',
                icon: 'fa-list',
                items: [
                    'Visual appearance',
                    'pH measurement',
                    'Specific gravity (if required)',
                    'Active content (assay)',
                    'Temperature'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Contamination Prevention',
        subtitle: 'Keeping Products Pure',
        columns: [
            {
                heading: 'Sources of Contamination',
                icon: 'fa-biohazard',
                items: [
                    'Personnel (skin, hair, breath)',
                    'Environment (air, surfaces)',
                    'Equipment (residues, particles)',
                    'Raw materials (impurities)',
                    'Water (microbial, chemical)'
                ]
            },
            {
                heading: 'Prevention Measures',
                icon: 'fa-shield-virus',
                items: [
                    'Proper gowning',
                    'Clean room conditions',
                    'Equipment cleaning validated',
                    'Closed system operations',
                    'Air handling controls'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Documentation Requirements',
        subtitle: 'Recording Every Step',
        columns: [
            {
                heading: 'Batch Manufacturing Record',
                icon: 'fa-file-lines',
                items: [
                    'Material quantities added',
                    'Process parameters recorded',
                    'In-process results',
                    'Equipment used',
                    'Operator signatures'
                ]
            },
            {
                heading: 'Good Documentation Practice',
                icon: 'fa-pen',
                items: [
                    'Record at time of action',
                    'Use permanent ink',
                    'Date and sign entries',
                    'Correct errors properly',
                    'Complete all fields'
                ]
            }
        ],
        goldenRule: 'Document as you go, not after',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Bulk Holding',
        subtitle: 'Between Compounding and Filling',
        columns: [
            {
                heading: 'Holding Requirements',
                icon: 'fa-clock',
                items: [
                    'Maximum hold time defined',
                    'Proper vessel used',
                    'Covered or closed system',
                    'Temperature controlled',
                    'Labeled with batch info'
                ]
            },
            {
                heading: 'Before Filling',
                icon: 'fa-arrow-right',
                items: [
                    'QC approval required',
                    'Verify specifications met',
                    'Re-mix if specified',
                    'Transfer to filling area',
                    'Maintain chain of custody'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Troubleshooting Common Issues',
        subtitle: 'Problem Solving in Compounding',
        columns: [
            {
                heading: 'Common Problems',
                icon: 'fa-bug',
                items: [
                    'Incomplete dissolution',
                    'pH out of range',
                    'Precipitation',
                    'Color changes',
                    'Microbial contamination'
                ]
            },
            {
                heading: 'Response',
                icon: 'fa-wrench',
                items: [
                    'Stop production',
                    'Notify supervisor',
                    'Document the issue',
                    'Quarantine affected material',
                    'Await investigation outcome'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Operator Competencies',
        subtitle: 'Skills for Successful Compounding',
        columns: [
            {
                heading: 'Technical Skills',
                icon: 'fa-graduation-cap',
                items: [
                    'Equipment operation',
                    'Weighing/measuring accuracy',
                    'pH adjustment techniques',
                    'Sampling procedures',
                    'Documentation practices'
                ]
            },
            {
                heading: 'Quality Mindset',
                icon: 'fa-brain',
                items: [
                    'Attention to detail',
                    'Following procedures exactly',
                    'Recognizing abnormalities',
                    'Reporting issues promptly',
                    'Taking ownership of quality'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Compounding Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-clipboard-list', title: 'Follow the Batch Record', text: 'Every step, every time' },
            { icon: 'fa-scale-balanced', title: 'Precision Matters', text: 'Accurate measurements are critical' },
            { icon: 'fa-shield-virus', title: 'Prevent Contamination', text: 'Clean techniques always' },
            { icon: 'fa-pen', title: 'Document Everything', text: 'Complete, accurate records' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { liquidCompoundingSlides };
}
