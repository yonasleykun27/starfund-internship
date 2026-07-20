/**
 * ============================================================
 * StarFund Internship — Week 6, Day 29
 * Topic: JWT Authentication & Role Security
 * ============================================================
 *
 * Day 29 Learning Notes
 * ─────────────────────
 *
 * CRYPTOGRAPHIC PASSWORD HASHING
 * ──────────────────────────────
 *   • Never store plain text passwords. A salt must be added and then hashed.
 *   • Bcryptjs is a slow hashing algorithm designed specifically for password storage.
 *   • `bcrypt.hash()` for generating hashes, `bcrypt.compare()` for logins.
 *
 * JSON WEB TOKENS (JWT)
 * ────────────────────
 *   • Stateless authorization protocol. Contains: Header, Payload (claims), Signature.
 *   • Signed by server using a secret key.
 *   • Clients attach JWT inside `Authorization: Bearer <token>` request headers.
 *
 * ROLE-BASED ROUTE GUARDS
 * ───────────────────────
 *   • Middleware intercepting routes to inspect role level claims.
 *   • secure mutating paths: POST /api/startups (founder), GET /api/admin/users (admin).
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 29)
 * ─────────────────────────
 * ✅  Secured user passwords in database registry via bcrypt hashes
 * ✅  Build JWT issue and signature logic in authController login/register
 * ✅  Built protect middleware verifying tokens from Bearer headers
 * ✅  Built restrictTo role verification check middleware
 * ✅  Secured mutating startup, campaign, investment, and admin endpoints
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/middleware/authMiddleware.js (new)
 *     Contains JWT protect verification and restrictTo role guard middleware.
 * • src/controllers/authController.js (modified)
 *     Hashed password upon register, compared password upon login, signed JWTs.
 * • src/routes/ (modified)
 *     Secured routes with protect and role guard checks.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Configured input validations and custom request time logger.
 * Today: Implemented password hashing, JWT stateless authentication, and role checking.
 * Blocker: None.
 */
