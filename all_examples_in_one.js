/**
 * ============================================================
 * ALL JAVASCRIPT EXAMPLES IN ONE FILE
 * ============================================================
 * This file combines all JavaScript concepts with examples
 * to help understand everything in one place.
 */

// ============================================================
// 1. BASICS - Console Output & Comments
// ============================================================

console.log("Hello, World!");
console.log("Welcome to JavaScript programming.");

// This is a single-line comment
/* This is a 
   multi-line comment */

// ============================================================
// 2. VARIABLE DECLARATIONS (var, let, const)
// ============================================================

// var - function scoped, can be redeclared and updated
var v = 10;
console.log("var v:", v);
v = 20; // Can be updated
console.log("var v updated:", v);
var v = 30; // Can be redeclared
console.log("var v redeclared:", v);

// let - block scoped, can be updated but NOT redeclared
let mutableVariable = "block scoped";
console.log("let:", mutableVariable);
mutableVariable = "can be updated"; // OK
console.log("let updated:", mutableVariable);
// let mutableVariable = "error"; // ERROR! Cannot redeclare

// const - block scoped, cannot be reassigned
const CONSTANT_VALUE = "cannot be reassigned";
console.log("const:", CONSTANT_VALUE);
// CONSTANT_VALUE = "new"; // ERROR! Cannot reassign

// const objects CAN be modified (just not reassigned)
const config = { port: 3000 };
config.port = 8080; // OK
console.log("const object modified:", config);

// ============================================================
// 3. IDENTIFIER RULES & NAMING CONVENTIONS
// ============================================================

// VALID IDENTIFIERS
var $ = 10;
var _a = 20;
var name = "John";
var abc123 = 30;
var NAME = "Bhaskar"; // Case-sensitive (different from 'name')
var firstName = "Bhaskar"; // camelCase (recommended for variables)
var name234 = "rao";
var last_name = "rayapalli"; // snake_case
var currency_$ = "INR";
var π = 3.14; // Unicode allowed
var 变量 = "Chinese"; // Unicode allowed

console.log("Identifiers:");
console.log("$:", $);
console.log("_a:", _a);
console.log("name:", name);
console.log("abc123:", abc123);
console.log("NAME:", NAME);
console.log("firstName:", firstName);
console.log("name234:", name234);
console.log("last_name:", last_name);
console.log("currency_$:", currency_$);

// INVALID IDENTIFIERS (uncomment to see errors):
// var 123abc = 1;      // Cannot start with number
// var my-variable = 2; // Cannot contain hyphen
// var my variable = 3; // Cannot contain space
// var class = 4;       // Cannot use reserved keyword
// var return = 5;      // Cannot use reserved keyword

// NAMING CONVENTIONS (Best Practices):
// camelCase for variables and functions
let userName = "Alice";
function calculateTotal() { return 100; }

// PascalCase for classes and constructors
class UserAccount {}
function Person(name) { this.name = name; }

// UPPER_CASE for constants
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";

// ============================================================
// 4. DATA TYPES
// ============================================================

// Primitive Types
let str = "Hello";           // String
let num = 42;                // Number
let float = 3.14;            // Number (decimal)
let bool = true;             // Boolean
let nothing = null;          // Null
let notDefined;              // Undefined
let sym = Symbol("id");      // Symbol
let big = 9007199254740991n; // BigInt

console.log("\nData Types:");
console.log("string:", typeof str);
console.log("number:", typeof num);
console.log("boolean:", typeof bool);
console.log("null:", typeof nothing); // object (known bug)
console.log("undefined:", typeof notDefined);
console.log("symbol:", typeof sym);
console.log("bigint:", typeof big);

// Object Types
let arr = [1, 2, 3];                    // Array
let obj = { name: "John", age: 30 };    // Object
let regex = /ab+c/i;                    // RegExp
let date = new Date();                  // Date

console.log("array:", typeof arr);      // object
console.log("object:", typeof obj);     // object
console.log("regex:", typeof regex);    // object

// ============================================================
// 5. OPERATORS
// ============================================================

// Arithmetic Operators
console.log("\nArithmetic:");
console.log("10 + 5 =", 10 + 5);   // Addition
console.log("10 - 5 =", 10 - 5);   // Subtraction
console.log("10 * 5 =", 10 * 5);   // Multiplication
console.log("10 / 5 =", 10 / 5);   // Division
console.log("10 % 3 =", 10 % 3);   // Modulus (remainder)
console.log("10 ** 2 =", 10 ** 2); // Exponentiation

// Assignment Operators
let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 2;  // x = x / 2
console.log("Assignment x:", x);

// Comparison Operators
console.log("\nComparison:");
console.log("5 == '5':", 5 == "5");    // true (loose equality, type coercion)
console.log("5 === '5':", 5 === "5");  // false (strict equality)
console.log("5 != '5':", 5 != "5");    // false
console.log("5 !== '5':", 5 !== "5");  // true
console.log("10 > 5:", 10 > 5);       // true
console.log("10 <= 5:", 10 <= 5);     // false

// Logical Operators
console.log("\nLogical:");
console.log("true && false:", true && false); // AND
console.log("true || false:", true || false); // OR
console.log("!true:", !true);                  // NOT

// Ternary Operator
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", status);

// typeof Operator
console.log("typeof 'hello':", typeof "hello");
console.log("typeof 42:", typeof 42);

// instanceof Operator
let today = new Date();
console.log("instanceof Date:", today instanceof Date);

// ============================================================
// 6. CONTROL FLOW
// ============================================================

// if, else if, else
console.log("\nIf/Else:");
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// switch, case, break, default
console.log("\nSwitch:");
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// for loop
console.log("\nFor loop:");
for (let i = 0; i < 5; i++) {
    console.log("i:", i);
}

// while loop
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log("count:", count);
    count++;
}

// do-while loop
console.log("\nDo-While loop:");
do {
    console.log("do-while runs at least once");
} while (false);

// break and continue
console.log("\nBreak & Continue:");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip 2
    if (i === 4) break;    // stop at 4
    console.log("i:", i);
}

// ============================================================
// 7. FUNCTIONS
// ============================================================

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("\nFunction declaration:", greet("Alice"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Function expression:", add(5, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Arrow function:", multiply(4, 5));

// Arrow function with multiple lines
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};
console.log("Arrow function multi-line:", divide(10, 2));

// Default Parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log("Default param:", greetUser());
console.log("Default param with value:", greetUser("John"));

// Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log("Rest params:", sumAll(1, 2, 3, 4, 5));

// Callback Function
function processData(data, callback) {
    const result = data.toUpperCase();
    callback(result);
}
processData("hello", (result) => {
    console.log("Callback:", result);
});

// Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log("Generator:", gen.next().value);
console.log("Generator:", gen.next().value);

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE: Runs immediately!");
})();

// ============================================================
// 8. ARRAYS
// ============================================================

console.log("\nArrays:");
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);

// Accessing elements
console.log("First element:", fruits[0]);
console.log("Array length:", fruits.length);

// Array Methods
fruits.push("Date");           // Add to end
console.log("After push:", fruits);

fruits.pop();                  // Remove from end
console.log("After pop:", fruits);

fruits.unshift("Apricot");     // Add to beginning
console.log("After unshift:", fruits);

fruits.shift();                // Remove from beginning
console.log("After shift:", fruits);

console.log("Index of Banana:", fruits.indexOf("Banana"));
console.log("Includes Apple:", fruits.includes("Apple"));

// Array iteration
console.log("\nArray iteration:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Array map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mapped:", upperFruits);

// Array filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Filtered:", longFruits);

// Array reduce
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("Reduced (total length):", totalLength);

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Destructured:", first, second, rest);

// Array spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread:", arr2);

// ============================================================
// 9. OBJECTS
// ============================================================

console.log("\nObjects:");
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: "10001"
    },
    // Method
    greet() {
        return `Hi, I'm ${this.firstName} ${this.lastName}`;
    },
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Setter
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log("Object:", person);
console.log("Dot notation:", person.firstName);
console.log("Bracket notation:", person["lastName"]);
console.log("Method:", person.greet());
console.log("Getter:", person.fullName);

person.fullName = "Jane Smith";
console.log("After setter:", person.firstName, person.lastName);

// Object destructuring
const { firstName: fName, lastName: lName, age: personAge } = person;
console.log("Destructured:", fName, lName, personAge);

// Object spread
const personCopy = { ...person, country: "USA" };
console.log("Object spread:", personCopy);

// Object.keys, Object.values, Object.entries
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// ============================================================
// 10. CLASSES
// ============================================================

console.log("\nClasses:");
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }

    static isAlive() {
        return true;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy", "Labrador");
dog.speak();
console.log("Static method:", Animal.isAlive());
console.log("instanceof Dog:", dog instanceof Dog);
console.log("instanceof Animal:", dog instanceof Animal);

// ============================================================
// 11. EXCEPTION HANDLING
// ============================================================

console.log("\nException Handling:");
try {
    console.log("Try block: attempting risky operation");
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Catch block:", error.message);
} finally {
    console.log("Finally block: always runs");
}

// Custom error handling
function divideNumbers(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero!");
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}
console.log("Divide 10/2:", divideNumbers(10, 2));
console.log("Divide 10/0:", divideNumbers(10, 0));

// ============================================================
// 12. PROMISES & ASYNC/AWAIT
// ============================================================

console.log("\nPromises & Async/Await:");

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 100);
});

// Using .then(), .catch(), .finally()
myPromise
    .then(result => console.log("Then:", result))
    .catch(error => console.error("Catch:", error))
    .finally(() => console.log("Finally: Done with promise"));

// Async/Await
async function fetchData() {
    try {
        const result = await myPromise;
        console.log("Awaited:", result);
    } catch (error) {
        console.error("Async error:", error);
    }
}
fetchData();

// Promise.all
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => {
    console.log("Promise.all:", values);
});

// ============================================================
// 13. DESTRUCTURING
// ============================================================

console.log("\nDestructuring:");

// Array destructuring
const [a, b, c] = [1, 2, 3];
console.log("Array destructuring:", a, b, c);

// Object destructuring
const user = { name: "Alice", city: "NYC" };
const { name: userName2, city } = user;
console.log("Object destructuring:", userName2, city);

// Nested destructuring
const nested = { data: { id: 1, title: "Hello" } };
const { data: { id, title } } = nested;
console.log("Nested destructuring:", id, title);

// Default values in destructuring
const [p = 10, q = 20] = [5];
console.log("Default values:", p, q);

// ============================================================
// 14. SPREAD & REST OPERATORS
// ============================================================

console.log("\nSpread & Rest:");

// Spread with arrays
const nums1 = [1, 2];
const nums2 = [...nums1, 3, 4];
console.log("Spread array:", nums2);

// Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Spread object:", obj2);

// Rest with arrays
const [firstNum, ...remaining] = [1, 2, 3, 4];
console.log("Rest array:", firstNum, remaining);

// Rest with objects
const { a: propA, ...restProps } = { a: 1, b: 2, c: 3 };
console.log("Rest object:", propA, restProps);

// Rest parameters in functions
function sumMultiple(a, b, ...others) {
    return a + b + others.reduce((x, y) => x + y, 0);
}
console.log("Rest params:", sumMultiple(1, 2, 3, 4, 5));

// ============================================================
// 15. SHORT-CIRCUIT & OPTIONAL CHAINING
// ============================================================

console.log("\nShort-circuit & Optional Chaining:");

// Logical OR (||) - returns first truthy value
let providedName = "";
let displayName = providedName || "Anonymous";
console.log("OR:", displayName);

// Logical AND (&&) - returns first falsy value
let userAdmin = { isAdmin: true };
userAdmin.isAdmin && console.log("Admin panel shown");

// Nullish coalescing (??) - only null/undefined trigger fallback
let zero = 0;
let value = zero ?? 100;
console.log("Nullish coalescing:", value); // 0 (not 100)

let nullValue = null;
let value2 = nullValue ?? 100;
console.log("Nullish coalescing with null:", value2); // 100

// Optional chaining (?.)
let userProfile = { profile: null };
console.log("Optional chaining:", userProfile?.profile?.name); // undefined (no error)

let validUser = { profile: { name: "John" } };
console.log("Optional chaining valid:", validUser?.profile?.name); // "John"

// ============================================================
// 16. STRICT MODE
// ============================================================

"use strict";

// In strict mode:
// - Variables must be declared before use
// - Cannot delete variables
// - Cannot use reserved words as identifiers
// - this in functions is undefined (not window)
// - No duplicate parameter names

function strictExample() {
    "use strict";
    let strictVar = "I am in strict mode";
    console.log("Strict mode:", strictVar);
}
strictExample();

// ============================================================
// 17. ADVANCED FEATURES
// ============================================================

console.log("\nAdvanced Features:");

// Symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log("Symbol unique:", sym1 === sym2); // false

// BigInt
const huge = 9007199254740991n;
const huge2 = BigInt("9007199254740992");
console.log("BigInt:", huge + 1n);

// Template literals
const tempName = "World";
console.log(`Template literal: Hello, ${tempName}!`);
console.log(`Multi-line:
Line 1
Line 2`);

// Tagged template literals
function tag(strings, ...values) {
    console.log("Tagged template strings:", strings);
    console.log("Tagged template values:", values);
}
tag`Hello ${"World"}!`;

// ============================================================
// 18. COMPLETE PRACTICAL EXAMPLE
// ============================================================

console.log("\n=== PRACTICAL EXAMPLE: User Management ===");

class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }

    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(name, email) {
        const id = this.users.length + 1;
        const user = new User(id, name, email);
        this.users.push(user);
        return user;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    getAllUsers() {
        return [...this.users];
    }

    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }

    displayUsers() {
        console.log("\nAll Users:");
        this.users.forEach(user => {
            console.log(`- ${user.getInfo()} (Created: ${user.createdAt.toLocaleDateString()})`);
        });
    }
}

// Using the practical example
const manager = new UserManager();
manager.addUser("John Doe", "john@example.com");
manager.addUser("Jane Smith", "jane@example.com");
manager.addUser("Bob Johnson", "bob@example.com");

manager.displayUsers();

const user1 = manager.getUser(1);
console.log("\nFound user:", user1?.getInfo());

manager.deleteUser(2);
console.log("After deletion:");
manager.displayUsers();

// ============================================================
// END OF ALL EXAMPLES
// ============================================================

console.log("\n✅ All JavaScript examples completed!");
console.log("Run this file with: node all_examples_in_one.js");
