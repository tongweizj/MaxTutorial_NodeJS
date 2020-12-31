// 阻塞代码实例
var fs = require("fs")

var data = fs.readFileSync('input.txt');
 
console.log(data.toString());
console.log("End");

/* 运行结果

% node main.js 
菜鸟教程官网地址：www.runoob.com
End
*/