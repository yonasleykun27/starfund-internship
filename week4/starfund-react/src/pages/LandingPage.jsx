import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';

// ─── LandingPage ─────────────────────────────────────────────────────────────
//
// Day 20 — Page 1 of 5 StarFund pages
// The public-facing landing page. Wraps Hero, adds a CTA section,
// a stats bar, and a "How it works" strip.

const STATS = [
  { value: '$4.2M', label: 'Total Raised' },
  { value: '1,200+', label: 'Investors' },
  { value: '47', label: 'Startups Funded' },
  { value: '12', label: 'Countries' },
];

const STEPS = [
  {
    icon: '🔍',
    title: 'Discover',
    desc: 'Browse vetted impact-driven startups across Africa and beyond.',
  },
  {
    icon: '📊',
    title: 'Analyse',
    desc: 'Read detailed campaign pages, team profiles, and financials.',
  },
  {
    icon: '💰',
    title: 'Invest',
    desc: 'Back startups with as little as $250. Track your portfolio live.',
  },
];

const LandingPage = () => (
  <div className="space-y-20">

    {/* ── Hero ────────────────────────────────────────────────────────────── */}
    <div className="text-center pt-10">
      <Hero
        heading="Back the ventures that matter most."
        subheading="StarFund connects growth-stage founders with a curated network of impact-driven investors. Start supporting sustainable projects today."
      />
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <Button variant="primary" size="lg">Explore Campaigns</Button>
        <Button variant="outline" size="lg">List Your Startup</Button>
      </div>
    </div>

    {/* ── Stats Bar ───────────────────────────────────────────────────────── */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
        >
          <p className="text-3xl font-black text-amber-400">{stat.value}</p>
          <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* ── How It Works ────────────────────────────────────────────────────── */}
    <div>
      <h2 className="text-2xl font-bold text-center mb-10">How StarFund Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center bg-slate-900 border border-slate-800 rounded-2xl p-8 gap-4"
          >
            <div className="text-5xl">{step.icon}</div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold bg-amber-400 text-slate-950 rounded-full w-5 h-5 flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
    <div className="bg-amber-400 rounded-3xl p-10 text-center">
      <h2 className="text-3xl font-black text-slate-950 mb-3">
        Ready to make your first investment?
      </h2>
      <p className="text-slate-800 mb-6 text-sm max-w-md mx-auto">
        Join 1,200+ investors backing Africa's most exciting startups from as little as $250.
      </p>
      <Button variant="dark" size="lg">Create Free Account</Button>
    </div>

  </div>
);

export default LandingPage;
