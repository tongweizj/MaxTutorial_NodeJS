var parent = function () {
    var name = "parent_name";
    var age = 13;
  
    var child = function () {
      var name = "child_name";
      childAge = 0.3;  // 没有var，所以childAge变量就被声明为全局变量。
  
      // => child_name 13 0.3
      console.log(name, age, childAge); 
    };
  
    child();
  
    
    // 没有报错 内部函数中的变量childAge 也可以访问
    // => parent_name 13 0.3
    console.log(name, age, childAge);
  };
  
  parent();