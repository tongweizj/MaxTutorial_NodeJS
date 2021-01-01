<!--
 * @Author: your name
 * @Date: 2021-01-01 10:44:08
 * @LastEditTime: 2021-01-01 12:55:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MaxTutorial_NodeJS/000_NodeJS_For_Dummies/Object-Oriented-Programming/README.md
-->
# 1. Object Oriented Programming

At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.
顾名思义，面向对象编程将代码组织成对象定义。这些定义有时也被称为类，它们将数据和相关的行为组合在一起。数据是一个对象的属性，行为（或函数）是方法。

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.
对象结构使其在程序中具有灵活性。对象可以通过调用和传递数据到另一个对象的方法来传递信息。同时，新的类可以从基类或父类中接收或继承所有的功能。这有助于减少重复的代码。

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

## 1.1. Create a Basic JavaScript Object

Think about things people see every day, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. 

Here's an example using these concepts to create a duck object:

```JS
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

This duck object has two property/value pairs: a name of "Aflac" and a numLegs of 2.

## 1.2. Use Dot 符号 Notation to Access the Properties of an Object

The last challenge created an object with various properties. 

Now you'll see how to access the values of those properties. Here's an example:

```JS
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```

Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of "Aflac".

## 1.3. Create a Method on an Object

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

```JS
let duck = {
  name: "Aflac",
  numLegs: 2,
};
duck.sayName = function() {return "The name of this duck is " + duck.name + ".";}
duck.sayName();
// Returns "The name of this duck is Aflac."
```

The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

## 1.4.  this 提高代码复用性

Make Code More Reusable with the this Keyword

The last challenge introduced a method to the duck object. 
It used duck.name dot notation to access the value for the name property within the return statement:

```JS
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

While this is a valid有效 way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword:

```JS
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

this = 对象名

this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

## 1.5. 构造函数

Define a Constructor Function

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

```JS
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 

Constructors follow a few conventions:

- Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
构造函数, 大写字母
- Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
构造函数使用关键字this来设置它们将创建的对象的属性。在构造函数中，this指的是它将创建的新对象。

- Constructors define properties and behaviors instead of returning a value as other functions might.
构造函数定义了属性和行为，而不是像其他函数那样返回一个值。

## 1.6. Use a Constructor to Create Objects

Here's the Bird constructor from the previous challenge:

```JS
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

```JS
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

Just like any other object, its properties can be accessed and modified:

```JS
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
```

## 1.7. Extend Constructors to Receive Arguments

The Bird and Dog constructors from last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

```JS
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

```JS
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

```JS
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```

The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

## 1.8. Verify an Object's Constructor with instanceof

Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. 

JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

```JS
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

```JS
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```

## 1.9. Understand Own Properties

In the following example, the Bird constructor defines two properties: name and numLegs:

```JS
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

name and numLegs are called **own properties**, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. 

In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

```JS
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

## 1.10. Prototype 原型

Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, you essentially本质上 have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

```JS
Bird.prototype.numLegs = 2;
```

Now all instances of Bird have the numLegs property.

```JS
console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
```

Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

## 1.11. Iterate Over All Properties

## 1.12. Understand the Constructor Property

## 1.13. Change the Prototype to a New Object

## 1.14. Remember to Set the Constructor Property when Changing the Prototype

## 1.15. Understand Where an Object’s Prototype Comes From

## 1.16. Understand the Prototype Chain

## 1.17. Use Inheritance So You Don't Repeat Yourself

## 1.18. Inherit Behaviors from a Supertype

## 1.19. Set the Child's Prototype to an Instance of the Parent

## 1.20. Reset an Inherited Constructor Property

## 1.21. Add Methods After Inheritance

## 1.22. Override Inherited Methods

## 1.23. Use a Mixin to Add Common Behavior Between Unrelated Objects

## 1.24. Use Closure to Protect Properties Within an Object from Being Modified Externally

## 1.25. Understand the Immediately Invoked Function Expression (IIFE)

## 1.26. Use an IIFE to Create a Module
