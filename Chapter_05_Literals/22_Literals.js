let age = "years";
//This is a String literal assigned to the variable 'age'. String literals are enclosed in quotes (single or double) and represent a sequence of characters.

let isStudent = true;
//This is a Boolean literal assigned to the variable 'isStudent'. Boolean literals can only be true or false and are used to represent logical values.  

let pi = 3.14;
//This is a Number literal assigned to the variable 'pi'. Number literals can be integers or floating-point numbers and represent numeric values.   

let name = "Alice";
//This is a String literal assigned to the variable 'name'. It represents a sequence of characters that form the name "Alice".\

let nullValue = null;
//This is a Null literal assigned to the variable 'nullValue'. Null literals represent the intentional absence of any object value and are often used to indicate that a variable has no value or is empty.

let undefinedValue;
//This is an Undefined literal assigned to the variable 'undefinedValue'. Undefined literals represent a variable that has been declared but has not been assigned a value. It indicates that the variable is uninitialized.    


//typeof operator - it will return the type of the literal
console.log(typeof age); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof pi);
console.log(typeof name); // "string"
console.log(typeof nullValue); // "object" (this is a quirk in JavaScript, null is considered an object)    
console.log(typeof undefinedValue); // "undefined"
