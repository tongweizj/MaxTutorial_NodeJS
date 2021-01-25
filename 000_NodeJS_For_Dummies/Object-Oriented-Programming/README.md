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

### 1.1.1. Use Dot 符号 Notation to Access the Properties of an Object

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

### 1.1.2. Create a Method on an Object

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

### 1.1.3.  this 提高代码复用性

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

## 1.2. 构造函数

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

### 1.2.1. Use a Constructor to Create Objects

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

### 1.2.2. Extend Constructors to Receive Arguments

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

### 1.2.3. Verify an Object's Constructor with instanceof

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

### 1.2.4. Understand Own Properties

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

## 1.3. Prototype 原型

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

```JS
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4; // 在狗仔函数外面写原型,prototype


// Only change code above this line
let beagle = new Dog("Snoopy");
```

### 1.3.1. Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

对象实例,包含的属性,有两种类型,一个是 own ,一个是 prototype

```JS
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

```JS
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

### 1.3.2. Understand the Constructor Property

There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

```JS
let duck = new Bird();
let beagle = new Dog();


console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```

Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

```JS
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

Note
Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

### 1.3.3. Change the Prototype to a New Object

Up until now you have been adding properties to the prototype individually:

```JS
Bird.prototype.numLegs = 2;
// This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

```JS
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

```JS
function Bird(name) {
  this.name = name;  //own property
}

function Duck() {
  this.name= "Aflac";
  this.numLegs= 2;
}
Duck.prototype.sayName = function() {return "The name of this duck is " + duck.name + ".";}

let duck = new Duck()
duck.sayName();
```

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

### 1.3.4. Remember to Set the Constructor Property when Changing the Prototype

There is one crucial关键 side effect 副作用 of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

```JS
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

```JS

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

### 1.3.5. Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

```JS
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

// duck inherits its prototype from the Bird constructor function. You can show this relationship with the `isPrototypeOf` method:

Bird.prototype.isPrototypeOf(duck);
// returns true
```

### 1.3.6. Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

```JS
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'

```

```bash
> Bird.prototype  // 虽然在 Bird{} 中 内已有定义 prototype. 但是它是有的,只是为空. 集成自  Object.prototype
{}
```

Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

```JS
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
```

How is this useful? You may recall the hasOwnProperty method from a previous challenge:

```JS
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
```

The `hasOwnProperty` method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck.
在Object.prototype中定义了hasOwnProperty方法，可以由Bird.prototype访问，再由duck访问。

This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
这是一个原型链的例子。在这个原型链中，Bird是duck的 supertype，而duck是 subtype。
Object是Bird和duck的supertype。Object是JavaScript中所有对象的超类型。因此，任何对象都可以使用hasOwnProperty方法。

## 1.4. 继承

Use Inheritance 继承  So You Don't Repeat Yourself

There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

```JS
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

```JS
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

### 1.4.1. Inherit Behaviors from a Supertype

In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

```JS
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. It uses a technique called inheritance. 

This challenge covers the first step: 

- make an instance of the supertype (or parent). 
  You already know one way to create an instance of Animal using the new operator:

```JS
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge.

Instead, here's an alternative approach without those disadvantages:

```JS
let animal = Object.create(Animal.prototype);
```

Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. 

By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

```JS
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```



### 1.4.2. Set the Child's Prototype to an Instance of the Parent

In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

```JS
Bird.prototype = Object.create(Animal.prototype);
```

Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

```JS
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
duck inherits all of Animal's properties, including the eat method.
```


### 1.4.3. Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

```JS
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:

```JS
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

### 1.4.4. Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

```JS
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

```JS
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now instances of Bird will have both eat() and fly() methods:

```JS
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

### 1.4.5. Override Inherited Methods

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

```JS
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the ChildObject received its own methods by chaining them onto its prototype:

```JS
ChildObject.prototype.methodName = function() {...};
```

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

```JS
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here? No.
1. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
1. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
1. Object => JavaScript stopped searching before reaching this level.

### 1.4.6. 对象继承代码Demo1

```JS
function Animal(name) {
  this.name = name
  this.legNum = 4
 };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  },
  eat: function() {
  console.log("nom nom nom");
}
};

// function Bird(){

// }
Bird.prototype = Object.create(Animal.prototype); //继承
// Bird.prototype = {
//   constructor: Bird
// };
Bird.prototype.constructor = Bird

Bird.prototype.run =  function() {
    console.log("I can run very fast! ");
  }
Bird.prototype.sayName = function() {return "The name of this duck is " + duck.name + ".";}


let duck = new Bird("Donald");
duck.legNum = 4;
duck.eat(); // prints "nom nom nom"
// duck inherits all of Animal's properties, including the eat method.

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = {
  constructor: Dog
};
// Bird.prototype.isPrototypeOf(Bird.prototype); // returns true
```

## 1.5. Use a Mixin to Add Common Behavior Between Unrelated Objects

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

```JS
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

The flyMixin takes any object and gives it the fly method.

```JS
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

```JS
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
```

Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

## 1.6. Use Closure to Protect Properties Within an Object from Being Modified Externally

Closure 闭包
In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

```JS
bird.name = "Duffy";
```

Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```JS
function Bird() {
  let hatchedEgg = 10; // private variable 没有 this.

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

Here getHatchedEggCount is a privileged 私有/特权 method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 

In JavaScript, a function always has access to the context in which it was created. This is called closure.
在JavaScript中，一个函数总是可以访问创建它的上下文。这就是所谓的闭包

## 1.7. Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:

```JS
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. 

**The two parentheses () at the end** of the function expression cause it to be immediately executed or invoked. 

This pattern is known as an immediately invoked被援引 function expression or IIFE.

## 1.8. Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to **group related functionality into a single object or module**. For example, an earlier challenge defined two mixins:

看下面的例子,很明显,代码行数没有变化.
但代码的组织性更好,在阅读\使用的时候,更便捷.

```JS
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

We can group these mixins into a module as follows:

```JS
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
```

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

```JS
motionModule.glideMixin(duck);
duck.glide();
```


```JS
let funMoudle = (function(){
  let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
})
```