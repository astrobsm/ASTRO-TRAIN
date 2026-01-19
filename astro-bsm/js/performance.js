/**
 * ASTRO-BSM Factory Operations
 * Staff Performance Analytics & Rewards System
 */

// Performance Points Configuration
const POINTS_CONFIG = {
    TASK_COMPLETION: 10,           // Base points for completing any task
    PRODUCTION_TASK_BONUS: 5,      // Additional points for production tasks
    COMMENT_BONUS: 5,              // Bonus for adding comments/documentation
    EARLY_COMPLETION_BONUS: 3,     // Bonus for early completion
    PERFECT_WEEK_BONUS: 50,        // Bonus for completing all assigned tasks in a week
    STREAK_BONUS: 2,               // Points per consecutive day with completions
    QC_TASK_BONUS: 3,              // Bonus for QC-related tasks
    LEADERSHIP_TASK_BONUS: 5       // Bonus for supervisory tasks
};

// Reward Tiers
const REWARD_TIERS = [
    { name: 'Bronze Star', minPoints: 100, icon: 'fas fa-star', color: '#CD7F32', description: 'Consistent contributor' },
    { name: 'Silver Star', minPoints: 250, icon: 'fas fa-star', color: '#C0C0C0', description: 'Reliable performer' },
    { name: 'Gold Star', minPoints: 500, icon: 'fas fa-star', color: '#FFD700', description: 'Outstanding achievement' },
    { name: 'Platinum Badge', minPoints: 1000, icon: 'fas fa-award', color: '#E5E4E2', description: 'Exceptional excellence' },
    { name: 'Diamond Elite', minPoints: 2000, icon: 'fas fa-gem', color: '#B9F2FF', description: 'Top tier performer' },
    { name: 'Champion', minPoints: 5000, icon: 'fas fa-crown', color: '#FFD700', description: 'Legendary contributor' }
];

// Cache for performance data
let performanceCache = [];
let currentPeriod = 'month';

/**
 * Load performance data for the selected period
 */
async function loadPerformanceData() {
    const periodSelect = document.getElementById('performancePeriod');
    currentPeriod = periodSelect ? periodSelect.value : 'month';
    
    try {
        // Get all completion logs
        const logs = await DB.getAll(DB.STORES.LOGS);
        const completionLogs = logs.filter(log => log.type === 'task_completion');
        
        // Filter by period
        const filteredLogs = filterLogsByPeriod(completionLogs, currentPeriod);
        
        // Get all roster data for assigned tasks
        const roster = await DB.getAll(DB.STORES.ROSTER);
        const filteredRoster = filterRosterByPeriod(roster, currentPeriod);
        
        // Calculate performance metrics for each staff
        const staffList = Staff.getActive();
        performanceCache = await calculatePerformanceMetrics(staffList, filteredLogs, filteredRoster);
        
        // Update UI
        updatePerformanceSummary();
        renderLeaderboard();
        renderRewardsTiers();
        populateStaffSelect();
        
    } catch (error) {
        console.error('Error loading performance data:', error);
        Utils.showToast('error', 'Error', 'Failed to load performance data');
    }
}

/**
 * Filter logs by time period
 */
function filterLogsByPeriod(logs, period) {
    const now = new Date();
    let startDate;
    
    switch (period) {
        case 'week':
            startDate = new Date(now);
            startDate.setDate(now.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(now);
            startDate.setMonth(now.getMonth() - 1);
            break;
        case 'quarter':
            startDate = new Date(now);
            startDate.setMonth(now.getMonth() - 3);
            break;
        case 'year':
            startDate = new Date(now);
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        case 'all':
        default:
            return logs;
    }
    
    return logs.filter(log => new Date(log.timestamp) >= startDate);
}

/**
 * Filter roster by time period
 */
function filterRosterByPeriod(roster, period) {
    const now = new Date();
    let startDate;
    
    switch (period) {
        case 'week':
            startDate = new Date(now);
            startDate.setDate(now.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(now);
            startDate.setMonth(now.getMonth() - 1);
            break;
        case 'quarter':
            startDate = new Date(now);
            startDate.setMonth(now.getMonth() - 3);
            break;
        case 'year':
            startDate = new Date(now);
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        case 'all':
        default:
            return roster;
    }
    
    return roster.filter(r => new Date(r.date) >= startDate);
}

/**
 * Calculate performance metrics for all staff
 */
async function calculatePerformanceMetrics(staffList, logs, roster) {
    const metrics = [];
    
    for (const staff of staffList) {
        const staffLogs = logs.filter(log => log.staffId === staff.id);
        const staffRoster = roster.filter(r => r.staffId === staff.id);
        
        // Basic counts
        const tasksAssigned = staffRoster.length;
        const tasksCompleted = staffRoster.filter(r => r.status === 'completed').length;
        const completionRate = tasksAssigned > 0 ? Math.round((tasksCompleted / tasksAssigned) * 100) : 0;
        
        // Production vs regular tasks
        const productionTasks = staffLogs.filter(log => log.taskType === 'Production Task').length;
        const regularTasks = staffLogs.filter(log => log.taskType === 'Regular Duty').length;
        
        // Tasks with comments
        const tasksWithComments = staffLogs.filter(log => log.comment && log.comment.trim().length > 0).length;
        
        // Products worked on
        const productsWorked = [...new Set(staffLogs.filter(l => l.productName).map(l => l.productName))];
        
        // Calculate points
        const points = calculatePoints(staffLogs, staffRoster);
        
        // Get reward tier
        const rewardTier = getRewardTier(points.total);
        
        // Calculate streaks
        const streakInfo = calculateStreaks(staffLogs);
        
        metrics.push({
            staffId: staff.id,
            staffName: staff.name,
            role: staff.role || 'Staff',
            tasksAssigned,
            tasksCompleted,
            completionRate,
            productionTasks,
            regularTasks,
            tasksWithComments,
            productsWorked,
            points,
            rewardTier,
            streakInfo,
            logs: staffLogs
        });
    }
    
    // Sort by total points (descending)
    metrics.sort((a, b) => b.points.total - a.points.total);
    
    // Assign ranks
    metrics.forEach((m, index) => {
        m.rank = index + 1;
    });
    
    return metrics;
}

/**
 * Calculate points for a staff member
 */
function calculatePoints(logs, roster) {
    let basePoints = 0;
    let bonusPoints = 0;
    const breakdown = [];
    
    // Base points for task completion
    const completedTasks = logs.length;
    basePoints = completedTasks * POINTS_CONFIG.TASK_COMPLETION;
    breakdown.push({ label: 'Task Completions', points: basePoints, count: completedTasks });
    
    // Production task bonus
    const productionTasks = logs.filter(l => l.taskType === 'Production Task').length;
    const productionBonus = productionTasks * POINTS_CONFIG.PRODUCTION_TASK_BONUS;
    if (productionBonus > 0) {
        bonusPoints += productionBonus;
        breakdown.push({ label: 'Production Bonus', points: productionBonus, count: productionTasks });
    }
    
    // Comment bonus
    const tasksWithComments = logs.filter(l => l.comment && l.comment.trim().length > 0).length;
    const commentBonus = tasksWithComments * POINTS_CONFIG.COMMENT_BONUS;
    if (commentBonus > 0) {
        bonusPoints += commentBonus;
        breakdown.push({ label: 'Documentation Bonus', points: commentBonus, count: tasksWithComments });
    }
    
    // Perfect week bonus - check if all assigned tasks were completed
    const completedAssignments = roster.filter(r => r.status === 'completed').length;
    const totalAssignments = roster.length;
    if (totalAssignments >= 5 && completedAssignments === totalAssignments) {
        bonusPoints += POINTS_CONFIG.PERFECT_WEEK_BONUS;
        breakdown.push({ label: 'Perfect Completion Bonus', points: POINTS_CONFIG.PERFECT_WEEK_BONUS, count: 1 });
    }
    
    return {
        base: basePoints,
        bonus: bonusPoints,
        total: basePoints + bonusPoints,
        breakdown
    };
}

/**
 * Calculate work streaks
 */
function calculateStreaks(logs) {
    if (logs.length === 0) {
        return { currentStreak: 0, longestStreak: 0 };
    }
    
    // Get unique dates with completions
    const dates = [...new Set(logs.map(l => l.date))].sort();
    
    if (dates.length === 0) {
        return { currentStreak: 0, longestStreak: 0 };
    }
    
    let currentStreak = 1;
    let longestStreak = 1;
    let tempStreak = 1;
    
    for (let i = 1; i < dates.length; i++) {
        const prevDate = new Date(dates[i - 1]);
        const currDate = new Date(dates[i]);
        const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays <= 3) { // Within working day gap (Mon-Wed-Sat pattern)
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
        } else {
            tempStreak = 1;
        }
    }
    
    // Check if current streak is active (last activity within 7 days)
    const lastDate = new Date(dates[dates.length - 1]);
    const daysSinceLastActivity = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
    currentStreak = daysSinceLastActivity <= 7 ? tempStreak : 0;
    
    return { currentStreak, longestStreak };
}

/**
 * Get reward tier based on points
 */
function getRewardTier(points) {
    let tier = null;
    for (const t of REWARD_TIERS) {
        if (points >= t.minPoints) {
            tier = t;
        }
    }
    return tier;
}

/**
 * Update performance summary cards
 */
function updatePerformanceSummary() {
    // Top performer
    if (performanceCache.length > 0) {
        const top = performanceCache[0];
        document.getElementById('topPerformerName').textContent = top.staffName;
        document.getElementById('topPerformerScore').textContent = `${top.points.total} points`;
    } else {
        document.getElementById('topPerformerName').textContent = '-';
        document.getElementById('topPerformerScore').textContent = '0 points';
    }
    
    // Total tasks completed
    const totalCompleted = performanceCache.reduce((sum, p) => sum + p.tasksCompleted, 0);
    document.getElementById('totalTasksCompleted').textContent = totalCompleted;
    
    // Average completion rate
    const avgRate = performanceCache.length > 0 
        ? Math.round(performanceCache.reduce((sum, p) => sum + p.completionRate, 0) / performanceCache.length)
        : 0;
    document.getElementById('avgCompletionRate').textContent = `${avgRate}%`;
    
    // Total points awarded
    const totalPoints = performanceCache.reduce((sum, p) => sum + p.points.total, 0);
    document.getElementById('totalPointsAwarded').textContent = totalPoints;
}

/**
 * Render the leaderboard
 */
function renderLeaderboard() {
    const container = document.getElementById('leaderboardContent');
    if (!container) return;
    
    if (performanceCache.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray-500);">
                <i class="fas fa-chart-bar" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>No performance data yet</p>
                <p style="font-size: 13px;">Complete tasks to start earning points!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = performanceCache.map((perf, index) => {
        const rankIcon = getRankIcon(index + 1);
        const tierBadge = perf.rewardTier 
            ? `<span style="background: ${perf.rewardTier.color}; color: #333; padding: 2px 8px; border-radius: 12px; font-size: 10px; margin-left: 8px;"><i class="${perf.rewardTier.icon}"></i> ${perf.rewardTier.name}</span>`
            : '';
        
        return `
            <div class="leaderboard-entry" style="display: flex; align-items: center; padding: 12px; border-bottom: 1px solid var(--gray-100); ${index < 3 ? 'background: ' + getRankBackground(index + 1) + ';' : ''}" onclick="viewStaffPerformance(${perf.staffId})">
                <div class="rank" style="width: 40px; text-align: center; font-size: 20px;">
                    ${rankIcon}
                </div>
                <div class="staff-info" style="flex: 1; margin-left: 12px;">
                    <div style="font-weight: 600; color: var(--gray-800);">${Utils.escapeHtml(perf.staffName)}${tierBadge}</div>
                    <div style="font-size: 12px; color: var(--gray-500);">
                        ${perf.tasksCompleted} tasks | ${perf.completionRate}% completion
                    </div>
                </div>
                <div class="points" style="text-align: right;">
                    <div style="font-size: 20px; font-weight: 700; color: var(--success-500);">${perf.points.total}</div>
                    <div style="font-size: 11px; color: var(--gray-500);">points</div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Get rank icon based on position
 */
function getRankIcon(rank) {
    switch (rank) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return `<span style="font-size: 14px; color: var(--gray-500);">#${rank}</span>`;
    }
}

/**
 * Get rank background color
 */
function getRankBackground(rank) {
    switch (rank) {
        case 1: return 'linear-gradient(to right, #FFF9C4, white)';
        case 2: return 'linear-gradient(to right, #F5F5F5, white)';
        case 3: return 'linear-gradient(to right, #FFCCBC, white)';
        default: return 'white';
    }
}

/**
 * Render rewards tiers
 */
function renderRewardsTiers() {
    const container = document.getElementById('rewardsContent');
    if (!container) return;
    
    // Count staff in each tier
    const tierCounts = {};
    REWARD_TIERS.forEach(tier => {
        tierCounts[tier.name] = performanceCache.filter(p => p.rewardTier && p.rewardTier.name === tier.name).length;
    });
    
    container.innerHTML = `
        <div style="margin-bottom: 16px;">
            <p style="color: var(--gray-600); font-size: 13px;">Earn points by completing tasks to unlock reward tiers!</p>
        </div>
        ${REWARD_TIERS.map(tier => `
            <div class="reward-tier" style="display: flex; align-items: center; padding: 12px; border: 2px solid ${tier.color}; border-radius: 8px; margin-bottom: 8px; background: linear-gradient(to right, ${tier.color}15, white);">
                <div style="width: 40px; height: 40px; background: ${tier.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${tier.name === 'Gold Star' || tier.name === 'Champion' ? '#333' : 'white'};">
                    <i class="${tier.icon}"></i>
                </div>
                <div style="flex: 1; margin-left: 12px;">
                    <div style="font-weight: 600;">${tier.name}</div>
                    <div style="font-size: 11px; color: var(--gray-500);">${tier.description}</div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 600; color: var(--primary-600);">${tier.minPoints}+ pts</div>
                    <div style="font-size: 11px; color: var(--gray-500);">${tierCounts[tier.name]} staff</div>
                </div>
            </div>
        `).join('')}
    `;
}

/**
 * Populate staff select dropdown
 */
function populateStaffSelect() {
    const select = document.getElementById('staffPerformanceSelect');
    if (!select) return;
    
    const staffList = Staff.getActive();
    select.innerHTML = '<option value="">Select Staff Member</option>' + 
        staffList.map(s => `<option value="${s.id}">${Utils.escapeHtml(s.name)}</option>`).join('');
}

/**
 * View specific staff performance
 */
function viewStaffPerformance(staffId) {
    const select = document.getElementById('staffPerformanceSelect');
    if (select) {
        select.value = staffId;
        loadStaffPerformanceDetail();
    }
}

/**
 * Load detailed performance for selected staff
 */
function loadStaffPerformanceDetail() {
    const select = document.getElementById('staffPerformanceSelect');
    const container = document.getElementById('staffPerformanceDetail');
    if (!select || !container) return;
    
    const staffId = parseInt(select.value);
    if (!staffId) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--gray-500); padding: 40px;">
                <i class="fas fa-chart-pie" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>Select a staff member to view detailed performance</p>
            </div>
        `;
        return;
    }
    
    const perf = performanceCache.find(p => p.staffId === staffId);
    if (!perf) {
        container.innerHTML = '<p style="text-align: center; color: var(--gray-500);">No performance data found</p>';
        return;
    }
    
    const tierHtml = perf.rewardTier ? `
        <div style="background: ${perf.rewardTier.color}; color: ${perf.rewardTier.name === 'Gold Star' || perf.rewardTier.name === 'Champion' ? '#333' : 'white'}; padding: 12px 20px; border-radius: 8px; display: inline-flex; align-items: center; gap: 8px;">
            <i class="${perf.rewardTier.icon}" style="font-size: 24px;"></i>
            <div>
                <div style="font-weight: 700;">${perf.rewardTier.name}</div>
                <div style="font-size: 11px; opacity: 0.9;">${perf.rewardTier.description}</div>
            </div>
        </div>
    ` : '<span style="color: var(--gray-500);">No tier yet - complete tasks to earn points!</span>';
    
    const nextTier = getNextTier(perf.points.total);
    const progressToNext = nextTier 
        ? Math.min(100, Math.round((perf.points.total / nextTier.minPoints) * 100))
        : 100;
    
    container.innerHTML = `
        <div class="staff-perf-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
                <h3 style="margin: 0; color: var(--gray-800);">${Utils.escapeHtml(perf.staffName)}</h3>
                <p style="color: var(--gray-500); margin: 4px 0 0 0;">${Utils.escapeHtml(perf.role)} | Rank #${perf.rank}</p>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 36px; font-weight: 700; color: var(--success-500);">${perf.points.total}</div>
                <div style="font-size: 12px; color: var(--gray-500);">Total Points</div>
            </div>
        </div>
        
        <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;">Current Tier</h4>
            ${tierHtml}
            ${nextTier ? `
                <div style="margin-top: 16px;">
                    <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--gray-600); margin-bottom: 4px;">
                        <span>Progress to ${nextTier.name}</span>
                        <span>${perf.points.total} / ${nextTier.minPoints} points</span>
                    </div>
                    <div style="background: var(--gray-200); border-radius: 10px; height: 10px; overflow: hidden;">
                        <div style="background: linear-gradient(to right, var(--success-500), ${nextTier.color}); height: 100%; width: ${progressToNext}%; transition: width 0.5s;"></div>
                    </div>
                </div>
            ` : '<p style="color: var(--success-500); margin-top: 12px;"><i class="fas fa-crown"></i> Maximum tier achieved!</p>'}
        </div>
        
        <div class="perf-metrics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 28px; font-weight: 700; color: var(--primary-600);">${perf.tasksAssigned}</div>
                <div style="font-size: 12px; color: var(--gray-600);">Tasks Assigned</div>
            </div>
            <div style="background: #E8F5E9; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 28px; font-weight: 700; color: var(--success-500);">${perf.tasksCompleted}</div>
                <div style="font-size: 12px; color: var(--gray-600);">Tasks Completed</div>
            </div>
            <div style="background: ${perf.completionRate >= 80 ? '#E8F5E9' : perf.completionRate >= 50 ? '#FFF8E1' : '#FFEBEE'}; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 28px; font-weight: 700; color: ${perf.completionRate >= 80 ? 'var(--success-500)' : perf.completionRate >= 50 ? 'var(--warning-500)' : 'var(--danger-500)'};">${perf.completionRate}%</div>
                <div style="font-size: 12px; color: var(--gray-600);">Completion Rate</div>
            </div>
            <div style="background: #E3F2FD; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 28px; font-weight: 700; color: var(--primary-600);">${perf.productionTasks}</div>
                <div style="font-size: 12px; color: var(--gray-600);">Production Tasks</div>
            </div>
        </div>
        
        <div class="points-breakdown" style="background: var(--gray-50); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;"><i class="fas fa-calculator"></i> Points Breakdown</h4>
            <table style="width: 100%; font-size: 13px;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--gray-200);">
                        <th style="text-align: left; padding: 8px 0;">Category</th>
                        <th style="text-align: center; padding: 8px 0;">Count</th>
                        <th style="text-align: right; padding: 8px 0;">Points</th>
                    </tr>
                </thead>
                <tbody>
                    ${perf.points.breakdown.map(item => `
                        <tr style="border-bottom: 1px solid var(--gray-100);">
                            <td style="padding: 8px 0;">${item.label}</td>
                            <td style="text-align: center; padding: 8px 0;">${item.count}</td>
                            <td style="text-align: right; padding: 8px 0; font-weight: 600; color: var(--success-500);">+${item.points}</td>
                        </tr>
                    `).join('')}
                    <tr style="font-weight: 700;">
                        <td style="padding: 8px 0;">Total</td>
                        <td></td>
                        <td style="text-align: right; padding: 8px 0; color: var(--success-500);">${perf.points.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        ${perf.productsWorked.length > 0 ? `
            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 12px;"><i class="fas fa-boxes"></i> Products Worked On</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${perf.productsWorked.map(p => `
                        <span style="background: var(--primary-100); color: var(--primary-700); padding: 6px 12px; border-radius: 20px; font-size: 12px;">
                            ${Utils.escapeHtml(p)}
                        </span>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;"><i class="fas fa-fire"></i> Activity Streaks</h4>
            <div style="display: flex; gap: 24px;">
                <div>
                    <span style="font-size: 24px; font-weight: 700; color: var(--warning-500);">${perf.streakInfo.currentStreak}</span>
                    <span style="font-size: 13px; color: var(--gray-600);"> current streak</span>
                </div>
                <div>
                    <span style="font-size: 24px; font-weight: 700; color: var(--primary-600);">${perf.streakInfo.longestStreak}</span>
                    <span style="font-size: 13px; color: var(--gray-600);"> longest streak</span>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 24px;">
            <button class="btn btn-primary" onclick="exportStaffPerformancePDF(${staffId})">
                <i class="fas fa-file-pdf"></i> Export Individual Report
            </button>
        </div>
    `;
}

/**
 * Get next tier for progression
 */
function getNextTier(currentPoints) {
    for (const tier of REWARD_TIERS) {
        if (currentPoints < tier.minPoints) {
            return tier;
        }
    }
    return null; // Already at max tier
}

/**
 * Export performance report to PDF
 */
function exportPerformancePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    if (performanceCache.length === 0) {
        Utils.showToast('warning', 'No Data', 'No performance data to export');
        return;
    }
    
    // Header
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM', 105, 18, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Staff Performance Report', 105, 28, { align: 'center' });
    
    doc.setFontSize(11);
    const periodLabels = { week: 'This Week', month: 'This Month', quarter: 'This Quarter', year: 'This Year', all: 'All Time' };
    doc.text(`Period: ${periodLabels[currentPeriod] || currentPeriod}`, 105, 38, { align: 'center' });
    
    let yPos = 55;
    
    // Summary section
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(15, yPos, 180, 30, 3, 3, 'F');
    doc.setDrawColor(26, 54, 93);
    doc.roundedRect(15, yPos, 180, 30, 3, 3, 'S');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Performance Summary', 20, yPos + 8);
    doc.setFont('helvetica', 'normal');
    
    const totalCompleted = performanceCache.reduce((sum, p) => sum + p.tasksCompleted, 0);
    const totalPoints = performanceCache.reduce((sum, p) => sum + p.points.total, 0);
    const avgRate = performanceCache.length > 0 
        ? Math.round(performanceCache.reduce((sum, p) => sum + p.completionRate, 0) / performanceCache.length)
        : 0;
    
    doc.text(`Total Staff: ${performanceCache.length}`, 20, yPos + 16);
    doc.text(`Tasks Completed: ${totalCompleted}`, 70, yPos + 16);
    doc.text(`Avg Completion: ${avgRate}%`, 130, yPos + 16);
    doc.text(`Total Points: ${totalPoints}`, 20, yPos + 24);
    doc.text(`Top Performer: ${performanceCache[0]?.staffName || '-'}`, 70, yPos + 24);
    
    yPos += 40;
    
    // Leaderboard table
    doc.setFillColor(46, 125, 50);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Staff Leaderboard', 20, yPos + 7);
    
    yPos += 15;
    
    // Table header
    doc.setTextColor(60, 60, 60);
    doc.setFillColor(248, 249, 250);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setFontSize(9);
    doc.text('Rank', 18, yPos + 7);
    doc.text('Staff Name', 35, yPos + 7);
    doc.text('Tasks', 90, yPos + 7);
    doc.text('Rate', 110, yPos + 7);
    doc.text('Points', 130, yPos + 7);
    doc.text('Tier', 155, yPos + 7);
    
    yPos += 12;
    
    // Table rows
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    performanceCache.forEach((perf, idx) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        
        if (idx % 2 === 0) {
            doc.setFillColor(255, 255, 255);
        } else {
            doc.setFillColor(250, 250, 250);
        }
        doc.rect(15, yPos - 3, 180, 8, 'F');
        
        doc.setFontSize(9);
        doc.text(`#${perf.rank}`, 18, yPos + 2);
        doc.setFont('helvetica', 'bold');
        doc.text(perf.staffName.substring(0, 25), 35, yPos + 2);
        doc.setFont('helvetica', 'normal');
        doc.text(`${perf.tasksCompleted}/${perf.tasksAssigned}`, 90, yPos + 2);
        doc.text(`${perf.completionRate}%`, 110, yPos + 2);
        doc.setTextColor(46, 125, 50);
        doc.setFont('helvetica', 'bold');
        doc.text(`${perf.points.total}`, 130, yPos + 2);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        doc.text(perf.rewardTier ? perf.rewardTier.name : '-', 155, yPos + 2);
        
        yPos += 8;
    });
    
    // Rewards legend
    if (yPos > 230) {
        doc.addPage();
        yPos = 20;
    }
    
    yPos += 10;
    doc.setFillColor(255, 215, 0);
    doc.roundedRect(15, yPos, 180, 40, 3, 3, 'F');
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Reward Tiers', 20, yPos + 10);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    
    REWARD_TIERS.forEach((tier, idx) => {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        doc.text(`${tier.name}: ${tier.minPoints}+ pts`, 20 + (col * 60), yPos + 20 + (row * 8));
    });
    
    // Footer on all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(128, 128, 128);
        doc.line(15, 280, 195, 280);
        doc.text('ASTRO-BSM Factory Operations | Staff Performance Analytics', 105, 285, { align: 'center' });
        doc.text(`Generated: ${new Date().toLocaleString()}`, 15, 290);
        doc.text(`Page ${i} of ${pageCount}`, 195, 290, { align: 'right' });
    }
    
    // Save
    const fileName = `Performance_Report_${currentPeriod}_${Utils.formatDate(new Date())}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Ready', 'Performance report exported successfully!');
}

/**
 * Export individual staff performance PDF
 */
function exportStaffPerformancePDF(staffId) {
    const perf = performanceCache.find(p => p.staffId === staffId);
    if (!perf) {
        Utils.showToast('error', 'Error', 'Staff performance data not found');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 50, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('ASTRO-BSM', 105, 15, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Individual Performance Report', 105, 25, { align: 'center' });
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(perf.staffName, 105, 38, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${perf.role} | Rank #${perf.rank}`, 105, 46, { align: 'center' });
    
    let yPos = 60;
    
    // Points summary
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(232, 245, 233);
    doc.roundedRect(15, yPos, 85, 35, 3, 3, 'F');
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(46, 125, 50);
    doc.text(`${perf.points.total}`, 57.5, yPos + 18, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text('Total Points', 57.5, yPos + 28, { align: 'center' });
    
    // Tier badge
    if (perf.rewardTier) {
        doc.setFillColor(255, 215, 0);
        doc.roundedRect(110, yPos, 85, 35, 3, 3, 'F');
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(51, 51, 51);
        doc.text(perf.rewardTier.name, 152.5, yPos + 15, { align: 'center' });
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text(perf.rewardTier.description, 152.5, yPos + 25, { align: 'center' });
    }
    
    yPos += 45;
    
    // Performance metrics grid
    const metrics = [
        { label: 'Tasks Assigned', value: perf.tasksAssigned },
        { label: 'Tasks Completed', value: perf.tasksCompleted },
        { label: 'Completion Rate', value: `${perf.completionRate}%` },
        { label: 'Production Tasks', value: perf.productionTasks }
    ];
    
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(15, yPos, 180, 25, 3, 3, 'F');
    
    metrics.forEach((m, idx) => {
        const x = 15 + (idx * 45) + 22.5;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(26, 54, 93);
        doc.text(`${m.value}`, x, yPos + 10, { align: 'center' });
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(m.label, x, yPos + 18, { align: 'center' });
    });
    
    yPos += 35;
    
    // Points breakdown
    doc.setFillColor(46, 125, 50);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Points Breakdown', 20, yPos + 7);
    
    yPos += 15;
    
    doc.setTextColor(60, 60, 60);
    doc.setFillColor(248, 249, 250);
    doc.rect(15, yPos, 180, 8, 'F');
    doc.setFontSize(9);
    doc.text('Category', 20, yPos + 5);
    doc.text('Count', 110, yPos + 5);
    doc.text('Points', 160, yPos + 5);
    
    yPos += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    perf.points.breakdown.forEach((item, idx) => {
        if (idx % 2 === 0) {
            doc.setFillColor(255, 255, 255);
        } else {
            doc.setFillColor(250, 250, 250);
        }
        doc.rect(15, yPos - 2, 180, 8, 'F');
        
        doc.text(item.label, 20, yPos + 3);
        doc.text(`${item.count}`, 115, yPos + 3);
        doc.setTextColor(46, 125, 50);
        doc.setFont('helvetica', 'bold');
        doc.text(`+${item.points}`, 165, yPos + 3);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        
        yPos += 8;
    });
    
    // Total row
    doc.setFillColor(232, 245, 233);
    doc.rect(15, yPos, 180, 10, 'F');
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL', 20, yPos + 7);
    doc.setTextColor(46, 125, 50);
    doc.setFontSize(12);
    doc.text(`${perf.points.total}`, 165, yPos + 7);
    
    yPos += 20;
    
    // Products worked
    if (perf.productsWorked.length > 0) {
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('Products Worked On:', 20, yPos);
        yPos += 8;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text(perf.productsWorked.join(', '), 20, yPos);
        yPos += 15;
    }
    
    // Streaks
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Activity Streaks:', 20, yPos);
    yPos += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Current Streak: ${perf.streakInfo.currentStreak} | Longest Streak: ${perf.streakInfo.longestStreak}`, 20, yPos);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.line(15, 280, 195, 280);
    doc.text('ASTRO-BSM Factory Operations | Individual Performance Report', 105, 285, { align: 'center' });
    doc.text(`Generated: ${new Date().toLocaleString()}`, 15, 290);
    
    // Save
    const fileName = `Performance_${perf.staffName.replace(/\s+/g, '_')}_${Utils.formatDate(new Date())}.pdf`;
    doc.save(fileName);
    
    Utils.showToast('success', 'PDF Ready', `Performance report for ${perf.staffName} exported!`);
}

/**
 * Award bonus points manually (for supervisor use)
 */
async function awardBonusPoints(staffId, points, reason) {
    try {
        const staffName = Staff.getName(staffId);
        
        const logEntry = {
            timestamp: Utils.getTimestamp(),
            type: 'bonus_points',
            action: 'BONUS_AWARDED',
            staffId: staffId,
            staffName: staffName,
            points: points,
            reason: reason,
            entity: 'performance',
            details: `${points} bonus points awarded to ${staffName}: ${reason}`
        };
        
        await DB.add(DB.STORES.LOGS, logEntry);
        Utils.showToast('success', 'Bonus Awarded', `${points} points awarded to ${staffName}`);
        
        // Reload performance data
        await loadPerformanceData();
        
    } catch (error) {
        console.error('Error awarding bonus points:', error);
        Utils.showToast('error', 'Error', 'Failed to award bonus points');
    }
}

/**
 * Show award bonus modal
 */
function showAwardBonusModal() {
    const staffList = Staff.getActive();
    
    const content = `
        <div style="padding: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-gift" style="font-size: 48px; color: #FFD700;"></i>
                <h3 style="margin-top: 12px;">Award Bonus Points</h3>
            </div>
            
            <div class="form-group">
                <label for="bonusStaffId">Staff Member *</label>
                <select id="bonusStaffId" required>
                    <option value="">Select Staff</option>
                    ${staffList.map(s => `<option value="${s.id}">${Utils.escapeHtml(s.name)}</option>`).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label for="bonusPoints">Points to Award *</label>
                <input type="number" id="bonusPoints" min="1" max="500" value="10" required>
            </div>
            
            <div class="form-group">
                <label for="bonusReason">Reason *</label>
                <textarea id="bonusReason" rows="3" placeholder="Enter reason for bonus points..." required></textarea>
            </div>
        </div>
    `;
    
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-success" onclick="submitBonusPoints()">
            <i class="fas fa-gift"></i> Award Points
        </button>
    `;
    
    Utils.showModal('Award Bonus Points', content, footer);
}

/**
 * Submit bonus points
 */
async function submitBonusPoints() {
    const staffId = parseInt(document.getElementById('bonusStaffId').value);
    const points = parseInt(document.getElementById('bonusPoints').value);
    const reason = document.getElementById('bonusReason').value.trim();
    
    if (!staffId || !points || !reason) {
        Utils.showToast('warning', 'Missing Info', 'Please fill all fields');
        return;
    }
    
    closeModal();
    await awardBonusPoints(staffId, points, reason);
}

// Export performance module
window.Performance = {
    load: loadPerformanceData,
    exportPDF: exportPerformancePDF,
    exportStaffPDF: exportStaffPerformancePDF,
    awardBonus: showAwardBonusModal,
    cache: () => performanceCache
};
