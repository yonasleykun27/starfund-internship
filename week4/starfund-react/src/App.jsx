import React, { useState } from 'react';
import Hero from './components/Hero';
import FundingProgress from './components/FundingProgress';
import FollowButton from './components/FollowButton';
import BrowsePage from './components/BrowsePage';
import FilterableList from './components/FilterableList';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

// ─── Shared Mock Data (single source for all days) ───────────────────────────
const MOCK_STARTUPS = [
  {
    id: 1,
    name: 'AgroSense AI',
    sector: 'AgriTech',
    raised: 184000,
    goal: 250000,
    backers: 312,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending',
    status: 'active',
  },
  {
    id: 2,
    name: 'Hawassa Solar Grid',
    sector: 'Clean Energy',
    raised: 800000,
    goal: 800000,
    backers: 1205,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    tag: 'Fully Funded',
    status: 'funded',
  },
  {
    id: 3,
    name: 'MedLink Telemedicine',
    sector: 'HealthTech',
    raised: 95000,
    goal: 300000,
    backers: 174,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tag: 'New',
    status: 'pending',
  },
  {
    id: 4,
    name: 'EthioLoop Recycling',
    sector: 'Clean Energy',
    raised: 45000,
    goal: 100000,
    backers: 89,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    tag: 'Eco-Friendly',
    status: 'active',
  },
  {
    id: 5,
    name: 'SafariGo Logistics',
    sector: 'Logistics',
    raised: 12000,
    goal: 150000,
    backers: 42,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
    tag: 'Rejected Offer',
    status: 'rejected',
  },
];

// ─── App (root component) ────────────────────────────────────────────────────
function App() {
  // Exercise 19: dark mode state owned here — passed as props down to DarkModeToggle
  const [isDark, setIsDark] = useState(true);

  // Theme tokens: switch background/text based on isDark state
  const theme = {
    bg: isDark ? 'bg-slate-950' : 'bg-slate-100',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
  };

  return (
    // Conditional class name: dark or light background applied at root
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-6">

        {/* ── Dark Mode Toggle bar (Exercise 19) ────────────────────────── */}
        <div className="flex justify-end mb-6">
          {/* Pass isDark state and onToggle callback as props */}
          <DarkModeToggle
            isDark={isDark}
            onToggle={() => setIsDark((prev) => !prev)}
          />
        </div>

        {/* ── Day 16: Hero component ─────────────────────────────────────── */}
        <Hero
          heading="Back the ventures that matter most."
          subheading="StarFund connects growth-stage founders with a curated network of impact-driven investors. Start supporting sustainable projects today."
        />

        {/* ── Day 17: useState Demos ─────────────────────────────────────── */}
        <div className="mb-12">
          <div className={`border-b pb-3 mb-6 ${isDark ? 'border-slate-800' : 'border-slate-300'}`}>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Day 17: State &amp; Interaction Demos
            </h2>
            <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Testing React useState hooks on isolated components
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <FundingProgress goal={500000} initialRaised={345000} />
            <FollowButton initialFollowers={1458} />
          </div>
        </div>

        {/* ── Day 18: Composed Browse Page ───────────────────────────────── */}
        <div className="mb-8">
          <BrowsePage startups={MOCK_STARTUPS} />
        </div>

        {/* ── Day 19: Filterable List with Keys & Conditional Rendering ──── */}
        <FilterableList startups={MOCK_STARTUPS} />

      </div>
    </div>
  );
}

export default App;
