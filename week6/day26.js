/**
 * ============================================================
 * StarFund Internship — Week 6, Day 26
 * Topic: Node.js & Express Foundations
 * ============================================================
 *
 * Day 26 Learning Notes
 * ─────────────────────
 *
 * NODE.JS ENVIRONMENT
 * ───────────────────
 *   • Runs JavaScript outside the browser using Chrome's V8 engine.
 *   • Uses CommonJS module system by default (require and module.exports).
 *   • Non-blocking, event-driven I/O model makes it lightweight and efficient.
 *
 * EXPRESS SERVER CONCEPTS
 * ───────────────────────
 *   • Express is a minimal and flexible Node.js web application framework.
 *   • Basic flow: Listen on a port, match route path + HTTP method, run handler callback.
 *   • Standard route handler arguments: (req, res, next).
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 26)
 * ─────────────────────────
 * ✅  Initialized Node project and configured package.json scripts
 * ✅  Installed Express, dotenv, cors, morgan, and nodemon dev-dependency
 * ✅  Configured Express server listening on Port 5000
 * ✅  Implemented GET /health check endpoint returning healthy status
 * ✅  Implemented GET /api/startups returning JSON mock data
 * ✅  Implemented GET /api/startups/:id returning single mock startup record
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • week6/starfund-backend/package.json (new)
 *     Configured project dependencies and nodemon start scripts.
 * • week6/starfund-backend/.env (new)
 *     Port and Node environment configuration.
 * • week6/starfund-backend/src/server.js (new)
 *     Server listening wrapper with exception handler captures.
 * • week6/starfund-backend/src/app.js (new)
 *     Express core initialization and base health/mock startup routes.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Complete Week 5 React Frontend dashboards and route guarding checks.
 * Today: Week 6 kickoff. Initialized the backend Express server and first mock routes.
 * Blocker: None.
 */
