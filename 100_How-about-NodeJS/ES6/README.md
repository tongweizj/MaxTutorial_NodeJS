# README

## 介绍

The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:

Arrow functions

- Classes
- Modules
- Promises
- Generators
- let and const

## 知识点

- Explore Differences Between the var and let Keywords
- Compare Scopes of the var and let Keywords
- Declare a Read-Only Variable with the const Keyword
- Mutate an Array Declared with const
- Prevent Object Mutation
- Use Arrow Functions to Write Concise Anonymous Functions
- Write Arrow Functions with Parameters
- Set Default Parameters for Your Functions
- Use the Rest Parameter with Function Parameters
- Use the Spread Operator to Evaluate Arrays In-Place
- Use Destructuring Assignment to Extract Values from Objects
- Use Destructuring Assignment to Assign Variables from Objects
- Use Destructuring Assignment to Assign Variables from Nested Objects
- Use Destructuring Assignment to Assign Variables from Arrays
- Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
- Use Destructuring Assignment to Pass an Object as a Function's Parameters
- Create Strings using Template Literals
- Write Concise Object Literal Declarations Using Object Property Shorthand
- Write Concise Declarative Functions with ES6
- Use class Syntax to Define a Constructor Function
- Use getters and setters to Control Access to an Object
- Create a Module Script
- Use export to Share a Code Block
- Reuse JavaScript Code Using import
- Use * to Import Everything from a File
- Create an Export Fallback with export default
- Import a Default Export
- Create a JavaScript Promise
- Complete a Promise with resolve and reject
- Handle a Fulfilled Promise with then
- Handle a Rejected Promise with catch


## let & const

### Explore Differences Between the var and let Keywords

One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

```JS
var camper = 'James';
var camper = 'David'; // 没有报错
console.log(camper);
// logs 'David'
```

As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

```JS
let camper = 'James';
let camper = 'David'; // throws an error
> Uncaught SyntaxError: Identifier 'xxx' has already been declared

```

This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. 

Note the "use strict". 
This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
注意“使用严格”。
这将启用严格模式，该模式可以捕获常见的编码错误和“不安全”操作。

```JS
"use strict";
x = 3.14; // throws an error because x is not declared
```


### Compare 范围Scopes of the var and let Keywords

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
使用范围,let 比 var 严谨

For example:

```JS
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i); // i 在 for 以外也可以用
// returns 3
```

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

```JS
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

```JS
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 执行这里的时候,for 循环已经结束了,此时 i = 3
// returns 3
```

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

```JS
let printNumTwo;
for (let x = 0; x < 3; x++) {
  if (x === 2) {
    printNumTwo = function() {
      return x;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(x);
// returns "i is not defined"
```

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

### const: Declare a Read-Only Variable with the const Keyword

The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

```JS
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

**常量命名,字幕全部大写**
As you can see, trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

### const: Mutate an Array Declared with const

The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```JS
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

## Prevent Object Mutation

As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function **Object.freeze** to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```JS
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```

## Arrow Functions

### Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

```JS
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```JS
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

```JS
const myFunc = () => "value";
```

This code will still return the string value by default.

### Write Arrow Functions with Parameters

Parameters 变量

Just like a regular function, you can pass arguments into an arrow function.

```JS
// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8
```

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

```JS
// the same function, without the parameter parentheses
const doubler = item => item * 2;
```

It is possible to pass more than one argument into an arrow function.

```JS
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8
```

## Parameters

### 默认变量

Set Default Parameters for Your Functions

In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

```JS
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

### Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 

With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

```JS
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.



```

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.



## Use the Spread Operator to Evaluate Arrays In-Place

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

```JS
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

```JS
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```JS
const spreaded = ...arr; // will throw a syntax error
```

```JS
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
```

## Use Destructuring Assignment to Extract Values from Objects

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

```JS
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```JS
const { name, age } = user;
// name = 'John Doe', age = 34
```

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

## Use Destructuring Assignment to Assign Variables from Objects

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.



## Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

```JS
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Here's how to extract the values of object properties and assign them to variables with the same name:

```JS
const { johnDoe: { age, email }} = user;
```

And here's how you can assign an object properties' values to variables with different names:

```JS
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

## Use Destructuring Assignment to Assign Variables from Arrays

ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

```JS
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```JS
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

## Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

```JS
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.


## Use Destructuring Assignment to Pass an Object as a Function's Parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

```JS
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

This effectively destructures the object sent into the function. This can also be done in-place:

```JS
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

## Create Strings using Template Literals
