// ==========================================
// PRACTICAL EXERCISE 1: Dollar to Birr Converter
// ==========================================
// Write a function that converts any dollar amount to Ethiopian Birr (hardcode an exchange rate constant).

const EXCHANGE_RATE = 155.50;

function convertDollarsToBirr(dollars) {
    if (dollars < 0) {
        return "Error: Amount cannot be negative.";
    }
    let birr = dollars * EXCHANGE_RATE;
    return birr;
}

// --- Tests ---
console.log("$1 = " + convertDollarsToBirr(1) + " ETB");
console.log("$50 = " + convertDollarsToBirr(50) + " ETB");
console.log("$100 = " + convertDollarsToBirr(100) + " ETB");
console.log("$0 = " + convertDollarsToBirr(0) + " ETB");
console.log("$-5 = " + convertDollarsToBirr(-5));
