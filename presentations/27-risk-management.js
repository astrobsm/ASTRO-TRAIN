// ===== PRESENTATION 27: RISK MANAGEMENT & QUALITY DECISIONS =====
// For: Management & Supervisory Staff | Category: Management Training

const riskManagementSlides = [
    {
        id: 1,
        type: 'title',
        title: 'RISK MANAGEMENT & QUALITY DECISIONS',
        subtitle: 'Making Informed Decisions to Protect Patients',
        tagline: 'Know the Risk, Make the Right Call',
        content: [
            { icon: 'fa-shield-halved', text: 'Identify risks proactively' },
            { icon: 'fa-magnifying-glass-chart', text: 'Analyze and prioritize' },
            { icon: 'fa-scale-balanced', text: 'Make sound decisions' },
            { icon: 'fa-rotate', text: 'Monitor and review' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'What is Quality Risk Management?',
        subtitle: 'ICH Q9 Framework',
        columns: [
            {
                heading: 'Definition',
                icon: 'fa-book',
                items: [
                    'Systematic process',
                    'Assessment of risks to quality',
                    'Control of risks',
                    'Communication of risk information',
                    'Review of risk decisions'
                ]
            },
            {
                heading: 'Key Principles',
                icon: 'fa-lightbulb',
                items: [
                    'Patient safety is paramount',
                    'Science-based decisions',
                    'Proportionate to risk level',
                    'Documented and traceable',
                    'Continuous process'
                ]
            }
        ],
        goldenRule: 'Every quality decision impacts patients',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Risk Management Process',
        subtitle: 'The QRM Cycle',
        columns: [
            {
                heading: 'Process Steps',
                icon: 'fa-diagram-project',
                items: [
                    '1. Risk Assessment',
                    '   - Identification',
                    '   - Analysis',
                    '   - Evaluation',
                    '2. Risk Control',
                    '3. Risk Review'
                ]
            },
            {
                heading: 'Supporting Activities',
                icon: 'fa-handshake',
                items: [
                    'Risk Communication',
                    'Cross-functional input',
                    'Documentation',
                    'Decision escalation',
                    'Periodic review'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Risk Identification',
        subtitle: 'What Could Go Wrong?',
        columns: [
            {
                heading: 'Identification Methods',
                icon: 'fa-magnifying-glass',
                items: [
                    'Process flow analysis',
                    'Historical data review',
                    'Brainstorming sessions',
                    'Expert input',
                    'Regulatory guidance'
                ]
            },
            {
                heading: 'Common Risk Areas',
                icon: 'fa-triangle-exclamation',
                items: [
                    'Raw material quality',
                    'Process variability',
                    'Equipment failure',
                    'Human error',
                    'Environmental factors'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Risk Analysis',
        subtitle: 'Understanding the Risk',
        columns: [
            {
                heading: 'Analysis Components',
                icon: 'fa-chart-bar',
                items: [
                    'SEVERITY: How bad if it happens?',
                    'PROBABILITY: How likely to happen?',
                    'DETECTABILITY: Can we catch it?',
                    'Combine to assess overall risk',
                    'Prioritize based on risk level'
                ]
            },
            {
                heading: 'Analysis Tools',
                icon: 'fa-tools',
                items: [
                    'FMEA (Failure Mode Effects Analysis)',
                    'Fault Tree Analysis',
                    'Risk Ranking',
                    'Risk matrices',
                    'Statistical analysis'
                ]
            }
        ],
        goldenRule: 'High severity = high attention, regardless of probability',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'FMEA: Key QRM Tool',
        subtitle: 'Failure Mode Effects Analysis',
        columns: [
            {
                heading: 'FMEA Elements',
                icon: 'fa-list-check',
                items: [
                    'Process step/component',
                    'Potential failure mode',
                    'Effect of failure',
                    'Cause of failure',
                    'Current controls'
                ]
            },
            {
                heading: 'RPN Calculation',
                icon: 'fa-calculator',
                items: [
                    'Severity (S): 1-10 scale',
                    'Occurrence (O): 1-10 scale',
                    'Detection (D): 1-10 scale',
                    'RPN = S × O × D',
                    'Higher RPN = Higher priority'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Risk Evaluation',
        subtitle: 'Is the Risk Acceptable?',
        columns: [
            {
                heading: 'Risk Classification',
                icon: 'fa-gauge-high',
                items: [
                    'HIGH: Unacceptable - must reduce',
                    'MEDIUM: May accept with controls',
                    'LOW: Generally acceptable',
                    'Consider benefit vs. risk',
                    'Document rationale'
                ]
            },
            {
                heading: 'Evaluation Questions',
                icon: 'fa-question-circle',
                items: [
                    'What is the patient impact?',
                    'Is product quality at risk?',
                    'Are regulatory requirements met?',
                    'What is the business impact?',
                    'Can we detect the problem?'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Risk Control',
        subtitle: 'Reducing Risks',
        columns: [
            {
                heading: 'Control Options',
                icon: 'fa-shield',
                items: [
                    'ELIMINATE: Remove the hazard',
                    'REDUCE: Lower probability',
                    'MITIGATE: Reduce severity',
                    'DETECT: Improve detection',
                    'ACCEPT: Document and monitor'
                ]
            },
            {
                heading: 'Control Selection',
                icon: 'fa-check-double',
                items: [
                    'Effectiveness of control',
                    'Feasibility of implementation',
                    'Cost-benefit analysis',
                    'New risks created?',
                    'Residual risk acceptable?'
                ]
            }
        ],
        goldenRule: 'Prevention is better than detection',
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Making Quality Decisions',
        subtitle: 'Decision Framework',
        columns: [
            {
                heading: 'Decision Process',
                icon: 'fa-scale-balanced',
                items: [
                    'Gather all relevant information',
                    'Consult appropriate experts',
                    'Consider alternatives',
                    'Assess risks of each option',
                    'Document decision rationale'
                ]
            },
            {
                heading: 'Decision Criteria',
                icon: 'fa-clipboard-list',
                items: [
                    'Patient safety impact',
                    'Product quality impact',
                    'Regulatory compliance',
                    'Scientific evidence',
                    'Business considerations'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Deviation and OOS Decisions',
        subtitle: 'Critical Quality Decisions',
        columns: [
            {
                heading: 'Deviation Assessment',
                icon: 'fa-exclamation-circle',
                items: [
                    'What happened?',
                    'What is the impact?',
                    'What is the root cause?',
                    'Can product be salvaged?',
                    'What corrections needed?'
                ]
            },
            {
                heading: 'Decision Options',
                icon: 'fa-route',
                items: [
                    'Release (if no impact)',
                    'Reprocess (if allowed)',
                    'Rework (if appropriate)',
                    'Reject (if necessary)',
                    'Always document reasoning'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'CAPA Decision Making',
        subtitle: 'Effective Corrective Actions',
        columns: [
            {
                heading: 'CAPA Considerations',
                icon: 'fa-hammer',
                items: [
                    'Address root cause',
                    'Proportionate to risk',
                    'Feasible to implement',
                    'Effective and sustainable',
                    'Verifiable completion'
                ]
            },
            {
                heading: 'Effectiveness Check',
                icon: 'fa-check',
                items: [
                    'Did problem recur?',
                    'Were goals achieved?',
                    'Any unintended consequences?',
                    'Is the action sustainable?',
                    'Document effectiveness'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Risk Communication',
        subtitle: 'Sharing Risk Information',
        columns: [
            {
                heading: 'Communication Elements',
                icon: 'fa-comments',
                items: [
                    'Nature of the risk',
                    'Severity and probability',
                    'Proposed actions',
                    'Residual risk',
                    'Monitoring plan'
                ]
            },
            {
                heading: 'Stakeholders',
                icon: 'fa-users',
                items: [
                    'Quality Assurance',
                    'Production/Operations',
                    'Management',
                    'Regulatory Affairs',
                    'External parties (if required)'
                ]
            }
        ],
        goldenRule: 'The right people need the right information at the right time',
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Risk Review and Monitoring',
        subtitle: 'Continuous Improvement',
        columns: [
            {
                heading: 'Review Triggers',
                icon: 'fa-bell',
                items: [
                    'Periodic scheduled reviews',
                    'After quality events',
                    'Process or product changes',
                    'New information available',
                    'Regulatory updates'
                ]
            },
            {
                heading: 'Review Activities',
                icon: 'fa-magnifying-glass',
                items: [
                    'Assess control effectiveness',
                    'Update risk assessment',
                    'Evaluate new risks',
                    'Document review outcomes',
                    'Communicate changes'
                ]
            }
        ],
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Risk Management Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-user-shield', title: 'Patient First', text: 'Safety drives all decisions' },
            { icon: 'fa-flask', title: 'Science-Based', text: 'Data and evidence matter' },
            { icon: 'fa-file-lines', title: 'Document Well', text: 'Justify every decision' },
            { icon: 'fa-rotate', title: 'Review Regularly', text: 'Risks change over time' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { riskManagementSlides };
}
