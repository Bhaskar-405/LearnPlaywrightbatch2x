// ==========================================
// Lab Exercise 26: All Number Literals in JavaScript
// ==========================================
// JavaScript has a single Number type (IEEE 754 double-precision 64-bit format),
// but numbers can be written using various literal formats.

console.log("=== 1. Integer Literals (Decimal) ===");
let decimalInt = 42;
let negativeInt = -17;
let zero = 0;
console.log("Decimal integer:", decimalInt, "Type:", typeof decimalInt);
console.log("Negative integer:", negativeInt, "Type:", typeof negativeInt);
console.log("Zero:", zero, "Type:", typeof zero);

console.log("\n=== 2. Floating-Point Literals (Decimal) ===");
let float1 = 3.14;
let float2 = 0.5;
let float3 = 2.0; // Actually stored as integer 2
let float4 = .5;  // Leading zero can be omitted (not recommended)
let float5 = 5.;  // Trailing decimal point (not recommended)
console.log("3.14:", float1, "Type:", typeof float1);
console.log("0.5:", float2, "Type:", typeof float2);
console.log("2.0:", float3, "Type:", typeof float3);
console.log(".5:", float4, "Type:", typeof float4);
console.log("5.:", float5, "Type:", typeof float5);

console.log("\n=== 3. Scientific Notation (Exponential) ===");
let sci1 = 1e5;    // 1 × 10^5 = 100000
let sci2 = 2.5e-3; // 2.5 × 10^-3 = 0.0025
let sci3 = 3.1e12; // 3.1 × 10^12
let sci4 = 1E10;   // 'E' or 'e' both work
console.log("1e5:", sci1, "Type:", typeof sci1);
console.log("2.5e-3:", sci2, "Type:", typeof sci2);
console.log("3.1e12:", sci3, "Type:", typeof sci3);
console.log("1E10:", sci4, "Type:", typeof sci4);

console.log("\n=== 4. Hexadecimal Literals (Base 16) ===");
let hex1 = 0xFF;     // 255 in decimal
let hex2 = 0xABC;    // 2748 in decimal
let hex3 = 0x1a3f;   // case insensitive
let hex4 = 0XBeef;   // Can use uppercase 0X
console.log("0xFF:", hex1, "Type:", typeof hex1);
console.log("0xABC:", hex2, "Type:", typeof hex2);
console.log("0x1a3f:", hex3, "Type:", typeof hex3);
console.log("0XBeef:", hex4, "Type:", typeof hex4);

console.log("\n=== 5. Binary Literals (Base 2) ===");
let bin1 = 0b1010;    // 10 in decimal
let bin2 = 0B1111;    // 15 in decimal (uppercase 0B)
let bin3 = 0b00001010;
console.log("0b1010:", bin1, "Type:", typeof bin1);
console.log("0B1111:", bin2, "Type:", typeof bin2);
console.log("0b00001010:", bin3, "Type:", typeof bin3);

console.log("\n=== 6. Octal Literals (Base 8) ===");
let oct1 = 0o755;     // 493 in decimal
let oct2 = 0O17;      // 15 in decimal (uppercase 0O)
let oct3 = 0o10;      // 8 in decimal
console.log("0o755:", oct1, "Type:", typeof oct1);
console.log("0O17:", oct2, "Type:", typeof oct2);
console.log("0o10:", oct3, "Type:", typeof oct3);

console.log("\n=== 7. BigInt Literals (Arbitrary Precision Integers) ===");
let big1 = 123456789012345678901234567890n;
let big2 = BigInt(9007199254740991); // Max safe integer + 1
let big3 = 0x1fffffffffffffn;         // Hex BigInt
let big4 = 0o377777777777777777n;     // Octal BigInt
let big5 = 0b11111111111111111111111111111111111111111111111111111n; // Binary BigInt
console.log("BigInt literal:", big1, "Type:", typeof big1);
console.log("BigInt(9007199254740991):", big2, "Type:", typeof big2);
console.log("Hex BigInt:", big3, "Type:", typeof big3);
console.log("Octal BigInt:", big4, "Type:", typeof big4);
console.log("Binary BigInt:", big5, "Type:", typeof big5);

console.log("\n=== 8. Special Numeric Values ===");
let infinityPos = Infinity;
let infinityNeg = -Infinity;
let notANumber = NaN;
console.log("Infinity:", infinityPos, "Type:", typeof infinityPos);
console.log("-Infinity:", infinityNeg, "Type:", typeof infinityNeg);
console.log("NaN:", notANumber, "Type:", typeof notANumber);

console.log("\n=== 9. Number Object (Not Recommended for Primitives) ===");
let numObj = new Number(42);
console.log("Number object:", numObj, "Type:", typeof numObj);
console.log("Primitive value:", numObj.valueOf(), "Type:", typeof numObj.valueOf());

console.log("\n=== 10. Important Number Constants ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);

console.log("\n=== 11. Separators (Numeric Literal Separators since ES2021) ===");
let million = 1_000_000;
let binaryWithSep = 0b1010_1111_0011;
let hexWithSep = 0xFF_FF;
let bigIntWithSep = 1_000_000_000_000n;
console.log("1_000_000:", million, "Type:", typeof million);
console.log("0b1010_1111_0011:", binaryWithSep, "Type:", typeof binaryWithSep);
console.log("0xFF_FF:", hexWithSep, "Type:", typeof hexWithSep);
console.log("1_000_000_000_000n:", bigIntWithSep, "Type:", typeof bigIntWithSep);

console.log("\n=== 12. Type Checking Examples ===");
console.log("typeof 42:", typeof 42);
console.log("typeof 3.14:", typeof 3.14);
console.log("typeof 0b1010:", typeof 0b1010);
console.log("typeof 0xFF:", typeof 0xFF);
console.log("typeof 0o10:", typeof 0o10);
console.log("typeof 123n:", typeof 123n);
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof NaN:", typeof NaN);
console.log("isNaN('hello'):", isNaN('hello'));
console.log("isFinite(42):", isFinite(42));
console.log("isFinite(Infinity):", isFinite(Infinity));
console.log("Number.isInteger(42):", Number.isInteger(42));
console.log("Number.isInteger(3.14):", Number.isInteger(3.14));
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));
