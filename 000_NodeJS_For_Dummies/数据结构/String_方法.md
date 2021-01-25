# String 方法

## INDEX


## 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成`\uxxxx`的形式，其中`xxxx`代表该字符的 Unicode 码点。比如，`\u00A9`代表版权符号。

```
var s = '\u00A9';s // "©"
```

解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```
var f\u006F\u006F = 'abc';foo // "abc"
```

上面代码中，第一行的变量名`foo`是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。

我们还需要知道，每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。

但是，UTF-16 有两种长度：对于码点在`U+0000`到`U+FFFF`之间的字符，长度为16位（即2个字节）；对于码点在`U+10000`到`U+10FFFF`之间的字符，长度为32位（即4个字节），而且前两个字节在`0xD800`到`0xDBFF`之间，后两个字节在`0xDC00`到`0xDFFF`之间。举例来说，码点`U+1D306`对应的字符为`𝌆，`它写成 UTF-16 就是`0xD834 0xDF06`。

JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到`U+FFFF`，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符`𝌆`，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

```
'𝌆'.length // 2
```

上面代码中，JavaScript 认为`𝌆`的长度为2，而不是1。

总结一下，对于码点在`U+10000`到`U+10FFFF`之间的字符，JavaScript 总是认为它们是两个字符（`length`属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

## Base64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、`+`和`/`这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

- `btoa()`：任意值转为 Base64 编码
- `atob()`：Base64 编码转为原来的值

```
var string = 'Hello World!';btoa(string) // "SGVsbG8gV29ybGQh"atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

注意，这两个方法不适合非 ASCII 码的字符，会报错。

```
btoa('你好') // 报错
```

要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```
function b64Encode(str) {  return btoa(encodeURIComponent(str));}function b64Decode(str) {  return decodeURIComponent(atob(str));}b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```

## Quoting Strings with Single Quotes

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes

String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. 

Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. 

Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error

```

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character. 
Note The backslash \ should not be confused with the forward slash /. They do not do the same thing.


## 转意Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

## Concatenating Strings with Plus Operator
In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

```js
var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."
```

## Concatenating Strings with the Plus Equals Operator
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:
```js
var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
```

## Constructing Strings with Variables

Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:
```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"

```
## Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.

"Alan Peter".length; // 10

For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

## Use Bracket Notation to Find the First Character in a String

Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

```js
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
```

## Understand String Immutability

In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

```js
var myStr = "Bob";
myStr = "Job";
```

## Use Bracket Notation to Find the Nth Character in a String

You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:
```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
```

## Word Blanks

We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". 
You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, 
like nouns, verbs, adjectives and adverbs. 

You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". 
This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

```

## 截取字符串

- substring() 方法；
- substr() 方法；
- slice() 方法；

### 方法1：substring() 方法

string.substring(from, to) 

- 从 from 位置截取到 to 位置，
- to 可选，没有设置时默认到末尾。

```JS
var str="www.runoob.com!";
str.substring(4); // 从第 5 个字符开始截取到末尾
str.substring(4,10); // 从第 5 个字符开始截取到第10个字符

```

### 方法2：substr() 方法

substr() 方法可在字符串中截取从开始下标开始的指定数目的字符。

```JS
var str="www.runoob.com!";
document.write(str.substr(4,6)); // 从第 4 个字符开始截取6个字符
```

### 方法3：slice() 方法

slice(start,end) 方法用于提取字符串的某个部分（从参数 start 到 end 位置），并以新的字符串返回被提取的部分。类似 substring()。

```JS
var str="www.runoob.com!";
str.slice(4); // 从第 5 个字符开始截取到末尾
str.slice(4,10); // 从第 5 个字符开始截取到第10个字符
```



## length 属性

`length`属性返回字符串的长度，该属性也是无法改变的。

```JS
var s = 'hello';
s.length // 5
s.length = 3;
s.length // 5
s.length = 7;
s.length // 5
```

上面代码表示字符串的`length`属性无法改变，但是不会报错。

## 参考链接

- Mathias Bynens, [JavaScript’s internal character encoding: UCS-2 or UTF-16?](http://mathiasbynens.be/notes/javascript-encoding)
- Mathias Bynens, [JavaScript has a Unicode problem](http://mathiasbynens.be/notes/javascript-unicode)
- Mozilla Developer Network, [Window.btoa](https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa)