// =====================================================
// Null vs Undefined in JavaScript
// =====================================================

/*
  NULL:
  - "null" means "empty" or "nothing"
  - It is a value that you assign to a variable when you want to say "there is no value"
  - It is like an empty box that you intentionally left empty
  - typeof null is "object" (this is a known bug in JavaScript)

  UNDEFINED:
  - "undefined" means "not assigned" or "missing"
  - A variable that is declared but not given a value is undefined
  - It is like a box that has a label but nothing inside yet
  - typeof undefined is "undefined"

  SIMPLE DIFFERENCE:
  - undefined = JavaScript says "I don't have a value for this"
  - null = You say "I want this to have no value"
*/

// -----------------------------------------------------
// Examples
// -----------------------------------------------------

// 1. Undefined examples
let userName;                  // Declared but not assigned
console.log(userName);         // undefined
console.log(typeof userName);  // "undefined"

function greet(name) {
  console.log("Hello, " + name);
}
greet();                       // name is undefined inside the function

let person = {};
console.log(person.age);       // undefined (property does not exist)

// 2. Null examples
let emptyValue = null;         // You intentionally set it to nothing
console.log(emptyValue);       // null
console.log(typeof emptyValue); // "object" (known JS quirk)

let user = {
  name: "John",
  email: null                  // Email is intentionally not provided
};
console.log(user.email);       // null

// 3. Comparison
console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality - different types)

// 4. Practical use case
let databaseResult = null;     // Query hasn't run yet, we set it to null
// After query:
databaseResult = { id: 1, name: "Product" };

let config;
console.log(config);           // undefined - you forgot to set it

// 5. Check for null or undefined
let value = null;
if (value == null) {
  console.log("Value is null or undefined");
}

let anotherValue;
if (anotherValue == null) {
  console.log("Another value is null or undefined");
}

// 6. Nullish coalescing operator (??)
let score = null;
let finalScore = score ?? 0;   // If score is null or undefined, use 0
console.log(finalScore);       // 0

let level;
let currentLevel = level ?? 1; // If level is null or undefined, use 1
console.log(currentLevel);     // 1
