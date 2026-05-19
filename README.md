# LearnPlaywright - JavaScript Learning Repository

A structured learning resource for mastering JavaScript fundamentals and Playwright automation testing basics.

## 📁 Project Structure

```
LearnPlaywright/
├── Chapter_01_Basics/              # Basic JavaScript setup and verification
│   ├── 01_Basics.js               # Introduction to JavaScript basics
│   ├── 02_JS.js                   # JavaScript fundamentals
│   └── 03_JS_Verify_Setup.js      # Verify your Node.js setup
│
├── Chapter_02_Javascript_concepts/ # JavaScript core concepts
│   └── 05_JS_Basics.js            # JavaScript core functionality
│
├── Chapter_03_Identifier_literals/ # Identifiers, naming conventions, and comments
│   ├── 06_Identifier_Rules.js            # Basic identifier rules
│   ├── 06_Identifier_All_Examples.js     # Complete identifier examples
│   ├── 07_Identifier_Part2.js            # Naming styles (camelCase, PascalCase, snake_case, Hungarian)
│   ├── 08_Comments.js                    # Comment types and examples
│   └── VS_Code_Keyboard_shortcuts_windows.md  # Windows VS Code keyboard shortcuts reference
│
├── Chapter_04_Javascript_Concepts/ # Variables, scope, functions, and hoisting
│   ├── 09_var_let_const.js              # Understanding var, let, and const
│   ├── 10_functions.js                  # Function declarations and expressions
│   ├── 11_var_explained.js              # Deep dive into var behavior
│   ├── 12_let_people_like.js            # Why developers prefer let
│   ├── 13_const_explained.js            # Const and immutability
│   ├── 14_var_functionscope.js          # Variable scope within functions
│   ├── 15_let_scope.js                  # Block scope with let
│   ├── 16_Hoisting.js                   # JavaScript hoisting behavior
│   └── 17_hoisting_fn.js                # Function hoisting examples
│
├── Chapter_05_Literals/                 # Literals and literal types
│   ├── 22_Literals.js                   # Introduction to literals (string, boolean, number, null, undefined)
│   ├── 23_null_undefined.js             # Difference between null and undefined
│   ├── 24_null.js                       # Examples of null and undefined in practice
│   ├── 25_Literals_All.js               # All literal types overview
│   ├── 26_Literal_Number_all.js         # All JavaScript number types (decimal, hex, octal, binary, BigInt, etc.)
│   ├── 28_Template_Literals.js          # Template literals and interpolation
│   └── 29_Backtick_single_double.js     # Difference between backticks, single quotes, and double quotes
│
└── README.md (this file)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Visual Studio Code (recommended)
- Git

### Verify Your Setup
```bash
# Navigate to the project directory
cd LearnPlaywright

# Run the setup verification script
node Chapter_01_Basics/03_JS_Verify_Setup.js
```

This will display your platform, architecture, and Node.js version.

## 📚 Chapter Guide

### Chapter 1: Basics
Learn the basics of JavaScript and verify your development environment is properly set up.

**Files:**
- `01_Basics.js` - Start here for initial JavaScript concepts
- `02_JS.js` - JavaScript fundamentals
- `03_JS_Verify_Setup.js` - Check your Node.js configuration

### Chapter 2: JavaScript Concepts
Dive deeper into JavaScript core concepts and best practices.

**Files:**
- `05_JS_Basics.js` - Core functionality and concepts

### Chapter 3: Identifiers & Literals
Master identifier naming conventions, rules, and comments.

**Files:**
- `06_Identifier_Rules.js` - Essential identifier rules (starts with 3 lines of basic examples)
- `06_Identifier_All_Examples.js` - Comprehensive valid and invalid identifier examples
- `07_Identifier_Part2.js` - Naming conventions:
  - **camelCase** - Variables and functions (e.g., `userName`)
  - **PascalCase** - Classes and constructors (e.g., `StudentName`)
  - **snake_case** - Less common in JS but still valid (e.g., `user_name`)
  - **UPPER_SNAKE_CASE** - Constants (e.g., `MAX_LOGIN_ATTEMPTS`)
  - **Hungarian notation** - Type prefix approach (e.g., `strUserName`, `intCount`)
- `08_Comments.js` - Comment types and best practices:
  - Single-line comments (`//`)
  - Multi-line comments (`/* */`)
  - Inline comments
  - JSDoc documentation
- `VS_Code_Keyboard_shortcuts_windows.md` - Quick reference for VS Code shortcuts on Windows

### Chapter 4: Variables, Scope, Functions & Hoisting
Understand variable declarations, scoping rules, function behavior, and JavaScript hoisting.

**Files:**
- `09_var_let_const.js` - Comparison of var, let, and const declarations
- `10_functions.js` - Function declarations, expressions, and arrow functions
- `11_var_explained.js` - Detailed behavior of var and function scope
- `12_let_people_like.js` - Why let is preferred over var
- `13_const_explained.js` - Const declaration and immutability concepts
- `14_var_functionscope.js` - Variable scope within functions
- `15_let_scope.js` - Block scope with let statements
- `16_Hoisting.js` - Hoisting behavior with variables
- `17_hoisting_fn.js` - Function hoisting examples

### Chapter 5: Literals
Master JavaScript literals including strings, numbers, null, undefined, and template literals.

**Files:**
- `22_Literals.js` - Introduction to all literal types (string, boolean, number, null, undefined)
- `23_null_undefined.js` - Clear explanation and difference between null and undefined with practical examples
- `24_null.js` - In-depth examples of null and undefined behavior, function returns, object properties
- `25_Literals_All.js` - Overview of all literal types with hexadecimal and octal examples
- `26_Literal_Number_all.js` - Comprehensive guide to all JavaScript number types:
  - Decimal integers
  - Floating-point numbers
  - Scientific notation (e.g., `1e6`, `2.5e-4`)
  - Hexadecimal literals (`0x1A`)
  - Octal literals (`0o755`)
  - Binary literals (`0b1010`)
  - Numeric separators for readability (`8_200_000_000`)
  - Special values (`Infinity`, `-Infinity`, `NaN`)
  - BigInt literals (`9007199254740993n`)
- `28_Template_Literals.js` - Template literals with variable interpolation
- `29_Backtick_single_double.js` - Difference between backticks (`` ` ``), single quotes (`'`), and double quotes (`"`)

## 🔧 How to Run Examples

Each file can be executed directly using Node.js:

```bash
# Run a specific example
node Chapter_01_Basics/01_Basics.js
node Chapter_02_Javascript_concepts/05_JS_Basics.js
node Chapter_03_Identifier_literals/08_Comments.js
```

## 📝 Identifier Rules at a Glance

✅ **Valid identifiers:**
- Must start with a letter, underscore `_`, or dollar sign `$`
- Can contain letters, digits, underscores, and dollar signs
- Are case-sensitive (`city` and `City` are different)
- Can use Unicode characters

❌ **Invalid identifiers:**
- Starting with a digit (e.g., `123name`)
- Containing spaces or hyphens (e.g., `full name`, `user-name`)
- Using reserved keywords (e.g., `class`, `return`, `if`)

## ⌨️ VS Code Shortcuts (Windows)

See [VS_Code_Keyboard_shortcuts_windows.md](Chapter_03_Identifier_literals/VS_Code_Keyboard_shortcuts_windows.md) for:
- Basic editing shortcuts
- Navigation tips
- File management
- Debugging commands
- Search and replace
- And more!

## 🎯 Learning Path

1. **Start:** Chapter_01_Basics - Verify your setup and learn JavaScript fundamentals
2. **Foundation:** Chapter_02_Javascript_concepts - Core JavaScript concepts
3. **Best Practices:** Chapter_03_Identifier_literals - Master naming conventions and code comments
4. **Advanced Fundamentals:** Chapter_04_Javascript_Concepts - Variables, scope, functions, and hoisting
5. **Literals & Types:** Chapter_05_Literals - Master all JavaScript literal types, number types, and string variations

## 💡 Tips

- Run each file individually to see the output in your terminal
- Modify examples to experiment and learn
- Use the keyboard shortcuts reference while coding to improve efficiency
- Pay special attention to identifier naming conventions—they make code more readable

## 📖 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Node.js Official Documentation](https://nodejs.org/docs/)
- [VS Code Official Documentation](https://code.visualstudio.com/docs/)
- [Playwright Documentation](https://playwright.dev/)

## 📄 License

This is a learning repository. Feel free to use, modify, and share.

---

**Happy Learning!** 🎓

Last updated: May 19, 2026
