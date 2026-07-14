//1st way an it is preferred way of creating an array is array literal

let Browsers = ["Chrome", "Firefox", "Safari"];

//--2nd way of array creation is is "Array constructor"
let scores = new Array(3);//empty array,here 3 is the length
let scores2 = [1, 2, 3];

console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

// ---3rd way of array creation is : Array.of
let tests = Array.of(10, 20, 30, 40);
console.log(tests);

//---4th way of array creation is Array.from
let chars = Array.from("Hello");
console.log(chars);

// let numbers2 = Array.from("12345");
// console.log(numbers);




