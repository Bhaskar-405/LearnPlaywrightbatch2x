# JavaScript Keywords & Identifier Rules

## Reserved Keywords

| Category | Keywords |
|----------|----------|
| Control Flow | `break`, `case`, `catch`, `continue`, `debugger`, `default`, `do`, `else`, `finally`, `for`, `if`, `return`, `switch`, `throw`, `try`, `while`, `with` |
| Declarations | `class`, `const`, `function`, `let`, `var` |
| Objects/Classes | `class`, `extends`, `new`, `super`, `this` |
| Modules | `export`, `import` |
| Operators | `delete`, `in`, `instanceof`, `typeof`, `void`, `yield` |
| Strict Mode Reserved | `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` |
| Future Reserved | `enum`, `await` |
| Literals | `true`, `false`, `null` |

## Identifier Naming Rules

1. Allowed Characters
   - Letters (a-z, A-Z)
   - Digits (0-9)
   - Underscore (`_`)
   - Dollar sign (`$`)

2. Starting Character
   - Must begin with a letter, underscore, or dollar sign
   - Cannot start with a digit

3. Restrictions
   - Cannot be a reserved keyword
   - Cannot contain spaces
   - Are case-sensitive (`name` ≠ `Name`)

4. Unicode Support
   - Unicode letters allowed
   - Unicode escape sequences permitted

5. Best Practices
   - Avoid built-in object names (Array, String, Object)
   - Avoid built-in method names (toString, valueOf)
   - Use camelCase for variables/functions (myVariableName)
   - Use PascalCase for classes (MyClassName)
   - Use UPPER_CASE for constants (MAX_VALUE)

## Valid Examples
```javascript
let name;
let _private;
let $element;
let userName;
let MAX_COUNT;
let customer1;
let π;
```

## Invalid Examples
```javascript
let 1user;      // Starts with digit
let my name;    // Contains space
let class;      // Reserved keyword
let my-name;    // Contains hyphen
```
