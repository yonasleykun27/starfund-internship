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

## Day 13 — CSS Grid & Responsive Design (Completed)

Focuses on two-dimensional layouts using CSS Grid, responsive design principles, and mobile-first media queries.

### Files Included:

*   **[day13.js](file:///c:/Users/Y/Desktop/starfund-internship/week3/day13.js)**: Detailed study guide and learning notes covering grid tracks, fr units, spacing gaps, grid line positioning, grid-template-areas, and responsive media query breakpoints.
*   **[browse-page.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/browse-page.html)**: Daily Assignment. Updated the campaigns grid section to use **CSS Grid** with mobile-first media queries:
    *   **Mobile View (< 768px)**: 1-column layout (`grid-template-columns: 1fr`).
    *   **Tablet View (768px - 1023px)**: 2-column layout (`grid-template-columns: repeat(2, 1fr)`).
    *   **Desktop View (1024px+)**: 3-column layout (`grid-template-columns: repeat(3, 1fr)`).
*   **[founder-dashboard.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/founder-dashboard.html)**: Practical Task. A premium Founder Dashboard layout utilizing CSS Grid for its major structure:
    *   **Main Structure**: A 2-column grid featuring a fixed 240px sidebar on the left and a flexible main content panel on the right (`grid-template-columns: 240px 1fr`).
    *   **Metrics Stats Bar**: Inside the main panel, a 3-column stats grid displays real-time metrics (`grid-template-columns: repeat(3, 1fr)`).
    *   **Responsive Collapse**: On mobile viewports, the layout collapses into a single-column structure with the sidebar hidden to maintain visual balance.
*   **[exercise13.html](file:///c:/Users/Y/Desktop/starfund-internship/week3/exercise13.html)**: Practical Exercise 13. A pure CSS-only interactive tooltip system requiring **zero JavaScript**. Uses custom attributes (`data-tooltip` and `data-tooltip-dir`) alongside CSS transitions and transforms to render tooltips in all four directions (top, bottom, left, right).

---

## Technical Standards Applied
1. **Zero Div Layouts**: Strictly avoided generic nested `<div>` wrappers inside component tasks. Built structure via native HTML5 roles.
2. **Two-Dimensional Grid Layouts**: Replaced flex rows and floats with native CSS Grid for complex grids (e.g. Founder Dashboard, Campaigns Grid).
3. **Mobile-First Media Queries**: Structured responsive behaviors starting from mobile viewports, applying `min-width` queries to progressively enhance layouts for larger viewports.
4. **Global box-sizing reset**: Configured `box-sizing: border-box` to ensure padding and border values are contained within the defined width and height.
5. **Sticky Alignment**: Implemented sticky header using `position: sticky` along with `backdrop-filter: blur(12px)` for premium UI appearance.
6. **Pure CSS Interactivity**: Leveraged pseudo-elements (`::before`/`::after`) and attribute selectors to build interactive tooltips with zero JS performance overhead.
7. **Interactive States**: Added hover states (`transform: translateY`, shadow glow, link text color shifts) to all buttons, dashboard items, and cards.


