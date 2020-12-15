
# Logic: If 语句

JavaScript 提供`if`结构和`switch`结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。

## 1. if 结构

`if`结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。
所谓布尔值，指的是 JavaScript 的两个特殊值，`true`表示真，`false`表示`伪`。

`Pseudocode`

```Pseudocode
if (condition is true) {
  statement is executed
}
```

```JS
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

上面是`if`结构的基本形式。
需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。
如果表达式的求值结果为`true`，就执行紧跟在后面的语句；
如果结果为`false`，则跳过紧跟在后面的语句。

```JS
if (m === 3)  m = m + 1;

```

上面代码表示，只有在`m`等于3时，才会将其值加上1。

这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在`if`的条件判断之后，加上大括号，表示代码块（多个语句合并成一个语句）。

```JS
if (m === 3) {
    m += 1;
  }
```

建议总是在`if`语句中使用大括号，因为这样方便插入语句。

注意，`if`后面的表达式之中，不要混淆

* 赋值表达式（`=`）、
* 严格相等运算符（`===`）和
* 相等运算符（`==`）。
  
尤其是赋值表达式不具有比较作用。

```JS
var x = 1;
var y = 2;
if (x = y) {
  console.log(x);
}// "2"
```

上面代码的原意是，当`x`等于`y`的时候，才执行相关语句。
但是，不小心将严格相等运算符写成赋值表达式，结果变成了将`y`赋值给变量`x`，再判断变量`x`的值（等于2）的布尔值（结果为`true`）。

这种错误可以正常生成一个布尔值，因而不会报错。
为了避免这种情况，有些开发者习惯将常量写在运算符的左边，
这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值。

```JS
if (x = 2) { } // 不报错
if (2 = x) { } // 报错
```

至于为什么优先采用“严格相等运算符”（`===`），而不是“相等运算符”（`==`），请参考《运算符》章节。

## 2. if…else 结构

`if`代码块后面，还可以跟一个`else`代码块，表示不满足条件时，所要执行的代码。

```JS
if (m === 3) {  
  // 满足条件时，执行的语句
} else {  
  // 不满足条件时，执行的语句
}
```

上面代码判断变量`m`是否等于3，如果等于就执行`if`代码块，否则执行`else`代码块。

对同一个变量进行多次判断时，多个`if...else`语句可以连写在一起。

```JS
if (m === 0) {
  // ...
} else if (m === 1) {
  // ...
} else if (m === 2) {
  // ...
} else {
  // ...
}
```

`else`代码块总是与离自己最近的那个`if`语句配对。

```JS
var m = 1;
var n = 2;
if (m !== 1)if (n === 2) console.log('hello');else console.log('world');
```

上面代码不会有任何输出，`else`代码块不会得到执行，因为它跟着的是最近的那个`if`语句，相当于下面这样。

```JS
if (m !== 1) {
  if (n === 2) {
    console.log('hello');  
  } else {
    console.log('world');  
  }
}
```

如果想让`else`代码块跟随最上面的那个`if`语句，就要改变大括号的位置。

```JS
if (m !== 1) {  if (n === 2) {    console.log('hello');  }} else {  console.log('world');}// world

```




## 3. 三元运算符 ?:

JavaScript 还有一个三元运算符（即该运算符需要三个运算子）`?:`，也可以用于逻辑判断。

```
(条件) ? 表达式1 : 表达式2
```

上面代码中，如果“条件”为`true`，则返回“表达式1”的值，否则返回“表达式2”的值。

```
var even = (n % 2 === 0) ? true : false;
```

上面代码中，如果`n`可以被2整除，则`even`等于`true`，否则等于`false`。它等同于下面的形式。

```
var even;if (n % 2 === 0) {  even = true;} else {  even = false;}
```

这个三元运算符可以被视为`if...else...`的简写形式，因此可以用于多种场合。

```
var myVar;console.log(  myVar ?  'myVar has a value' :  'myVar does not have a value')// myVar does not have a value
```

上面代码利用三元运算符，输出相应的提示。

```
var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');
```

上面代码利用三元运算符，在字符串之中插入不同的值。

```JS
function checkSign(num) {
  return (num>0)?"positive":(num == 0)?"zero":"negative"
}

checkSign(10);
```

## typeof

```JS
typeof 3    // returns 'number'
typeof '3'  // returns 'string'
typeof true //'boolean'

```