// ===== PRESENTATION 26: LEADERSHIP & TEAM MANAGEMENT =====
// For: Management & Supervisory Staff | Category: Management Training

const leadershipSlides = [
    {
        id: 1,
        type: 'title',
        title: 'LEADERSHIP & TEAM MANAGEMENT',
        subtitle: 'Building High-Performance Teams in Pharma',
        tagline: 'Lead by Example, Inspire Excellence',
        content: [
            { icon: 'fa-users', text: 'Build effective teams' },
            { icon: 'fa-star', text: 'Inspire performance' },
            { icon: 'fa-comments', text: 'Communicate effectively' },
            { icon: 'fa-bullseye', text: 'Drive results' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Leadership vs. Management',
        subtitle: 'Understanding the Difference',
        columns: [
            {
                heading: 'Management',
                icon: 'fa-clipboard-list',
                items: [
                    'Planning and organizing',
                    'Controlling resources',
                    'Problem solving',
                    'Maintaining systems',
                    'Ensuring compliance'
                ]
            },
            {
                heading: 'Leadership',
                icon: 'fa-star',
                items: [
                    'Setting vision and direction',
                    'Inspiring and motivating',
                    'Developing people',
                    'Driving change',
                    'Building culture'
                ]
            }
        ],
        goldenRule: 'Manage things, lead people',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Leadership in Pharmaceutical Manufacturing',
        subtitle: 'Industry-Specific Challenges',
        columns: [
            {
                heading: 'Unique Considerations',
                icon: 'fa-industry',
                items: [
                    'Strict regulatory environment',
                    'Quality is non-negotiable',
                    'Safety-critical operations',
                    'Documentation culture',
                    'Continuous compliance'
                ]
            },
            {
                heading: 'Leadership Implications',
                icon: 'fa-user-tie',
                items: [
                    'Lead with integrity',
                    'Champion quality always',
                    'Model compliance behavior',
                    'Balance speed and quality',
                    'Develop technical skills'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Building Effective Teams',
        subtitle: 'Team Development Stages',
        columns: [
            {
                heading: 'Tuckman\'s Model',
                icon: 'fa-stairs',
                items: [
                    'FORMING: Getting to know each other',
                    'STORMING: Conflict and competition',
                    'NORMING: Establishing norms',
                    'PERFORMING: High productivity',
                    'ADJOURNING: Task completion'
                ]
            },
            {
                heading: 'Leader Role at Each Stage',
                icon: 'fa-user',
                items: [
                    'Forming: Direct and guide',
                    'Storming: Coach and mediate',
                    'Norming: Support and facilitate',
                    'Performing: Delegate and empower',
                    'Adjourning: Celebrate and transition'
                ]
            }
        ],
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Communication Skills',
        subtitle: 'The Foundation of Leadership',
        columns: [
            {
                heading: 'Key Communication Skills',
                icon: 'fa-comments',
                items: [
                    'Active listening',
                    'Clear articulation',
                    'Non-verbal awareness',
                    'Constructive feedback',
                    'Open dialogue'
                ]
            },
            {
                heading: 'Communication Forums',
                icon: 'fa-people-group',
                items: [
                    'Team meetings',
                    'One-on-one discussions',
                    'Toolbox talks',
                    'Written communications',
                    'Informal conversations'
                ]
            }
        ],
        goldenRule: 'Communicate often, listen more',
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Motivation and Engagement',
        subtitle: 'Inspiring Your Team',
        columns: [
            {
                heading: 'Motivation Factors',
                icon: 'fa-heart',
                items: [
                    'Purpose and meaning',
                    'Recognition and appreciation',
                    'Growth opportunities',
                    'Autonomy and trust',
                    'Fair treatment'
                ]
            },
            {
                heading: 'Engagement Strategies',
                icon: 'fa-lightbulb',
                items: [
                    'Set clear expectations',
                    'Provide regular feedback',
                    'Recognize achievements',
                    'Involve in decisions',
                    'Support development'
                ]
            }
        ],
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Delegation and Empowerment',
        subtitle: 'Developing Team Capability',
        columns: [
            {
                heading: 'Effective Delegation',
                icon: 'fa-share',
                items: [
                    'Match task to capability',
                    'Clear expectations',
                    'Provide resources',
                    'Give authority with responsibility',
                    'Follow up appropriately'
                ]
            },
            {
                heading: 'Empowerment Practices',
                icon: 'fa-rocket',
                items: [
                    'Trust your team',
                    'Allow decision-making',
                    'Accept calculated risks',
                    'Support when needed',
                    'Learn from mistakes'
                ]
            }
        ],
        goldenRule: 'Delegate outcomes, not tasks',
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Performance Management',
        subtitle: 'Driving Results',
        columns: [
            {
                heading: 'Performance Cycle',
                icon: 'fa-rotate',
                items: [
                    'Set objectives',
                    'Provide ongoing feedback',
                    'Conduct reviews',
                    'Develop improvement plans',
                    'Recognize achievements'
                ]
            },
            {
                heading: 'Effective Feedback',
                icon: 'fa-comment',
                items: [
                    'Specific and timely',
                    'Behavior-focused',
                    'Balance positive and constructive',
                    'Future-oriented',
                    'Actionable'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Handling Difficult Situations',
        subtitle: 'Managing Conflict and Poor Performance',
        columns: [
            {
                heading: 'Conflict Resolution',
                icon: 'fa-handshake',
                items: [
                    'Address early',
                    'Listen to all sides',
                    'Focus on issues not personalities',
                    'Find common ground',
                    'Agree on solutions'
                ]
            },
            {
                heading: 'Performance Issues',
                icon: 'fa-chart-line',
                items: [
                    'Identify root cause',
                    'Discuss privately',
                    'Set clear expectations',
                    'Provide support and training',
                    'Document and follow up'
                ]
            }
        ],
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Developing Your Team',
        subtitle: 'Growing Capability',
        columns: [
            {
                heading: 'Development Methods',
                icon: 'fa-graduation-cap',
                items: [
                    'On-the-job training',
                    'Coaching and mentoring',
                    'Formal training courses',
                    'Stretch assignments',
                    'Cross-functional exposure'
                ]
            },
            {
                heading: 'Development Planning',
                icon: 'fa-clipboard-list',
                items: [
                    'Assess current skills',
                    'Identify gaps',
                    'Create development plans',
                    'Provide opportunities',
                    'Review progress'
                ]
            }
        ],
        goldenRule: 'Grow your people, grow your results',
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Leading Change',
        subtitle: 'Navigating Transitions',
        columns: [
            {
                heading: 'Change Leadership',
                icon: 'fa-arrows-rotate',
                items: [
                    'Create urgency',
                    'Communicate the vision',
                    'Involve stakeholders',
                    'Address resistance',
                    'Sustain momentum'
                ]
            },
            {
                heading: 'Supporting Your Team',
                icon: 'fa-hand-holding-heart',
                items: [
                    'Acknowledge concerns',
                    'Provide information',
                    'Allow time to adjust',
                    'Celebrate small wins',
                    'Model positive attitude'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Quality and Compliance Leadership',
        subtitle: 'Leading a Culture of Quality',
        columns: [
            {
                heading: 'Quality Leadership Behaviors',
                icon: 'fa-award',
                items: [
                    'Never compromise on quality',
                    'Follow procedures yourself',
                    'Encourage reporting issues',
                    'Investigate thoroughly',
                    'Recognize quality behaviors'
                ]
            },
            {
                heading: 'Creating Quality Culture',
                icon: 'fa-building',
                items: [
                    'Make quality everyone\'s job',
                    'Provide resources',
                    'Remove barriers',
                    'Celebrate success',
                    'Learn from failures'
                ]
            }
        ],
        goldenRule: 'Quality starts at the top',
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Self-Leadership',
        subtitle: 'Leading Yourself First',
        columns: [
            {
                heading: 'Personal Effectiveness',
                icon: 'fa-user',
                items: [
                    'Time management',
                    'Priority setting',
                    'Continuous learning',
                    'Stress management',
                    'Work-life balance'
                ]
            },
            {
                heading: 'Leadership Mindset',
                icon: 'fa-brain',
                items: [
                    'Self-awareness',
                    'Humility and learning',
                    'Resilience',
                    'Positive attitude',
                    'Integrity always'
                ]
            }
        ],
        goldenRule: 'You can\'t lead others until you can lead yourself',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Leadership Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-star', title: 'Lead by Example', text: 'Model the behavior you expect' },
            { icon: 'fa-comments', title: 'Communicate Well', text: 'Listen more than you speak' },
            { icon: 'fa-users', title: 'Develop People', text: 'Grow your team\'s capability' },
            { icon: 'fa-award', title: 'Champion Quality', text: 'Never compromise on standards' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { leadershipSlides };
}
