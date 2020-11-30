/*
 * 方法3 当一个 module 中,有多个 class 时,不同的 exports (注册)方法

 */


function Hello2() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
    this.saycool = function(){
        console.log('cool man from hello.js')
    }
}; 

function Hello3() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
    this.saycool = function(){
        console.log('cool man from Hello3 hello.js')
    }
}; 


/* 注册方法1 
*/
// 错误 Hello3 覆盖了 Hello2
// module.exports = Hello2;
// module.exports = Hello3;

// 正确
 exports.hello2 = Hello2;
 exports.hello3 = Hello3;

/* 注册方法2
*/

// 写法 1
// module.exports = {
//     hi2: Hello2,
//     hi3: Hello3
//   };
  
// 写法 2 功能上面一致
//   module.exports.hi2 = Hello2;
//   module.exports.hi3 = Hello3;
  
