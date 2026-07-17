# Week 6 Reflection — Node.js, Express & REST APIs

## 1. What I Did This Week

This week, I shifted focus from frontend client-side components to backend server development. I successfully built the entire REST API backend for the **StarFund** platform from scratch:
*   **Express server foundations**: Configured standard Node.js server architectures, listening on port 5000, and initialized package dependency mappings (CORS, Morgan, dotenv).
*   **MVC route & controller architectures**: Structured the project code into isolated controllers and route bindings for Auth, Startups, Campaigns, Investments, Updates, and Admin features, resolving the entire 15+ REST API list.
*   **Validation middleware**: Designed custom request timing loggers, rate-limiting interceptors, and strict input assertions using `express-validator` across all POST/PUT routes (such as checking sector limits and positive goal targets).
*   **JWT session security**: Implemented cryptographic password storage using bcrypt hashes, built stateless session decoders using Bearer JWT tokens, and established role authorization checks guarding mutating admin and founder endpoints.
*   **Multer uploads & central error handling**: Configured Multer disk storage and file type limits (JPG/PNG only, max 2MB) for startup cover images, served uploads statically, and built centralized error-catching middlewares using custom AppError and catchAsync helpers.

---

## 2. Technical Challenges & Solutions

### A. Implementing Stateless Rate Limiting from Scratch
*   **Challenge**: For Exercise 26, I needed to block any IP address making more than 10 requests within a 60-second window. I wanted to build this from scratch without relying on external packages.
*   **Solution**: I created an in-memory dictionary to store arrays of request timestamps keyed by client IP addresses. For each incoming request, the middleware filters out timestamps older than 60 seconds, checks the remaining count, blocks requests with 429 if the count exceeds 10, and appends the current timestamp otherwise.

### B. Standardizing Multipart Upload Errors
*   **Challenge**: When Multer rejects files based on mimetype or size limits, it throws native errors that bypass the controllers, potentially resulting in raw text output instead of structured JSON responses.
*   **Solution**: By registering the centralized error handler at the end of the middleware pipeline, I successfully captured all Multer exceptions, wrapped them into AppError objects inside the centralized error formatter, and returned consistent JSON payloads (`{ success: false, message }`).

---

## 3. Key Concepts Learned

*   **Stateless Authentication (JWT)**: Replaced cookies and server sessions with cryptographically signed JSON Web Tokens. Learning that the token payload can be decoded by the client but is tamper-proof due to the server signature was a major highlight.
*   **Separation of Concerns in MVC**: Binds route endpoints strictly to route descriptors, keeping controller implementations modular and testable.
*   **Bcrypt Hashing**: Understood how slow-hashing algorithms and random salts protect passwords from dictionary and rainbow table attacks.
