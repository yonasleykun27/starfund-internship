import React from 'react';
import Hero from './components/Hero';
import FundingProgress from './components/FundingProgress';
import FollowButton from './components/FollowButton';
import BrowsePage from './components/BrowsePage';
import './App.css';

// Mock startup data for Day 18 (5 startups to display and search)
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
    raised: 800000,
    goal: 800000,
    backers: 1205,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    tag: 'Fully Funded',
    status: 'funded'
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
  },
  {
    id: 4,
    name: 'EthioLoop Recycling',
    sector: 'Clean Energy',
    raised: 45000,
    goal: 100000,
    backers: 89,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    tag: 'Eco-Friendly',
    status: 'active'
  },
  {
    id: 5,
    name: 'SafariGo Logistics',
    sector: 'Logistics',
    raised: 12000,
    goal: 150000,
    backers: 42,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
    tag: 'Rejected Offer',
    status: 'rejected'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Day 16: Render Hero component */}
        <Hero 
          heading="Back the ventures that matter most." 
          subheading="StarFund connects growth-stage founders with a curated network of impact-driven investors. Start supporting sustainable projects today." 
        />

        {/* Day 17: Interactive State Demos */}
        <div className="mb-12">
          <div className="border-b border-slate-800 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Day 17: State & Interaction Demos</h2>
            <p className="text-sm text-slate-400 mt-1">Testing React useState hooks on isolated components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <FundingProgress goal={500000} initialRaised={345000} />
            <FollowButton initialFollowers={1458} />
          </div>
        </div>

        {/* Day 18: Composed Browse Page */}
        <div className="mb-8">
          <BrowsePage startups={MOCK_STARTUPS} />
        </div>
      </div>
    </div>
  );
}

export default App;
