import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

// ─── CreateStartupPage ────────────────────────────────────────────────────────
//
// Day 24 — Refactored Create Startup page utilizing custom useForm hook

const SECTORS = ['Technology', 'Agriculture', 'Healthcare', 'Education', 'FinTech', 'Energy'];

const CreateStartupPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const validate = (formValues) => {
    let tempErrors = {};
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if (!formValues.title.trim()) tempErrors.title = 'Startup title is required';
    
    if (!formValues.description.trim()) {
      tempErrors.description = 'Description is required';
    } else if (formValues.description.trim().length < 20) {
      tempErrors.description = 'Description must be at least 20 characters long';
    }

    if (!formValues.sector) tempErrors.sector = 'Please select a sector';

    if (!formValues.coverUrl) {
      tempErrors.coverUrl = 'Cover image URL is required';
    } else if (!urlRegex.test(formValues.coverUrl)) {
      tempErrors.coverUrl = 'Please enter a valid image URL';
    }

    const teamSizeNum = parseInt(formValues.teamSize, 10);
    if (!formValues.teamSize) {
      tempErrors.teamSize = 'Team size is required';
    } else if (isNaN(teamSizeNum) || teamSizeNum <= 0) {
      tempErrors.teamSize = 'Team size must be a positive integer';
    }

    return tempErrors;
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, setValues } = useForm({
    title: '',
    description: '',
    sector: '',
    coverUrl: '',
    teamSize: '',
  }, validate);

  const handleCreate = (formValues) => {
    setSubmitted(true);
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
              Your startup <strong>{values.title}</strong> in the {values.sector} sector has been queued for verification.
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/founder/dashboard')} className="mt-3 cursor-pointer">
              Go to Founder Dashboard
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(handleCreate)} className="space-y-5" noValidate>
            
            <Input
              id="startup-title"
              label="Startup Title"
              type="text"
              name="title"
              placeholder="e.g. AgroSense AI"
              value={values.title}
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
                value={values.description}
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
                  value={values.sector}
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
                value={values.teamSize}
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
              value={values.coverUrl}
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
