/**
 * ============================================================
 * StarFund Internship — Week 4, Day 17
 * Topic: State with useState
 * ============================================================
 *
 * Day 17 Learning Notes
 * ─────────────────────
 * Today we focused on dynamic data management inside components
 * using React's `useState` hook, enabling components to respond to
 * user interactions and trigger UI re-renders automatically.
 *
 * KEY CONCEPTS STUDIED
 * ─────────────────────
 * 1. THE useState HOOK
 *    - Allows functional components to hold and update local state.
 *    - Syntax: `const [state, setState] = useState(initialValue);`
 *    - `state` holds the current value.
 *    - `setState` is a setter function used to update the state and
 *      automatically trigger a re-render.
 *
 * 2. STATE vs REGULAR VARIABLES
 *    - Regular variables (e.g. `let count = 0`) do not persist values
 *      across component execution cycles and do not trigger updates.
 *    - State variables are managed by React, surviving re-renders and
 *      forcing DOM updates.
 *
 * 3. STATE UPDATE PATTERN
 *    - When updating state based on its previous value, always pass
 *      a callback function to the setter:
 *      `setCount(prevCount => prevCount + 1)`
 *      This guarantees that React uses the most up-to-date state.
 *
 * ─────────────────────────────────────────────────────────────
 * PRACTICAL TASKS COMPLETED TODAY
 * ─────────────────────────────────────────────────────────────
 *  ✅ Built `<FundingProgress />` component to manage funding amounts.
 *     Allows user to click 'Invest $100' and update the progress bar width.
 *  ✅ Built `<FollowButton />` component to manage toggling local state.
 *     Allows users to click and toggle between 'Follow' and 'Following',
 *     updating the followers count by +1/-1.
 *  ✅ Integrated both components in the dashboard area of App.jsx for live testing.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────────────────────────────────────────────────────
 *  Yesterday I completed: Vite React app scaffolding, Hero and CampaignCard layouts.
 *  Today I will: Study useState, build FundingProgress incrementor and FollowButton toggler.
 *  My blocker is: None. State batching and update timing makes sense when calling setters.
 */

const DAY_17_CONCEPTS = {
  hook: "A special React function starting with 'use' that hooks into React features.",
  state: "A component's memory that persists data between re-renders.",
  setter: "The function returned by useState to modify the state and trigger updates.",
  reRender: "The process of React calling a component function again with new state to update the DOM."
};

console.log("=============================================");
console.log("StarFund Internship — Week 4, Day 17 Log");
console.log("=============================================");
console.log("State Concepts:", Object.keys(DAY_17_CONCEPTS).join(" | "));
console.log("Completed: FundingProgress and FollowButton interactive state components.");
console.log("=============================================");
