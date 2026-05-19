// Examples of null and undefined in JavaScript

// 1) undefined example: declared but not assigned
let city;
console.log("city:", city); // undefined

// 2) null example: intentionally assigned as no value
let selectedCity = null;
console.log("selectedCity:", selectedCity); // null

// 3) function returning undefined (no return statement)
function showMessage() {
	console.log("Hello from showMessage");
}
let result = showMessage();
console.log("result:", result); // undefined

// 4) object property that does not exist is undefined
let user = { name: "John" };
console.log("user.age:", user.age); // undefined

// 5) typeof checks
console.log("typeof city:", typeof city); // "undefined"
console.log("typeof selectedCity:", typeof selectedCity); // "object"

// 6) equality checks
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// 7) practical pattern
let apiData; // not set yet -> undefined
console.log("apiData before response:", apiData);

apiData = null; // response received, but no data intentionally
console.log("apiData after empty response:", apiData);

