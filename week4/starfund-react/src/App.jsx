import React from 'react';
import Hero from './components/Hero';
import CampaignCard from './components/CampaignCard';
import './App.css';

// Mock startup data for Day 16
const MOCK_STARTUPS = [
  {
    id: 1,
    name: 'AgroSense AI',
    sector: 'AgriTech',
    raised: 184000,
    goal: 250000,
    backers: 312,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending',
    status: 'active'
  },
  {
    id: 2,
    name: 'Hawassa Solar Grid',
    sector: 'Clean Energy',
    raised: 670000,
    goal: 800000,
    backers: 891,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    tag: 'Almost Funded',
    status: 'active'
  },
  {
    id: 3,
    name: 'MedLink Telemedicine',
    sector: 'HealthTech',
    raised: 95000,
    goal: 300000,
    backers: 174,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tag: 'New',
    status: 'pending'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Day 16: Render Hero component with dynamic props */}
        <Hero 
          heading="Back the ventures that matter most." 
          subheading="StarFund connects growth-stage founders with a curated network of impact-driven investors. Start supporting sustainable projects today." 
        />

        {/* Day 16: Render CampaignCard grid */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Featured Campaigns</h2>
          <span className="text-sm text-slate-400">Showing 3 active startups</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_STARTUPS.map((startup) => (
            <CampaignCard key={startup.id} startup={startup} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
