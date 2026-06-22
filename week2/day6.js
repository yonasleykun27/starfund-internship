// ==========================================
// DAY 6: Async JavaScript (Callbacks & Promises)
// ==========================================

// Mock database of startups for simulation
const mockStartups = [
    { id: 1, name: "AeroDrones", sector: "Aerospace", fundingGoal: 50000 },
    { id: 2, name: "FinTech Pro", sector: "Finance", fundingGoal: 150000 },
    { id: 3, name: "HealthAI", sector: "Healthcare", fundingGoal: 120000 }
];

/**
 * Practical Task: Create a mock fetchCampaignData() function
 * Returns a Promise that resolves with all startups after 1 second.
 */
function fetchCampaignData() {
    return new Promise(function(resolve, reject) {
        console.log("Fetching all campaign data...");
        setTimeout(function() {
            // Simulate random database failure (10% chance) for demonstrating catch block
            const isSuccess = Math.random() > 0.1;
            if (isSuccess) {
                resolve(mockStartups);
            } else {
                reject("Failed to retrieve campaigns from database.");
            }
        }, 1000);
    });
}

/**
 * Daily Assignment: Simulate a StarFund API call with fetchStartupById(id)
 * Returns a Promise resolving with the startup details or rejecting if not found.
 */
function fetchStartupById(id) {
    return new Promise(function(resolve, reject) {
        console.log(`Fetching startup with ID: ${id}...`);
        setTimeout(function() {
            const startup = mockStartups.find(function(item) {
                return item.id === id;
            });

            if (startup) {
                resolve(startup);
            } else {
                reject("Startup not found");
            }
        }, 1000);
    });
}

// ==========================================
// TESTING THE PROMISE CALLS
// ==========================================

// 1. Test fetchCampaignData() with Promise chaining
fetchCampaignData()
    .then(function(data) {
        console.log("--- fetchCampaignData Success ---");
        console.log(data);
    })
    .catch(function(error) {
        console.error("--- fetchCampaignData Error ---");
        console.error("Error:", error);
    });

// 2. Test fetchStartupById(id) - Success Case
// Delaying the execution slightly to not overlap logs in console output
setTimeout(function() {
    console.log("\n----------------------------------");
    fetchStartupById(1)
        .then(function(startup) {
            console.log("--- fetchStartupById(1) Success ---");
            console.log(startup);
        })
        .catch(function(error) {
            console.error("--- fetchStartupById(1) Error ---");
            console.error("Error:", error);
        });
}, 1500);

// 3. Test fetchStartupById(id) - Error Case
setTimeout(function() {
    console.log("\n----------------------------------");
    fetchStartupById(99)
        .then(function(startup) {
            console.log("--- fetchStartupById(99) Success ---");
            console.log(startup);
        })
        .catch(function(error) {
            console.error("--- fetchStartupById(99) Error ---");
            console.error("Error:", error);
        });
}, 3000);
