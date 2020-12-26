# Node.js模块系统

为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

## 1. 模块的定义和引用

以下待遇按单元可以定义为模块

- Class
- function()
- JOSN



### function()

#### 封装方式 1

```JS
module.exports = function() {
  // ...
}
```

例如:
**模块定义**
`world.js`

```JS
exports.world = function() {
  console.log('Hello World');
}
```

**模块引用**
`main.js`

```JS
const example = require('./world');
example.world();
}
```

代码路径
`./module-example-a`

#### 封装方式 2

把一个对象封装在模块中，格式如下：
**模块定义**

```JS
//b-hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
```

**模块引用**
`main.js`

```JS
var Hello = require('./b-hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 

```

代码路径
`./module-example-b`


#### 封装方式 3: 多function

直接使用方法 1\2 来注册 function 是错误的
**错误的注册方法**

```JS
function HelloOne() {
//...
}
module.exports = HelloOne;

function HelloTwo() {
//...
}
module.exports = HelloTwo;
```

**正确的注册方法**
`c-hello.js`

```JS
function HelloOne() {
//...
}

function HelloTwo() {
//...
}
// 注册方法 1
module.exports = {
  hiO: HelloOne,
  hiT: HelloTwo,
};

// 注册方法 2
module.exports.hiO = HelloOne;
module.exports.hiT = HelloTwo;

// 注册方法 3
exports.hiO = HelloOne;
exports.hiT = HelloTwo;
 
```

**模块引用**
`c-main.js`

```JS
var hi = require('./c-hello');
console.log(hi); // 打印出来就一目了然了,错误的方法,问题在于第二次注册覆盖了第一次
hello = new hi.hiO(); // new 
hello.setName('Max');
hello.sayHello();
hello.sayHello2();
hello.sayHello3('mike');

```


## 3. 模块的标识




这样就可以直接获得这个对象了：

//main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

服务端的模块放在哪里
也许你已经注意到，我们已经在代码中使用了模块了。像这样：

var http = require("http");

...
