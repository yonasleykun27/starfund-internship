import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

// ─── MultiStepForm Component ──────────────────────────────────────────────────
//
// Exercise 20 — Multi-step form (3 steps) using state to track current step
//
// Demonstrates:
//   • useState to track currentStep (0, 1, 2)
//   • Conditional rendering of each step's content (ternary / step === N)
//   • State as an object for multi-field form data
//   • Step indicator UI with conditional class names
//
// Steps:
//   1. Account info (name, email, password)
//   2. Role & profile (role selector, bio)
//   3. Review & submit

const STEPS = [
  { label: 'Account', icon: '👤' },
  { label: 'Profile', icon: '🎯' },
  { label: 'Review', icon: '✅' },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'investor',
    bio: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const next = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
        <div className="text-5xl">🎉</div>
        <h3 className="text-xl font-bold text-white">Registration Complete!</h3>
        <p className="text-slate-400 text-sm">Welcome, {form.name}. Role: <strong className="text-amber-400">{form.role}</strong></p>
        <Button onClick={() => { setSubmitted(false); setCurrentStep(0); setForm({ name: '', email: '', password: '', role: 'investor', bio: '' }); }} variant="outline" size="sm">
          Start over
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ── Step Indicator ───────────────────────────────────────────────── */}
      <div className="flex items-center gap-0">
        {STEPS.map((step, i) => {
          const isActive = i === currentStep;
          const isDone = i < currentStep;
          return (
            <React.Fragment key={step.label}>
              {/* Step circle */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                    isDone
                      ? 'bg-amber-400 border-amber-400 text-slate-950'
                      : isActive
                        ? 'bg-amber-400/20 border-amber-400 text-amber-400'
                        : 'bg-slate-800 border-slate-700 text-slate-500'
                  }`}
                >
                  {isDone ? '✓' : step.icon}
                </div>
                <span className={`text-[10px] font-semibold ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                  {step.label}
                </span>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-300 ${
                    i < currentStep ? 'bg-amber-400' : 'bg-slate-700'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ── Step Content ─────────────────────────────────────────────────── */}
      <div className="min-h-[200px]">

        {/* Step 0 — Account Info */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <Input id="ms-name" label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Yonas Leykun" required />
            <Input id="ms-email" label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            <Input id="ms-password" label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min 8 characters" required />
          </div>
        )}

        {/* Step 1 — Profile */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">I am a...</label>
              <div className="grid grid-cols-2 gap-3">
                {['investor', 'founder'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, role: r }))}
                    className={`p-3 rounded-xl border text-sm font-semibold capitalize transition-all ${
                      form.role === r
                        ? 'bg-amber-400/10 border-amber-400/50 text-amber-400'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {r === 'investor' ? '💰 Investor' : '🚀 Founder'}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bio (optional)</label>
              <textarea
                id="ms-bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us a bit about yourself..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60 transition-all resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 2 — Review */}
        {currentStep === 2 && (
          <div className="space-y-3 bg-slate-950 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-slate-300 mb-3">Review your details</h3>
            {[
              { label: 'Name', value: form.name || '—' },
              { label: 'Email', value: form.email || '—' },
              { label: 'Password', value: form.password ? '••••••••' : '—' },
              { label: 'Role', value: form.role },
              { label: 'Bio', value: form.bio || 'Not provided' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 text-sm">
                <span className="text-slate-500 w-20 shrink-0">{item.label}</span>
                <span className="text-white capitalize">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Navigation Buttons ───────────────────────────────────────────── */}
      <div className="flex justify-between pt-2">
        <Button
          id="multistep-back-btn"
          variant="ghost"
          onClick={back}
          disabled={currentStep === 0}
        >
          ← Back
        </Button>

        {currentStep < STEPS.length - 1 ? (
          <Button id="multistep-next-btn" variant="primary" onClick={next}>
            Next →
          </Button>
        ) : (
          <Button id="multistep-submit-btn" variant="primary" onClick={handleSubmit}>
            Submit ✓
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
