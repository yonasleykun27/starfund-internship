import React from 'react';

const Hero = ({ heading, subheading }) => {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl mb-12">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-6 uppercase">
          Day 16: React & JSX
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
          {heading}
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default Hero;
