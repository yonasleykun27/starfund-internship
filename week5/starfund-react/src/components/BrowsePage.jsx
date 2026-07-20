import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CampaignGrid from './CampaignGrid';
import useDebounce from '../hooks/useDebounce';

// ─── BrowsePage ───────────────────────────────────────────────────────────────
//
// Refactored to include:
//   • Exercise 21 — useDebounce hook for search input
//   • Exercise 22 — Pagination component splitting list into pages of 6
//   • Exercise 23 — Sort by dropdown (funding %, date, goal amount)

const ITEMS_PER_PAGE = 6;

const BrowsePage = ({ startups = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  // Exercise 21: Debounce search input by 400ms
  const debouncedSearch = useDebounce(searchQuery, 400);

  // Reset page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedSector, sortBy]);

  // Extract unique sectors for filtering bar options
  const sectors = [...new Set(startups.map((s) => s.sector))];

  // 1. Filter: Search Query + Sector Category
  const filtered = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      startup.sector.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesSector = selectedSector === 'All' || startup.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  // 2. Sort (Exercise 23): funding %, date (founded year), goal amount
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'funding') {
      const pctA = a.raised / a.goal;
      const pctB = b.raised / b.goal;
      return pctB - pctA; // descending
    }
    if (sortBy === 'date') {
      return parseInt(b.founded, 10) - parseInt(a.founded, 10); // descending
    }
    if (sortBy === 'goal') {
      return b.goal - a.goal; // descending
    }
    return 0; // default (no sorting)
  });

  // 3. Paginate (Exercise 22): Slice list to 6 items per page
  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedStartups = sorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-8">
      {/* Header section with counts */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white">Browse Campaigns</h2>
          <p className="text-xs text-slate-400 mt-1">Discover and fund impact-driven African startups</p>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
          Showing {sorted.length} of {startups.length} startups
        </span>
      </div>

      {/* Controls: Search, Categorization, and Sorting */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Categorization Filter */}
          <FilterBar 
            selectedSector={selectedSector} 
            setSelectedSector={setSelectedSector} 
            sectors={sectors} 
          />

          {/* Exercise 23: Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="browse-sort" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Sort By:
            </label>
            <select
              id="browse-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-350 outline-none hover:border-slate-600 focus:ring-2 focus:ring-amber-400/40 cursor-pointer"
            >
              <option value="default">None (Default)</option>
              <option value="funding">Funding Raised %</option>
              <option value="date">Founded Year</option>
              <option value="goal">Goal Target Amount</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campaign List Grid */}
      <CampaignGrid startups={paginatedStartups} />

      {/* Exercise 22: Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              currentPage === 1
                ? 'opacity-40 border-slate-800 text-slate-600 pointer-events-none'
                : 'border-slate-700 hover:border-amber-400 hover:text-amber-400 text-slate-300'
            }`}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const isCurrent = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-400 border-amber-400 text-slate-950'
                    : 'border-slate-700 hover:border-amber-400 hover:text-amber-400 text-slate-300'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              currentPage === totalPages
                ? 'opacity-40 border-slate-800 text-slate-600 pointer-events-none'
                : 'border-slate-700 hover:border-amber-400 hover:text-amber-400 text-slate-300'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowsePage;
