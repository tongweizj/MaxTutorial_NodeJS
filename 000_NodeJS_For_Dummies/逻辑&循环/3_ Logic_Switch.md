# switch 结构

## 基本语法

```JS
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

```


```JS
switch (fruit) {
  case "banana":    // 
    // ...    
    break;  
  case "apple":    
    // ...    
    break;  
  default:    
    // ...
  }
```

上面代码根据变量`fruit`的值，选择执行相应的`case`。
如果所有`case`都不符合，则执行最后的`default`部分。

**注意**
- 多个`if...else`连在一起使用的时候，可以转为使用更方便的`switch`结构。
- 需要注意的是，每个`case`代码块内部的`break`语句不能少，否则会接下去执行下一个`case`代码块，而不是跳出`switch`结构。

**错误**
```JS
var x = 1;
switch (x) {
  case 1:
    console.log('x 等于1');  
  case 2:    
    console.log('x 等于2');  
  default:    
    console.log('x 等于其他值');
  }// x等于1// x等于2// x等于其他值
```

上面代码中，`case`代码块之中没有`break`语句，导致不会跳出`switch`结构，而会一直执行下去。正确的写法是像下面这样。

```JS
switch (x) {  
  case 1:    
    console.log('x 等于1');    
    break;  
  case 2:    
    console.log('x 等于2');    
    break;  
  default:    
    console.log('x 等于其他值');
  }
```

## `switch`语句部分和`case`语句部分，都可以使用表达式。

```JS
switch (1 + 3) {  
  case 2 + 2:
    f();    
    break;  
  default:    
    neverHappens();
  }
```

上面代码的`default`部分，是永远不会执行到的。

需要注意的是，`switch`语句后面的表达式，与`case`语句后面的表示式比较运行结果时，采用的是严格相等运算符（`===`），而不是相等运算符（`==`），
这意味着比较时不会发生类型转换。

```JS
var x = 1;
switch (x) {
  case true:
    console.log('x 发生类型转换');    
    break;  
  default:    
    console.log('x 没有发生类型转换');
  }// x 没有发生类型转换
```

上面代码中，由于变量`x`没有发生类型转换，所以不会执行`case true`的情况。这表明，`switch`语句内部采用的是“严格相等运算符”，详细解释请参考《运算符》一节。

## 案例

```JS
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer =  "apple";
    break;
  case "b":
    answer =  "bird";
    break;
  case "c":
    answer =  "cat";
    break;
  default:
    answer =  "stuff";
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```


## Multiple Identical


```JS
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
