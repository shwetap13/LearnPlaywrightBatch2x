let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
console.log(browsers.length); // Output: 4
console.log(browsers); // Output: ["Chrome", "Firefox", "Edge", "Safari", Opera];

browsers.pop();
console.log(browsers); // Output: ["Chrome", "Firefox", "Edge"]  


let removed = browsers.shift();
console.log(removed); // Output: "Chrome"
console.log(browsers); // Output: ["Firefox", "Edge"]\

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "opera") {
        console.log("Opera is not able found");
    }
}