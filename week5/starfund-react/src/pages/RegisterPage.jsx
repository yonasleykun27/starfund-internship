import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

// ─── RegisterPage ─────────────────────────────────────────────────────────────
//
// Day 20 — Page 5 of 5 StarFund pages
// Static register form. Full validation will be added in Week 5 (Day 23).
// For now: demonstrates controlled multi-field form state + role selection.

const ROLES = [
  { value: 'investor', label: '💰 Investor', desc: 'Browse and back startups' },
  { value: 'founder', label: '🚀 Founder', desc: 'List your startup for funding' },
];

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'investor',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-10">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">

        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-3">🌟</div>
          <h1 className="text-2xl font-black text-white">Join StarFund</h1>
          <p className="text-slate-400 text-sm mt-1">Create your free account today</p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="bg-amber-400/10 border border-amber-400/25 rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">🎉</div>
            <p className="text-amber-400 font-semibold text-sm">
              Account created! (Auth coming in Week 5)
            </p>
            <p className="text-slate-400 text-xs">
              Welcome, {form.name} — role: {form.role}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Role selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                I am a...
              </label>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map((r) => {
                  const isActive = form.role === r.value;
                  return (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, role: r.value }))}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-400/10 border-amber-400/50 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <p className="font-semibold text-sm">{r.label}</p>
                      <p className={`text-xs mt-0.5 ${isActive ? 'text-amber-400/70' : 'text-slate-500'}`}>
                        {r.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <Input
              id="reg-name"
              label="Full Name"
              type="text"
              name="name"
              placeholder="Yonas Leykun"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              id="reg-email"
              label="Email address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              id="reg-password"
              label="Password"
              type="password"
              name="password"
              placeholder="Min 8 characters"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              id="reg-confirm"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <Button variant="primary" size="lg" fullWidth type="submit">
              Create Account
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <button className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
            Sign in
          </button>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
