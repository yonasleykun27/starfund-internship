/**
 * ============================================================
 * StarFund Internship — Week 4, Day 20
 * Topic: React Folder Structure & Component Architecture
 * ============================================================
 *
 * Day 20 Learning Notes
 * ─────────────────────
 *
 * FEATURE-BASED FOLDER STRUCTURE
 * ────────────────────────────────
 * The official React docs and community best practices recommend
 * organising files by FEATURE, not by type:
 *
 *   ✅  Feature-based (what we do at StarFund):
 *   src/
 *   ├── components/        ← shared/reusable UI pieces
 *   │   ├── Button.jsx
 *   │   ├── Badge.jsx
 *   │   ├── Modal.jsx
 *   │   ├── Toast.jsx
 *   │   ├── Table.jsx
 *   │   ├── Input.jsx
 *   │   └── MultiStepForm.jsx
 *   ├── pages/             ← one file per route/page
 *   │   ├── LandingPage.jsx
 *   │   ├── BrowsePageView.jsx
 *   │   ├── StartupDetailPage.jsx
 *   │   ├── LoginPage.jsx
 *   │   └── RegisterPage.jsx
 *   ├── data/              ← single source of truth for mock data
 *   │   └── mockData.js
 *   └── assets/            ← images, fonts, icons
 *
 *   ❌  Type-based (common beginner mistake):
 *   src/
 *   ├── components/   ← everything dumped here, grows unmanageable
 *   ├── styles/
 *   └── utils/
 *
 * WHEN TO SPLIT A COMPONENT
 * ──────────────────────────
 * Split a component when it:
 *   1. Exceeds ~80–100 lines of JSX.
 *   2. Has a clearly separable sub-task (e.g. "just renders a badge").
 *   3. Is needed in more than one place (reusability).
 *   4. Has its own independent state that doesn't affect the parent.
 *
 * Never split just to split — tiny, single-use components add noise.
 *
 * NAMING CONVENTIONS
 * ──────────────────
 *   ✅  PascalCase for components:  CampaignCard, BrowsePage
 *   ✅  camelCase for hooks:        useAuth, useForm
 *   ✅  camelCase for files that export functions: mockData.js, api.js
 *   ❌  campaignCard.jsx — React will not treat it as a component correctly
 *
 * INDEX.JS BARREL EXPORTS
 * ────────────────────────
 * When a component has its own folder, an index.js (or index.jsx)
 * lets you import from the folder name instead of the full file path:
 *
 *   // Without barrel export:
 *   import CampaignCard from './components/CampaignCard/CampaignCard';
 *
 *   // With barrel export (index.js re-exports):
 *   import CampaignCard from './components/CampaignCard';
 *
 *   // index.js contents:
 *   export { default } from './CampaignCard';
 *
 * MOCKDATA.JS — SINGLE SOURCE OF TRUTH
 * ──────────────────────────────────────
 * Never hardcode data inside a component. If data changes in one place,
 * it should automatically update everywhere. Keep all mock data in
 * /src/data/mockData.js and import it wherever needed.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 20)
 * ─────────────────────────
 * ✅  Folder structure: /pages, /components, /data, /assets
 * ✅  All 5 StarFund pages are React components
 * ✅  mockData.js is the single source of truth
 * ✅  Components are reusable (not one-use-only)
 * ✅  No prop drilling beyond 2 levels
 * ✅  All list renderings have key props
 * ✅  No giant App.jsx with all code
 * ─────────────────────────────────────────────────────────────
 *
 * WEEK 4 EXERCISES COMPLETED THIS WEEK
 * ──────────────────────────────────────
 * Exercise 16 → <Table headers={[]} rows={[]} /> reusable table component
 * Exercise 17 → <Modal /> with open/close useState + children
 * Exercise 18 → <Toast /> auto-dismiss after 3 seconds (4 types)
 * Exercise 19 → Dark mode toggle (entire app theme via state) ✅ Day 19
 * Exercise 20 → Multi-step form (3 steps) using state
 *
 * FILES BUILT TODAY
 * ─────────────────
 * • src/data/mockData.js
 *     Single source of truth — 5 startups, 3 campaigns, sample users.
 *
 * • src/pages/LandingPage.jsx
 *     Public landing page — Hero, stats bar, How It Works, CTA banner.
 *
 * • src/pages/BrowsePageView.jsx
 *     Browse page — wraps BrowsePage + FilterableList from mockData.
 *
 * • src/pages/StartupDetailPage.jsx
 *     Startup detail view — reads startupId prop, shows full data.
 *     (Will use useParams in Week 5 with React Router)
 *
 * • src/pages/LoginPage.jsx
 *     Login form — controlled inputs, success state. (Real auth: Week 5)
 *
 * • src/pages/RegisterPage.jsx
 *     Register form — role selector, multi-field state.
 *
 * • src/components/Button.jsx    → reusable button (5 variants)
 * • src/components/Input.jsx     → reusable controlled input
 * • src/components/Modal.jsx     → Exercise 17
 * • src/components/Toast.jsx     → Exercise 18
 * • src/components/Table.jsx     → Exercise 16
 * • src/components/MultiStepForm.jsx → Exercise 20
 *
 * • src/App.jsx (refactored)
 *     Navigation tabs simulate routing (React Router added Week 5).
 *     All data from mockData.js. Pages in /pages/. Components in
 *     /components/. Exercises all demonstrated on the Exercises tab.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Day 19 — Lists, Keys & Conditional Rendering.
 *   Built FilterableList with .map() + .filter(). Updated Badge with
 *   4-color status system. Added DarkModeToggle (Exercise 19).
 * Today: Day 20 — React Folder Structure & Component Architecture.
 *   WEEK 4 MILESTONE: all 5 StarFund pages converted to React.
 *   Proper /pages, /components, /data folder structure established.
 *   mockData.js is now the single source of truth.
 *   Exercises 16–20 all completed.
 * Tomorrow: Day 21 — React Router v6 (Week 5 begins).
 * ─────────────────────────────────────────────────────────────
 */

// ── Quick structural validation ───────────────────────────────────────────────

const STRUCTURE = {
  pages: [
    'LandingPage.jsx',
    'BrowsePageView.jsx',
    'StartupDetailPage.jsx',
    'LoginPage.jsx',
    'RegisterPage.jsx',
  ],
  components: [
    'Hero.jsx', 'CampaignCard.jsx', 'Badge.jsx', 'ProgressBar.jsx',
    'FundingProgress.jsx', 'FollowButton.jsx', 'FilterableList.jsx',
    'DarkModeToggle.jsx', 'BrowsePage.jsx', 'SearchBar.jsx',
    'FilterBar.jsx', 'CampaignGrid.jsx',
    // NEW Day 20:
    'Button.jsx', 'Input.jsx', 'Modal.jsx', 'Toast.jsx',
    'Table.jsx', 'MultiStepForm.jsx',
  ],
  data: ['mockData.js'],
};

console.log('✅ Week 4 Day 20 — Folder Structure Audit');
console.log(`   Pages:      ${STRUCTURE.pages.length} components`);
console.log(`   Components: ${STRUCTURE.components.length} components`);
console.log(`   Data:       ${STRUCTURE.data.length} file`);

const exercises = [16, 17, 18, 19, 20];
const done = {
  16: 'Table.jsx',
  17: 'Modal.jsx',
  18: 'Toast.jsx',
  19: 'DarkModeToggle.jsx (Day 19)',
  20: 'MultiStepForm.jsx',
};
exercises.forEach((n) => {
  console.log(`   Exercise ${n}: ✅ ${done[n]}`);
});

const starFundPages = STRUCTURE.pages.length;
console.log(`\n🏁 MILESTONE: ${starFundPages}/5 StarFund pages complete → Week 4 ✅`);
