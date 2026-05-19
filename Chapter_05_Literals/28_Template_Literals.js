let firstname = "John";
let fullname = `${firstname} Doe`; // Using template literal to create fullname
console.log(fullname); // Output: John Doe
let age = 30;
let message = `My name is ${fullname} and I am ${age} years old.`;
console.log(message); // Output: My name is John Doe and I am 30 years old. 


let env = "staging";
env = "prod";
let apiUrl = `https://${env}.api.example.com`;
console.log(apiUrl); // Output: https://staging.api.example.com     


//Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).click();

//logs 
const testName = "Login Test";
const status = "passed";
const duration = 1200;
console.log(`Test: ${testName} - Status: ${status} - Duration: ${duration}ms`);
// Output: Test: Login Test - Status: passed - Duration: 1200ms