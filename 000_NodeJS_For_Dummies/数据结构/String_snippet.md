# String Snippet

## 大小写

### 判断是否大小写
方法 1
```js
/[A-Z]/.test('A') // true
/[A-Z]/.test('a') // false
```

方法 2
```js
'A' === 'A'.toUpperCase() // true
'a' === 'a'.toUpperCase() // false

function IsUpper(str){
  return str === str.toUpperCase() 
}
console.log(IsUpper('a')) // fasle
console.log(IsUpper('A')) // true
```