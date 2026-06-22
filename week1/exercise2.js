// ==========================================
// PRACTICAL EXERCISE 2: Simple Interest Calculator
// ==========================================
// Build a simple interest calculator:
// principal, rate, time → return total amount
// Formula: Total = Principal + (Principal * Rate * Time)

function calculateSimpleInterest(principal, rate, time) {
    let interest = principal * (rate / 100) * time;
    let totalAmount = principal + interest;

    return {
        principal: principal,
        rate: rate,
        time: time,
        interest: interest,
        totalAmount: totalAmount
    };
}

// --- Tests ---
let result1 = calculateSimpleInterest(10000, 5, 3);
console.log("Investment: $" + result1.principal + " at " + result1.rate + "% for " + result1.time + " years");
console.log("Interest earned: $" + result1.interest);
console.log("Total amount: $" + result1.totalAmount);

console.log("\n--- More Tests ---");
let result2 = calculateSimpleInterest(50000, 8, 5);
console.log("$" + result2.principal + " at " + result2.rate + "% for " + result2.time + " years = $" + result2.totalAmount);

let result3 = calculateSimpleInterest(1000, 12, 1);
console.log("$" + result3.principal + " at " + result3.rate + "% for " + result3.time + " year = $" + result3.totalAmount);

let result4 = calculateSimpleInterest(25000, 3.5, 10);
console.log("$" + result4.principal + " at " + result4.rate + "% for " + result4.time + " years = $" + result4.totalAmount);
