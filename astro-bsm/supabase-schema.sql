-- =============================================
-- ASTRO-BSM Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- STAFF TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_staff (
    id SERIAL PRIMARY KEY,
    staff_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    department VARCHAR(100),
    phone VARCHAR(50),
    email VARCHAR(255),
    status VARCHAR(20) DEFAULT 'active',
    hire_date DATE,
    photo_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_staff_status ON bsm_staff(status);
CREATE INDEX IF NOT EXISTS idx_bsm_staff_updated ON bsm_staff(updated_at);

-- =============================================
-- DUTIES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_duties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    start_time TIME,
    end_time TIME,
    priority VARCHAR(20) DEFAULT 'normal',
    status VARCHAR(20) DEFAULT 'active',
    requires_qc BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_duties_status ON bsm_duties(status);
CREATE INDEX IF NOT EXISTS idx_bsm_duties_category ON bsm_duties(category);

-- =============================================
-- ROSTER TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_roster (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    week_number VARCHAR(20),
    staff_id INTEGER REFERENCES bsm_staff(id) ON DELETE SET NULL,
    duty_id INTEGER REFERENCES bsm_duties(id) ON DELETE SET NULL,
    duty_name VARCHAR(255),
    task_description TEXT,
    task_steps JSONB,
    task_qc_checks JSONB,
    task_order INTEGER,
    linked_production_id INTEGER,
    linked_task_id VARCHAR(100),
    product_id VARCHAR(100),
    product_name VARCHAR(255),
    batch_number VARCHAR(100),
    target_quantity INTEGER,
    production_start_time TIME,
    production_end_time TIME,
    notes TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    is_production_task BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    completed_by VARCHAR(255),
    completion_comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_roster_date ON bsm_roster(date);
CREATE INDEX IF NOT EXISTS idx_bsm_roster_week ON bsm_roster(week_number);
CREATE INDEX IF NOT EXISTS idx_bsm_roster_staff ON bsm_roster(staff_id);
CREATE INDEX IF NOT EXISTS idx_bsm_roster_status ON bsm_roster(status);
CREATE INDEX IF NOT EXISTS idx_bsm_roster_production ON bsm_roster(linked_production_id);

-- =============================================
-- PRODUCTION TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_production (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    product_name VARCHAR(255),
    batch_number VARCHAR(100),
    target_quantity INTEGER,
    actual_quantity INTEGER,
    unit VARCHAR(50),
    start_time TIME,
    end_time TIME,
    status VARCHAR(20) DEFAULT 'scheduled',
    assigned_staff JSONB,
    tasks JSONB,
    supervisor_id INTEGER REFERENCES bsm_staff(id) ON DELETE SET NULL,
    supervisor_name VARCHAR(255),
    notes TEXT,
    quality_status VARCHAR(20),
    quality_notes TEXT,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_production_date ON bsm_production(date);
CREATE INDEX IF NOT EXISTS idx_bsm_production_product ON bsm_production(product_id);
CREATE INDEX IF NOT EXISTS idx_bsm_production_status ON bsm_production(status);
CREATE INDEX IF NOT EXISTS idx_bsm_production_batch ON bsm_production(batch_number);

-- =============================================
-- LOGS TABLE (Audit Trail & Task Execution)
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_logs (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    type VARCHAR(50),
    action VARCHAR(50) NOT NULL,
    entity VARCHAR(50),
    entity_id INTEGER,
    user_name VARCHAR(255),
    staff_id INTEGER REFERENCES bsm_staff(id) ON DELETE SET NULL,
    staff_name VARCHAR(255),
    assignment_id INTEGER,
    task_name VARCHAR(255),
    task_type VARCHAR(50),
    task_order INTEGER,
    product_id VARCHAR(100),
    product_name VARCHAR(255),
    batch_number VARCHAR(100),
    date DATE,
    comment TEXT,
    details TEXT,
    points INTEGER,
    reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_logs_timestamp ON bsm_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_bsm_logs_type ON bsm_logs(type);
CREATE INDEX IF NOT EXISTS idx_bsm_logs_action ON bsm_logs(action);
CREATE INDEX IF NOT EXISTS idx_bsm_logs_staff ON bsm_logs(staff_id);
CREATE INDEX IF NOT EXISTS idx_bsm_logs_date ON bsm_logs(date);

-- =============================================
-- SETTINGS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_settings (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_at TIMESTAMPTZ
);

-- =============================================
-- PERFORMANCE/REWARDS TABLE (Optional - for storing calculated performance data)
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_performance (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER REFERENCES bsm_staff(id) ON DELETE CASCADE,
    period_start DATE,
    period_end DATE,
    period_type VARCHAR(20), -- 'week', 'month', 'quarter', 'year'
    tasks_assigned INTEGER DEFAULT 0,
    tasks_completed INTEGER DEFAULT 0,
    completion_rate DECIMAL(5,2) DEFAULT 0,
    production_tasks INTEGER DEFAULT 0,
    regular_tasks INTEGER DEFAULT 0,
    tasks_with_comments INTEGER DEFAULT 0,
    base_points INTEGER DEFAULT 0,
    bonus_points INTEGER DEFAULT 0,
    total_points INTEGER DEFAULT 0,
    reward_tier VARCHAR(50),
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    products_worked JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bsm_perf_staff ON bsm_performance(staff_id);
CREATE INDEX IF NOT EXISTS idx_bsm_perf_period ON bsm_performance(period_type, period_start);

-- =============================================
-- BONUS POINTS TABLE (For manual bonus awards)
-- =============================================
CREATE TABLE IF NOT EXISTS bsm_bonus_points (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER REFERENCES bsm_staff(id) ON DELETE CASCADE,
    points INTEGER NOT NULL,
    reason TEXT NOT NULL,
    awarded_by VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bsm_bonus_staff ON bsm_bonus_points(staff_id);

-- =============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- =============================================
ALTER TABLE bsm_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_duties ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_roster ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_production ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_performance ENABLE ROW LEVEL SECURITY;
ALTER TABLE bsm_bonus_points ENABLE ROW LEVEL SECURITY;

-- =============================================
-- CREATE POLICIES (Allow all for anonymous access - adjust for production)
-- =============================================

-- Staff policies
CREATE POLICY "Allow all staff operations" ON bsm_staff FOR ALL USING (true);

-- Duties policies
CREATE POLICY "Allow all duties operations" ON bsm_duties FOR ALL USING (true);

-- Roster policies
CREATE POLICY "Allow all roster operations" ON bsm_roster FOR ALL USING (true);

-- Production policies
CREATE POLICY "Allow all production operations" ON bsm_production FOR ALL USING (true);

-- Logs policies
CREATE POLICY "Allow all logs operations" ON bsm_logs FOR ALL USING (true);

-- Settings policies
CREATE POLICY "Allow all settings operations" ON bsm_settings FOR ALL USING (true);

-- Performance policies
CREATE POLICY "Allow all performance operations" ON bsm_performance FOR ALL USING (true);

-- Bonus points policies
CREATE POLICY "Allow all bonus operations" ON bsm_bonus_points FOR ALL USING (true);

-- =============================================
-- ENABLE REALTIME FOR ALL TABLES
-- =============================================
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_staff;
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_duties;
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_roster;
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_production;
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_logs;
ALTER PUBLICATION supabase_realtime ADD TABLE bsm_settings;

-- =============================================
-- TRIGGER FOR AUTO-UPDATING updated_at
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables
CREATE TRIGGER update_bsm_staff_updated_at BEFORE UPDATE ON bsm_staff
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bsm_duties_updated_at BEFORE UPDATE ON bsm_duties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bsm_roster_updated_at BEFORE UPDATE ON bsm_roster
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bsm_production_updated_at BEFORE UPDATE ON bsm_production
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bsm_logs_updated_at BEFORE UPDATE ON bsm_logs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bsm_settings_updated_at BEFORE UPDATE ON bsm_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- VIEWS FOR COMMON QUERIES
-- =============================================

-- Today's roster view
CREATE OR REPLACE VIEW v_today_roster AS
SELECT 
    r.*,
    s.name as staff_name,
    s.role as staff_role,
    d.name as full_duty_name
FROM bsm_roster r
LEFT JOIN bsm_staff s ON r.staff_id = s.id
LEFT JOIN bsm_duties d ON r.duty_id = d.id
WHERE r.date = CURRENT_DATE;

-- Staff performance summary view
CREATE OR REPLACE VIEW v_staff_performance AS
SELECT 
    s.id,
    s.name,
    s.role,
    COUNT(r.id) FILTER (WHERE r.date >= CURRENT_DATE - INTERVAL '30 days') as tasks_last_30_days,
    COUNT(r.id) FILTER (WHERE r.status = 'completed' AND r.date >= CURRENT_DATE - INTERVAL '30 days') as completed_last_30_days,
    ROUND(
        COUNT(r.id) FILTER (WHERE r.status = 'completed' AND r.date >= CURRENT_DATE - INTERVAL '30 days')::numeric / 
        NULLIF(COUNT(r.id) FILTER (WHERE r.date >= CURRENT_DATE - INTERVAL '30 days'), 0) * 100, 
        2
    ) as completion_rate
FROM bsm_staff s
LEFT JOIN bsm_roster r ON s.id = r.staff_id
WHERE s.status = 'active'
GROUP BY s.id, s.name, s.role;

-- Production status view
CREATE OR REPLACE VIEW v_production_status AS
SELECT 
    p.*,
    COUNT(r.id) as total_tasks,
    COUNT(r.id) FILTER (WHERE r.status = 'completed') as completed_tasks
FROM bsm_production p
LEFT JOIN bsm_roster r ON r.linked_production_id = p.id
GROUP BY p.id;

-- =============================================
-- FUNCTIONS FOR COMMON OPERATIONS
-- =============================================

-- Function to get staff points for a period
CREATE OR REPLACE FUNCTION get_staff_points(
    p_staff_id INTEGER,
    p_start_date DATE DEFAULT CURRENT_DATE - INTERVAL '30 days',
    p_end_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE (
    base_points BIGINT,
    production_bonus BIGINT,
    comment_bonus BIGINT,
    total_points BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(*) * 10 as base_points,
        COUNT(*) FILTER (WHERE l.task_type = 'Production Task') * 5 as production_bonus,
        COUNT(*) FILTER (WHERE l.comment IS NOT NULL AND l.comment != '') * 5 as comment_bonus,
        (COUNT(*) * 10) + 
        (COUNT(*) FILTER (WHERE l.task_type = 'Production Task') * 5) +
        (COUNT(*) FILTER (WHERE l.comment IS NOT NULL AND l.comment != '') * 5) as total_points
    FROM bsm_logs l
    WHERE l.staff_id = p_staff_id
        AND l.type = 'task_completion'
        AND l.date BETWEEN p_start_date AND p_end_date;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- SAMPLE DATA (Optional - uncomment to add test data)
-- =============================================

/*
-- Sample staff
INSERT INTO bsm_staff (staff_id, name, role, department, status) VALUES
('BSM001', 'John Smith', 'Production Supervisor', 'Production', 'active'),
('BSM002', 'Jane Doe', 'QC Officer', 'Quality Control', 'active'),
('BSM003', 'Mike Johnson', 'Machine Operator', 'Production', 'active');

-- Sample duties
INSERT INTO bsm_duties (name, description, category, start_time, end_time, status) VALUES
('Morning Equipment Check', 'Inspect all production equipment', 'Production', '08:00', '08:30', 'active'),
('Production Line Setup', 'Prepare production line for daily operations', 'Production', '08:30', '09:00', 'active'),
('Quality Inspection', 'Perform quality checks on products', 'QC', '09:00', '17:00', 'active');
*/

-- =============================================
-- GRANT PERMISSIONS
-- =============================================
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
