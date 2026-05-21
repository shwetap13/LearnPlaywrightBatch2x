//number == string
console.log(42 == "42"); // true (loose equality)
console.log(42 === "42"); // false (strict equality)
//data type and converted value 

console.log(42 == "45"); // false (loose equality)

console.log(5 === 5); // true (strict equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 == "5"); // true (loose equality)
console.log(5 == 5); // true (loose equality)

console.log(0 == ""); // true (loose equality) "" is converted to 0
console.log(0 === ""); // false (strict equality) different types

console.log(true == 1); // true (loose equality) true is converted to 1
console.log(false == 0); // true (loose equality) false is converted to 0
console.log(true == "1"); // true (loose equality) true is converted to 1
console.log(true == 2); // false (loose equality) true is converted to 1
console.log(true === 1); // false (strict equality) different types
console.log(false === 0); // false (strict equality) different types

console.log(5 != "5"); // false (loose inequality) 5 is converted to "5"
console.log(5 !== "5"); // true (strict inequality) different types
//console.log(5 !=== "5"); // SyntaxError: Unexpected token '===' (invalid operator)
//this does not exist 
