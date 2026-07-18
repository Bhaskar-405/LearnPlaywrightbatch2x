//Arrow function(Introduced in ES6)

//Function as Expression
//step1;define a function
const greet = function (name1) {
    return name1;
}
//step2:calling a function
let Result = greet("Bhaskar");
console.log(Result);


//----->now definea arrow function
const greet2 = (name1) => name1; //parameters and return type
let Result1 = greet("nanna");
console.log(Result1);

//Note:if we want to convert normal function to arrow function follow below
//1.remove keywords function and return
//2.remove curly braces
//3.add =>

//arrow function
const doubleInt = n => n * 2; //parameters and return type

let result = doubleInt(10);
console.log(result);

const printIt = name => console.log(name);
printIt("God");

//example2-Normal type4 function
function add(a, b) {
    return a + b;

}
//arrow function
const add2 = (a, b) => a + b;

//another example-type4
function say() {
    console.log("Hi");


}
//arrow function for above

const say1 = () => console.log("Hi");
const say2 = () => console.log("Hi ra");
//multiline in a arrow function we need to use return keyword

const greet = name => {
    const message = "Hi" + name;
    return message;
}


