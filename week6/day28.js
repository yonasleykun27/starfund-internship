/**
 * ============================================================
 * StarFund Internship — Week 6, Day 28
 * Topic: Middleware & Input Validation
 * ============================================================
 *
 * Day 28 Learning Notes
 * ─────────────────────
 *
 * EXPRESS MIDDLEWARE CHAIN
 * ────────────────────────
 *   • Middlewares intercept incoming requests before reaching the final handlers.
 *   • Chain order matters: Parser, logger, and CORS should run first.
 *   • Call `next()` to advance execution to the next middleware or route handler.
 *
 * INPUT VALIDATION WITH EXPRESS-VALIDATOR
 * ───────────────────────────────────────
 *   • Validates body payloads to prevent bad database inserts or code crashes.
 *   • `check()` is used to assert parameter properties (notEmpty, isEmail, isFloat).
 *   • `validationResult()` captures verification failures and returns formatted errors.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 28)
 * ─────────────────────────
 * ✅  Integrated CORS and Morgan logs
 * ✅  Implemented express-validator checks across all POST/PUT routes
 * ✅  Created centralized validator schema helper in validation.js
 * ✅  Built custom requestLogger tracking endpoint response durations
 * ✅  Ensured validation failures respond with a 422 status code
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/middleware/validation.js (new)
 *     Checks schemas for registration, login, startup, campaign, and investments.
 * • src/middleware/logger.js (new)
 *     Calculates elapsed request times and prints details to logs.
 * • src/app.js (modified)
 *     Registered request logging and standard JSON parsers globally.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Built MVC controllers and routed core CRUD endpoints.
 * Today: Implemented express-validator validations and custom logging middleware.
 * Blocker: None.
 */
