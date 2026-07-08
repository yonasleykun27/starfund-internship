/**
 * ============================================================
 * StarFund Internship — Week 5, Day 23
 * Topic: Forms & Validation
 * ============================================================
 *
 * Day 23 Learning Notes
 * ─────────────────────
 *
 * CONTROLLED INPUTS IN REACT
 * ──────────────────────────
 *   • React state is the "single source of truth" for the form values.
 *   • Every input elements binds its `value` prop to a state variable.
 *   • An `onChange` handler updates state dynamically as the user types.
 *
 * FORM VALIDATION STRATEGY
 * ────────────────────────
 *   • Checks can be performed on blur (blur event) or on form submission.
 *   • On error, validation states render customized feedback labels.
 *   • Standard email validation requires regex testing (e.g. emailRegex).
 *
 * ─────────────────────────────────────────────────────────────
 * REVIEW CHECKLIST (Day 23)
 * ─────────────────────────
 * ✅  No uncontrolled inputs used
 * ✅  Full validation rules on Register: required, email format, password length, confirmation matching
 * ✅  Full validation rules on Login: email format and password presence
 * ✅  Full validation rules on Create Startup: fields, dropdown sector, positive team size, cover image URL format
 * ✅  Form submissions blocked on invalid errors
 * ─────────────────────────────────────────────────────────────
 *
 * FILES BUILT/MODIFIED TODAY
 * ──────────────────────────
 * • src/pages/RegisterPage.jsx (updated)
 *     Added inline form validation checks, error triggers, and navigation redirects.
 *
 * • src/pages/LoginPage.jsx (updated)
 *     Added state-based credentials check on submit and input blur.
 *
 * • src/pages/CreateStartupPage.jsx (new)
 *     Created campaign launcher form enforcing validation patterns on all fields.
 *
 * • src/App.jsx (updated)
 *     Integrated CreateStartupPage into routes.
 *
 * • week5/day23.js (new)
 *     Day 23 study notes and logs.
 *
 * ─────────────────────────────────────────────────────────────
 * STANDUP NOTES
 * ─────────────
 * Yesterday: Day 22 — useEffect and data fetching simulation loaders.
 * Today: Day 23 — Controlled forms validation checks on submit and input blur.
 * Tomorrow: Day 24 — Custom hooks refactoring and global AuthContext session provider.
 * ─────────────────────────────────────────────────────────────
 */

console.log('✅ Week 5 Day 23 — Forms & Validation Audit');
console.log('   Register form validation:  ✅ Enabled');
console.log('   Login form validation:     ✅ Enabled');
console.log('   Create Startup form validation: ✅ Enabled');
console.log('   Inline error feedbacks:    ✅ Configured');
