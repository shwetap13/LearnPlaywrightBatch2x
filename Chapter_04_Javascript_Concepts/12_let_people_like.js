// let is the modern way to declare variables in JavaScript, introduced in ES6 (ECMAScript 2015). It provides block scope, which means that variables declared with let are only accessible within the block they are defined in. This helps prevent issues related to variable hoisting and makes code easier to read and maintain.

//let is block scoped

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; // Reassignment is allowed with let
retryCount = retryCount + 1; // Reassignment is allowed with let
console.log("Retry Count:", retryCount);

let retryCount = 5; // Error: I dentifier 'retryCount' has already been declared

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);
}

console.log(executionTime);