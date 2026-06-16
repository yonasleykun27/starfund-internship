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

## Day 12 — Flexbox (Completed)

Focuses on one-dimensional layouts using CSS Flexbox, handling alignment, fluid scaling, space distribution, and responsive wrapping.

### Files Included:

*   **[day12.js](file:///c:/Users/Y/Desktop/starfund-internship/week3/day12.js)**: Comprehensive learning notes covering flex containers, flex items, axis alignment (`justify-content`, `align-items`), wrapping behavior (`flex-wrap`, `gap`), and item scaling (`flex-grow`, `flex-shrink`, `flex-basis`).
*   **[browse-page.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/browse-page.html)**: Daily Assignment. StarFund Browse Page combining:
    *   **Hero Section**: Built with flexbox (text details left, featured card graphic right), collapsing on mobile viewports.
    *   **Filter Bar**: Category filters and search/sort controls aligned horizontally using a flexible row layout.
    *   **Campaign Grid**: Multiple responsive cards structured in a flex-wrap container.
    *   **Cards**: Stretched and aligned as vertical flex columns with `flex-grow: 1` utilized on the body element to push card footers uniformly to the bottom.
*   **[exercise12.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/exercise12.html)**: Practical Exercise 12. A responsive 3-column blog layout built using CSS Flexbox. Features responsive scaling that fluidly wraps to 2 columns on tablets and collapses into a single column on mobile screens.

---

## Technical Standards Applied
1. **Zero Div Layouts**: Strictly avoided generic nested `<div>` wrappers inside component tasks. Built structure via native HTML5 roles.
2. **Modern Flexbox Layouts**: Avoided layout floats, position hacks, and fixed pixel grid widths. Used container flex layout, gaps, and responsive basis.
3. **Global box-sizing reset**: Configured `box-sizing: border-box` to ensure padding and border values are contained within the defined width and height.
4. **Sticky Alignment**: Implemented sticky header using `position: sticky` along with `backdrop-filter: blur(12px)` for premium UI appearance.
5. **Interactive States**: Added hover states (`transform: translateY`, shadow glow, link text color shifts) to all buttons, profile cards, and header items.

