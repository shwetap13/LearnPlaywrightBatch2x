console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); 
/* prints false.
Both values are already strings.
With ==, if both sides are the same type, JavaScript compares their actual contents.
"" (empty string) is not the same as "0" (string containing zero).
So the result is false. */

console/log(0 == false); // true
console.log(null == 0); // false
console.log(undefined == 0); // false
console.log(null == undefined); // true 
/* null and undefined are only loosely equal to each other, and not equal to any other value.
This is a special case in JavaScript's type coercion rules. 
So null == undefined is true, but null == 0 and undefined == 0 are both false. */       
console.log(null === undefined); // false
/* null and undefined are of different types (null is an object, while undefined is its own type), so they are not strictly equal. 
Strict equality (===) checks both value and type, so null === undefined is false. */    
