const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const seedFilePath = path.join(__dirname, '../data/seed.json');

const rawUsers = [
  {
    id: "usr_admin_1",
    name: "Admin User",
    email: "admin@starfund.com",
    password: "admin12345",
    role: "admin"
  },
  {
    id: "usr_founder_1",
    name: "John Founder",
    email: "founder@starfund.com",
    password: "founder12345",
    role: "founder"
  },
  {
    id: "usr_founder_2",
    name: "Sarah Tech",
    email: "sarah@tech.com",
    password: "founder12345",
    role: "founder"
  },
  {
    id: "usr_investor_1",
    name: "Jane Investor",
    email: "investor@starfund.com",
    password: "investor12345",
    role: "investor"
  },
  {
    id: "usr_investor_2",
    name: "Bob Capital",
    email: "bob@capital.com",
    password: "investor12345",
    role: "investor"
  }
];

const rawStartups = [
  {
    id: "stp_1",
    title: "EcoSphere Solutions",
    description: "EcoSphere is developing next-generation biodegradable packaging solutions using seaweed extract to replace single-use plastics.",
    sector: "CleanTech",
    coverImage: "/uploads/ecosphere.png",
    teamSize: 8,
    founderId: "usr_founder_1",
    status: "approved",
    createdAt: "2026-06-01T10:00:00.000Z"
  },
  {
    id: "stp_2",
    title: "FinFlow Analytics",
    description: "An AI-powered real-time cashflow forecasting tool tailored for SaaS startups and growing SMBs.",
    sector: "FinTech",
    coverImage: "/uploads/finflow.png",
    teamSize: 5,
    founderId: "usr_founder_2",
    status: "approved",
    createdAt: "2026-06-15T12:00:00.000Z"
  },
  {
    id: "stp_3",
    title: "HealthVibe Wearables",
    description: "Non-invasive continuous glucose monitoring smart bands that seamlessly sync with primary healthcare databases.",
    sector: "HealthTech",
    coverImage: "/uploads/healthvibe.png",
    teamSize: 12,
    founderId: "usr_founder_1",
    status: "pending",
    createdAt: "2026-07-01T08:30:00.000Z"
  },
  {
    id: "stp_4",
    title: "Edutech VR Classroom",
    description: "Virtual reality educational environments allowing immersive biology and history interactive training.",
    sector: "EdTech",
    coverImage: "/uploads/edutech.png",
    teamSize: 4,
    founderId: "usr_founder_2",
    status: "pending",
    createdAt: "2026-07-10T14:45:00.000Z"
  }
];

const rawCampaigns = [
  {
    id: "cmp_1",
    startupId: "stp_1",
    goalAmount: 150000,
    raisedAmount: 95000,
    startDate: "2026-06-05T00:00:00.000Z",
    endDate: "2026-08-05T00:00:00.000Z",
    status: "active",
    createdAt: "2026-06-05T00:00:00.000Z"
  },
  {
    id: "cmp_2",
    startupId: "stp_2",
    goalAmount: 80000,
    raisedAmount: 82000,
    startDate: "2026-06-20T00:00:00.000Z",
    endDate: "2026-07-20T00:00:00.000Z",
    status: "completed",
    createdAt: "2026-06-20T00:00:00.000Z"
  }
];

const rawInvestments = [
  {
    id: "inv_1",
    campaignId: "cmp_1",
    investorId: "usr_investor_1",
    amount: 50000,
    createdAt: "2026-06-10T11:20:00.000Z"
  },
  {
    id: "inv_2",
    campaignId: "cmp_1",
    investorId: "usr_investor_2",
    amount: 45000,
    createdAt: "2026-06-15T15:30:00.000Z"
  },
  {
    id: "inv_3",
    campaignId: "cmp_2",
    investorId: "usr_investor_1",
    amount: 82000,
    createdAt: "2026-06-25T09:15:00.000Z"
  }
];

const rawUpdates = [
  {
    id: "upd_1",
    startupId: "stp_1",
    title: "Seaweed Material Prototyping Complete",
    content: "We have finalized our formulation for seaweed packaging. Testing shows 100% biodegradation in soil within 12 days.",
    createdAt: "2026-06-20T16:00:00.000Z"
  },
  {
    id: "upd_2",
    startupId: "stp_2",
    title: "Beta Testing Commenced with 50 Users",
    content: "Our forecasting engine is live! We are tracking integrations with Stripe and Quickbooks without major bottlenecks.",
    createdAt: "2026-07-02T10:00:00.000Z"
  }
];

async function seedData() {
  console.log("Starting data seeding process...");
  
  // Encrypt user passwords
  const hashedUsers = await Promise.all(rawUsers.map(async (user) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    return {
      ...user,
      password: hashedPassword
    };
  }));

  const data = {
    users: hashedUsers,
    startups: rawStartups,
    campaigns: rawCampaigns,
    investments: rawInvestments,
    updates: rawUpdates
  };

  const dir = path.dirname(seedFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(seedFilePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Seeding successful! Saved data to: ${seedFilePath}`);
}

module.exports = seedData;

// If run directly
if (require.main === module) {
  seedData()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Seeding failed:", err);
      process.exit(1);
    });
}
