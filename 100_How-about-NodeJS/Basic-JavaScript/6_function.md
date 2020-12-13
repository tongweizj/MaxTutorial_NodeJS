# Function

## 基本概念

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

```JS
function functionName() {
  console.log("Hello World");
}

functionName(); 

/// 
function say(word) {
    console.log(word);
  }
 
```

You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

## Passing Values to Functions with Arguments

```JS
function testFun(param1, param2) {
  console.log(param1, param2);
}

testFun("Hello", "World");
```

## 全局变量 Global Scope and Functions

In JavaScript, scope refers to the visibility of variables. 
在JavaScript中，范围是指变量的可见性。
Variables which are defined outside of a function block have Global scope.
在功能块之外定义的变量具有全局作用域。
This means, they can be seen everywhere in your JavaScript code.
这意味着它们可以在您的JavaScript代码中随处可见。

Variables which are used without the var keyword are automatically created in the global scope. 
This can create unintended consequences elsewhere in your code or when running a function again. 
You should always declare your variables with var.

常见变量时,如果不带var关键字, 也就自动创建了全局变量。
这可能会在代码中的其他地方或再次运行函数时产生意想不到的后果。 您应该始终使用var声明变量。

```JS
myGlobal = 10;
function fun1() {
  oopsGlobal = 5; // Assign 5 to oopsGlobal Here
  console.log(oopsGlobal);
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

## Local Scope and Functions

```JS
function myTest() {
  var loc = "foo";
  gol = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined

```

## 全局变量和本地变量同名的情况

Global vs. Local Scope in Functions

```JS
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  console.log(someVar)
  return someVar;
}
```
## Return a Value from a Function with Return

```JS
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

```

## Understanding Undefined Value returned from a Function

```JS
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

```




## 将 function 作为另一个 function 的输入参数

```JS

/// 
function say(word) {
    console.log(word);
  }
 
///  
function baba(someFunction, value) {
    someFunction(value);
}

/// 
function mama(someFunction, value) {
    someFunction(value);
}

/// 
baba(say, "Hello， jerry，I am baba");

mama(say, "Hello， jerry，I am mama");

```