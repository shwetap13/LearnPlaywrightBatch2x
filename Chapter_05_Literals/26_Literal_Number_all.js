// 26_Literal_Number_all.js
// JavaScript number literals and related numeric types

// 1) Decimal integer literals
let age = 25;
let score = -99;
let zero = 0;
console.log("Decimal:", age, score, zero);

// 2) Floating-point literals (decimal with fraction)
let price = 99.95;
let pi = 3.14159;
console.log("Floating point:", price, pi);

// 3) Exponential (scientific notation)
let million = 1e6;      // 1 * 10^6
let tinyValue = 2.5e-4; // 2.5 * 10^-4
console.log("Scientific:", million, tinyValue);

// 4) Hexadecimal literals (base 16)
let hexValue = 0x1A; // 26
console.log("Hexadecimal:", hexValue);

// 5) Octal literals (base 8)
let octalValue = 0o755; // 493
console.log("Octal:", octalValue);

// 6) Binary literals (base 2)
let binaryValue = 0b1010; // 10
console.log("Binary:", binaryValue);

// 7) Numeric separators for readability
let worldPopulationApprox = 8_200_000_000;
let binaryMask = 0b1111_0000;
console.log("Numeric separators:", worldPopulationApprox, binaryMask);

// 8) Special numeric values in Number type
let infiniteValue = Infinity;
let negativeInfiniteValue = -Infinity;
let notANumberValue = NaN;
console.log("Special values:", infiniteValue, negativeInfiniteValue, notANumberValue);

// 9) BigInt literals (for very large integers)
// BigInt is a separate numeric primitive from Number.
let veryLargeInt = 9007199254740993n;
console.log("BigInt:", veryLargeInt);

// Type checks
console.log("typeof age:", typeof age);                 // number
console.log("typeof veryLargeInt:", typeof veryLargeInt); // bigint
