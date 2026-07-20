import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import useForm from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';

// ─── RegisterPage ─────────────────────────────────────────────────────────────
//
// Day 24 — Register Page refactored to use useForm and useAuth

const ROLES = [
  { value: 'investor', label: '💰 Investor', desc: 'Browse and back startups' },
  { value: 'founder', label: '🚀 Founder', desc: 'List your startup for funding' },
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const validate = (formValues) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let tempErrors = {};
    
    if (!formValues.name.trim()) tempErrors.name = 'Full name is required';
    
    if (!formValues.email) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formValues.email)) {
      tempErrors.email = 'Invalid email address format';
    }
    
    if (!formValues.password) {
      tempErrors.password = 'Password is required';
    } else if (formValues.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formValues.confirmPassword) {
      tempErrors.confirmPassword = 'Confirm password is required';
    } else if (formValues.confirmPassword !== formValues.password) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
    
    return tempErrors;
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, setValues } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'investor',
  }, validate);

  const handleRegister = (formValues) => {
    login({
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    });
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
              Account created successfully!
            </p>
            <p className="text-slate-400 text-xs">
              Welcome, {values.name} — role: {values.role}
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/login')} className="mt-2">
              Go to Sign In
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4" noValidate>

            {/* Role selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                I am a...
              </label>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map((r) => {
                  const isActive = values.role === r.value;
                  return (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setValues((prev) => ({ ...prev, role: r.value }))}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              required
            />
            <Input
              id="reg-email"
              label="Email address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              required
            />
            <Input
              id="reg-password"
              label="Password"
              type="password"
              name="password"
              placeholder="Min 8 characters"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              required
            />
            <Input
              id="reg-confirm"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              required
            />

            <Button variant="primary" size="lg" fullWidth type="submit" className="cursor-pointer">
              Create Account
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <button 
            onClick={() => navigate('/login')} 
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors bg-transparent border-0 cursor-pointer"
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
