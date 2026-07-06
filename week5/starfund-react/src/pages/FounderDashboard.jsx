import React from 'react';

// ─── FounderDashboard Placeholder ─────────────────────────────────────────────
//
// Day 21 — Page route placeholder for Founder Dashboard.
// Full implementation scheduled for Day 25.

const FounderDashboard = () => {
  return (
    <div className="space-y-6 pt-6">
      <div className="border-b border-slate-800 pb-3">
        <h1 className="text-3xl font-black text-white tracking-tight">🚀 Founder Dashboard</h1>
        <p className="text-slate-400 mt-1 text-sm">
          Manage your startup listing, post updates, and track investor activity.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
        <div className="text-4xl">🛠️</div>
        <h2 className="text-lg font-bold text-white">Under Construction</h2>
        <p className="text-slate-400 text-xs max-w-sm mx-auto">
          The founder dashboard layouts, Recharts analytics, and updates modal are scheduled for Day 25.
        </p>
      </div>
    </div>
  );
};

export default FounderDashboard;
