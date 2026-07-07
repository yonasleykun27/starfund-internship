import React, { useState, useEffect } from 'react';
import BrowsePage from '../components/BrowsePage';
import FilterableList from '../components/FilterableList';
import LoadingSpinner from '../components/LoadingSpinner';
import { MOCK_STARTUPS } from '../data/mockData';

// ─── BrowsePageView ───────────────────────────────────────────────────────────
//
// Day 22 — Browse page view demonstrating simulated async data loading with useEffect.

const BrowsePageView = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state on mount
    setLoading(true);
    setError(null);

    // Simulate async network request
    const timer = setTimeout(() => {
      try {
        setStartups(MOCK_STARTUPS);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch campaigns. Please refresh.');
        setLoading(false);
      }
    }, 1000);

    // Cleanup: cancel the async timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading investment opportunities..." />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
        <div className="text-5xl">⚠️</div>
        <h2 className="text-xl font-bold text-white">Error loading campaigns</h2>
        <p className="text-slate-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-[fadeIn_0.3s_ease]">
      {/* Section header */}
      <div className="text-center pt-6">
        <h1 className="text-4xl font-black text-white tracking-tight">
          Browse Campaigns
        </h1>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
          Explore impact-driven startups from across Africa. Filter by status, search by name, and back the ones that move you.
        </p>
      </div>

      {/* BrowsePage (Day 18 — composed component) */}
      <BrowsePage startups={startups} />

      {/* FilterableList (Day 19 — lists, keys, conditional rendering) */}
      <FilterableList startups={startups} />
    </div>
  );
};

export default BrowsePageView;

