//Creating arrays // Array Literal (preferred)
let browers = ["Chrome", "Firefox", "Edge", "Safari"];

//Array Constructor
let scores = new Array(3);
let scores_fresh = new Array(85, 90, 95);
console.log(scores); // Output: [ <3 empty items> ]
console.log(scores_fresh); // Output: [85, 90, 95]  

let numbers = [10, 20, 30, 40]; // Array with numeric elements
console.log(numbers); // Output: [10, 20, 30, 40]   

let test = Array.of(1, 2, 3, 4); // Array created using Array.of()
console.log(test); // Output: [1, 2, 3, 4]  

let chars = Array.from("Hello"); // Array created from a string
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']    

let numbers = Array.from(8878768); // Array created from a string of digits
console.log(numbers); // Output: ['8', '8', '7', '8', '7', '6', '8']    