let arr = [1, 2, 3];
console.log(arr);

//adding 2 more elements
arr.push(4, 5, 6);
console.log(arr);

//splice -(start,deletecount..temstoadd) Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements.

arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);//add
arr.splice(2, 1, 99);//replace
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);


