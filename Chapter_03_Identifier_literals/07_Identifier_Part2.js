console.log("=== Identifier Naming Styles in JavaScript ===\n");

// Base values used in all naming styles
var firstName = "Shweta";
var lastName = "Patil";

// 1) camelCase (most common for JS variables/functions)
var userFirstName = firstName;
var totalAmountPaid = 1500;

// 2) PascalCase (usually class/constructor names)
var StudentName = firstName + " " + lastName;
var TotalAmountPaid = totalAmountPaid;

// 3) snake_case (common in other languages, less common in JS)
var user_first_name = firstName;
var total_amount_paid = totalAmountPaid;

// 4) UPPER_SNAKE_CASE (constants style)
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";

// 5) kebab-case is NOT valid for JS identifiers
// var user-name = "Shweta"; // Invalid because '-' is treated as minus

// 6) Hungarian notation (prefix shows type/meaning; not common in modern JS)
var strUserName = firstName + " " + lastName;
var intTotalMarks = 95;
var blnIsLoggedIn = true;

console.log("camelCase:", userFirstName, totalAmountPaid);
console.log("PascalCase:", StudentName, TotalAmountPaid);
console.log("snake_case:", user_first_name, total_amount_paid);
console.log("UPPER_SNAKE_CASE:", MAX_LOGIN_ATTEMPTS, API_BASE_URL);
console.log("Hungarian:", strUserName, intTotalMarks, blnIsLoggedIn);

console.log("\nTip: In JavaScript, prefer camelCase for variables/functions and PascalCase for classes.");
