// ==========================================
// Lab Exercise 29: Backtick vs Single vs Double Quotes
// ==========================================
// In short: Single & Double quotes are identical — use them for plain strings.
// Backticks (``) allow string interpolation & multiline strings.

let name = "Playwright";
let batch = 2;

// 1. Single Quote
let single = 'Hello, World!';
console.log("Single Quote:", single);

// 2. Double Quote (same as single, only difference is you can use apostrophes easily)
let double = "Hello, World!";
console.log("Double Quote:", double);

// 3. Backtick — supports interpolation & multiline
let backtick = `Hello, ${name} Batch-${batch}!`;          // interpolation
let multi = `Line 1
Line 2`;                                                     // multiline
console.log("Backtick:", backtick);
console.log("Multiline Backtick:", multi);

// Simple rule: Use backticks when you need to inject variables or write multi-line strings.
// Use single/double for simple, plain text strings.
