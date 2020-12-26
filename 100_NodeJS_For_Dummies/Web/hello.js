// setp: 1
// 我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
const http = require('http');

// setp: 2
// 调用 http 模块提供的函数： createServer
// 这个函数会返回 一个对象  x = http.createServer
// 对象x 有一个叫做 listen 的方法 x.listen()
// listen()有一个数值参数，指定这个 HTTP 服务器监听的端口号
// 当监听到端口有人调用时，运行function部分代码

http
  .createServer((_request, respone) => {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    respone.writeHead(200, { 'Content-Type': 'text/plan' });
    // 发送响应数据 "Hello World"
    respone.end('Hello World!\n');
  })
  .listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
// console.log("Hello World!");

// 代码从头到位，往下运行
// 不像python，dart ，需要一个main 函数
