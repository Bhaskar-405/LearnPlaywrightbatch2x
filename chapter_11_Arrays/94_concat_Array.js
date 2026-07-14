//combining 2 arrays

let arr1 = [1, 2];
let arr2 = [3, 4];

//let c = arr1 + arr2;//this is not a correct way to combine 2 arrays
let c = arr1.concat(arr2);
console.log(c);

//spread-modern way-concatination (3 dot only ...)

let d = [...arr1, ...arr2];
console.log(d);

//join
let s = ["Pass", "Fail", "skip"].join("|");
console.log(s);



