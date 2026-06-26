// ==========================================
// WEEK 1 MINI PROJECT
// ==========================================

// 1. Model 3 StarFund startups as objects in an array
let startups = [
    { id: 1, title: "AeroDrones", status: "active", raised: 45000 },
    { id: 2, title: "FinTech Pro", status: "funded", raised: 150000 },
    { id: 3, title: "HealthAI", status: "active", raised: 12000 }
];

// 2. Function: getStartupsByStatus(status)
function getStartupsByStatus(searchStatus) {
    return startups.filter(function(startup) {
        return startup.status === searchStatus;
    });
}

// 3. Function: getTotalFundingRaised()
function getTotalFundingRaised() {
    return startups.reduce(function(total, { raised }) {
        return total + raised;
    }, 0);
}

// 4. Function: getMostFundedStartup()
function getMostFundedStartup() {
    return startups.reduce(function(highest, current) {
        if (current.raised > highest.raised) {
            return current;
        } else {
            return highest;
        }
    }, startups[0]); 
}

// ==========================================
// MANUAL TESTS 
// ==========================================
console.log("--- Active Startups ---");
console.log(getStartupsByStatus("active"));

console.log("\n--- Total Funding Raised ---");
console.log("$" + getTotalFundingRaised());

console.log("\n--- Most Funded Startup ---");
console.log(getMostFundedStartup());