// ==========================================
// PRACTICAL EXERCISE 4: Investor Stats
// ==========================================
// Given an array of investors [{name, amount}], compute total raised and average investment.

let investors = [
    { name: "Abebe", amount: 5000 },
    { name: "Sara", amount: 12000 },
    { name: "Daniel", amount: 3500 },
    { name: "Meron", amount: 8000 },
    { name: "Kirubel", amount: 1500 }
];

function computeInvestorStats(investorArray) {
    // Calculate total raised using reduce with destructuring
    let totalRaised = investorArray.reduce(function(total, { amount }) {
        return total + amount;
    }, 0);

    // Calculate average investment
    let averageInvestment = totalRaised / investorArray.length;

    return {
        totalRaised: totalRaised,
        averageInvestment: averageInvestment,
        numberOfInvestors: investorArray.length
    };
}

// --- Tests ---
let stats = computeInvestorStats(investors);
console.log("--- Investor Stats ---");
console.log("Number of investors: " + stats.numberOfInvestors);
console.log("Total raised: $" + stats.totalRaised);
console.log("Average investment: $" + stats.averageInvestment);

// Test with a different array
console.log("\n--- Second Group ---");
let moreInvestors = [
    { name: "Yonas", amount: 10000 },
    { name: "Hana", amount: 25000 }
];
let stats2 = computeInvestorStats(moreInvestors);
console.log("Total raised: $" + stats2.totalRaised);
console.log("Average investment: $" + stats2.averageInvestment);
