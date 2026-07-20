# Week 5: Advanced React & StarFund Frontend

This folder contains the daily assignments, dashboards, custom hooks, and practical exercises for Week 5 of the StarFund Internship.

## Day 21 — React Router v6 (Completed)

Integrates client-side page routing to compose the page flows of the StarFund application.

### Files Included:
*   **[day21.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/day21.js)**: Detailed learning notes covering BrowserRouter, Link vs NavLink, useParams hooks, and 404 page routing.
*   **[starfund-react/src/App.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/App.jsx)**: Set up client-side routes for `/`, `/browse`, `/startup/:id`, `/login`, `/register`, `/founder/dashboard`, `/admin/dashboard`, and `/exercises`.
*   **[starfund-react/src/pages/NotFoundPage.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/pages/NotFoundPage.jsx)**: Handles non-existent paths with clean navigation buttons.

---

## Day 22 — useEffect & Data Fetch pattern (Completed)

Focuses on simulating asynchronous data loading, spinners, and cleanup hooks to prevent memory leaks.

### Files Included:
*   **[day22.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/day22.js)**: Learning notes covering dependency arrays, cleanups, and the loading/error/data 3-state pattern.
*   **[starfund-react/src/components/LoadingSpinner.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/components/LoadingSpinner.jsx)**: Reusable animated loader component.
*   **[starfund-react/src/pages/StartupDetailPage.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/pages/StartupDetailPage.jsx)**: Simulates 1s loading state from mock database with cleanup functions on unmount.

---

## Day 23 — Forms & Validation (Completed)

Controlled form bindings and validation checks for user inputs on blur and submit.

### Files Included:
*   **[day23.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/day23.js)**: Logs on controlled state handlers, validation rules, and error displaying.
*   **[starfund-react/src/pages/CreateStartupPage.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/pages/CreateStartupPage.jsx)**: New founder campaign listing form with full validation.

---

## Day 24 — Custom Hooks & Context API (Completed)

Extracts reusable stateful logic and establishes the global application session.

### Files Included:
*   **[day24.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/day24.js)**: Study logs on custom hook structure rules and global React Context patterns.
*   **[starfund-react/src/hooks/useForm.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/hooks/useForm.js)**: Form validation and state management.
*   **[starfund-react/src/hooks/useLocalStorage.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/hooks/useLocalStorage.js)**: State synchronizer in browser storage.
*   **[starfund-react/src/context/AuthContext.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/context/AuthContext.jsx)**: Global Auth context containing currentUser credentials.

---

## Day 25 — Secured Dashboards & Role Protection (Completed)

Role-based router guards, dashboard analytics, and platform controls.

### Files Included:
*   **[day25.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/day25.js)**: Logs detailing protected routes design and Recharts integration.
*   **[starfund-react/src/components/ProtectedRoute.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/components/ProtectedRoute.jsx)**: Intercepts guests.
*   **[starfund-react/src/components/RoleRoute.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/components/RoleRoute.jsx)**: Verifies role access privileges.
*   **[starfund-react/src/pages/FounderDashboard.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/pages/FounderDashboard.jsx)**: Campaign analytics (Recharts AreaChart), backer roster, and live updates publisher.
*   **[starfund-react/src/pages/AdminDashboard.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/pages/AdminDashboard.jsx)**: User roster table and pending campaign compliance queue.

---

## Practical Exercises 21–25 (Completed)

1.  **Ex 21 (`useDebounce`):** Debounces search query inputs on the Browse page by 400ms inside [BrowsePage.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/components/BrowsePage.jsx).
2.  **Ex 22 (`Pagination`):** Splits Browse campaigns into pages of 6, displaying numbers and navigation triggers.
3.  **Ex 23 (`Sort dropdown`):** Sorts startup cards dynamically by funding %, founded year, or goal target.
4.  **Ex 24 (`Notification Bell`):** Context-backed notification drawer with bell badge counting unread items inside [NotificationContext.jsx](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/context/NotificationContext.jsx).
5.  **Ex 25 (`useSidebar`):** Collapsible sliding mobile sidebar drawer triggered by a hamburger button on smaller screens inside [useSidebar.js](file:///c:/Users/Yonas/Desktop/starfund-internship/week5/starfund-react/src/hooks/useSidebar.js).
