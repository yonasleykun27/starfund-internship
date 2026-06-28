import React, { useState } from 'react';
import BrowsePage from '../components/BrowsePage';
import FilterableList from '../components/FilterableList';
import { MOCK_STARTUPS } from '../data/mockData';

// ─── BrowsePageView ───────────────────────────────────────────────────────────
//
// Day 20 — Page 2 of 5 StarFund pages
// Wraps the Browse section components (BrowsePage + FilterableList).
// Data comes from mockData.js — not hardcoded here.

const BrowsePageView = () => {
  return (
    <div className="space-y-12">
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
      <BrowsePage startups={MOCK_STARTUPS} />

      {/* FilterableList (Day 19 — lists, keys, conditional rendering) */}
      <FilterableList startups={MOCK_STARTUPS} />
    </div>
  );
};

export default BrowsePageView;
