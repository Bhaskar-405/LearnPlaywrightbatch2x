//Arrow function(Introduced in ES6)

//Function as Expression
//step1;define a function
const greet = function (name1) {
    return name1;
}
//step2:calling a function
let Result = greet("Bhaskar");
console.log(Result);


//now definea arrow function
const greet2 = (name1) => name1;
let Result1 = greet("nanna");
console.log(Result1);

//Note:if we want to convert normal function to arrow function follow below
//1.remove keywords function and return
//2.remove curly braces
//3.add =>

//arrow function
const doubleInt = n => n * 2;

let result = doubleInt(10);
console.log(result);

const printIt = name => console.log(name);
printIt("God");

