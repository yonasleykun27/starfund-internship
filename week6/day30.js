/**
 * ============================================================
 * StarFund Internship — Week 6, Day 30
 * Topic: Multer File Uploads & Centralized Error Handling
 * ============================================================
 *
 * Day 30 Learning Notes
 * ─────────────────────
 *
 * MULTER MULTIPART UPLOADS
 * ────────────────────────
 *   • Multer parses multipart/form-data payloads to process uploaded files.
 *   • Storage destination: diskStorage config.
 *   • Filters file types (jpg/png) and restricts sizes (max 2MB) to prevent bloat.
 *
 * CENTRALIZED EXPRESS ERROR HANDLING
 * ──────────────────────────────────
 *   • Create a custom AppError class inheriting from native Error.
 *   • Express automatically triggers the error middleware when `next(err)` is called.
 *   • Central error middleware formats and responds with consistent JSON schemas.
 *   • `catchAsync` wrapper removes try/catch boilerplates from controllers.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 30)
 * ─────────────────────────
 * ✅  Configured Multer storage destination and file type filters
 * ✅  Created POST /api/startups/:id/cover-image upload endpoint
 * ✅  Served uploaded images statically from /uploads directory
 * ✅  Created AppError class and centralized error middleware
 * ✅  Wrapped async controllers with catchAsync utility
 * ✅  Exposed error tracebacks only under development mode
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/utils/appError.js (new)
 *     Custom operational errors class.
 * • src/utils/catchAsync.js (new)
 *     Global async catcher forwarding exceptions to next middleware.
 * • src/middleware/errorMiddleware.js (new)
 *     central error formatting boundary.
 * • src/routes/startupRoutes.js (modified)
 *     Integrated Multer configurations and route endpoints for image upload.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Implemented JWT authentication and role authorization checks.
 * Today: Completed image uploading, centralized error configurations, and week 6 exercises.
 * Blocker: None.
 */
