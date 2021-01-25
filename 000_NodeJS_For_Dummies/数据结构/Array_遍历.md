# 3. Iterate 遍历

- for
- every()
- forEach()
- map()

## For

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

### for…in

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

### for-of 语句 (ES 6)

for-of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。只要是一个iterable的对象,就可以通过for-of来迭代.
代码:

``` JS

var arr = [{name:'bb'},5,'test']
for (item of arr) {
    console.log(item)
}
```

### for-of 和 for-in 的区别

for-in 语句以原始插入顺序迭代对象的可枚举属性。
for-in会把继承链的对象属性都会遍历一遍,所以会更花时间.

for-of 语句只遍历可迭代对象的数据。
上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

## forEach

数组的`forEach`方法，也可以用来遍历数组，详见《标准库》的 Array 对象一章。

```JS
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});// red// green// blue
```

## map 方法 (不改变原数组)

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。
callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 
callback 函数只会在有值的索引上被调用；
那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。让数组通过某种计算产生一个新数组,影射成一个新的数组,

代码:

```JS
var arr = [1,2,3]
var newArr = arr.map(current => current * 5)

```

## reduce 方法

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
