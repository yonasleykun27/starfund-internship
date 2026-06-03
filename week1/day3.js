// ==========================================
// PRACTICAL CODING TASK 1: Multiplication Table
// ==========================================
function printMultiplicationTable(number) {
    console.log("Multiplication Table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}
printMultiplicationTable(5); 

// ==========================================
// PRACTICAL CODING TASK 2: Prime Number Checker
// ==========================================
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log("Is 7 prime? " + isPrime(7));
console.log("Is 10 prime? " + isPrime(10));

// ==========================================
// DAILY ASSIGNMENT: Funding Calculator
// ==========================================
function calculateFunding(goal, raised) {
    let percentage = (raised / goal) * 100;
    
    if (percentage >= 100) {
        return percentage + "% funded. Successful!";
    } else {
        return percentage + "% funded. Keep going!";
    }
}

console.log(calculateFunding(1000, 500));   
console.log(calculateFunding(5000, 5000));  
console.log(calculateFunding(2000, 3000));  
console.log(calculateFunding(10000, 1000)); 
console.log(calculateFunding(500, 0));     