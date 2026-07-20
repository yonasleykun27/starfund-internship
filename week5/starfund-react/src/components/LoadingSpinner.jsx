import React from 'react';

// ─── LoadingSpinner Component ────────────────────────────────────────────────
//
// Day 22 — Reusable loading spinner component.
// Renders an animated SVG spinner with standard styling.

const LoadingSpinner = ({ message = 'Fetching project data...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      {/* SVG Spinner */}
      <svg
        className="animate-spin h-10 w-10 text-amber-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {/* Dynamic pulsating message */}
      <p className="text-slate-400 text-sm font-medium animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
