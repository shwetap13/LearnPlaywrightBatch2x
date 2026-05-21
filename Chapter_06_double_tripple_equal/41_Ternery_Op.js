
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote yet.";
console.log(canVote); // Output: "Yes, you can vote."   

let actualStatus = 200;
let expectedStatus = 200;
let statusMessage = (actualStatus === expectedStatus) ? "✅ PASS: Status is OK." : "❌ FAIL: Status is NOT OK.";
console.log(statusMessage); // Output: "✅ PASS: Status is OK."


let environment = "staging";
let baseurl = (environment === "production") ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseurl); // Output: "https://staging-api.example.com"



let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode"); // Output: "headless"    

let responcseTime = 850;
let sla = 1000;
let slaStatus = (responcseTime <= sla) ? "✅ PASS: Response time is within SLA." : "❌ FAIL: Response time exceeds SLA.";
console.log(`Response: ${responcseTime}ms - ${slaStatus}`); // Output: "✅ PASS: Response time is within SLA."


let agee = 45;
let canVoteDrive = agee >= 18 ? (agee >= 20 ? "You can vote and drive" : "You can not drive.") : "No, you cannot vote yet.";
console.log(canVoteDrive); // Output: "You can drive"  


////// IV Question: Can you use nested ternary operators? If so, provide an example.
//Yes, you can use nested ternary operators in JavaScript. However, it's important to use them judiciously, as they can make the code harder to read if overused. Here's an example of a nested ternary operator:

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirection" :
            statusCode < 500 ? "Client Error" :
                statusCode < 600 ? "Server Error" :
                    "Unknown Status Code";
console.log(`Status Code: ${statusCode} - Category: ${category}`); // Output: "Status Code: 404 - Category: Client Error"   
