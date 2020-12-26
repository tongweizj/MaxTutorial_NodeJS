# array

## Index

- Array
  - 1.基本概念
    - Use an Array to Store a Collection of Data
  - 2.操作数组
    - Access an Array's Contents Using Bracket Notation
    - Add Items to an Array with push() and unshift()
    - Remove Items from an Array with pop() and shift()
    - Remove Items Using splice()
    - Add Items Using splice()
    - Copy Array Items Using slice()
    - Copy an Array with the Spread Operator
    - Combine Arrays with the Spread Operator
  - 3.遍历
    - Check For The Presence of an Element With indexOf()
    - Iterate Through All an Array's Items Using For Loops
  - 4.多维数组
    - Create complex multi-dimensional arrays
  - 5.常用操作

## 1. 基本概念

### 定义

数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

### 值得范围

- booleans
- strings
- numbers
- object
- array
- 函数

```JS
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7

```

### 赋值和读取

```JS
var arr = ['a', 'b', 'c'];
```

上面代码中的`a`、`b`、`c`就构成一个数组，两端的方括号是数组的标志。`a`是0号位置，`b`是1号位置，`c`是2号位置。

除了在定义时赋值，数组也可以先定义后赋值。

```JS
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';
```

任何类型的数据，都可以放入数组。

```JS
var arr = [  {a: 1},  [1, 2, 3],  function() {return true;}];
arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}

```

上面数组`arr`的3个成员依次是对象、数组、函数。

### length 属性

数组的`length`属性，返回数组的成员数量。

```JS
['a', 'b', 'c'].length // 3

```

JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（232 - 1）个，也就是说`length`属性的最大值就是 4294967295。

只要是数组，就一定有`length`属性。
该属性是一个动态的值，等于键名中的最大整数加上`1`。

```JS
var arr = ['a', 'b'];
arr.length // 2
arr[2] = 'c';
arr.length // 3
arr[9] = 'd';
arr.length // 10
arr[1000] = 'e';
arr.length // 1001
```

上面代码表示，数组的数字键不需要连续，`length`属性的值总是比最大的那个整数键大`1`。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

`length`属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到`length`设置的值。

```JS
var arr = [ 'a', 'b', 'c' ];
arr.length // 3
arr.length = 2;
arr // ["a", "b"]
```

上面代码表示，当数组的`length`属性设为2（即最大的整数键只能是1）那么整数键2（值为`c`）就已经不在数组中了，被自动删除了。

清空数组的一个有效方法，就是将`length`属性设为0。

```JS
var arr = [ 'a', 'b', 'c' ];
arr.length = 0;
arr // []
```

如果人为设置`length`大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。

```JS
var a = ['a'];
a.length = 3;
a[1] // undefined
```

上面代码表示，当`length`属性设为大于数组个数时，读取新增的位置都会返回`undefined`。

如果人为设置`length`为不合法的值，JavaScript 会报错。

```JS
// 设置负值
[].length = -1 // RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32)// RangeError: Invalid array length

// 设置字符串
[].length = 'abc'// RangeError: Invalid array length

```

值得注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响`length`属性的值。

```JS
var a = [];
a['p'] = 'abc';
a.length // 0
a[2.1] = 'abc';
a.length // 0
```

上面代码将数组的键分别设为字符串和小数，结果都不影响`length`属性。
因为，`length`属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以`length`属性保持为`0`。

如果数组的键名是添加超出范围的数值，该键名会自动转为字符串。

```JS
var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';arr.length // 0arr[-1] // "a"arr[4294967296] // "b"
```

上面代码中，我们为数组`arr`添加了两个不合法的数字键，结果`length`属性没有发生变化。这些数字键都变成了字符串键名。最后两行之所以会取到值，是因为取键值时，数字键名会默认转为字符串。


### 一种特殊的对象

本质上，数组属于一种特殊的对象。`typeof`运算符会返回数组的类型是`object`。

```JS
typeof [1, 2, 3] // "object"

```

上面代码表明，`typeof`运算符认为数组的类型就是对象。

数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2…）。

```JS
var arr = ['a', 'b', 'c'];
Object.keys(arr)// ["0", "1", "2"]

```

上面代码中，`Object.keys`方法返回数组的所有键名。可以看到数组的键名就是整数0、1、2。

由于数组成员的键名是固定的（默认总是0、1、2…），因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。
JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。

```JS
var arr = ['a', 'b', 'c'];
arr['0'] // 'a'arr[0] // 'a'
```

上面代码分别用数值和字符串作为键名，结果都能读取数组。原因是数值键名被自动转为了字符串。

注意，这点在赋值时也成立。一个值总是先转成字符串，再作为键名进行赋值。

```JS
var a = [];
a[1.00] = 6;
a[1] // 6
```

上面代码中，由于`1.00`转成字符串是`1`，所以通过数字键`1`可以读取值。

上一章说过，对象有两种读取成员的方法：点结构（`object.key`）和方括号结构（`object[key]`）。但是，对于数值的键名，不能使用点结构。

```JS
var arr = [1, 2, 3];
arr.0 // SyntaxError
```

上面代码中，`arr.0`的写法不合法，因为单独的数值不能作为标识符（identifier）。
所以，数组成员只能用方括号`arr[0]`表示（方括号是运算符，可以接受数值）。

### 数组的空位

当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。

```
var a = [1, , 1];a.length // 3
```

上面代码表明，数组的空位不影响`length`属性。

需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。

```
var a = [1, 2, 3,];a.length // 3a // [1, 2, 3]
```

上面代码中，数组最后一个成员后面有一个逗号，这不影响`length`属性的值，与没有这个逗号时效果一样。

数组的空位是可以读取的，返回`undefined`。

```
var a = [, , ,];a[1] // undefined
```

使用`delete`命令删除一个数组成员，会形成空位，并且不会影响`length`属性。

```
var a = [1, 2, 3];delete a[1];a[1] // undefineda.length // 3
```

上面代码用`delete`命令删除了数组的第二个元素，这个位置就形成了空位，但是对`length`属性没有影响。也就是说，`length`属性不过滤空位。所以，使用`length`属性进行数组遍历，一定要非常小心。

数组的某个位置是空位，与某个位置是`undefined`，是不一样的。如果是空位，使用数组的`forEach`方法、`for...in`结构、以及`Object.keys`方法进行遍历，空位都会被跳过。

```
var a = [, , ,];a.forEach(function (x, i) {  console.log(i + '. ' + x);})// 不产生任何输出for (var i in a) {  console.log(i);}// 不产生任何输出Object.keys(a)// []
```

如果某个位置是`undefined`，遍历的时候就不会被跳过。

```
var a = [undefined, undefined, undefined];a.forEach(function (x, i) {  console.log(i + '. ' + x);});// 0. undefined// 1. undefined// 2. undefinedfor (var i in a) {  console.log(i);}// 0// 1// 2Object.keys(a)// ['0', '1', '2']
```

这就是说，空位就是数组没有这个元素，所以不会被遍历到，而`undefined`则表示数组有这个元素，值是`undefined`，所以遍历不会跳过。

### 类似数组的对象

如果一个对象的所有键名都是正整数或零，并且有`length`属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。

```
var obj = {  0: 'a',  1: 'b',  2: 'c',  length: 3};obj[0] // 'a'obj[1] // 'b'obj.length // 3obj.push('d') // TypeError: obj.push is not a function
```

上面代码中，对象`obj`就是一个类似数组的对象。但是，“类似数组的对象”并不是数组，因为它们不具备数组特有的方法。对象`obj`没有数组的`push`方法，使用该方法就会报错。

“类似数组的对象”的根本特征，就是具有`length`属性。只要有`length`属性，就可以认为这个对象类似于数组。但是有一个问题，这种`length`属性不是动态值，不会随着成员的变化而变化。

```
var obj = {  length: 0};obj[3] = 'd';obj.length // 0
```

上面代码为对象`obj`添加了一个数字键，但是`length`属性没变。这就说明了`obj`不是数组。

典型的“类似数组的对象”是函数的`arguments`对象，以及大多数 DOM 元素集，还有字符串。

```
// arguments对象function args() { return arguments }var arrayLike = args('a', 'b');arrayLike[0] // 'a'arrayLike.length // 2arrayLike instanceof Array // false// DOM元素集var elts = document.getElementsByTagName('h3');elts.length // 3elts instanceof Array // false// 字符串'abc'[1] // 'b''abc'.length // 3'abc' instanceof Array // false
```

上面代码包含三个例子，它们都不是数组（`instanceof`运算符返回`false`），但是看上去都非常像数组。

数组的`slice`方法可以将“类似数组的对象”变成真正的数组。

```
var arr = Array.prototype.slice.call(arrayLike);
```

除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过`call()`把数组的方法放到对象上面。

```
function print(value, index) {  console.log(index + ' : ' + value);}Array.prototype.forEach.call(arrayLike, print);
```

上面代码中，`arrayLike`代表一个类似数组的对象，本来是不可以使用数组的`forEach()`方法的，但是通过`call()`，可以把`forEach()`嫁接到`arrayLike`上面调用。

下面的例子就是通过这种方法，在`arguments`对象上面调用`forEach`方法。

```
// forEach 方法function logArgs() {  Array.prototype.forEach.call(arguments, function (elem, i) {    console.log(i + '. ' + elem);  });}// 等同于 for 循环function logArgs() {  for (var i = 0; i < arguments.length; i++) {    console.log(i + '. ' + arguments[i]);  }}
```

字符串也是类似数组的对象，所以也可以用`Array.prototype.forEach.call`遍历。

```
Array.prototype.forEach.call('abc', function (chr) {  console.log(chr);});// a// b// c
```

注意，这种方法比直接使用数组原生的`forEach`要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的`forEach`方法。

```
var arr = Array.prototype.slice.call('abc');arr.forEach(function (chr) {  console.log(chr);});// a// b// c
```



## 2. 操作数组的常用方法

### push

```JS
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

```

### pop()

pop 的结果

1. 读出数组的最后一个元素
2. 同时删掉这个元素

```JS
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

```

### shift()

1. 读出数组的 0 号位,
2. 同时删掉这个元素

```JS
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

```

### unshift()

在数组的 0 号位,插入值

```JS
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

```

### splice()

#### 删除一部分

- 读取出数组中的一部分
- 并删除掉

Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

```JS
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```JS
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

#### 删除并添加数据

Add Items Using splice()

Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```JS
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

Here we begin with an array of numbers. We then pass the following to splice(). The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index. Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

### slice()

Copy Array Items Using slice()
The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

```JS
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

In effect, we have created a new array by extracting elements from an existing array.

### '...'

Copy an Array with the Spread Operator
用展点运算符复制一个数组

While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
虽然slice()允许我们有选择地复制一个数组中的哪些元素，以及其他一些有用的任务，但ES6新的spread操作符允许我们用一种简单且高度可读的语法轻松地按顺序复制一个数组的所有元素。展开语法简单地看起来像这样：......

In practice, we can use the spread operator to copy an array like so:

```JS
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
```

#### Combine Arrays with the Spread Operator

Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

```JS
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

## 数组元素判断

### indexOf()

返回值所在位置

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

Check For The Presence of an Element With indexOf()
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
用indexOf()检查元素的存在性
由于数组可以在任何时候被改变或突变，所以无法保证某个特定的数据在一个给定的数组中的位置，或者这个元素是否仍然存在。幸运的是，JavaScript为我们提供了另一个内置的方法，**indexOf()，它允许我们快速而方便地检查一个数组上是否存在一个元素。**indexOf()将一个元素作为参数，当调用时。

For example:

```JS
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1 表示没有这个= -1值
fruits.indexOf('oranges'); // returns 2 2 是位置
fruits.indexOf('pears'); // returns 1, 如果有 2 个,就显示第一个的位置 the first index at which the element exists
```

### 键值 in 运算符

检查某个键名是否存在的运算符`in`，
不是值
适用于对象，也适用于数组。

```JS
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false

// 两者是等价的
[ 'a', 'b', 'c' ]
{ '1': 'a', '2': 'b', '3': 'c' }
```


上面代码表明，数组存在键名为`2`的键。
由于键名都是字符串，所以数值`2`会自动转成字符串。

注意，如果数组的某个位置是空位，`in`运算符返回`false`。

```JS
var arr = [];
arr[100] = 'a';
100 in arr // true
1 in arr // false
```

上面代码中，数组`arr`只有一个成员`arr[100]`，其他位置的键名都会返回`false`。

## 3. Iterate 遍历

- for
- every()
- forEach()
- map()

### For

#### For

```JS
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```

Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array containing those items.

**题**
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
elem represents an element that may or may not be present on one or more of the arrays nested within arr.

Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

我们定义了一个函数 filteredArray，它以 arr、一个嵌套数组和 elem 作为参数，并返回一个新数组。
elem代表一个元素，这个元素可能存在于一个或多个嵌套在arr中的数组中，也可能不存在。

修改函数，使用for循环，返回一个过滤后的数组，使任何嵌套在arr中的包含elem的数组被删除

#### for…in

`for...in`循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。

```JS
var a = [1, 2, 3];
for (var i in a) {
    console.log(a[i]);
}// 1// 2// 3
```

但是，`for...in`不仅会遍历数组所有的数字键，还会遍历非数字键。

```JS
var a = [1, 2, 3];
a.foo = true;
for (var key in a) {
    console.log(key);
}
// 0// 1// 2// foo

```

上面代码在遍历数组时，也遍历到了非整数键`foo`。
所以，不推荐使用`for...in`遍历数组。

数组的遍历可以考虑使用`for`循环或`while`循环。

``` JS
var a = [1, 2, 3];
// for循环
for(var i = 0; i < a.length; i++) {  
    console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
    console.log(a[i]);  
    i++;
}

var l = a.length;
while (l--) {
    console.log(l + ":" + a[l]);  

}

```

#### for-of 语句 (ES 6)

for-of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。只要是一个iterable的对象,就可以通过for-of来迭代.
代码:

``` JS

var arr = [{name:'bb'},5,'test']
for (item of arr) {
    console.log(item)
}
```

#### for-of 和 for-in 的区别

for-in 语句以原始插入顺序迭代对象的可枚举属性。
for-in会把继承链的对象属性都会遍历一遍,所以会更花时间.

for-of 语句只遍历可迭代对象的数据。
上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

### forEach

数组的`forEach`方法，也可以用来遍历数组，详见《标准库》的 Array 对象一章。

```JS
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});// red// green// blue
```

### map 方法 (不改变原数组)

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。
callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 
callback 函数只会在有值的索引上被调用；
那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。让数组通过某种计算产生一个新数组,影射成一个新的数组,

代码:

```JS
var arr = [1,2,3]
var newArr = arr.map(current => current * 5)

```

### reduce 方法

让数组中的前项和后项做某种计算,并累计最终值,
代码:

```JS
var wallets = [4,7.8,3]
var totalMoney = wallets.reduce( function (countedMoney, wallet) {
    return countedMoney + wallet.money;
}, 0)
```

```JS
args.reduce((a,b)=>a+b,0)
```

## 4. 多维数组

multi-dimensional array 
如果数组的元素还是数组，就形成了多维数组。

```JS
var a = [[1, 2], [3, 4]];

a[0][1] // 2
a[1][1] // 4

//
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

```

## 5. 常用代码

### 1. 数组合并

代码案例：

```JS
var a = [1,2,3];
var b = [4,5,6];

//meth 1
var c = a.concat(b);
//c=[1,2,3,4,5,6]

//meth 2
for(var i in b){
    a.push(b[i]);
}

//meth 3
a.push.apply(a,b);

```

#### 方法 1 concat

js的Array对象提供了一个叫concat()方法，连接两个或更多的数组，并返回结果。

这里有一个问题，concat方法连接a、b两个数组后，a、b两个数组的数据不变，同时会返回一个新的数组。
这样当我们需要进行多次的数组合并时，会造成很大的内存浪费，所以这个方法肯定不是最好的。

#### 方法 2 for循环

大概的思路是：遍历其中一个数组，把该数组中的所有元素依次添加到另外一个数组中。直接上代码：

这样的写法可以解决第一种方案中对内存的浪费，但是会有另一个问题：丑！这么说不是没有道理，如果能只用一行代码就搞定，岂不快哉~

#### 方法 3 apply

函数的apply方法有一个特性，那就是

```JS
func.apply(obj,argv)，
// obj  被添加的数组
// argv 是一个数组
```

调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果。

　　　　这里可能有点绕，我们可以把b看成[4,5,6]，变成这样：

a.push.apply(a,[4,5,6]);
            然后上面的操作就等同于：

a.push(4,5,6);
　　　　这样就很清楚了！

#### 总结

另外，还要注意两个小问题：

1. 以上3种合并方法并没有考虑过a、b两个数组谁的长度更小。
所以好的做法是预先判断a、b两个数组哪个更大，然后使用大数组合并小数组，这样就减少了数组元素操作的次数！
2. 有时候我们不希望原数组（a、b）改变，这时就只能使用concat了。

## 参考链接

- Axel Rauschmayer, [Arrays in JavaScript](http://www.2ality.com/2012/12/arrays.html)
- Axel Rauschmayer, [JavaScript: sparse arrays vs. dense arrays](http://www.2ality.com/2012/06/dense-arrays.html)
- Felix Bohm, [What They Didn’t Tell You About ES5′s Array Extras](http://net.tutsplus.com/tutorials/javascript-ajax/what-they-didnt-tell-you-about-es5s-array-extras/)
- Juriy Zaytsev, [How ECMAScript 5 still does not allow to subclass an array](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)
- [JavaScript 数组遍历方法的对比](https://juejin.cn/post/6844903538175262734)