import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

// ─── CreateStartupPage ────────────────────────────────────────────────────────
//
// Day 23 — Create Startup form (for founders) with validations.
// Title, description, sector (dropdown), cover image URL, team size.

const SECTORS = ['Technology', 'Agriculture', 'Healthcare', 'Education', 'FinTech', 'Energy'];

const CreateStartupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    sector: '',
    coverUrl: '',
    teamSize: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'title') {
      if (!value.trim()) errorMsg = 'Startup title is required';
    }

    if (name === 'description') {
      if (!value.trim()) {
        errorMsg = 'Description is required';
      } else if (value.trim().length < 20) {
        errorMsg = 'Description must be at least 20 characters long';
      }
    }

    if (name === 'sector') {
      if (!value) errorMsg = 'Please select a sector';
    }

    if (name === 'coverUrl') {
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
      if (!value) {
        errorMsg = 'Cover image URL is required';
      } else if (!urlRegex.test(value)) {
        errorMsg = 'Please enter a valid image URL';
      }
    }

    if (name === 'teamSize') {
      const num = parseInt(value, 10);
      if (!value) {
        errorMsg = 'Team size is required';
      } else if (isNaN(num) || num <= 0) {
        errorMsg = 'Team size must be a positive integer';
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
    let tempErrors = {};
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if (!form.title.trim()) tempErrors.title = 'Startup title is required';
    
    if (!form.description.trim()) {
      tempErrors.description = 'Description is required';
    } else if (form.description.trim().length < 20) {
      tempErrors.description = 'Description must be at least 20 characters long';
    }

    if (!form.sector) tempErrors.sector = 'Please select a sector';

    if (!form.coverUrl) {
      tempErrors.coverUrl = 'Cover image URL is required';
    } else if (!urlRegex.test(form.coverUrl)) {
      tempErrors.coverUrl = 'Please enter a valid image URL';
    }

    const teamSizeNum = parseInt(form.teamSize, 10);
    if (!form.teamSize) {
      tempErrors.teamSize = 'Team size is required';
    } else if (isNaN(teamSizeNum) || teamSizeNum <= 0) {
      tempErrors.teamSize = 'Team size must be a positive integer';
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
    <div className="min-h-[80vh] py-10 flex justify-center items-center">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h1 className="text-2xl font-black text-white">Create Your Campaign</h1>
          <p className="text-slate-400 text-sm mt-1">List your startup on StarFund to seek crowdfunding</p>
        </div>

        {submitted ? (
          <div className="bg-amber-400/10 border border-amber-400/25 rounded-2xl p-6 text-center space-y-3">
            <div className="text-4xl">🎉</div>
            <p className="text-amber-400 font-bold text-base">Campaign Submitted!</p>
            <p className="text-slate-300 text-xs">
              Your startup <strong>{form.title}</strong> in the {form.sector} sector has been queued for verification.
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/founder/dashboard')} className="mt-3 cursor-pointer">
              Go to Founder Dashboard
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            
            <Input
              id="startup-title"
              label="Startup Title"
              type="text"
              name="title"
              placeholder="e.g. AgroSense AI"
              value={form.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.title}
              required
            />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="startup-desc" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Description <span className="text-amber-400">*</span>
              </label>
              <textarea
                id="startup-desc"
                name="description"
                rows="4"
                placeholder="What problem does your startup solve? (Minimum 20 characters)"
                value={form.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`
                  w-full bg-slate-800 border rounded-xl px-4 py-2.5 text-sm text-white
                  placeholder:text-slate-650 outline-none transition-all duration-200
                  focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60
                  ${errors.description
                    ? 'border-red-500/50 focus:ring-red-400/30 focus:border-red-500/60'
                    : 'border-slate-700 hover:border-slate-600'
                  }
                `}
              />
              {errors.description && (
                <p className="text-xs text-red-400 mt-0.5">⚠ {errors.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sector Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="startup-sector" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Sector <span className="text-amber-400">*</span>
                </label>
                <select
                  id="startup-sector"
                  name="sector"
                  value={form.sector}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`
                    w-full bg-slate-800 border rounded-xl px-4 py-2.5 text-sm text-white
                    outline-none transition-all duration-200
                    focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60
                    ${errors.sector
                      ? 'border-red-500/50 focus:ring-red-400/30 focus:border-red-500/60'
                      : 'border-slate-700 hover:border-slate-600'
                    }
                  `}
                >
                  <option value="">Select a sector</option>
                  {SECTORS.map((sec) => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
                {errors.sector && (
                  <p className="text-xs text-red-400 mt-0.5">⚠ {errors.sector}</p>
                )}
              </div>

              <Input
                id="startup-team"
                label="Team Size"
                type="number"
                name="teamSize"
                placeholder="e.g. 5"
                value={form.teamSize}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.teamSize}
                required
              />
            </div>

            <Input
              id="startup-image"
              label="Cover Image URL"
              type="text"
              name="coverUrl"
              placeholder="https://example.com/image.png"
              value={form.coverUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.coverUrl}
              required
            />

            <Button variant="primary" size="lg" fullWidth type="submit" className="cursor-pointer">
              Launch Campaign
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateStartupPage;
