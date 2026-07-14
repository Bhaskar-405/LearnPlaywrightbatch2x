let scores = [45, 82, 91, 60, 73];

//map- transform every element ,returns a new array

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//filter -keeps element that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce- accumulate a single value

let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);

//flat
let nested = [[1, 2], [2, 3], [4, 5]];
console.log(nested.flat());





