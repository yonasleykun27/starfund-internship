// ==========================================
// PRACTICAL CODING TASK: Startup Object
// ==========================================

// 1. Model a Startup as an object
let myStartup = {
    title: "Eco-Charge",
    founder: "Yonas",
    sector: "Clean Energy",
    fundingGoal: 100000,
    status: "active"
};

// 2. Function returning a formatted summary using object destructuring
function getStartupSummary(startupObject) {
    let { title, founder, sector } = startupObject;
    
    return `${title} is a ${sector} startup founded by ${founder}.`;
}

console.log(getStartupSummary(myStartup));