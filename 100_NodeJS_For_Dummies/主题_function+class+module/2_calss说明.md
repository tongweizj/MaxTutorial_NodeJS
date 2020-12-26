# claa 类

`point.class.js`
```JS
class Point {
    //构造函数
    constructor(x, y) {
        this.x = x;//类中变量
        this.y = y;
    }
    //类中函数
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    //静态函数
    static sayHello(name){
        //修改静态变量
        this.para = name;
        return 'Hello, ' + name;
    }
}
//静态变量
Point.para = 'Allen';
module.exports = Point;
```

`test.js`

```JS
//引入类，暂时ES6标准中有import，但NodeJs还不支持
var Point = require('./point');
//新建类对象
var point = new Point(2, 3);
//调用对象中的方法
console.log(point.toString());
//调用类中的静态函数
console.log(Point.sayHello('Ence'));
//调用类中的静态变量
console.log(Point.para);
```

最新的NodeJS（8）全面支持了类似Java的类和继承机制，包括类的什么、继承、静态方法等。

## 静态函数

不用 new ,直接可以在外部调用




## 类的什么

声明一个类的方法通过class关键字，比如下面这样：

```JS
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getInfo(){
        return this.name+':'+this.age;
    }
}

```

### 构造函数 constructor

从上面的代码可以看出constructor相当于Java中的构造函数，对类的属性name和age进行了初始化。

### 类的方法

getInfo是类的方法，注意这里并没有使用function关键字

### 类的对象

如果我们要生成这个类的对象，通过new关键字就可以了：

```JS
var person=new Person("Eric",41);
console.log(person.getInfo());

```

### 类的继承

类的继承使用了extends关键字，像下面这样：

```JS
class Student extends Person{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
    }

    getInfo(){
        return super.getInfo()+","+this.sex;
    }
}

var student=new Student("Eric",41,"Male");

console.log(student.getInfo());
```

### 类的静态方法

类中可以定义静态方法，这样就不用创建对象而是直接通过类名来调用类的方法，
比如:

```JS
class Student extends Person{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
    }

    getInfo(){
        return super.getInfo()+","+this.sex;
    }
    static print(){
        console.log("I'm static method!");
    }
}
Student.print();
```

static 关键字将print方法定义为静态方法，这样我们就可以直接通过Student.print()来访问它了。