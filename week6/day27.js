/**
 * ============================================================
 * StarFund Internship — Week 6, Day 27
 * Topic: MVC Controllers & Route Architecture
 * ============================================================
 *
 * Day 27 Learning Notes
 * ─────────────────────
 *
 * MODEL-VIEW-CONTROLLER (MVC)
 * ───────────────────────────
 *   • Controller contains the business logic to handle requests and return responses.
 *   • Route definitions only bind endpoints to corresponding controllers.
 *   • Decoupling routing from implementations makes code clean and maintainable.
 *
 * RESTFUL PATH CONVENTIONS & STATUS CODES
 * ────────────────────────────────────────
 *   • GET /api/resources -> Retrieve all resources (200 OK)
 *   • GET /api/resources/:id -> Retrieve one resource by ID (200 OK or 404 Not Found)
 *   • POST /api/resources -> Create a new resource (201 Created)
 *   • PUT /api/resources/:id -> Update a resource (200 OK)
 *   • DELETE /api/resources/:id -> Delete a resource (200 OK or 204 No Content)
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 27)
 * ─────────────────────────
 * ✅  Created subfolders: /controllers and /routes
 * ✅  Built full startups CRUD: list, get, create, update, delete
 * ✅  Built auth controllers and routes (register, login, me placeholders)
 * ✅  Built campaigns controllers and routes (launch, get campaigns)
 * ✅  Built investments controllers and routes (fund, get portfolio)
 * ✅  Built updates controllers and routes (post update, get updates)
 * ✅  Built admin controllers and routes (list users, verify startup)
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/controllers/ (new folder)
 *     Created controllers: auth, startup, campaign, investment, update, admin.
 * • src/routes/ (new folder)
 *     Created routing definitions for auth, startup, campaign, investment, update, admin.
 * • src/app.js (modified)
 *     Connected all route routers dynamically to the primary application route context.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Built Express foundations, app.js and health checks.
 * Today: Established StarFund MVC router-to-controller modular architectures.
 * Blocker: None.
 */
