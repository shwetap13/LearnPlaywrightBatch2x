console.log("JavaScript Identifier Rules - All Examples in One");

// 1) Allowed characters: letters, digits, _ and $
let userName = "Pat";
let total1 = 100;
let _count = 5;
let $price = 299;

// 2) Cannot start with a digit (invalid example)
// let 1user = "Sam";

// 3) Case-sensitive: city and City are different identifiers
let city = "Mumbai";
let City = "Pune";

// 4) Spaces and special symbols are not allowed (invalid examples)
// let full name = "John Doe";
// let user-name = "john";
// let user@name = "john";

// 5) Reserved keywords are not allowed (invalid examples)
// let class = "A";
// let return = 10;
// let const = 20;

// 6) Unicode letters are allowed
let cafe = "Cafe";
let cafeFr = "Caf\u00E9";

console.log("Valid identifiers:", userName, total1, _count, $price);
console.log("Case-sensitive values:", city, City);
console.log("Unicode identifier example:", cafe, cafeFr);