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
│   ├── 18_Let_Hoisting.js
│   ├── 19_Let_Hiositing_Block copy.js
│   ├── 20_Let_Const_TDZ.js
│   └── 21_Jr_QA.js
│
├── chapter_05_Literals/                        # Chapter 5: Literals (Number, String, null, undefined)
│   ├── 22_literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── ex26_Literal_Number_all.js              # All Number types supported in JavaScript
│   ├── ex29_Backtick_single_double.js          # Difference between backtick, single & double quotes
│   └── Literal_All.js
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
│   └── 44_Null_operator.js
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
│   └── 57_IQ_oddnum check.js                   # IQ: Odd number check
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
| `18_Let_Hoisting.js` | Let Hoisting | How `let` variables are hoisted but not initialized |
| `19_Let_Hiositing_Block copy.js` | Block Scope Hoisting | Hoisting behavior inside block scopes |
| `20_Let_Const_TDZ.js` | TDZ (Temporal Dead Zone) | Understanding the dead zone for `let` and `const` |
| `21_Jr_QA.js` | Junior QA Concepts | Common interview questions and concepts for QA |

**Key Concepts:**
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
| `ex26_Literal_Number_all.js` | Number Literals | All number types: decimal, hex, binary, octal, BigInt, scientific notation |
| `ex29_Backtick_single_double.js` | String Quotes | Difference between backtick, single quote, and double quote |
| `Literal_All.js` | All Literals | Comprehensive overview of all literals |

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

**Key Concepts:**
- `if`, `else if`, `else` for conditional execution
- Nested conditionals for complex logic
- `switch` statement for multi-case branching
- Real-world examples: authentication, API handling
- Common IQ problems: even/odd, leap year, HTTP codes
- Best practices for readable control flow

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
6. **Hoisting & TDZ:** `chapter_04_JavaScript_Basics/18_Let_Hoisting.js`
7. **Literals:** `chapter_05_Literals/22_literal.js`
8. **Number Types:** `chapter_05_Literals/ex26_Literal_Number_all.js`
9. **String Quotes:** `chapter_05_Literals/ex29_Backtick_single_double.js`
10. **Operators:** `chapter_06_Operators/31_Arithmatic_Operator.js`
11. **Confusing Comparisons:** `chapter_06_Operators/38_Confusing_Comparsion.js`
12. **If/Else Basics:** `chapter_07_Statements/48_If_Else.js`
13. **Switch Case:** `chapter_07_Statements/55_Switch_Case.js`
14. **Real-World Conditionals:** `chapter_07_Statements/50_Real_IF_Else.js`
15. **IQ Problems:** `chapter_07_Statements/52_IQ-Even_Odd_Check.js`
16. **All Together:** `chapter_02_JavaScript_Concepts/all_examples_in_one.js`
17. **Reference:** `chapter_02_JavaScript_Concepts/javascript_comprehensive.js`

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
