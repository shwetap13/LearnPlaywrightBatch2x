// 29_Backtick_single_double.js
// Difference between backtick, single quote, and double quote strings

// 1) Single quote string
let singleQuote = 'Hello World';
console.log("Single quote:", singleQuote);

// 2) Double quote string
let doubleQuote = "Hello World";
console.log("Double quote:", doubleQuote);

// 3) Backtick (template literal)
let backtick = `Hello World`;
console.log("Backtick:", backtick);

// Key difference: Backticks allow interpolation with ${}
let name = "Alice";
let age = 25;

let single = 'My name is ' + name + ' and I am ' + age + ' years old.';
let double = "My name is " + name + " and I am " + age + " years old.";
let template = `My name is ${name} and I am ${age} years old.`;

console.log("Single/Double (concatenation):", single);
console.log("Backtick (interpolation):", template);

/*
Summary:
- Single quotes ('') and double quotes ("") work the same way. Choose one and stay consistent.
- Backticks (``) allow variable interpolation with ${} and multi-line strings.
*/
