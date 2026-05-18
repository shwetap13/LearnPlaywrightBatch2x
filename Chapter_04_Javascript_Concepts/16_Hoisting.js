// JS Engine
// Line bu line, JIT compilation, optimization, garbage collection

console.log(greeting); //undefined due to hoisting

var greeting = "Hello";
console.log(greeting); //Hello

//Behind the scenes:

// var greeting; //hoisted declaration, initialized with undefined
// console.log(greeting); //undefined
// greeting = "Hello"; //assignment stays in place
// console.log(greeting); //Hello


console.log(a);
var a = 10; //hoisted declaration, initialized with undefined
console.log(a); //10