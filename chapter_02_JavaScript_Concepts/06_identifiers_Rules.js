//identifier rules 

var $ = 10;
var _a = 20;
var name = "John";
var abc123 = 30;
var NAME = "Bhaskar";
var name = "Bhaskar";
var firstName = "Bhaskar";
var name234 = "rao";//valid identifier
var last_name = "rayapalli";
var currency_$ = "INR";
console.log($);
console.log(_a);
console.log(name);
console.log(abc123);
console.log(NAME);
console.log(firstName);
console.log(name234);
console.log(last_name);
console.log(currency_$);

============
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
//unicode identifiers
var π = 3.14;
// Unicode characters are allowed in identifiers
var 变量 = "Chinese";
console.log("Unicode Identifiers:");
console.log("π:", π);
console.log("变量:", 变量);
// ============================================================
