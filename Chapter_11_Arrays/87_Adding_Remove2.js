let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//arr.slice(2, 1); // No change, as end index is less than start index
//console.log(arr); // Output: [1, 2, 3, 4, 5, 6]     

//arr.splice(2, 0, 99) //add 99 at index 2, remove 0 elements
//console.log(arr); // Output: [1, 2, 99, 3, 4, 5, 6]

//arr.splice(2, 1, 99)  //replace 1 element at index 2 with 99
//console.log(arr); // Output: [1, 2, 99, 3, 4, 5, 6]

arr.slice(1, 2, 10, 20); // No change, as slice does not modify the original array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]