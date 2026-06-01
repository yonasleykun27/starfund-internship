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