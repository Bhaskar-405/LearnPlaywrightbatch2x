//slicing& combining
let arr = [1, 2, 3, 4, 5]

let new_arr = arr.slice(1, 3); //(start ,end-1)
// Returns a copy of a section of an array. For both start and end, 
// a negative index can be used to indicate an offset from the end of the array.
//  For example, -2 refers to the second to last element of the array
console.log(new_arr);
console.log(arr.slice(2, 4));//3, 4
console.log(arr.slice(2, 5));//3,4
console.log(arr.slice(2));//3, 4,5
console.log(arr.slice(-1)); //5
console.log(arr.slice(-2));//4,5
console.log(arr.slice(0));
