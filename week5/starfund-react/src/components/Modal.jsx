import React, { useEffect } from 'react';

// ─── Modal Component ──────────────────────────────────────────────────────────
//
// Exercise 17 — Modal with open/close using useState + children
//
// Props:
//   isOpen   — boolean (controlled by parent via useState)
//   onClose  — callback to close (parent sets isOpen = false)
//   title    — optional heading for the modal
//   children — any content rendered inside the modal body
//
// Demonstrates:
//   • Receiving a function as a prop (onClose callback)
//   • Conditional rendering with && (modal only renders when isOpen is true)
//   • Accepting children to make the modal fully reusable
//   • useEffect to lock body scroll when modal is open

const Modal = ({ isOpen, onClose, title, children }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // && short-circuit: render nothing if not open
  if (!isOpen) return null;

  return (
    // Backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-[fadeIn_0.15s_ease]"
      onClick={onClose}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-black/50 animate-[slideUp_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-800">
          {title && (
            <h2 className="text-lg font-bold text-white">{title}</h2>
          )}
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="ml-auto text-slate-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
            aria-label="Close modal"
          >
            {/* X icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
