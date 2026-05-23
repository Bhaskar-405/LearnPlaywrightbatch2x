//strict comparison=== check both vale and data type
//loose comparison== check value only,after converting both side tp same type(coercion)

//number==string
console.log(42 == "42")//loose compariosn
console.log(42 === "42")//strict compariosn

console.log(5 === 5);

console.log(5 === "5");
console.log(5 == "5");

console.log(0 == "");
console.log(0 === "");

console.log(true == 1);
console.log(false == 0);
console.log(true == 3);
console.log(false == 1);