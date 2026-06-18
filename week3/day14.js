/**
 * ============================================================
 * StarFund Internship — Week 3, Day 14
 * Topic: TailwindCSS & Utility-First Design
 * ============================================================
 *
 * Day 14 Learning Notes
 *
 * UTILITY-FIRST CSS CONCEPT
 * ─────────────────────────
 * Tailwind is a utility-first CSS framework. Instead of writing custom CSS
 * class names (like .btn-primary, .card-body) and writing custom properties,
 * you style elements by applying pre-existing, single-purpose classes (utility classes)
 * directly in the HTML.
 *
 * Traditional CSS vs Tailwind:
 *   - Traditional CSS:
 *     <button class="btn-primary">Click</button>
 *     .btn-primary { background: #6c47ff; padding: 12px 24px; border-radius: 8px; color: white; }
 *
 *   - Tailwind CSS:
 *     <button class="bg-[#6c47ff] px-6 py-3 rounded-lg text-white hover:bg-violet-700 transition">Click</button>
 *
 * Key Advantages:
 *   1. Speed: No more jumping between HTML and CSS files to write classes.
 *   2. Maintainability: No CSS files that grow indefinitely.
 *   3. Consistency: Enforces design system constraints (preset colors, spacing, sizes).
 *   4. Performance: Production builds purge unused classes, leaving a tiny CSS file (often < 10kb).
 *
 * ─────────────────────────────────────────────────────────────
 * TAILWIND PLAY CDN SETUP (Static HTML)
 * ─────────────────────────────────────────────────────────────
 * For rapid prototyping and learning, Tailwind provides a Play CDN script.
 * Put this in your HTML <head>:
 *
 *   <script src="https://cdn.tailwindcss.com"></script>
 *
 * Customizing Theme Configurations (Tailwind CDN Script):
 *   <script>
 *     tailwind.config = {
 *       theme: {
 *         extend: {
 *           colors: {
 *             brand: {
 *               primary: '#6c47ff',
 *               accent: '#00d4aa',
 *               bg: '#0f0d1a',
 *               card: '#1a1730',
 *             }
 *           }
 *         }
 *       }
 *     }
 *   </script>
 *
 * ─────────────────────────────────────────────────────────────
 * CORE TAILWIND UTILITY CLASSES
 * ─────────────────────────────────────────────────────────────
 *
 * 1. Spacing & Sizing
 *    - Padding: `p-{size}` (all), `px-{size}` (horizontal), `py-{size}` (vertical), `pt-`, `pb-`, `pl-`, `pr-`
 *    - Margin: `m-{size}`, `mx-{size}`, `my-{size}`, `mt-`, `mb-`, `ml-`, `mr-`
 *    - Width: `w-{size}` (e.g., w-64, w-1/2, w-full, w-screen)
 *    - Height: `h-{size}` (e.g., h-12, h-full, h-screen)
 *    * Note: 1 spacing unit = 0.25rem = 4px. Example: `p-4` = 16px padding.
 *
 * 2. Typography
 *    - Font Family: `font-sans`, `font-serif`, `font-mono`
 *    - Font Size: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-3xl` (30px), `text-5xl` (48px)
 *    - Font Weight: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`
 *    - Alignment & Styling: `text-left`, `text-center`, `text-right`, `italic`, `underline`, `tracking-tight`
 *
 * 3. Colors & Backgrounds
 *    - Text Color: `text-gray-500`, `text-violet-600`, `text-white`
 *    - Background: `bg-slate-900`, `bg-[#6c47ff]` (arbitrary values using square brackets)
 *    - Gradients: `bg-gradient-to-r from-violet-500 to-teal-400`
 *    - Borders: `border border-violet-500/20` (border with 20% opacity)
 *
 * 4. Flexbox & Grid
 *    - Flex: `flex`, `flex-row`, `flex-col`, `items-center`, `justify-between`, `flex-wrap`, `gap-4`
 *    - Grid: `grid`, `grid-cols-3` (3 equal columns), `gap-6`
 *
 * 5. Effects & Transitions
 *    - Corners: `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (circle/pill)
 *    - Shadows: `shadow`, `shadow-md`, `shadow-lg`, `shadow-2xl`
 *    - Transitions: `transition`, `duration-300`, `ease-in-out`
 *    - Hover states: `hover:bg-violet-700`, `hover:scale-105` (triggered on hover state only)
 *
 * ─────────────────────────────────────────────────────────────
 * MOBILE-FIRST RESPONSIVE DESIGN (Responsive Prefixes)
 * ─────────────────────────────────────────────────────────────
 * Tailwind uses a mobile-first responsive system. Classes without a prefix apply to ALL screens.
 * You progressively override styles for larger screens using responsive prefixes:
 *
 * Breakpoints:
 *   - Base (mobile): < 640px (default classes, no prefix)
 *   - `sm:` (large mobile/tablet): 640px+
 *   - `md:` (tablet): 768px+
 *   - `lg:` (desktop): 1024px+
 *   - `xl:` (large desktop): 1280px+
 *
 * Example: Responsive Header Layout
 *   <nav class="flex flex-col md:flex-row items-center justify-between p-4">
 *     <!-- Under 768px: items stack vertically (flex-col) -->
 *     <!-- Above 768px: items align horizontally (flex-row) -->
 *   </nav>
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 14 — TailwindCSS)
 * ─────────────────────────────────────────────────────────────
 * ✅ Tailwind Play CDN successfully configured inside HTML head.
 * ✅ StarFund design tokens mapped using tailwind.config object.
 * ✅ No custom/raw CSS used for layout, spacing, or color formatting.
 * ✅ Responsive prefixes (md:, lg:) utilized for adaptive mobile behaviors.
 * ✅ Smooth hover and transition states applied to interactive elements.
 * ✅ Badge components created dynamically using tailwind coloring.
 * ✅ Clean, semantic HTML structure maintained inside Tailwind grids.
 *
 * ─────────────────────────────────────────────────────────────
 * RESOURCES STUDIED
 * ─────────────────────────────────────────────────────────────
 * - TailwindCSS Documentation (tailwindcss.com/docs)
 * - Tailwind Play Sandbox (play.tailwindcss.com)
 * - Refactoring UI (by Steve Schoger & Adam Wathan)
 */

console.log("Day 14 — TailwindCSS & Utility-First Design: Complete ✅");
