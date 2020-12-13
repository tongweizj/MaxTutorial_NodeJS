var Hello = require('./hello');
var hello2 = require('./hello2');

hello2.world();
hello2.cool();

//heloo2 是在hello.js 中创建的函数
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
hello.saycool();

// hello3 = new Hello3();
// hello3.saycool()
