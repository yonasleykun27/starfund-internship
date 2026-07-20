import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useAuth } from '../context/AuthContext';
import { MOCK_STARTUPS } from '../data/mockData';

// ─── FounderDashboard ──────────────────────────────────────────────────────────
//
// Day 25 — Complete Founder Dashboard milestone
// Enforces ProtectedRoute, Recharts analytics, stats, and live update post modal.

const MOCK_INVESTORS = [
  { name: 'Aster Kebede', amount: 5000, date: '2026-07-08', avatar: 'AK' },
  { name: 'Dawit Mengistu', amount: 1200, date: '2026-07-07', avatar: 'DM' },
  { name: 'Solomon Teshome', amount: 2500, date: '2026-07-05', avatar: 'ST' },
  { name: 'Helen Hailu', amount: 10000, date: '2026-07-01', avatar: 'HH' },
  { name: 'Yared Bikila', amount: 3500, date: '2026-06-28', avatar: 'YB' },
];

const FUNDING_HISTORY = [
  { date: 'Jul 01', raised: 145000 },
  { date: 'Jul 03', raised: 152000 },
  { date: 'Jul 05', raised: 160000 },
  { date: 'Jul 07', raised: 171500 },
  { date: 'Jul 08', raised: 179000 },
  { date: 'Jul 10', raised: 184000 },
];

const FounderDashboard = () => {
  const { currentUser } = useAuth();
  
  // Find associated startup (fallback to AgroSense AI)
  const myStartup = MOCK_STARTUPS.find(s => s.id === 1) || MOCK_STARTUPS[0];
  
  const [updates, setUpdates] = useState(myStartup.updates || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUpdate, setNewUpdate] = useState('');
  const [error, setError] = useState('');

  const handlePostUpdate = (e) => {
    e.preventDefault();
    if (!newUpdate.trim()) {
      setError('Update message cannot be empty');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const updateObj = {
      date: today,
      text: newUpdate.trim()
    };

    setUpdates((prev) => [updateObj, ...prev]);
    setNewUpdate('');
    setError('');
    setIsModalOpen(false);
  };

  const percentRaised = Math.min(100, Math.round((myStartup.raised / myStartup.goal) * 100));

  return (
    <div className="space-y-8 pt-6">
      
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
            🚀 Founder Dashboard
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Overview and statistics for <span className="text-amber-400 font-bold">{myStartup.name}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="primary" onClick={() => setIsModalOpen(true)} className="cursor-pointer font-bold">
            📢 Post Campaign Update
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Raised Card */}
        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-2">
          <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Total Funding Raised</p>
          <p className="text-2xl font-black text-white">${myStartup.raised.toLocaleString()}</p>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Goal: ${myStartup.goal.toLocaleString()}</span>
            <span className="text-amber-400 font-bold">{percentRaised}%</span>
          </div>
        </div>

        {/* Backers Card */}
        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-2">
          <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Total Backers</p>
          <p className="text-2xl font-black text-white">{myStartup.backers}</p>
          <p className="text-xs text-slate-400">Average: ${(myStartup.raised / myStartup.backers).toFixed(0)} per backer</p>
        </div>

        {/* Updates Card */}
        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-2">
          <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Updates Posted</p>
          <p className="text-2xl font-black text-white">{updates.length}</p>
          <p className="text-xs text-slate-400">Keep investors engaged with news</p>
        </div>

        {/* Status Card */}
        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-2">
          <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Campaign Status</p>
          <p className="text-2xl font-black capitalize text-amber-400">{myStartup.status}</p>
          <p className="text-xs text-slate-400">Role: Founder ({currentUser?.name})</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart section (Left, spanning 2 cols) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-850 rounded-3xl p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white">Funding Growth Timeline</h2>
            <p className="text-xs text-slate-500">Track raised capital progress throughout July</p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={FUNDING_HISTORY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRaised" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" tickLine={false} style={{ fontSize: 11 }} />
                <YAxis stroke="#64748b" tickLine={false} style={{ fontSize: 11 }} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: 12 }} 
                  labelStyle={{ fontWeight: 'bold', color: '#fff' }}
                  itemStyle={{ color: '#fbbf24' }}
                  formatter={(v) => [`$${v.toLocaleString()}`, 'Total Raised']}
                />
                <Area type="monotone" dataKey="raised" stroke="#fbbf24" strokeWidth={2} fillOpacity={1} fill="url(#colorRaised)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Backers List (Right, 1 col) */}
        <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 space-y-5">
          <h2 className="text-lg font-bold text-white">Recent Investors</h2>
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {MOCK_INVESTORS.map((inv, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-slate-850 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center text-xs">
                    {inv.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{inv.name}</p>
                    <p className="text-[10px] text-slate-500">{inv.date}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400">+${inv.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Campaign Updates Feed */}
      <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Campaign Updates Feed</h2>
        {updates.length === 0 ? (
          <p className="text-xs text-slate-500 py-3 text-center">No updates posted yet. Keep your backers informed!</p>
        ) : (
          <div className="space-y-4">
            {updates.map((up, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                    Update #{updates.length - idx}
                  </span>
                  <span className="text-[10px] text-slate-500">{up.date}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{up.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Update Modal */}
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setError(''); }} title="📢 Broadcast Campaign Update">
        <form onSubmit={handlePostUpdate} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="update-text" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Update Message
            </label>
            <textarea
              id="update-text"
              rows="4"
              placeholder="e.g. We have successfully completed our second phase of validation testing with positive feedback!"
              value={newUpdate}
              onChange={(e) => { setNewUpdate(e.target.value); if (error) setError(''); }}
              className={`
                w-full bg-slate-800 border rounded-xl px-4 py-2.5 text-sm text-white
                placeholder:text-slate-600 outline-none transition-all duration-200
                focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60
                ${error ? 'border-red-500/50' : 'border-slate-700'}
              `}
              required
            />
            {error && <p className="text-xs text-red-400 mt-0.5">⚠ {error}</p>}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" type="button" onClick={() => { setIsModalOpen(false); setError(''); }} className="cursor-pointer">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="cursor-pointer">
              Post Update
            </Button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default FounderDashboard;
