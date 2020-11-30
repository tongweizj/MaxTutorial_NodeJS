var adder = function (x) {
    var base = x;
    return function (n) {
      return n + base;
    };
  };
  // add10 = function(n){return n+10}
  //
  var add10 = adder(10);
  console.log(add10(5));
  
  var add20 = adder(20);
  console.log(add20(5));