# 编程 Errors & debug

## types of Errors

1. Syntax Errors 语法错误

- 比较好找
- IED 会告诉你错误的行数和错误的原因，但有时这些信息可能是错误的

2. Runtime Errors 运行环境错误
- 比较好找
- IED 会告诉你错误的行数和错误的原因，但有时这些信息可能是错误的


3. Logical Errors
 - 一般，IDE 和 运行输出，都不会报错，就是程序本身是正确的
 - 但是业务逻辑错了，所以没有给出正确的结果

## vscode 的 debug 功能
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/Assignment 1/app.js",   // 这里是配置项目的入口，一定要配对
            "restart": true,  // 是否自动重启
            "runtimeExecutable": "nodemon", // 自动重启的时候，用什么工具
            "console": "integratedTerminal" // 将debug自动输出内容，显示在正常的终端
        }
    ]
}


```