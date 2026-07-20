# Week 6: Node.js, Express & REST APIs

This directory contains the daily learning logs, architectural designs, and complete backend implementation of the StarFund crowdfunding REST API for Week 6 of the StarFund Internship.

---

## Daily Assignments Completed

### Day 26 — Node.js & Express Foundations
Builds the base Node server, environment setups, and first routes.
*   **[day26.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/day26.js)**: Learning notes covering V8 engines, package.json scripts, and server loops.
*   **[src/server.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/server.js)**: Launcher listening on port 5000 with error recovery.
*   **[src/app.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/app.js)**: Entry application setup with base health routes.

### Day 27 — MVC Routes & Controllers
decouples route schemas from controllers inside isolated directories.
*   **[day27.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/day27.js)**: MVC design pattern study notes.
*   **[src/controllers/](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/controllers/)**: Controllers implementing all CRUD actions for Auth, Startups, Campaigns, Investments, Updates, and Admin features using a mock JSON database.
*   **[src/routes/](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/routes/)**: Routing specifications matching REST rules.

### Day 28 — Middleware & Validation
Validates request body inputs prior to route logic execution.
*   **[day28.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/day28.js)**: Validation and middleware lifecycle notes.
*   **[src/middleware/validation.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/middleware/validation.js)**: Validation check definitions using express-validator.
*   **[src/middleware/logger.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/middleware/logger.js)**: Custom request elapsed timer logger.

### Day 29 — JWT Authentication & Security
Establishes user session authorizations via secure tokens.
*   **[day29.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/day29.js)**: Cryptography and token session notes.
*   **[src/middleware/authMiddleware.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/middleware/authMiddleware.js)**: Bearer JWT validation protect and role guard restrictive checks.

### Day 30 — Multer, Error Handlers, and Final Refinements
Adds file uploads and standardized error messaging.
*   **[day30.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/day30.js)**: Multer disk storage config and global boundary error handling notes.
*   **[src/utils/appError.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/utils/appError.js)**: Custom app operational error class.
*   **[src/middleware/errorMiddleware.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/middleware/errorMiddleware.js)**: Central error formatter.
*   **[src/utils/catchAsync.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/utils/catchAsync.js)**: Boilerplate catcher wrapper.

---

## Practical Exercises 26–30 Completed

1.  **Ex 26 (Rate Limiting):** A custom rate limiting middleware inside [rateLimiter.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/middleware/rateLimiter.js) that intercepts requests and blocks an IP if it makes more than 10 requests in 60 seconds (returns 429).
2.  **Ex 27 (JSON Seeder):** Database configuration module [db.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/config/db.js) and seeder script [seeder.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/src/utils/seeder.js) generating and loading pre-hashed mock records on server start.
3.  **Ex 28 (Advanced Startup Search):** Implemented search, sector filtering, pagination, and funding percentage sorting directly in the startups list controller.
4.  **Ex 29 (Request File Logger):** Writes timestamps, HTTP methods, route paths, status codes, and response times directly to the log file `logs/access.log`.
5.  **Ex 30 (Postman API Tests Collection):** Formatted Postman collection file [starfund-api-tests.json](file:///c:/Users/Yonas/Desktop/starfund-internship/week6/starfund-backend/starfund-api-tests.json) mapping requests and tests for all 15 platform endpoints.

---

## Setup & Starting Instructions

### 1. Installation
Navigate to backend directory and install package dependencies:
```bash
cd week6/starfund-backend
npm install
```

### 2. Seeding Data
Execute database seeder to initialize the mock dataset:
```bash
node src/utils/seeder.js
```

### 3. Start Development Server
Run the local nodemon auto-reloading development server:
```bash
npm run dev
```
The server will boot and run on: `http://localhost:5000`
You can verify the backend is active by visiting: `http://localhost:5000/health`
