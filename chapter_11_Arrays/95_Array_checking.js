//check an array

//checking if something is array
let Result = Array.isArray([1, 2, 3]);
console.log(Result);

let Result1 = Array.isArray('a');
console.log(Result1);

//every and some -this can be used in automation

[80, 85, 90].every(s => s > 70);//true
[80, 60, 70].every(s => s > 70);//false

//playwright api
[200, 201, 203].every(statuscode => statuscode > 200); //true

//some -atleast one must pass

[80, 65, 80].some(s => s < 70);//true
[80, 90, 100].some(s => s > 200);//false

