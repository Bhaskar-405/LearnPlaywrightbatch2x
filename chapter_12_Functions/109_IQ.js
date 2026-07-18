// Returns a value
//step1:define a type 4 function
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}
//stpe2:calling a function
let result = getStatus(200);
console.log(result);

let result1 = getStatus(404);
console.log(result1);

let result2 = getStatus(1000);
console.log(result2);

//Example
//step2:Function calling
Greet("Alice");

//Function define
const Greet = function (name) {
    return `"Hi", ${name}`;


}


