let arr = [1, 2, 3]
console.log(arr); // Output: [1, 2, 3]

//Add to start
arr.unshift(0);

//Remove from end 
arr.pop();
console.log(arr); // Output: [0, 1, 2]

arr.push(5, 6);
console.log(arr); // Output: [0, 1, 2, 5, 6]    

//Add at the beginning
arr.unshift(-2, -1);
console.log(arr); // Output: [-2, -1, 0, 1, 2, 5, 6]    

