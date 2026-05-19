console.log(score);
let score = 100;
// ReferenceError: Cannot access 'score' before initialization

// The above code demonstrates that variables declared with 'let' are not hoisted in the same way as 'var'. 
// They are in a "temporal dead zone" from the start of the block until the declaration is processed, 
// which means you cannot access them before they are declared. 

{
    // --- TDZ for 'score' starts here ---
    // console.log(score);  // ReferenceError: Cannot access 'score' before initialization
    // score = 50; // ReferenceError: Cannot access 'score' before initialization
    //typeof score; // ReferenceError: Cannot access 'score' before initialization
    // --- TDZ for 'score' ends here ---
    let score = 100; //Declaration reached, TDZ ends
    console.log(score); //100 (safe to access now)
}