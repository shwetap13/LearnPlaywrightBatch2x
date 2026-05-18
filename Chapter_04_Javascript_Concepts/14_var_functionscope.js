var a = 10; //global scope
console.log(a);
//definition of function
function printHello() {
    console.log("Hello World!");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}

console.log("Global ->", a);
printHello();