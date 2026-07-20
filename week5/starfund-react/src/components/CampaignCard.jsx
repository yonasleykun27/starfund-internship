import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import ProgressBar from './ProgressBar';

const CampaignCard = ({ startup }) => {
  const { id, name, sector, raised, goal, backers, image, tag, status } = startup;
  
  // Calculate percentage dynamically
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 shadow-md">
      {/* Cover Image */}
      <div className="h-48 overflow-hidden bg-slate-950 relative">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-950 font-bold">
            {name}
          </div>
        )}
        <span className="absolute top-4 right-4 bg-amber-400 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
          {tag || 'Trending'}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Category, Title, and Status Badge */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{sector}</span>
            <h3 className="text-lg font-extrabold text-white mt-1 leading-snug">{name}</h3>
          </div>
          {/* Day 18: Render composed status badge */}
          <Badge status={status} />
        </div>

        {/* Funding statistics */}
        <div className="mt-2">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold text-white">${raised.toLocaleString()} raised</span>
            <span>{percentage}% of ${goal.toLocaleString()}</span>
          </div>
          {/* Day 18: Render composed progress bar */}
          <ProgressBar percentage={percentage} />
        </div>

        {/* Backers footer */}
        <div className="flex justify-between items-center text-xs text-slate-500 pt-3 border-t border-slate-800 mt-auto">
          <span>{backers} Backers</span>
          <Link 
            to={`/startup/${id}`}
            className="text-amber-400/80 hover:text-amber-400 cursor-pointer font-medium transition"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};


export default CampaignCard;
