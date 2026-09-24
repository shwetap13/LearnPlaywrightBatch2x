let a = 10; //global scope
console.log(a);
//definition of function
function printHello() {
    console.log("Hello World!");
    let a = 20; //local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}

console.log("Global ->", a);
printHello();

