// ==========================================
// Lab Exercise 38: Confusing Comparisons (== vs ===)
// ==========================================
// ==  (Double Equal)  -> checks value only, performs type coercion
// === (Triple Equal) -> checks value AND type, no coercion

console.log("=== 1. Basic String vs Number ===");
console.log("5 == '5':", 5 == '5');    // true  -> string '5' coerced to number 5
console.log("5 === '5':", 5 === '5');  // false -> different types

console.log("\n=== 2. Null vs Undefined ===");
console.log("null == undefined:", null == undefined);   // true  -> special case
console.log("null === undefined:", null === undefined); // false -> different types
console.log("null == 0:", null == 0);                   // false -> null only equals undefined with ==
console.log("undefined == 0:", undefined == 0);         // false

console.log("\n=== 3. Boolean Confusion ===");
console.log("true == 1:", true == 1);    // true  -> true coerced to 1
console.log("true === 1:", true === 1);  // false
console.log("false == 0:", false == 0);  // true  -> false coerced to 0
console.log("false === 0:", false === 0);  // false
console.log("true == '1':", true == '1');  // true
console.log("false == '':", false == '');  // true  -> empty string coerced to 0

console.log("\n=== 4. Empty / Zero / String Fun ===");
console.log("0 == '':", 0 == '');       // true  -> '' becomes 0
console.log("0 === '':", 0 === '');     // false
console.log("0 == '0':", 0 == '0');     // true
console.log("0 == false:", 0 == false); // true
console.log("'' == false:", '' == false); // true

console.log("\n=== 5. Array & Object == Surprises ===");
console.log("[] == false:", [] == false);    // true  -> [] coerced to 0, false to 0
console.log("[] === false:", [] === false);   // false
console.log("[1] == '1':", [1] == '1');       // true  -> [1] becomes "1"
console.log("[1] === '1':", [1] === '1');     // false
console.log("{} == '[object Object]':", {} == '[object Object]'); // true (sometimes tricky)

console.log("\n=== 6. NaN is Never Equal to Anything (Even Itself) ===");
console.log("NaN == NaN:", NaN == NaN);     // false
console.log("NaN === NaN:", NaN === NaN);   // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true -> correct way to check

console.log("\n=== 7. Object Reference vs Value ===");
let objA = { a: 1 };
let objB = { a: 1 };
let objC = objA;
console.log("objA == objB:", objA == objB);   // false -> different references
console.log("objA === objB:", objA === objB); // false
console.log("objA == objC:", objA == objC);   // true  -> same reference
console.log("objA === objC:", objA === objC); // true

console.log("\n=== 8. Summary / Best Practice ===");
console.log("ALWAYS use === (strict equality) to avoid unexpected coercion.");
console.log("Use == only when you intentionally want type coercion (rare).");

// Quick Interview Trick Table
console.log("\n=== 9. Interview Quick-Fire Table ===");
const tests = [
  [0 == false, "0 == false"],
  [0 === false, "0 === false"],
  [1 == '1', "1 == '1'"],
  [1 === '1', "1 === '1'"],
  [null == undefined, "null == undefined"],
  [null === undefined, "null === undefined"],
  [[] == [], "[] == []"],
  [[] === [], "[] === []"],
  ['' == false, "'' == false"],
  ['' === false, "'' === false"],
];

tests.forEach(([result, expr]) => {
  console.log(`${expr.padEnd(25)} -> ${result}`);
});
