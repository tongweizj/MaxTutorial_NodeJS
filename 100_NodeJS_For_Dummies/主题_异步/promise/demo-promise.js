function promiseDemo() {
  return new Promise((resolve) => {
    resolve(2);
  })
}

// // then方式
function testPromiseDemo1() {
  promiseDemo().then((data) => {
    console.log(data);
  })
  console.log('1000');
}

testPromiseDemo1();

// ➜  nodejs node yibu.js
// 1000
// 2