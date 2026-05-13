/**
 * ============================================================
 * JAVASCRIPT KEYWORDS & IDENTIFIER RULES - COMPREHENSIVE GUIDE
 * ============================================================
 */

// ------------------------------------------------------------
// 1. VARIABLE DECLARATIONS (var, let, const)
// ------------------------------------------------------------

var oldVariable = "function scoped";
let mutableVariable = "block scoped";
const CONSTANT_VALUE = "cannot be reassigned";

// ------------------------------------------------------------
// 2. CONTROL FLOW
// ------------------------------------------------------------

// if, else
let age = 18;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// switch, case, break, default
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}

// for, while, do, break, continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip 2
    if (i === 4) break;    // stop at 4
    console.log(i);
}

let count = 0;
while (count < 3) {
    console.log("while:", count);
    count++;
}

do {
    console.log("do-while runs at least once");
} while (false);

// ------------------------------------------------------------
// 3. EXCEPTION HANDLING (try, catch, finally, throw)
// ------------------------------------------------------------

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Caught:", error.message);
} finally {
    console.log("Finally block always runs");
}

// ------------------------------------------------------------
// 4. FUNCTIONS
// ------------------------------------------------------------

// function declaration
function greet(name) {
    return `Hello, ${name}`;
}

// function expression
const add = function(a, b) {
    return a + b;
};

// arrow function
const multiply = (a, b) => a * b;

// generator function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

// async function
async function fetchData() {
    return await Promise.resolve("data");
}

// ------------------------------------------------------------
// 5. OBJECTS & CLASSES
// ------------------------------------------------------------

// class, extends, super, constructor, static
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
console.log(Animal.isAlive());

// this keyword
const person = {
    name: "Alice",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person.greet();

// ------------------------------------------------------------
// 6. MODULES (import, export)
// ------------------------------------------------------------

// Named export (would be in another file)
// export const PI = 3.14159;
// export function square(x) { return x * x; }

// Default export (would be in another file)
// export default class MyClass {}

// Import syntax (would be in consuming file)
// import { PI, square } from './math.js';
// import MyClass from './myclass.js';
// import * as utils from './utils.js';

// ------------------------------------------------------------
// 7. OPERATORS & TYPE CHECKING
// ------------------------------------------------------------

// typeof
console.log(typeof "hello");  // string
console.log(typeof 42);       // number
console.log(typeof true);     // boolean
console.log(typeof {});       // object
console.log(typeof undefined);// undefined
console.log(typeof function(){}); // function

// instanceof
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true

// in operator
console.log("name" in dog);  // true

// void operator
console.log(void 0);  // undefined

// delete operator
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj);  // { b: 2 }

// ------------------------------------------------------------
// 8. LITERALS
// ------------------------------------------------------------

// Boolean literals
let isActive = true;
let isDeleted = false;

// Null literal
let emptyValue = null;

// Undefined
let notAssigned = undefined;

// Numeric literals
let integer = 42;
let floating = 3.14;
let hex = 0xFF;
let binary = 0b1010;
let octal = 0o77;

// String literals
let single = 'hello';
let double = "world";
let template = `Value is ${integer}`;

// Array literals
let arr = [1, 2, 3];

// Object literals
let user = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

// Regular expression literal
let regex = /ab+c/i;

// ------------------------------------------------------------
// 9. STRICT MODE
// ------------------------------------------------------------

"use strict";

// In strict mode:
// - Variables must be declared
// - Cannot delete variables
// - Cannot use reserved words as identifiers
// - this in functions is undefined (not window)
// - No duplicate parameter names

function strictFunction() {
    "use strict";
    // code here runs in strict mode
}

// ------------------------------------------------------------
// 10. DEBUGGER
// ------------------------------------------------------------

function debugExample() {
    let x = 10;
    // debugger; // Uncomment to trigger breakpoint in DevTools
    x += 5;
    return x;
}

// ------------------------------------------------------------
// 11. IDENTIFIER RULES & EXAMPLES
// ------------------------------------------------------------

// VALID IDENTIFIERS
let validName;
let _privateVar;
let $jqueryStyle;
let camelCaseExample;
let PascalCaseExample;
let number123;
let π;  // Unicode
let 变量; // Unicode (Chinese)
let _;   // Single underscore
let $;   // Single dollar sign

// INVALID IDENTIFIERS (uncomment to see errors)
// let 123abc;      // Cannot start with digit
// let my-variable; // Cannot contain hyphen
// let my variable; // Cannot contain space
// let class;       // Cannot use reserved keyword
// let return;      // Cannot use reserved keyword
// let break;       // Cannot use reserved keyword
// let my@var;      // @ is not allowed

// Reserved words that CANNOT be used as identifiers:
// break, case, catch, class, const, continue, debugger, default,
// delete, do, else, export, extends, finally, for, function, if,
// import, in, instanceof, new, return, super, switch, this, throw,
// try, typeof, var, void, while, with, yield, let, static, await, enum

// Strict mode reserved words:
// implements, interface, package, private, protected, public

// Contextual keywords (can be identifiers in some contexts, but avoid):
// as, async, from, get, of, set, target

// ------------------------------------------------------------
// 12. BEST PRACTICES FOR NAMING
// ------------------------------------------------------------

// camelCase for variables and functions
let userName = "Alice";
function calculateTotal() {}

// PascalCase for classes and constructors
class UserAccount {}
function Person(name) { this.name = name; }

// UPPER_CASE for constants
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";

// Private convention with underscore
class Example {
    constructor() {
        this._internalValue = 0; // convention for private
    }
}

// ------------------------------------------------------------
// 13. SCOPE & HOISTING DEMONSTRATIONS
// ------------------------------------------------------------

// var is function-scoped and hoisted
function varDemo() {
    console.log(hoistedVar); // undefined (not error)
    var hoistedVar = "I am hoisted";
}

// let/const are block-scoped and not hoisted
function letDemo() {
    // console.log(blockVar); // ReferenceError!
    let blockVar = "I am block scoped";
    if (true) {
        let inner = "inner block";
        console.log(blockVar); // accessible
    }
    // console.log(inner); // ReferenceError!
}

// const must be initialized
// const missingInit; // SyntaxError

// const objects can be modified
const config = { port: 3000 };
config.port = 8080; // OK
// config = {};     // TypeError!

// ------------------------------------------------------------
// 14. COMPARISON WITH STRICT EQUALITY
// ------------------------------------------------------------

console.log(5 == "5");   // true  (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, no coercion)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// ------------------------------------------------------------
// 15. SHORT-CIRCUIT EVALUATION
// ------------------------------------------------------------

// Logical OR
let providedName = "";
let displayName = providedName || "Anonymous"; // "Anonymous"

// Logical AND
let user2 = { isAdmin: true };
user2.isAdmin && console.log("Admin panel");

// Nullish coalescing (??)
let zero = 0;
let value = zero ?? 100; // 0 (only null/undefined trigger fallback)

// Optional chaining (?.) - not a keyword but important
let user3 = { profile: null };
console.log(user3?.profile?.name); // undefined (no error)

// ------------------------------------------------------------
// 16. DESTRUCTURING & REST/SPREAD
// ------------------------------------------------------------

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { firstName, lastName: surname } = user;

// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

// Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// ------------------------------------------------------------
// 17. PROMISES & ASYNC/AWAIT
// ------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 100);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Async/await pattern
async function asyncExample() {
    try {
        const result = await promise;
        console.log("Awaited:", result);
    } catch (error) {
        console.error("Async error:", error);
    }
}

// ------------------------------------------------------------
// 18. SYMBOL TYPE
// ------------------------------------------------------------

const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false (unique)

// Well-known symbols
const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                return { value: step, done: step > 3 };
            }
        };
    }
};

// ------------------------------------------------------------
// 19. BIG INT
// ------------------------------------------------------------

const hugeNumber = 9007199254740991n;
const anotherHuge = BigInt("9007199254740992");
console.log(hugeNumber + 1n);

// ------------------------------------------------------------
// 20. GLOBAL OBJECTS (NOT KEYWORDS, BUT AVOID AS IDENTIFIERS)
// ------------------------------------------------------------

// Avoid using these as variable names:
// Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String
// undefined, NaN, Infinity
// parseInt, parseFloat, eval, isNaN, isFinite, decodeURI, encodeURI
// window, document, console, navigator, location, history

// console.clear(); // Uncomment to clear console

// ============================================================
// END OF COMPREHENSIVE JAVASCRIPT REFERENCE
// ============================================================
