import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CampaignGrid from './CampaignGrid';

const BrowsePage = ({ startups }) => {
  // Local state for searching & filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  // Extract unique sectors for filtering bar options
  const sectors = [...new Set(startups.map((s) => s.sector))];

  // Dynamic filter logic combining search input and active category selection
  const filteredStartups = startups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          startup.sector.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'All' || startup.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header section with counts */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white">Browse Campaigns</h2>
          <p className="text-xs text-slate-400 mt-1">Discover and fund impact-driven African startups</p>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
          Showing {filteredStartups.length} of {startups.length} startups
        </span>
      </div>

      {/* Control bar composing Search and Filter controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterBar 
          selectedSector={selectedSector} 
          setSelectedSector={setSelectedSector} 
          sectors={sectors} 
        />
      </div>

      {/* Campaign List Grid */}
      <CampaignGrid startups={filteredStartups} />
    </div>
  );
};

export default BrowsePage;
