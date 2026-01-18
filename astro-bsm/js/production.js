/**
 * ASTRO-BSM Factory Operations
 * Production Scheduling Module
 */

// Cache for production data
let productionCache = [];

// Production stages/tasks (default generic stages)
const PRODUCTION_STAGES = [
    { id: 'raw_material_prep', name: 'Raw Material Preparation', order: 1 },
    { id: 'packaging_prep', name: 'Packaging Preparation', order: 2 },
    { id: 'compounding', name: 'Compounding', order: 3 },
    { id: 'packaging', name: 'Packaging', order: 4 },
    { id: 'transfer', name: 'Transfer to Warehouse', order: 5 },
    { id: 'cleaning', name: 'Equipment Cleaning', order: 6 },
    { id: 'line_clearance', name: 'Line Clearance', order: 7 }
];

// Product-specific production tasks
const PRODUCT_SPECIFIC_TASKS = {
    // ==========================================
    // WOUND-CLEX SOLUTION 500ml PRODUCTION TASKS
    // ==========================================
    'wound_clex_500ml': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of production area before starting any manufacturing activities.',
            steps: [
                'Verify production area access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Mop floors with disinfectant solution',
                'Sanitize door handles and switches',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed - no residue',
                'Environmental monitoring (if required)',
                'Previous batch materials removed and documented'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning and personal hygiene procedures before entering production area.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly with antibacterial soap',
                'Don clean production attire (gown, cap, mask)',
                'Put on disposable gloves',
                'Sanitize gloved hands with alcohol',
                'Enter production area through air lock'
            ],
            qcChecks: [
                'Gowning procedure followed correctly',
                'No exposed skin or hair',
                'Gloves intact without tears',
                'Personnel health declaration verified',
                'Gowning log signed'
            ]
        },
        {
            id: 'bottle_preparation',
            name: 'Bottle Preparation',
            order: 3,
            description: 'Inspection and preparation of empty bottles for filling operation.',
            steps: [
                'Verify bottle specifications match batch record',
                'Inspect bottles for defects (cracks, chips, contamination)',
                'Count bottles against production target',
                'Arrange bottles on clean staging area',
                'Document bottle lot number'
            ],
            qcChecks: [
                'Bottle lot number recorded',
                'Visual inspection - no defects',
                'Correct bottle size verified',
                'Quantity matches production order',
                'Bottles free from particulate matter'
            ]
        },
        {
            id: 'house_cleaning_sterilization',
            name: 'Equipment Cleaning & Sterilization',
            order: 4,
            description: 'Thorough cleaning and sterilization of all production equipment and tanks.',
            steps: [
                'Disassemble equipment parts that contact product',
                'Rinse with purified water',
                'Clean with approved detergent',
                'Rinse thoroughly to remove detergent',
                'Sanitize with approved sterilizing agent',
                'Final rinse with WFI (Water for Injection) or purified water',
                'Dry equipment with clean compressed air or lint-free cloth'
            ],
            qcChecks: [
                'Cleaning SOP followed',
                'Detergent residue test passed',
                'Visual inspection - equipment clean',
                'Sterilization parameters documented',
                'Equipment status label updated',
                'Cleaning validation log signed'
            ]
        },
        {
            id: 'tank_preparation',
            name: 'Tank Preparation',
            order: 5,
            description: 'Preparation and verification of compounding tanks for solution manufacturing.',
            steps: [
                'Verify tank is clean and dry',
                'Check tank integrity - no leaks or damage',
                'Ensure all valves and fittings are secure',
                'Connect mixing equipment',
                'Verify temperature control system working',
                'Place "In Use" status label'
            ],
            qcChecks: [
                'Tank cleaning status verified',
                'Equipment integrity check passed',
                'All connections secure',
                'Calibration status of instruments current',
                'Tank identified with batch number'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 6,
            description: 'Verification and staging of all raw materials required for compounding.',
            steps: [
                'Retrieve raw materials from approved storage',
                'Verify material identity against batch record',
                'Check expiry dates - reject if expired',
                'Verify QC release status',
                'Weigh/measure materials as per formula',
                'Double-check weights by second operator'
            ],
            qcChecks: [
                'Material identity verified',
                'Expiry dates valid',
                'QC release labels present',
                'Weights verified and documented',
                'Double verification signature obtained',
                'Material lot numbers recorded'
            ]
        },
        {
            id: 'compounding',
            name: 'Compounding',
            order: 7,
            description: 'Mixing of raw materials to form the wound cleansing solution according to master formula.',
            steps: [
                'Add purified water to tank (specified volume)',
                'Start mixing at prescribed speed',
                'Add ingredients in correct sequence',
                'Mix for specified duration',
                'Adjust pH if required',
                'Bring to final volume (Q.S.)',
                'Continue mixing for homogeneity'
            ],
            qcChecks: [
                'Mixing sequence followed correctly',
                'Mixing time recorded',
                'Temperature within specification',
                'pH within acceptable range',
                'Volume accurately measured',
                'Solution appearance acceptable (clear, no particles)'
            ]
        },
        {
            id: 'quality_checks_compounding',
            name: 'Quality Checks - End Product of Compounding',
            order: 8,
            description: 'In-process quality control testing of compounded solution before filling.',
            steps: [
                'Collect sample using aseptic technique',
                'Measure pH using calibrated meter',
                'Check specific gravity if required',
                'Perform appearance test',
                'Label sample with batch details',
                'Submit to QC for testing',
                'Await QC approval before proceeding'
            ],
            qcChecks: [
                'pH within specification range',
                'Appearance meets criteria',
                'No visible particulates',
                'Specific gravity (if applicable) within range',
                'Odor acceptable',
                'QC approval obtained before filling'
            ]
        },
        {
            id: 'filling',
            name: 'Filling',
            order: 9,
            description: 'Volumetric filling of solution into prepared bottles.',
            steps: [
                'Set filling machine to correct volume',
                'Perform fill volume verification with first bottles',
                'Adjust fill volume if needed',
                'Begin production filling',
                'Periodically check fill volume',
                'Record reject bottles'
            ],
            qcChecks: [
                'Fill volume within specification (±tolerance)',
                'No spillage or contamination',
                'Bottles properly seated during fill',
                'In-process weight checks documented',
                'Reject bottles documented and segregated'
            ]
        },
        {
            id: 'bottle_capping',
            name: 'Bottle Capping',
            order: 10,
            description: 'Application of caps to filled bottles ensuring proper seal.',
            steps: [
                'Verify cap lot number and specifications',
                'Load caps into capping machine',
                'Set torque to specified setting',
                'Apply caps to filled bottles',
                'Check cap torque periodically',
                'Inspect for proper seal'
            ],
            qcChecks: [
                'Cap torque within specification',
                'Caps properly aligned',
                'No cross-threading',
                'Tamper-evident seal intact',
                'Cap lot number recorded'
            ]
        },
        {
            id: 'bottle_cleaning_drying',
            name: 'Bottle Cleaning & Drying',
            order: 11,
            description: 'External cleaning of filled and capped bottles before labeling.',
            steps: [
                'Wipe bottle exterior with clean cloth',
                'Remove any solution residue',
                'Ensure bottles are completely dry',
                'Inspect for fingerprints or marks',
                'Stage for labeling'
            ],
            qcChecks: [
                'Bottles externally clean',
                'No moisture present',
                'No visible marks or stains',
                'Bottles properly staged'
            ]
        },
        {
            id: 'labelling',
            name: 'Labelling',
            order: 12,
            description: 'Application of product labels to bottles.',
            steps: [
                'Verify label content matches batch record',
                'Load labels into labeling machine',
                'Apply labels to bottles',
                'Ensure labels are straight and properly adhered',
                'Inspect for readability'
            ],
            qcChecks: [
                'Correct label version used',
                'Label placement straight and centered',
                'No bubbles or wrinkles',
                'All text readable',
                'Label adhering properly',
                'Sample label attached to batch record'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 13,
            description: 'Printing of batch number, manufacturing date, and expiry date on bottles/labels.',
            steps: [
                'Set up coding machine with batch details',
                'Verify code accuracy before production',
                'Print batch codes on bottles',
                'Check code clarity and position',
                'Document coding parameters'
            ],
            qcChecks: [
                'Batch number correct',
                'Manufacturing date correct',
                'Expiry date correct',
                'Code legible and permanent',
                'Code position consistent',
                'Verification signature obtained'
            ]
        },
        {
            id: 'shrink_wrapping',
            name: 'Shrink Wrapping',
            order: 14,
            description: 'Application of shrink wrap seal for tamper evidence.',
            steps: [
                'Apply shrink bands to bottle caps',
                'Pass through heat tunnel',
                'Verify shrink seal integrity',
                'Inspect for proper fit'
            ],
            qcChecks: [
                'Shrink wrap fully sealed',
                'No loose or torn shrink bands',
                'Tamper-evident perforation intact',
                'Aesthetic appearance acceptable'
            ]
        },
        {
            id: 'boxing',
            name: 'Boxing',
            order: 15,
            description: 'Packaging of finished bottles into shipping cartons.',
            steps: [
                'Verify carton specifications',
                'Assemble cartons',
                'Place correct number of bottles per carton',
                'Include package inserts if required',
                'Seal cartons properly'
            ],
            qcChecks: [
                'Correct bottle count per carton',
                'Carton properly sealed',
                'Package insert included (if applicable)',
                'Bottles protected from damage',
                'Carton quality acceptable'
            ]
        },
        {
            id: 'box_coding',
            name: 'Box Coding',
            order: 16,
            description: 'Printing of batch information on outer cartons.',
            steps: [
                'Print batch number on cartons',
                'Print manufacturing and expiry dates',
                'Print quantity per carton',
                'Verify code accuracy'
            ],
            qcChecks: [
                'Carton codes match bottle codes',
                'All information legible',
                'Code position correct',
                'No smearing or fading'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 17,
            description: 'Complete clearance of production line after batch completion.',
            steps: [
                'Remove all finished products from line',
                'Remove all labels and packaging materials',
                'Remove all raw materials',
                'Clear all product residue from equipment',
                'Collect and reconcile all batch documents',
                'Update equipment log book'
            ],
            qcChecks: [
                'No materials from batch remaining',
                'All products accounted for',
                'Yield reconciliation completed',
                'Equipment cleared of product',
                'Line clearance form signed by QA'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 18,
            description: 'Thorough cleaning of production area and equipment after batch completion.',
            steps: [
                'Clean all production equipment',
                'Wash tanks and transfer lines',
                'Clean work surfaces',
                'Mop and sanitize floors',
                'Dispose of waste properly',
                'Update cleaning status labels'
            ],
            qcChecks: [
                'Equipment cleaning log completed',
                'Visual inspection passed',
                'Cleaning status labels updated',
                'Waste disposed per procedure',
                'Area ready for next production'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 19,
            description: 'Movement of finished goods to warehouse under quarantine pending QC release.',
            steps: [
                'Complete final count of finished goods',
                'Prepare transfer documentation',
                'Move products to quarantine area',
                'Update inventory system',
                'Obtain warehouse acknowledgment'
            ],
            qcChecks: [
                'Quantity matches batch record',
                'Transfer documentation complete',
                'Products in quarantine status',
                'Warehouse receipt obtained',
                'Inventory system updated',
                'FIFO (First-In-First-Out) followed'
            ]
        }
    ],

    'sterile_dressing_pack': [
        { 
            id: 'gauze_unrolling', 
            name: 'Gauze Unrolling', 
            order: 1,
            description: 'Controlled unrolling of medical-grade gauze rolls to prepare flat gauze sheets for cutting and folding without contamination or distortion.',
            steps: [
                'Inspect gauze roll packaging integrity before opening',
                'Unroll gauze smoothly on a clean, designated work surface',
                'Avoid stretching or tearing of fibers',
                'Maintain uniform tension throughout unrolling'
            ],
            qcChecks: [
                'Gauze remains intact, clean, and free of debris',
                'No visible fraying, tearing, or discoloration',
                'Batch number recorded',
                'Operator and time logged'
            ]
        },
        { 
            id: 'cotton_wool_unrolling', 
            name: 'Cotton Wool Unrolling', 
            order: 2,
            description: 'Preparation of absorbent cotton wool sheets from compressed rolls for subsequent cutting and shaping.',
            steps: [
                'Unwrap cotton roll using clean gloves',
                'Unroll evenly without clumping',
                'Lay flat on sanitized surface'
            ],
            qcChecks: [
                'Cotton is fluffy, uniform, and uncontaminated',
                'No foreign particles present',
                'Moisture-free',
                'Batch and operator recorded'
            ]
        },
        { 
            id: 'gauze_cutting', 
            name: 'Gauze Cutting', 
            order: 3,
            description: 'Precision cutting of gauze into standardized dimensions for dressing packs.',
            steps: [
                'Measure according to approved specification',
                'Cut using sterile or dedicated cutting tools',
                'Stack cut pieces uniformly'
            ],
            qcChecks: [
                'Correct dimensions achieved',
                'Clean edges without excessive lint',
                'Count matches production target',
                'Reject off-size pieces'
            ]
        },
        { 
            id: 'cotton_wool_cutting', 
            name: 'Cotton Wool Cutting', 
            order: 4,
            description: 'Cutting cotton wool into required sizes for padding or wound coverage.',
            steps: [
                'Measure thickness and length accurately',
                'Cut smoothly to prevent fiber shredding'
            ],
            qcChecks: [
                'Uniform size and thickness',
                'No fiber shedding',
                'Weight/size within tolerance'
            ]
        },
        { 
            id: 'gauze_folding', 
            name: 'Gauze Folding', 
            order: 5,
            description: 'Systematic folding of gauze pieces into standardized forms for sterile dressing inclusion.',
            steps: [
                'Fold according to defined pattern (e.g. square / rectangular)',
                'Ensure even edges and alignment'
            ],
            qcChecks: [
                'Uniform folds across batch',
                'No exposed loose fibers',
                'Correct final dimensions'
            ]
        },
        { 
            id: 'cotton_wool_folding', 
            name: 'Cotton Wool Folding', 
            order: 6,
            description: 'Folding cotton wool pads to required thickness and size for dressing packs.',
            steps: [
                'Fold gently to maintain absorbency',
                'Avoid over-compression'
            ],
            qcChecks: [
                'Consistent thickness',
                'Adequate softness retained',
                'No tearing'
            ]
        },
        { 
            id: 'cotton_ball_rolling', 
            name: 'Cotton Wool Ball Rolling', 
            order: 7,
            description: 'Manual or semi-manual rolling of cotton wool into spherical balls for wound cleaning or padding.',
            steps: [
                'Measure cotton quantity per ball',
                'Roll evenly between gloved hands'
            ],
            qcChecks: [
                'Uniform size and weight',
                'No loose fibers',
                'Smooth surface texture'
            ]
        },
        { 
            id: 'pouch_cutting', 
            name: 'Dressing Pack Pouch Cutting', 
            order: 8,
            description: 'Cutting sterile-grade packaging material into pouch sizes suitable for dressing packs.',
            steps: [
                'Measure pouch dimensions accurately',
                'Cut using clean cutting tools'
            ],
            qcChecks: [
                'Correct pouch size',
                'Clean edges without perforations',
                'Packaging material integrity intact'
            ]
        },
        { 
            id: 'pack_placement', 
            name: 'Dressing Pack Placement into Pouches', 
            order: 9,
            description: 'Assembly of folded gauze, cotton wool, and accessories into pre-cut pouches under clean conditions.',
            steps: [
                'Verify component count per pack',
                'Place components neatly without compression',
                'Maintain clean handling technique'
            ],
            qcChecks: [
                'Correct items present in each pack',
                'No contamination or misplacement',
                'Pack checklist verified'
            ]
        },
        { 
            id: 'pack_sealing', 
            name: 'Dressing Pack Sealing', 
            order: 10,
            description: 'Sealing of pouches to maintain sterility until use.',
            steps: [
                'Use calibrated heat sealer',
                'Seal edges uniformly'
            ],
            qcChecks: [
                'Seal integrity intact',
                'No air leaks or incomplete seals',
                'Seal width within standard'
            ]
        },
        { 
            id: 'sterilization', 
            name: 'Sterilization', 
            order: 11,
            description: 'Elimination of all microorganisms from sealed dressing packs using approved sterilization method.',
            steps: [
                'Load packs according to sterilizer capacity',
                'Run validated sterilization cycle',
                'Allow adequate cooling period'
            ],
            qcChecks: [
                'Sterilization indicators (chemical/biological) passed',
                'Cycle parameters achieved',
                'Sterilization batch logged'
            ]
        },
        { 
            id: 'bagging', 
            name: 'Dressing Pack Bagging (in 20s)', 
            order: 12,
            description: 'Secondary packaging of sterilized dressing packs into groups of twenty for distribution.',
            steps: [
                'Count exactly 20 packs per bag',
                'Use clean outer packaging'
            ],
            qcChecks: [
                'Accurate count verified',
                'Bag sealed and labeled',
                'Batch number and date visible'
            ]
        },
        { 
            id: 'warehouse_transfer', 
            name: 'Transfer to Warehouse', 
            order: 13,
            description: 'Movement of finished sterile dressing packs to controlled storage pending distribution.',
            steps: [
                'Transport in clean, covered containers',
                'Store under recommended conditions'
            ],
            qcChecks: [
                'Warehouse temperature and humidity acceptable',
                'Stock logged into inventory system',
                'FIFO (First-In-First-Out) applied'
            ]
        }
    ],

    // ==========================================
    // WOUND-CARE HONEY GAUZE PRODUCTION TASKS
    // ==========================================
    'honey_gauze_big': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of production area before starting honey gauze manufacturing.',
            steps: [
                'Verify production area access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize cutting tables and work surfaces',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed - no residue',
                'Previous batch materials removed',
                'Environmental conditions acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning and personal hygiene procedures for gauze production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly with antibacterial soap',
                'Don clean production attire (gown, cap, mask)',
                'Put on disposable gloves',
                'Sanitize gloved hands',
                'Enter production area'
            ],
            qcChecks: [
                'Gowning procedure followed correctly',
                'No exposed skin or hair',
                'Gloves intact without tears',
                'Personnel health declaration verified'
            ]
        },
        {
            id: 'd_gauze_cutting_sorting',
            name: 'D-Gauze Cutting & Sorting',
            order: 3,
            description: 'Cutting of raw gauze fabric into specified dimensions and sorting by quality.',
            steps: [
                'Unroll gauze fabric on clean cutting table',
                'Measure gauze to specified dimensions',
                'Cut using clean, sharp cutting tools',
                'Sort cut pieces by size and quality',
                'Reject defective pieces',
                'Stack approved pieces uniformly'
            ],
            qcChecks: [
                'Dimensions within specification',
                'Cut edges clean without fraying',
                'No defects (holes, stains, contamination)',
                'Quantity count accurate',
                'Rejects documented and segregated'
            ]
        },
        {
            id: 'packing_in_100s',
            name: 'Packing in Pieces of 100',
            order: 4,
            description: 'Counting and bundling cut gauze pieces into lots of 100.',
            steps: [
                'Count gauze pieces accurately',
                'Bundle in groups of 100',
                'Secure bundles loosely',
                'Label each bundle with count'
            ],
            qcChecks: [
                'Count verified - exactly 100 per bundle',
                'Bundles uniform and neat',
                'Labels attached correctly',
                'Total count matches production target'
            ]
        },
        {
            id: 'temp_storage_blue_bags',
            name: 'Store Temporarily in Blue Bags',
            order: 5,
            description: 'Temporary storage of gauze bundles in designated blue bags before sterilization.',
            steps: [
                'Place bundles in clean blue storage bags',
                'Do not overfill bags',
                'Seal bags loosely to allow steam penetration',
                'Label bags with batch information',
                'Store in designated staging area'
            ],
            qcChecks: [
                'Bags clean and free from damage',
                'Bags not overfilled',
                'Labels complete with batch info',
                'Storage conditions acceptable'
            ]
        },
        {
            id: 'gauze_sterilization',
            name: 'Sterilization of D-Gauze',
            order: 6,
            description: 'Steam sterilization of packed gauze bundles before honey impregnation.',
            steps: [
                'Load gauze bags into autoclave',
                'Ensure proper spacing for steam circulation',
                'Run validated sterilization cycle',
                'Allow cooling period',
                'Remove sterilized bags carefully'
            ],
            qcChecks: [
                'Sterilization indicators passed',
                'Cycle parameters achieved (time, temp, pressure)',
                'Sterilization log completed',
                'Bags intact after sterilization'
            ]
        },
        {
            id: 'impregnation_tank_prep',
            name: 'Impregnation Tank Preparation',
            order: 7,
            description: 'Cleaning and preparation of honey impregnation tank.',
            steps: [
                'Clean tank thoroughly with purified water',
                'Sanitize with approved agent',
                'Rinse and dry completely',
                'Verify tank integrity',
                'Place status label'
            ],
            qcChecks: [
                'Tank visually clean',
                'No residue from previous batch',
                'Tank integrity verified',
                'Status label updated'
            ]
        },
        {
            id: 'tank_loading_gauze',
            name: 'Tank Loading with Gauze',
            order: 8,
            description: 'Loading sterilized gauze into impregnation tank for honey embedding.',
            steps: [
                'Transfer sterilized gauze to tank using aseptic technique',
                'Arrange gauze to ensure even honey distribution',
                'Do not overload tank',
                'Record quantity loaded'
            ],
            qcChecks: [
                'Aseptic handling maintained',
                'Gauze evenly distributed',
                'Quantity documented',
                'No contamination observed'
            ]
        },
        {
            id: 'honey_pasteurization',
            name: 'Honey Pasteurization',
            order: 9,
            description: 'Heat treatment of medical-grade honey to reduce microbial load while preserving therapeutic properties.',
            steps: [
                'Verify honey lot number and quality certificate',
                'Transfer honey to pasteurization vessel',
                'Heat to specified temperature (typically 70-80°C)',
                'Maintain temperature for specified duration',
                'Monitor temperature continuously',
                'Allow controlled cooling'
            ],
            qcChecks: [
                'Honey lot verified and documented',
                'Temperature reached and maintained',
                'Duration met as per specification',
                'Temperature log completed',
                'Honey appearance acceptable'
            ]
        },
        {
            id: 'honey_filtration',
            name: 'Honey Filtration',
            order: 10,
            description: 'Filtration of pasteurized honey to remove particulates.',
            steps: [
                'Set up filtration system with correct filter',
                'Filter pasteurized honey',
                'Collect filtered honey in clean vessel',
                'Inspect filtrate clarity'
            ],
            qcChecks: [
                'Filter integrity verified',
                'Honey clear without particles',
                'Filtration documented',
                'Quantity recovered documented'
            ]
        },
        {
            id: 'gauze_honey_embedding',
            name: 'Gauze Honey Embedding',
            order: 11,
            description: 'Impregnation of gauze with filtered medical honey.',
            steps: [
                'Pour filtered honey over gauze in tank',
                'Ensure complete saturation',
                'Allow adequate soaking time',
                'Turn/agitate gauze for even coating',
                'Remove excess honey'
            ],
            qcChecks: [
                'Gauze fully saturated with honey',
                'Even distribution achieved',
                'Soaking time documented',
                'No dry spots visible'
            ]
        },
        {
            id: 'embedded_gauze_folding',
            name: 'Embedded Gauze Folding',
            order: 12,
            description: 'Folding of honey-impregnated gauze into specified configuration.',
            steps: [
                'Remove gauze from tank carefully',
                'Allow excess honey to drain',
                'Fold to specified dimensions',
                'Handle gently to maintain shape'
            ],
            qcChecks: [
                'Folds uniform and consistent',
                'Correct dimensions achieved',
                'No honey dripping or loss',
                'Gauze integrity maintained'
            ]
        },
        {
            id: 'embedded_gauze_pouching',
            name: 'Embedded Gauze Pouching',
            order: 13,
            description: 'Placement of folded honey gauze into sterile pouches.',
            steps: [
                'Prepare sterile pouches',
                'Place folded gauze into pouch',
                'Ensure proper positioning',
                'Remove air bubbles'
            ],
            qcChecks: [
                'Gauze correctly positioned in pouch',
                'Pouch material intact',
                'No contamination',
                'Air removed from pouch'
            ]
        },
        {
            id: 'pouch_sealing',
            name: 'Pouch Sealing',
            order: 14,
            description: 'Heat sealing of pouches containing honey gauze.',
            steps: [
                'Set sealer to correct temperature',
                'Seal pouch edges uniformly',
                'Allow seal to cool',
                'Inspect seal integrity'
            ],
            qcChecks: [
                'Sealer temperature correct',
                'Seal complete without gaps',
                'Seal width within specification',
                'No burn marks or damage'
            ]
        },
        {
            id: 'pouch_leakage_checking',
            name: 'Pouch Leakage Checking',
            order: 15,
            description: 'Testing sealed pouches for leaks to ensure product integrity.',
            steps: [
                'Visually inspect each sealed pouch',
                'Gently squeeze pouch to detect leaks',
                'Perform dye test on sample pouches if required',
                'Segregate any leaking pouches'
            ],
            qcChecks: [
                'No visible leaks or holes',
                'Squeeze test passed',
                'Sample dye test passed (if applicable)',
                'Rejects documented and disposed'
            ]
        },
        {
            id: 'pouch_decontamination_drying',
            name: 'Pouch Surface Decontamination & Drying',
            order: 16,
            description: 'External cleaning and drying of sealed pouches.',
            steps: [
                'Wipe pouch exterior with clean cloth',
                'Apply surface disinfectant if required',
                'Allow to dry completely',
                'Inspect for cleanliness'
            ],
            qcChecks: [
                'Pouch exterior clean and dry',
                'No honey residue visible',
                'No moisture present',
                'Ready for packaging'
            ]
        },
        {
            id: 'first_stage_packaging',
            name: 'First Stage Packaging (in 5s)',
            order: 17,
            description: 'Primary packaging of individual pouches into groups of 5.',
            steps: [
                'Count 5 pouches accurately',
                'Place in primary packaging',
                'Seal primary package',
                'Label with batch information'
            ],
            qcChecks: [
                'Count verified - exactly 5 per pack',
                'Package sealed properly',
                'Label complete and correct',
                'Package appearance acceptable'
            ]
        },
        {
            id: 'second_stage_packaging',
            name: 'Second Stage Packaging (Packet)',
            order: 18,
            description: 'Secondary packaging placing primary packs into outer packets.',
            steps: [
                'Place primary packs into outer packet',
                'Include package insert if required',
                'Seal outer packet',
                'Apply product label'
            ],
            qcChecks: [
                'Correct number of primary packs',
                'Package insert included',
                'Outer packet sealed properly',
                'Label correct and readable'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 19,
            description: 'Printing batch number, manufacturing and expiry dates on packets.',
            steps: [
                'Set up coding machine',
                'Verify code accuracy',
                'Print batch codes',
                'Inspect code quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Dates correct (manufacturing, expiry)',
                'Code legible and permanent',
                'Position consistent'
            ]
        },
        {
            id: 'packet_boxing_coding',
            name: 'Packet Boxing & Coding',
            order: 20,
            description: 'Packing coded packets into shipping cartons and coding cartons.',
            steps: [
                'Count correct number of packets per box',
                'Pack carefully in carton',
                'Seal carton',
                'Apply batch code to carton'
            ],
            qcChecks: [
                'Correct packet count per carton',
                'Carton sealed properly',
                'Carton code matches product code',
                'Carton appearance acceptable'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 21,
            description: 'Complete clearance of production line after batch completion.',
            steps: [
                'Remove all finished products',
                'Remove all labels and packaging materials',
                'Clear equipment of product residue',
                'Reconcile all batch documents',
                'Update equipment logs'
            ],
            qcChecks: [
                'No materials from batch remaining',
                'Products accounted for',
                'Yield reconciliation completed',
                'Line clearance form signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 22,
            description: 'Thorough cleaning of production area and equipment.',
            steps: [
                'Clean impregnation tank thoroughly',
                'Clean all work surfaces',
                'Sanitize equipment',
                'Mop and sanitize floors',
                'Dispose of waste properly'
            ],
            qcChecks: [
                'Equipment cleaning completed',
                'Visual inspection passed',
                'Cleaning status labels updated',
                'Area ready for next production'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 23,
            description: 'Movement of finished honey gauze to warehouse under quarantine.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine area',
                'Update inventory system'
            ],
            qcChecks: [
                'Quantity matches batch record',
                'Transfer documentation complete',
                'Products in quarantine status',
                'FIFO followed'
            ]
        }
    ],

    // Small honey gauze uses same tasks as big
    'honey_gauze_small': null, // Will be set to reference honey_gauze_big

    // ==========================================
    // HERA WOUND-GEL PRODUCTION TASKS
    // ==========================================
    'hera_gel_100g': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of gel production area before manufacturing.',
            steps: [
                'Verify production area access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize mixing equipment area',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Previous batch materials removed',
                'Environmental conditions acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning and personal hygiene for gel production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly',
                'Don clean production attire',
                'Put on disposable gloves',
                'Sanitize gloved hands'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'No exposed skin or hair',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_sorting',
            name: 'Raw Material Sorting & Verification',
            order: 3,
            description: 'Verification and staging of all raw materials required for gel formulation.',
            steps: [
                'Retrieve raw materials from approved storage',
                'Verify material identity against batch record',
                'Check expiry dates',
                'Verify QC release status',
                'Weigh/measure materials per formula',
                'Double-check by second operator'
            ],
            qcChecks: [
                'Material identity verified',
                'Expiry dates valid',
                'QC release labels present',
                'Weights verified and documented',
                'Material lot numbers recorded'
            ]
        },
        {
            id: 'tube_counting_washing',
            name: 'Tube Counting & Washing',
            order: 4,
            description: 'Counting and cleaning of empty tubes for filling.',
            steps: [
                'Verify tube specifications match batch record',
                'Count tubes against production target',
                'Wash tubes with purified water if required',
                'Allow tubes to dry completely',
                'Inspect for defects'
            ],
            qcChecks: [
                'Tube lot number recorded',
                'Correct tube size verified',
                'Tubes clean and dry',
                'No defective tubes',
                'Quantity matches order'
            ]
        },
        {
            id: 'tank_preparation',
            name: 'Tank Preparation (Oil & Water Phase)',
            order: 5,
            description: 'Preparation of separate tanks for oil phase and water phase components.',
            steps: [
                'Clean and sanitize oil phase tank',
                'Clean and sanitize water phase tank',
                'Verify tank integrity',
                'Connect heating systems',
                'Place status labels on tanks',
                'Verify temperature controls working'
            ],
            qcChecks: [
                'Tanks visually clean',
                'No residue from previous batch',
                'Temperature controls calibrated',
                'Status labels updated',
                'All connections secure'
            ]
        },
        {
            id: 'phase_heating',
            name: 'Phase Heating to 80°C',
            order: 6,
            description: 'Heating oil and water phases to specified temperature for emulsification.',
            steps: [
                'Add oil phase ingredients to oil tank',
                'Add water phase ingredients to water tank',
                'Heat both phases to 80°C (±2°C)',
                'Monitor temperature continuously',
                'Maintain temperature until ready for mixing'
            ],
            qcChecks: [
                'Oil phase temperature: 80°C (±2°C)',
                'Water phase temperature: 80°C (±2°C)',
                'Temperature log completed',
                'No overheating occurred',
                'Phases ready for combining'
            ]
        },
        {
            id: 'filtration_homogenization',
            name: 'Filtration & Homogenization',
            order: 7,
            description: 'Filtration of phases and homogenization to create stable emulsion.',
            steps: [
                'Filter heated phases if required',
                'Slowly add water phase to oil phase',
                'Start homogenizer at low speed',
                'Increase to specified RPM',
                'Homogenize for specified duration',
                'Monitor temperature during process'
            ],
            qcChecks: [
                'Filter integrity verified',
                'Phases combined correctly',
                'Homogenization speed achieved',
                'Duration met as per specification',
                'Temperature maintained within range'
            ]
        },
        {
            id: 'compounding',
            name: 'Compounding',
            order: 8,
            description: 'Final mixing and addition of active ingredients to gel base.',
            steps: [
                'Allow emulsion to cool to specified temperature',
                'Add active ingredients in correct sequence',
                'Mix thoroughly for uniform distribution',
                'Check pH and adjust if needed',
                'Bring to final weight (Q.S.)',
                'Continue mixing for homogeneity'
            ],
            qcChecks: [
                'Cooling temperature achieved',
                'Ingredients added in correct order',
                'Mixing time documented',
                'pH within specification',
                'Gel appearance uniform',
                'No lumps or separation'
            ]
        },
        {
            id: 'inprocess_qc',
            name: 'In-Process Quality Check',
            order: 9,
            description: 'Quality control testing of compounded gel before filling.',
            steps: [
                'Collect sample using aseptic technique',
                'Test pH using calibrated meter',
                'Check viscosity',
                'Perform appearance test',
                'Submit sample to QC lab'
            ],
            qcChecks: [
                'pH within specification',
                'Viscosity within range',
                'Color and odor acceptable',
                'No visible particles',
                'QC approval obtained'
            ]
        },
        {
            id: 'tube_filling',
            name: 'Tube Filling',
            order: 10,
            description: 'Filling prepared tubes with compounded gel.',
            steps: [
                'Set up filling machine for tube size',
                'Verify fill weight with first tubes',
                'Adjust fill volume if needed',
                'Begin production filling',
                'Check fill weight periodically'
            ],
            qcChecks: [
                'Fill weight within specification',
                'No spillage or contamination',
                'Tubes properly positioned',
                'In-process weight checks documented'
            ]
        },
        {
            id: 'tube_sealing',
            name: 'Tube Sealing',
            order: 11,
            description: 'Heat sealing of filled tubes to close and secure contents.',
            steps: [
                'Set sealer to correct temperature',
                'Position tube in sealing station',
                'Apply seal with correct pressure',
                'Verify seal integrity',
                'Inspect for leaks'
            ],
            qcChecks: [
                'Seal temperature correct',
                'Seal complete and uniform',
                'No leaks detected',
                'Seal appearance acceptable'
            ]
        },
        {
            id: 'tube_trimming',
            name: 'Tube Trimming',
            order: 12,
            description: 'Trimming excess material from sealed tube ends.',
            steps: [
                'Trim sealed end to specified length',
                'Ensure clean, uniform cut',
                'Collect trimmed waste',
                'Inspect trimmed tubes'
            ],
            qcChecks: [
                'Trim length consistent',
                'Cut clean without rough edges',
                'No damage to seal',
                'Waste collected and disposed'
            ]
        },
        {
            id: 'tube_washing_external',
            name: 'Tube Washing (External)',
            order: 13,
            description: 'External cleaning of filled and sealed tubes.',
            steps: [
                'Wipe tube exterior',
                'Remove any gel residue',
                'Dry tubes completely',
                'Inspect for cleanliness'
            ],
            qcChecks: [
                'Tubes externally clean',
                'No gel residue visible',
                'Tubes dry',
                'Ready for packaging'
            ]
        },
        {
            id: 'packaging_tamper_sticker',
            name: 'Packaging & Tamper-Proof Sticker',
            order: 14,
            description: 'Placing tubes in cartons and applying tamper-evident stickers.',
            steps: [
                'Place tube in individual carton',
                'Include package insert',
                'Close carton properly',
                'Apply tamper-proof sticker'
            ],
            qcChecks: [
                'Correct carton used',
                'Insert included',
                'Carton properly closed',
                'Sticker properly applied',
                'Tamper evidence intact'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 15,
            description: 'Printing batch information on tubes and cartons.',
            steps: [
                'Set up coding machine',
                'Verify code accuracy',
                'Print codes on tubes/cartons',
                'Inspect code quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Manufacturing date correct',
                'Expiry date correct',
                'Codes legible and permanent'
            ]
        },
        {
            id: 'boxing_box_coding',
            name: 'Boxing & Box Coding',
            order: 16,
            description: 'Packing individual cartons into shipping boxes.',
            steps: [
                'Count correct number of cartons',
                'Pack in shipping box',
                'Seal box properly',
                'Apply batch code to box'
            ],
            qcChecks: [
                'Correct count per box',
                'Box sealed properly',
                'Box code matches product',
                'Box appearance acceptable'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 17,
            description: 'Complete clearance of production line after batch.',
            steps: [
                'Remove all finished products',
                'Remove all packaging materials',
                'Clear equipment of product',
                'Reconcile batch documents',
                'Update equipment logs'
            ],
            qcChecks: [
                'No materials remaining',
                'Products accounted for',
                'Yield reconciliation completed',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 18,
            description: 'Thorough cleaning of equipment and production area.',
            steps: [
                'Clean mixing tanks thoroughly',
                'Clean filling equipment',
                'Sanitize work surfaces',
                'Clean floors',
                'Dispose of waste properly'
            ],
            qcChecks: [
                'Equipment cleaning completed',
                'Visual inspection passed',
                'Status labels updated',
                'Area ready for next production'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Warehouse Transfer',
            order: 19,
            description: 'Movement of finished gel products to warehouse.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine area',
                'Update inventory'
            ],
            qcChecks: [
                'Quantity matches batch record',
                'Documentation complete',
                'Quarantine status applied',
                'FIFO followed'
            ]
        }
    ],

    // 40g gel uses same tasks
    'hera_gel_40g': null, // Will be set to reference hera_gel_100g

    // ==========================================
    // NPWT (VAC) FOAM PACK PRODUCTION TASKS
    // ==========================================
    'npwt_vac_foam': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of foam processing area before manufacturing.',
            steps: [
                'Verify production area access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize cutting table and equipment',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Previous batch materials removed',
                'Environmental conditions acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning and personal hygiene for foam production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly',
                'Don clean production attire',
                'Put on disposable gloves',
                'Sanitize gloved hands'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'No exposed skin or hair',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 3,
            description: 'Verification of foam material specifications and quality.',
            steps: [
                'Verify foam material lot number',
                'Check foam density specification',
                'Inspect foam for defects',
                'Check expiry/use-by date',
                'Verify QC release status'
            ],
            qcChecks: [
                'Material identity verified',
                'Density within specification',
                'No visible defects',
                'Expiry date valid',
                'QC release label present'
            ]
        },
        {
            id: 'foam_cutting',
            name: 'Foam Cutting',
            order: 4,
            description: 'Precision cutting of medical-grade foam into specified dimensions.',
            steps: [
                'Set up cutting template',
                'Mark foam for cutting',
                'Cut using clean, sharp cutting tools',
                'Verify dimensions of cut pieces',
                'Stack cut pieces carefully',
                'Collect and dispose of trim waste'
            ],
            qcChecks: [
                'Dimensions within specification (±tolerance)',
                'Edges clean and uniform',
                'No tears or damage',
                'Correct pore structure visible',
                'Quantity matches target',
                'Rejects documented'
            ]
        },
        {
            id: 'sorting_trimming',
            name: 'Sorting & Trimming',
            order: 5,
            description: 'Quality sorting and precision trimming of cut foam pieces.',
            steps: [
                'Inspect each foam piece',
                'Sort by quality grade',
                'Trim any irregular edges',
                'Remove pieces with defects',
                'Arrange approved pieces for packaging'
            ],
            qcChecks: [
                'All pieces inspected',
                'Defective pieces removed',
                'Edges properly trimmed',
                'Uniform appearance',
                'Pieces ready for packaging'
            ]
        },
        {
            id: 'foam_wrapping_sealing',
            name: 'Foam Wrapping & Sealing',
            order: 6,
            description: 'Individual wrapping and sealing of foam pieces in sterile packaging.',
            steps: [
                'Prepare sterile packaging material',
                'Place foam piece in packaging',
                'Ensure proper positioning',
                'Remove excess air',
                'Seal package using heat sealer',
                'Verify seal integrity'
            ],
            qcChecks: [
                'Correct packaging material used',
                'Foam correctly positioned',
                'Seal complete and uniform',
                'No air pockets',
                'Package intact without damage'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 7,
            description: 'Printing batch information on sealed foam packages.',
            steps: [
                'Set up coding machine',
                'Verify code accuracy',
                'Print batch number on packages',
                'Print manufacturing and expiry dates',
                'Inspect code quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Manufacturing date correct',
                'Expiry date correct',
                'Codes legible and permanent',
                'Position consistent'
            ]
        },
        {
            id: 'sterilization',
            name: 'Sterilization',
            order: 8,
            description: 'Terminal sterilization of packaged foam using validated method.',
            steps: [
                'Load packages into sterilizer',
                'Ensure proper spacing',
                'Place sterilization indicators',
                'Run validated sterilization cycle',
                'Allow cooling period',
                'Remove sterilized packages'
            ],
            qcChecks: [
                'Sterilization indicators passed',
                'Cycle parameters achieved',
                'Time/temperature/pressure logged',
                'Packages intact after sterilization',
                'Sterilization batch documented'
            ]
        },
        {
            id: 'post_sterilization_inspection',
            name: 'Post-Sterilization Inspection',
            order: 9,
            description: 'Inspection of sterilized packages for integrity.',
            steps: [
                'Inspect each package visually',
                'Check seal integrity',
                'Verify sterilization indicator color change',
                'Segregate any damaged packages'
            ],
            qcChecks: [
                'Package seals intact',
                'No visible damage',
                'Indicators show sterile',
                'Rejects documented'
            ]
        },
        {
            id: 'secondary_packaging',
            name: 'Secondary Packaging',
            order: 10,
            description: 'Placing sterilized packs into outer packaging.',
            steps: [
                'Count packages per outer carton',
                'Place in protective outer packaging',
                'Include package insert if required',
                'Seal outer package'
            ],
            qcChecks: [
                'Correct count per carton',
                'Insert included',
                'Outer package sealed',
                'Appearance acceptable'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 11,
            description: 'Complete clearance of production line after batch.',
            steps: [
                'Remove all finished products',
                'Remove all packaging materials',
                'Clear equipment of materials',
                'Reconcile batch documents'
            ],
            qcChecks: [
                'No materials remaining',
                'Products accounted for',
                'Yield reconciliation completed',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 12,
            description: 'Cleaning of production area after batch completion.',
            steps: [
                'Clean cutting equipment',
                'Clean work surfaces',
                'Sanitize area',
                'Dispose of waste properly'
            ],
            qcChecks: [
                'Equipment clean',
                'Area sanitized',
                'Status labels updated',
                'Ready for next production'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 13,
            description: 'Movement of finished foam packs to warehouse.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine area',
                'Update inventory'
            ],
            qcChecks: [
                'Quantity matches batch record',
                'Documentation complete',
                'Quarantine status applied',
                'FIFO followed'
            ]
        }
    ],

    // ==========================================
    // STOPAIN TOPICAL ANALGESIC PRODUCTION TASKS
    // ==========================================
    'stopain': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of production area before manufacturing.',
            steps: [
                'Verify production area access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize mixing vessels and filling equipment',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Previous batch materials removed',
                'Environmental conditions acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning and personal hygiene for topical production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly with antiseptic soap',
                'Don clean production attire',
                'Put on hair cover and face mask',
                'Put on disposable gloves',
                'Sanitize gloved hands'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'No exposed skin or hair',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 3,
            description: 'Verification of all raw materials for STOPAIN formulation.',
            steps: [
                'Verify active ingredient identity and potency',
                'Check all excipient specifications',
                'Verify batch/lot numbers',
                'Check expiry dates of all materials',
                'Confirm QC release status',
                'Weigh materials accurately'
            ],
            qcChecks: [
                'All materials identity confirmed',
                'Certificates of Analysis reviewed',
                'Quantities match batch formula',
                'Expiry dates valid',
                'QC release labels present'
            ]
        },
        {
            id: 'base_preparation',
            name: 'Base Preparation',
            order: 4,
            description: 'Preparation of topical base for STOPAIN formulation.',
            steps: [
                'Heat water phase to specified temperature',
                'Heat oil phase to specified temperature',
                'Monitor temperatures continuously',
                'Prepare emulsifying agents'
            ],
            qcChecks: [
                'Water phase temperature correct',
                'Oil phase temperature correct',
                'Thermometer calibration verified',
                'Process parameters documented'
            ]
        },
        {
            id: 'active_incorporation',
            name: 'Active Ingredient Incorporation',
            order: 5,
            description: 'Addition and mixing of active analgesic ingredients.',
            steps: [
                'Add active ingredients at specified temperature',
                'Mix at prescribed speed',
                'Continue mixing for specified duration',
                'Monitor for complete dissolution',
                'Check for homogeneity'
            ],
            qcChecks: [
                'Active added at correct temperature',
                'Mixing speed verified',
                'Mixing time documented',
                'No undissolved particles visible',
                'Sample taken for testing'
            ]
        },
        {
            id: 'emulsification',
            name: 'Emulsification Process',
            order: 6,
            description: 'Combining phases to form stable emulsion.',
            steps: [
                'Add oil phase to water phase slowly',
                'Maintain high-speed mixing',
                'Continue homogenization',
                'Cool mixture gradually',
                'Add preservatives and fragrances'
            ],
            qcChecks: [
                'Emulsion stable and uniform',
                'No phase separation',
                'Correct viscosity',
                'pH within specification',
                'Appearance acceptable'
            ]
        },
        {
            id: 'bulk_product_testing',
            name: 'Bulk Product Testing',
            order: 7,
            description: 'In-process testing of bulk STOPAIN product.',
            steps: [
                'Sample bulk product',
                'Test pH',
                'Test viscosity',
                'Visual inspection for homogeneity',
                'Document all results'
            ],
            qcChecks: [
                'pH within specification',
                'Viscosity within limits',
                'Homogeneous appearance',
                'No foreign particles',
                'Results documented'
            ]
        },
        {
            id: 'container_preparation',
            name: 'Container Preparation',
            order: 8,
            description: 'Preparation of containers for filling.',
            steps: [
                'Verify container specifications',
                'Inspect containers for defects',
                'Clean and/or sterilize containers',
                'Stage containers for filling line'
            ],
            qcChecks: [
                'Correct containers selected',
                'No defective containers',
                'Containers clean',
                'Quantity sufficient'
            ]
        },
        {
            id: 'filling_operation',
            name: 'Filling Operation',
            order: 9,
            description: 'Filling bulk product into containers.',
            steps: [
                'Set up filling machine',
                'Calibrate fill volume',
                'Perform test fills',
                'Begin production filling',
                'Monitor fill weights continuously'
            ],
            qcChecks: [
                'Fill volume within specification',
                'No spills or contamination',
                'Containers properly filled',
                'Weight checks documented'
            ]
        },
        {
            id: 'capping_sealing',
            name: 'Capping & Sealing',
            order: 10,
            description: 'Applying caps and ensuring proper seal.',
            steps: [
                'Apply caps to filled containers',
                'Ensure proper torque',
                'Apply tamper-evident seals if required',
                'Inspect cap application'
            ],
            qcChecks: [
                'Caps properly seated',
                'Torque within specification',
                'Tamper-evident seals intact',
                'No leaking containers'
            ]
        },
        {
            id: 'labeling',
            name: 'Labeling',
            order: 11,
            description: 'Application of product labels.',
            steps: [
                'Verify label identity',
                'Set up labeling machine',
                'Apply labels to containers',
                'Print batch and expiry information'
            ],
            qcChecks: [
                'Correct labels applied',
                'Labels properly positioned',
                'Batch number legible',
                'Expiry date correct'
            ]
        },
        {
            id: 'secondary_packaging',
            name: 'Secondary Packaging',
            order: 12,
            description: 'Placing products into cartons and outer packaging.',
            steps: [
                'Prepare cartons',
                'Insert package leaflets',
                'Place containers in cartons',
                'Seal cartons'
            ],
            qcChecks: [
                'Correct carton used',
                'Leaflet included',
                'Carton properly sealed',
                'Batch info on carton'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 13,
            description: 'Complete clearance of production line after batch.',
            steps: [
                'Remove all finished products',
                'Remove all packaging materials',
                'Reconcile labels and materials',
                'Complete batch documentation'
            ],
            qcChecks: [
                'All materials reconciled',
                'Products accounted for',
                'Yield within limits',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 14,
            description: 'Cleaning of all equipment and production area.',
            steps: [
                'Clean mixing vessels',
                'Clean filling equipment',
                'Clean work surfaces',
                'Sanitize entire area'
            ],
            qcChecks: [
                'Equipment clean and dry',
                'No product residue',
                'Status labels updated',
                'Ready for next batch'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 15,
            description: 'Movement of finished products to warehouse.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine storage',
                'Await QC release'
            ],
            qcChecks: [
                'Quantity verified',
                'Documentation complete',
                'Quarantine status applied',
                'FIFO arrangement'
            ]
        }
    ],

    // ==========================================
    // DONOR-SITE DRESSING PRODUCTION TASKS
    // ==========================================
    'donor_site': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of dressing production area.',
            steps: [
                'Verify cleanroom access is restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize cutting and assembly equipment',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry completely'
            ],
            qcChecks: [
                'Cleaning log signed by operator',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Environmental monitoring passed',
                'Previous batch materials removed'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning for sterile dressing production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly',
                'Don sterile gown',
                'Put on hair cover and face mask',
                'Put on sterile gloves',
                'Enter cleanroom through air shower'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'Sterile technique maintained',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 3,
            description: 'Verification of dressing materials.',
            steps: [
                'Verify silicone sheet specifications',
                'Check non-adherent layer material',
                'Verify adhesive border material',
                'Check all lot numbers',
                'Confirm QC release status'
            ],
            qcChecks: [
                'Materials identity confirmed',
                'Specifications met',
                'Lot numbers documented',
                'Expiry dates valid',
                'QC release verified'
            ]
        },
        {
            id: 'silicone_layer_preparation',
            name: 'Silicone Layer Preparation',
            order: 4,
            description: 'Cutting and preparation of silicone contact layer.',
            steps: [
                'Set up cutting template for silicone',
                'Cut silicone sheets to size',
                'Inspect cut pieces for defects',
                'Stack for assembly'
            ],
            qcChecks: [
                'Dimensions within specification',
                'Edges clean and smooth',
                'No tears or defects',
                'Correct quantity prepared'
            ]
        },
        {
            id: 'absorbent_layer_preparation',
            name: 'Absorbent Layer Preparation',
            order: 5,
            description: 'Preparation of absorbent pad layer.',
            steps: [
                'Cut absorbent material to size',
                'Verify absorbency specification',
                'Inspect for defects',
                'Stage for assembly'
            ],
            qcChecks: [
                'Dimensions correct',
                'Absorbency verified',
                'No contamination',
                'Quantity matches'
            ]
        },
        {
            id: 'dressing_assembly',
            name: 'Dressing Assembly',
            order: 6,
            description: 'Assembly of multi-layer donor-site dressing.',
            steps: [
                'Position silicone contact layer',
                'Add absorbent layer',
                'Apply adhesive border',
                'Apply release liner',
                'Inspect assembled dressing'
            ],
            qcChecks: [
                'Layers properly aligned',
                'Adhesion adequate',
                'No wrinkles or bubbles',
                'Release liner intact',
                'Appearance acceptable'
            ]
        },
        {
            id: 'individual_packaging',
            name: 'Individual Packaging',
            order: 7,
            description: 'Packaging each dressing in sterile pouch.',
            steps: [
                'Place dressing in pouch',
                'Ensure correct orientation',
                'Remove excess air',
                'Heat seal pouch',
                'Verify seal integrity'
            ],
            qcChecks: [
                'Correct pouch used',
                'Dressing properly positioned',
                'Seal complete',
                'No air pockets',
                'Package intact'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 8,
            description: 'Printing batch information on packages.',
            steps: [
                'Set up coding equipment',
                'Verify code accuracy',
                'Print batch number',
                'Print manufacturing/expiry dates',
                'Inspect print quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Dates correct',
                'Codes legible',
                'Position consistent'
            ]
        },
        {
            id: 'sterilization',
            name: 'Sterilization',
            order: 9,
            description: 'Terminal sterilization of packaged dressings.',
            steps: [
                'Load packages into sterilizer',
                'Ensure proper spacing',
                'Place sterilization indicators',
                'Run validated cycle',
                'Allow cooling period'
            ],
            qcChecks: [
                'Indicators passed',
                'Cycle parameters achieved',
                'All parameters logged',
                'Packages intact post-sterilization'
            ]
        },
        {
            id: 'post_sterilization_inspection',
            name: 'Post-Sterilization Inspection',
            order: 10,
            description: 'Inspection of sterilized packages.',
            steps: [
                'Visual inspection of all packages',
                'Check seal integrity',
                'Verify indicator color change',
                'Segregate any rejects'
            ],
            qcChecks: [
                'Seals intact',
                'No damage',
                'Indicators show sterile',
                'Rejects documented'
            ]
        },
        {
            id: 'secondary_packaging',
            name: 'Secondary Packaging',
            order: 11,
            description: 'Placing in outer cartons.',
            steps: [
                'Count packages per carton',
                'Place in outer carton',
                'Include package insert',
                'Seal carton'
            ],
            qcChecks: [
                'Correct count',
                'Insert included',
                'Carton sealed',
                'Labeled correctly'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 12,
            description: 'Complete clearance after batch.',
            steps: [
                'Remove all finished products',
                'Remove all materials',
                'Reconcile documentation',
                'Clear equipment'
            ],
            qcChecks: [
                'No materials remaining',
                'Products accounted for',
                'Yield reconciled',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 13,
            description: 'Cleaning of production area.',
            steps: [
                'Clean assembly equipment',
                'Clean work surfaces',
                'Sanitize area',
                'Dispose of waste'
            ],
            qcChecks: [
                'Equipment clean',
                'Area sanitized',
                'Status updated',
                'Ready for next batch'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 14,
            description: 'Movement to warehouse.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine',
                'Update inventory'
            ],
            qcChecks: [
                'Quantity matches',
                'Documentation complete',
                'Quarantine applied',
                'FIFO followed'
            ]
        }
    ],

    // ==========================================
    // HERATEX TEXTILE DRESSING PRODUCTION TASKS
    // ==========================================
    'heratex': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of textile processing area.',
            steps: [
                'Verify production area access restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize cutting and sewing equipment',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry'
            ],
            qcChecks: [
                'Cleaning log signed',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Previous batch cleared',
                'Environment acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning for textile dressing production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly',
                'Don clean production attire',
                'Put on hair cover and mask',
                'Put on disposable gloves',
                'Sanitize gloved hands'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'No exposed hair',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 3,
            description: 'Verification of textile materials.',
            steps: [
                'Verify textile roll specifications',
                'Check antimicrobial treatment status',
                'Verify lot numbers',
                'Check material certificates',
                'Confirm QC release'
            ],
            qcChecks: [
                'Material identity confirmed',
                'Treatment verified',
                'Lot numbers documented',
                'Certificates reviewed',
                'QC release present'
            ]
        },
        {
            id: 'textile_cutting',
            name: 'Textile Cutting',
            order: 4,
            description: 'Precision cutting of textile material.',
            steps: [
                'Set up cutting template',
                'Unroll textile material',
                'Cut using rotary cutter or die',
                'Verify dimensions',
                'Stack cut pieces',
                'Collect trim waste'
            ],
            qcChecks: [
                'Dimensions within specification',
                'Edges clean (no fraying)',
                'No defects or stains',
                'Quantity matches target',
                'Rejects documented'
            ]
        },
        {
            id: 'edge_finishing',
            name: 'Edge Finishing',
            order: 5,
            description: 'Finishing edges to prevent fraying.',
            steps: [
                'Set up edge finishing equipment',
                'Process each piece',
                'Inspect finished edges',
                'Stack for next stage'
            ],
            qcChecks: [
                'Edges properly sealed',
                'No fraying',
                'Uniform appearance',
                'All pieces processed'
            ]
        },
        {
            id: 'quality_inspection',
            name: 'Quality Inspection',
            order: 6,
            description: 'Inspection of finished textile pieces.',
            steps: [
                'Inspect each piece visually',
                'Check dimensions',
                'Verify edge quality',
                'Sort by quality grade',
                'Remove rejects'
            ],
            qcChecks: [
                '100% inspection completed',
                'Dimensions verified',
                'Edge quality acceptable',
                'Rejects segregated',
                'Inspection documented'
            ]
        },
        {
            id: 'folding',
            name: 'Folding',
            order: 7,
            description: 'Folding textile pieces for packaging.',
            steps: [
                'Fold according to specification',
                'Maintain consistent fold pattern',
                'Stack folded pieces',
                'Prepare for packaging'
            ],
            qcChecks: [
                'Fold pattern correct',
                'Consistent appearance',
                'No wrinkles',
                'Ready for packaging'
            ]
        },
        {
            id: 'individual_packaging',
            name: 'Individual Packaging',
            order: 8,
            description: 'Packaging each dressing in sterile pouch.',
            steps: [
                'Place folded dressing in pouch',
                'Ensure correct positioning',
                'Remove excess air',
                'Heat seal pouch',
                'Verify seal'
            ],
            qcChecks: [
                'Correct pouch used',
                'Dressing positioned correctly',
                'Seal complete',
                'Package intact'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 9,
            description: 'Printing batch information.',
            steps: [
                'Set up coding equipment',
                'Verify code accuracy',
                'Print batch/expiry info',
                'Inspect print quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Expiry date correct',
                'Codes legible',
                'Position consistent'
            ]
        },
        {
            id: 'sterilization',
            name: 'Sterilization',
            order: 10,
            description: 'Terminal sterilization of packaged dressings.',
            steps: [
                'Load into sterilizer',
                'Ensure proper spacing',
                'Place indicators',
                'Run validated cycle',
                'Allow cooling'
            ],
            qcChecks: [
                'Indicators passed',
                'Parameters achieved',
                'Cycle logged',
                'Packages intact'
            ]
        },
        {
            id: 'post_sterilization_inspection',
            name: 'Post-Sterilization Inspection',
            order: 11,
            description: 'Inspection of sterilized packages.',
            steps: [
                'Inspect all packages',
                'Check seal integrity',
                'Verify indicator change',
                'Segregate rejects'
            ],
            qcChecks: [
                'Seals intact',
                'No damage',
                'Indicators show sterile',
                'Rejects documented'
            ]
        },
        {
            id: 'secondary_packaging',
            name: 'Secondary Packaging',
            order: 12,
            description: 'Placing in outer packaging.',
            steps: [
                'Count packages per carton',
                'Place in outer carton',
                'Include insert if required',
                'Seal carton'
            ],
            qcChecks: [
                'Correct count',
                'Insert included',
                'Carton sealed',
                'Appearance acceptable'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 13,
            description: 'Complete clearance after batch.',
            steps: [
                'Remove all products',
                'Remove all materials',
                'Reconcile documents',
                'Clear equipment'
            ],
            qcChecks: [
                'No materials remaining',
                'Products accounted for',
                'Yield reconciled',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 14,
            description: 'Cleaning of production area.',
            steps: [
                'Clean cutting equipment',
                'Clean work surfaces',
                'Sanitize area',
                'Dispose of waste'
            ],
            qcChecks: [
                'Equipment clean',
                'Area sanitized',
                'Status updated',
                'Ready for next batch'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 15,
            description: 'Movement to warehouse.',
            steps: [
                'Complete final count',
                'Prepare documentation',
                'Move to quarantine',
                'Update inventory'
            ],
            qcChecks: [
                'Quantity matches',
                'Documentation complete',
                'Quarantine applied',
                'FIFO followed'
            ]
        }
    ],

    // ==========================================
    // STERILE GAUZE-ONLY PRODUCTION TASKS
    // ==========================================
    'sterile_gauze_only': [
        {
            id: 'pre_production_sanitation',
            name: 'Pre-Production Sanitation',
            order: 1,
            description: 'Complete sanitation of gauze processing area.',
            steps: [
                'Verify production area access restricted',
                'Remove all materials from previous batch',
                'Clean all surfaces with approved disinfectant',
                'Sanitize cutting and folding equipment',
                'Mop floors with disinfectant solution',
                'Allow surfaces to dry'
            ],
            qcChecks: [
                'Cleaning log signed',
                'Disinfectant concentration verified',
                'Visual inspection passed',
                'Previous batch cleared',
                'Environment acceptable'
            ]
        },
        {
            id: 'personnel_gowning',
            name: 'Personnel Gowning & Hygiene',
            order: 2,
            description: 'Proper gowning for sterile gauze production.',
            steps: [
                'Remove jewelry and personal items',
                'Wash hands thoroughly',
                'Don clean production attire',
                'Put on hair cover and mask',
                'Put on disposable gloves',
                'Sanitize gloved hands'
            ],
            qcChecks: [
                'Gowning procedure followed',
                'No exposed hair',
                'Gloves intact',
                'Personnel health verified'
            ]
        },
        {
            id: 'raw_material_verification',
            name: 'Raw Material Verification',
            order: 3,
            description: 'Verification of gauze material specifications.',
            steps: [
                'Verify gauze roll specifications',
                'Check thread count/ply',
                'Verify lot number',
                'Check material certificate',
                'Confirm QC release status'
            ],
            qcChecks: [
                'Material identity confirmed',
                'Thread count correct',
                'Lot number documented',
                'Certificate reviewed',
                'QC release present'
            ]
        },
        {
            id: 'gauze_cutting',
            name: 'Gauze Cutting',
            order: 4,
            description: 'Cutting gauze to specified dimensions.',
            steps: [
                'Set up cutting template',
                'Unroll gauze material',
                'Cut using rotary cutter',
                'Verify dimensions of cut pieces',
                'Stack cut pieces neatly',
                'Collect trim waste'
            ],
            qcChecks: [
                'Dimensions within specification',
                'Edges clean (minimal fraying)',
                'No stains or defects',
                'Quantity matches target',
                'Waste disposed properly'
            ]
        },
        {
            id: 'gauze_folding',
            name: 'Gauze Folding',
            order: 5,
            description: 'Folding gauze pieces to standard configuration.',
            steps: [
                'Fold gauze to specified layers',
                'Maintain consistent fold pattern',
                'Stack folded gauze',
                'Prepare for packaging'
            ],
            qcChecks: [
                'Fold pattern correct',
                'Layer count correct',
                'Consistent appearance',
                'No loose threads'
            ]
        },
        {
            id: 'quality_inspection',
            name: 'Quality Inspection',
            order: 6,
            description: 'Inspection of folded gauze pieces.',
            steps: [
                'Inspect each folded gauze',
                'Check for defects',
                'Verify fold consistency',
                'Remove rejects',
                'Document inspection'
            ],
            qcChecks: [
                'Visual inspection passed',
                'No defects',
                'Folds uniform',
                'Rejects documented'
            ]
        },
        {
            id: 'packaging',
            name: 'Packaging',
            order: 7,
            description: 'Packaging gauze in sterile pouches.',
            steps: [
                'Count gauze per pack',
                'Place in packaging material',
                'Ensure correct orientation',
                'Remove excess air',
                'Heat seal pouch'
            ],
            qcChecks: [
                'Correct count per pack',
                'Gauze properly positioned',
                'Seal complete',
                'Package intact'
            ]
        },
        {
            id: 'batch_coding',
            name: 'Batch Coding',
            order: 8,
            description: 'Printing batch information on packages.',
            steps: [
                'Set up coding equipment',
                'Verify code accuracy',
                'Print batch number',
                'Print manufacturing/expiry dates',
                'Inspect print quality'
            ],
            qcChecks: [
                'Batch number correct',
                'Dates correct',
                'Codes legible',
                'Position consistent'
            ]
        },
        {
            id: 'sterilization',
            name: 'Sterilization',
            order: 9,
            description: 'Terminal sterilization of packaged gauze.',
            steps: [
                'Load packages into sterilizer',
                'Ensure proper spacing',
                'Place sterilization indicators',
                'Run validated cycle',
                'Allow cooling period'
            ],
            qcChecks: [
                'Indicators passed',
                'Cycle parameters achieved',
                'All parameters logged',
                'Packages intact post-sterilization'
            ]
        },
        {
            id: 'post_sterilization_inspection',
            name: 'Post-Sterilization Inspection',
            order: 10,
            description: 'Inspection of sterilized packages.',
            steps: [
                'Visual inspection of all packages',
                'Check seal integrity',
                'Verify indicator color change',
                'Segregate any rejects'
            ],
            qcChecks: [
                'Seals intact',
                'No damage',
                'Indicators show sterile',
                'Rejects documented'
            ]
        },
        {
            id: 'secondary_packaging',
            name: 'Secondary Packaging',
            order: 11,
            description: 'Placing in outer cartons.',
            steps: [
                'Count packages per carton',
                'Place in outer carton',
                'Include package insert if required',
                'Seal carton'
            ],
            qcChecks: [
                'Correct count',
                'Insert included',
                'Carton sealed',
                'Labeled correctly'
            ]
        },
        {
            id: 'line_clearance',
            name: 'Line Clearance',
            order: 12,
            description: 'Complete clearance after batch.',
            steps: [
                'Remove all finished products',
                'Remove all materials',
                'Reconcile documentation',
                'Clear equipment'
            ],
            qcChecks: [
                'No materials remaining',
                'Products accounted for',
                'Yield reconciled',
                'Line clearance signed'
            ]
        },
        {
            id: 'post_production_cleaning',
            name: 'Post-Production Cleaning',
            order: 13,
            description: 'Cleaning of production area.',
            steps: [
                'Clean cutting equipment',
                'Clean work surfaces',
                'Sanitize area',
                'Dispose of waste'
            ],
            qcChecks: [
                'Equipment clean',
                'Area sanitized',
                'Status updated',
                'Ready for next batch'
            ]
        },
        {
            id: 'warehouse_transfer',
            name: 'Transfer to Warehouse',
            order: 14,
            description: 'Movement to warehouse.',
            steps: [
                'Complete final count',
                'Prepare transfer documentation',
                'Move to quarantine',
                'Update inventory'
            ],
            qcChecks: [
                'Quantity matches',
                'Documentation complete',
                'Quarantine applied',
                'FIFO followed'
            ]
        }
    ]
};

// Copy honey_gauze_big tasks to honey_gauze_small (same process)
PRODUCT_SPECIFIC_TASKS['honey_gauze_small'] = PRODUCT_SPECIFIC_TASKS['honey_gauze_big'];

// Copy hera_gel_100g tasks to hera_gel_40g (same process)
PRODUCT_SPECIFIC_TASKS['hera_gel_40g'] = PRODUCT_SPECIFIC_TASKS['hera_gel_100g'];

/**
 * Get tasks for a specific product (or default stages)
 */
function getTasksForProduct(productId) {
    if (PRODUCT_SPECIFIC_TASKS[productId]) {
        return PRODUCT_SPECIFIC_TASKS[productId];
    }
    return PRODUCTION_STAGES;
}

/**
 * Auto-assign tasks to available staff evenly
 */
function autoAssignTasksToStaff(tasks, staffIds) {
    if (!staffIds || staffIds.length === 0) {
        return tasks.map(task => ({ ...task, staffId: null }));
    }
    
    // Distribute tasks evenly among staff
    return tasks.map((task, index) => ({
        ...task,
        staffId: staffIds[index % staffIds.length]
    }));
}

// Product list
const PRODUCTS = [
    { id: 'stopain', name: 'STOPAIN', unit: 'units' },
    { id: 'honey_gauze_big', name: 'Wound-Care Honey Gauze Big', unit: 'packs' },
    { id: 'honey_gauze_small', name: 'Wound-Care Honey Gauze Small', unit: 'packs' },
    { id: 'wound_clex_500ml', name: 'Wound-Clex Solution 500ml', unit: 'bottles' },
    { id: 'sterile_dressing_pack', name: 'Sterile Dressing Pack', unit: 'packs' },
    { id: 'sterile_gauze_only', name: 'Sterile Gauze-Only', unit: 'packs' },
    { id: 'hera_gel_100g', name: 'Hera Wound-Gel 100g', unit: 'tubes' },
    { id: 'hera_gel_40g', name: 'Hera Wound-Gel 40g', unit: 'tubes' },
    { id: 'npwt_vac_foam', name: 'NPWT (VAC) Foam', unit: 'units' },
    { id: 'donor_site', name: 'DONOR-SITE', unit: 'units' },
    { id: 'heratex', name: 'Heratex', unit: 'units' }
];

/**
 * Load all production schedules
 */
async function loadProduction() {
    try {
        productionCache = await DB.getAll(DB.STORES.PRODUCTION);
        renderProductionList();
        updateProductionStats();
        return productionCache;
    } catch (error) {
        console.error('Error loading production:', error);
        Utils.showToast('error', 'Error', 'Failed to load production data');
        return [];
    }
}

/**
 * Render production list
 */
function renderProductionList() {
    const container = document.getElementById('productionList');
    
    if (!productionCache || productionCache.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 60px;">
                <i class="fas fa-flask" style="font-size: 64px; color: var(--gray-400); margin-bottom: 20px;"></i>
                <h3 style="color: var(--gray-600); margin-bottom: 8px;">No Production Scheduled</h3>
                <p style="color: var(--gray-500);">Click "New Production Schedule" to plan your next production run.</p>
            </div>
        `;
        return;
    }
    
    // Sort by date (most recent first)
    const sorted = [...productionCache].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sorted.map(production => {
        const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
        const completedTasks = production.tasks ? production.tasks.filter(t => t.completed).length : 0;
        const totalTasks = production.tasks ? production.tasks.length : 0;
        const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        return `
            <div class="production-card" data-id="${production.id}">
                <div class="production-header">
                    <div class="production-info">
                        <h3>${Utils.escapeHtml(product.name)}</h3>
                        <div class="production-meta">
                            <span><i class="fas fa-calendar"></i> ${Utils.formatDateDisplay(production.date)}</span>
                            <span><i class="fas fa-clock"></i> ${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}</span>
                            <span><i class="fas fa-boxes"></i> Target: ${production.targetQuantity} ${product.unit}</span>
                        </div>
                    </div>
                    <span class="production-status ${production.status}">${Utils.capitalize(production.status)}</span>
                </div>
                
                <div class="production-body">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h4 style="color: var(--gray-700);"><i class="fas fa-tasks" style="color: var(--primary-500);"></i> Production Tasks</h4>
                        <span style="color: var(--gray-600); font-size: 14px;">
                            ${completedTasks}/${totalTasks} completed (${progress}%)
                        </span>
                    </div>
                    
                    <div style="background: var(--gray-200); height: 8px; border-radius: 4px; margin-bottom: 16px;">
                        <div style="background: ${progress === 100 ? 'var(--success-500)' : 'var(--primary-500)'}; height: 100%; width: ${progress}%; border-radius: 4px; transition: width 0.3s;"></div>
                    </div>
                    
                    <div class="production-tasks">
                        <div class="task-row task-header">
                            <div>#</div>
                            <div>Task</div>
                            <div>Assigned To</div>
                            <div>Status</div>
                            <div>QC</div>
                            <div>Done</div>
                        </div>
                        ${production.tasks ? production.tasks.map((task, idx) => `
                            <div class="task-row ${task.completed ? 'task-completed' : ''}" data-task-id="${task.id}" style="cursor: pointer;" onclick="showProductionTaskDetails(${production.id}, '${task.id}')">
                                <div class="task-order" style="font-weight: bold; color: var(--primary-600);">${idx + 1}</div>
                                <div class="task-name" title="${Utils.escapeHtml(task.description || task.name)}">${Utils.escapeHtml(task.name)}</div>
                                <div class="task-staff">${task.staffId ? Staff.getName(task.staffId) : '<span style="color:var(--warning-500);">Unassigned</span>'}</div>
                                <div>
                                    <span class="status-badge status-${task.completed ? 'completed' : 'pending'}">
                                        ${task.completed ? 'Done' : 'Pending'}
                                    </span>
                                </div>
                                <div class="task-qc">
                                    ${task.qcPassed === true ? '<i class="fas fa-check-circle" style="color: var(--success-500);" title="QC Passed"></i>' : 
                                      task.qcPassed === false ? '<i class="fas fa-times-circle" style="color: var(--danger-500);" title="QC Failed"></i>' : 
                                      '<i class="fas fa-minus-circle" style="color: var(--gray-400);" title="QC Pending"></i>'}
                                </div>
                                <div class="task-checkbox" onclick="event.stopPropagation();">
                                    <input type="checkbox" 
                                           ${task.completed ? 'checked' : ''} 
                                           onchange="toggleTaskCompletion(${production.id}, '${task.id}', this.checked)"
                                           ${production.status === 'completed' ? 'disabled' : ''}>
                                </div>
                            </div>
                        `).join('') : '<div class="task-row"><div colspan="6" class="empty-state">No tasks defined</div></div>'}
                    </div>
                </div>
                
                <div class="production-footer">
                    <div style="font-size: 14px; color: var(--gray-500);">
                        Created: ${Utils.formatDateTime(production.createdAt)}
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-sm btn-info" onclick="exportSingleProductionPDF(${production.id})" title="Export & Share on WhatsApp">
                            <i class="fab fa-whatsapp"></i> Share
                        </button>
                        ${production.status !== 'completed' ? `
                            <button class="btn btn-sm btn-success" onclick="completeProduction(${production.id})">
                                <i class="fas fa-check"></i> Complete
                            </button>
                        ` : ''}
                        <button class="btn btn-sm btn-secondary" onclick="editProduction(${production.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="viewProductionDetails(${production.id})">
                            <i class="fas fa-eye"></i> Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update production statistics
 */
function updateProductionStats() {
    const today = new Date();
    const upcomingCount = productionCache.filter(p => 
        new Date(p.date) >= today && p.status !== 'completed'
    ).length;
    
    const statElement = document.getElementById('statProductionCount');
    if (statElement) {
        statElement.textContent = upcomingCount;
    }
}

/**
 * Show Add Production Modal
 */
function showAddProductionModal() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const content = `
        <form id="productionForm" onsubmit="saveProduction(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Production Date</label>
                    <input type="date" class="form-control" id="productionDateInput" 
                           value="${Utils.formatDate(tomorrow)}" required>
                </div>
                <div class="form-group">
                    <label class="required">Product</label>
                    <select class="form-control" id="productionProductInput" required onchange="onProductSelectionChange()">
                        <option value="">Select Product</option>
                        ${PRODUCTS.map(p => `<option value="${p.id}">${Utils.escapeHtml(p.name)}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="productionStartTimeInput" 
                           value="08:30" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="productionEndTimeInput" 
                           value="17:00" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Target Quantity</label>
                    <input type="number" class="form-control" id="productionQuantityInput" 
                           placeholder="e.g., 1000" min="1" required>
                </div>
                <div class="form-group">
                    <label>Batch Number</label>
                    <input type="text" class="form-control" id="productionBatchInput" 
                           placeholder="e.g., BTH-2026-001">
                </div>
            </div>
            
            <div class="form-group">
                <label>Required Staff</label>
                <div style="margin-bottom: 8px;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--primary-600); font-weight: 500;">
                        <input type="checkbox" id="autoAssignStaff" checked>
                        <i class="fas fa-magic"></i> Auto-assign tasks evenly to selected staff
                    </label>
                </div>
                <div id="staffSelectionContainer" style="max-height: 150px; overflow-y: auto; border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${Staff.getActive().map(staff => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="staff_${staff.id}" name="selectedStaff" value="${staff.id}">
                            <label for="staff_${staff.id}">${Utils.escapeHtml(staff.name)} (${Utils.escapeHtml(staff.role)})</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Production Tasks <span id="taskCountBadge" style="background: var(--primary-500); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-left: 8px;">0 tasks</span></label>
                <div id="tasksContainer" style="border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px; max-height: 250px; overflow-y: auto;">
                    <p style="color: var(--gray-500); text-align: center; padding: 20px;">
                        <i class="fas fa-arrow-up"></i> Select a product to load its production tasks
                    </p>
                </div>
            </div>
            
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="productionNotesInput" 
                          placeholder="Special instructions or remarks"></textarea>
            </div>
            
            <input type="hidden" id="productionEditId" value="">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="document.getElementById('productionForm').requestSubmit()">
            <i class="fas fa-save"></i> Schedule Production
        </button>
    `;
    
    Utils.showModal('New Production Schedule', content, footer);
}

/**
 * Handle product selection change - load product-specific tasks
 */
function onProductSelectionChange() {
    const productId = document.getElementById('productionProductInput').value;
    const tasksContainer = document.getElementById('tasksContainer');
    const taskCountBadge = document.getElementById('taskCountBadge');
    
    if (!productId) {
        tasksContainer.innerHTML = `
            <p style="color: var(--gray-500); text-align: center; padding: 20px;">
                <i class="fas fa-arrow-up"></i> Select a product to load its production tasks
            </p>
        `;
        taskCountBadge.textContent = '0 tasks';
        return;
    }
    
    const tasks = getTasksForProduct(productId);
    const isProductSpecific = PRODUCT_SPECIFIC_TASKS[productId] !== undefined;
    
    taskCountBadge.textContent = `${tasks.length} tasks`;
    taskCountBadge.style.background = isProductSpecific ? 'var(--success-500)' : 'var(--primary-500)';
    
    tasksContainer.innerHTML = `
        ${isProductSpecific ? `
            <div style="background: var(--success-100); padding: 8px 12px; border-radius: 6px; margin-bottom: 12px; color: var(--success-500);">
                <i class="fas fa-check-circle"></i> <strong>Product-Specific SOP Tasks Loaded</strong>
            </div>
        ` : `
            <div style="background: var(--info-100); padding: 8px 12px; border-radius: 6px; margin-bottom: 12px; color: var(--info-500);">
                <i class="fas fa-info-circle"></i> Using default production stages
            </div>
        `}
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <button type="button" class="btn btn-sm btn-secondary" onclick="selectAllTasks()">
                <i class="fas fa-check-double"></i> Select All
            </button>
            <button type="button" class="btn btn-sm btn-secondary" onclick="deselectAllTasks()">
                <i class="fas fa-times"></i> Deselect All
            </button>
        </div>
        ${tasks.map(task => `
            <div class="checkbox-group task-item" style="margin-bottom: 8px; padding: 8px; background: var(--gray-50); border-radius: 6px;">
                <input type="checkbox" id="task_${task.id}" name="selectedTasks" value="${task.id}" checked>
                <label for="task_${task.id}" style="flex: 1;">
                    <strong>${task.order}. ${Utils.escapeHtml(task.name)}</strong>
                    ${task.description ? `<br><small style="color: var(--gray-500);">${Utils.escapeHtml(task.description.substring(0, 80))}${task.description.length > 80 ? '...' : ''}</small>` : ''}
                </label>
                ${task.description ? `<button type="button" class="btn btn-sm" style="padding: 4px 8px;" onclick="showTaskDetails('${task.id}')" title="View Details"><i class="fas fa-info-circle"></i></button>` : ''}
            </div>
        `).join('')}
    `;
}

/**
 * Select all tasks
 */
function selectAllTasks() {
    document.querySelectorAll('input[name="selectedTasks"]').forEach(cb => cb.checked = true);
}

/**
 * Deselect all tasks
 */
function deselectAllTasks() {
    document.querySelectorAll('input[name="selectedTasks"]').forEach(cb => cb.checked = false);
}

/**
 * Show task details modal
 */
function showTaskDetails(taskId) {
    const productId = document.getElementById('productionProductInput').value;
    const tasks = getTasksForProduct(productId);
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) return;
    
    const content = `
        <div style="padding: 10px;">
            <h3 style="color: var(--primary-700); margin-bottom: 16px;">
                <i class="fas fa-clipboard-list"></i> ${task.order}. ${Utils.escapeHtml(task.name)}
            </h3>
            
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                <h4 style="color: var(--gray-700); margin-bottom: 8px;"><i class="fas fa-file-alt"></i> Description</h4>
                <p style="color: var(--gray-600);">${Utils.escapeHtml(task.description || 'No description available')}</p>
            </div>
            
            ${task.steps && task.steps.length > 0 ? `
                <div style="background: var(--primary-50); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="color: var(--primary-700); margin-bottom: 12px;"><i class="fas fa-list-ol"></i> Key Execution Steps</h4>
                    <ol style="margin: 0; padding-left: 20px; color: var(--gray-700);">
                        ${task.steps.map(step => `<li style="margin-bottom: 6px;">${Utils.escapeHtml(step)}</li>`).join('')}
                    </ol>
                </div>
            ` : ''}
            
            ${task.qcChecks && task.qcChecks.length > 0 ? `
                <div style="background: var(--success-100); padding: 16px; border-radius: 8px;">
                    <h4 style="color: var(--success-500); margin-bottom: 12px;"><i class="fas fa-check-double"></i> Quality Control Checks</h4>
                    <ul style="margin: 0; padding-left: 20px; color: var(--gray-700);">
                        ${task.qcChecks.map(check => `<li style="margin-bottom: 6px;">${Utils.escapeHtml(check)}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    
    const footer = `
        <button class="btn btn-primary" onclick="closeModal()">
            <i class="fas fa-check"></i> Got it
        </button>
    `;
    
    // Store current modal state and show task details
    const currentModalContent = document.querySelector('.modal-body').innerHTML;
    const currentModalTitle = document.querySelector('.modal-title').textContent;
    const currentModalFooter = document.querySelector('.modal-footer').innerHTML;
    
    Utils.showModal(`Task Details: ${task.name}`, content, footer);
    
    // Store restore info in a global temp var
    window._tempModalRestore = {
        content: currentModalContent,
        title: currentModalTitle,
        footer: currentModalFooter
    };
}

/**
 * Save Production
 */
async function saveProduction(event) {
    event.preventDefault();
    
    const editId = document.getElementById('productionEditId').value;
    const productId = document.getElementById('productionProductInput').value;
    const autoAssign = document.getElementById('autoAssignStaff')?.checked ?? false;
    
    // Get selected staff
    const selectedStaff = [];
    document.querySelectorAll('input[name="selectedStaff"]:checked').forEach(cb => {
        selectedStaff.push(parseInt(cb.value));
    });
    
    // Get product-specific tasks
    const productTasks = getTasksForProduct(productId);
    
    // Get selected tasks
    let selectedTasks = [];
    document.querySelectorAll('input[name="selectedTasks"]:checked').forEach(cb => {
        const task = productTasks.find(t => t.id === cb.value);
        if (task) {
            selectedTasks.push({
                id: task.id,
                name: task.name,
                order: task.order,
                description: task.description || '',
                steps: task.steps || [],
                qcChecks: task.qcChecks || [],
                staffId: null,
                startTime: null,
                endTime: null,
                completed: false,
                qcPassed: null,
                remarks: ''
            });
        }
    });
    
    // Sort tasks by order
    selectedTasks.sort((a, b) => a.order - b.order);
    
    // Auto-assign tasks to staff if enabled
    if (autoAssign && selectedStaff.length > 0) {
        selectedTasks = autoAssignTasksToStaff(selectedTasks, selectedStaff);
    }
    
    const productionData = {
        date: document.getElementById('productionDateInput').value,
        productId: productId,
        startTime: document.getElementById('productionStartTimeInput').value,
        endTime: document.getElementById('productionEndTimeInput').value,
        targetQuantity: parseInt(document.getElementById('productionQuantityInput').value),
        batchNumber: document.getElementById('productionBatchInput').value.trim(),
        assignedStaff: selectedStaff,
        tasks: selectedTasks,
        notes: document.getElementById('productionNotesInput').value.trim(),
        status: 'scheduled'
    };
    
    // Validation
    if (!productionData.productId) {
        Utils.showToast('error', 'Validation Error', 'Please select a product');
        return;
    }
    
    if (selectedTasks.length === 0) {
        Utils.showToast('error', 'Validation Error', 'Please select at least one production task');
        return;
    }
    
    try {
        if (editId) {
            productionData.id = parseInt(editId);
            await DB.update(DB.STORES.PRODUCTION, productionData);
            Utils.showToast('success', 'Success', 'Production schedule updated');
            
            // Update roster assignments for this production
            if (window.Roster && window.Roster.generateFromProduction) {
                const rosterResult = await window.Roster.generateFromProduction(productionData);
                if (rosterResult.assignmentsCreated > 0) {
                    Utils.showToast('info', 'Roster Updated', rosterResult.message);
                }
            }
        } else {
            const newId = await DB.add(DB.STORES.PRODUCTION, productionData);
            productionData.id = newId;
            Utils.showToast('success', 'Success', 'Production scheduled successfully');
            
            // Auto-generate roster entries from production schedule
            if (window.Roster && window.Roster.generateFromProduction) {
                const rosterResult = await window.Roster.generateFromProduction(productionData);
                if (rosterResult.success && rosterResult.assignmentsCreated > 0) {
                    Utils.showToast('info', 'Roster Generated', `${rosterResult.assignmentsCreated} duty assignments created from production tasks`);
                }
            }
        }
        
        closeModal();
        await loadProduction();
    } catch (error) {
        console.error('Error saving production:', error);
        Utils.showToast('error', 'Error', 'Failed to save production schedule');
    }
}

/**
 * Toggle task completion
 */
async function toggleTaskCompletion(productionId, taskId, completed) {
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, productionId);
        if (!production) return;
        
        const task = production.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = completed;
            task.completedAt = completed ? Utils.getTimestamp() : null;
            task.completedBy = completed ? (await DB.getSetting('currentUser') || 'Unknown') : null;
        }
        
        // Update production status if all tasks completed
        const allCompleted = production.tasks.every(t => t.completed);
        if (allCompleted && production.status !== 'completed') {
            production.status = 'in-progress';
        }
        
        await DB.update(DB.STORES.PRODUCTION, production);
        await loadProduction();
    } catch (error) {
        console.error('Error toggling task:', error);
        Utils.showToast('error', 'Error', 'Failed to update task');
    }
}

/**
 * Show production task details with QC options
 */
async function showProductionTaskDetails(productionId, taskId) {
    const production = productionCache.find(p => p.id === productionId);
    if (!production) return;
    
    const task = production.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const staffName = task.staffId ? Staff.getName(task.staffId) : 'Unassigned';
    const activeStaff = Staff.getActive();
    
    const content = `
        <div style="padding: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="color: var(--primary-700); margin: 0;">
                    <i class="fas fa-clipboard-list"></i> ${task.order}. ${Utils.escapeHtml(task.name)}
                </h3>
                <span class="status-badge status-${task.completed ? 'completed' : 'pending'}" style="font-size: 14px;">
                    ${task.completed ? 'Completed' : 'Pending'}
                </span>
            </div>
            
            ${task.description ? `
                <div style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="color: var(--gray-700); margin-bottom: 8px; font-size: 14px;"><i class="fas fa-file-alt"></i> Description</h4>
                    <p style="color: var(--gray-600); margin: 0; font-size: 13px;">${Utils.escapeHtml(task.description)}</p>
                </div>
            ` : ''}
            
            ${task.steps && task.steps.length > 0 ? `
                <div style="background: var(--primary-50); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="color: var(--primary-700); margin-bottom: 10px; font-size: 14px;"><i class="fas fa-list-ol"></i> Execution Steps</h4>
                    <ol style="margin: 0; padding-left: 20px; color: var(--gray-700); font-size: 13px;">
                        ${task.steps.map(step => `<li style="margin-bottom: 4px;">${Utils.escapeHtml(step)}</li>`).join('')}
                    </ol>
                </div>
            ` : ''}
            
            ${task.qcChecks && task.qcChecks.length > 0 ? `
                <div style="background: var(--success-100); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="color: var(--success-500); margin-bottom: 10px; font-size: 14px;"><i class="fas fa-check-double"></i> Quality Control Checks</h4>
                    <ul style="margin: 0; padding-left: 20px; color: var(--gray-700); font-size: 13px;">
                        ${task.qcChecks.map(check => `<li style="margin-bottom: 4px;">${Utils.escapeHtml(check)}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div style="background: var(--gray-100); padding: 16px; border-radius: 8px;">
                <h4 style="color: var(--gray-700); margin-bottom: 12px;"><i class="fas fa-edit"></i> Task Management</h4>
                
                <div class="form-group" style="margin-bottom: 12px;">
                    <label style="font-size: 13px; margin-bottom: 4px;">Assigned Staff</label>
                    <select class="form-control" id="taskStaffSelect" style="font-size: 13px;">
                        <option value="">-- Select Staff --</option>
                        ${activeStaff.map(s => `<option value="${s.id}" ${task.staffId === s.id ? 'selected' : ''}>${Utils.escapeHtml(s.name)} (${s.role})</option>`).join('')}
                    </select>
                </div>
                
                <div class="form-group" style="margin-bottom: 12px;">
                    <label style="font-size: 13px; margin-bottom: 4px;">QC Status</label>
                    <div style="display: flex; gap: 8px;">
                        <button type="button" class="btn btn-sm ${task.qcPassed === true ? 'btn-success' : 'btn-secondary'}" 
                                onclick="setTaskQCStatus(${productionId}, '${taskId}', true)" style="flex: 1;">
                            <i class="fas fa-check"></i> QC Passed
                        </button>
                        <button type="button" class="btn btn-sm ${task.qcPassed === false ? 'btn-danger' : 'btn-secondary'}" 
                                onclick="setTaskQCStatus(${productionId}, '${taskId}', false)" style="flex: 1;">
                            <i class="fas fa-times"></i> QC Failed
                        </button>
                    </div>
                </div>
                
                <div class="form-group" style="margin-bottom: 0;">
                    <label style="font-size: 13px; margin-bottom: 4px;">Remarks</label>
                    <textarea class="form-control" id="taskRemarksInput" style="font-size: 13px;" rows="2" 
                              placeholder="Any observations or notes">${Utils.escapeHtml(task.remarks || '')}</textarea>
                </div>
            </div>
            
            ${task.completed ? `
                <div style="margin-top: 12px; padding: 10px; background: var(--success-100); border-radius: 6px; font-size: 12px; color: var(--success-500);">
                    <i class="fas fa-check-circle"></i> Completed by ${Utils.escapeHtml(task.completedBy || 'Unknown')} 
                    ${task.completedAt ? `at ${Utils.formatDateTime(task.completedAt)}` : ''}
                </div>
            ` : ''}
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="saveTaskDetails(${productionId}, '${taskId}')">
            <i class="fas fa-save"></i> Save Changes
        </button>
    `;
    
    Utils.showModal('Task Details', content, footer);
}

/**
 * Set task QC status
 */
async function setTaskQCStatus(productionId, taskId, passed) {
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, productionId);
        if (!production) return;
        
        const task = production.tasks.find(t => t.id === taskId);
        if (task) {
            task.qcPassed = passed;
            task.qcCheckedAt = Utils.getTimestamp();
            task.qcCheckedBy = await DB.getSetting('currentUser') || 'Unknown';
        }
        
        await DB.update(DB.STORES.PRODUCTION, production);
        
        // Update the modal buttons to reflect the change
        const passBtn = document.querySelector(`button[onclick="setTaskQCStatus(${productionId}, '${taskId}', true)"]`);
        const failBtn = document.querySelector(`button[onclick="setTaskQCStatus(${productionId}, '${taskId}', false)"]`);
        
        if (passBtn && failBtn) {
            passBtn.className = `btn btn-sm ${passed ? 'btn-success' : 'btn-secondary'}`;
            failBtn.className = `btn btn-sm ${!passed ? 'btn-danger' : 'btn-secondary'}`;
        }
        
        Utils.showToast('success', 'Updated', `QC status set to ${passed ? 'Passed' : 'Failed'}`);
    } catch (error) {
        console.error('Error setting QC status:', error);
        Utils.showToast('error', 'Error', 'Failed to update QC status');
    }
}

/**
 * Save task details (staff assignment and remarks)
 */
async function saveTaskDetails(productionId, taskId) {
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, productionId);
        if (!production) return;
        
        const task = production.tasks.find(t => t.id === taskId);
        if (task) {
            const staffSelect = document.getElementById('taskStaffSelect');
            const remarksInput = document.getElementById('taskRemarksInput');
            
            task.staffId = staffSelect.value ? parseInt(staffSelect.value) : null;
            task.remarks = remarksInput.value.trim();
            task.updatedAt = Utils.getTimestamp();
        }
        
        await DB.update(DB.STORES.PRODUCTION, production);
        closeModal();
        await loadProduction();
        Utils.showToast('success', 'Saved', 'Task details updated successfully');
    } catch (error) {
        console.error('Error saving task details:', error);
        Utils.showToast('error', 'Error', 'Failed to save task details');
    }
}

/**
 * Complete Production
 */
async function completeProduction(id) {
    const content = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="fas fa-check-circle" style="font-size: 48px; color: var(--success-500); margin-bottom: 16px;"></i>
            <p style="color: var(--gray-600);">
                Are you sure you want to mark this production as <strong>completed</strong>?
            </p>
        </div>
        
        <div class="form-group">
            <label>Actual Quantity Produced</label>
            <input type="number" class="form-control" id="actualQuantityInput" placeholder="Enter actual quantity" min="0">
        </div>
        
        <div class="form-group">
            <label>Completion Notes</label>
            <textarea class="form-control" id="completionNotesInput" placeholder="Any remarks about this production run"></textarea>
        </div>
        
        <div class="form-group">
            <label class="required">Supervisor Approval</label>
            <input type="text" class="form-control" id="supervisorApprovalInput" placeholder="Enter supervisor name" required>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-success" onclick="executeCompleteProduction(${id})">
            <i class="fas fa-check"></i> Complete Production
        </button>
    `;
    
    Utils.showModal('Complete Production', content, footer);
}

/**
 * Execute complete production
 */
async function executeCompleteProduction(id) {
    const supervisor = document.getElementById('supervisorApprovalInput').value.trim();
    if (!supervisor) {
        Utils.showToast('error', 'Required', 'Supervisor approval is required');
        return;
    }
    
    try {
        const production = await DB.get(DB.STORES.PRODUCTION, id);
        if (!production) return;
        
        production.status = 'completed';
        production.completedAt = Utils.getTimestamp();
        production.actualQuantity = parseInt(document.getElementById('actualQuantityInput').value) || production.targetQuantity;
        production.completionNotes = document.getElementById('completionNotesInput').value.trim();
        production.supervisorApproval = supervisor;
        
        // Mark all tasks as completed
        production.tasks.forEach(task => {
            if (!task.completed) {
                task.completed = true;
                task.completedAt = Utils.getTimestamp();
            }
        });
        
        await DB.update(DB.STORES.PRODUCTION, production);
        closeModal();
        Utils.showToast('success', 'Completed', 'Production marked as completed');
        await loadProduction();
    } catch (error) {
        console.error('Error completing production:', error);
        Utils.showToast('error', 'Error', 'Failed to complete production');
    }
}

/**
 * View Production Details
 */
async function viewProductionDetails(id) {
    const production = await DB.get(DB.STORES.PRODUCTION, id);
    if (!production) {
        Utils.showToast('error', 'Error', 'Production not found');
        return;
    }
    
    const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
    const assignedStaffNames = production.assignedStaff.map(id => Staff.getName(id)).join(', ') || 'None assigned';
    
    const content = `
        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--primary-800); margin-bottom: 4px;">${Utils.escapeHtml(product.name)}</h3>
            <span class="status-badge status-${production.status === 'completed' ? 'completed' : production.status === 'in-progress' ? 'pending' : 'active'}">
                ${Utils.capitalize(production.status)}
            </span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px;">
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Date</div>
                <div style="font-weight: 600;">${Utils.formatDateDisplay(production.date)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Time</div>
                <div style="font-weight: 600;">${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Target Quantity</div>
                <div style="font-weight: 600;">${production.targetQuantity} ${product.unit}</div>
            </div>
            <div style="background: var(--gray-50); padding: 12px; border-radius: 8px;">
                <div style="color: var(--gray-500); font-size: 12px;">Batch Number</div>
                <div style="font-weight: 600;">${production.batchNumber || '-'}</div>
            </div>
        </div>
        
        ${production.status === 'completed' ? `
            <div style="background: var(--success-100); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="color: var(--success-500); margin-bottom: 8px;"><i class="fas fa-check-circle"></i> Completion Details</h4>
                <p style="margin: 4px 0;"><strong>Actual Quantity:</strong> ${production.actualQuantity || production.targetQuantity} ${product.unit}</p>
                <p style="margin: 4px 0;"><strong>Completed:</strong> ${Utils.formatDateTime(production.completedAt)}</p>
                <p style="margin: 4px 0;"><strong>Approved By:</strong> ${production.supervisorApproval || '-'}</p>
                ${production.completionNotes ? `<p style="margin: 4px 0;"><strong>Notes:</strong> ${Utils.escapeHtml(production.completionNotes)}</p>` : ''}
            </div>
        ` : ''}
        
        <div style="margin-bottom: 16px;">
            <h4 style="color: var(--gray-700); margin-bottom: 8px;"><i class="fas fa-users" style="color: var(--primary-500);"></i> Assigned Staff</h4>
            <p style="color: var(--gray-600);">${Utils.escapeHtml(assignedStaffNames)}</p>
        </div>
        
        <div>
            <h4 style="color: var(--gray-700); margin-bottom: 8px;"><i class="fas fa-tasks" style="color: var(--primary-500);"></i> Tasks</h4>
            <div style="border: 1px solid var(--gray-200); border-radius: 8px; overflow: hidden;">
                ${production.tasks.map(task => `
                    <div style="display: flex; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid var(--gray-100);">
                        <span>${Utils.escapeHtml(task.name)}</span>
                        <span class="status-badge status-${task.completed ? 'completed' : 'pending'}">
                            ${task.completed ? 'Done' : 'Pending'}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        ${production.status !== 'completed' ? `
            <button class="btn btn-primary" onclick="closeModal(); editProduction(${production.id})">
                <i class="fas fa-edit"></i> Edit
            </button>
        ` : ''}
    `;
    
    Utils.showModal('Production Details', content, footer);
}

/**
 * Edit Production
 */
async function editProduction(id) {
    const production = await DB.get(DB.STORES.PRODUCTION, id);
    if (!production) {
        Utils.showToast('error', 'Error', 'Production not found');
        return;
    }
    
    const selectedTaskIds = production.tasks.map(t => t.id);
    
    const content = `
        <form id="productionForm" onsubmit="saveProduction(event)">
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Production Date</label>
                    <input type="date" class="form-control" id="productionDateInput" 
                           value="${production.date}" required>
                </div>
                <div class="form-group">
                    <label class="required">Product</label>
                    <select class="form-control" id="productionProductInput" required>
                        <option value="">Select Product</option>
                        ${PRODUCTS.map(p => `<option value="${p.id}" ${p.id === production.productId ? 'selected' : ''}>${Utils.escapeHtml(p.name)}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Start Time</label>
                    <input type="time" class="form-control" id="productionStartTimeInput" 
                           value="${production.startTime}" required>
                </div>
                <div class="form-group">
                    <label class="required">End Time</label>
                    <input type="time" class="form-control" id="productionEndTimeInput" 
                           value="${production.endTime}" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="required">Target Quantity</label>
                    <input type="number" class="form-control" id="productionQuantityInput" 
                           value="${production.targetQuantity}" min="1" required>
                </div>
                <div class="form-group">
                    <label>Batch Number</label>
                    <input type="text" class="form-control" id="productionBatchInput" 
                           value="${Utils.escapeHtml(production.batchNumber || '')}">
                </div>
            </div>
            
            <div class="form-group">
                <label>Required Staff</label>
                <div id="staffSelectionContainer" style="max-height: 150px; overflow-y: auto; border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${Staff.getActive().map(staff => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="staff_${staff.id}" name="selectedStaff" value="${staff.id}"
                                   ${production.assignedStaff.includes(staff.id) ? 'checked' : ''}>
                            <label for="staff_${staff.id}">${Utils.escapeHtml(staff.name)} (${Utils.escapeHtml(staff.role)})</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Production Tasks</label>
                <div id="tasksContainer" style="border: 1px solid var(--gray-300); border-radius: 8px; padding: 12px;">
                    ${PRODUCTION_STAGES.map(stage => `
                        <div class="checkbox-group" style="margin-bottom: 8px;">
                            <input type="checkbox" id="task_${stage.id}" name="selectedTasks" value="${stage.id}"
                                   ${selectedTaskIds.includes(stage.id) ? 'checked' : ''}>
                            <label for="task_${stage.id}">${Utils.escapeHtml(stage.name)}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-control" id="productionNotesInput">${Utils.escapeHtml(production.notes || '')}</textarea>
            </div>
            
            <input type="hidden" id="productionEditId" value="${production.id}">
        </form>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" onclick="deleteProduction(${production.id})" style="margin-right: auto;">
            <i class="fas fa-trash"></i> Delete
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('productionForm').requestSubmit()">
            <i class="fas fa-save"></i> Update
        </button>
    `;
    
    Utils.showModal('Edit Production Schedule', content, footer);
}

/**
 * Delete Production
 */
async function deleteProduction(id) {
    try {
        await DB.delete(DB.STORES.PRODUCTION, id);
        closeModal();
        Utils.showToast('success', 'Deleted', 'Production schedule deleted');
        await loadProduction();
    } catch (error) {
        console.error('Error deleting production:', error);
        Utils.showToast('error', 'Error', 'Failed to delete production');
    }
}

/**
 * Get upcoming production
 */
function getUpcomingProduction() {
    const today = Utils.formatDate(new Date());
    return productionCache
        .filter(p => p.date >= today && p.status !== 'completed')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
}

/**
 * Export all scheduled production to PDF
 */
function exportProductionToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const upcoming = productionCache
        .filter(p => p.status !== 'completed')
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    if (upcoming.length === 0) {
        Utils.showToast('warning', 'No Data', 'No scheduled production to export');
        return;
    }
    
    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM Production Schedule', 105, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated: ${new Date().toLocaleString()}`, 105, 28, { align: 'center' });
    
    let yPos = 40;
    
    upcoming.forEach((production, index) => {
        const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
        const completedTasks = production.tasks ? production.tasks.filter(t => t.completed).length : 0;
        const totalTasks = production.tasks ? production.tasks.length : 0;
        
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        // Production card header
        doc.setFillColor(26, 54, 93);
        doc.rect(15, yPos, 180, 10, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${product.name}`, 20, yPos + 7);
        doc.text(production.status.toUpperCase(), 180, yPos + 7, { align: 'right' });
        
        yPos += 15;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        // Production details
        doc.text(`Date: ${Utils.formatDateDisplay(production.date)}`, 20, yPos);
        doc.text(`Time: ${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}`, 100, yPos);
        yPos += 6;
        doc.text(`Target: ${production.targetQuantity} ${product.unit}`, 20, yPos);
        doc.text(`Batch: ${production.batchNumber || 'N/A'}`, 100, yPos);
        yPos += 6;
        doc.text(`Progress: ${completedTasks}/${totalTasks} tasks completed`, 20, yPos);
        
        yPos += 10;
        
        // Tasks table
        if (production.tasks && production.tasks.length > 0) {
            doc.setFont('helvetica', 'bold');
            doc.text('Tasks:', 20, yPos);
            yPos += 5;
            
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            
            production.tasks.forEach(task => {
                const status = task.completed ? '[✓]' : '[ ]';
                const staffName = task.staffId ? Staff.getName(task.staffId) : 'Unassigned';
                doc.text(`${status} ${task.name} - ${staffName}`, 25, yPos);
                yPos += 5;
            });
        }
        
        // Notes
        if (production.notes) {
            yPos += 3;
            doc.setFont('helvetica', 'italic');
            doc.text(`Notes: ${production.notes}`, 20, yPos);
        }
        
        yPos += 15;
    });
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
        doc.text('ASTRO-BSM Factory Operations', 15, 290);
    }
    
    // Save and share
    const fileName = `Production_Schedule_${Utils.formatDate(new Date())}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Generated', 'Production schedule exported. Ready to share on WhatsApp!');
    
    // Show share instructions
    setTimeout(() => {
        showShareInstructions(fileName);
    }, 500);
}

/**
 * Export single production schedule to PDF
 */
function exportSingleProductionPDF(productionId) {
    const production = productionCache.find(p => p.id === productionId);
    if (!production) {
        Utils.showToast('error', 'Error', 'Production not found');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const product = PRODUCTS.find(p => p.id === production.productId) || { name: production.productId, unit: 'units' };
    const completedTasks = production.tasks ? production.tasks.filter(t => t.completed).length : 0;
    const totalTasks = production.tasks ? production.tasks.length : 0;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Header with logo area
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM', 105, 18, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Production Schedule', 105, 28, { align: 'center' });
    
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 105, 36, { align: 'center' });
    
    // Product name banner
    let yPos = 50;
    doc.setFillColor(46, 125, 50);
    doc.rect(15, yPos, 180, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(product.name, 105, yPos + 8, { align: 'center' });
    
    // Status badge
    yPos += 20;
    doc.setTextColor(0, 0, 0);
    const statusColor = production.status === 'completed' ? [46, 125, 50] : 
                        production.status === 'in_progress' ? [255, 152, 0] : [33, 150, 243];
    doc.setFillColor(...statusColor);
    doc.roundedRect(85, yPos, 40, 8, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(production.status.toUpperCase().replace('_', ' '), 105, yPos + 6, { align: 'center' });
    
    // Production details box
    yPos += 18;
    doc.setTextColor(0, 0, 0);
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(248, 249, 250);
    doc.roundedRect(15, yPos, 180, 50, 3, 3, 'FD');
    
    yPos += 12;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Production Details', 20, yPos);
    
    yPos += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    
    doc.text(`📅 Date:`, 20, yPos);
    doc.text(Utils.formatDateDisplay(production.date), 55, yPos);
    doc.text(`⏰ Time:`, 110, yPos);
    doc.text(`${Utils.formatTime(production.startTime)} - ${Utils.formatTime(production.endTime)}`, 140, yPos);
    
    yPos += 8;
    doc.text(`📦 Target:`, 20, yPos);
    doc.text(`${production.targetQuantity} ${product.unit}`, 55, yPos);
    doc.text(`🏷️ Batch:`, 110, yPos);
    doc.text(production.batchNumber || 'N/A', 140, yPos);
    
    yPos += 8;
    doc.text(`📊 Progress:`, 20, yPos);
    doc.text(`${completedTasks}/${totalTasks} tasks (${progress}%)`, 55, yPos);
    
    // Progress bar
    yPos += 8;
    doc.setFillColor(224, 224, 224);
    doc.roundedRect(20, yPos, 170, 5, 2, 2, 'F');
    doc.setFillColor(progress === 100 ? 46 : 33, progress === 100 ? 125 : 150, progress === 100 ? 50 : 243);
    doc.roundedRect(20, yPos, 170 * (progress / 100), 5, 2, 2, 'F');
    
    // Tasks section
    yPos += 18;
    doc.setFillColor(26, 54, 93);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Production Tasks', 20, yPos + 7);
    
    yPos += 15;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    
    // Task headers
    doc.setFont('helvetica', 'bold');
    doc.text('Status', 20, yPos);
    doc.text('Task', 45, yPos);
    doc.text('Assigned To', 120, yPos);
    
    yPos += 3;
    doc.setDrawColor(200, 200, 200);
    doc.line(15, yPos, 195, yPos);
    
    yPos += 7;
    doc.setFont('helvetica', 'normal');
    
    if (production.tasks && production.tasks.length > 0) {
        production.tasks.forEach((task, idx) => {
            // Check if we need a new page
            if (yPos > 260) {
                doc.addPage();
                yPos = 20;
            }
            
            const statusIcon = task.completed ? '✅' : '⬜';
            const qcIcon = task.qcPassed === true ? '✓QC' : task.qcPassed === false ? '✗QC' : '';
            const staffName = task.staffId ? Staff.getName(task.staffId) : 'Unassigned';
            
            doc.setFont('helvetica', 'bold');
            doc.text(`${idx + 1}.`, 18, yPos);
            doc.text(statusIcon, 25, yPos);
            doc.text(task.name, 35, yPos);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            doc.text(`| ${staffName} ${qcIcon}`, 130, yPos);
            doc.setFontSize(10);
            
            yPos += 6;
            
            // Show description if this is an SOP task
            if (task.description) {
                doc.setFontSize(8);
                doc.setTextColor(100, 100, 100);
                const descLines = doc.splitTextToSize(task.description, 160);
                doc.text(descLines, 35, yPos);
                yPos += (descLines.length * 4) + 2;
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
            }
            
            yPos += 3;
        });
    } else {
        doc.text('No tasks defined', 20, yPos);
        yPos += 8;
    }
    
    // Notes section
    if (production.notes) {
        yPos += 5;
        doc.setFillColor(255, 243, 205);
        doc.roundedRect(15, yPos, 180, 20, 3, 3, 'F');
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('📝 Notes:', 20, yPos + 8);
        doc.setFont('helvetica', 'normal');
        doc.text(production.notes, 45, yPos + 8);
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text('ASTRO-BSM Factory Operations | Confidential Production Document', 105, 285, { align: 'center' });
    doc.text(`Created: ${Utils.formatDateTime(production.createdAt)}`, 105, 290, { align: 'center' });
    
    // Save PDF
    const fileName = `Production_${product.name.replace(/\s+/g, '_')}_${Utils.formatDate(production.date)}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Ready', 'Production schedule saved. Share it on WhatsApp!');
    
    setTimeout(() => {
        showShareInstructions(fileName);
    }, 500);
}

/**
 * Show share instructions modal
 */
function showShareInstructions(fileName) {
    const content = `
        <div style="text-align: center; padding: 20px;">
            <i class="fab fa-whatsapp" style="font-size: 64px; color: #25D366; margin-bottom: 20px;"></i>
            <h3 style="color: var(--gray-700); margin-bottom: 16px;">PDF Downloaded Successfully!</h3>
            <p style="color: var(--gray-600); margin-bottom: 20px;">
                Your production schedule has been saved as:<br>
                <strong style="color: var(--primary-600);">${fileName}</strong>
            </p>
            <div style="background: var(--gray-100); border-radius: 8px; padding: 16px; text-align: left;">
                <h4 style="color: var(--gray-700); margin-bottom: 12px;"><i class="fas fa-share-alt"></i> To share on WhatsApp:</h4>
                <ol style="color: var(--gray-600); padding-left: 20px; line-height: 1.8;">
                    <li>Open WhatsApp on your phone</li>
                    <li>Go to the chat or group you want to share with</li>
                    <li>Tap the attachment icon (📎)</li>
                    <li>Select "Document" and choose the downloaded PDF</li>
                    <li>Send the file!</li>
                </ol>
            </div>
            <div style="margin-top: 20px; padding: 12px; background: #E8F5E9; border-radius: 8px;">
                <p style="color: #2E7D32; margin: 0;">
                    <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> On mobile, you can also share directly from your downloads folder to WhatsApp.
                </p>
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-primary" onclick="closeModal()">
            <i class="fas fa-check"></i> Got it!
        </button>
    `;
    
    Utils.showModal('Share on WhatsApp', content, footer);
}

// Export production module
window.Production = {
    load: loadProduction,
    render: renderProductionList,
    getUpcoming: getUpcomingProduction,
    STAGES: PRODUCTION_STAGES,
    PRODUCTS,
    cache: () => productionCache
};
