/*
 * 方法一
 * exports.world 就表示 world 这个成员函数，是可以在外部模块调用
 */

exports.world = function () {
  console.log('hi, world!');
};

exports.cool = function () {
  console.log('hi, cool man!');
};
