import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

// ─── LoginPage ────────────────────────────────────────────────────────────────
//
// Day 23 — Login Page with Validation
// Fully implements Day 23 validation rules for Login form.

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMsg = 'Email address is required';
      } else if (!emailRegex.test(value)) {
        errorMsg = 'Invalid email address format';
      }
    }
    
    if (name === 'password') {
      if (!value) {
        errorMsg = 'Password is required';
      }
    }
    
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateAll = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let tempErrors = {};
    
    if (!form.email) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'Invalid email address format';
    }
    
    if (!form.password) {
      tempErrors.password = 'Password is required';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setSubmitted(true);
    }
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
              Login submitted successfully!
            </p>
            <p className="text-slate-400 text-xs">Email: {form.email}</p>
            <Button variant="outline" size="sm" onClick={() => navigate('/founder/dashboard')} className="mt-2">
              Go to Dashboard
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              id="login-email"
              label="Email address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
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
              onBlur={handleBlur}
              error={errors.password}
              required
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors bg-transparent border-0 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
            <Button variant="primary" size="lg" fullWidth type="submit" className="cursor-pointer">
              Sign In
            </Button>
          </form>
        )}

        {/* Footer link */}
        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <button 
            onClick={() => navigate('/register')} 
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors bg-transparent border-0 cursor-pointer"
          >
            Create one
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
