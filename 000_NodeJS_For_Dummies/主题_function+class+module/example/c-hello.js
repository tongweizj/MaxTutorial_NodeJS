/*
 * 案例 C
 * 1) 单文件封装多模块
 * 2) 不同的模块注册方式
 */

const { strict } = require('assert');

function HelloOne() {
  this.name = '';

  this.setName = function (nameStr) {
    name = nameStr;
  };

  this.sayHello = function () {
    console.log(`Hello ${name}`);
  };
  this.sayHello2 = function () {
    console.log(`Hello ${name}`);
  };
  this.sayHello3 = function (nameStr) {
    name = nameStr;
    console.log(`Hello,cool man ${name}`);
  };
}

function HelloTwo() {
  let name;
  setName = function (thyName) {
    name = thyName;
  };
  this.sayHello = function () {
    console.log(`Hello ${name}`);
  };
  this.saycool = function () {
    console.log('cool man from Hello3 hello.js');
  };
}

/* 错误注册方法 1
module.exports = requestHandler;
*/
// module.exports = HelloOne;
// module.exports = HelloTwo;

// 注册方法 2
module.exports = {
  hiO: HelloOne,
  hiT: HelloTwo,
};

/* 注册方法 3 功能上面一致
  module.exports.hiO = HelloOne;
  module.exports.hiT = HelloTwo;
  */
// module.exports.hiO = HelloOne;
// module.exports.hiT = HelloTwo;
/* 注册方法 4
  exports.hiO = HelloOne;
  exports.hiT = HelloTwo;
  */
// exports.hiO = HelloOne;
// exports.hiT = HelloTwo;
