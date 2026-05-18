var v = 10;
let l = 30;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // var allows redeclaration
browser = "Edge"; // var allows reassignment
// let browser = "Edge"; // Error: Identifier 'browser' has already been declared
// const browser = "Safari"; // Error: Identifier 'browser' has already been declared


var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test case:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);
// var is function-scoped, so 'i' is accessible here

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from function");
}

say();
say();