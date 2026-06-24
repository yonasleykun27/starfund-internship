/**
 * ============================================================
 * StarFund Internship — Week 3, Day 12
 * Topic: CSS Flexbox
 * ============================================================
 *
 * Day 12 Learning Notes
 *
 * FLEXBOX FUNDAMENTALS
 * ─────────────────────
 * Flexbox (Flexible Box Layout) is a one-dimensional layout model
 * that distributes space and aligns items within a container.
 *
 * Key mental model:
 *   - One parent (flex container) + one or more children (flex items)
 *   - Layout happens along ONE axis at a time (row OR column)
 *   - Items respond fluidly to available space
 *
 * ─────────────────────────────────────────────────────────────
 * ENABLING FLEXBOX
 * ─────────────────────────────────────────────────────────────
 *
 * .container {
 *   display: flex;          // enables flexbox (default direction: row)
 * }
 *
 * ─────────────────────────────────────────────────────────────
 * FLEX CONTAINER PROPERTIES (applied to the PARENT)
 * ─────────────────────────────────────────────────────────────
 *
 * 1. flex-direction
 *    Controls the main axis direction
 *    Values: row (default) | row-reverse | column | column-reverse
 *
 *    row     → items flow left → right  (main axis = horizontal)
 *    column  → items flow top → bottom  (main axis = vertical)
 *
 * 2. justify-content
 *    Aligns items along the MAIN axis
 *    Values:
 *      flex-start   → items packed to start
 *      flex-end     → items packed to end
 *      center       → items centered
 *      space-between → equal gaps between items, none at edges
 *      space-around  → equal gaps including half-gaps at edges
 *      space-evenly  → equal gaps including full gaps at edges
 *
 * 3. align-items
 *    Aligns items along the CROSS axis (perpendicular to main axis)
 *    Values:
 *      stretch      → items stretch to fill container (default)
 *      flex-start   → items align to start of cross axis
 *      flex-end     → items align to end of cross axis
 *      center       → items centered on cross axis
 *      baseline     → items aligned to text baseline
 *
 * 4. flex-wrap
 *    Controls whether items wrap onto new lines
 *    Values: nowrap (default) | wrap | wrap-reverse
 *
 *    Without wrap: all items squished into one row/column
 *    With wrap:    items overflow onto next line when they don't fit
 *
 * 5. gap (also: row-gap, column-gap)
 *    Controls spacing BETWEEN flex items (not on outer edges)
 *    .container { gap: 16px; }        // both row and column
 *    .container { gap: 12px 24px; }  // row-gap column-gap
 *
 * 6. align-content
 *    Aligns LINES of items on the cross axis (only works with flex-wrap: wrap)
 *    Values: same as justify-content + stretch
 *
 * ─────────────────────────────────────────────────────────────
 * FLEX ITEM PROPERTIES (applied to the CHILDREN)
 * ─────────────────────────────────────────────────────────────
 *
 * 1. flex-grow
 *    Defines how much an item GROWS relative to siblings
 *    Default: 0 (items don't grow)
 *    flex-grow: 1; → item takes all available space
 *    If two items both have flex-grow: 1, they share space equally
 *
 * 2. flex-shrink
 *    Defines how much an item SHRINKS relative to siblings
 *    Default: 1 (items shrink equally when space is tight)
 *    flex-shrink: 0; → item never shrinks (fixed size)
 *
 * 3. flex-basis
 *    Initial size of an item BEFORE flex-grow/shrink is applied
 *    Default: auto (uses item's width/height)
 *    flex-basis: 200px; → starts at 200px, then grows/shrinks from there
 *    flex-basis: 0;     → starts at 0, grows purely based on flex-grow ratio
 *
 * 4. flex (shorthand)
 *    flex: <flex-grow> <flex-shrink> <flex-basis>
 *    Common patterns:
 *      flex: 1          → flex: 1 1 0%  (grows, shrinks, starts at 0)
 *      flex: auto       → flex: 1 1 auto (grows, shrinks from natural size)
 *      flex: none       → flex: 0 0 auto (fixed, never grows or shrinks)
 *      flex: 0 0 200px  → fixed at 200px, no grow, no shrink
 *
 * 5. align-self
 *    Overrides align-items for a single item
 *    Values: auto | flex-start | flex-end | center | baseline | stretch
 *
 * 6. order
 *    Controls the visual order of an item (default: 0)
 *    Higher number = appears later in the layout
 *    order: -1; → item appears first regardless of DOM order
 *
 * ─────────────────────────────────────────────────────────────
 * MAIN AXIS vs CROSS AXIS
 * ─────────────────────────────────────────────────────────────
 *
 * flex-direction: row  →  main axis = →  cross axis = ↓
 * flex-direction: column → main axis = ↓  cross axis = →
 *
 * justify-content always controls the MAIN axis
 * align-items / align-self always controls the CROSS axis
 *
 * ─────────────────────────────────────────────────────────────
 * COMMON FLEXBOX PATTERNS USED IN STARFUND
 * ─────────────────────────────────────────────────────────────
 *
 * Pattern 1: Navigation bar (logo left, links right)
 *   nav {
 *     display: flex;
 *     justify-content: space-between;
 *     align-items: center;
 *   }
 *
 * Pattern 2: Hero section (text left, image right)
 *   .hero {
 *     display: flex;
 *     flex-direction: row;
 *     justify-content: space-between;
 *     align-items: center;
 *     gap: 40px;
 *   }
 *
 * Pattern 3: Card row that wraps on smaller screens
 *   .cards-grid {
 *     display: flex;
 *     flex-wrap: wrap;
 *     gap: 24px;
 *   }
 *   .card {
 *     flex: 1 1 280px;  // grows, shrinks, minimum 280px
 *   }
 *
 * Pattern 4: Centering content perfectly
 *   .centered {
 *     display: flex;
 *     justify-content: center;
 *     align-items: center;
 *   }
 *
 * Pattern 5: Filter bar (left label, center filters, right sort)
 *   .filter-bar {
 *     display: flex;
 *     align-items: center;
 *     gap: 12px;
 *   }
 *   .filter-bar .spacer { flex: 1; } // pushes sort to the right
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 12 — Flexbox)
 * ─────────────────────────────────────────────────────────────
 * ✅ No float or position hacks for layout
 * ✅ Flexbox properties used (not margins as layout tools)
 * ✅ Cards wrap correctly at 768px viewport width
 * ✅ Hero section: text left, image right on desktop (stacks on mobile)
 * ✅ Browse page: filter bar (flex row), cards grid (flex wrap)
 * ✅ No fixed pixel widths for flex items (use flex-basis or %)
 *
 * ─────────────────────────────────────────────────────────────
 * RESOURCES STUDIED
 * ─────────────────────────────────────────────────────────────
 * - Flexbox Froggy — all 24 levels (flexboxfroggy.com)
 * - CSS-Tricks Complete Guide to Flexbox
 *
 * ─────────────────────────────────────────────────────────────
 * KEY TAKEAWAYS
 * ─────────────────────────────────────────────────────────────
 * 1. Always think "flex container" first, then "flex items"
 * 2. flex: 1 on items is the most powerful shorthand — use it for equal columns
 * 3. gap is cleaner than margin hacks for spacing between items
 * 4. flex-wrap: wrap + flex-basis is how you build responsive card grids
 * 5. justify-content: space-between is perfect for nav bars and toolbars
 * 6. Never use floats or position: absolute for general page layout
 */

// Day 12 Complete. Browse page built in browse-page.html.
// Exercise 12 (3-column blog layout) built in exercise12.html.
console.log("Day 12 — Flexbox: Complete ✅");
