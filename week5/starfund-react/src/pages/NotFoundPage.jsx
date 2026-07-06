import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

// ─── NotFoundPage ────────────────────────────────────────────────────────────
//
// Day 21 — Custom 404 Not Found page
// Renders when client attempts to hit any route not explicitly mapped.

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="text-6xl animate-bounce">🛸</div>
      <h1 className="text-4xl font-black text-white tracking-tight">404 — Page Not Found</h1>
      <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="inline-block mt-2">
        <Button variant="primary" size="md">
          ← Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
