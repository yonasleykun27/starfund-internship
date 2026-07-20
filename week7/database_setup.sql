-- ============================================================
-- StarFund Database Setup Script — Week 7, Day 31
-- Target Database: PostgreSQL
-- ============================================================

-- 1. Create Database (If creating from psql/pgAdmin query tool, execute this line separately if needed)
-- CREATE DATABASE starfund;

-- 2. Create tables with foreign key constraints and standard data types

-- Table 1: users
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('founder', 'investor', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 2: startups
CREATE TABLE IF NOT EXISTS startups (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    sector VARCHAR(50) NOT NULL,
    cover_image VARCHAR(255) DEFAULT '/uploads/default-cover.png',
    team_size INT NOT NULL CHECK (team_size >= 1),
    founder_id VARCHAR(50) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 3: campaigns
CREATE TABLE IF NOT EXISTS campaigns (
    id VARCHAR(50) PRIMARY KEY,
    startup_id VARCHAR(50) NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
    goal_amount NUMERIC(12, 2) NOT NULL CHECK (goal_amount > 0),
    raised_amount NUMERIC(12, 2) DEFAULT 0.00 CHECK (raised_amount >= 0),
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_dates CHECK (end_date > start_date)
);

-- Table 4: investments
CREATE TABLE IF NOT EXISTS investments (
    id VARCHAR(50) PRIMARY KEY,
    campaign_id VARCHAR(50) NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    investor_id VARCHAR(50) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 5: updates
CREATE TABLE IF NOT EXISTS updates (
    id VARCHAR(50) PRIMARY KEY,
    startup_id VARCHAR(50) NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 6: follows
CREATE TABLE IF NOT EXISTS follows (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    startup_id VARCHAR(50) NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_startup_follow UNIQUE (user_id, startup_id)
);

-- Table 7: transactions
CREATE TABLE IF NOT EXISTS transactions (
    id VARCHAR(50) PRIMARY KEY,
    investment_id VARCHAR(50) NOT NULL REFERENCES investments(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'failed')),
    payment_method VARCHAR(50) DEFAULT 'card',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 3. Insert mock data for Day 31 Tasks
-- ============================================================

-- Insert 5 users (1 admin, 2 founders, 2 investors)
INSERT INTO users (id, name, email, password, role) VALUES
('usr_admin_1', 'System Admin', 'admin@starfund.com', 'admin_hash', 'admin'),
('usr_founder_1', 'John Founder', 'founder@starfund.com', 'founder_hash', 'founder'),
('usr_founder_2', 'Sarah Tech', 'sarah@tech.com', 'founder_hash', 'founder'),
('usr_investor_1', 'Jane Investor', 'investor@starfund.com', 'investor_hash', 'investor'),
('usr_investor_2', 'Bob Capital', 'bob@capital.com', 'investor_hash', 'investor')
ON CONFLICT (id) DO NOTHING;

-- Insert 3 startups
INSERT INTO startups (id, title, description, sector, team_size, founder_id, status) VALUES
('stp_1', 'EcoSphere Solutions', 'seaweed biodegradable packaging', 'CleanTech', 8, 'usr_founder_1', 'approved'),
('stp_2', 'FinFlow Analytics', 'AI SaaS real-time forecasting tool', 'FinTech', 5, 'usr_founder_2', 'approved'),
('stp_3', 'HealthVibe Wearables', 'glucose monitoring smartwatch bands', 'HealthTech', 12, 'usr_founder_1', 'pending')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- 4. Sample Queries for Day 31 Tasks
-- ============================================================

-- JOIN Query: Get all startups with their founder's name
-- SELECT s.title AS startup_name, s.sector, u.name AS founder_name 
-- FROM startups s
-- JOIN users u ON s.founder_id = u.id;
