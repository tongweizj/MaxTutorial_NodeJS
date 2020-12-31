
/*
one.js
*/
// var hello = require('./lib/module/one')

// hello.world()
// hello.cool()



/*
two.js
console:
Hello Max
*/

// var Hello = require('./lib/module/two'); 
// hello = new Hello(); 
// hello.setName('Max'); 
// hello.sayHello(); 



/*
three.js 
console:

*/
var Hello = require('./three');

// 注册方法 1
// 错误 
// hello = new Hello(); 
// hello.setName('BYVoid'); 
// hello.sayHello(); 
// hello.saycool()

// 正确

hello2 = new Hello.hello2(); 
hello2.setName('Max'); 
hello2.sayHello(); 
hello2.saycool()


hello3 = new Hello.hello3(); 
hello3.setName('Tong'); 
hello3.sayHello(); 
hello3.saycool()

// 注册方法 2
// hello = new Hello.hi2(); 
// hello.setName('BYVoid'); 
// hello.sayHello(); 
// hello.saycool()

// hello3 = new Hello.hi3(); 
// hello3.setName('BYVoid'); 
// hello3.sayHello(); 
// hello3.saycool()

