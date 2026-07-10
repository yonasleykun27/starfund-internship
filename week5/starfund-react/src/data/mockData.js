// ─── mockData.js ─────────────────────────────────────────────────────────────
//
// Day 20 — Single source of truth for all StarFund mock data.
// All components and pages import from here — never hardcode data in components.
//
// Contains:
//   • MOCK_STARTUPS  — 5 startup objects used across the whole app
//   • MOCK_CAMPAIGNS — 3 campaign/investment objects
//   • MOCK_USERS     — sample user objects for auth context preview

// ── Startups ──────────────────────────────────────────────────────────────────
export const MOCK_STARTUPS = [
  {
    id: 1,
    name: 'AgroSense AI',
    sector: 'AgriTech',
    raised: 184000,
    goal: 250000,
    backers: 312,
    teamSize: 8,
    founded: '2024',
    location: 'Addis Ababa, Ethiopia',
    description:
      'AgroSense AI uses satellite imagery and edge AI to give smallholder farmers real-time crop health diagnostics and yield predictions — reducing input costs by up to 40%.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    status: 'active',
    updates: [
      { date: '2025-11-01', text: 'Closed pilot with 500 farmers in Oromia region.' },
      { date: '2025-12-10', text: 'Partnership signed with Ethiopian Ministry of Agriculture.' },
    ],
  },
  {
    id: 2,
    name: 'Hawassa Solar Grid',
    sector: 'Clean Energy',
    raised: 800000,
    goal: 800000,
    backers: 1205,
    teamSize: 15,
    founded: '2023',
    location: 'Hawassa, Ethiopia',
    description:
      'A community-owned micro-grid serving 3,200 households in Hawassa with affordable, reliable solar power. First fully funded campaign on StarFund.',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    tag: 'Fully Funded',
    status: 'funded',
    updates: [
      { date: '2026-01-05', text: 'Grid construction phase 1 complete.' },
      { date: '2026-03-20', text: 'All 3,200 households connected!' },
    ],
  },
  {
    id: 3,
    name: 'MedLink Telemedicine',
    sector: 'HealthTech',
    raised: 95000,
    goal: 300000,
    backers: 174,
    teamSize: 6,
    founded: '2025',
    location: 'Dire Dawa, Ethiopia',
    description:
      'MedLink connects rural patients with specialist doctors via SMS and low-bandwidth video. Operating in 12 towns with zero-data-cost consultations.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tag: 'New',
    status: 'pending',
    updates: [],
  },
  {
    id: 4,
    name: 'EthioLoop Recycling',
    sector: 'Clean Energy',
    raised: 45000,
    goal: 100000,
    backers: 89,
    teamSize: 5,
    founded: '2025',
    location: 'Mekelle, Ethiopia',
    description:
      'EthioLoop collects and processes plastic waste from urban centres, converting it into affordable construction materials for low-income housing projects.',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    tag: 'Eco-Friendly',
    status: 'active',
    updates: [
      { date: '2026-02-14', text: 'First 500kg batch of recycled bricks produced.' },
    ],
  },
  {
    id: 5,
    name: 'SafariGo Logistics',
    sector: 'Logistics',
    raised: 12000,
    goal: 150000,
    backers: 42,
    teamSize: 4,
    founded: '2024',
    location: 'Nairobi, Kenya',
    description:
      'SafariGo is a last-mile delivery platform for East African e-commerce, using motorbike fleets and route-optimisation AI to cut delivery times by 60%.',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Rejected Offer',
    status: 'rejected',
    updates: [],
  },
  {
    id: 6,
    name: 'Kigali Agri Hub',
    sector: 'AgriTech',
    raised: 45000,
    goal: 60000,
    backers: 98,
    teamSize: 5,
    founded: '2025',
    location: 'Kigali, Rwanda',
    description:
      'Providing smart solar dryers and cold storage solutions to post-harvest rural farming cooperatives in Rwanda.',
    image:
      'https://images.unsplash.com/photo-1589923188900-85dae44094ad?auto=format&fit=crop&w=800&q=80',
    tag: 'Sustainable',
    status: 'active',
    updates: [],
  },
  {
    id: 7,
    name: 'Bahir Dar Tex',
    sector: 'Technology',
    raised: 15000,
    goal: 50000,
    backers: 45,
    teamSize: 3,
    founded: '2024',
    location: 'Bahir Dar, Ethiopia',
    description:
      'Creating local digital textile weavers hubs combining hand-weaving heritage with smart modern design software templates.',
    image:
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    tag: 'Cultural Heritage',
    status: 'active',
    updates: [],
  },
];

// ── Campaigns (investment rounds) ─────────────────────────────────────────────
export const MOCK_CAMPAIGNS = [
  {
    id: 'c1',
    startupId: 1,
    title: 'AgroSense Seed Round',
    minInvestment: 500,
    maxInvestment: 50000,
    deadline: '2026-09-30',
    perks: ['Quarterly reports', 'Investor dashboard access', 'Annual farm tour'],
  },
  {
    id: 'c2',
    startupId: 4,
    title: 'EthioLoop Series A',
    minInvestment: 1000,
    maxInvestment: 100000,
    deadline: '2026-08-15',
    perks: ['Impact certificate', 'Priority follow-on rights', 'Monthly updates'],
  },
  {
    id: 'c3',
    startupId: 3,
    title: 'MedLink Pre-Seed',
    minInvestment: 250,
    maxInvestment: 25000,
    deadline: '2026-10-01',
    perks: ['Thank-you shoutout', 'Beta access', 'Bi-annual reports'],
  },
];

// ── Users ─────────────────────────────────────────────────────────────────────
export const MOCK_USERS = [
  { id: 'u1', name: 'Yonas Leykun', email: 'yonas@example.com', role: 'investor', avatar: null },
  { id: 'u2', name: 'Ayana Tesfaye', email: 'ayana@example.com', role: 'founder', avatar: null },
  { id: 'u3', name: 'Admin User', email: 'admin@starfund.com', role: 'admin', avatar: null },
];
