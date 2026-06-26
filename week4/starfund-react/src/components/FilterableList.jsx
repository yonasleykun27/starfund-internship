import React, { useState } from 'react';
import CampaignCard from './CampaignCard';

// ─── Possible filter values ──────────────────────────────────────────────────

const FILTER_OPTIONS = [
  { value: 'all',      label: 'All Campaigns' },
  { value: 'active',   label: 'Active' },
  { value: 'pending',  label: 'Pending' },
  { value: 'funded',   label: 'Funded' },
  { value: 'rejected', label: 'Rejected' },
];

// ─── FilterableList Component ────────────────────────────────────────────────
//
// Day 19 — Lists, Keys & Conditional Rendering
//
// Demonstrates:
//   • Rendering arrays with .map() and unique key props (id, never index)
//   • List filtering inside JSX using .filter()
//   • Conditional rendering with ternary operator
//   • && short-circuit for empty-state message
//   • Conditional class names based on active filter state

const FilterableList = ({ startups = [] }) => {
  // State: which status filter is currently active
  const [activeFilter, setActiveFilter] = useState('all');

  // ── Apply filter ────────────────────────────────────────────────────────
  // If 'all' is selected → show every startup; otherwise filter by status
  const filtered = activeFilter === 'all'
    ? startups
    : startups.filter((s) => s.status === activeFilter);

  return (
    <section className="mb-12">
      {/* Section header */}
      <div className="border-b border-slate-800 pb-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Day 19: Lists, Keys &amp; Conditional Rendering
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Filtering startup cards from a mock data array. Empty state shown when no results match.
        </p>
      </div>

      {/* ── Filter tabs ──────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTER_OPTIONS.map((option) => {
          // Conditional class names: amber accent for active tab, muted for others
          const isActive = activeFilter === option.value;
          const tabClasses = isActive
            ? 'bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-400/20'
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200';

          return (
            <button
              key={option.value}               // ← unique key (not index)
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${tabClasses}`}
            >
              {option.label}
              {/* Show count badge next to each tab */}
              <span className={`ml-1.5 text-xs ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                ({option.value === 'all'
                  ? startups.length
                  : startups.filter((s) => s.status === option.value).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Campaign cards list ───────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        // ternary: results found → render grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((startup) => (
            // key prop uses startup.id — never the array index
            <CampaignCard key={startup.id} startup={startup} />
          ))}
        </div>
      ) : (
        // ternary: no results → render empty state
        <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/50">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-semibold text-slate-300 mb-1">No campaigns found</h3>
          <p className="text-slate-500 text-sm">
            There are no <strong className="text-slate-400">{activeFilter}</strong> campaigns right now.
          </p>
          {/* && short-circuit: only show this button when filter is NOT 'all' */}
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 bg-amber-400 text-slate-950 text-sm font-semibold rounded-full hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Show all campaigns
            </button>
          )}
        </div>
      )}

      {/* Summary line — && short-circuit: only show when a filter is active */}
      {activeFilter !== 'all' && filtered.length > 0 && (
        <p className="text-xs text-slate-500 mt-4 text-right">
          Showing {filtered.length} of {startups.length} campaigns · filter: <span className="text-amber-400 capitalize">{activeFilter}</span>
        </p>
      )}
    </section>
  );
};

export default FilterableList;
