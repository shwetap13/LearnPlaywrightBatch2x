//Accessing & Modifying Array Elements
let statues = ["pass", "fail", "skipped"];
console.log(statues[0]); // Output: "pass"
console.log(statues[1]); // Output: "fail"
console.log(statues[2]); // Output: "skipped"

console.log(statues.at(-1)); // Output: "skipped"
console.log(statues.at(-2)); // Output: "fail"
console.log(statues.at(-3)); // Output: "pass"
console.log(statues.at(-4)); // Output: undefined (index out of bounds)


// Modifying array elements
statues[1] = "blocked";
console.log(statues); // Output: ["pass", "blocked", "skipped"]