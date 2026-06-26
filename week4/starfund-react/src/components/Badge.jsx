import React from 'react';

// ─── Badge Component ──────────────────────────────────────────────────────────
//
// Day 19 — Daily Assignment: Status Badge System
//
// Each campaign status maps to a specific badge color:
//   'pending'  → yellow badge
//   'active'   → green badge
//   'funded'   → blue badge
//   'rejected' → red badge
//
// Demonstrates: conditional class names, ternary rendering inside a component,
// && short-circuit for the pulsing dot on 'active' status.

const STATUS_MAP = {
  active: {
    dot: 'bg-green-400',
    pill: 'bg-green-400/10 text-green-400 border-green-400/25',
    label: 'Active',
    pulse: true, // animate the dot for live campaigns
  },
  pending: {
    dot: 'bg-yellow-400',
    pill: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/25',
    label: 'Pending',
    pulse: false,
  },
  funded: {
    dot: 'bg-blue-400',
    pill: 'bg-blue-400/10 text-blue-400 border-blue-400/25',
    label: 'Funded',
    pulse: false,
  },
  rejected: {
    dot: 'bg-red-400',
    pill: 'bg-red-400/10 text-red-400 border-red-400/25',
    label: 'Rejected',
    pulse: false,
  },
};

const Badge = ({ status }) => {
  // Normalise status to lowercase; fall back to a generic grey style
  const key = status?.toLowerCase();
  const config = STATUS_MAP[key];

  // Conditional rendering: if status is unrecognised, show a grey fallback
  if (!config) {
    return (
      <span className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-slate-800 text-slate-400 border-slate-700">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        {status ?? 'Unknown'}
      </span>
    );
  }

  return (
    <span
      className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${config.pill}`}
    >
      {/* Pulsing dot for 'active' campaigns — && short-circuit */}
      {config.pulse ? (
        <span className={`relative flex h-1.5 w-1.5`}>
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-60`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.dot}`} />
        </span>
      ) : (
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      )}
      {config.label}
    </span>
  );
};

export default Badge;
