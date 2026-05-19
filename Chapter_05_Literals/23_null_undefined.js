// null vs undefined in JavaScript

// undefined:
// A variable is `undefined` when it is declared but not assigned a value yet.
let userName;
console.log("userName:", userName); // undefined

// null:
// `null` is an explicit value that means "no value" or "empty on purpose".
let selectedUser = null;
console.log("selectedUser:", selectedUser); // null

// typeof behavior (important interview point)
console.log("typeof undefined:", typeof userName); // "undefined"
console.log("typeof null:", typeof selectedUser); // "object" (this is a historical JS quirk)

// Equality checks
console.log("null == undefined:", null == undefined); // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)

// Practical example:
// Use undefined when value is not set yet.
let apiResponse;

// Later, set null when API says no data exists intentionally.
apiResponse = null;

console.log("apiResponse:", apiResponse); // null

/*
Quick summary:
1) undefined -> default for uninitialized variables.
2) null -> assigned intentionally to represent "no value".
3) null and undefined are loosely equal (==) but not strictly equal (===).
*/
