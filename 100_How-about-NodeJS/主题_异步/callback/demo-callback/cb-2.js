var a = 0
 
function exampleA(a) {
    console.log(a)
}
 
function timer(time, callback) {
  // 函数 setTimeout
  // 两个参数，一个callback，一个time
  setTimeout(
    function () {
      a=6
      callback(a);
    }, time);
}
 
//调用:
console.log(a)
timer(3000,exampleA)