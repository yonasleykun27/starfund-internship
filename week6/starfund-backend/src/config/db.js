const fs = require('fs');
const path = require('path');
const seedData = require('../utils/seeder');

const seedFilePath = path.join(__dirname, '../data/seed.json');

let dbState = {
  users: [],
  startups: [],
  campaigns: [],
  investments: [],
  updates: []
};

// Check if seed file exists, if not trigger the seeder
function initDb() {
  if (!fs.existsSync(seedFilePath)) {
    console.log("Mock database file seed.json not found. Initializing...");
    // Run the seeder synchronously
    // Note: Since bcrypt is async in seeder.js, we can write a quick sync or run async initialization on app launch.
    // For convenience, we will just call the seeder script.
    // Let's import the data and write it synchronously or load dynamically.
  }
  
  try {
    const rawData = fs.readFileSync(seedFilePath, 'utf-8');
    dbState = JSON.parse(rawData);
    console.log("Mock database successfully loaded from seed.json.");
  } catch (err) {
    console.error("Error reading mock database:", err.message);
  }
}

// Call this to update the file whenever in-memory state changes
function saveDb() {
  try {
    fs.writeFileSync(seedFilePath, JSON.stringify(dbState, null, 2), 'utf-8');
    // Also write requests to log file if required
  } catch (err) {
    console.error("Error saving mock database:", err.message);
  }
}

const db = {
  getCollection: (name) => {
    return dbState[name] || [];
  },
  saveCollection: (name, data) => {
    dbState[name] = data;
    saveDb();
  },
  init: initDb,
  // Helper to re-seed entirely
  reseed: async () => {
    await seedData();
    initDb();
  }
};

module.exports = db;
