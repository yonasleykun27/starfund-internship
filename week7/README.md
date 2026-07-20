# Week 7: Database, Auth & Full Integration

This folder contains the daily assignments, database scripts, migrations, and final end-to-end integration workflows for Week 7 of the StarFund Internship.

---

## Day 31 — PostgreSQL & SQL Fundamentals (Completed)

Focuses on establishing the persistent database layer, creating schemas, establishing foreign relations, and writing raw SQL.

### Files Included:
*   **[day31.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week7/day31.js)**: Learning notes, review checklists, and INNER JOIN query configurations.
*   **[database_setup.sql](file:///c:/Users/Yonas/Desktop/starfund-internship/week7/database_setup.sql)**: Raw SQL schema file containing `CREATE TABLE` and `INSERT` definitions for all 7 platform tables.
*   **[erd.md](file:///c:/Users/Yonas/Desktop/starfund-internship/week7/erd.md)**: Visual Entity Relationship Diagram drawn using Mermaid describing data links.

---

## Daily Setup Instructions for Day 31

### 1. Database Creation
Connect to your local PostgreSQL server via pgAdmin or the `psql` command line tool and create a new database named `starfund`:
```sql
CREATE DATABASE starfund;
```

### 2. Table Creation & Mock Seeding
Open the query tool in pgAdmin, load the content of [database_setup.sql](file:///c:/Users/Yonas/Desktop/starfund-internship/week7/database_setup.sql), and run the entire script. This will:
1. Create the `users`, `startups`, `campaigns`, `investments`, `updates`, `follows`, and `transactions` tables with strict data checks and foreign key bounds.
2. Insert 5 mock users and 3 mock startups.

### 3. Verification Query
To check that your data relationships are linked correctly, execute the following INNER JOIN query in your SQL editor:
```sql
SELECT 
    s.title AS startup_name, 
    s.sector, 
    u.name AS founder_name 
FROM startups s
JOIN users u ON s.founder_id = u.id;
```
This should output the list of approved and pending startups with the name of the founder who created them.
