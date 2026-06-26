import React from 'react';

const Badge = ({ status }) => {
  // Determine badge styling based on status value
  let badgeClasses = 'bg-slate-800 text-slate-400 border-slate-700';
  let label = status;

  switch (status?.toLowerCase()) {
    case 'active':
      badgeClasses = 'bg-amber-400/10 text-amber-400 border-amber-400/20';
      label = 'Active';
      break;
    case 'pending':
      badgeClasses = 'bg-sky-400/10 text-sky-400 border-sky-400/20';
      label = 'Pending';
      break;
    case 'funded':
      badgeClasses = 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
      label = 'Funded';
      break;
    case 'rejected':
      badgeClasses = 'bg-rose-400/10 text-rose-400 border-rose-400/20';
      label = 'Rejected';
      break;
    default:
      break;
  }

  return (
    <span className={`shrink-0 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeClasses}`}>
      {label}
    </span>
  );
};

export default Badge;
