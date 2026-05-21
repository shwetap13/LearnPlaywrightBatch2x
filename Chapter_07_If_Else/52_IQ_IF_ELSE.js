if ("Hello") console.log("This will print because non-empty strings are truthy.");
if (42) console.log("This will print because non-zero numbers are truthy.");
if (0) console.log("This will NOT print because 0 is falsy.");
if (null) console.log("This will NOT print because null is falsy.");
if (undefined) console.log("This will NOT print because undefined is falsy.");
if (NaN) console.log("This will NOT print because NaN is falsy.");
if ({}) console.log("This will print because objects are truthy.");
if ([]) console.log("This will print because arrays are truthy.");

let name = undefined;
if (name) {
    console.log("Hi.");
} else {
    console.log("Bye.");
}