/**
 * ============================================================
 * StarFund Internship — Week 4, Day 19
 * Topic: Lists, Keys & Conditional Rendering
 * ============================================================
 *
 * Day 19 Learning Notes
 * ─────────────────────
 *
 * RENDERING LISTS WITH .map()
 * ───────────────────────────
 * React renders arrays of JSX elements naturally. The idiomatic
 * way to produce a list of elements from an array is .map():
 *
 *   const items = ['a', 'b', 'c'];
 *   return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
 *
 * THE key PROP — WHY IT MATTERS
 * ──────────────────────────────
 * React uses key to reconcile the virtual DOM with the real DOM.
 * Without unique keys, React cannot efficiently detect insertions,
 * deletions, or reorders — leading to subtle bugs and degraded
 * performance.
 *
 * Rules:
 *   ✅  key must be UNIQUE among siblings.
 *   ✅  key must be STABLE (same value across re-renders).
 *   ❌  NEVER use the array index as key — order can change.
 *   ❌  NEVER use Math.random() — changes every render.
 *
 *   // ✅ Correct
 *   startups.map(s => <CampaignCard key={s.id} startup={s} />)
 *
 *   // ❌ Wrong — index as key
 *   startups.map((s, i) => <CampaignCard key={i} startup={s} />)
 *
 * LIST FILTERING IN JSX
 * ─────────────────────
 * Filter the array BEFORE mapping. This keeps the JSX clean:
 *
 *   const active = startups.filter(s => s.status === 'active');
 *   return active.map(s => <CampaignCard key={s.id} startup={s} />);
 *
 * Or inline (when the source is short):
 *   startups
 *     .filter(s => s.status === activeFilter)
 *     .map(s => <CampaignCard key={s.id} startup={s} />)
 *
 * CONDITIONAL RENDERING — 3 PATTERNS
 * ────────────────────────────────────
 *
 * 1. TERNARY OPERATOR — two outcomes:
 *    {isLoading ? <Spinner /> : <DataTable />}
 *
 * 2. && SHORT-CIRCUIT — single optional element:
 *    {error && <ErrorBanner message={error} />}
 *    NOTE: avoid '0 && ...' bug — always convert to boolean if needed:
 *    {count > 0 && <Badge count={count} />}
 *
 * 3. if / switch OUTSIDE JSX — for complex logic:
 *    const badge = getBadge(status); // returns JSX or null
 *    return <div>{badge}</div>;
 *
 * CONDITIONAL CLASS NAMES
 * ────────────────────────
 * Use template literals (backtick strings) to build class strings:
 *
 *   const cls = isActive
 *     ? 'bg-amber-400 text-slate-950'
 *     : 'bg-slate-800 text-slate-400';
 *   return <button className={`px-4 py-2 ${cls}`}>...</button>;
 *
 * For complex cases, consider the 'clsx' or 'classnames' library.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 19)
 * ─────────────────────────
 * ✅  key prop on every .map() item
 * ✅  key uses stable unique id, NOT array index
 * ✅  Empty state message renders when filtered list is empty
 * ✅  Ternary used for two-branch conditional rendering
 * ✅  && used for single optional elements
 * ✅  Conditional class names built with template literals
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT TODAY
 * ─────────────────
 * • week4/starfund-react/src/components/FilterableList.jsx
 *     Practical task: renders startup cards from an array, filters
 *     by status, shows 'No campaigns found' empty state.
 *
 * • week4/starfund-react/src/components/Badge.jsx  (updated)
 *     Daily Assignment: status badge system — yellow=pending,
 *     green=active, blue=funded, red=rejected. Each card displays
 *     the correct badge dynamically via conditional class names.
 *
 * • week4/starfund-react/src/components/DarkModeToggle.jsx
 *     Exercise 19: stateless toggle component. Parent (App) owns
 *     isDark state. Receives onToggle as a function prop. Conditionally
 *     renders sun/moon icon based on isDark boolean prop.
 *
 * • week4/starfund-react/src/App.jsx  (updated)
 *     isDark state lifted to root. Passes theme classes and toggle
 *     callback down to DarkModeToggle. FilterableList rendered below
 *     the Day 18 BrowsePage section.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Completed Day 18 — Props & Component Composition.
 *   Built Badge, ProgressBar, SearchBar, FilterBar, CampaignGrid,
 *   and BrowsePage composing them all.
 * Today: Lists, Keys & Conditional Rendering.
 *   Built FilterableList with .map() + .filter() + ternary empty
 *   state. Updated Badge with the full 4-color status system.
 *   Added dark mode toggle (Exercise 19) with state lifted to App.
 * Tomorrow: React Folder Structure & Component Architecture (Day 20).
 * ─────────────────────────────────────────────────────────────
 */

// ── Quick validation: demonstrate filtering + empty array logic ───────────────

const MOCK = [
  { id: 1, name: 'AgroSense AI',       status: 'active'   },
  { id: 2, name: 'Hawassa Solar Grid', status: 'funded'   },
  { id: 3, name: 'MedLink',            status: 'pending'  },
  { id: 4, name: 'EthioLoop',          status: 'active'   },
  { id: 5, name: 'SafariGo',           status: 'rejected' },
];

// Filter: only show 'active' campaigns
const active = MOCK.filter(s => s.status === 'active');
console.log('Active campaigns:', active.map(s => s.name));
// → ['AgroSense AI', 'EthioLoop']

// Empty state: filter that matches nothing
const noResults = MOCK.filter(s => s.status === 'closed');
console.log('Empty filter returns:', noResults.length === 0 ? 'No campaigns found ✅' : noResults);

// Key validation: using id, not index
const keys = MOCK.map(s => s.id);
const hasNoDuplicateKeys = new Set(keys).size === keys.length;
console.log('All keys unique:', hasNoDuplicateKeys ? '✅' : '❌');

// Conditional class names example
const getStatusClass = (status) => {
  const map = {
    active:   'green',
    pending:  'yellow',
    funded:   'blue',
    rejected: 'red',
  };
  return map[status] ?? 'grey';
};

MOCK.forEach(s => {
  console.log(`  ${s.name} → ${getStatusClass(s.status)} badge`);
});
