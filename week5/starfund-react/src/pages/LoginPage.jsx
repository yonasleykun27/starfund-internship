import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

// ─── LoginPage ────────────────────────────────────────────────────────────────
//
// Day 20 — Page 4 of 5 StarFund pages
// Static login form (Week 4 — no real auth yet, that's Week 5+).
// Demonstrates controlled inputs and basic form state.

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">

        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-3">⭐</div>
          <h1 className="text-2xl font-black text-white">Welcome back</h1>
          <p className="text-slate-400 text-sm mt-1">Sign in to your StarFund account</p>
        </div>

        {/* Success state (conditional rendering) */}
        {submitted ? (
          <div className="bg-green-400/10 border border-green-400/25 rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">✅</div>
            <p className="text-green-400 font-semibold text-sm">
              Login submitted! (Auth coming in Week 5)
            </p>
            <p className="text-slate-400 text-xs">Email: {form.email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="login-email"
              label="Email address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              id="login-password"
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <Button variant="primary" size="lg" fullWidth type="submit">
              Sign In
            </Button>
          </form>
        )}

        {/* Footer link */}
        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <button className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
            Create one
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
