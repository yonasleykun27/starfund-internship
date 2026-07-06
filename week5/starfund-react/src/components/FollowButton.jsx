import React, { useState } from 'react';

const FollowButton = ({ initialFollowers = 0 }) => {
  // Use state to track following boolean and count
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(initialFollowers);

  // Toggle state and adjust count
  const handleToggle = () => {
    setIsFollowing(prev => {
      const next = !prev;
      setFollowersCount(count => next ? count + 1 : count - 1);
      return next;
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md max-w-md mx-auto mb-8 flex items-center justify-between">
      <div>
        <h4 className="text-sm font-bold text-white">Startup Followers</h4>
        <p className="text-xs text-slate-500 mt-0.5">
          <span className="font-extrabold text-slate-300">{followersCount}</span> followers
        </p>
      </div>

      <button 
        onClick={handleToggle}
        className={`font-bold text-xs px-5 py-2.5 rounded-lg transition duration-200 shadow-sm active:scale-95 ${
          isFollowing 
            ? 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white' 
            : 'bg-amber-400 text-black hover:bg-amber-300'
        }`}
      >
        {isFollowing ? 'Following ✓' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
