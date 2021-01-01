# Introduction to Basic Algorithm Scripting

A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. 
计算机算法是指为实现特定结果而遵循的一系列步骤。

To write an algorithm, you must first understand a problem, and then solve it with coding.
To make solving problems easier, it can be helpful to

-  break them down into many chunks. 
-  Then, each chunk can be solved one by one. 
  
For example, if you are building a calculator, don't try to solve the problem as a whole. 

- First, consider how to get inputs. 
- Then, determine each arithmetic operation one by one. 
- Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

Hint: If you get stuck, try using console.log() to log variable values to the console. This will help to debug problems.

## Upcoming Lessons

- Convert Celsius to Fahrenheit
- Reverse a String
- Factorialize a Number
- Find the Longest Word in a String
- Return Largest Numbers in Arrays
- Confirm the Ending
- Repeat a String Repeat a String
- Truncate a String
- Finders Keepers
- Boo who
- Title Case a Sentence
- Slice and Splice
- Falsy Bouncer
- Where do I Belong
- Mutations
- Chunky Monkey

## Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

## Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

```JS
x.split("").reverse().join("")
```

## Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

```js
function factorialize(num) {
  let y = 1;
  for( let x = 1;x <= num;x++){
    y = y * x;
  }
  num = y;
  return num;
}

factorialize(5);
```

## Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

```JS
function findLongestWordLength(str) {
   let arry = str.split(" ");
   let longest = '';
   arry.forEach((word)=>{
     if(word.length > longest.length){
       longest = word
     }
  })
   str = longest
   return str.length;
 }
 findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

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

## Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

```JS
function confirmEnding(str, target) {
  let x = str.split(' ');
  console.log(x)
  let y = x[x.length-1]
  console.log(y)
  y = y.split("").reverse().join("");
  console.log(y)
  target = target.split("").reverse().join("");
  console.log(target)
  console.log(y.indexOf(target))
  str = y.indexOf(target) == 0
  return str;
}
```

## Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

```JS
function repeatStringNumTimes(str, num) {
  if( num >= 0 ){
    let x = Array(num).fill(str)
    str = x.join("")
  }else{
    str=''
  }
  return str;
}

repeatStringNumTimes("abc", 3);
```

## Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

```JS
function truncateString(str, num) {
  // 1. 判断长度
  if(str.length > num){
    // 2. 修改字符串
    str = str.slice(0,num)+'...'
  }
  
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

## Finders Keepers

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

## Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

```JS
function booWho(bool) {
  if( bool == true && typeof bool != 'number'){
    bool = true;
  }else if(bool == false){
    bool = true;
  }else{
    bool = false;
  }
  return bool;
}

booWho(null);

```

## Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

```JS
function titleCase(str) {
  str = str.toLowerCase();
  let x = str.split(' ');
  for(let i =0;i < x.length;i++){
    let y = x[i].split('');
    y[0] = y[0].toUpperCase();
    x[i]=y.join('')
  }
  str = x.join(' ')
  return str;
}

titleCase("I'm a little tea pot");

```

## Slice and Splice

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

## Falsy Bouncer

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

## Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

```JS
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  let judge = true;
  arr[1].split('').forEach((item)=>{
    if(arr[0].search(item)<0){
      judge = false;
    }
  })
  arr=judge
  return arr;
}
```

## Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```JS
function chunkArrayInGroups(arr, size) {
  let xx  = [];
  let yy = [];
  arr.forEach((item)=>{
    console.log(item);
    xx.push(item);
    console.log(xx);
    if(xx.length == size){
      yy.push(xx);
      xx = [];
      console.log(xx);
      console.log(yy);
    }
  })
  if(xx.length>0){
 yy.push(xx);
  }
 arr = yy
  console.log('xxxxxxxxxxx');
  console.log(yy);
  console.log(arr);
  return arr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```