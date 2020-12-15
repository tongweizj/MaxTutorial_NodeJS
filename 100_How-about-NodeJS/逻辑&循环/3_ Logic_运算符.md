# 逻辑运算符

## 严格相等运算符（`===`)

'===' 会比较
* 变量的 type
* 值

'==' 只比较
* 值
  
所以 
7 == '7'

Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

```JS
3 ===  3   // true
3 === '3'  // false

3 == '3' // true
```

In the second example, 3 is a Number type and '3' is a String type.

## != 不等于

The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

```JS
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
```

**说明**
`!=` 和 `==` 也是不严格比较的运算符

```JS
1 != "1"    // false
```

## !== 严格不等于

```JS
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
```

## `>` Greater Than Operator

```JS
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
```


## `>=` greater than or equal to

```JS
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
```

## `<` Less Than

```JS
2 < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false
```

## `<=` Less Than Or Equal

```JS
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
```


## `&&` Logical And 与

```JS
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

## `||` Logical or

```JS
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

```JS
if (num >= 5 && num <= 10) {
  return "Yes";
}
return "No";
```