let results = ["Pass", "Fail", "Pass", "Pass", "Fail"];
results.indexOf("Fail"); // Output: 1 (first occurrence of "Fail")
results.indexOf("skipped"); // Output: -1 (not found)

results.lastIndexOf("Pass"); // Output: 3 (last occurrence of "Pass")
results.includes("Fail"); // Output: true

//
results.includes("error"); // Output: false
