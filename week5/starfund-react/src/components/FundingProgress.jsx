import React, { useState } from 'react';

const FundingProgress = ({ goal, initialRaised = 0 }) => {
  // Use state to track the active funding amount
  const [raised, setRaised] = useState(initialRaised);

  // Calculate percentage dynamically based on state
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  // Handler to increment state
  const handleInvest = () => {
    setRaised(prevRaised => prevRaised + 100);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md max-w-md mx-auto mb-8">
      <span className="inline-block text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">
        Interactive Demo
      </span>
      <h3 className="text-lg font-bold text-white mb-4">Funding Progress</h3>
      
      {/* Target Progress metrics */}
      <div className="flex justify-between text-sm text-slate-400 mb-2">
        <div>
          <p className="text-xs text-slate-500">Raised</p>
          <p className="text-lg font-extrabold text-white">${raised.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Goal Target</p>
          <p className="text-lg font-extrabold text-white">${goal.toLocaleString()}</p>
        </div>
      </div>

      {/* Reactive Progress Bar */}
      <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden mb-6">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Investment Action Button */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-amber-400">{percentage}% Funded</span>
        <button 
          onClick={handleInvest}
          className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-black font-extrabold text-xs px-4 py-2.5 rounded-lg transition duration-200 shadow-sm"
        >
          Invest $100
        </button>
      </div>
    </div>
  );
};

export default FundingProgress;
