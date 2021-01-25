# 字符串类型算法题


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
## 字符串大小写



### Title Case a Sentence

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
## 字符串拼接
### Repeat a String Repeat a String

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

### 截短 Truncate a String

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
## 字符串头尾查找

### Confirm the Ending

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


### 1.6. Pig Latin

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

### Mutations 字母层级

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

## 正则


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
