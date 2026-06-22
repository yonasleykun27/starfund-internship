// ==========================================
// PRACTICAL EXERCISE 3: Email Address Validator
// ==========================================
// Write a function that validates an email address (must contain @ and .)

function validateEmail(email) {
    // Check if email is empty or not a string
    if (!email || typeof email !== "string") {
        return false;
    }

    // Must contain exactly one @
    let atIndex = email.indexOf("@");
    if (atIndex === -1 || atIndex === 0) {
        return false;
    }

    // Must contain a dot after the @
    let afterAt = email.slice(atIndex + 1);
    let dotIndex = afterAt.indexOf(".");
    if (dotIndex === -1 || dotIndex === 0) {
        return false;
    }

    // Must have something after the last dot (domain extension)
    let lastDotIndex = email.lastIndexOf(".");
    if (lastDotIndex === email.length - 1) {
        return false;
    }

    return true;
}

// --- Tests ---
console.log("--- Valid Emails ---");
console.log("yonas@gmail.com: " + validateEmail("yonas@gmail.com"));
console.log("founder@starfund.io: " + validateEmail("founder@starfund.io"));
console.log("admin@company.co.et: " + validateEmail("admin@company.co.et"));

console.log("\n--- Invalid Emails ---");
console.log("yonasgmail.com (no @): " + validateEmail("yonasgmail.com"));
console.log("yonas@ (nothing after @): " + validateEmail("yonas@"));
console.log("@gmail.com (nothing before @): " + validateEmail("@gmail.com"));
console.log("yonas@gmail (no dot after @): " + validateEmail("yonas@gmail"));
console.log("yonas@.com (dot right after @): " + validateEmail("yonas@.com"));
console.log("empty string: " + validateEmail(""));
console.log("null: " + validateEmail(null));
