/**
 * ============================================================
 * StarFund Internship — Week 7, Day 31
 * Topic: PostgreSQL & SQL Fundamentals
 * ============================================================
 *
 * Day 31 Learning Notes
 * ─────────────────────
 *
 * POSTGRESQL & SQL BASICS
 * ───────────────────────
 *   • Relational databases store data in tables (rows and columns) with structured schemas.
 *   • SQL (Structured Query Language) is used to communicate with the database.
 *   • Key constraints:
 *     - PRIMARY KEY: Uniquely identifies each record.
 *     - FOREIGN KEY: Links tables together, enforcing referential integrity.
 *     - UNIQUE: Prevents duplicates in specified columns.
 *     - CHECK: Enforces data-range rules (e.g. goal_amount > 0).
 *
 * COMMON SQL CLAUSES
 * ──────────────────
 *   • SELECT ... FROM ... WHERE ... ORDER BY ...
 *   • INSERT INTO ... VALUES ...
 *   • UPDATE ... SET ... WHERE ...
 *   • DELETE FROM ... WHERE ...
 *   • JOIN: Combines rows from two or more tables based on a related column.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 31)
 * ─────────────────────────
 * ✅  Installed PostgreSQL and pgAdmin dashboard client (or verified access)
 * ✅  Created target 'starfund' database
 * ✅  Wrote raw CREATE TABLE DDL schemas for all 7 platform tables
 * ✅  Added proper foreign key references and data constraints (NOT NULL, CHECK)
 * ✅  Inserted 5 mock users and 3 mock startups matching backend relations
 * ✅  Executed JOIN query matching startups to their founder names
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • week7/database_setup.sql (new)
 *     Contains the full raw SQL queries to create tables, insert seeds, and query JOIN stats.
 * • week7/erd.md (new)
 *     Mermaid Entity Relationship Diagram describing database structures and card links.
 * • week7/README.md (new)
 *     Introductory Week 7 document.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Complete Week 6 Node.js controllers, validations, image uploads, and rate limiters.
 * Today: Began Week 7. Installed PostgreSQL, created 'starfund' database, and ran 7 table creation SQL schemas.
 * Blocker: None.
 */

// JOIN Query script details for manual run in pgAdmin:
const joinQuery = `
  SELECT 
    s.id AS startup_id,
    s.title AS startup_name, 
    s.sector, 
    u.name AS founder_name,
    u.email AS founder_email
  FROM startups s
  INNER JOIN users u ON s.founder_id = u.id
  ORDER BY s.title ASC;
`;

console.log("Day 31 SQL Fundamentals Tasks completed.");
module.exports = { joinQuery };
