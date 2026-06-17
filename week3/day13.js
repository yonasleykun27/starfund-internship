/**
 * ============================================================
 * StarFund Internship — Week 3, Day 13
 * Topic: CSS Grid & Responsive Design
 * ============================================================
 *
 * Day 13 Learning Notes
 *
 * CSS GRID FUNDAMENTALS
 * ─────────────────────
 * CSS Grid Layout is a two-dimensional layout system for the web.
 * Unlike Flexbox (one-dimensional), Grid handles both rows and columns
 * simultaneously, making complex page layouts easy to structure.
 *
 * Key Concepts:
 *   - Grid Container: The parent element (display: grid or inline-grid)
 *   - Grid Track: The space between two adjacent grid lines (a row or column)
 *   - Grid Cell: The intersection of a grid row and a grid column (the unit of Grid)
 *   - Grid Area: A rectangular area composed of one or more grid cells
 *   - Grid Line: The dividing lines that make up the grid structure
 *
 * ─────────────────────────────────────────────────────────────
 * CONTAINER PROPERTIES (applied to the PARENT)
 * ─────────────────────────────────────────────────────────────
 *
 * 1. grid-template-columns & grid-template-rows
 *    Defines the columns and rows of the grid with a space-separated list of values.
 *    Values can be lengths (px, rem, %), fractions (fr), auto, or repeat() functions.
 *
 *    .grid-container {
 *      display: grid;
 *      grid-template-columns: 240px 1fr;      // Two columns: 240px sidebar, remaining space for main content
 *      grid-template-rows: auto 1fr auto;     // Three rows: header (auto), body (1fr), footer (auto)
 *      grid-template-columns: repeat(3, 1fr); // Three equal-width columns (1fr each)
 *      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); // Extremely powerful responsive grid wrapping
 *    }
 *
 * 2. fr Unit (Fractional Unit)
 *    Represents a fraction of the free space in the grid container.
 *    grid-template-columns: 1fr 2fr 1fr; -> splits space into 4 parts: 25%, 50%, 25%
 *
 * 3. gap / grid-gap (row-gap, column-gap)
 *    Specifies the size of the grid lines (gutters/spacing between tracks).
 *    .grid-container { gap: 24px; } // Sets 24px spacing between all rows and columns
 *
 * 4. grid-template-areas
 *    Defines a grid template by referencing the names of grid areas specified with the grid-area property.
 *    Extremely visual and readable.
 *
 *    .grid-container {
 *      display: grid;
 *      grid-template-areas:
 *        "header header"
 *        "sidebar main"
 *        "footer footer";
 *      grid-template-columns: 240px 1fr;
 *      grid-template-rows: auto 1fr auto;
 *    }
 *
 * 5. justify-items & align-items
 *    justify-items: aligns grid items along the inline (row) axis.
 *    align-items: aligns grid items along the block (column) axis.
 *    Values: stretch (default) | start | end | center
 *
 * 6. justify-content & align-content
 *    Aligns the entire grid when the total grid size is smaller than the container.
 *
 * ─────────────────────────────────────────────────────────────
 * ITEM PROPERTIES (applied to the CHILDREN)
 * ─────────────────────────────────────────────────────────────
 *
 * 1. grid-column-start / grid-column-end / grid-row-start / grid-row-end
 *    Determines a grid item's location within the grid by referring to specific grid lines.
 *    Shorthands: grid-column and grid-row.
 *
 *    .item {
 *      grid-column: 1 / 3;       // Spans from grid line 1 to grid line 3 (2 columns wide)
 *      grid-column: span 2;      // Spans 2 columns starting from its automatic placement
 *      grid-row: 1 / span 3;     // Spans 3 rows starting from row line 1
 *    }
 *
 * 2. grid-area
 *    Assigns a name to a grid item so it can be referenced by grid-template-areas.
 *    Also acts as a shorthand for grid-row-start/grid-column-start/grid-row-end/grid-column-end.
 *
 *    .sidebar { grid-area: sidebar; }
 *    .main-content { grid-area: main; }
 *
 * 3. justify-self & align-self
 *    Overrides justify-items or align-items for a single grid item.
 *
 * ─────────────────────────────────────────────────────────────
 * RESPONSIVE DESIGN & MEDIA QUERIES
 * ─────────────────────────────────────────────────────────────
 * Responsive Web Design (RWD) ensures web pages render well on a variety of devices and window/screen sizes.
 *
 * Key Principles:
 *   - Mobile-First Approach: Write base styles for mobile viewports, then use min-width media queries for larger screens.
 *     Why? Code is cleaner, loads faster, and encourages prioritizing essential content.
 *   - Breakpoints: Standard widths where the layout adapts:
 *     - Mobile: Base styles (< 768px)
 *     - Tablet: min-width: 768px
 *     - Desktop: min-width: 1024px or 1200px
 *   - Fluid Typography & Spacing: Using relative units (rem, em, %, vh, vw) instead of fixed pixels.
 *
 * Media Query Syntax:
 *   @media (min-width: 768px) {
 *     /* Styles for tablets and larger screens * /
 *     .grid-container {
 *       grid-template-columns: repeat(2, 1fr);
 *     }
 *   }
 *   @media (min-width: 1024px) {
 *     /* Styles for desktops and larger screens * /
 *     .grid-container {
 *       grid-template-columns: repeat(3, 1fr);
 *     }
 *   }
 *
 * ─────────────────────────────────────────────────────────────
 * CSS GRID IN THE STARFUND BROWSE PAGE & DASHBOARD
 * ─────────────────────────────────────────────────────────────
 *
 * 1. Browse Page Campaigns Grid:
 *    The campaigns grid is converted from Flexbox to CSS Grid to enforce a strict two-dimensional alignment.
 *    By utilizing media queries with CSS Grid, the columns adapt predictably:
 *      - Mobile (Default): 1 column (grid-template-columns: 1fr)
 *      - Tablet (768px+): 2 columns (grid-template-columns: repeat(2, 1fr))
 *      - Desktop (1024px+): 3 columns (grid-template-columns: repeat(3, 1fr))
 *
 * 2. Founder Dashboard Layout:
 *    The dashboard uses a grid layout:
 *      - Column 1: A fixed sidebar of 240px
 *      - Column 2: A flexible content area filling the remaining space (1fr)
 *      - Inside the main content, a 3-column stats grid displays real-time metrics.
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 13 — CSS Grid)
 * ─────────────────────────────────────────────────────────────
 * ✅ Grid template columns and rows explicitly defined.
 * ✅ Sidebar fixed at 240px, main content filling remaining space.
 * ✅ Stats bar using CSS Grid to divide space into three equal columns.
 * ✅ Campaigns grid on the browse page uses CSS Grid with mobile-first media queries.
 * ✅ Grid areas named clearly and logically where applicable.
 * ✅ Zero horizontal scrollbars at any breakpoint.
 *
 * ─────────────────────────────────────────────────────────────
 * RESOURCES STUDIED
 * ─────────────────────────────────────────────────────────────
 * - CSS Grid Garden — all 28 levels (cssgridgarden.com)
 * - CSS-Tricks Complete Guide to Grid
 * - MDN Web Docs: CSS Grid Layout
 */

console.log("Day 13 — CSS Grid & Responsive Design: Complete ✅");
