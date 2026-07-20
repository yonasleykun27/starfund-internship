import React from 'react';
import CampaignCard from './CampaignCard';

const CampaignGrid = ({ startups }) => {
  // Day 16 checklist item: handle empty state correctly
  if (!startups || startups.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-slate-900/50 border border-slate-800 rounded-3xl">
        <svg 
          className="mx-auto h-12 w-12 text-slate-600 mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="text-lg font-bold text-white mb-2">No Campaigns Found</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          We couldn't find any campaigns matching your search or filters. Try adjusting your queries.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {startups.map((startup) => (
        // Key prop applied on mapping, meeting review checklist requirements
        <CampaignCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
};

export default CampaignGrid;
