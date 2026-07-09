import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// ── Pages (Day 20 + Day 21 page views) ────────────────────────────────────────
import LandingPage from './pages/LandingPage';
import BrowsePageView from './pages/BrowsePageView';
import StartupDetailPage from './pages/StartupDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FounderDashboard from './pages/FounderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CreateStartupPage from './pages/CreateStartupPage';
import NotFoundPage from './pages/NotFoundPage';

// ── Shared components ─────────────────────────────────────────────────────────
import DarkModeToggle from './components/DarkModeToggle';
import FundingProgress from './components/FundingProgress';
import FollowButton from './components/FollowButton';
import Table from './components/Table';
import Modal from './components/Modal';
import Toast from './components/Toast';
import MultiStepForm from './components/MultiStepForm';
import Button from './components/Button';
import Badge from './components/Badge';

// ── Data from single source of truth ──────────────────────────────────────────
import { MOCK_STARTUPS } from './data/mockData';

import './App.css';

// ─── Navigation Links (Day 21) ───────────────────────────────────────────────
const NAVIGATION = [
  { path: '/',          label: '🏠 Home' },
  { path: '/browse',    label: '🔍 Browse' },
  { path: '/startup/1', label: '📋 Detail' },
  { path: '/login',     label: '🔑 Login' },
  { path: '/register',  label: '📝 Register' },
  { path: '/founder/dashboard', label: '🚀 Founder' },
  { path: '/admin/dashboard',   label: '🔑 Admin' },
  { path: '/exercises', label: '🧪 Exercises' },
];

// ─── App root ─────────────────────────────────────────────────────────────────
function App() {
  const { currentUser, logout } = useAuth();

  // Theme state — lifted to root (Exercise 19)
  const [isDark, setIsDark] = useState(true);

  // Modal state (Exercise 17)
  const [modalOpen, setModalOpen] = useState(false);

  // Toast state (Exercise 18)
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('success');

  const theme = {
    bg: isDark ? 'bg-slate-950' : 'bg-slate-100',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    nav: isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200',
    navItem: isDark
      ? 'text-slate-400 hover:text-white hover:bg-slate-800'
      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100',
    navItemActive: isDark
      ? 'text-amber-400 bg-amber-400/10 border-b-2 border-amber-400'
      : 'text-amber-600 bg-amber-50 border-b-2 border-amber-500',
  };

  const showToast = (type) => {
    setToastType(type);
    setToastVisible(true);
  };

  // Dynamically filter navigation links based on auth state
  const visibleNav = NAVIGATION.filter((nav) => {
    if (nav.path === '/login' || nav.path === '/register') {
      return !currentUser;
    }
    // Only show Founder link if logged in as founder
    if (nav.path === '/founder/dashboard') {
      return currentUser && currentUser.role === 'founder';
    }
    // Only show Admin link if logged in as admin
    if (nav.path === '/admin/dashboard') {
      return currentUser && currentUser.role === 'admin';
    }
    return true;
  });

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>

      {/* ── Top navigation bar ───────────────────────────────────────────────── */}
      <nav className={`sticky top-0 z-40 border-b ${theme.nav} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">

          {/* Logo */}
          <div className="flex items-center gap-2 py-3 shrink-0">
            <span className="text-amber-400 font-black text-lg tracking-tight">⭐ StarFund</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-amber-400/10 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>Week 5</span>
          </div>

          {/* Page links — scrollable on mobile */}
          <div className="flex overflow-x-auto hide-scrollbar flex-1 min-w-0">
            {visibleNav.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className={({ isActive }) => `
                  px-3 py-4 text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer
                  ${isActive ? theme.navItemActive : theme.navItem}
                `}
              >
                {nav.label}
              </NavLink>
            ))}
          </div>

          {/* User profile / Logout widget */}
          {currentUser && (
            <div className="flex items-center gap-2 ml-2 shrink-0">
              <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full border text-left ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'}`}>
                <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                  {currentUser.name[0].toUpperCase()}
                </div>
                <div className="hidden md:block">
                  <p className="text-[10px] font-bold leading-none">{currentUser.name}</p>
                  <p className="text-[8px] text-slate-500 capitalize leading-none mt-0.5">{currentUser.role}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="px-2 py-1 rounded-lg border border-red-500/30 text-red-400 text-[10px] font-bold hover:bg-red-500/10 transition-all cursor-pointer bg-transparent"
              >
                Logout
              </button>
            </div>
          )}

          {/* Dark mode toggle */}
          <div className="shrink-0">
            <DarkModeToggle isDark={isDark} onToggle={() => setIsDark((p) => !p)} />
          </div>
        </div>
      </nav>

      {/* ── Page content ─────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<BrowsePageView />} />
          <Route path="/startup/:id" element={<StartupDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/founder/dashboard" element={<FounderDashboard />} />
          <Route path="/founder/create-startup" element={<CreateStartupPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* ── Exercises Route (Exercise 16-20) ─────────────────────────── */}
          <Route
            path="/exercises"
            element={
              <div className="space-y-16">
                {/* Header */}
                <div className="text-center pt-4">
                  <h1 className="text-4xl font-black tracking-tight">Week 4 Exercises</h1>
                  <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Exercises 16–20 — all built and demonstrated below
                  </p>
                </div>

                {/* ── Exercise 16 — Table ──────────────────────────────────── */}
                <section id="exercise-16">
                  <h2 className="text-xl font-bold mb-1">Exercise 16 — Reusable &lt;Table /&gt;</h2>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Generic table component that accepts <code className="text-amber-400">headers</code> and <code className="text-amber-400">rows</code> props.
                  </p>
                  <Table
                    caption="StarFund — Campaign Overview"
                    headers={['Startup', 'Sector', 'Raised', 'Goal', 'Backers', 'Status']}
                    rows={MOCK_STARTUPS.map((s) => [
                      s.name,
                      s.sector,
                      `$${s.raised.toLocaleString()}`,
                      `$${s.goal.toLocaleString()}`,
                      s.backers,
                      <Badge key={s.id} status={s.status} />,
                    ])}
                  />
                </section>

                {/* ── Exercise 17 — Modal ──────────────────────────────────── */}
                <section id="exercise-17">
                  <h2 className="text-xl font-bold mb-1">Exercise 17 — &lt;Modal /&gt;</h2>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Open/close with <code className="text-amber-400">useState</code>. Accepts any children. Click backdrop or X to close.
                  </p>
                  <Button id="open-modal-btn" variant="primary" onClick={() => setModalOpen(true)}>
                    Open Modal
                  </Button>
                  <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Invest in AgroSense AI 🌱"
                  >
                    <div className="space-y-4">
                      <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Choose your investment amount and confirm your backing of this campaign.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {['$500', '$1,000', '$5,000'].map((amt) => (
                          <button
                            key={amt}
                            className="py-2 rounded-xl border border-slate-700 text-sm font-semibold text-slate-300 hover:border-amber-400 hover:text-amber-400 transition-all"
                          >
                            {amt}
                          </button>
                        ))}
                      </div>
                      <Button variant="primary" fullWidth onClick={() => setModalOpen(false)}>
                        Confirm Investment
                      </Button>
                    </div>
                  </Modal>
                </section>

                {/* ── Exercise 18 — Toast ──────────────────────────────────── */}
                <section id="exercise-18">
                  <h2 className="text-xl font-bold mb-1">Exercise 18 — &lt;Toast /&gt;</h2>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Auto-dismisses after 3 seconds. Supports 4 types. Click a button to trigger.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['success', 'error', 'info', 'warning'].map((t) => (
                      <Button key={t} variant="outline" onClick={() => showToast(t)} className="capitalize">
                        {t === 'success' ? '✅' : t === 'error' ? '❌' : t === 'info' ? 'ℹ️' : '⚠️'} {t}
                      </Button>
                    ))}
                  </div>
                  <Toast
                    message={
                      toastType === 'success' ? 'Investment confirmed! 🎉' :
                      toastType === 'error'   ? 'Something went wrong. Please try again.' :
                      toastType === 'info'    ? 'Tip: You can filter campaigns by status.' :
                                               'Campaign deadline is in 3 days!'
                    }
                    type={toastType}
                    isVisible={toastVisible}
                    onDismiss={() => setToastVisible(false)}
                    duration={3000}
                  />
                </section>

                {/* ── Exercise 19 — Dark mode (done) ──────────────────────── */}
                <section id="exercise-19">
                  <h2 className="text-xl font-bold mb-1">Exercise 19 — Dark Mode Toggle ✅</h2>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Already complete! The toggle in the top-right nav bar controls the entire app theme. State lives in App (root) and is passed down as props.
                  </p>
                </section>

                {/* ── Exercise 20 — Multi-step form ────────────────────────── */}
                <section id="exercise-20">
                  <h2 className="text-xl font-bold mb-1">Exercise 20 — Multi-Step Form</h2>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    3-step registration form using <code className="text-amber-400">useState</code> to track current step and form data.
                  </p>
                  <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <MultiStepForm />
                  </div>
                </section>

                {/* ── Day 17 Demos (kept for continuity) ──────────────────── */}
                <section id="day17-demos">
                  <h2 className="text-xl font-bold mb-4">Day 17 — State Demos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <FundingProgress goal={500000} initialRaised={345000} />
                    <FollowButton initialFollowers={1458} />
                  </div>
                </section>
              </div>
            }
          />

          {/* ── Fallback 404 Route ───────────────────────────────────────── */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className={`border-t mt-16 py-6 text-center text-xs ${isDark ? 'border-slate-800 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
        StarFund Internship · Week 5 · Advanced React · Day 21
      </footer>
    </div>
  );
}

export default App;

