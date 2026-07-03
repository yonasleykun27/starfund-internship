import React from 'react';
import { MOCK_STARTUPS } from '../data/mockData';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

// ─── StartupDetailPage ────────────────────────────────────────────────────────
//
// Day 20 — Page 3 of 5 StarFund pages
// Shows detailed view of a single startup.
// In Week 4 we pass the id as a prop (no React Router yet — that's Week 5).
// Week 5 will replace the prop with useParams() from React Router.

const StartupDetailPage = ({ startupId = 1 }) => {
  // Find the startup by id from mockData — single source of truth
  const startup = MOCK_STARTUPS.find((s) => s.id === startupId);

  // Conditional rendering: if id not found, show error state
  if (!startup) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-white mb-2">Startup not found</h2>
        <p className="text-slate-400">No startup with id #{startupId} exists in our database.</p>
      </div>
    );
  }

  const { name, sector, raised, goal, backers, image, status, description, teamSize, founded, location, updates = [] } = startup;
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="max-w-4xl mx-auto space-y-10 pt-6">

      {/* ── Cover image + Title ──────────────────────────────────────────── */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
        <div className="h-64 sm:h-80 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{sector}</span>
            <h1 className="text-3xl font-black text-white mt-1">{name}</h1>
          </div>
          <div className="absolute top-4 right-4">
            <Badge status={status} />
          </div>
        </div>

        {/* ── Stats bar ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800">
          {[
            { label: 'Raised', value: `$${raised.toLocaleString()}` },
            { label: 'Goal', value: `$${goal.toLocaleString()}` },
            { label: 'Backers', value: backers.toLocaleString() },
          ].map((stat) => (
            <div key={stat.label} className="py-5 text-center">
              <p className="text-xl font-black text-amber-400">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Progress ────────────────────────────────────────────────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-white font-semibold">{percentage}% funded</span>
          <span className="text-slate-400">{`$${raised.toLocaleString()} of $${goal.toLocaleString()}`}</span>
        </div>
        <ProgressBar percentage={percentage} />
        <Button variant="primary" size="lg" fullWidth>Back This Startup</Button>
      </div>

      {/* ── About ───────────────────────────────────────────────────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-white">About</h2>
        <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
        <div className="grid grid-cols-3 gap-4 pt-2">
          {[
            { label: 'Founded', value: founded },
            { label: 'Team Size', value: `${teamSize} people` },
            { label: 'Location', value: location },
          ].map((info) => (
            <div key={info.label}>
              <p className="text-xs text-slate-500">{info.label}</p>
              <p className="text-sm font-semibold text-white mt-0.5">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Updates ─────────────────────────────────────────────────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Founder Updates</h2>
        {/* && short-circuit: only render list when updates exist */}
        {updates.length > 0 ? (
          <ul className="space-y-3">
            {updates.map((u, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-amber-400 font-mono shrink-0">{u.date}</span>
                <span className="text-slate-300">{u.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 text-sm">No updates yet from this founder.</p>
        )}
      </div>

    </div>
  );
};

export default StartupDetailPage;
