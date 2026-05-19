//let is block-scoped

let x = "global";

if (true) {
    let x = "block-scoped";
    console.log(x); // "block-scoped"
}