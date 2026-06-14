# Week 3: HTML, CSS & Responsive Design

This folder contains the daily assignments, deliverables, and practical exercises for Week 3 of the StarFund Internship.

## Day 11 — Semantic HTML & CSS Box Model (Completed)

Focuses on transition to the markup/visual layer of StarFund using semantic tags and the CSS Box Model rules.

### Files Included:

*   **[day11.js](file:///c:/Users/Y/Desktop/starfund-internship/week3/day11.js)**: Detailed learning notes, syntax explanation, and quick reference guide covering HTML5 semantic elements, Box Model calculations, display types, and position attributes.
*   **[campaign-card-semantic.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/campaign-card-semantic.html)**: Rebuild of the StarFund campaign card using **only** semantic HTML tags (`article`, `header`, `section`, `footer`, `address`, `figure`, `figcaption`, `meter`, `time`, `dl`, `dt`, `dd`). **Zero layout divs are used.** Styled using raw CSS custom properties (design tokens) and standard box-model properties.
*   **[header.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/header.html)**: Daily Assignment. StarFund navigation header containing a logo on the left and navigation menu/auth controls on the right. Formulated with zero layout divs using `header`, `nav`, and `menu` semantic containers. Integrates fixed/sticky alignment at the top with a modern frosted glass blur effect.
*   **[exercise11.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/exercise11.html)**: Practical Exercise 11. A pixel-perfect reproduction of a Twitter/X user profile card in pure CSS (no libraries/frameworks) following modern dark mode styling and semantic structures.

---

## Technical Standards Applied
1. **Zero Div Layouts**: Strictly avoided generic nested `<div>` wrappers inside component tasks. Built structure via native HTML5 roles.
2. **Global box-sizing reset**: Configured `box-sizing: border-box` to ensure padding and border values are contained within the defined width and height.
3. **Sticky Alignment**: Implemented sticky header using `position: fixed` along with `backdrop-filter: blur(12px)` for premium UI appearance.
4. **Interactive States**: Added hover states (`transform: translateY`, shadow glow, link text color shifts) to all buttons, profile cards, and header items.
