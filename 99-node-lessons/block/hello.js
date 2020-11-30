

/*
 * 方法二 module.exports = Hello;
 * exports.world 就表示 world 这个成员函数，是可以在外部模块调用 
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


/* 注册方法 1 
module.exports = requestHandler;
*/

module.exports = Hello2;
module.exports = Hello3;



// 注册方法 2 
// module.exports = {
//     hi2: Hello2,
//     hi3: Hello3
//   };
  
  
  /* 注册方法 3 功能上面一致
  module.exports.handler = requestHandler;
  module.exports.someText = someText;
  */
  
  /* 注册方法 4
  exports.handler = requestHandler;
  exports.someText = someText;
  */