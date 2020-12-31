/*
 * 案例 B
 * 1) 使用模块内的变量
 * 2) 使用模块内的function
 */
function Hello() {
  let name;
  this.setName = function (nameStr) {
    name = nameStr;
  };
  this.sayHello = function () {
    console.log('Hello ' + name);
  };
  this.sayCool = function () {
    this.setName('Mike');
    console.log(`Hello,cool man ${name}`);
  };
}
module.exports = Hello;
