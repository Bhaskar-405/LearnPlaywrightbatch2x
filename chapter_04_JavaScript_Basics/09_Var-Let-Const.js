var v = 10;
//var keyword,v is identifier ,10 is value/literal,= operator
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; //re-declaration and re-assignment is allowed with var
browser = "edge"; //re-assignment is allowed with var

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();
