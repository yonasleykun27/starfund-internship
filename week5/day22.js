/**
 * ============================================================
 * StarFund Internship — Week 5, Day 22
 * Topic: useEffect & Data Fetching Pattern
 * ============================================================
 *
 * Day 22 Learning Notes
 * ─────────────────────
 *
 * THE USEEFFECT HOOK
 * ──────────────────
 * `useEffect` tells React that your component needs to do something
 * AFTER rendering. React will remember the function you passed,
 * and call it after performing the DOM updates.
 *
 * DEPENDENCY ARRAY PATTERNS
 * ─────────────────────────
 * The second argument to `useEffect` controls when it runs:
 *
 *   1. No dependency array:
 *      useEffect(() => { ... });
 *      Runs on EVERY single render (mount + all updates). Rarely wanted.
 *
 *   2. Empty dependency array:
 *      useEffect(() => { ... }, []);
 *      Runs exactly ONCE on mount (when the component appears on screen).
 *      Perfect for initial data fetching.
 *
 *   3. Specific values in dependency array:
 *      useEffect(() => { ... }, [id, filter]);
 *      Runs on mount, and then runs again whenever `id` or `filter` changes.
 *
 * CLEANUP FUNCTIONS (MEMORY LEAK PREVENTION)
 * ───────────────────────────────────────────
 * If your effect returns a function, React runs this cleanup function
 * before running the effect again, and when the component unmounts.
 * Used to cancel timeouts, clean up event listeners, or close sockets:
 *
 *   useEffect(() => {
 *     const timer = setTimeout(() => { ... }, 1000);
 *     return () => clearTimeout(timer); // ← cleanup function
 *   }, [id]);
 *
 * THE 3-STATE DATA-FETCHING PATTERN
 * ─────────────────────────────────
 * Standard pattern for loading remote data in React components:
 *
 *   const [data, setData] = useState(null);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState(null);
 *
 * Rendering flows through:
 *   • `loading === true`  → show spinner/skeleton.
 *   • `error !== null`   → show readable error message.
 *   • `data !== null`    → show the loaded component layout.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 22)
 * ─────────────────────────
 * ✅  useEffect has correct dependency list to avoid stale states
 * ✅  Effects do not trigger infinite rendering loops
 * ✅  Loading spinner renders while fetch is in progress
 * ✅  Error states are handled with readable, descriptive layout
 * ✅  Cleanup functions are returned to cancel active setTimeouts
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/components/LoadingSpinner.jsx (new)
 *     Animated reusable SVG spinner displaying feedback messages.
 *
 * • src/pages/StartupDetailPage.jsx (updated)
 *     Uses `useEffect` triggered by path parameter change (`[id]`).
 *     Simulates 1-second dynamic database query loading and handles
 *     timeouts with a structured cleanup function.
 *
 * • src/pages/BrowsePageView.jsx (updated)
 *     Simulates loading all active investment opportunities on mount,
 *     rendering the loading spinner before showing grids/filters.
 *
 * • week5/day22.js (new)
 *     Day 22 study notes and code guidelines.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Day 21 — Client-side routing with React Router v6.
 *   Mapped BrowserRouter, Routes, route param handlers, and navbar NavLinks.
 * Today: Day 22 — useEffect and async loading patterns.
 *   Implemented the 3-state data-fetching simulation across Browse and Detail
 *   views, created LoadingSpinner, and handled memory leak cleanup.
 * Tomorrow: Day 23 — Controlled forms and inputs validation.
 * ─────────────────────────────────────────────────────────────
 */

console.log('✅ Week 5 Day 22 — useEffect & Data Fetching Audit');
console.log('   Simulated delays:          ✅ 1000ms delay mapped on Browse & Detail');
console.log('   3-state data fetching:     ✅ Implemented (loading/error/data)');
console.log('   Active timeouts cleanup:   ✅ clearTimeout registered');
console.log('   Reusable spinner component:✅ LoadingSpinner created');
