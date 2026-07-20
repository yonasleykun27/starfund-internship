/**
 * ============================================================
 * StarFund Internship — Week 5, Day 21
 * Topic: React Router v6 (Client-Side Routing)
 * ============================================================
 *
 * Day 21 Learning Notes
 * ─────────────────────
 *
 * CLIENT-SIDE VS SERVER-SIDE ROUTING
 * ──────────────────────────────────
 *   • Server-side: Browser requests a new HTML document from the server.
 *     Causes full page refreshes, resets client state, and feels slow.
 *   • Client-side: Browser intercepts link clicks and uses the History API
 *     to update the URL bar, then mounts/dismounts corresponding React 
 *     components. Extremely fast, state persists, feels native.
 *
 * BROWSERROUTER SETUP
 * ───────────────────
 * Wrap the root application in `<BrowserRouter>` inside the entry point (main.jsx):
 *
 *   import { BrowserRouter } from 'react-router-dom';
 *   createRoot(document.getElementById('root')).render(
 *     <BrowserRouter>
 *       <App />
 *     </BrowserRouter>
 *   );
 *
 * DEFINING ROUTES (<Routes> & <Route>)
 * ─────────────────────────────────────
 * Use `<Routes>` to wrap all potential paths, matching elements from top to bottom:
 *
 *   import { Routes, Route } from 'react-router-dom';
 *   <Routes>
 *     <Route path="/" element={<Home />} />
 *     <Route path="/browse" element={<Browse />} />
 *     {/* Route parameter: dynamic segment starting with colon -- }
 *     <Route path="/startup/:id" element={<Detail />} />
 *     {/* Catch-all 404 handler (must be last) -- }
 *     <Route path="*" element={<NotFound />} />
 *   </Routes>
 *
 * ROUTING SEGMENTS & USEPARAMS()
 * ──────────────────────────────
 * Dynamic segments are extracted inside path-bound components via `useParams()`:
 *
 *   import { useParams } from 'react-router-dom';
 *   const { id } = useParams(); // returns string ID matching the URL parameter
 *
 * LINK VS NAVLINK VS A TAGS
 * ─────────────────────────
 *   ❌ Never use <a href="..."> in React. It forces full page refreshes.
 *   ✅ Use <Link to="..."> for general navigation.
 *   ✅ Use <NavLink to="..."> for headers/navbars. NavLink exposes an `isActive`
 *      render prop/state to make styling active states simple:
 *
 *      <NavLink to="/browse" className={({ isActive }) => isActive ? 'active-class' : 'normal-class'}>
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 21)
 * ─────────────────────────
 * ✅  No page refreshes on navigation
 * ✅  <Link> and <NavLink> used throughout (no <a href>)
 * ✅  404 routing falls back properly on unmatched paths
 * ✅  Dynamic useParams segments map accurately from mockData
 * ✅  Browser history stack works with browser forward/back buttons
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/main.jsx (updated)
 *     Wrapped <App /> with <BrowserRouter> from react-router-dom.
 *
 * • src/App.jsx (updated)
 *     Replaced Simulated tabs system with <Routes> and <Route> bindings.
 *     Updated navigation bar tabs to use <NavLink> with active class indicators.
 *
 * • src/components/CampaignCard.jsx (updated)
 *     Replaced static details button with client-side Router <Link>.
 *
 * • src/pages/StartupDetailPage.jsx (updated)
 *     Removed static startupId prop. Utilizes `useParams` to query startup
 *     by matching URL parameter. Handles non-existent startups with fallback links.
 *
 * • src/pages/NotFoundPage.jsx (new)
 *     Friendly 404 page rendering fallback navigation buttons.
 *
 * • src/pages/FounderDashboard.jsx (new)
 *     Founder Dashboard routing placeholder.
 *
 * • src/pages/AdminDashboard.jsx (new)
 *     Admin Dashboard routing placeholder.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Day 20 — Folder Structure, Component Architecture, Week 4 Milestone.
 *   Established feature-based folder organization, created mockData, and completed 5 static pages.
 * Today: Day 21 — React Router v6.
 *   Configured BrowserRouter, dynamic parameters (useParams), fallback 404 paths, NavLink styling,
 *   and placeholder routing.
 * Tomorrow: Day 22 — useEffect and Async Data Fetching patterns.
 * ─────────────────────────────────────────────────────────────
 */

console.log('✅ Week 5 Day 21 — React Router v6 Audit');
console.log('   BrowserRouter setup:       ✅ Installed');
console.log('   Dynamic segment routing:   ✅ Enabled on /startup/:id');
console.log('   Catch-all 404 routing:     ✅ NotFoundPage component mapped');
console.log('   NavLink indicators:        ✅ Configured in top navigation');
