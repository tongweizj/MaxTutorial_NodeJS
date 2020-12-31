# JavaScript 规范


## 缩进

使用 tab 缩进（2 个空格）

```
if (x < y) {
  x += 10;
} else {
  x += 1;
}
```

## 变量命名

- 变量
  采用驼峰式命名camelCase
- 常量
  使用全大写，用下划线连接
- 构造函数和Class
  采用PascalCase

```JS
// 变量
var thisIsMyName;

// 常量
var MAX_COUNT = 10;

// 函数和Class
function Person(name) {
  this.name = name;
}

Class Person {    
}
```

### 变量声明

- 一个函数作用域中所有的变量声明尽量提到函数首部。
- 优先使用块级变量let 和 const，如无需修改的常量使用const

### 单行长度

单行长度不得超过 100，超过部分需要换行

### 分号

统一要加分号。

### 空格

- 三元运算符'?:'前后
- 逗号后必须要有空格
- 代码块'{'前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try,catch, finally, with, return, typeof
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- for 循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

```JS
// not good
var a = {
  b : 1
};

// good
var a = {
  b: 1
};

// not good
++x;
y++;
z = x ? 1:2;

// good
++x;
y++;
z = x ? 1 : 2;

// not good
var a = [ 1, 2 ];

// good
var a = [1, 2];

// good
var doSomething = function(a, b, c) {
  // do something
};

// good
doSomething(item);

// not good
for (let i = 0;i < 6;i++) {
  x++;
}

// good
for (let i = 0; i < 6; i++) {
  x++;
}
```

### 空行

变量声明后（当变量声明在代码块的最后一行时，则无需空行）
注释前（当注释在代码块的第一行时，则无需空行）
定义函数前
文件最后保留一个空行

var x = 1;

// 注释前要有空行
if (x >= 1) {
  var y = x + 1;
}

function test () {
  ...
}
换行


代码块'{'后和'}'前


变量赋值后

```
// good
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;

// good
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}



// good
function test() {
    ...
}


// good
var a,foo = 7,
    b, c, bar = 8;

```

注释
单行注释


注释单独一行的情况下，注释的//后面要跟一个空格


注释如果和代码同一行，代码分号结束后，要跟一个空格，注释的//后也要跟一个空格

```
// 调用函数
foo();

var maxCount = 10; // 这是一个变量
多行注释
多行注释使用下面这种形式：
/**
 * 代码注释1
 * 代码注释2
 */

 ```
多行注释建议在以下几种情况使用：


难于理解的代码段


可能存在错误的代码段


业务逻辑强相关的代码



函数注释
复杂的函数，所有类，都必须进行函数注释，函数注释使用业界统一的规范，方便后续使用 jsdoc 生成文档。最好配置VSCode自动生成模板
例：
```
/**
 * @description 函数描述的 必填
 * @param id {Number} 传入需要获取名称的人物id 参数必填
 * @return {String} 返回的姓名 返回值必填，空为void
 * @author shi 2015/07/21 作者可选
 * @version 1.1.0 可以不写 版本可选
 * @example 示例代码，可选
 */
function getTaskName(id) {
  let name = "test";
  return name;
}
引号
最外层统一使用单引号，除非字符串嵌套的情况使用双引号。
var y = 'foo',
  z = '<div id="test"></div>';
对象，数组


对象属性名不需要加引号，如对象属性名是中划线命名的需要加引号（eslint 的 rules）


对象以缩进的形式书写，不要写在一行（单个属性可以写一行，es6 导入方法时可以使用单行）；


数组、对象最后不要有逗号。


// good
var a = {
  b: 1,
  c: 2
};
括号
下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。
// not good
if (condition) doSomething();

// good
if (condition) {
  doSomething();
}
undefined
永远不要直接使用 undefined 进行变量判断；
使用 typeof 和字符串'undefined'对变量进行判断。
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
不允许存在多层嵌套的条件判断和循环（最多三层）（重点强调⭐）
条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。
// bad
if (x === 10) {
  return 'valid';
} else {
  return 'invalid';
}

// good
return x === 10 ? 'valid' : 'invalid';

// bad
if (!x) {
  if (!y) {
    x = 1;
  } else {
    x = y;
  }
}

// good
x = x || y || 1;
Vue规范
目录、文件、组件命名规范
1. 目录
目录统一使用kebab-case风格
2. views下的文件


js类文件使用PascalCase，如UserInfo.js


其他资源文件统一使用kebab-case风格，如user-detail.js, user-detail.css, user-avatar.png


3. 组件文件

命名遵循PascalCase约定。
组件文件名除index.vue之外，一律采用PascalCase(大驼峰)写法。原因是引入组件时，组件的变量通常用PascalCase格式，以区别于一般变量。组件文件名与变量名一致，方便对应。

import UserBook from './user/UserBook'


组件名应该始终是多个单词的，根组件 App 除外
html元素都是单个单词的（如<article>,<header>)，为了区分组件和一般html元素，组件由多个单词组成，如BookItem.vue，单独的Book.vue不推荐。


组件使用遵循kebab-case 约定
在页面中使用组件需要前后闭合，并以短线分隔，如：


<user-book></user-book>

<user-book />
开发规范
文件结构

基本结构

顺序：template -> script -> style。一个组件尽量不要超过200行，页面包含独立部分时尽量分离成子组件。页面应该由各个小组件组成
<template>
  <div>
    <component-a />
    <component-b />
    <component-c />
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {};
    },
    created(){},
    methods: {},
  };
</script>
<!-- 声明语言，并且添加scoped -->
<style lang="scss" scoped>...</style>

组件/实例的选项顺序

- name          (全局引用)
- components    (模板依赖)
- directives    ...
- filters       ...
- mixins        (组合)
- props         (接口)
- data          (本地状态属性)
- computed      ...
- watch         (响应回调)
- created       (生命周期函数)
- mounted       ...
- methods       (实例属性)


```