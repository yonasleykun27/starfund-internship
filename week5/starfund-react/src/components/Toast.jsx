import React, { useEffect, useState } from 'react';

// ─── Toast Component ──────────────────────────────────────────────────────────
//
// Exercise 18 — Auto-dismissing Toast notification (3 seconds)
//
// Props:
//   message   — text to show in the toast
//   type      — 'success' | 'error' | 'info' | 'warning'
//   isVisible — boolean (controlled by parent)
//   onDismiss — callback fired when toast hides (parent sets isVisible = false)
//   duration  — ms before auto-dismiss (default 3000)
//
// Demonstrates:
//   • useEffect with a setTimeout for auto-dismiss
//   • Cleanup function to cancel the timer if component unmounts early
//   • Conditional rendering with && (only shows when isVisible is true)
//   • Conditional class names based on `type` prop

const TOAST_STYLES = {
  success: {
    icon: '✅',
    container: 'bg-green-400/10 border-green-400/30 text-green-400',
    bar: 'bg-green-400',
  },
  error: {
    icon: '❌',
    container: 'bg-red-400/10 border-red-400/30 text-red-400',
    bar: 'bg-red-400',
  },
  info: {
    icon: 'ℹ️',
    container: 'bg-blue-400/10 border-blue-400/30 text-blue-400',
    bar: 'bg-blue-400',
  },
  warning: {
    icon: '⚠️',
    container: 'bg-amber-400/10 border-amber-400/30 text-amber-400',
    bar: 'bg-amber-400',
  },
};

const Toast = ({ message, type = 'success', isVisible, onDismiss, duration = 3000 }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setExiting(false);

    // Auto-dismiss after `duration` ms
    const timer = setTimeout(() => {
      setExiting(true);
      // Give exit animation time before calling onDismiss
      const exitTimer = setTimeout(() => {
        onDismiss?.();
        setExiting(false);
      }, 300);
      return () => clearTimeout(exitTimer);
    }, duration);

    // Cleanup: cancel timer if component unmounts or isVisible changes
    return () => clearTimeout(timer);
  }, [isVisible, duration, onDismiss]);

  // && short-circuit: don't render if not visible
  if (!isVisible) return null;

  const style = TOAST_STYLES[type] ?? TOAST_STYLES.info;

  return (
    // Fixed position: bottom-right corner
    <div
      className={`
        fixed bottom-6 right-6 z-50 flex flex-col overflow-hidden
        max-w-sm w-full rounded-2xl border shadow-xl shadow-black/30
        transition-all duration-300
        ${style.container}
        ${exiting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
      `}
    >
      {/* Content row */}
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="text-lg shrink-0" aria-hidden="true">{style.icon}</span>
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          id="toast-dismiss-btn"
          onClick={() => { setExiting(true); setTimeout(() => { onDismiss?.(); setExiting(false); }, 300); }}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>

      {/* Auto-dismiss progress bar */}
      <div className="h-0.5 w-full bg-current opacity-20">
        <div
          className={`h-full ${style.bar} opacity-60`}
          style={{
            animation: `shrinkWidth ${duration}ms linear forwards`,
          }}
        />
      </div>

      {/* Inline keyframe for progress bar */}
      <style>{`
        @keyframes shrinkWidth {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
