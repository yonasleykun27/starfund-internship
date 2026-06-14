/**
 * ============================================================
 * StarFund Internship — Week 3, Day 11
 * Topic: Semantic HTML5 & CSS Box Model
 * ============================================================
 *
 * Day 11 Learning Notes
 * ─────────────────────
 * Today we transitioned from pure JavaScript to the visual layer:
 * the structure and layout of web pages using semantic HTML5 and
 * the fundamental CSS Box Model.
 *
 * KEY CONCEPTS STUDIED
 * ─────────────────────
 *
 * 1. SEMANTIC HTML5 ELEMENTS
 *    Instead of generic <div> containers, HTML5 provides meaningful
 *    elements that describe content purpose to both browsers and
 *    assistive technologies:
 *
 *    <header>   — Introductory content, logo, primary navigation
 *    <nav>      — Navigation links (primary or secondary)
 *    <main>     — The dominant content of the <body>
 *    <section>  — Standalone thematic grouping of content
 *    <article>  — Self-contained, independently distributable content
 *    <aside>    — Tangentially related content (sidebar)
 *    <footer>   — Closing content: copyright, links, contact info
 *    <figure>   — Self-contained content (image + caption)
 *    <figcaption> — Caption for a <figure>
 *    <time>     — Machine-readable date/time
 *    <mark>     — Highlighted/relevant text
 *    <details> / <summary> — Collapsible disclosure widget
 *
 * 2. DIV vs SEMANTIC TAGS
 *    Bad:  <div class="header"> ... </div>
 *    Good: <header> ... </header>
 *
 *    Why it matters:
 *    - Screen readers announce elements by role
 *    - Search engines weight content inside semantic elements
 *    - Code is self-documenting without needing class name hints
 *    - Better accessibility (WCAG compliance)
 *
 * 3. THE CSS BOX MODEL
 *    Every HTML element is rendered as a rectangular box. The box
 *    model defines how that rectangle is calculated:
 *
 *    ┌──────────────────────────────────┐
 *    │           MARGIN                 │  ← space outside the border
 *    │  ┌────────────────────────────┐  │
 *    │  │         BORDER             │  │  ← the visible edge
 *    │  │  ┌──────────────────────┐  │  │
 *    │  │  │       PADDING        │  │  │  ← space inside the border
 *    │  │  │  ┌────────────────┐  │  │  │
 *    │  │  │  │    CONTENT     │  │  │  │  ← actual content area
 *    │  │  │  └────────────────┘  │  │  │
 *    │  │  └──────────────────────┘  │  │
 *    │  └────────────────────────────┘  │
 *    └──────────────────────────────────┘
 *
 *    box-sizing: content-box (default)
 *      → width = content width only
 *      → total width = content + padding + border
 *
 *    box-sizing: border-box (recommended)
 *      → width = content + padding + border (all included)
 *      → total width = the specified width
 *
 * 4. DISPLAY PROPERTY VALUES
 *    block       — starts on new line, takes full available width
 *    inline      — stays in the text flow, no width/height control
 *    inline-block — inline flow + width/height + padding control
 *    flex        — flexbox container (children are flex items)
 *    grid        — grid container (children are grid items)
 *    none        — element is removed from the document flow
 *
 * 5. MARGIN vs PADDING
 *    Margin:  Space OUTSIDE the border. Collapses between siblings.
 *    Padding: Space INSIDE the border. Affects background color area.
 *
 *    Common trick — center a block element:
 *      margin: 0 auto;   (top/bottom: 0, left/right: auto)
 *
 * 6. THE POSITION PROPERTY
 *    static   — default, follows normal document flow
 *    relative — offset from its normal position, still takes space
 *    absolute — removed from flow, positioned relative to nearest
 *               positioned ancestor
 *    fixed    — removed from flow, positioned relative to viewport
 *    sticky   — relative until it hits a scroll threshold, then fixed
 *
 * ─────────────────────────────────────────────────────────────
 * PRACTICAL TASKS COMPLETED TODAY
 * ─────────────────────────────────────────────────────────────
 *  ✅ campaign-card-semantic.html
 *     → Rebuilt the StarFund campaign card using only semantic HTML:
 *       <article>, <header>, <section>, <footer>.
 *     → Styled with raw CSS: padding, margin, border, background.
 *     → Zero <div> elements used.
 *
 *  ✅ header.html  (Daily Assignment)
 *     → StarFund page header with logo on left, nav links on right.
 *     → Built with HTML + CSS only (position: sticky, flexbox display).
 *     → Review checklist: no layout divs, semantic elements, header
 *       sticks to top with correct alignment. ✓
 *
 * ─────────────────────────────────────────────────────────────
 * RESOURCES STUDIED
 * ─────────────────────────────────────────────────────────────
 *  • MDN: HTML5 Semantic Elements
 *    https://developer.mozilla.org/en-US/docs/Glossary/Semantics
 *  • MDN: CSS Box Model
 *    https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
 *  • web.dev: Learn CSS
 *    https://web.dev/learn/css/
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP FORMAT
 * ─────────────────────────────────────────────────────────────
 *  Yesterday I completed: The Week 2 Fetch API landing page with
 *    localStorage caching and favorites system.
 *  Today I will: Build the StarFund semantic campaign card and the
 *    sticky page header using only HTML and CSS.
 *  My blocker is: No blockers — box model clicked quickly once I
 *    switched to box-sizing: border-box globally.
 */

// ─────────────────────────────────────────────────────────────
// QUICK CSS BOX MODEL REFERENCE (as JS constants)
// ─────────────────────────────────────────────────────────────

const CSS_BOX_MODEL = {
  content: "The actual text, image, or child elements",
  padding: "Space between content and border — inherits background",
  border: "The visible edge of the element",
  margin: "Space outside the border — transparent, collapses vertically",
};

const DISPLAY_TYPES = {
  block: "New line, full width, respects width/height",
  inline: "Same line, width = content, ignores width/height",
  "inline-block": "Same line, but respects width/height",
  flex: "Flex container — 1D layout on main axis",
  grid: "Grid container — 2D layout on rows and columns",
  none: "Hidden and removed from document flow",
};

const SEMANTIC_ELEMENTS = {
  header: "Introductory block — logo, nav, page title",
  nav: "Navigation links group",
  main: "Primary page content (one per page)",
  article: "Self-contained content (blog post, product card)",
  section: "Thematic grouping within main or article",
  aside: "Related but secondary content (sidebar, callout)",
  footer: "Closing info — copyright, links, contact",
  figure: "Self-contained illustration or media",
  figcaption: "Caption for a figure element",
  time: "Machine-readable date/time value",
};

console.log("Day 11 — Semantic HTML5 & CSS Box Model");
console.log("CSS Box Model parts:", Object.keys(CSS_BOX_MODEL).join(" → "));
console.log(
  "Semantic elements learned:",
  Object.keys(SEMANTIC_ELEMENTS).join(", ")
);
console.log(
  "Files built today: campaign-card-semantic.html, header.html"
);
