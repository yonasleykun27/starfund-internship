import React from 'react';

const ProgressBar = ({ percentage }) => {
  // Ensure percentage stays between 0 and 100
  const widthPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-700 ease-out" 
        style={{ width: `${widthPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
