let Fruits = ["Bananan", "Apple", "cherry"];

//sorting of strings
Fruits.sort();
console.log(Fruits);

//sorting of single didgit numbers
let numbers = [3, 2, 1];
let sorted = numbers.sort();
console.log(sorted);

//sorting of 2 digit numbers

let marks = [23, 35, 13, 10];
let sorted_marks = marks.sort();
console.log(sorted_marks);

//natural sorting or lexo graphic sorting(Compare single digits first later 2 digits)
let nums = [10, 1, 21, 2]
let n = nums.sort();
console.log(n);

///normla sorting using functions ,ascending order-most prefred
nums.sort((a, b) => a - b);
console.log(nums);
//descing order
nums.sort((a, b) => b - a);
console.log(nums);




