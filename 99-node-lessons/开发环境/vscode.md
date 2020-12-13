# Node & vscode 开发环境配置

## 1. 通过Code打开

[参考这篇文章](https://www.liaoxuefeng.com/wiki/1022910821149312/1099503821472096)

## 配置eslint来管理项目代码规范

[npm](https://www.npmjs.com/package/eslint)

简单的说，eslint就是一个能够帮我们检查我们代码的格式、语法，从而来规范前端开发团队在开发流程中的代码

VSCODE 需要安装 eslint 插件
同时,在项目中要配置eslint 规则

```bash
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```

## 2. 代码格式化  prettier

 在package.json中添加下列配置代码,实现项目中代码格式化工作
```JSON
// package.json

  "prettier": {
    "singleQuote": true,
    "semi": false,
    "stylelintIntegration": true,
    "eslintIntegration": true,
    "insertPragma": false,
    "trailingComma": "none",
    "arrowParens": "avoid"
  }
```

## 3.如何使用babel7来配置nodejs支持最新的es语法


[参考这篇文章](https://juejin.cn/post/6844903560270839815)

[解决vscode eslint与prettier冲突](https://zhuanlan.zhihu.com/p/101241781)