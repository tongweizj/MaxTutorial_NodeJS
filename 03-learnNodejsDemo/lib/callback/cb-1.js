function a() {
    return 1
}
 
function b(callback) {
    return 2 + callback
}
 
// 调用：

var c=0

c = b(a())  // a()是个函数，但它又作为一个参数在B函数中被调用

console.log(c)  //结果显示3