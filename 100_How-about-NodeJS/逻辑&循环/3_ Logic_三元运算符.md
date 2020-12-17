# 3. 三元运算符 ?:

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