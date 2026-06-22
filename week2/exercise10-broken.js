// ==========================================
// EXERCISE 10: Broken JavaScript Code
// ==========================================
// This file contains exactly 5 intentional bugs related to StarFund calculations,
// async transactions, and investor processing.

const MOCK_INVESTORS = ["Alice", "Bob", "Charlie", "David"];

// Mock DB call
async function getCampaignGoal(campaignId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(250000), 100);
    });
}

// Mock tags call
function getCampaignTags(campaignId) {
    return []; // Return empty array to simulate no tags
}

// Mock database write
async function saveSharesToDatabase(userId, sharesCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random connection failure
            reject(new Error("Database write timeout."));
        }, 100);
    });
}

// ----------------------------------------------------
// BUGGY FUNCTIONS TO DEBUG
// ----------------------------------------------------

// Function 1 (Contains Bug 1 & Bug 2)
function renderCampaignHeader(campaignId) {
    const defaultGoal = 100000;
    
    // Bug 1: Const reassignment
    const totalGoal = defaultGoal;
    
    // Bug 2: Missing await on async function call (returns Promise)
    const dbGoal = getCampaignGoal(campaignId); 
    if (dbGoal > 0) {
        totalGoal = dbGoal; // Will crash due to const reassignment
    }
    
    return "Goal: $" + totalGoal;
}

// Function 2 (Contains Bug 3)
function displayInvestorList() {
    let output = "";
    // Bug 3: Implicit global variable 'i' (missing let/var/const)
    for (i = 0; i < MOCK_INVESTORS.length; i++) {
        output += (i + 1) + ". " + MOCK_INVESTORS[i] + " | ";
    }
    return output;
}

// Function 3 (Contains Bug 4)
function checkCampaignTags(campaignId) {
    const tags = getCampaignTags(campaignId);
    
    // Bug 4: Comparing array reference to empty array (always false in JS)
    if (tags === []) {
        return "No tags assigned";
    }
    return "Tags: " + tags.join(", ");
}

// Function 4 (Contains Bug 5)
async function executeSharePurchase(userId, sharesCount) {
    console.log("Initiating purchase...");
    
    // Bug 5: Unhandled async error (no try/catch block around promise rejection)
    await saveSharesToDatabase(userId, sharesCount);
    
    return "Purchase successful!";
}
