// ==========================================
// PRACTICAL CODING TASKS 
// ==========================================

// 1. Filter an array of numbers to only even ones
let numbers = [12, 5, 8, 130, 44, 7];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// 2. Map an array of prices to add 15% tax
let prices = [100, 250, 50];
let pricesWithTax = prices.map(function(price) {
    return price * 1.15;
});
console.log("Prices with 15% tax:", pricesWithTax);

// 3. Reduce an array of investments to total amount
let investments = [1000, 5000, 250, 750];
let totalInvestment = investments.reduce(function(total, currentAmount) {
    return total + currentAmount;
}, 0); 
console.log("Total Investments: $" + totalInvestment);


// ==========================================
// DAILY ASSIGNMENT: Campaign Data Pipeline 
// ==========================================
// Given an array of campaign objects:
let campaigns = [
    { title: "EcoBottle", raised: 5000, goal: 10000 },
    { title: "Solar Charger", raised: 12000, goal: 10000 },
    { title: "Smart Wallet", raised: 100, goal: 5000 },
    { title: "Electric Skateboard", raised: 4500, goal: 5000 }
];

// Steps 1-3 chained: map (add percentFunded) → filter (>= 50%) → sort (descending)
let topCampaigns = campaigns
    .map(function(camp) {
        return {
            ...camp,
            percentFunded: (camp.raised / camp.goal) * 100
        };
    })
    .filter(function(camp) {
        return camp.percentFunded >= 50;
    })
    .sort(function(a, b) {
        return b.percentFunded - a.percentFunded;
    });

console.log("\n--- Top Performing Campaigns ---");
console.log(topCampaigns);