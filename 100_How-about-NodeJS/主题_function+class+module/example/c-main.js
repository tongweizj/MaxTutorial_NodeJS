var hi = require('./c-hello');
console.log(hi);
hello = new hi.hiO();
hello.setName('Max');
hello.sayHello();
hello.sayHello2();
hello.sayHello3('mike');
// hello = new hiO();
// hello.setName('Max');
// // hello.sayCool();
// hello.sayHello();
// // hello.sayHello2();
// // hello.sayC('Mike');
