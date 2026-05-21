let a = 10;
console.log(++a + a); // Output: 22 (a is incremented before being added to itself)
console.log(a);

let c = 10;
console.log(c++ + ++c); // Output: 21 (c is added to itself before being incremented)
console.log(c); // Output: 12 (c is now incremented)

let d = 10;
console.log(++d + ++d); // Output: 23 (d is incremented before being added to itself, then incremented again before being added)
console.log(d);