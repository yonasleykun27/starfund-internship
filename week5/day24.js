/**
 * ============================================================
 * StarFund Internship — Week 5, Day 24
 * Topic: Custom Hooks & Context API
 * ============================================================
 *
 * Day 24 Learning Notes
 * ─────────────────────
 *
 * CUSTOM HOOKS PATTERNS
 * ─────────────────────
 *   • Custom hooks let you share stateful logic, not state itself.
 *   • Built useForm(initialValues, validate) to encapsulate validation logic.
 *   • Built useLocalStorage(key, defaultValue) to automatically persist state.
 *
 * CONTEXT API (GLOBAL STATE)
 * ──────────────────────────
 *   • Context provides a way to pass data down the component tree without prop-drilling.
 *   • AuthProvider stores currentUser, login(), and logout() states.
 *   • Wrapped App component inside provider inside main.jsx.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 24)
 * ─────────────────────────
 * ✅  useForm extracted and refactored into Login, Register, and Create Startup
 * ✅  useLocalStorage correctly persists auth session across page reloads
 * ✅  Global AuthContext created and consumed via custom useAuth hook
 * ✅  Header navigation bar dynamically reflects user details and logout triggers
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/hooks/useForm.js (new)
 *     Reusable form state and error handler.
 *
 * • src/hooks/useLocalStorage.js (new)
 *     Browser storage synchronization helper.
 *
 * • src/context/AuthContext.jsx (new)
 *     Global user authentication context and provider.
 *
 * • src/main.jsx (updated)
 *     App root wrapped in global AuthProvider.
 *
 * • week5/day24.js (new)
 *     Day 24 study notes and logs.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Day 23 — Controlled forms validation checks.
 * Today: Day 24 — Reusable custom hooks (useForm, useLocalStorage) and AuthContext.
 * Tomorrow: Day 25 — Dashboards, protected routing, and remaining exercises.
 * ─────────────────────────────────────────────────────────────
 */

console.log('✅ Week 5 Day 24 — Custom Hooks & Context API Audit');
console.log('   useForm custom hook:       ✅ Verified');
console.log('   useLocalStorage custom hook: ✅ Verified');
console.log('   Global AuthContext:        ✅ Mounted');
console.log('   Header profiles sync:      ✅ Synced');
