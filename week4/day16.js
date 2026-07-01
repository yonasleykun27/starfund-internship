/**
 * ============================================================
 * StarFund Internship — Week 4, Day 16
 * Topic: React Introduction & JSX
 * ============================================================
 *
 * Day 16 Learning Notes
 * ─────────────────────
 * Today we took our first steps into React, migrating from static
 * HTML/JS into component-driven development.
 *
 * KEY CONCEPTS STUDIED
 * ─────────────────────
 * 1. WHAT IS REACT & THE VIRTUAL DOM
 *    - React is a declarative component-based library for building UIs.
 *    - The Virtual DOM is a lightweight memory representation of the actual DOM.
 *      React computes differences (reconciliation) and batches updates,
 *      making rendering much faster than manual DOM manipulation.
 *
 * 2. JSX SYNTAX RULES
 *    - Looks like HTML, but is compiled to JS objects (`React.createElement`).
 *    - Rules:
 *      * Must return a single root element (or Fragment `<>...</>`).
 *      * Uses camelCase for attributes (e.g., `className` instead of `class`,
 *        `htmlFor` instead of `for`).
 *      * All tags must be self-closing (e.g., `<img />`, `<br />`).
 *      * Expressions are embedded inside curly braces `{}`.
 *
 * 3. FUNCTIONAL COMPONENTS & PROPS
 *    - A React component is a JavaScript function that returns JSX.
 *    - Components receive arguments called `props` (properties), which are
 *      read-only parameters passed down by parent components.
 *
 * ─────────────────────────────────────────────────────────────
 * PRACTICAL TASKS COMPLETED TODAY
 * ─────────────────────────────────────────────────────────────
 *  ✅ Initialized Vite React application inside /week4/starfund-react.
 *  ✅ Configured TailwindCSS v4 integration.
 *  ✅ Created the `<Hero />` component accepting dynamic heading and subheading props.
 *  ✅ Created the `<CampaignCard />` component that takes a startup object and calculates
 *     funding percentage reactively.
 *  ✅ Integrated multiple cards on the main app page with dynamic styling.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────────────────────────────────────────────────────
 *  Yesterday I completed: Week 3 Static Site responsive updates and PR delivery to dev.
 *  Today I will: Initialize the Vite React project and implement Hero and CampaignCard components.
 *  My blocker is: None. The transition to JSX was smooth due to solid HTML/JS foundation.
 */

const DAY_16_CONCEPTS = {
  react: "A component-based library for building user interfaces.",
  virtualDOM: "A performance optimization that batches and reconciles actual DOM updates.",
  jsx: "JavaScript XML — a syntax extension allowing us to write HTML-like structures in JS.",
  components: "Independent, reusable blocks of code that serve as UI building blocks.",
  props: "Read-only attributes passed from parent to child components."
};

console.log("=============================================");
console.log("StarFund Internship — Week 4, Day 16 Log");
console.log("=============================================");
console.log("Core Concepts:", Object.keys(DAY_16_CONCEPTS).join(" | "));
console.log("Completed: Vite React App Scaffold, Hero and CampaignCard components.");
console.log("=============================================");
