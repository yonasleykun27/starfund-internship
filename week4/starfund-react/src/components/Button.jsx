import React from 'react';

// ─── Button Component ─────────────────────────────────────────────────────────
//
// Day 20 — Reusable button component
// Part of the component library built for Week 4 milestone.
//
// Props:
//   variant  — 'primary' | 'outline' | 'dark' | 'ghost' | 'danger'
//   size     — 'sm' | 'md' | 'lg'
//   fullWidth — boolean (default false)
//   children  — button label / content
//   type      — 'button' | 'submit' | 'reset'
//   disabled  — boolean
//   onClick   — click handler

const VARIANTS = {
  primary:
    'bg-amber-400 text-slate-950 hover:bg-amber-300 border-transparent shadow-lg shadow-amber-400/20',
  outline:
    'bg-transparent border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500',
  dark:
    'bg-slate-950 text-white border-slate-800 hover:bg-slate-900',
  ghost:
    'bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-slate-800',
  danger:
    'bg-red-500/10 text-red-400 border-red-500/25 hover:bg-red-500/20',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2 text-sm rounded-xl',
  lg: 'px-6 py-3 text-sm rounded-xl',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold border transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClass = VARIANTS[variant] ?? VARIANTS.primary;
  const sizeClass = SIZES[size] ?? SIZES.md;
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variantClass} ${sizeClass} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
