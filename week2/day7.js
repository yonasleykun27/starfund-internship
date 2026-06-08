// ============================================================================
// DAY 7: Async/Await & Error Handling
// ============================================================================

// Mock database of startups for simulation
const mockStartups = [
    { id: 1, name: "AeroDrones", sector: "Aerospace", fundingGoal: 50000 },
    { id: 2, name: "FinTech Pro", sector: "Finance", fundingGoal: 150000 },
    { id: 3, name: "HealthAI", sector: "Healthcare", fundingGoal: 120000 }
];

// Mock database of campaigns for simulation
const mockCampaigns = [
    { id: 101, startupId: 1, title: "AeroDrones Crowdfunding", raisedAmount: 25000, goalAmount: 50000 },
    { id: 102, startupId: 2, title: "FinTech Pro Series A", raisedAmount: 160000, goalAmount: 150000 },
    { id: 103, startupId: 3, title: "HealthAI Seed Round", raisedAmount: 80000, goalAmount: 120000 }
];

// Helper delay function using Promises to simulate network latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================================================
// Practical Coding Task: Rewrite yesterday's Promise functions using async/await
// ============================================================================

/**
 * Fetches all campaign data asynchronously.
 * Demonstrates try/catch logic internally and simulated database queries.
 */
async function fetchCampaignData() {
    console.log("[API] Fetching all campaign data...");
    await delay(1000); // Simulate network delay

    // Simulate random database failure (10% chance)
    const isSuccess = Math.random() > 0.1;
    if (!isSuccess) {
        throw new Error("Failed to retrieve campaigns from database.");
    }
    return mockStartups;
}

/**
 * Fetches startup details by ID asynchronously.
 * Throws an error if the startup is not found.
 */
async function fetchStartupById(id) {
    console.log(`[API] Fetching startup with ID: ${id}...`);
    await delay(1000); // Simulate network delay

    const startup = mockStartups.find(item => item.id === id);
    if (!startup) {
        throw new Error(`Startup with ID ${id} not found`);
    }
    return startup;
}

/**
 * Fetches campaign details by startup ID asynchronously.
 */
async function fetchCampaignDataByStartupId(startupId) {
    console.log(`[API] Fetching campaign data for startup ID: ${startupId}...`);
    await delay(1000); // Simulate network delay

    const campaign = mockCampaigns.find(item => item.startupId === startupId);
    if (!campaign) {
        throw new Error(`Campaign for startup ID ${startupId} not found`);
    }
    return campaign;
}

/**
 * Fetches investor count for a campaign asynchronously.
 */
async function fetchInvestorCount(campaignId) {
    console.log(`[API] Fetching investor count for campaign ID: ${campaignId}...`);
    await delay(1000); // Simulate network delay

    // Mock logic: return dynamic count based on campaign ID
    if (campaignId === 101) return 42;
    if (campaignId === 102) return 150;
    if (campaignId === 103) return 89;

    throw new Error(`Investor count not available for campaign ID ${campaignId}`);
}

// ============================================================================
// Daily Assignment: loadCampaignPage(campaignId)
// ============================================================================

/**
 * Orchestrates loading a campaign page by fetching startup, campaign, and investor count.
 * Demonstrates proper sequential async calls, try/catch error handling, and loading state transitions.
 */
async function loadCampaignPage(campaignId) {
    console.log("\n--- LOADING STATE: Loading... ---");
    try {
        // Step 1: Fetch startup data using campaignId as the startup id
        const startup = await fetchStartupById(campaignId);
        
        // Step 2: Fetch campaign data using startup's id
        const campaign = await fetchCampaignDataByStartupId(startup.id);
        
        // Step 3: Fetch investor count using campaign's id
        const investorCount = await fetchInvestorCount(campaign.id);
        
        console.log("--- LOADING STATE: Loaded ---");
        console.log("==================================================");
        console.log(`CAMPAIGN PAGE LOADED FOR STARTUP: ${startup.name.toUpperCase()}`);
        console.log("==================================================");
        console.log(`Sector:         ${startup.sector}`);
        console.log(`Funding Goal:   $${startup.fundingGoal.toLocaleString()}`);
        console.log(`Campaign Title: ${campaign.title}`);
        console.log(`Funds Raised:   $${campaign.raisedAmount.toLocaleString()} (${Math.round((campaign.raisedAmount / campaign.goalAmount) * 100)}%)`);
        console.log(`Total Backers:  ${investorCount} investors`);
        console.log("==================================================");
        
        return { startup, campaign, investorCount };
    } catch (error) {
        console.log("--- LOADING STATE: Error ---");
        console.error(`[Error] Failed to load campaign page: ${error.message}`);
    }
}

// ============================================================================
// TESTING THE REWRITTEN FUNCTIONS & ASSIGNMENT
// ============================================================================

async function runTests() {
    console.log("=== STARTING DAY 7 TESTS ===");

    // Test 1: Testing fetchCampaignData with async/await
    try {
        const startups = await fetchCampaignData();
        console.log("[Test 1 Success] Startups list:", startups);
    } catch (err) {
        console.error("[Test 1 Error]", err.message);
    }

    console.log("\n----------------------------------");

    // Test 2: Testing fetchStartupById success
    try {
        const startup = await fetchStartupById(2);
        console.log("[Test 2 Success] Startup details:", startup);
    } catch (err) {
        console.error("[Test 2 Error]", err.message);
    }

    console.log("\n----------------------------------");

    // Test 3: Testing fetchStartupById failure
    try {
        await fetchStartupById(99);
    } catch (err) {
        console.log("[Test 3 Success (Expected Failure)] Received error:", err.message);
    }

    console.log("\n----------------------------------");
    console.log("=== RUNNING DAILY ASSIGNMENT TEST ===");

    // Assignment Test 1: Success Case (Startup ID: 1)
    await loadCampaignPage(1);

    console.log("\n----------------------------------");

    // Assignment Test 2: Failure Case (Non-existent Startup ID: 5)
    await loadCampaignPage(5);
}

runTests();
