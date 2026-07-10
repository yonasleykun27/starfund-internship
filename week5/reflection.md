# Week 5 Reflection — Advanced React & Dashboards

This week elevated our React development skills to a professional level. We transitioned from building isolated stateful components to establishing a complete client-side application architecture with authentication states, role-based page protection, dynamic data visualization, and advanced custom hooks.

---

## 🔑 Key Learnings & Breakthroughs

### 1. Client-Side Routing & Router Guarding
- **Client-Side Routing:** Mapped nested routes under React Router v6 (`BrowserRouter`, `Routes`, `Route`), utilizing `useParams` to fetch campaign data dynamically from mock sources based on path keys.
- **Router Guards:** Developed custom `<ProtectedRoute>` and `<RoleRoute>` wrapper components. They successfully intercept unauthorized navigations, protecting sensitive founder dashboards and admin rosters with automatic fallback redirects.

### 2. Global State & Session Persistence (Context API)
- Lifted user session management to a unified React Context (`AuthProvider`), allowing headers and pages to consume auth states seamlessly via `useAuth()`.
- Coupled context with a custom `useLocalStorage` hook to persist logged-in profiles and theme presets across browser tab reloads.

### 3. Reusable Hooks & Form Management
- **`useForm`:** Standardized input tracking, onBlur validations, and submission error handling into a generic hook, removing repetitive form boilers from register, login, and campaign launch pages.
- **`useDebounce`:** Debounced campaign query string searches by 400ms to eliminate redundant list filtering computations.

### 4. Interactive custom Dashboards
- **Founder Dashboard:** Built key stat cards, campaign timelines using **Recharts AreaCharts**, and update modal forms. Updates append immediately to a local updates feed state showing real-time feedback.
- **Admin Dashboard:** Features platform-wide statistics (e.g. total investments), a user roster table, and a pending startup verification list with interactive approve/reject handlers.

---

## 📈 Growth & Future Outlook
Week 5 successfully closed the frontend milestone of **StarFund**. We built a polished, highly responsive, and robust React application following modern design guidelines. 

Next, we look forward to **Week 6 (Backend development with Express.js)**, where we will transition from simulated data-loading states to building scalable REST APIs and handling real database transactions! 🚀
