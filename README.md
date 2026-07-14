# Learn Playwright - Batch 2x

A comprehensive learning repository for JavaScript fundamentals and Playwright automation testing.

---

## Table of Contents

- [About](#about)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Chapters](#chapters)
  - [Chapter 1: Basics](#chapter-1-basics)
  - [Chapter 2: JavaScript Concepts](#chapter-2-javascript-concepts)
  - [Chapter 3: Identifiers & Literals](#chapter-3-identifiers--literals)
  - [Chapter 4: JavaScript Basics (Hoisting, TDZ)](#chapter-4-javascript-basics-hoisting-tdz)
  - [Chapter 5: Literals](#chapter-5-literals)
  - [Chapter 6: Operators](#chapter-6-operators)
  - [Chapter 7: Statements (If/Else, Switch)](#chapter-7-statements-ifelse-switch)
  - [Chapter 10: Loops](#chapter-10-loops)
  - [Chapter 11: Arrays](#chapter-11-arrays)
  - [Chapter 12: Functions](#chapter-12-functions)
- [Comprehensive Examples](#comprehensive-examples)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [How to Run](#how-to-run)
- [Contributing](#contributing)

---

## About

This repository is designed to help beginners learn JavaScript from scratch and eventually transition into Playwright automation testing. It contains practical examples, exercises, and reference materials organized into chapters.

**Target Audience:** Beginners in JavaScript and Test Automation  
**Prerequisites:** Basic computer knowledge and enthusiasm to learn!

---

## Repository Structure

```
LearnPlaywrightbatch2x/
│
├── chapter_01_Basics/                          # Chapter 1: JavaScript Basics
│   ├── 01_Basics.js                            # Hello World & Console Output
│   └── Verify setup.js                         # Environment Verification
│
├── chapter_02_JavaScript_Concepts/             # Chapter 2: Core JavaScript
│   ├── 05_JS_Basics.js                         # Variable Declarations (var, let, const)
│   ├── 06_identifiers_Rules.js                 # Identifier Naming Rules
│   ├── 07_identifiers_part2.js                 # Naming Conventions (camelCase, PascalCase, etc.)
│   ├── 08_comments.js                          # Comments in JavaScript
│   ├── all_examples_in_one.js                  # All JavaScript Examples in Single File
│   └── javascript_comprehensive.js             # Comprehensive JavaScript Reference
│
├── chapter_03_Identifier_Literals/             # Chapter 3: Reference Materials
│   ├── VS_Code_keyboard_shortcut_mac.md        # VS Code Shortcuts for Mac
│   └── VS_Code_keyboard_shortcut_windows.md    # VS Code Shortcuts for Windows
│
├── chapter_04_JavaScript_Basics/               # Chapter 4: JavaScript Basics (Let, Const, Hoisting, TDZ)
│   ├── 09_Var-Let-Const.js                     # var, let, const introduction
│   ├── 10_Functions.js                         # Function definition and calling
│   ├── 11_var_Explained.js                     # var function-scoped behavior
│   ├── 12_Let_People_Love.js                   # let block-scoped behavior
│   ├── 13_Const_Explained.js                   # const block-scoped behavior
│   ├── 14_Var_function_Scoped                  # var function scope deep dive
│   ├── 15_Let_Block_Scoped                     # let block scope deep dive
│   ├── 16_Hoisting.js                          # var hoisting explained
│   ├── 17_Hoisting_Function.js                 # Function hoisting behavior
│   ├── 18_Let_Hoisting.js
│   ├── 19_Let_Hiositing_Block copy.js
│   ├── 20_Let_Const_TDZ.js
│   └── 21_Jr_QA.js
│
├── chapter_05_Literals/                        # Chapter 5: Literals (Number, String, null, undefined)
│   ├── 22_literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js                       # Comprehensive overview of all literals
│   ├── 26_Literal_Number_all.js                # All Number types supported in JavaScript
│   ├── 27_String_Literal.js                    # Single and double quote strings
│   ├── 28_Template_Literal.js                  # Backtick / template literals with interpolation
│   └── 29_Backtick_single_double.js            # Difference between backtick, single & double quotes
│
├── chapter_06_Operators/                       # Chapter 6: Operators (Arithmetic, Comparison, Logical, etc.)
│   ├── 30_Assignment_operator.js
│   ├── 31_Arithmatic_Operator.js
│   ├── 32_Modulos_Operator.js
│   ├── 33_exponential_Operator.js
│   ├── 34_Compound_operator.js
│   ├── 35_Comparison_Operator.js
│   ├── 36_comaprison_Loose_Strict.js
│   ├── 37_Loose_Vs_Strict.js
│   ├── 38_Confusing_Comparsion.js              # Confusing == vs === comparison cases
│   ├── 39_Logical_Operator.js
│   ├── 40_String_Concatination.js
│   ├── 41_Ternary_operator.j
│   ├── 42_Type_operator.js
│   ├── 43_Increment_Decrement_operator.js
│   ├── 44_Null_operator.js
│   ├── 45_PostIncrement.js                     # Post-increment operator behavior
│   ├── 46_IQ_postincrement_op.js               # IQ: Post-increment problems
│   └── 47_advance_incre_decr_op.js             # Advanced increment/decrement operators
│
├── chapter_07_Statements/                      # Chapter 7: Control Flow (If/Else, Switch Case)
│   ├── 48_If_Else.js                           # Basic If/Else statement
│   ├── 49_If_Elseif_els.js                     # If/Else If/Else ladder
│   ├── 50_Real_IF_Else.js                      # Real-world nested If/Else (Role-based access)
│   ├── 51_API_If_else.js                       # API response handling with If/Else
│   ├── 52_IQ-Even_Odd_Check.js                 # IQ: Even or Odd number check
│   ├── 53_IQ-ELeapYearCheck.js                 # IQ: Leap year checker
│   ├── 54-if-elseif.js                         # If/Else If practice examples
│   ├── 55_Switch_Case.js                       # Switch Case statement
│   ├── 56_IQ_HTTP Status Code Categorizer.js   # IQ: HTTP Status Code categorizer
│   ├── 57_IQ_oddnum check.js                   # IQ: Odd number check
│   ├── 58_IQ_print1lak_num.js                  # IQ: Print 1 lakh numbers
│   └── 77_Do_while.js                          # Do While loop example
│
├── chapter_10_Loops/                           # Chapter 10: Loops (For, While, Do While)
│   ├── 71_for_loop.js                          # For loop basics
│   ├── 72_for_loop actual.js                   # For loop practical example
│   ├── 73_IQ.js                                # IQ: Loop problems
│   ├── 74_IQ-2.js                              # IQ: More loop problems
│   ├── 75_For_Each_Of_In.js                    # ForEach, For Of, For In loops
│   ├── 76_While.js                             # While loop example
│   ├── 77_Do_While.js                          # Do While loop example
│   ├── 78_D0_While_Ex2.js                      # Do While practical retry example
│   ├── 79_IQ.js                                # IQ: While loop countdown
│   ├── 80_IQ.js                                # IQ: Do While edge case
│   ├── 81_IQ.js                                # IQ: Continue in for loop
│   └── 82_IQ.js                                # IQ: Do While number print
│
├── chapter_11_Arrays/                            # Chapter 11: Arrays
│   ├── 83_Arrays.js                            # Array basics and mixed types
│   ├── 84_Array.js                             # Array creation methods (literal, constructor, of, from)
│   ├── 85_Access_Array.js                      # Accessing and modifying arrays
│   ├── 86_Array_Adding_Removing.js             # push, pop, shift, unshift
│   ├── 87_Array_adding_Remove2.js              # splice for add, remove, replace
│   ├── 88_Real_Example.js                      # Real-world browser list example
│   ├── 89_Searching.js                         # indexOf, lastIndexOf, includes, find
│   ├── 90_Iterate.js                           # Iterate arrays (for, for-of, forEach, for-in)
│   ├── 91_Transform_Array.js                   # map, filter, reduce, flat
│   ├── 92_Sorting_arrays.js                    # sort() and custom comparator sorting
│   ├── 93_Slicing_array.js                     # slice() for extracting array sections
│   ├── 94_concat_Array.js                      # concat() and spread operator for combining arrays
│   └── 95_Array_checking.js                    # Array.isArray, every, some
│
├── chapter_12_Functions/                         # Chapter 12: Functions
│   ├── 96_Function_types.js                    # Function vs Method and 4 function types
│   ├── 97_Type1.Fn_BasicFunction.js            # Type 1: No param, no return
│   ├── 98_Type2_With Param_No Return.js        # Type 2: With param, no return
│   ├── 99_Type3_withoutParam_with Return.js    # Type 3: No param, with return
│   ├── 100_Type4_withParam_with Return.js      # Type 4: With param, with return
│   ├── 101_Template_Literal.js                 # Template literals inside functions
│   ├── 102_Function_expression.js              # Function expressions stored in variables
│   └── 103_Arrow_Function.js                   # Arrow functions (ES6)
│
└── javascript_reference.md                     # JavaScript Reference Documentation
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/) or any code editor
- Git installed (optional, for cloning)

### Clone the Repository

```bash
git clone https://github.com/Bhaskar-405/LearnPlaywrightbatch2x.git
cd LearnPlaywrightbatch2x
```

---

## Chapters

### Chapter 1: Basics

Introduction to JavaScript programming fundamentals.

| File | Topic | Description |
|------|-------|-------------|
| `01_Basics.js` | Hello World | Basic console output and welcome messages |
| `Verify setup.js` | Setup Verification | Verify your environment is ready |

**Key Concepts:**
- `console.log()` for output
- Basic syntax structure

### Chapter 2: JavaScript Concepts

Core JavaScript concepts every developer must know.

| File | Topic | Description |
|------|-------|-------------|
| `05_JS_Basics.js` | Variable Declarations | Understanding `var`, `let`, and `const` |
| `06_identifiers_Rules.js` | Identifier Rules | Valid and invalid variable names |
| `07_identifiers_part2.js` | Naming Conventions | camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Hungarian notation |
| `08_comments.js` | Comments | Single-line and multi-line comments |

**Key Concepts:**
- Variable scopes (function vs block)
- Hoisting behavior
- Identifier rules and best practices
- Code documentation with comments

### Chapter 3: Identifiers & Literals

Reference materials and productivity tools.

| File | Topic | Description |
|------|-------|-------------|
| `VS_Code_keyboard_shortcut_mac.md` | Mac Shortcuts | Complete VS Code keyboard shortcuts for macOS |
| `VS_Code_keyboard_shortcut_windows.md` | Windows Shortcuts | Complete VS Code keyboard shortcuts for Windows |

**Key Concepts:**
- Keyboard shortcuts for faster coding
- Editor productivity tips
- Cross-platform shortcut differences

### Chapter 4: JavaScript Basics (Hoisting, TDZ)

Understanding how JavaScript handles variable declarations, hoisting, and the Temporal Dead Zone (TDZ).

| File | Topic | Description |
|------|-------|-------------|
| `09_Var-Let-Const.js` | var, let, const | Introduction to variable declarations with examples |
| `10_Functions.js` | Functions | Function definition and calling basics |
| `11_var_Explained.js` | var Explained | var function-scoped behavior and re-declaration |
| `12_Let_People_Love.js` | let Explained | let block-scoped behavior and loyalty |
| `13_Const_Explained.js` | const Explained | const block-scoped behavior and immutability |
| `14_Var_function_Scoped` | var Function Scope | Deep dive into var function scope |
| `15_Let_Block_Scoped` | let Block Scope | Deep dive into let block scope |
| `16_Hoisting.js` | Hoisting | var hoisting explained step by step |
| `17_Hoisting_Function.js` | Function Hoisting | How functions are hoisted in JavaScript |
| `18_Let_Hoisting.js` | Let Hoisting | How `let` variables are hoisted but not initialized |
| `19_Let_Hiositing_Block copy.js` | Block Scope Hoisting | Hoisting behavior inside block scopes |
| `20_Let_Const_TDZ.js` | TDZ (Temporal Dead Zone) | Understanding the dead zone for `let` and `const` |
| `21_Jr_QA.js` | Junior QA Concepts | Common interview questions and concepts for QA |

**Key Concepts:**
- `var`, `let`, `const` differences
- Variable hoisting differences (`var` vs `let`/`const`)
- Temporal Dead Zone (TDZ)
- Block scope vs function scope
- Common QA interview topics

### Chapter 5: Literals

All about JavaScript literals — numbers, strings, null, and undefined.

| File | Topic | Description |
|------|-------|-------------|
| `22_literal.js` | Literals Intro | Introduction to JavaScript literals |
| `23_null_undefined.js` | null & undefined | Difference between null and undefined |
| `24_null.js` | null | Understanding the null value |
| `25_Literal_All.js` | All Literals | Comprehensive overview of all literals |
| `26_Literal_Number_all.js` | Number Literals | All number types: decimal, hex, binary, octal, BigInt, scientific notation |
| `27_String_Literal.js` | String Literals | Single and double quote string literals |
| `28_Template_Literal.js` | Template Literals | Backtick literals with variable interpolation |
| `29_Backtick_single_double.js` | String Quotes | Difference between backtick, single quote, and double quote |

**Key Concepts:**
- Integer, float, and scientific notation
- Hexadecimal (`0x`), Binary (`0b`), Octal (`0o`) literals
- BigInt for arbitrary precision integers
- String literals: `' '`, `" "`, `` ` ` `` (backticks for interpolation & multiline)
- `null` vs `undefined`
- Numeric separators (`1_000_000`)

### Chapter 6: Operators

All JavaScript operators — arithmetic, comparison, logical, assignment, and more.

| File | Topic | Description |
|------|-------|-------------|
| `30_Assignment_operator.js` | Assignment | `=`, assigning values to variables |
| `31_Arithmatic_Operator.js` | Arithmetic | `+`, `-`, `*`, `/` basic math |
| `32_Modulos_Operator.js` | Modulo | `%` remainder operator |
| `33_exponential_Operator.js` | Exponentiation | `**` power operator |
| `34_Compound_operator.js` | Compound Assignment | `+=`, `-=`, `*=`, `/=` shorthand |
| `35_Comparison_Operator.js` | Comparison | `>`, `<`, `>=`, `<=`, `==`, `===` |
| `36_comaprison_Loose_Strict.js` | Loose vs Strict | Differences between `==` and `===` |
| `37_Loose_Vs_Strict.js` | Loose vs Strict Deep Dive | More examples on loose vs strict equality |
| `38_Confusing_Comparsion.js` | Confusing Comparisons | Tricky `==` coercion cases and why to prefer `===` |
| `39_Logical_Operator.js` | Logical | `&&`, `\|\|`, `!` boolean logic |
| `40_String_Concatination.js` | String Concatenation | Joining strings with `+` or template literals |
| `41_Ternary_operator.j` | Ternary | `condition ? value1 : value2` shorthand |
| `42_Type_operator.js` | Type Operators | `typeof`, `instanceof` |
| `43_Increment_Decrement_operator.js` | Increment/Decrement | `++`, `--` pre/post fix |
| `44_Null_operator.js` | Nullish Coalescing | `??` operator for null/undefined defaults |
| `45_PostIncrement.js` | Post-Increment | Post-increment operator behavior |
| `46_IQ_postincrement_op.js` | IQ: Post-Increment | Post-increment problem solving |
| `47_advance_incre_decr_op.js` | Advanced Increment/Decrement | Complex pre/post increment expressions |

**Key Concepts:**
- Arithmetic, assignment, and compound operators
- Loose (`==`) vs strict (`===`) equality — always prefer `===`
- Logical operators for boolean logic
- Ternary operator for concise conditionals
- Nullish coalescing (`??`) for default values
- Type coercion traps and how to avoid them

### Chapter 7: Statements (If/Else, Switch)

Control flow statements — the backbone of decision-making in JavaScript.

| File | Topic | Description |
|------|-------|-------------|
| `48_If_Else.js` | Basic If/Else | Simple conditional checks |
| `49_If_Elseif_els.js` | If/Else If/Else | Multiple condition ladder |
| `50_Real_IF_Else.js` | Nested If/Else | Real-world role-based access control example |
| `51_API_If_else.js` | API Handling | Processing API responses with conditionals |
| `52_IQ-Even_Odd_Check.js` | IQ: Even/Odd | Check if a number is even or odd |
| `53_IQ-ELeapYearCheck.js` | IQ: Leap Year | Determine if a year is a leap year |
| `54-if-elseif.js` | Practice | More If/Else If practice examples |
| `55_Switch_Case.js` | Switch Case | Multi-way branching with switch |
| `56_IQ_HTTP Status Code Categorizer.js` | IQ: HTTP Codes | Categorize HTTP status codes |
| `57_IQ_oddnum check.js` | IQ: Odd Check | Another odd number check variation |
| `58_IQ_print1lak_num.js` | IQ: Print Numbers | Print 1 lakh numbers using loops |
| `77_Do_while.js` | Do While Loop | Do While loop execution example |

**Key Concepts:**
- `if`, `else if`, `else` for conditional execution
- Nested conditionals for complex logic
- `switch` statement for multi-case branching
- Real-world examples: authentication, API handling
- Common IQ problems: even/odd, leap year, HTTP codes
- Best practices for readable control flow

### Chapter 10: Loops

Iteration and repetition — executing code multiple times efficiently.

| File | Topic | Description |
|------|-------|-------------|
| `71_for_loop.js` | For Loop | Basic for loop syntax and usage |
| `72_for_loop actual.js` | For Loop Practical | Real-world for loop example |
| `73_IQ.js` | IQ: Loop Problems | Loop-based problem solving |
| `74_IQ-2.js` | IQ: More Loop Problems | Additional loop exercises |
| `75_For_Each_Of_In.js` | ForEach, For Of, For In | Different loop types for arrays and objects |
| `76_While.js` | While Loop | While loop syntax and usage |
| `77_Do_While.js` | Do While Loop | Do While loop execution example |
| `78_D0_While_Ex2.js` | Do While Retry | Real-world retry example with do while |
| `79_IQ.js` | IQ: Countdown | While loop countdown problem |
| `80_IQ.js` | IQ: Do While Edge Case | Do while edge case problem |
| `81_IQ.js` | IQ: Continue | Using continue in for loops |
| `82_IQ.js` | IQ: Number Print | Do while number printing |

**Key Concepts:**
- `for` loop: initialization, condition, increment
- `while` loop: condition-based iteration
- `do while` loop: execute at least once
- `forEach`, `for of`, `for in`: modern iteration methods
- Loop control: `break` and `continue`
- Nested loops for multi-dimensional operations
- Common IQ problems using loops

### Chapter 11: Arrays

Working with collections — storing, accessing, and manipulating multiple values efficiently.

| File | Topic | Description |
|------|-------|-------------|
| `83_Arrays.js` | Array Basics | Array creation, indexing, and mixed data types |
| `84_Array.js` | Array Creation | Literal, constructor, `Array.of`, `Array.from` |
| `85_Access_Array.js` | Access & Modify | Accessing elements, negative indexing with `at()`, modifying arrays |
| `86_Array_Adding_Removing.js` | Add & Remove | `push`, `pop`, `shift`, `unshift` methods |
| `87_Array_adding_Remove2.js` | Splice | `splice` for adding, removing, and replacing elements |
| `88_Real_Example.js` | Real-World Example | Browser list management with iteration |
| `89_Searching.js` | Searching | `indexOf`, `lastIndexOf`, `includes`, `find` |
| `90_Iterate.js` | Iteration | `for`, `for...of`, `forEach`, `for...in` |
| `91_Transform_Array.js` | Transform | `map`, `filter`, `reduce`, `flat` |
| `92_Sorting_arrays.js` | Sorting | `sort()` with default and custom comparators |
| `93_Slicing_array.js` | Slicing | `slice()` for extracting sub-arrays |
| `94_concat_Array.js` | Concatenation | `concat()`, spread operator, and `join()` |
| `95_Array_checking.js` | Checking | `Array.isArray`, `every`, `some` |

**Key Concepts:**
- Array creation methods
- Index-based access and modification
- Adding and removing elements
- Searching and finding elements
- Iteration techniques
- Functional transformation methods
- Sorting and slicing arrays
- Combining arrays and checking conditions

### Chapter 12: Functions

Understanding reusable blocks of code — function declarations, expressions, and modern arrow functions.

| File | Topic | Description |
|------|-------|-------------|
| `96_Function_types.js` | Function Types | Function vs Method, overview of 4 function types |
| `97_Type1.Fn_BasicFunction.js` | Type 1 | No parameters, no return value |
| `98_Type2_With Param_No Return.js` | Type 2 | With parameters, no return value |
| `99_Type3_withoutParam_with Return.js` | Type 3 | No parameters, with return value |
| `100_Type4_withParam_with Return.js` | Type 4 | With parameters and return value — most used in automation |
| `101_Template_Literal.js` | Template Literals | Using backticks and `${}` inside functions |
| `102_Function_expression.js` | Function Expressions | Storing functions in variables (function expressions) |
| `103_Arrow_Function.js` | Arrow Functions | ES6 arrow functions, concise syntax, conversion rules |

**Key Concepts:**
- Function declaration vs function expression
- Parameters vs Arguments
- Return values and undefined
- Template literals with function outputs
- Arrow functions and `this` behavior
- Four types of functions based on params and return
- Practical use in test automation

---

## Comprehensive Examples

### `chapter_02_JavaScript_Concepts/all_examples_in_one.js`

A single file containing **all JavaScript concepts** with practical examples:

1. **Basics** - Console output & comments
2. **Variable Declarations** - `var`, `let`, `const` with differences
3. **Identifier Rules** - Valid/invalid naming, conventions
4. **Data Types** - Primitive and object types
5. **Operators** - Arithmetic, assignment, comparison, logical
6. **Control Flow** - `if/else`, `switch`, loops
7. **Functions** - Declaration, expression, arrow, callbacks
8. **Arrays** - Methods, iteration, destructuring
9. **Objects** - Properties, methods, getters/setters
10. **Classes** - Inheritance, static methods
11. **Exception Handling** - `try/catch/finally`
12. **Promises & Async/Await** - Asynchronous programming
13. **Destructuring** - Array and object destructuring
14. **Spread & Rest** - Modern JavaScript features
15. **Short-circuit & Optional Chaining** - `??`, `?.`
16. **Strict Mode** - Best practices
17. **Advanced Features** - `Symbol`, `BigInt`, template literals
18. **Practical Example** - Complete User Management system

### `chapter_02_JavaScript_Concepts/javascript_comprehensive.js`

Comprehensive reference covering:
- All JavaScript keywords
- ES6+ features
- Best practices and conventions

### `javascript_reference.md`

Quick reference documentation for JavaScript concepts.

---

## VS Code Shortcuts

Master your editor with our comprehensive shortcut guides:

- **Windows Users:** [VS_Code_keyboard_shortcut_windows.md](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_windows.md)
- **Mac Users:** [VS_Code_keyboard_shortcut_mac.md](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md)

**Categories Covered:**
- General & Navigation
- Editing & Multi-cursor
- Search & Replace
- Debugging
- Terminal
- Git Integration
- Extensions

---

## How to Run

### Run Individual Files

```bash
# Run any JavaScript file
node chapter_01_Basics/01_Basics.js

# Run comprehensive examples
node chapter_02_JavaScript_Concepts/all_examples_in_one.js

# Run specific concept files
node chapter_02_JavaScript_Concepts/07_identifiers_part2.js
```

### Run with VS Code

1. Open the folder in VS Code
2. Open the file you want to run
3. Use terminal: `node filename.js`

---

## Naming Conventions Guide

### Quick Reference

| Convention | Example | Usage |
|------------|---------|-------|
| **camelCase** | `firstName`, `getUser()` | Variables, functions, methods |
| **PascalCase** | `UserAccount`, `Person` | Classes, constructors, components |
| **snake_case** | `first_name`, `total_amount` | Database fields, Python-style |
| **SCREAMING_SNAKE_CASE** | `MAX_USERS`, `API_URL` | Constants |
| **kebab-case** | `main-container`, `data-id` | CSS classes, HTML attributes |
| **Hungarian** | `strName`, `nCount` | Not recommended in modern JS |

---

## Learning Path

Follow this order for best results:

1. **Start Here:** `chapter_01_Basics/01_Basics.js`
2. **Variables:** `chapter_02_JavaScript_Concepts/05_JS_Basics.js`
3. **Naming:** `chapter_02_JavaScript_Concepts/06_identifiers_Rules.js`
4. **Conventions:** `chapter_02_JavaScript_Concepts/07_identifiers_part2.js`
5. **Comments:** `chapter_02_JavaScript_Concepts/08_comments.js`
6. **var, let, const:** `chapter_04_JavaScript_Basics/09_Var-Let-Const.js`
7. **Functions:** `chapter_04_JavaScript_Basics/10_Functions.js`
8. **var Explained:** `chapter_04_JavaScript_Basics/11_var_Explained.js`
9. **let Explained:** `chapter_04_JavaScript_Basics/12_Let_People_Love.js`
10. **const Explained:** `chapter_04_JavaScript_Basics/13_Const_Explained.js`
11. **Hoisting:** `chapter_04_JavaScript_Basics/16_Hoisting.js`
12. **Function Hoisting:** `chapter_04_JavaScript_Basics/17_Hoisting_Function.js`
13. **Hoisting & TDZ:** `chapter_04_JavaScript_Basics/18_Let_Hoisting.js`
14. **Literals:** `chapter_05_Literals/22_literal.js`
15. **Number Types:** `chapter_05_Literals/26_Literal_Number_all.js`
16. **String Literals:** `chapter_05_Literals/27_String_Literal.js`
17. **Template Literals:** `chapter_05_Literals/28_Template_Literal.js`
18. **String Quotes:** `chapter_05_Literals/29_Backtick_single_double.js`
19. **Operators:** `chapter_06_Operators/31_Arithmatic_Operator.js`
20. **Confusing Comparisons:** `chapter_06_Operators/38_Confusing_Comparsion.js`
21. **Increment/Decrement:** `chapter_06_Operators/43_Increment_Decrement_operator.js`
22. **Post-Increment:** `chapter_06_Operators/45_PostIncrement.js`
23. **If/Else Basics:** `chapter_07_Statements/48_If_Else.js`
24. **Switch Case:** `chapter_07_Statements/55_Switch_Case.js`
25. **Real-World Conditionals:** `chapter_07_Statements/50_Real_IF_Else.js`
26. **IQ Problems:** `chapter_07_Statements/52_IQ-Even_Odd_Check.js`
27. **Do While Loop:** `chapter_10_Loops/77_Do_While.js`
28. **For Loop:** `chapter_10_Loops/71_for_loop.js`
29. **While Loop:** `chapter_10_Loops/76_While.js`
30. **Loop Variations:** `chapter_10_Loops/75_For_Each_Of_In.js`
31. **Loop IQ Problems:** `chapter_10_Loops/73_IQ.js`
32. **Arrays:** `chapter_11_Arrays/83_Arrays.js`
33. **Array Creation:** `chapter_11_Arrays/84_Array.js`
34. **Array Methods:** `chapter_11_Arrays/86_Array_Adding_Removing.js`
35. **Searching Arrays:** `chapter_11_Arrays/89_Searching.js`
36. **Iterate Arrays:** `chapter_11_Arrays/90_Iterate.js`
37. **Transform Arrays:** `chapter_11_Arrays/91_Transform_Array.js`
38. **Sorting Arrays:** `chapter_11_Arrays/92_Sorting_arrays.js`
39. **Slicing Arrays:** `chapter_11_Arrays/93_Slicing_array.js`
40. **Array Concatenation:** `chapter_11_Arrays/94_concat_Array.js`
41. **Array Checking:** `chapter_11_Arrays/95_Array_checking.js`
42. **Function Types:** `chapter_12_Functions/96_Function_types.js`
43. **Basic Function:** `chapter_12_Functions/97_Type1.Fn_BasicFunction.js`
44. **Function with Params:** `chapter_12_Functions/98_Type2_With Param_No Return.js`
45. **Function with Return:** `chapter_12_Functions/99_Type3_withoutParam_with Return.js`
46. **Params & Return:** `chapter_12_Functions/100_Type4_withParam_with Return.js`
47. **Template Literals in Functions:** `chapter_12_Functions/101_Template_Literal.js`
48. **Function Expressions:** `chapter_12_Functions/102_Function_expression.js`
49. **Arrow Functions:** `chapter_12_Functions/103_Arrow_Function.js`
50. **All Together:** `chapter_02_JavaScript_Concepts/all_examples_in_one.js`
51. **Reference:** `chapter_02_JavaScript_Concepts/javascript_comprehensive.js`

---

## Contributing

This is a learning repository. Feel free to:
- Add more examples
- Improve documentation
- Fix errors
- Share with fellow learners

---

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Playwright Documentation](https://playwright.dev/)

---

## License

This project is for educational purposes.

---

**Happy Learning!** 

*Batch 2x - Playwright Automation Journey*
