# StarFund Static Site — Week 3 Day 15 Milestone

This folder contains the complete static HTML/Tailwind CSS version of the **StarFund** platform — Ethiopia's premier startup crowdfunding application. All 5 pages are fully linked, responsive at mobile (375px), tablet (768px), and desktop (1280px), and built entirely using Tailwind CSS via the Play CDN.

---

## 📁 Pages

| File | Page | Description |
|------|------|-------------|
| `landing.html` | 🏠 Landing Page | Hero section, featured campaign cards, stats bar, how-it-works steps, and CTA section. |
| `browse.html` | 🔍 Browse Campaigns | Search bar, sidebar filters (sector, stage, sort), responsive campaigns grid with 6 cards, and pagination. |
| `startup-detail.html` | 📊 Startup Detail | Campaign hero image, description, problem/solution cards, team section, and sticky investment sidebar with funding progress. |
| `login.html` | 🔐 Login Page | Glassmorphism auth card with Google OAuth button, email/password form, remember me checkbox, and links to register. |
| `register.html` | 📝 Register Page | Role selection (Investor vs Founder), Google OAuth, full registration form with phone, password strength indicator, and terms agreement. |

---

## 🎨 Design System

All pages share a consistent design system:

- **Primary Color**: Indigo (`#6366f1`)
- **Accent Color**: Purple (`#c084fc`) + Cyan (`#38bdf8`)
- **Background**: Deep dark (`#0a0a1a`) with card layer (`#0f0f2e`)
- **Border Radius**: `rounded-xl` (12px) and `rounded-2xl` (16px) for cards
- **Typography**: Google Fonts — `Outfit` (weights: 300–900)
- **Button Style**: `bg-indigo-600 hover:bg-indigo-500 rounded-xl` with hover scale effect
- **Card Style**: `bg-[#0f0f2e] border border-indigo-500/20 rounded-2xl` with hover glow

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 768px) | Single-column layout, hamburger menu navigation |
| Tablet (768px–1023px) | 2-column campaign grids, sidebar stacks below |
| Desktop (1024px+) | 3-column campaign grids, sidebar inline, full nav bar |

---

## ✅ Mentor Evaluation Checklist

- [x] All 5 pages exist and are linked
- [x] Tailwind CSS used throughout (minimal custom CSS — only gradient-text helper)
- [x] Responsive at mobile (375px), tablet (768px), desktop (1280px)
- [x] Semantic HTML used (`header`, `nav`, `main`, `article`, `aside`, `section`, `footer`)
- [x] Hover states on all buttons, cards, and interactive elements
- [x] Consistent color scheme and spacing across all 5 pages
- [x] No horizontal scrolling on any screen size
- [x] No fixed pixel widths used for layout (all `fr`, `%`, `w-full`, `max-w-*`)
- [x] Hamburger mobile menu drawer on all pages
- [x] Responsive prefixes used (`md:`, `lg:`, `xl:`, `sm:`, `hidden`, `block`)

---

## 🔗 How Pages Are Linked

```
landing.html
  ├── → browse.html (Browse button, nav link)
  ├── → startup-detail.html (featured card links)
  ├── → login.html (Sign In nav link)
  └── → register.html (Get Started button, CTA button)

browse.html
  └── → startup-detail.html (all campaign "View Details" buttons)

startup-detail.html
  └── → register.html (Invest Now button)

login.html
  └── → register.html (Create account link)

register.html
  └── → login.html (Sign in link, form submit redirects)
```

---

## 🛠️ Technology Stack

- **HTML5** with semantic tags
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`)
- **Google Fonts** — Outfit typeface
- **Tailwind Config** — Custom brand colors and font family extended inline via `tailwind.config`
