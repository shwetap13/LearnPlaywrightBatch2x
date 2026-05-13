console.log("=== JavaScript Identifier Rules: All Examples in One ===\n");

// Rule 1: Allowed characters -> letters, digits, _ and $
let userName = "Pat";
let user123 = 123;
let _count = 10;
let $price = 99;

console.log("Rule 1 (allowed characters):");
console.log(userName, user123, _count, $price, "\n");

// Rule 2: Cannot start with a digit
// let 123user = "Invalid"; // Error: Invalid or unexpected token

// Rule 3: Cannot use reserved keywords
// let class = "Invalid"; // Error
// let return = 5;         // Error

// Rule 4: Identifiers are case-sensitive
let city = "Pune";
let City = "Mumbai";

console.log("Rule 4 (case-sensitive):");
console.log("city =", city);
console.log("City =", City, "\n");

// Rule 5: Spaces and special symbols (except _ and $) are not allowed
// let full name = "John"; // Error because space is not allowed
// let user-name = "Sam";  // Error because - is not allowed
let full_Name = "John Doe"; // Valid

console.log("Rule 5 (space/symbol check):");
console.log("full_Name =", full_Name, "\n");

// Rule 6: Unicode letters are allowed
let cafe = "coffee";
let cafeFr = "Caf\u00E9";

console.log("Rule 6 (Unicode allowed):");
console.log("cafe =", cafe);
console.log("cafeFr =", cafeFr, "\n");

console.log("Valid identifiers examples: userName, _count, $price, user123, full_Name");
console.log("Invalid examples (commented): 123user, class, full name, user-name");
