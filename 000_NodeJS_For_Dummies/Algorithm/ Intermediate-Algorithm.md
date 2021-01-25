# 1. Introduction to the Intermediate Algorithm Scripting Challenges

The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges. These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.

These challenges will allow you to test how much you have learned and which parts you may need to review again before starting the projects.

With that being said-

Have fun and remember to use the Read-Search-Ask method if you get stuck.

Good Luck!


## 1.1. Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

```js
function sumAll(arr) {
  var sum,small,big;
  sum = 0;
  if(arr[0]>arr[1]){
    small = arr[1];
    big = arr[0];
  }else{
     small = arr[0];
    big = arr[1];
  }
  for(let i = small; i <= big; i ++){
    sum = sum + i ;
  }
  return sum;
}

sumAll([1, 4]);
```

## 1.2. Diff Two Arrays

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

## 1.3. Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.


```JS
function destroyer(...values) {
  var arr = values.shift();
  var newArr =[];
  var index = 0;
  arr.map((item)=>{
    console.log(index)
    console.log(values.indexOf(item) )
    if (values.indexOf(item) <= -1) {
        newArr.push(arr[index]);
    }
    index ++
  })
  console.log(newArr)
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## 1.4. Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

```JS
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
 var keys = Object.keys(source)

 collection.map((item) => {
   console.log(item)
   var trueOR = keys.every((key)=>{
     console.log(key)
     return item[key] == source[key]
   })
   if(trueOR){
      arr.push(item)
   }
  
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

## 1.5. Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```JS
function spinalCase(str) {
  var reg1 = /[A-Z]/;
  var reg0 = /[a-z|\s+]/;
  var reg2 = /|_|-/;
  var newStr='';
  for(let char of str){
    if(reg0.test(char)){
      newStr = newStr + char; 
    }else if(reg1.test(char)){
      newStr = newStr +' '+char; 
    }else if(reg2.test(char)){
      newStr = newStr + ' '; 
    }
    console.log(newStr)
  }
  newStr = newStr.trim()
  console.log(newStr)
  var arr = newStr.split(/\s+/)
  str =arr.join('-')
   str = str.toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
```

## 1.6. Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

```js
function translatePigLatin(str) {
  var type = 0;
  if(['a', 'e', 'i', 'o', 'u'].includes(str[0])){
    str = str+'way'
  }else if(['a', 'e', 'i', 'o', 'u'].every(item=> str.search(item)== -1)){
     str = str+'ay'
  }else if(['gl','schw'].some(item=> str.search(item)==0)){
    ['gl','schw'].map((item)=>{
      if(str.search(item)==0){
        str = str.slice(item.length);
        str = str +item + 'ay'
      }
       
    })
       
  }else{
         var consonant = str.slice(0,1);
         str = str.substring(1) + consonant +'ay';
      }
  
  
  return str;
}

translatePigLatin("consonant");
```

## 1.7. Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

- First argument is the sentence to perform the search and replace on.

- Second argument is the word that you will be replacing (before).

- Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.

For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

分析

1. 查找字符串
   1. 要考虑大小写
2. 替换字符串

```js
function myReplace(str, before, after) {
  var beforeS = str.search(before);
  var beforeE = beforeS + before.length;
  var strS = str.slice(0,beforeS);
  var strE = str.slice(beforeE);
  if(before[0] === before[0].toUpperCase() ){
    after = after[0].toUpperCase()+after.slice(1);
  }else{
    after = after[0].toLowerCase()+after.slice(1);
  }
  str = strS + after + strE;
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

## 1.8. DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

[Base pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

**[碱基](https://zh.wikipedia.org/wiki/碱基)对**是形成核酸[DNA](https://zh.wikipedia.org/wiki/DNA)、[RNA](https://zh.wikipedia.org/wiki/RNA)单体以及编码遗传信息的化学结构。组成碱基对的碱基包括

- [腺嘌呤](https://zh.wikipedia.org/wiki/腺嘌呤)（A）、
- [胸腺嘧啶](https://zh.wikipedia.org/wiki/胸腺嘧啶)（T）、
- [鸟嘌呤](https://zh.wikipedia.org/wiki/鸟嘌呤)（G）、
- [胞嘧啶](https://zh.wikipedia.org/wiki/胞嘧啶)（C）、
- [尿嘧啶](https://zh.wikipedia.org/wiki/尿嘧啶)（U）。

在DNA或某些双链RNA分子结构中，由于碱基之间的[氢键](https://zh.wikipedia.org/wiki/氢键)具有固定的数目和DNA两条链之间的距离保持不变，使碱基配对遵循一定的规律：

- 腺嘌呤（A）一定与胸腺嘧啶（T）或者在RNA中的尿嘧啶（U）配对，
- 鸟嘌呤（G）与胞嘧啶（C）配对。

这就是碱基互补配对原则。

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

1. 把字符串=》 Array
2. 遍历 Array
3. 判断每个元素，
4. 创建 Array。push

```js
function pairElement(str) {
  var strArray = str.split("")
  var nestArray =[];
  strArray.map((item)=>{
    if(item == "G"){
      nestArray.push(["G","C"]);
    }else if(item == "C"){
      nestArray.push(["C","G"]);
    }else if(item == "A"){
      nestArray.push(["A","T"]);
    }else if(item == "T"){
      nestArray.push(["T","A"]);
    }else if(item == "U"){
      nestArray.push(["U","A"]);
    }
  })
  return nestArray;
}

pairElement("GCG");
```

## 1.9. Missing letters

```js

```

## 1.10. Sorted Union

```js

```

## 1.11. Convert HTML Entities

```js

```

## 1.12. Sum All Odd Fibonacci Numbers

```js

```

## 1.13. Sum All Primes

```js

```

## 1.14. Smallest Common Multiple

```js

```

## 1.15. Drop it

```js

```

## 1.16. Steamroller

```js

```

## 1.17. Binary Agents

```js

```

## 1.18. Everything Be True

```js

```

## 1.19. Arguments Optional

```js

```

## 1.20. Make a Person

```js

```

## 1.21. Map the Debris

```js

```
