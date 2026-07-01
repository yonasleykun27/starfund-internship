import React from 'react';

const FilterBar = ({ selectedSector, setSelectedSector, sectors }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-800">
      {/* 'All' option */}
      <button
        onClick={() => setSelectedSector('All')}
        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition duration-200 shrink-0 border ${
          selectedSector === 'All'
            ? 'bg-amber-400 text-black border-amber-400'
            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
        }`}
      >
        All Sectors
      </button>

      {/* Dynamic Sector Options */}
      {sectors.map((sector) => (
        <button
          key={sector}
          onClick={() => setSelectedSector(sector)}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition duration-200 shrink-0 border ${
            selectedSector === sector
              ? 'bg-amber-400 text-black border-amber-400'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
          }`}
        >
          {sector}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
