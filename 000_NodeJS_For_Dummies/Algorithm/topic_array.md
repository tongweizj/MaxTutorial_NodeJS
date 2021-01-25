# Array类型算法题

## Return Largest Numbers in Arrays

```JS
function largestOfFour(arr) {
   let arrMax=[];
   arr.forEach((item)=>{
     let x = item[0];
     item.forEach((y)=>{
       if(y > x){
         x = y;
       }
     })
     arrMax.push(x)
   })
   arr = arrMax;
   return arr;
 }
```


## callback 回调

## Finders Keepers
一个数组,一个公式,返回这个数组里面符合公式的

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.

 This means that given an element x, the 'truth test' is passed if func(x) is true. 
 If no element passes the test, return undefined.

```JS
function findElement(arr, func) {
  let num = 0;
  let array=[];
  arr.forEach((item)=>{
    if(func(item)){
      array.push(item)
      
    }
  })
  num = array[0];
  return num;
}
```

## 数组切割


### Slice and Splice

You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

```JS
function frankenSplice(arr1, arr2, n) {
  let front = arr2
  let back = front.splice(n) //front 数组改变了

  return front.concat(arr1).concat(back);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


function frankenSplice(arr1, arr2, n) {
  let front = arr2.slice(0,n)
  let back = arr2.slice(n)

  return front.concat(arr1).concat(back);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```
### Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```JS
function chunkArrayInGroups(arr, size) {
  let xx  = [];
  let yy = [];
  arr.forEach((item)=>{
    xx.push(item);
    if(xx.length == size){
      yy.push(xx);
      xx = [];
    }
  })
  if(xx.length>0){
    yy.push(xx);
  }
  arr = yy
  return arr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
```
## 查找\比较\排序数组元素

### Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
```JS
function bouncer(arr) {
  let arr2 =[];
  arr.forEach((item)=>{
    if(Boolean(item)==true){
      arr2.push(item);
    }
    
  })
  arr = arr2
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

## Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

```JS
function getIndexToIns(arr, num) {
  if(arr.length == 0){
    num = 0
    return num
  }
  arr.sort(function(a, b){return a - b});
  let arr2 = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<num){
      arr2.unshift(i+1)
    }
  }
  console.log(arr2)
  if(arr2.length == 0 && num <= arr[0]){
    console.log('xxx')
    num = 0;
  }else if(arr2.length == 0 && num > arr[0]){
    console.log('yyy')
    num = arr.length+1;
  }else{
    num=arr2[0];
  }
  return num;
}

```

### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

```JS
function diffArray(arr1, arr2) {
  var newArr = [];
  var index = 0 ;
  var shorArr, longArr;
  if(arr1.length >= arr2.length){
    shorArr = arr2.slice();
    longArr = arr1.slice();
  }else{
    shorArr = arr1.slice();
    longArr = arr2.slice();
  }
  shorArr.map((item)=>{
    let flag = longArr.indexOf(item)
    console.log(index)
    console.log(flag)
    if (flag > -1) {
        longArr.splice(flag, 1)
    }else{
      newArr.push(item);
    }
    index ++
    })
    newArr = newArr.concat(longArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```


### 1.3. Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.


```JS
function destroyer(...values) {
  var arr = values.shift();
  var newArr =[];
  var index = 0;
  arr.map((item)=>{
    if (values.indexOf(item) <= -1) {
        newArr.push(arr[index]);
    }
    index ++
  })
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```