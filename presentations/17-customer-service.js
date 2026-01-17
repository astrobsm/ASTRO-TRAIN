// ===== PRESENTATION 17: CUSTOMER SERVICE EXCELLENCE =====
// For: Sales Staff | Category: Sales Training

const customerServiceSlides = [
    {
        id: 1,
        type: 'title',
        title: 'CUSTOMER SERVICE EXCELLENCE',
        subtitle: 'Delighting Every Customer',
        tagline: 'Service That Sets Us Apart',
        content: [
            { icon: 'fa-heart', text: 'Understand customer expectations' },
            { icon: 'fa-comments', text: 'Master communication skills' },
            { icon: 'fa-wrench', text: 'Handle complaints effectively' },
            { icon: 'fa-star', text: 'Create memorable experiences' }
        ],
        image: null
    },
    {
        id: 2,
        type: 'standard',
        title: 'Why Customer Service Matters',
        subtitle: 'The Business Case for Service Excellence',
        columns: [
            {
                heading: 'Business Impact',
                icon: 'fa-chart-line',
                items: [
                    'Retains existing customers',
                    'Generates referrals',
                    'Builds brand reputation',
                    'Differentiates from competitors',
                    'Increases customer lifetime value'
                ]
            },
            {
                heading: 'Service Statistics',
                icon: 'fa-percent',
                items: [
                    'Acquiring new customer costs 5x more',
                    'Happy customers tell 4-6 others',
                    'Unhappy customers tell 9-15 others',
                    '70% of buying is based on how treated',
                    'Service drives repeat business'
                ]
            }
        ],
        goldenRule: 'Every interaction shapes perception',
        image: null
    },
    {
        id: 3,
        type: 'standard',
        title: 'Customer Expectations',
        subtitle: 'What Customers Want',
        columns: [
            {
                heading: 'Basic Expectations',
                icon: 'fa-list-check',
                items: [
                    'Quality products',
                    'Fair pricing',
                    'Reliable delivery',
                    'Accurate information',
                    'Professional behavior'
                ]
            },
            {
                heading: 'Delight Factors',
                icon: 'fa-star',
                items: [
                    'Personalized attention',
                    'Proactive communication',
                    'Going the extra mile',
                    'Quick problem resolution',
                    'Feeling valued'
                ]
            }
        ],
        image: null
    },
    {
        id: 4,
        type: 'standard',
        title: 'Customer Touchpoints',
        subtitle: 'Every Interaction Counts',
        columns: [
            {
                heading: 'Direct Touchpoints',
                icon: 'fa-handshake',
                items: [
                    'Sales calls and visits',
                    'Phone conversations',
                    'Email communications',
                    'Product deliveries',
                    'Meetings and presentations'
                ]
            },
            {
                heading: 'Indirect Touchpoints',
                icon: 'fa-globe',
                items: [
                    'Product packaging',
                    'Marketing materials',
                    'Company website',
                    'Word of mouth',
                    'Third-party interactions'
                ]
            }
        ],
        goldenRule: 'Own every touchpoint you control',
        image: null
    },
    {
        id: 5,
        type: 'standard',
        title: 'Communication Skills',
        subtitle: 'The Foundation of Great Service',
        columns: [
            {
                heading: 'Verbal Communication',
                icon: 'fa-comments',
                items: [
                    'Clear and professional',
                    'Positive language',
                    'Appropriate tone',
                    'Active listening',
                    'Empathy in voice'
                ]
            },
            {
                heading: 'Non-Verbal Communication',
                icon: 'fa-user',
                items: [
                    'Eye contact',
                    'Open body language',
                    'Professional appearance',
                    'Confident posture',
                    'Genuine smile'
                ]
            }
        ],
        image: null
    },
    {
        id: 6,
        type: 'standard',
        title: 'Active Listening',
        subtitle: 'Hear What Customers Really Mean',
        columns: [
            {
                heading: 'Listening Techniques',
                icon: 'fa-ear-listen',
                items: [
                    'Give full attention',
                    'Don\'t interrupt',
                    'Acknowledge understanding',
                    'Ask clarifying questions',
                    'Summarize to confirm'
                ]
            },
            {
                heading: 'Barriers to Listening',
                icon: 'fa-ban',
                items: [
                    'Distractions',
                    'Prejudging',
                    'Thinking of response',
                    'Assuming you know',
                    'Impatience'
                ]
            }
        ],
        goldenRule: 'Listen to understand, not to respond',
        image: null
    },
    {
        id: 7,
        type: 'standard',
        title: 'Positive Language',
        subtitle: 'Words That Build Relationships',
        columns: [
            {
                heading: 'Instead of Saying...',
                icon: 'fa-times',
                items: [
                    '"I don\'t know"',
                    '"That\'s not my job"',
                    '"You\'ll have to..."',
                    '"We can\'t do that"',
                    '"It\'s company policy"'
                ]
            },
            {
                heading: 'Say...',
                icon: 'fa-check',
                items: [
                    '"Let me find out for you"',
                    '"Let me connect you with..."',
                    '"Here\'s how we can help..."',
                    '"What we can do is..."',
                    '"The reason is..."'
                ]
            }
        ],
        image: null
    },
    {
        id: 8,
        type: 'standard',
        title: 'Handling Complaints',
        subtitle: 'Turning Problems into Opportunities',
        columns: [
            {
                heading: 'LEARN Model',
                icon: 'fa-book',
                items: [
                    'L - Listen carefully',
                    'E - Empathize sincerely',
                    'A - Apologize appropriately',
                    'R - Respond to resolve',
                    'N - Notify and follow up'
                ]
            },
            {
                heading: 'Key Principles',
                icon: 'fa-star',
                items: [
                    'Stay calm and professional',
                    'Don\'t take it personally',
                    'Focus on solution',
                    'Take ownership',
                    'Follow through'
                ]
            }
        ],
        image: null
    },
    {
        id: 9,
        type: 'standard',
        title: 'Service Recovery',
        subtitle: 'Making Things Right',
        columns: [
            {
                heading: 'Recovery Steps',
                icon: 'fa-arrows-rotate',
                items: [
                    'Acknowledge the problem',
                    'Apologize sincerely',
                    'Fix the issue quickly',
                    'Compensate if appropriate',
                    'Follow up to ensure satisfaction'
                ]
            },
            {
                heading: 'Recovery Paradox',
                icon: 'fa-lightbulb',
                items: [
                    'Customers with resolved complaints...',
                    'Often more loyal than if no problem',
                    'Tell others about great recovery',
                    'Become advocates',
                    'Problems are opportunities'
                ]
            }
        ],
        goldenRule: 'Fix the problem, then fix the relationship',
        image: null
    },
    {
        id: 10,
        type: 'standard',
        title: 'Managing Difficult Customers',
        subtitle: 'Staying Professional Under Pressure',
        columns: [
            {
                heading: 'Customer Types',
                icon: 'fa-users',
                items: [
                    'Angry customers',
                    'Demanding customers',
                    'Confused customers',
                    'Talkative customers',
                    'Indecisive customers'
                ]
            },
            {
                heading: 'Management Strategies',
                icon: 'fa-shield-halved',
                items: [
                    'Stay calm and patient',
                    'Show empathy and respect',
                    'Control your emotions',
                    'Find common ground',
                    'Know when to escalate'
                ]
            }
        ],
        image: null
    },
    {
        id: 11,
        type: 'standard',
        title: 'Phone Service Excellence',
        subtitle: 'Professional Phone Skills',
        columns: [
            {
                heading: 'Incoming Calls',
                icon: 'fa-phone',
                items: [
                    'Answer within 3 rings',
                    'Professional greeting',
                    'Smile (it shows in voice)',
                    'Take accurate messages',
                    'Return calls promptly'
                ]
            },
            {
                heading: 'Outgoing Calls',
                icon: 'fa-phone-flip',
                items: [
                    'Prepare before calling',
                    'Identify yourself clearly',
                    'State purpose of call',
                    'Be respectful of time',
                    'Confirm next steps'
                ]
            }
        ],
        image: null
    },
    {
        id: 12,
        type: 'standard',
        title: 'Email Service Excellence',
        subtitle: 'Professional Written Communication',
        columns: [
            {
                heading: 'Email Best Practices',
                icon: 'fa-envelope',
                items: [
                    'Clear subject line',
                    'Professional greeting',
                    'Concise message',
                    'Proper grammar/spelling',
                    'Appropriate closing'
                ]
            },
            {
                heading: 'Response Standards',
                icon: 'fa-clock',
                items: [
                    'Respond within 24 hours',
                    'Acknowledge if can\'t answer fully',
                    'Provide timeline if needed',
                    'Follow up as promised',
                    'Maintain professional tone'
                ]
            }
        ],
        image: null
    },
    {
        id: 13,
        type: 'standard',
        title: 'Building Customer Loyalty',
        subtitle: 'Creating Lasting Relationships',
        columns: [
            {
                heading: 'Loyalty Drivers',
                icon: 'fa-heart',
                items: [
                    'Consistent quality',
                    'Reliable service',
                    'Personal connection',
                    'Proactive support',
                    'Appreciation shown'
                ]
            },
            {
                heading: 'Loyalty Actions',
                icon: 'fa-star',
                items: [
                    'Remember preferences',
                    'Anticipate needs',
                    'Provide updates proactively',
                    'Recognize important dates',
                    'Thank customers sincerely'
                ]
            }
        ],
        goldenRule: 'Treat every customer like your only customer',
        image: null
    },
    {
        id: 14,
        type: 'conclusion',
        title: 'Customer Service Excellence',
        subtitle: 'Key Takeaways',
        conclusionItems: [
            { icon: 'fa-ear-listen', title: 'Listen Actively', text: 'Understand before responding' },
            { icon: 'fa-comments', title: 'Communicate Positively', text: 'Words shape perceptions' },
            { icon: 'fa-arrows-rotate', title: 'Recover Gracefully', text: 'Turn problems into loyalty' },
            { icon: 'fa-heart', title: 'Build Relationships', text: 'Every interaction matters' }
        ],
        image: null
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { customerServiceSlides };
}
