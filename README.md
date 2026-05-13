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
│   └── 08_comments.js                          # Comments in JavaScript
│
├── chapter_03_Identifier_Literals/             # Chapter 3: Reference Materials
│   ├── VS_Code_keyboard_shortcut_mac.md        # VS Code Shortcuts for Mac
│   └── VS_Code_keyboard_shortcut_windows.md    # VS Code Shortcuts for Windows
│
├── all_examples_in_one.js                      # All JavaScript Examples in Single File
├── javascript_comprehensive.js                 # Comprehensive JavaScript Reference
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

---

## Comprehensive Examples

### `all_examples_in_one.js`

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

### `javascript_comprehensive.js`

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
node all_examples_in_one.js

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
6. **All Together:** `all_examples_in_one.js`
7. **Reference:** `javascript_comprehensive.js`

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
