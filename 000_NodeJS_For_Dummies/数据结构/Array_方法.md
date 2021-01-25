# 数组的常用方法

## 方法Index

数组原型方法主要有以下这些

- join()：用指定的分隔符将数组每一项拼接为字符串
- push() ：向数组的末尾添加新元素
- pop()：删除数组的最后一项
- shift()：删除数组的第一项
- unshift()：向数组首位添加新元素
- slice()：按照条件查找出其中的部分元素
- splice()：对数组进行增删改
- fill(): 方法能使用特定值填充数组中的一个或多个元素
- filter():“过滤”功能
- concat()：用于连接两个或多个数组
- indexOf()：检测当前值在数组中第一次出现的位置索引
- lastIndexOf()：检测当前值在数组中最后一次出现的位置索引
- every()：判断数组中每一项都是否满足条件
- some()：判断数组中是否存在满足条件的项
- includes()：判断一个数组是否包含一个指定的值
- sort()：对数组的元素进行排序
- reverse()：对数组进行倒序
- forEach()：ES5 及以下循环遍历数组每一项
- map()：ES6 循环遍历数组每一项
- copyWithin():用于从数组的指定位置拷贝元素到数组的另一个指定位置中
- find():返回匹配的值
- findIndex():返回匹配位置的索引
- toLocaleString()、toString():将数组转换为字符串
- flat()、flatMap()：扁平化数组
- entries() 、keys() 、values():遍历数组

## 1.join()

join()方法用于把数组中的所有元素转换一个字符串。

元素是通过指定的分隔符进行分隔的。默认使用逗号作为分隔符

```JS
var arr = [1,2,3];
console.log(arr.join());   // 1,2,3
console.log(arr.join("-"));   // 1-2-3
console.log(arr);   // [1, 2, 3]（原数组不变）
```

通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：

```JS
function repeatString(str, n) {
//一个长度为n+1的空数组用string去拼接成字符串,就成了n个string的重复
 return new Array(n + 1).join(str);
}
console.log(repeatString("abc", 3));   // abcabcabc
console.log(repeatString("Hi", 5));   // HiHiHiHiHi
```

### push() 和 pop()

push() 
方法从数组末尾向数组添加元素，可以添加一个或多个元素。
方法从数组末尾向数组添加元素，可以添加一个或多个元素。

pop 的结果

1. 读出数组的最后一个元素
2. 同时删掉这个元素
方法用于删除数组的最后一个元素并返回删除的元素。

```JS
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count);  // 5
console.log(arr);   // ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item);   // Sean
console.log(arr);   // ["Lily", "lucy", "Tom", "Jack"]

```

```JS
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

```

### shift() 和 unshift()

shift()

1. 读出数组的 0 号位,
2. 同时删掉这个元素
3. 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

unshift()
在数组的 0 号位,插入值
方法可向数组的开头添加一个或更多元素，并返回新的长度。

```JS
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count);   // 5
console.log(arr);   //["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item);   // Jack
console.log(arr);   // ["Sean", "Lily", "lucy", "Tom"]
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

### fill 填充

```JS
Array(5).fill(2)
//=> [2, 2, 2, 2, 2]
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


## search()

```JS
var str = "123";
console.log(str.search("3") != -1 );  // true
```

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1。


## 4.sort()
sort() 方法用于对数组的元素进行排序。

排序顺序可以是字母或数字，并按升序或降序。

默认排序顺序为按字母升序。

```JS
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort());   // ["a", "b", "c", "d"]
arr2 = [13, 24, 51, 3];
console.log(arr2.sort());   // [13, 24, 3, 51]
console.log(arr2);   // [13, 24, 3, 51](元数组被改变)
```

为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。

比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数：

```JS
function compare(value1, value2) {
    if (value1 < value2) {
     return -1;
    } else if (value1 > value2) {
     return 1;
    } else {
     return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare));   // [3, 13, 24, 51]
```

如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值即可：

```JS
function compare(value1, value2) {
    if (value1 < value2) {
     return 1;
    } else if (value1 > value2) {
     return -1;
    } else {
     return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare));   // [51, 24, 13, 3]
```

## 5.reverse()

reverse() 方法用于颠倒数组中元素的顺序。

```JS
var arr = [13, 24, 51, 3];
console.log(arr.reverse());   //[3, 51, 24, 13]
console.log(arr);   //[3, 51, 24, 13](原数组改变)
```

## 6.concat()

concat() 方法用于连接两个或多个数组。

该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

```JS
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy);   //[1, 3, 5, 7, 9, 11, 13]
console.log(arr);   // [1, 3, 5, 7](原数组未被修改)
```

从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？

```JS
var arrCopy2 = arr.concat([9,[11,13]]);
console.log(arrCopy2);   //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]);   //[11, 13]
```

## 7.slice()

slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。

slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。

在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。

如果有两个参数，该方法返回起始和结束位置之间的项，但不包括结束位置的项。

当出现负数时，将负数加上数组长度的值（6）来替换该位置的数

```JS
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);//相当于arr.slice(1,4)
var arrCopy4 = arr.slice(-4,-1);//相当于arr.slice(2,5)
console.log(arr);   //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy);   //[3, 5, 7, 9, 11]
console.log(arrCopy2);   //[3, 5, 7]
console.log(arrCopy3);   //[3, 5, 7]
console.log(arrCopy4);   //[5, 7, 9]
```

## 8.splice()

splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。

### 1.删除元素,并返回删除的元素

可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。

```JS
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr);   //[5, 7, 9, 11]
console.log(arrRemoved);   //[1, 3]
```

### 2.向指定索引处添加元素

可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入 4 和 6。

```JS
var array1 = [22, 3, 31, 12];
array1.splice(1, 0, 12, 35);  //[]

console.log(array1); // [22, 12, 35, 3, 31, 12]
```

### 3.替换指定索引位置的元素

可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入 4 和 6。

```JS
const array1 = [22, 3, 31, 12];
array1.splice(1, 1, 8);   //[3]

console.log(array1);  // [22, 8, 31, 12]
```

## 9.indexOf()和 lastIndexOf()
接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。

indexOf()： 从数组的开头（位置 0）开始向后查找。

lastIndexOf： 从数组的末尾开始向前查找。

这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。在比较第一个参数与数组中的每一项时，会使用全等操作符。

```JS
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5));   //2
console.log(arr.lastIndexOf(5));   //5
console.log(arr.indexOf(5,2));   //2
console.log(arr.lastIndexOf(5,4));   //2
console.log(arr.indexOf("5"));   //-1
```

## 10.forEach()

forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是 function 类型，默认有传，。

参数分别为：遍历的数组内容；第对应的数组索引，数组本身

```JS
var arr = [11, 22, 33, 44, 55];
arr.forEach(function(x, index, a){
 console.log(x + '|' + index + '|' + (a === arr));
});
```

输出为：

```
 11|0|true
 22|1|true
 33|2|true
 44|3|true
 55|4|true
```

## 11.map()

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

该方法不会改变原数组

```JS
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
 return item*item;
});
console.log(arr2);  //[1, 4, 9, 16, 25]
```

## 12.filter()

filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。

```JS
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
 return index % 3 === 0 || x >= 8;
});
console.log(arr2);  //[1, 4, 7, 8, 9, 10]
```

## 13.fill() es6 新增

fill()方法能使用特定值填充数组中的一个或多个元素。当只是用一个参数时，该方法会用该参数的值填充整个数组。

```JS
let arr = [1, 2, 3, 'cc', 5];
arr.fill(1);
console.log(arr);//[1,1,1,1,1];
```

如果不想改变数组中的所有元素，而只是想改变其中一部分，那么可以使用可选的起始位置参数与结束位置参数（不包括结束位置的那个元素）

3 个参数： 填充数值，起始位置参数，结束位置参数（不包括结束位置的那个元素）

```JS
let arr = [1, 2, 3, 'arr', 5];

arr.fill(1, 2);
console.log(arr);//[1,2,1,1,1]

arr.fill(0, 1, 3);
console.log(arr);//[1,0,0,1,1];
```

## 14.every()

every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。

```JS
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
 return x < 10;
});
console.log(arr2);  //true
var arr3 = arr.every(function(x) {
 return x < 3;
});
console.log(arr3);  // false
```

## 15.some()

some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。

```JS
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
 return x < 3;
});
console.log(arr2);  //true
var arr3 = arr.some(function(x) {
 return x < 1;
});
console.log(arr3);  // false
```

## 16.includes() es7 新增

includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。

参数有两个，其中第一个是（必填）需要查找的元素值，第二个是（可选）开始查找元素的位置

```JS
const array1 = [22, 3, 31, 12, 'arr'];
const includes = array1.includes(31);
console.log(includes); // true

const includes1 = array1.includes(31, 3); // 从索引3开始查找31是否存在
console.log(includes1); // false
```

需要注意的是：includes使用===运算符来进行值比较，仅有一个例外：NaN 被认为与自身相等。

```JS
let values = [1, NaN, 2];
console.log(values.indexOf(NaN));//-1
console.log(values.includes(NaN));//true
```

## 17.reduce()和 reduceRight()

这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。

reduce()方法从数组的第一项开始，逐个遍历到最后。

reduceRight()则从数组的最后一项开始，向前遍历到第一项。

4 个参数：前一个值、当前值、项的索引和数组对象

```JS
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
return prev + cur;
},10);   //数组一开始加了一个初始值10,可以不设默认0
console.log(sum);  //25
```

## 18.toLocaleString() 和 toString()

将数组转换为字符串

```JS
const array1 = [22, 3, 31, 12];
const str = array1.toLocaleString();
const str1 = array1.toString();

console.log(str); // 22,3,31,12
console.log(str1); // 22,3,31,12
```

## 19. find()和 findIndex()

find()与 findIndex()方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的 this。

该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。

该回调函数应当在给定的元素满足你定义的条件时返回 true，而 find()和 findIndex()方法均会在回调函数第一次返回 true 时停止查找。

二者的区别是：find()方法返回匹配的值，而 findIndex()返回匹配位置的索引。

```JS
let arr = [1, 2, 3, 'arr', 5, 1, 9];

console.log(arr.find((value, keys, arr) => {
    return value > 2;
})); // 3 返回匹配的值

console.log(arr.findIndex((value, keys, arr) => {
    return value > 2;
})); // 2 返回匹配位置的索引
```

## 20.copyWithin() [es6 新增]

copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

该方法会改变现有数组

```JS
//将数组的前两个元素复制到数组的最后两个位置
let arr = [1, 2, 3, 'arr', 5];

arr.copyWithin(3, 0);
console.log(arr);//[1,2,3,1,2]
```

默认情况下，copyWithin()方法总是会一直复制到数组末尾，不过你还可以提供一个可选参数来限制到底有多少元素会被覆盖。这第三个参数指定了复制停止的位置（不包含该位置本身）。

```JS
let arr = [1, 2, 3, 'arr', 5, 9, 17];

//从索引3的位置开始粘贴
//从索引0的位置开始复制
//遇到索引3时停止复制
arr.copyWithin(3, 0, 3);
console.log(arr);//[1,2,3,1,2,3,17]
```

## 21.flat() 和 flatMap() es6 新增

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

该方法返回一个新数组，对原数据没有影响。

参数： 指定要提取嵌套数组的结构深度，默认值为 1。

```JS
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 扁平化数组空项,如果原数组有空位，flat()方法会跳过空位
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

flatMap()方法对原数组的每个成员执行一个函数，相当于执行Array.prototype.map(),然后对返回值组成的数组执行flat()方法。

该方法返回一个新数组，不改变原数组。

```JS
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

## 22. entries(),keys() 和 values() 【ES6】

entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历

区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

```JS
for (let index of ['a', 'b'].keys()) {  
console.log(index);  
}  
// 0  
// 1  
for (let elem of ['a', 'b'].values()) {  
console.log(elem);  
}  
// 'a'  
// 'b'  
for (let [index, elem] of ['a', 'b'].entries()) {  
console.log(index, elem);  
}  
// 0 "a"  
// 1 "b" 
```

如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

```JS
let letter = ['a', 'b', 'c'];  
let entries = letter.entries();  
console.log(entries.next().value); // [0, 'a']  
console.log(entries.next().value); // [1, 'b']  
console.log(entries.next().value); // [2, 'c'] 
```