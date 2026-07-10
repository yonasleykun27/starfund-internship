import React, { useState } from 'react';
import { MOCK_STARTUPS, MOCK_USERS } from '../data/mockData';
import Table from '../components/Table';
import Button from '../components/Button';
import Badge from '../components/Badge';

// ─── AdminDashboard ───────────────────────────────────────────────────────────
//
// Day 25 — Complete Admin Dashboard milestone
// Includes platform stats bar, registered users list table, and active verification queue.

const AdminDashboard = () => {
  const [startups, setStartups] = useState(MOCK_STARTUPS);
  const [users, setUsers] = useState(MOCK_USERS);
  const [notification, setNotification] = useState(null);

  // Filter pending startups
  const pendingStartups = startups.filter((s) => s.status === 'pending');

  // Platform Analytics Calculations
  const totalRaised = startups.reduce((acc, curr) => acc + curr.raised, 0);
  const activeCount = startups.filter((s) => s.status === 'active').bind ? startups.filter((s) => s.status === 'active').length : startups.filter((s) => s.status === 'active').length;
  const fundedCount = startups.filter((s) => s.status === 'funded').length;

  const handleApprove = (id, name) => {
    setStartups((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'active' } : s))
    );
    showNotice(`✅ Startup "${name}" has been approved and is now active.`);
  };

  const handleReject = (id, name) => {
    setStartups((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'rejected' } : s))
    );
    showNotice(`❌ Startup "${name}" has been rejected.`);
  };

  const showNotice = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <div className="space-y-8 pt-6">
      
      {/* Dashboard Header */}
      <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
            🔑 Admin Control Panel
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Platform-wide analytics, user rosters, and campaign compliance controls.
          </p>
        </div>
      </div>

      {/* Live notification alerts */}
      {notification && (
        <div className="bg-slate-900 border border-amber-400/20 text-amber-300 px-4 py-3 rounded-2xl text-xs font-semibold animate-pulse flex items-center gap-2">
          <span>🔔</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Platform Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-1">
          <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Total Platform Investment</p>
          <p className="text-2xl font-black text-white">${totalRaised.toLocaleString()}</p>
          <p className="text-[10px] text-slate-400">Across all sectors and states</p>
        </div>

        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-1">
          <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Total Startups Listed</p>
          <p className="text-2xl font-black text-white">{startups.length}</p>
          <p className="text-[10px] text-slate-400">Active, Pending & Rejected</p>
        </div>

        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-1">
          <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Active Campaigns</p>
          <p className="text-2xl font-black text-green-400">{activeCount}</p>
          <p className="text-[10px] text-slate-400">Currently collecting funds</p>
        </div>

        <div className="bg-slate-900 border border-slate-850 p-5 rounded-3xl space-y-1">
          <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Pending Verifications</p>
          <p className={`text-2xl font-black ${pendingStartups.length > 0 ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`}>
            {pendingStartups.length}
          </p>
          <p className="text-[10px] text-slate-400">Awaiting compliance screening</p>
        </div>
      </div>

      {/* Main Grid: Pending Queue (Left) & User Table (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Verification Queue (2 cols) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-850 rounded-3xl p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              📋 Campaign Verification Queue
            </h2>
            <p className="text-xs text-slate-500">Screen pitch details, goal thresholds, and founders compliance.</p>
          </div>

          {pendingStartups.length === 0 ? (
            <div className="bg-slate-800/20 border border-slate-800 rounded-2xl p-8 text-center space-y-2">
              <div className="text-3xl">✨</div>
              <p className="text-slate-400 text-xs font-semibold">All startup applications verified! No pending items.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingStartups.map((start) => (
                <div key={start.id} className="bg-slate-850 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-all">
                  <div className="space-y-2 max-w-lg">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-white text-sm">{start.name}</h3>
                      <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full capitalize">{start.sector}</span>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">{start.location}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{start.description}</p>
                    <div className="text-[10px] text-slate-500 flex gap-4">
                      <span>Goal Target: <strong>${start.goal.toLocaleString()}</strong></span>
                      <span>Team Size: <strong>{start.teamSize}</strong> members</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 md:self-center shrink-0">
                    <button
                      onClick={() => handleReject(start.id, start.name)}
                      className="px-3 py-1.5 rounded-xl border border-red-500/20 text-red-400 text-xs font-semibold hover:bg-red-500/10 transition-all cursor-pointer"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApprove(start.id, start.name)}
                      className="px-3 py-1.5 rounded-xl bg-green-500 hover:bg-green-600 text-slate-950 text-xs font-black transition-all cursor-pointer"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User roster (1 col) */}
        <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white">Registered Users</h2>
            <p className="text-xs text-slate-500">Active database user registry</p>
          </div>
          <Table
            headers={['User', 'Role']}
            rows={users.map((u) => [
              <div>
                <p className="text-xs font-bold text-white leading-none">{u.name}</p>
                <p className="text-[9px] text-slate-500 leading-none mt-1">{u.email}</p>
              </div>,
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full capitalize ${
                u.role === 'admin' ? 'bg-red-400/10 text-red-400' :
                u.role === 'founder' ? 'bg-amber-400/10 text-amber-400' :
                'bg-blue-400/10 text-blue-400'
              }`}>
                {u.role}
              </span>
            ])}
          />
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
