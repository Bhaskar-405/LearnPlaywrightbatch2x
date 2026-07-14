//Accessing & Modifing arrays
let Statuses = ["Pass", "fail", "skip"];

console.log(Statuses[0]);
console.log(Statuses[1]);
console.log(Statuses[2]);
//reverese order need to use -1,-2,-3 ,this concept borrowed from python
console.log(Statuses.at(-1));//using at function -skip 
console.log(Statuses.at(-2));//fail
console.log(Statuses.at(-3));//pass
console.log(Statuses.at(-4));//undefined

//modify array elements
Statuses[0] = "Orange";
console.log(Statuses);

