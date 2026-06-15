// ==========================================
// PRACTICAL EXERCISE 5: Password Strength Checker
// ==========================================
// Write a password strength checker: returns 'weak', 'medium', or 'strong' based on length and character mix.
//
// Rules:
// - WEAK: less than 6 characters
// - MEDIUM: 6+ characters AND has at least letters and numbers
// - STRONG: 8+ characters AND has uppercase, lowercase, number, and special character

function checkPasswordStrength(password) {
    // Check if password is too short
    if (password.length < 6) {
        return "weak";
    }

    // Check character types present
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        } else if (char >= "a" && char <= "z") {
            hasLowercase = true;
        } else if (char >= "0" && char <= "9") {
            hasNumber = true;
        } else {
            hasSpecial = true;
        }
    }

    // STRONG: 8+ chars with all four character types
    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
        return "strong";
    }

    // MEDIUM: 6+ chars with at least letters and numbers
    if ((hasUppercase || hasLowercase) && hasNumber) {
        return "medium";
    }

    // Default to weak if only one type of character
    return "weak";
}

// --- Tests ---
console.log("--- Password Strength Tests ---");
console.log("'abc' → " + checkPasswordStrength("abc"));
console.log("'12345' → " + checkPasswordStrength("12345"));
console.log("'abcdef' → " + checkPasswordStrength("abcdef"));
console.log("'abc123' → " + checkPasswordStrength("abc123"));
console.log("'Abc12345' → " + checkPasswordStrength("Abc12345"));
console.log("'MyP@ss99' → " + checkPasswordStrength("MyP@ss99"));
console.log("'StarFund#2026' → " + checkPasswordStrength("StarFund#2026"));
console.log("'' (empty) → " + checkPasswordStrength(""));
