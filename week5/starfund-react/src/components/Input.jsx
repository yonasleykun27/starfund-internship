import React from 'react';

// ─── Input Component ──────────────────────────────────────────────────────────
//
// Day 20 — Reusable controlled input component
// Part of the component library built for Week 4 milestone.
//
// Props:
//   id          — unique id (required for accessibility)
//   label       — visible label text
//   type        — input type (text, email, password, etc.)
//   name        — input name for form state
//   placeholder — placeholder text
//   value       — controlled value
//   onChange    — change handler (from parent state)
//   error       — error message string (shows below input)
//   required    — boolean

const Input = ({
  id,
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label — tied to input via id */}
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
        >
          {label}
          {required && <span className="text-amber-400 ml-0.5">*</span>}
        </label>
      )}

      {/* Input field */}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full bg-slate-800 border rounded-xl px-4 py-2.5 text-sm text-white
          placeholder:text-slate-600 outline-none transition-all duration-200
          focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60
          ${error
            ? 'border-red-500/50 focus:ring-red-400/30 focus:border-red-500/60'
            : 'border-slate-700 hover:border-slate-600'
          }
        `}
      />

      {/* Error message — conditional rendering with && */}
      {error && (
        <p className="text-xs text-red-400 mt-0.5">⚠ {error}</p>
      )}
    </div>
  );
};

export default Input;
