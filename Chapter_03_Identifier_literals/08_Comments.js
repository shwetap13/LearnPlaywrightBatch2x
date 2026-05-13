console.log("=== JavaScript Comments Examples ===\n");

// 1) Single-line comment
let studentName = "Shweta";
console.log("Student Name:", studentName);

/*
2) Multi-line comment
Used for longer notes,
documentation, or temporarily disabling blocks.
*/
let marks = 95;
console.log("Marks:", marks);

let age = 24; // 3) Inline comment on the same line
console.log("Age:", age);

// 4) TODO comment example
// TODO: Add validation for marks range (0 to 100)

/**
 * 5) Documentation comment (JSDoc style)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of two numbers
 */
function add(a, b) {
	return a + b;
}

console.log("Sum:", add(10, 20));
