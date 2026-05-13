var name = "Bhaskar";

// ============================================================
// JAVASCRIPT NAMING CONVENTIONS (Cases)
// ============================================================
// Different casing styles are used for different purposes in
// JavaScript to make code readable and consistent.
// ============================================================

console.log("=== JAVASCRIPT NAMING CONVENTIONS ===\n");

// ------------------------------------------------------------
// 1. camelCase
// ------------------------------------------------------------
// First word lowercase, each subsequent word capitalized
// Used for: variables, functions, methods
// Example: firstName, getUserById
// ------------------------------------------------------------

var firstName = "Bhaskar";
var lastName = "Rayapalli";
var fullName = firstName + " " + lastName;
var getUserName = function() { return fullName; };
var calculateTotalAmount = function(price, tax) { return price + tax; };
var isUserLoggedIn = true;
var hasPermission = false;

console.log("1. camelCase:");
console.log("   firstName:", firstName);
console.log("   lastName:", lastName);
console.log("   fullName:", fullName);
console.log("   getUserName():", getUserName());
console.log("   calculateTotalAmount(100, 10):", calculateTotalAmount(100, 10));
console.log("   isUserLoggedIn:", isUserLoggedIn);
console.log("");

// ------------------------------------------------------------
// 2. PascalCase (UpperCamelCase)
// ------------------------------------------------------------
// Every word starts with uppercase letter
// Used for: class names, constructor functions, React components
// Example: Person, UserAccount, MyComponent
// ------------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, I am ${this.name}`;
    }
}

class UserAccount {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

function Employee(name, id) {
    this.name = name;
    this.id = id;
}

var person = new Person("Bhaskar");
var userAccount = new UserAccount("bhaskar123", "bhaskar@example.com");
var employee = new Employee("John", 101);

console.log("2. PascalCase:");
console.log("   Person:", person.greet());
console.log("   UserAccount:", userAccount);
console.log("   Employee:", employee);
console.log("");

// ------------------------------------------------------------
// 3. snake_case
// ------------------------------------------------------------
// All lowercase with underscores between words
// Used for: variables in some projects (not typical in JS)
// Common in: Python, Ruby, database fields, constants
// Example: first_name, total_amount
// ------------------------------------------------------------

var first_name = "Bhaskar";
var last_name = "Rayapalli";
var user_name = "bhaskar_rayapalli";
var total_amount = 1500;
var is_active = true;
var max_login_attempts = 3;
var db_connection_string = "mongodb://localhost:27017";

function get_user_details() {
    return { first_name: first_name, last_name: last_name };
}

console.log("3. snake_case:");
console.log("   first_name:", first_name);
console.log("   last_name:", last_name);
console.log("   user_name:", user_name);
console.log("   total_amount:", total_amount);
console.log("   is_active:", is_active);
console.log("   max_login_attempts:", max_login_attempts);
console.log("   get_user_details():", get_user_details());
console.log("");

// ------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
// ------------------------------------------------------------
// All uppercase with underscores between words
// Used for: constants, environment variables
// Example: MAX_USERS, API_BASE_URL
// ------------------------------------------------------------

var PI = 3.14159;
var MAX_USERS = 100;
var API_BASE_URL = "https://api.example.com";
var DEFAULT_TIMEOUT = 5000;
var DATABASE_NAME = "myapp_db";
var ENVIRONMENT = "production";
var ACCESS_TOKEN_SECRET = "super_secret_key_here";
var HTTP_STATUS_OK = 200;
var HTTP_STATUS_NOT_FOUND = 404;
var MAX_RETRY_COUNT = 5;

console.log("4. SCREAMING_SNAKE_CASE:");
console.log("   PI:", PI);
console.log("   MAX_USERS:", MAX_USERS);
console.log("   API_BASE_URL:", API_BASE_URL);
console.log("   DEFAULT_TIMEOUT:", DEFAULT_TIMEOUT);
console.log("   DATABASE_NAME:", DATABASE_NAME);
console.log("   ENVIRONMENT:", ENVIRONMENT);
console.log("   HTTP_STATUS_OK:", HTTP_STATUS_OK);
console.log("   MAX_RETRY_COUNT:", MAX_RETRY_COUNT);
console.log("");

// ------------------------------------------------------------
// 5. kebab-case (NOT VALID in JavaScript identifiers)
// ------------------------------------------------------------
// All lowercase with hyphens between words
// Used for: CSS classes, HTML attributes, URLs, file names
// NOT allowed in JS variables because hyphen is minus operator
// Example: first-name, btn-primary, main-container
// ------------------------------------------------------------

// var first-name = "Bhaskar"; // ERROR! Hyphens are not allowed in identifiers
// var my-variable = 10;       // ERROR! JavaScript sees this as: my - variable = 10

console.log("5. kebab-case:");
console.log("   Note: kebab-case is NOT valid for JS variable/function names!");
console.log("   It is used for:");
console.log("   - CSS classes: .main-container, .btn-primary");
console.log("   - HTML attributes: data-user-id, aria-label");
console.log("   - File names: my-script.js, user-profile.html");
console.log("   - URLs: /user-profile/settings");
console.log("");

// Examples of kebab-case in strings (for HTML/CSS usage)
var cssClass = "main-container";
var htmlAttribute = "data-user-id";
var fileName = "my-script.js";
var urlPath = "/user-profile/settings";

console.log("   cssClass:", cssClass);
console.log("   htmlAttribute:", htmlAttribute);
console.log("   fileName:", fileName);
console.log("   urlPath:", urlPath);
console.log("");

// ------------------------------------------------------------
// 6. Hungarian Notation (Older style, NOT recommended today)
// ------------------------------------------------------------
// Prefix indicates the data type
// Was popular in older languages like C, Visual Basic
// Modern JavaScript does NOT recommend this
// Example: strName, nCount, bIsActive
// ------------------------------------------------------------

var strName = "Bhaskar";        // str = string
var nAge = 30;                   // n = number
var bIsActive = true;            // b = boolean
var arrNames = ["A", "B", "C"];  // arr = array
var objUser = { id: 1 };         // obj = object
var fnCallback = function() {};  // fn = function

console.log("6. Hungarian Notation (NOT recommended in modern JS):");
console.log("   strName:", strName);
console.log("   nAge:", nAge);
console.log("   bIsActive:", bIsActive);
console.log("   arrNames:", arrNames);
console.log("   objUser:", objUser);
console.log("   Modern JS uses camelCase instead!");
console.log("");

// ------------------------------------------------------------
// 7. BEST PRACTICES SUMMARY
// ------------------------------------------------------------

console.log("=== BEST PRACTICES SUMMARY ===");
console.log("");
console.log("Use camelCase for:");
console.log("   - Variables: let userName, let totalPrice");
console.log("   - Functions: function getUser(), function calculateTotal()");
console.log("   - Methods: obj.getName(), arr.filterItems()");
console.log("");
console.log("Use PascalCase for:");
console.log("   - Classes: class UserAccount, class ShoppingCart");
console.log("   - Constructors: function Person(name) {}");
console.log("   - React Components: function MyButton() {}");
console.log("   - Enums (if used): const Status = { Active: 1, Inactive: 2 };");
console.log("");
console.log("Use SCREAMING_SNAKE_CASE for:");
console.log("   - Constants: const MAX_USERS = 100");
console.log("   - Config values: const API_BASE_URL = '...'");
console.log("   - Environment-based settings");
console.log("");
console.log("AVOID snake_case in JavaScript (use camelCase instead)");
console.log("AVOID Hungarian notation in modern JavaScript");
console.log("NEVER use kebab-case for JS variable/function names");
console.log("");

// ------------------------------------------------------------
// 8. REAL WORLD EXAMPLE USING ALL CONVENTIONS
// ------------------------------------------------------------

console.log("=== REAL WORLD EXAMPLE ===");
console.log("");

const API_URL = "https://api.example.com";
const MAX_RETRY = 3;
const PAGE_SIZE = 20;

class UserProfile {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isActive = true;
        this.createdAt = new Date();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    deactivateAccount() {
        this.isActive = false;
    }

    getProfileSummary() {
        return {
            fullName: this.getFullName(),
            email: this.email,
            isActive: this.isActive,
            memberSince: this.createdAt.toLocaleDateString()
        };
    }
}

function fetchUserData(userId, options) {
    const timeout = options?.timeout ?? PAGE_SIZE;
    const retryCount = options?.retryCount ?? MAX_RETRY;
    
    console.log(`Fetching user ${userId} from ${API_URL}`);
    console.log(`Timeout: ${timeout}ms, Retries: ${retryCount}`);
    
    return { success: true, userId: userId };
}

var userProfile = new UserProfile("Bhaskar", "Rayapalli", "bhaskar@example.com");
console.log("User Profile:", userProfile.getProfileSummary());
console.log("Fetch Result:", fetchUserData(123, { timeout: 5000 }));
