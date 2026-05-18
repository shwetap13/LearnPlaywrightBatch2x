var a = 10; //global scope

//var is fucntion scoped

console.log(a);

function printHello() {
    console.log("Hello World!");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}

printHello();
