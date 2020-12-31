// return promise, 必须用.then或者await接收
function promiseDemo() {
    return new Promise((resolve) => {
        resolve(2);
    })
}

// await方式
async function testPromiseDemo() {
    var val = await promiseDemo();
    console.log(val);
    return val;
}
// testPromiseDemo2();  // 内部打印2
// console.log(1000);
testPromiseDemo().then((data) => {
    console.log(2000);
    console.log(data); // 打印返回值2
})
console.log(1000);