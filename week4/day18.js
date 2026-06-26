/**
 * ============================================================
 * StarFund Internship — Week 4, Day 18
 * Topic: Props & Component Composition
 * ============================================================
 *
 * Day 18 Learning Notes
 * ─────────────────────
 * Today we focused on building clean component trees via component
 * composition. Instead of writing massive monolithic components,
 * we broke down complex interfaces into small, single-purpose
 * components that are composed together.
 *
 * KEY CONCEPTS STUDIED
 * ─────────────────────
 * 1. PROPS ARE READ-ONLY (IMMUTABLE)
 *    - Data flows one way: from parent to child (top-down).
 *    - A component must never modify its own props. If data needs to
 *      change, the state should reside in the parent and be modified
 *      via callback functions passed as props.
 *
 * 2. COMPONENT COMPOSITION
 *    - Composing simple elements into larger structures.
 *    - Benefits: code reuse, separation of concerns, ease of testing.
 *    - E.g., `<CampaignCard>` contains and renders a `<Badge>` and a `<ProgressBar>`.
 *
 * 3. PASSING CALLBACK FUNCTIONS
 *    - Standard pattern to communicate state changes from child back
 *      to parent: the parent passes a function (e.g. `onChange`) as
 *      a prop, and the child calls it when an event occurs.
 *
 * ─────────────────────────────────────────────────────────────
 * PRACTICAL TASKS COMPLETED TODAY
 * ─────────────────────────────────────────────────────────────
 *  ✅ Built `<Badge status="active" />` to render various color-coded status pills.
 *  ✅ Built `<ProgressBar percentage={pct} />` as a reusable component.
 *  ✅ Refactored `<CampaignCard />` to embed and utilize `<Badge>` and `<ProgressBar>`.
 *  ✅ Created search and filter elements: `<SearchBar />` and `<FilterBar />`.
 *  ✅ Built `<CampaignGrid />` mapping campaigns or showing an Empty State.
 *  ✅ Designed and implemented `<BrowsePage />` composing Search, Filter, and Grid
 *     components with dynamic filtration logic in parent state.
 *  ✅ Connected all composed components inside App.jsx.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────────────────────────────────────────────────────
 *  Yesterday I completed: stateful FundingProgress and FollowButton components.
 *  Today I will: Study composition, build Badge and ProgressBar, and compose the Search/Filter BrowsePage.
 *  My blocker is: None. Managing filtration logic in the parent page and keeping inputs controlled worked perfectly.
 */

const DAY_18_CONCEPTS = {
  composition: "Combining simple, modular components to build complex user interfaces.",
  oneWayDataFlow: "Data flows downward from parents to children via props; actions flow upward via callback functions.",
  immutability: "Props cannot be changed by the child component that receives them.",
  controlledComponents: "Form elements whose value is controlled by React state."
};

console.log("=============================================");
console.log("StarFund Internship — Week 4, Day 18 Log");
console.log("=============================================");
console.log("Composition Concepts:", Object.keys(DAY_18_CONCEPTS).join(" | "));
console.log("Completed: Reusable Badge, ProgressBar, SearchBar, FilterBar, CampaignGrid and composed BrowsePage.");
console.log("=============================================");
