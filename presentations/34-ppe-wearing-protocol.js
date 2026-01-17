// ===== PRESENTATION 34: PPE WEARING PROTOCOL =====
// For: All Staff | Category: SOP Training

const ppeWearingSlides = [
    {
        id: 1,
        type: 'title',
        title: 'PPE WEARING PROTOCOL',
        subtitle: 'Personal Protective Equipment Guide',
        tagline: 'Protection Starts With Proper Technique',
        content: [
            { icon: 'fa-user-shield', text: 'Correct PPE donning sequence' },
            { icon: 'fa-hand-sparkles', text: 'Gloves, Cap, and Mask protocols' },
            { icon: 'fa-check-double', text: 'Fit verification techniques' },
            { icon: 'fa-rotate-left', text: 'Removal and disposal procedures' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'highlight',
        title: 'WHY PPE MATTERS',
        subtitle: 'Protection for Products and People',
        highlightBox: {
            icon: 'fa-shield-virus',
            title: 'DUAL PROTECTION PRINCIPLE',
            points: [
                'Protects PRODUCTS from human contamination (hair, skin cells, microbes)',
                'Protects YOU from chemical exposure and hazards',
                'Required by GMP regulations for pharmaceutical manufacturing',
                'Single breach can contaminate entire batch',
                'Proper technique is as important as wearing PPE',
                'PPE is your last line of defense - never skip it'
            ]
        },
        image: null
    },
    {
        id: 3,
        type: 'process',
        title: 'STEP 1: HAND HYGIENE FIRST',
        subtitle: 'Always Before Donning PPE',
        steps: [
            {
                number: '1A',
                title: 'Wet Hands',
                description: 'Wet hands with clean running water, apply antimicrobial soap'
            },
            {
                number: '1B',
                title: 'Lather & Scrub',
                description: 'Scrub all surfaces for minimum 20 seconds - palms, backs, between fingers, under nails'
            },
            {
                number: '1C',
                title: 'Rinse & Dry',
                description: 'Rinse thoroughly under running water, dry with clean paper towel'
            },
            {
                number: '1D',
                title: 'Sanitize',
                description: 'Apply alcohol-based hand sanitizer (70%+), rub until completely dry'
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'STEP 2: WEARING THE CAP',
        subtitle: 'Complete Hair Coverage',
        columns: [
            {
                heading: 'Donning Procedure',
                icon: 'fa-hat-wizard',
                items: [
                    'Hold cap by the elastic band',
                    'Place at front of forehead first',
                    'Pull back to cover ALL hair',
                    'Tuck in any loose strands',
                    'Ensure ears are covered if using bouffant style'
                ]
            },
            {
                heading: 'Common Mistakes to Avoid',
                icon: 'fa-circle-xmark',
                items: [
                    'Hair sticking out at sides or back',
                    'Cap sitting too far back on head',
                    'Not covering sideburns or facial hair',
                    'Using torn or stretched caps',
                    'Adjusting cap with contaminated hands'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'highlight',
        title: 'CAP TYPES & SELECTION',
        subtitle: 'Choose the Right Cap for Your Hair',
        highlightBox: {
            icon: 'fa-head-side',
            title: 'CAP SELECTION GUIDE',
            points: [
                'BOUFFANT CAP: Best for long or thick hair - provides full coverage',
                'CLIP CAP: Suitable for short hair - lightweight and comfortable',
                'SURGICAL CAP: Ties at back - good for medium length hair',
                'Beard covers REQUIRED for facial hair',
                'Replace cap if it becomes wet, torn, or contaminated',
                'Never reuse disposable caps between shifts'
            ]
        },
        image: null
    },
    {
        id: 6,
        type: 'process',
        title: 'STEP 3: WEARING THE FACE MASK',
        subtitle: 'Proper Respiratory Protection',
        steps: [
            {
                number: '3A',
                title: 'Inspect Mask',
                description: 'Check mask is not damaged, has metal nose strip, and correct side facing out'
            },
            {
                number: '3B',
                title: 'Position Mask',
                description: 'Hold mask by ear loops, place over nose and mouth, secure loops behind ears'
            },
            {
                number: '3C',
                title: 'Mold Nose Strip',
                description: 'Press metal strip firmly over bridge of nose for secure fit'
            },
            {
                number: '3D',
                title: 'Adjust & Check',
                description: 'Pull bottom of mask under chin, ensure no gaps around edges'
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'MASK FIT VERIFICATION',
        subtitle: 'Ensuring Proper Seal',
        columns: [
            {
                heading: 'Correct Fit Signs',
                icon: 'fa-check-circle',
                items: [
                    'Mask covers nose and mouth completely',
                    'Metal strip molded to nose shape',
                    'No gaps at sides of face',
                    'Bottom of mask under chin',
                    'Comfortable but snug fit'
                ]
            },
            {
                heading: 'Poor Fit Signs',
                icon: 'fa-times-circle',
                items: [
                    'Glasses fogging up (air leaking)',
                    'Gaps visible at sides',
                    'Mask slipping down nose',
                    'Loose around chin area',
                    'Air felt escaping at edges'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'process',
        title: 'STEP 4: WEARING GLOVES',
        subtitle: 'Sterile Gloving Technique',
        steps: [
            {
                number: '4A',
                title: 'Select Size',
                description: 'Choose correct glove size - too tight restricts movement, too loose reduces dexterity'
            },
            {
                number: '4B',
                title: 'Don First Glove',
                description: 'Hold glove at cuff edge, insert hand, pull on without touching outside surface'
            },
            {
                number: '4C',
                title: 'Don Second Glove',
                description: 'Slide gloved fingers under cuff of second glove, pull on while avoiding skin contact'
            },
            {
                number: '4D',
                title: 'Adjust Fit',
                description: 'Interlock fingers to seat gloves properly, check for tears or holes'
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'highlight',
        title: 'GLOVE INTEGRITY CHECK',
        subtitle: 'Before Every Use',
        highlightBox: {
            icon: 'fa-hand',
            title: 'GLOVE INSPECTION PROTOCOL',
            points: [
                'Visual inspection for holes, tears, or discoloration',
                'Check expiry date on glove box',
                'Inflate glove slightly to check for pinholes',
                'Ensure gloves extend past wrist adequately',
                'CHANGE GLOVES: Every 30 minutes or when compromised',
                'DOUBLE GLOVING: Required for high-risk operations'
            ]
        },
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'COMPLETE PPE DONNING SEQUENCE',
        subtitle: 'The Correct Order',
        columns: [
            {
                heading: 'Donning Order (Putting On)',
                icon: 'fa-arrow-down',
                items: [
                    '1. Wash and sanitize hands',
                    '2. Put on CAP (hair coverage first)',
                    '3. Put on FACE MASK',
                    '4. Put on GOWN/APRON if required',
                    '5. Put on GLOVES last'
                ]
            },
            {
                heading: 'Doffing Order (Taking Off)',
                icon: 'fa-arrow-up',
                items: [
                    '1. Remove GLOVES first (most contaminated)',
                    '2. Sanitize hands',
                    '3. Remove GOWN/APRON',
                    '4. Remove FACE MASK (by ear loops only)',
                    '5. Remove CAP last',
                    '6. Final hand sanitization'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'process',
        title: 'SAFE GLOVE REMOVAL',
        subtitle: 'Glove-to-Glove, Skin-to-Skin',
        steps: [
            {
                number: '1',
                title: 'Pinch & Peel',
                description: 'Pinch outside of one glove at wrist, peel away from hand turning inside out'
            },
            {
                number: '2',
                title: 'Hold Removed Glove',
                description: 'Hold the removed glove in the still-gloved hand'
            },
            {
                number: '3',
                title: 'Slide Finger Under',
                description: 'Slide bare finger under wrist of remaining glove'
            },
            {
                number: '4',
                title: 'Peel & Dispose',
                description: 'Peel off second glove over the first, dispose in designated bin, sanitize hands'
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'highlight',
        title: 'CRITICAL PPE RULES',
        subtitle: 'Never Compromise These Standards',
        highlightBox: {
            icon: 'fa-exclamation-triangle',
            title: 'ABSOLUTE PPE REQUIREMENTS',
            points: [
                'NEVER touch your face while wearing PPE',
                'NEVER reuse disposable PPE items',
                'NEVER leave production area with PPE on',
                'ALWAYS change PPE between different product lines',
                'ALWAYS replace PPE immediately if torn or contaminated',
                'ALWAYS dispose of PPE in designated waste containers'
            ]
        },
        image: null
    },
    {
        id: 13,
        type: 'conclusion',
        title: 'PPE EXCELLENCE',
        subtitle: 'Your Commitment to Safety',
        conclusionPoints: [
            {
                icon: 'fa-hand-sparkles',
                title: 'Clean First',
                text: 'Hand hygiene before and after PPE use'
            },
            {
                icon: 'fa-list-ol',
                title: 'Follow Sequence',
                text: 'Correct order protects you and products'
            },
            {
                icon: 'fa-eye',
                title: 'Inspect Always',
                text: 'Check PPE integrity before every use'
            },
            {
                icon: 'fa-trash',
                title: 'Dispose Properly',
                text: 'Safe removal and disposal prevents contamination'
            }
        ],
        image: null
    }
];
