let Results = ["Pass", "Fail", "Error", "Skip"];

//indexof- returns frist index or -1 if not found

let status = Results.indexOf("Fail");
console.log(status);

let status2 = Results.indexOf("fail");
console.log(status2);

let status3 = Results.indexOf("Fail");
console.log(status3);

//last indexof
let status4 = Results.lastIndexOf("Error");
console.log(status4);

//include boolean value

let status5 = Results.includes("Error");
console.log(status5);

let status6 = Results.includes("Bhaskar");
console.log(status6);

//find-returns first matching elemnet
let nums = [25, 35, 45, 50];
let check = nums.find(x => x > 20);
console.log(check);

//findindex-
const index = nums.findIndex(n => n > 20);
console.log(index);
//findLast
const index1 = nums.findLast(n => n > 20);
console.log(index1);
//findlastIndex
const index2 = nums.findLastIndex(n => n > 20);
console.log(index2);



