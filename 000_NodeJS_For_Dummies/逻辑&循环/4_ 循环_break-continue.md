
## 条件语句


# break 语句和 continue 语句

`break`语句和`continue`语句都具有跳转作用，可以让代码不按既有的顺序执行。

`break`语句用于跳出代码块或循环。

```
var i = 0;while(i < 100) {  console.log('i 当前为：' + i);  i++;  if (i === 10) break;}
```

上面代码只会执行10次循环，一旦`i`等于10，就会跳出循环。

`for`循环也可以使用`break`语句跳出循环。

```
for (var i = 0; i < 5; i++) {  console.log(i);  if (i === 3)    break;}// 0// 1// 2// 3
```

上面代码执行到`i`等于3，就会跳出循环。

`continue`语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。

```
var i = 0;while (i < 100){  i++;  if (i % 2 === 0) continue;  console.log('i 当前为：' + i);}
```

上面代码只有在`i`为奇数时，才会输出`i`的值。如果`i`为偶数，则直接进入下一轮循环。

如果存在多重循环，不带参数的`break`语句和`continue`语句都只针对最内层循环。
