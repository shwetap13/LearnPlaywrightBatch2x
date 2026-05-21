//??

console.log(null >= 0); // null == 0 or null >0
console.log(null === 0); // null is not equal to 0


//Nullish
let amul = null;
let milk_required = amul ?? "Milk is required";
console.log(milk_required); // Output: "Milk is required" 

let amumilk = "Amul";
let milk_requiredd = amumilk ?? "Gokul";
console.log(milk_required);