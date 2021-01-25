// function addTen(num) {
//   num += 10;
//   return num;
// }
// var count = 20;
// var result = addTen(count);
// // 看有没有影响到原变量
// console.log(count);
// console.log(result);

var oldArr = [1, 2, 3];
var newArr = [].concat(oldArr);
newArr.push(4);
console.log(oldArr);
console.log(newArr);
