// 'use strict';

// dom渲染 深度优先
// dom tree
// css tree
// render tree
// reflow 重排
// repaint 重绘
// bind
// instanceof
// js设计模式
// 跨域资源共享 CORS
// ajax -> asynchronous javascript and xml
// 页面加载 时间线
// PWA（ Progressive Web App）是 Google 于 2016 年提出的概念，2017 年已被迅速采用。PWA 旨在增强 Web 体验，可显著提高加载速度、可离线工作、可被添加至主屏、全屏执行、推送通知消息等等。这些特性将使得 Web 应用渐进式接近原生 App。
// Object.prototype.constructor
// Object.constructor.prototype
// getEventListeners
// linux nodejs部署 自动化测试 nginx
// 计算机组成原理 C
// 数据结构和算法
// 前端架构 前端图形学
// <<软件工程>>

// console.warn('警告');
// console.error('错误');

// var a = 'var a';
// delete a; // false // 不能删除自定义的变量
// b = 'use b' // 直接赋值的变量会作为window的属性, 可以删除
// delete b; // true

/* let obj = {
  a: 1
}
Object.defineProperty(obj, 'b', {
  configurable: true, // 默认false
  enumerable: true, // 默认false
  // value: '2',
  writable: true, // 默认false
  // get() {

  // },
  // set() {

  // }
})
obj.b = 3
console.log(obj); */

// const a = {
//   n: 1,
//   valueOf() {
//     return this.n++
//   }
// };
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1);
// }


// for 编程式
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// forEach 遍历数组 (声名式,不关心内部实现)
// let arr = [2, 3, 4, 5, 6];
// arr.b = 'bb';
// arr.forEach(element => {
//   console.log(element);
// });

// let arr = Array(10)
// arr.map(x => console.log(1))
// for of
// for (const v of arr) {
//   console.log(v);
// }

// let obj = {
//   a: 'aa',
//   b: 'bb',
//   c: 'cc'
// }
// for in
// for (const key in arr) { // key是字符串类型,包括数组私有属性
//   console.log(arr[key]);
// }

// console.log('55'.includes(5));
// find

// some

// every

// reduce
// let p = [{
//     name: 'apple',
//     price: 10,
//     count: 20
//   },
//   {
//     name: 'pear',
//     price: 20,
//     count: 30
//   },
//   {
//     name: 'peach',
//     price: 30,
//     count: 40
//   }
// ];
// let sum = p.reduce((prev, cur, i, arr) => {
//   // console.log(arguments);
//   return prev + cur.price * cur.count;
// }, 0);
// console.log(sum);

// let a = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [4, 5, 6]
// ].reduce((prev, cur) => prev.concat(cur))
// console.log(a);

/*
JavaScript 中语句块（blocks）是没有作用域的，只有函数有作用域。
因此如果在一个复合语句中（如 if 控制结构中）使用 var 声明一个变量，那么它的作用域是整个函数（复合语句在函数中）。 但是从 ECMAScript Edition 6 开始将有所不同的， let 和 const 关键字允许你创建块作用域的变量。

let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。
常量是块级作用域，很像使用 let 语句定义的变量。常量的值不能通过重新赋值来改变，并且不能重新声明。

作用域是占内存
对象是堆内存
*/

/*
this
1.函数预编译过程this->window
2.全局作用域里 this -> window
3.call/apply可以改变函数运行时this指向
4.obj.fn(); fn()里面的this指向obj
*/
// function log() {
// console.log.apply(null, arguments);
//   console.log(...arguments);
// }

// 判断数组
// function isArray(target) {
//   return Object.prototype.toString.call(target) === '[object Array]'
// }

// 判断对象
// function isObject(target) {
//   return target.toString() === '[object Object]'
// }

// 数组去重
// let arrUnique = function (arr) {
//   let obj = {}, ret = [];
//   arr.forEach(v => {
//     if (!obj[v]) {
//       obj[v] = 1;
//       ret.push(v);
//     }
//   });
//   return ret
// }

// let arrUnique = function (arr) {
//  return [...new Set(arr)];
//  return Array.from(new Set(arr))
// }

// 返回数组和target数组的并集
// let arrUnion = function (arr, target) {
//   return [...new Set([...arr, ...target])];
// }

// 交集 intersection
// let arrMixed = function (arr, target) {
//   target = new Set(target);
//   return [...new Set(arr)].filter(item => target.has(item));
// }

// 差集 a-b
// let arrMinus = function (arr, target) {
//   target = new Set(target);
//   return [...new Set(arr)].filter(item => !target.has(item));
// }

// 判断数据类型
// function trueType(target) {
//   return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
// }
/*
function trueType(target) {
  if (target === null) return 'null'
  let t = typeof target
  let temp = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Number]': 'number - object',
    '[object Boolean]': 'boolean - object',
    '[object String]': 'string - object'
  }
  if (t === 'object') {
    return temp[Object.prototype.toString.call(target)]
  }
  return t
}
*/
// 数据类型
// 原始类型 基本类型:
// Number String Boolean undefined null
// 引用类型
// Object Array Function

// function add(...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }

// function avg(...values) {
//   return add.apply(null, values) / values.length
// }

// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');

// if (a > b) console.log(a > c ? a : c);
// else console.log(b > c ? b : c);

// console.log(Math.max(a, b, c));

// 打印100以内的质数
// for (let i = 0; i <= 100; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j == 0) break;
//   }
//   if (j == i) write(i);
// }

/* let n = +prompt('n');
let m = 1;
for (let i = n; i; i--) {
  m *= 2
}
write(m) */

/* let n = +prompt('n');
let m = 1;
for (let i = n; i > 1; i--) {
  m *= i
}
write(m); */
// function jc(n) {
//   if (n <= 1) return 1;
//   return n * jc(n - 1);
// }
// function jc(n) {
//   if (n <= 1) return 1;
//   return n * arguments.callee(n - 1);
// }
// let n = +prompt('int');
// write('' + parseInt(n % 10) + parseInt(n % 100 / 10) + parseInt(n / 100));

// let n = +prompt('n');
// let f = 1,
//   s = 1,
//   t;

// if (n > 2) {
//   for (let i = 0; i < n - 2; i++) {
//     t = f + s;
//     f = s;
//     s = t;
//   }
//   write(t);
// }

// 递归: 找规律, 找出口
// 斐波那契数列 fibonacci
// 1 1 2 3 5 8 13 21
// let fibonacci = [0, 1, 1],
//   n = 10
// for (let i = 3; i <= n; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }
// fibonacci[n]

// function fb(n) {
//   if (n <= 2) return 1;
//   return fb(n - 1) + fb(n - 2);
// }


// function fn(a) {
//   log(a);
//   var a = 123;
//   log(a);

//   function a() {
//     return a;
//   }
//   log(a);
//   log(b);
//   var b = function () {
//     return b;
//   }
//   log(b)
//   log(c);

//   function c() {
//     return c;
//   }
// }

// AO {
//   a: function(){}
//   b: undefined
//   c: function(){}
// }

// fn(1);

// GO {
//   a: 10,
//   test: fn,
//   c: 234
// }
// AO {
//   b: undefined,
// }

// function test() {
//   log(b)//undefined
//   if(a) {
//     var b = 100;
//   }
//   c = 234;
//   log(c) //234
// }

// var a;
// test();
// a = 10;
// log(c);//234

// a = 100;

// function demo(e) {
//   function e() {}
//   arguments[0] = 2;
//   log(e);
//   if (a) {
//     var b = 123;

//     function c() {}
//   }
//   var c;
//   a = 10;
//   var a;
//   log(b);
//   f = 123;
//   log(c);
//   log(a);
// }
// var a;
// demo(1);
// log(a);
// log(f);
// GO {
//   a: 100,
//   demo: fn,
//   f: 123
// }

// AO {
//   e: 2,
//   b: undefined,
//   c: undefined,
//   a: 10
// }
// 2
// undefined
// undefined
// 10
// 100
// 123

// 函数
// 高内聚,弱耦合
// 优化重复代码
// 函数名 小驼峰命名
// 函数声明 预编译 声明提前
// function fn(p1, p2, ......) {
//   ......
//   return ret
// }
// 函数表达式 匿名函数 不会声明提升
// let fn = function (p1, p2, ......) {
//   ......
//   return ret
// }

// let f1 = function f() {

// }
// log(f1.name) // => f
// let f2 = function () {

// }
// log(f2.name) // => f2
// function a() {
//   var a = 0;

//   function b() {
//     a++;
//     log(a);
//   }

//   function c() {
//     a--;
//     log(a);
//   }

//   return [b, c];
// }

// let b = a();
// b[0]()
// b[1]()

// function eater() {
//   var food = '';
//   var obj = {
//     eat: function () {
//       log('I`m eating ' + food);
//     },
//     push: function (f) {
//       food = f;
//     },
//     getFood: function () {
//       return food;
//     }
//   }
//   return obj;
// }

// let a = eater();
// a.push('apple');
// a.getFood();
// a.eat();

// var test = function () {
//   log(0)
// }

// let a = (function () {
//   log('a');
//   return 123;
// }())

// test();

/* function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    arr[i] = (function (i) {
      return function () {
        write(i)
      }
    }(i))
  }
  log(i)
  // for (let i = 0; i < 10; i++) {
  //   arr[i] = function () {
  //     write(i)
  //   }
  // }
  return arr
}

let fn = test();
for (var j = 0; j < fn.length; j++) {
  fn[j]()
} */

// function sum() {
//   let ret = 0,
//       len = arguments.length;
//   for (let i = 0; i < len; i++) {
//     ret += arguments[i]
//   }
//   return ret
// }
// log(sum(1, 2, 3, 4))

// function sum() {
//   let args = [...arguments]
//   let ret = 0
//   args.map((v) => {
//     ret += v
//   })
//   return ret
// }
// log(sum(1, 2, 3, 4))

/* function f() {
  // 将arguments转换为真正的数组
  // var args = Array.prototype.slice.call(arguments);
  // var args = [].slice.call(arguments);
  // var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

  // ES2015
  // const args = Array.from(arguments);
  let args = [...arguments]
  return args
}
log(f(1, 2, 3, 4)) */

// 4321 2345 6789
// function readNum(num) {
//   num += ''
//   const CNWord = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
//   const unit = ['', '拾', '佰', '仟']
//   const q = ['', '万', '亿', '兆']


//   function split4(n) {
//     n += ''
//     // n.slice(-12, -8)
//     let ret = ''
//     n.slice(-4).split('').map((v) => {
//       ret += CNWord[+v]
//     })
//     return ret
//   }

//   return num
// }
// readNum(123)

// 函数声明整体提升
// 变量声明提升

// 预编译
// 四部曲:
// 1.创建AO对象
// 2.找形参和变量声明,将变量和形参名作为AO属性名,值为undefined
// 3.将实参值和形参统一
// 4.在函数体里面找函数声明,值赋予函数体

// 全局作用域Global Object
// 函数作用域
// 预编译 作用域链
// 执行期上下文 内部对象 Activation Object
// 当函数执行时,会创建一个称为执行期上下文的内部对象.一个执行期上下文定义了一个函数执行时的环境,
//   函数每次执行时的执行上下文都是独一无二的,所以多次调用一个函数会导致创建多个执行上下文,函数每次
//   执行时,都会把新生成的执行期上下文,填充到作用域链的最顶端.当函数执行完毕,它所产生的执行上下文被销毁.
// 查找变量: 从作用域链的顶端依次向下查找
// function a() {
//   let a = 0

//   function b() {
//     log(++a)
//   }
//   return b
// }
// let b = a()
// 闭包
// 当内部函数被保存到外部时,将会生成闭包.闭包会导致原有作用域链不释放,造成内存泄漏

// 闭包产生的三个条件:
// 1.内部函数使用了外部函数的变量
// 2.外部函数已经退出
// 3.内部函数可访问

// 闭包作用
// 实现公有变量,如函数累加器
// 做缓存
// 实现封装,属性私有化
// 模块化开发,防止污染全局变量

// 立即执行函数
// 只有表达式才能被执行

/* let lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', (function (i) {
    return function () {
      log(i)
    }
  }(i)))

} */

// if(true) {
//   function a() {
//     log(1)
//   }
//   a()
// }

// let f = (function f() {
//   return '1'
// }, function g() {
//   return 2
// })()

// var x = 1
// if (function f() {}) {
//   x += typeof f
// }
// log(x)

// 使用闭包实现代码封装
// let observer = (function () {
//   let observerList = []
//   return {
//     add(obj) {
//       observerList.push(obj)
//     },
//     empty() {
//       observerList = []
//     },
//     getCount() {
//       return observerList.length
//     },
//     get() {
//       return observerList
//     }
//   }
// })()

// 原始值不能添加属性和方法,包装类可以
// var s = new String('str');
// s.a = 'aa'
// s.b = function () {
//   return 'b'
// }

// var x = 1,
//   y = z = 0;

// function add(n) {
//   return n = n + 1;
// }
// y = add(x)

// function add(n) {
//   return n = n + 3
// }
// z = add(x)

/* function foo(x) {
  log(arguments)
  return x
}

foo(1, 2, 3, 4, 5) */

// function foo(x) {
//   log(arguments)
//   return x
// }(1, 2, 3, 4, 5) // 不会执行

// ;
// (function foo(x) {
//   log(arguments);
//   return x;
// })(1, 2, 3, 4, 5);

// function foo() {
//   bar.apply(null, arguments)
// }

// function bar(x) {
//   log(arguments)
// }
// foo(1, 2, 3, 4, 5)

// parseInt(3, 8) // => 3
// parseInt(3, 2) // => NaN
// parseInt(3, 0) // => 3

// 计算字节长度
// function byteLen(str) {
//   let len = str.length
//   str.split('').map(function(v){
//     if(v.charCodeAt(0) > 255) len++
//   })
//   return len
// }

// byteLen('123asdfsd尖峰时刻大家')

// let deng = {
//   name: 'laodeng',
//   age: 40,
//   add() {
//     this.age++
//   },
//   min() {
//     this.age--
//   }
// }

// 原型
// 原型是function对象的一个属性,它定义了构造函数制造出的对象的公共祖先.
// 通过该构造函数产生的对象,可以继承该原型的属性和方法.原型也是对象.

// 利用原型的特点和概念,可以提取共有属性.

// 对象查看原型 -> 隐式属性__proto__

//构造函数 constructor
// new Object()

// let str = 'str';
// str.constructor === String // true
// str.constructor.prototype === String.prototype // true
// str.__proto__ === str.constructor.prototype // true
// str.__proto__ === String.prototype
// str.__proto__ === Object.getPrototypeOf(str)
// str.__proto__.__proto__ === Object.prototype

// String.prototype // 内置String对象
// // 一般对象的构造函数的原型的构造函数就是这个对象的构造函数
// String.prototype.constructor === String
// String.prototype.__proto__ === Object.prototype
// String.constructor === Function
// String.__proto__ === Function.prototype

// console.dir(Object)

// function Person() {
//   this.attr = 'person'
// }

// Car.prototype = {
//   // constructor: Person,
//   width: 5000,
//   weight: 1500
// }

// var obj = {
//   prop: 'sunny'
// }

// function Car() {
//   this.name = 'Audi';
//   this.color = 'white';
//   this.health = 100;
//   this.run = () => {
//     this.health--
//   }
// }

// let c1 = new Car()
// // c1.__proto__ = obj
// Car.prototype.width = 1000
// Car.prototype = {
//   p: 'p'
// }
// let c2 = new Car()

// var bar = {
//   a: '002'
// }
// function print() {
//   bar.a = 'a'
//   Object.prototype.b = 'b'
//   return function inner() {
//     log(bar.a)
//     log(bar.b)
//   }
// }
// print()()
// // bar.constructor => ƒ Object() {
// //   [native code]
// // }

// 原型链
/* Grand.prototype = {
  lastName: 'He'
}

function Grand() {
  this.name = 'grandfather'
}
let grand = new Grand()
Father.prototype = grand

function Father() {
  this.name = 'father'
}
let father = new Father()
Son.prototype = father
// 构造函数修改prototype后,生成对象的构造函数变为对象
// son.constructor => ƒ Object() {
//   [native code]
// }
function Son() {
  this.name = 'son'
}
let son = new Son()
 */
// 对象没有原型, 对象的构造函数才有原型
//  ({}).constructor.prototype == Object.prototype

// Person.prototype = {
//   weight: 100
// }

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   this.eat = function () {
//     this.weight++
//   }
// }

// let person = new Person('deng', 100)
// let obj = {}
// // call/apply 改变this指向,传参方式不同
// Person.call(obj, 'cheng', 300)
// Person.apply(obj, ['c', 2])

// function Student(name, age, tel, grade = 1) {
//   Person.call(this, name, age)
//   this.tel = tel || 123456789
//   this.grade = grade
// }

// let stu = new Student('sunny', 123)

// bind
// function fn(){
//   console.log(this);
// }
// let obj = {
//   name: 'o',
//   type: 'obj'
// };
// let f = fn.bind(obj);
// f();
// f.name // => "bound fn"

// let fn = new Function('n', 'return n');
// console.log(fn.name); // => anonymous

/* var a = 5

function test() {
  // this = Object.create(test.prototype)
  a = 0
  log(a)
  log(this.a)
  var a
  log(a)
  // return this
}
// test()
new test() */

/* 继承方式
1.原型链
    过多继承了没用的属性
2.借用构造函数
    不能继承借用构造函数的原型
    过调用一次函数
3.共享原型
    不能随便改变原型的属性
 */
/* Grand.prototype = {
  lastName: 'He'
}

function Grand() {
  this.name = 'grandfather'
}

function Father() {
  this.name = 'father'
}
Father.prototype = Grand.prototype
let grand = new Grand()
let father = new Father()
 */

//  圣杯模式
/* function inherit(target, origin) {
  function F() {}
  F.prototype = origin.prototype
  target.prototype = new F()
  target.prototype.constructor = target
  target.prototype.uber = origin.prototype //超类
}

var inherit = (function () {
  var F = function () {}
  return function () {
    F.prototype = origin.prototype
    target.prototype = new F()
    target.prototype.constructor = target
    target.prototype.uber = origin.prototype
  }
}())
F.prototype = {
  type: 'c'
}

function F() {
  this.f = 'fun'
} */

// let a = Object.create(new F())

/* var f = (
  function f() {
    return '1'
  },
  function g() {
    return 2
  }
)()

typeof f */

// 函数声明作为表达式,不会声明函数
// var x = 1
// if(function f() {}) {
//   log(f)
//   x += typeof f
// }
// log(x)

// undefined == null // true
// undefined === null // false
// // 不同数据类型比较,先转换为数字再比较
// 10 == '10' // true
// '12' == 12 // true
// 2 == true // false
// 2 >= true // true
// false == '0' // true
// 'str' == true // false
// 'str' == false // false
// [] == 0 // true
// [] == '' // true
// [] == false // true
// [] == [] // false
// {} == {} // false
// isNaN({}) // true
// 如果对象的valueOf方法的结果是原始值，返回原始值。如果对象的toString方法返回原始值， 就返回这个值； 其他情况都返回一个错误
// 123 == {
//   valueOf: x => '123'
// } // true
// 123 == {
//   toString: x => '123'
// } // true
// 123 == {
//   toString: x => 123,
//   valueOf: x => 'val'
// } // false
// 'val' == {
//   toString: x => 123,
//   valueOf: x => 'val'
// } // true

// isNaN('100') // false
// parseInt('1a') // 1


/* var name = '222'
var a = {
  name: '111',
  say: function () {
    // log(this)
    log(this.name)
  }
}
var fun = a.say
fun() // '222'
a.say() // '111'
var b = {
  name: '333',
  say: function (fun) {
    fun()
  }
}
b.say(a.say) // '222'
b.say = a.say
b.say() // '333'
 */

/*  function f() {
   fn()
 }
 function fn() {
  //  log(arguments.callee)
  //  log(fn.caller)
 }
 f() */

/* var foo = 123
function print() {
  this.foo = 234
  log(this)
  log(foo)
}
// print()
new print() */

/*
var bar = {
  a: '002'
}

function print() {
  bar.a = 'a'
  Object.prototype.b = 'b'
  return function inner() {
    log(bar.a)
    log(bar.b)
  }
}

print()() */

// 克隆 拷贝
// 浅拷贝 原始值拷贝, 引用值共享
// 深拷贝 引用值迭代拷贝
/* function clone(object) {
  let _o = {}
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      _o[key] = object[key];
    }
  }
  return _o
} */

/* function deepClone(obj) {
  if (isObject(obj)) {
    let o = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        if (isArray(element)) {
          o[key] = [].concat(deepClone(element))
        } else if (isObject(element)) {
          o[key] = deepClone(element)
        } else {
          o[key] = element
        }
      }
    }
    return o
  } else {
    return obj
  }
} */

/* function deepClone(origin, target = {}) {
  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      const element = origin[key];
      if (element && typeof element === 'object') {
        target[key] = Array.isArray(element) ? [] : {};
        deepClone(element, target[key]);
      } else {
        target[key] = element;
      }
    }
  }
  return target
}

const obj = {
  arr: [111, 222],
  obj: {
    key: '对象'
  },
  a: () => {
    console.log('函数')
  },
  date: new Date(),
  reg: /^ab$/ig
} */

/* let o = {
  a: 1,
  b: 'b',
  c: function () {
    return 'c'
  },
  d: [1, 2, 3],
  e: {
    f: 'f',
    g: function () {
      return 'g'
    },
    h: {
      i: 1,
      j: [3, 56, 7, 8]
    }
  },
  f: null,
  g: 'null'
}
o.constructor.prototype = {
  pro: 'proto'
}
// let a = clone(o)
// a.d.push(4)

let b = deepClone(o)
b.d.push(5)

// let c = (function(o) {
//   return o
// }(o))
// c.d.push(6)

let object = 123
for (const key in object) {
  log(key)
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    log(element)
  }
}
 */

// 三维数组
// var matrix3x3x3 = [];
// for (var i = 0; i < 3; i++) {
//   matrix3x3x3[i] = [];
//   for (var j = 0; j < 3; j++) {
//     matrix3x3x3[i][j] = [];
//     for (var z = 0; z < 3; z++) {
//       matrix3x3x3[i][j][z] = i + j + z;
//     }
//   }
// }

// matrix3x3x3.forEach(x => {
//   x.forEach(y => {
//     y.forEach(z => console.log(z))
//   })
// })

// let arr = [1,6,2,35,3,85,3,34,53,5]
// Array.prototype.push = function () {
//   for (let i = 0, l = arguments.length; i < l; i++) {
//     this[this.length] = arguments[i]
//   }
//   return this.length
// }

// Array.prototype.push = function() {
//   this.splice(this.length, 0, ...arguments)
//   return this.length
// }
// arr.push(1,2,3)
/* Array.prototype.unshift = function () {
  let len = arguments.length

  for (let i = this.length -1 + len; i >= len; i--) {
    this[i] = this[i-len]
  }
  for (let i = 0; i < len; i++) {
    this[i] = arguments[i]
  }
  return this.length
} */

// Array.prototype.unshift = function () {
//   this.splice(0,0, ...arguments)
//   return this.length
// }
// arr.unshift(1,2,3)

// var friends = [{
//     name: 'John',
//     age: 30
//   },
//   {
//     name: 'Ana',
//     age: 20
//   },
//   {
//     name: 'Chris',
//     age: 25
//   }
// ];
// let a = friends.sort((a, b) => a.age - b.age)
// var names = ['Ana', 'john', 'ana', 'John'];
// console.log(names);
// names.sort((a, b) => {
//   return a.localeCompare(b)
//   // if(a.toLowerCase() < b.toLowerCase()) return -1
//   // if(a.toLowerCase() > b.toLowerCase()) return 1
//   // return 0
// })
// console.log(names);
// 升序
// arr.sort((a,b) => a-b)
// 降序
// arr.sort((a,b) => b-a)
// 乱序
// arr.sort((a,b) => Math.random() - .5)
/* let arr = [
  {
    name: 'a',
    age: 18
  },
  {
    name: 'b',
    age: 20
  },
  {
    name: 'c',
    age: 16
  },
  {
    name: 'd',
    age: 28
  }
]
arr.sort((a,b) => {
  return a.age -b.age
})
 */

//  类数组
/* var obj = {
  // '0': 'a',
  '1': 'b',
  '5': 'c',
  'length': 5,
  'push': Array.prototype.push,
  'splice': Array.prototype.splice
}
obj.push('a','d')
 */

/* function test(a) {
  var a = 1
  var b = 2
  function a(){
    return 3
  }
  return a
}
test(4) */

/* function retParent(el, n) {
  while (el && n > 0) {
    el = el.parentElement
    n--
  }
  return el
}

let i = document.getElementsByTagName('i')[0];
 */

/* Element.prototype.myChildren = function () {
  let child = this.childNodes
  let len = child.length
  let arr = []
  for (let i = 0; i < child.length; i++) {
    const el = child[i];
    if (el.nodeType === 1) {
      arr.push(el)
    }
  }
  return arr
} */

/* let div = document.createElement('div')
let p = document.createElement('p')
div.className = 'example'
p.className = 'slogan'
p.innerText = 'hello jc :)'
div.appendChild(p)
document.body.appendChild(div)
 */

/* Element.prototype.insertAfter = function (el, target) {
  let after = target.nextElementSibling
  if (after) {
    this.insertBefore(el, after)
  } else {
    this.appendChild(el)
  }
} */

// let div = document.getElementsByTagName('div')[0]
// let ul = document.getElementsByTagName('ul')[0]
// let ol = document.getElementsByTagName('ol')[0]
// let p = document.createElement('p')
// div.insertAfter(p, ol)

// let children = div.children

// for (let i = children.length-2; i >= 0; i--) {
//   // log(children[i])
//   div.appendChild(div.children[i])
// }

// console.time()
// for (let index = 0; index < 100000000; index++) {

// }
// console.timeEnd()

/* div.addEventListener('click', function (e) {
  this.style.backgroundColor = 'rgb(255,0,0)'
  log(1)
  e.stopPropagation()
}, false)

div.addEventListener('click', function (e) {
  this.style.backgroundColor = 'rgb(255,255,0)'
  log(2)
  e.stopPropagation()
}, true)
 */
// function fn() {
//   // this.style.color = 'rgb(255,255,255)'
//   log(1)
//   // this.removeEventListener('click', fn, false)
// }
// 事件触发顺序 先捕获 后冒泡
// 表单事件一般不冒泡 focus blur submit reset
// div.addEventListener('click', fn, false) //冒泡
// div.addEventListener('click', fn, true) // 捕获
// div.removeEventListener('click', fn, false)

/* let lis = document.getElementsByTagName('ul')[0].children
function logi(i) {
  return function () {
    log(i)
  }
} */

/* for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', (function (i) {
    return function () {
      log(i)
    }
  }(i)), false)
} */
/* for (let i = 0; i < lis.length; i++) {
  (function (i) {
    lis[i].addEventListener('click', logi(i), false)
  }(i))
} */

/* document.oncontextmenu = function (e) {
  log('right click')
  // e.preventDefault()
  // return false
} */
// 事件委托
/* document.addEventListener('click', function (e) {
  // log('document click')
  log(e.target.innerText)
}, false) */

// let img = document.createElement('img')
// img.src = 'http://b.hiphotos.baidu.com/image/pic/item/96dda144ad345982b391b10900f431adcbef8415.jpg'

// 异步加载js文件 script加载完成执行函数
/* function asyncJs(url, callback) {
  let script = document.createElement('script')
  if (callback) {
    script.onload = callback
  }
  script.src = url
  document.head.appendChild(script)
}

function cb() {
  new Vue({
    el: '.box',
    data: {
      msg: 'hello world :)'
    }
  })
} */
// asyncJs('https://cdn.jsdelivr.net/npm/vue/dist/vue.js', cb)

// div.innerHTML = `
// <p>
// <input type="text">
// </p>
// `

// log(/(\w)\1(\d)\2/.exec('aaaabb22'))

/* let str = 'aabb'
// let reg = /(\w){2}(\w){2}/
let reg = /(\w{2})(\w{2})/
// log(reg.exec(str))
// log(str.replace(reg,'$2$1'))
let ret = str.replace(reg, function ($, $1, $2) {
  log($, $1, $2)
  return $2 + $1
})

'the-first-name'.replace(/-(\w)/g, function ($, $1) {
  return $1.toUpperCase()
}) */

// 正向预查 正向断言
// ''.match(/a(?=c)/g)
// let str  = 'acabcac'
// let reg = /a(?=c)/g
// // reg.exec(str)
// str.match(reg)

// let str = 'aaaaaaaaaaabbbbbbbbbbcccccccccc'
// str.replace(/(\w)\1+/g, '$1')
// str.replace(/(\w)\1*/g, '$1')

/* function strReverse(str) {
  return str.split('').reverse().join('')
}

let str = '10000000000000'
// str = strReverse(str)
// str = strReverse(str.replace(/(\d{3})/g, '$1,'))
str.replace(/(?=(\B)(\d{3})+$)/g, ',')
 */

/* ((w) => {
  w.listenerList = new Set();
  const _cache = w.addEventListener;
  const handler = {
    apply: (target, thisBinding, args) => {
      target();
      listenerList.add(args[0]);
      Reflect.apply(_cache, w, args);
    }
  }
  w.addEventListener = new Proxy((eventName, fn) => {
    console.log('proxy');
  }, handler);
})(window);

window.addEventListener('resize', () => {
  console.log(1);
});

window.addEventListener('custom', () => {
  console.log(2);
})

for (const val of listenerList) {
  console.log(val);
}

window.addEventListener('resize', () => {
  console.log(8);
}); */

// ES6

/* console.log(a); // let没有变量提前声明(预编译)
let a = 1;
{
  var a = 2; // Uncaught SyntaxError: Identifier 'a' has already been declared
}
console.log(a); */

/* var a = 1;
{
  let a = 2;
}
console.log(a); // 1 */

/* var a = 1;
{
  a = 2;
}
console.log(a); // 2 */
/*
let a = 1;
{
  a = 2;
  {
    a = 3;
  }
}
console.log(a); // 3 */

// console.log(b); // ƒ b() {console.log(b);}
// var b = 1;
// var b = 2;
// function b() {
//   console.log(b);
// }
// console.log(b); // 2
// b(); // Uncaught TypeError: b is not a function

/* let a = 1;
if(a) {
  console.log(a); // 1
}
if (a) {
  console.log(a); // Uncaught ReferenceError: a is not defined
  let a = 2;
} */

// 自执行函数 类似(function(){})()
// {
//   let a = 1;
//   console.log(a);
// }

// 展开运算符...
// let arr = [1,2,3]
// arr = [1,2,[3,4,5,[6,7]]]
// console.log(...arr);
// let [...a] = [1,2,3]
// console.log(a); //  [1, 2, 3]

// 数组 解构赋值
// let [x, y] = [1, 2];
// 值互换
// [x, y] = [y, x]
// 嵌套赋值一一对应
// let [x,y,[s],[[f,g],[h,j]]] = [1,2,[3],[[4,5],[6,7]]]
// let [x, y, [s], [[f, g], [h, j]]] = [1, 2, [3], [[4, 5]]] // [1,2,[3],[[4,5]]] is not iterable

// 省略赋值
// let arr = [1, 2, 3, 4, 5, 6];
// let [x, , , , y] = arr

// 不定参数赋值
// let [a,...b] = [1,2,3,4]
// let [,,x,,...y] = [1,2,3,4,5,6,7,8,9]

// 默认值
// let [x,y=1] = [2]
// let [x,y=1] = [2, undefined] // y => 1
// let [x,y=1] = [2, null] // y => null
/* function fn() {
  console.log(1);
}
let [x=fn(),y=0] = [1] // 变量对应值不是undefined,fn不会执行
 */

// 对象 解构赋值
// let [m, n] = [1, 2]
// let o = {
//   m,
//   n
// }

// let obj = {
//   a: 1,
//   b: 2
// }
// let {a, b} = obj;
// let {b} = obj;
// let {x, y} = {x: 'a', y: 'b'}
// let {x: x, y: y} = {x: 'a', y: 'b'}
// let {x: a, y: b} = {x: 'a', y: 'b'}
// let {n, m: m1} = {n:'nn', m: 'mm'}

// 对象数组嵌套
// let obj = {
//   a: [1,2,3],
//   b: '123'
// }
// let {b, a: [, x]} = obj;
// let {b: [y], a: [, x]} = obj;

// let obj = {
//   s: {
//     n: '1'
//   },
//   n: [1, '2', 3, '4'],
//   m: [[1]]
// };
// let {m: [x], s: {n}, n:[, ...y]} = obj;
// let {x, y} = {y: 2} //x => undefined
// let {x = 1, y} = {y: 2}
// let {m: n} = {};
// let {m: n = 4} = {};
// let {m: n = 4} = {m: 1};
// let {m = 1} = {m: undefined}
// let {m = 1} = {m: null}
// let {f: b} = {b: 'bb'}
// let { f: { b } } = { b: 'bb' } //Cannot destructure property `b` of 'undefined' or 'null'.
// let {f} = undefined
// let {n} = null

// let { __proto__ } = 1; // Object(1).__proto__ === __proto__
// let {x, y} = 1; // Object(1).x => undefined

// let { n, m, length, __proto__: proto } = [1, 2, 3]; // Object([1,2,3]).__proto__ === proto

// let a;
// { a } = { a: 1 } //{a} 被理解为代码块
// ({a} = {a: 1});

/* let { length, name } = function (a, b = 1) { };
console.log(Object(function (a, b) { }));
console.log(length, name);
 */

// 字符串 解构赋值
// let [x, y, z, length] = '1235'; // length => 5
// let { length } = '123'; // length => 3

// includes() 判断字符串包含指定字符
// '123'.includes('23')
// '123'.includes('23', 2)

// let str = 'congratulation';
// str.startsWith('as');
// str.endsWith('j');

// console.log(str.repeat(2));
// str.repeat(2.9);
// str.repeat(0.9); // ''
// str.repeat(0); // ''
// str.repeat(-0.9) // ''
// str.repeat(NaN) // ''
// str.repeat(-1) // Invalid count value
// str.repeat(Infinity)
// str.repeat('2')
// console.log(str.repeat('2a')); // ''

// `` 保留换行和空格
// let s = `<br><hr>
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>`;
// document.body.innerHTML = `<h1>    head 1    ${str} </h1>`;
// document.body.innerHTML += `<div>${s}</div>`;

// let [x, y] = [1, 2];
// console.log(`${ x }+${ y }=${ x + y }`);

/* function fn(x) {
  return x;
}
console.log(`fn => ${ fn(123) }`); */

/* let s = 'return' + '`Hello ${wd}`';
let fun = new Function('wd', s);
console.log(fun('world :)'));
 */

// 数组的扩展
// let a1 = Array(3) // 3个空位的数组
// let a2 = Array(3).fill(undefined);
// console.log(1 in a1);
// console.log(1 in a2);
// let a3 = [,,4,,5,,7,,];
// 跳过空位
// a3.forEach(x => {
//   console.log(x);
// });

// let num = 0;
// let m = a3.map((v,i,arr) => {
//   log(++num);
//   return v;
// });
// console.log(num); // 3


// Array.of(3) // [3]

// Array.from(arrayLike)
// let arr = [1, 2, 3, 4]
//  复制一个数组
// Array.from(arr)
// let evens = Array.from(arr, x => x % 2 == 0)
// Array.from(arr, x => 2 * x)


// Array.prototype.copyWithin(target, start = 0, end = this.length)
// [1,2,3,4,5,6].copyWithin(1,2,3);

// console.log([2,3,4,5].find(x => x >= 3));
// console.log([1, 4, 5, 6, 7, 8].find((v, i, arr) => i > 3));
// console.log([1, 4, 5, 6, 7, 8].findIndex((v, i, arr) => i > 3));
// log([1,2,3,4].includes(4));

/* let ret = [,,,3,4,5,,,8,,].find((v, i, arr) => {
  log(i, v);
  return v;
}); */

// let arr = [9, 8, 8, 1, 2, 3, 4, 5, 6, 7];

// for (const v of arr) {
//   console.log(v);
// }

// for (const key in arr) {
//   console.log(key, arr[key]);
// }

// let arrKeys = arr.keys()
// console.log(arrKeys.next());

// for (const v of arr.keys()) {
//   console.log(v);
// }

// let arrValues = arr.values()
// console.log(arrValues.next());

// for (const v of arr.values()) {
//   console.log(v);
// }

// let arrIterator = arr.entries()
// arrIterator.next().value // [0,9]

// for (const [i, v] of arr.entries()) {
//   console.log(i, v);
// }

// 函数
// function test([a,b]) {
//   console.log(a, b);
// }
// let arr = [1,2];
// test(arr);

// function fn(x = 1, y) {
//   console.log(x, y);
// }
// fn(2)

/* function fn({x = 0, y = 1} = {}) {
  console.log(x, y);
}
fn();
fn(1);
fn({x: 'xx'}); */

/* function fn({x, y} = {x: 2, y: 1}) {
  console.log(x, y);
}
fn(1);
fn({x: 'xx'});
fn({y: 'yy'}); */

// function fn(x, y = 1, z) {}
// fn.length 有默认值时是带默认值参数的位置
// console.log(fn.length); // 1

/* let x = 10;

function fn(x = 1, y = x) {
  x = 20;
  console.log(x, y);
}
fn(); */

// let arr = [2,3,4,56,3,2,1,4,6,7]
// let m = eval('Math.max('+ arr +')')
// let ma = Math.max.apply(null, arr);
// let max = Math.max(...arr);

// 箭头函数没有this指向 没有arguments
// let fn = x => x + ' :)';
// let f1 = () => 'hello';
// let f2 = (x=3) => x * x;
// let f3 = (a,b) => a + b;
// let af = () => {
//   console.log(arguments);
// }
// af(1,2,3);

// function f() {
//   console.log(this);
// }
// f();

// let a = b => c => b + c; // 高阶函数

// console.log(a(2)(3));

// let obj = {
//   fn: function () {
//     console.log(this);
//     let f = () => {
//       console.log(this);
//     }
//     f();
//   },
//   af: () => {
//     console.log(this);
//     let f = () => {
//       console.log(this);
//     }
//     f();
//   }
// }
// obj.fn(); // => obj
// obj.af(); // => window

// let box = document.getElementsByClassName('box')[0];
// box.addEventListener('click', () => {
//   console.log(this); // this => window
// });

// let a = 'aa', b = 'bb';
// let obj = {
//   a,
//   [a]: 'aa',
//   [a+b]: 'aabb',
//   fn(){},
//   f: function () {}
// }
// console.log(obj.a);
// console.log(obj[a]);

// Object.is(NaN, NaN); // true

// [1,2,NaN, 4,true].includes(NaN); // true

// let o1 = {
//   a: 1,
//   b: 2
// };
// let o2 = {
//   c: 3,
//   d: 4,
//   a: {
//     a1: 'a',
//     c1: 'c1'
//   }
// };
// let o3 = {
//   a: {
//     a1: 'a11',
//     b1: 'b11'
//   },
//   e: 'e'
// };
// 合并对象
// Object.assign(o1, o2);

// Object.getOwnPropertyDescriptor('12345', 'length');
// Object.getOwnPropertyDescriptor([1, 2, 3], 'length');

// Object.keys(Array); // []
// Object.getOwnPropertyNames(Array); // 包括不可枚举属性 (6) ["length", "name", "prototype", "isArray", "from", "of"]

// symbol
// let sy = Symbol('s')
// let s = Symbol('s')
// console.log(sy == s); // false

// let name = Symbol('name');
// let person = {}
// person[name] = 'Liu'
// {
//   let name = Symbol('name');
//   person[name] = 'Wang'
//   console.log(person);
// }

// Set
// let s = new Set([5, 6, 4, 1, NaN, false, 'str', 2, 3, 4, 3, 2]);

// s.size
// s.add('a');
// s.delete(2);
// s.clear();
// s.has(3)
// for (const v of s) {
//   log(v)
// }

// [1,2,3,4].map(v => {
//   log(v)
// });

// 扩展运算符(...) 内部使用for...of循环
// let arr = [...s];
// Array.from(s)
// log(arr);

// s.forEach((v, k) => {
//   console.log(v + ' | ' + k);
// });

// let sIterator = s.values();
// for (const i of sIterator) {
//   console.log(i);
// }

// let a = [1, 2, 3, 4, 3, 4];
// let b = [5, 6, 3, 4];

// 求a b并集
// let union = new Set([...a, ...b]);

// 有重复值
// function jj(arr1, arr2) {
//   return arr1.filter(item => arr2.includes(item));
// }

// b = new Set(b);

// 交集
// let intersect = [...new Set(a)].filter(x => b.has(x));

// 差集 a-b
// let minus = [...a].filter(x => !b.has(x));

/* let wset = new WeakSet();
let a = {
  a: 'aa'
}
let b = new String('bb');
let c  = new Number(8);

wset.add(a);
wset.add(b);
wset.add(c); */

// wset.delete(a);
// a = null;
// console.log(wset.has(a));

// let o1 = {};
// let o2 = {};
// let m = new Map();

// m.set({}, '0');
// m.set(o1, '1');
// m.set(o2, '2');

// m.get(o2) //2

// let ma = new Map([
//   ['name', 'breeze'],
//   ['age', 30],
//   [{
//     name: '珠峰'
//   }, '珠峰'],
//   [/\d/g, 'Regexp']
// ]);
// ma.get('name') //'breeze'
// ma.set(NaN, Infinity);

// ma.forEach((v, k) => {
//   console.log(k + " => " + v);
// });

// let [a1,a2,a3] = [...ma];
// console.log(a1,a2,a3);

// for (const v of ma) {
//   console.log(v);
// }

// let ks = ma.keys();
// ks.next()
// let vs = ma.values();
// vs.next();
// let ens = ma.entries();
// ma.size

// let arr = [1,2,3,4,5,6,7,8];
// let am = new Map();
// arr.forEach((v, i) => {
//   am.set(i+1, arr.slice(0, i+1));
// })

/* // WeakMap只能以对象作为键
let wma = new WeakMap();
let obj = {},
obj1 = {name: 'a'},
obj2 = {name: 'b'},
obj3 = {name: 't'}

wma.set({}, 'obj')
wma.set(obj, 'weak map value');
wma.set(obj1, 'alibaba')
wma.set(obj2, 'baidu')
wma.set(obj3, 'tencent')
console.log(wma.has(obj));
// console.log(wma.get({})); // undefined
// console.log(wma.get(obj));
delete wma.obj
console.log(wma); */

// 遍历器 Iterator
// let arr = ['源库网', 4, 'www.yuankuwang.com', '北京大学'];
// let it = arr[Symbol.iterator]();
// log(it.next());

// for (const v of it) {
//   console.log(v);
// }

/* while (true) {
  let n = it.next();
  if(n.done) break;
  console.log(n.value);
} */

/* for(;;) {
  let n = it.next();
  if(n.done) break;
  console.log(n.value);
} */

/* let obj = {
  0: '00',
  1: '11',
  a: 1,
  b: true,
  c: 'str',
  d: [1,2,3],
  e: function(x) {
    return x;
  },
  f: {
    f1: 'f1v'
  }
}
obj[Symbol.iterator] = Array.prototype[Symbol.iterator];

let objIt = obj[Symbol.iterator](); //无效 */

// Generator
// function* gf() {
//   console.log('aaa' + (yield '源库网'));
//   yield '北京海淀';
//   yield 'www.yuankuwang.com';
//   return 'end';
// }

// let y = gf();
// log(y.next());
// log(y.next('我是注入的AAA'));

// function* gen(num) {
//   let x = 2 * (yield num);
//   console.log('x='+x);
//   let y = yield x*3;
//   console.log('y='+y);
//   console.log(x, y);

// }
// let g = gen(5);
// console.log(g.next());

// Promise
// let a = '';

// function buy(cb) {
//   setTimeout(() => {
//     a = '蘑菇';
//     cb(a)
//   }, 1000);
// }
// buy(x => console.log(x));

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 2000);

// })
// p.then(msg => console.log(msg));

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }

// timeout(2000).then(value => {
//   console.log(value)
// })

// function loadImageAsync(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image()
//     img.src = url
//     img.onload = () => {
//       resolve(img)
//     }
//     img.onerror = () => {
//       reject(new Error('图片加载失败'))
//     }
//   })
// }

// loadImageAsync('a.jpg')


function Ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

Ajax('a.json').then(data => {
  console.log(data)
}, err => {
  console.error(err)
})





// async


// class
// class Point {
//   constructor(x, y) {
// 共享属性
//     [this.x, this.y] = [x, y]
//   }
// 静态方法 不会继承,通过类调用
//   static distance(a, b) {
//     const [dx, dy] = [a.x - b.x, a.y - b.y];
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// 共享方法
//   toString() {
//     return '(' + this.x + ',' + this.y + ')';
//   }
// }
// log(new Point(1, 2).toString());
// Point.distance(new Point(1, 1), new Point(4, 5));

/* class Person {
  constructor(name, sex) {
    // console.log(new.target); // Person
    // #a = 'private value' // 私有属性提案
    this.name = name;
    this.sex = sex;
    this.sayName = this.fn();
    // 添加私有属性

    Person._data = {}
    Person.private = 'pv'
  }
  static a() {
    return '123'
  }
  static get privateAttr() {
    // console.log('get private attr')
    return Person._data.privateAttr
  }
  static set privateAttr(v) {
    // console.log('set private attr')
    Person._data.privateAttr = v;
  }
  fn() {
    return this.name
  }
  say() {
    console.log(this.name);
  }
  get attr() {
    console.log('get attr');
  }
  set attr(v) {
    console.log('set attr', v);
  }
}

let p1 = new Person('li', '男')

class Student extends Person {
  constructor(name, sex, score) {
    super(name, sex);
    // console.log(this);
    this.score = score;
    super.say()
    Student.private = 'stu'
  }
  static study() {
    console.log('studing', super.private, this.private);

  }
}

let s1 = new Student('zhang', '女', 99)
Student.study();
s1.__proto__ === Student.prototype
Student.__proto__ === Person
Object.getPrototypeOf(Student)
Student.prototype.constructor === Student
Student.prototype.__proto__ === Person.prototype */

// 继承内部实现
// Object.setPrototypeOf(Student.prototype, Person.prototype)

// class Person{
//   constructor(name) {
//     this._name = name
//   }
//   get name() {
//     return this._name
//   }
//   set name(v) {
//     this._name = v
//   }
// }
// let meiko = new Person('meiko')

// proxy 代理器

// var proxy = new Proxy({}, {
//   get: function (target, property) {
//     return 35;
//   }
// });

// let user = {
//   fname: 'Bob',
//   lname: 'Wood',
//   fullName() {
//     return this.fname + ' ' + this.lname;
//   }
// }
// // console.log(user.fullName());
// let myuser = new Proxy(user, {
//   get(target, key, receiver) {
//     console.log('get', arguments);
//     return target[key]
//   },
//   set(target, key, value, receiver) {
//     console.log('set', arguments);
//     target[key] = value
//   }
// })
// myuser.fname = 'Liu'
// console.log(myuser.fname);



// Decorator
/* @testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable */

// function Circle(radius = 0) {
//   this.toString = () => 2 * Math.PI * radius
//   this.valueOf = () => Math.PI * Math.pow(radius, 2)
// }

// let c1 = new Circle(10)
// let c2 = new Circle(20)

// console.log(c1 + c2);

/* function Tyre(brand) {
  this.brand = brand
}

function Car(logo = 'unknown', brand) {
  this.logo = logo
  // this.tyres = []
  this.tyres[0] = new Tyre(brand)
  this.tyres[1] = new Tyre(brand)
  this.tyres[2] = new Tyre(brand)
  this.tyres[3] = new Tyre(brand)
}

Car.prototype.tyres = []

let rangeRover = new Car('Range Rover', 'Hankook')
let landWind = new Car('Land Wind', 'Michelin')
 */

/* function test() {
  var foo = 'abc'
  var obj = {
    foo: 'bar'
  }

  with(obj) {
    function f() {
      console.log(1, foo)
    };
    (function () {
      console.log(2, foo)
    })();
    f();
  }
  console.log('f:', f);
}

test(); */

/* function test() {
  var obj = {
    foo: 'bar'
  }
  // console.log(1, foo); // Uncaught ReferenceError: foo is not defined
  with(obj) {
    foo = 'abc'
  }
  console.log(obj.foo);

}
test(); */

// window.onload = function () {
//   console.log(1);

// }
// // console.dir(window)
// console.log(window instanceof Window); // true
// console.log(window.constructor === Window); // true
// console.log(window.Object === Object); // true


// const truthy = x => Boolean(x)
// 对象始终返回true
// console.log(truthy(new Boolean(false))); // true
// console.log(truthy(Boolean(false))); // false
// console.log(truthy(new String(''))); // true

// let a = 1
// window.a // undefined
// b = 2 // 直接赋值的变量相当于给window添加属性b,可以使用delete删除
// console.log(delete a, delete b) // false true
// var c = 3
// console.log(window.c); // 3
// console.log(delete c); // false //不可删除


/*
    /\     0      45
   /  \    1     3  6
  /    \   2    2    7
 /      \  3   1      8
/________\ 4  0        9
*/
/*
function triangle(h=5) {
  let str = ''
  for (let i = 0; i < h; i++) {
    for (let j = 1; j < 2 * h; j++) {
      if (j == h - i) str += '/';
      else if (i == h - 1) str += '_'
      else str += ' '
      if (j == h + i) str += '\\';
    }
    str += '\n'
  }
  return str
} */

// console.log(triangle());

// const _items = Symbol()
// class Stack {
//   constructor() {
//     this[_items] = []
//   }
//   get isEmpty() {
//     return this[_items].length === 0
//   }
//   get size() {
//     return this[_items].length
//   }
//   // 返回栈顶元素(最后一个)
//   get peek() {
//     return this[_items][this[_items].length - 1]
//   }
//   push(el, ...p) {
//     return this[_items].push(el, ...p)
//   }
//   pop() {
//     return this[_items].pop()
//   }
//   clear() {
//     this[_items] = []
//   }
//   print() {
//     console.log(this[_items].toString());
//   }
// }

// let stack = new Stack()
// console.log(stack.isEmpty);
// stack.push(3)
// stack.push(6)
// console.log(stack.peek);
// console.log(stack.size);

// let p = Object.getOwnPropertySymbols(stack)
// stack[p[0]].push(999)
// stack.print()

// 进制转换 默认二进制
// function baseConverter(num, base = 2) {
//   let stack = new Stack(),
//     str = '',
//     digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   while (num > 0) {
//     stack.push(Math.floor(num % base))
//     num = Math.floor(num / base)
//   }
//   while (!stack.isEmpty) {
//     str += digits[stack.pop()]
//   }
//   return str
// }

// baseConverter = (num, base=2) => {
//   const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let arr = []
//   while (num>0) {
//     arr.push(Math.floor(num % base))
//     num = Math.floor(num / base)
//   }
//   return arr.reverse().map(n => digits[n]).join('')
// }
// console.log(baseConverter(123456, 36))

// 队列
/* class Queue {
  constructor() {
    this.items = []
  }
  enqueue(el, ...p) {
    return this.items.push(el, ...p)
  }
  dequeue() {
    return this.items.shift()
  }
  print() {
    console.log(this.items.toString());
  }
  get front() {
    return this.items[0]
  }
  get isEmpty() {
    return this.items.length === 0
  }
  get size() {
    return this.items.length
  }
} */

/* let Queue = (function () {
  const items = new WeakMap()
  class Queue {
    constructor() {
      items.set(this, [])
    }
    get getItems() {
      return items.get(this)
    }
    get front() {
      return this.getItems[0]
    }
    get isEmpty() {
      return this.getItems.length === 0
    }
    get size() {
      return this.getItems.length
    }
    enqueue(el, ...p) {
      let q = items.get(this)
      return q.push(el, ...p)
    }
    dequeue() {
      return this.getItems.shift()
    }
    print() {
      console.log(this.getItems.toString())
    }
  }
  return Queue
})() */
/*
let queue = new Queue()
console.log(queue.enqueue('jack', 'joy', 'david'))
console.log(queue.dequeue())
console.log(queue.front);
console.log(queue.isEmpty);
console.log(queue.size);
queue.print() */

// 优先队列
/* class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(el, priority = 0) {
    // 找到插入的位置
    let index = this.items.findIndex(v => {
      // 比较优先级 priority值越小越靠前 值相等遵循插入顺序(先进先出原则)
      return priority < v.priority
    })
    // 没有找到插入的位置就默认添加在最后
    if (index == -1) index = this.items.length
    this.items.splice(index, 0, {
      el,
      priority
    })
  }
  print() {
    console.dir(this.items)
  }
}

let pq = new PriorityQueue()
pq.enqueue('d', 3)
pq.enqueue('b', 1)
pq.enqueue('a', 1)
pq.enqueue('c', 2)
pq.print() */

// 循环队列-击鼓传花
/* function hotPotato(nameList, num) {
  let queue = new Queue()

  nameList.forEach(name => {
    queue.enqueue(name)
  });

  let eliminated = ''
  while (queue.size > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '被淘汰')
  }
  return queue.dequeue()
} */

/* function hotPotato(nameList, num) {
  while (nameList.length > 1) {
    for (let i = 0; i < num; i++) {
      nameList.push(nameList.shift());
    }
    console.log(nameList.shift() + '被淘汰')
  }
  return nameList.shift()
}

let nameList = ['a', 'b', 'c', 'd', 'e']
console.log(hotPotato(nameList, 7), '获胜');
 */

// 链表数据结构
// 链表存储有序的元素集合， 但不同于数组， 链表中的元素在内存中并不是连续放置的。 每个
// 元素由一个存储元素本身的节点和一个指向下一个元素的引用（ 也称指针或链接） 组成。
/* class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  indexOf(element) {
    let cur = this.head,
      i = 0

    while (cur) {
      if (cur.element === element) return i
      i++
      cur = cur.next
    }
    return -1
  }

  getItem(index) {
    if (index >= 0 && index < this.length) {
      let i = 0,
        cur = this.head
      while (i++ < index) {
        cur = cur.next
      }
      return cur
    }
    return null
  }

  push(element) {
    let node = new Node(element),
      cur
    // head为null表示链表为空
    if (this.head === null) {
      this.head = node
    } else {
      cur = this.getItem(this.length - 1)
      cur.next = node
    }
    return ++this.length
  }

  unshift(element) {
    let node = new Node(element),
      cur = this.head
    node.next = cur
    this.head = node
    return ++this.length
  }

  insert(element, position = this.length) {
    if (position === 0) {
      return this.unshift(element)
    }
    if (position === this.length) {
      return this.push(element)
    }
    if (position > 0 && position < this.length) {
      let node = new Node(element),
        previous = this.getItem(position - 1),
        cur = previous.next

      node.next = cur
      previous.next = node
      return ++this.length
    }
    return false
  }

  pop() {
    let last2 = this.getItem(this.length - 2)
    if (last2) {
      let last = last2.next
      last2.next = null
      this.length--;
      return last
    }
    return null
  }

  shift() {
    let head = this.head
    if (head) {
      this.head = head.next
      this.length--;
      return head
    }
    return null
  }

  removeAt(position) {
    if (position === 0) {
      return this.shift()
    }
    if (position > 0 && position < this.length) {
      let previous = this.getItem(position - 1),
        cur = previous.next

      previous.next = cur.next
      this.length--;
      return cur.element
    }
    return null
  }

  remove(element) {
    return this.removeAt(this.indexOf(element))
  }

  clear() {
    this.head = null
    this.length = 0
  }

  get isEmpty() {
    return this.length === 0
  }

  toString() {
    let cur = this.head,
      str = ''
    while (cur) {
      str += cur.element + (cur.next ? '->' : '')
      cur = cur.next
    }
    return str
  }

  print() {
    let cur = this.head,
      res = []
    if (cur) res.push(cur)
    while (cur && cur.next) {
      res.push(cur = cur.next)
    }
    console.dir(res);
  }

} */

// let list = new LinkedList()
// list.push(1)
// list.push(2)
// list.push(3)
// console.log(list.insert('aa', 0))
// console.log(list.insert('bb', 2))
// console.log(list.insert('cc'))
// list.print()
// console.log(list.removeAt(1))
// list.print()
// console.log(list.length);
// console.log(list.toString());
// console.log(list.indexOf('bb'));

// 双向链表
/* class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  getItem(index) {
    if (index >= 0 && index < this.length) {
      let cur
      //插入列表后半部分 从尾部开始迭代
      if (index >= this.length / 2) {
        cur = this.tail
        index = this.length - 1 - index
        while (index-- > 0) {
          cur = cur.prev
        }
      } else {
        cur = this.head
        while (index-- > 0) {
          cur = cur.next
        }
      }
      return cur
    }
    return null
  }

  unshift(element) {
    let node = new Node(element),
      current = this.head
    // 判断空列表
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = current
      current.prev = node
      this.head = node
    }
    return ++this.length
  }

  push(element) {
    let node = new Node(element)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    return ++this.length
  }

  insert(element, position = this.length) {
    if (position === 0) {
      return this.unshift(element)
    }
    if (position === this.length) {
      return this.push(element)
    }
    if (position > 0 && position < this.length) {
      let node = new Node(element),
        cur = this.getItem(position),
        previous = cur.prev

      node.prev = previous
      node.next = cur
      cur.prev = node
      previous.next = node
      return ++this.length
    }
    return false
  }

  shift() {
    let head = this.head
    if (head) {
      if (this.length === 1) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.length--
    }
    return head
  }

  pop() {
    let tail = this.tail
    if (tail) {
      if (this.length === 1) {
        this.head = this.tail = null
      } else {
        this.tail = tail.prev
        this.tail.next = null
      }
      this.length--
    }
    return tail
  }

  removeAt(position) {
    if (position === 0) {
      return this.shift()
    }
    if (position === this.length - 1) {
      return this.pop()
    }
    if (position > 0 && position < this.length - 1) {
      let cur = this.getItem(position),
        previous = cur.prev

      previous.next = cur.next
      cur.prev = previous
      this.length--;
      return cur.element
    }
    return null
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }
} */

// let dlist = new DoublyLinkedList()
// dlist.insert('e', 0)
// dlist.insert('a', 0)
// dlist.print()
// console.log(dlist.getHead);
// dlist.removeAt(0)
// console.log(dlist.getItem(0))
// dlist.print()
// dlist.insert('b', 1)
// dlist.insert('c', 2)
// dlist.insert('d', 3)
// dlist.insert('f', 3)
// dlist.removeAt(3)
// console.log(dlist.toString());
// dlist.print()

// 循环链表
/* class CircularLinkedList extends DoublyLinkedList {
  constructor() {
    super()
  }

  indexOf(element) {
    let cur = this.head,
      len = this.length,
      i = 0

    while (i++ < len) {
      if (cur.element === element) return i - 1
      cur = cur.next
    }
    return -1
  }

  unshift(element) {
    let node = new Node(element),
      current = this.head

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = current
      current.prev = node
      this.head = node
      this.tail.next = this.head
      this.head.prev = this.tail
    }
    return ++this.length
  }

  push(element) {
    let node = new Node(element)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.tail.next = this.head
      this.head.prev = this.tail
    }
    return ++this.length
  }

  insert(element, position = this.length) {
    if (position === 0) {
      return this.unshift(element)
    }
    if (position === this.length) {
      return this.push(element)
    }
    if (position > 0 && position < this.length) {
      let node = new Node(element),
        cur = this.getItem(position),
        previous = cur.prev

      node.prev = previous
      node.next = cur
      cur.prev = node
      previous.next = node
      this.head.prev = this.tail
      this.tail.next = this.head
      return ++this.length
    }
    return false
  }

  shift() {
    let head = this.head
    if (head) {
      if (this.length === 1) {
        this.head = this.tail = null
      } else {
        this.head = head.next
        this.head.prev = this.tail
        this.tail.next = this.head
      }
      this.length--
    }
    return head
  }

  pop() {
    let tail = this.tail
    if (tail) {
      if (this.length === 1) {
        this.head = this.tail = null
      } else {
        this.tail = tail.prev
        this.head.prev = this.tail
        this.tail.next = this.head
      }
      this.length--
    }
    return tail
  }

  print() {
    let cur = this.head,
      len = this.length,
      res = []

    while (len-- > 0) {
      res.push(cur)
      cur = cur.next
    }
    console.dir(res);
  }

  toString() {
    let cur = this.head,
      len = this.length,
      str = ''

    while (len-- > 0) {
      str += cur.element + ((cur.next && cur != this.tail) ? '->' : '')
      cur = cur.next
    }
    return str
  }

} */

/* let clist = new CircularLinkedList()
// clist.print()
clist.push('a')
clist.unshift('b')
clist.insert('c', 1)
clist.insert('d')
// clist.shift()
// clist.pop()
console.log(clist.toString());
// clist.removeAt(3)
// console.log(clist.indexOf('z'));
// console.log(clist.indexOf('d'));
// console.log(clist.getItem(1));
// console.log(clist.remove('a'));

clist.print() */
/*
// 集合 (使用对象实现)
class Set {
  constructor() {
    this.items = {}
  }

  get size() {
    return Object.keys(this.items).length
  }

  get values() {
    return Object.values(this.items)
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  remove(value) {
    if (this.has(value)) return delete this.items[value]
    return false
  }

  clear() {
    this.items = {}
  }

  // 并集
  union(otherSet) {
    let us = new Set()

    for (const ir in this.values) {
      us.add(ir)
    }
    for (const ir in otherSet.values) {
      us.add(ir)
    }

    return us
  }

  // 交集
  intersection(otherSet) {
    let ins = new Set()

    this.values.forEach(v => {
      if (otherSet.has(v)) {
        ins.add(v)
      }
    })

    return ins
  }

  // 差集 a-b
  difference(otherSet) {
    let ds = new Set()

    this.values.forEach(v => {
      if (!otherSet.has(v)) {
        ds.add(v)
      }
    })

    return ds
  }

  // 子集 判断this是otherSet的子集
  subset(otherSet) {
    if (this.size > otherSet.size) return false
    let values = this.values,
      len = this.size

    while (len-- > 0) {
      if (!otherSet.has(values[len])) return false
    }

    return true
  }

  print() {
    console.log(this.items);
  }

}
*/
/*
// 集合 (使用数组实现)
class Set {
  constructor() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get values() {
    return this.items
  }

  has(value) {
    return this.items.includes(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.items.push(value)
      return true
    }
    return false
  }

  remove(value) {
    if (this.has(value)) {
      this.items.splice(this.items.indexOf(value), 1)
      return true
    }
    return false
  }

  clear() {
    this.items = []
  }

  // 并集
  union(otherSet) {
    let us = new Set()

    this.values.forEach(element => {
      us.add(element)
    });
    otherSet.values.forEach(element => {
      us.add(element)
    });

    return us
  }

  // 交集
  intersection(otherSet) {
    let ins = new Set()

    this.values.forEach(v => {
      if (otherSet.has(v)) {
        ins.add(v)
      }
    })

    return ins
  }

  // 差集 this-otherSet
  difference(otherSet) {
    let ds = new Set()

    this.values.forEach(v => {
      if (!otherSet.has(v)) {
        ds.add(v)
      }
    })

    return ds
  }

  // 子集 判断this是otherSet的子集
  subset(otherSet) {
    if (this.size > otherSet.size) return false
    return this.values.every(item => {
      return otherSet.has(item)
    })
  }

  print() {
    console.log(this.items);
  }

}

let s = new Set()
s.add('a')
// s.add('f')
s.add('b')
s.add('c')
s.add('e')
s.print()
// console.log(s.add('b'))
// console.log(s.has('a'));
// console.log(s.remove('a'));
// console.log(s.remove('c'));
// console.log(s.size);
// console.log(s.values);
let s2 = new Set()
s2.add('a')
s2.add('c')
s2.add('e')
s2.add('b')
s2.add('d')
// console.log(s.union(s2).values)
// console.log(s.intersection(s2).values);
// console.log(s.difference(s2).values);
console.log(s.subset(s2));
*/

/* let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)

// set并集
let union = function (s1, s2) {
  return new Set([...s1, ...s2])
}
console.log(union(setA, setB));

// 交集
let intersection = function (setA, setB) {
  let ret = new Set()
  for (const item of setA) {
    if (setB.has(item)) ret.add(item)
  }
  return ret
}
console.log(intersection(setA, setB));
// let intersectionAb = new Set([x for (x of setA) if (setB.has(x))]);

// 差集
let difference = function(setA, setB) {
  let ret = new Set()
  for (const item of setA) {
    if (!setB.has(item)) ret.add(item)
  }
  return ret
}
console.log(difference(setA, setB)); */
/*
// 字典(映射map)
class Dictionary{
  constructor() {
    this.items = {}
  }

  // 添加或更新数据
  set(k, v){
    this.items[k] = v
    return this.items
  }

  delete(k) {
    if(this.has(k)) return delete this.items[k]
    return false
  }

  has(k) {
    return this.items.hasOwnProperty(k)
    // return k in this.items //in 会获取原型上的属性
  }

  get(k) {
    return this.items[k]
  }

  clear() {
    this.items = {}
  }

  get size() {
    return Object.keys(this.items).length
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }

  getItems() {
    return this.items
  }

}

let dic = new Dictionary()
dic.set('google', 'www.google.com')
dic.set('baidu', 'www.baidu.com')
dic.set('alibaba', 'www.taobao.com')
dic.set('tencent', 'www.qq.com')
console.log(dic.has('google'));
console.log(dic.has('toString'));
console.log(dic.delete('baidu'));
console.log(dic.delete('a'));
console.log(dic.get('alibaba'));
console.log(dic.get('n'));
console.log(dic.keys());
console.log(dic.values());
console.log(dic.getItems());
*/
/*
// 散列表HashTable 或叫 HashMap
class HashTable {
  constructor() {
    this.table = []
  }

  // 散列算法
  djb2HashCode(k) {
    let hash = 5381
    k.split('').forEach(item => {
      hash = hash * 33 + item.charCodeAt(0)
    })
    return hash % 1013

    // let hash = 0
    // for (let i = 0; i < k.length; i++) {
    //   hash += k.charCodeAt(i)
    // }
    // return hash % 33
  }

  // 在数组table中存储对象保存数据,防止散列算法计算的key重复
  put(k, v) {
    let i = this.djb2HashCode(k)
    if (this.table[i] == undefined) {
      this.table[i] = {}
    }
    this.table[i][k] = v
    return this.table
  }

  get(k) {
    let item = this.table[this.djb2HashCode(k)]
    if(item !== undefined) return item[k]
  }

  remove(k) {
    let item = this.table[this.djb2HashCode(k)]
    if(item !== undefined) return delete item[k]
    return false
  }

}
 */
/* let ht = new HashTable()
ht.put('John', 'John')
ht.put('google', 'www.google.com')
ht.put('baidu', 'www.baidu.com')
ht.put('alibaba', 'www.taobao.com')
ht.put('tencent', 'www.qq.com')
ht.put('ab', 'ab')
ht.put('ba', 'ba')
console.log(ht.remove('ab'))
console.log(ht.remove('gogle'))
console.log(ht.get('ba'));
console.log(ht.get('gogle'));
console.log(ht.table); */
/*
// ES6 Map
let hashMap = new Map()
hashMap.set('John', 'John')
hashMap.set('google', 'www.google.com')
hashMap.set('baidu', 'www.baidu.com')
hashMap.set('alibaba', 'www.taobao.com')
hashMap.set('alibaba', 'www.alibaba.com')
hashMap.set('tencent', 'www.qq.com')
hashMap.set('ab', 'ab')
hashMap.set('ba', 'ba')
// console.log(hashMap.has('google'));
// console.log(hashMap.delete('ab'))
// console.log(hashMap.delete('gogle'))
// console.log(hashMap.get('ba'));
// console.log(hashMap.get('gogle'));
console.log(hashMap.size);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap); */

// 树 是一种分层数据的抽象模型
// 二叉树
// 二叉搜索树(BST) 树中的节点称为键key
// class Node {
//   constructor(key) {
//     this.key = key
//     this.left = null
//     this.right = null
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null
//   }

//   insertNode(node, newNode) {
//     // 新键key小于当前键的值则添加到左边left中
//     if (newNode.key < node.key) {
//       if (node.left === null) {
//         node.left = newNode
//       } else {
//         this.insertNode(node.left, newNode)
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode
//       } else {
//         this.insertNode(node.right, newNode)
//       }
//     }
//   }

//   insert(key) {
//     let newNode = new Node(key),
//       root = this.root

//     if (root === null) {
//       this.root = newNode
//     } else {
//       this.insertNode(root, newNode)
//     }
//   }

//   // 中序遍历 常用来排序
//   inOrderTraverseNode(node, cb) {
//     if (node !== null) {
//       this.inOrderTraverseNode(node.left, cb)
//       cb(node.key)
//       this.inOrderTraverseNode(node.right, cb)
//     }
//   }
//   inOrderTraverse(cb) {
//     // 访问者模式
//     this.inOrderTraverseNode(this.root, cb)
//   }

//   // 先序遍历
//   preOrderTraverseNode(node, cb) {
//     if (node) {
//       cb(node.key)
//       this.preOrderTraverseNode(node.left, cb)
//       this.preOrderTraverseNode(node.right, cb)
//     }
//   }
//   preOrderTraverse(cb) {
//     this.preOrderTraverseNode(this.root, cb)
//   }

//   // 后序遍历
//   postOrderTraverseNode(node, cb) {
//     if (node) {
//       this.postOrderTraverseNode(node.left, cb)
//       this.postOrderTraverseNode(node.right, cb)
//       cb(node.key)
//     }
//   }
//   postOrderTraverse(cb) {
//     this.postOrderTraverseNode(this.root, cb)
//   }

//   // 搜索最小值
//   minNode(node) {
//     if (node) {
//       while (node.left) {
//         node = node.left
//       }
//       return node
//     }
//     return null
//   }
//   min() {
//     return this.minNode(this.root)
//   }

//   // 搜索最大值
//   maxNode(node) {
//     if (node) {
//       while (node.right) {
//         node = node.right
//       }
//       return node.key
//     }
//     return null
//   }
//   max() {
//     return this.maxNode(this.root)
//   }

//   // 搜索特定值
//   searchNode(node, key) {
//     if (node === null) return false
//     if (key < node.key) return this.searchNode(node.left, key)
//     if (key > node.key) return this.searchNode(node.right, key)
//     else return node
//   }
//   search(key) {
//     return this.searchNode(this.root, key)
//   }

//   //移除一个节点
//   removeNode(node, key) {
//     if (node === null) return null
//     if (key < node.key) {
//       node.left = this.removeNode(node.left, key)
//       return node
//     }
//     if (key > node.key) {
//       node.right = this.removeNode(node.right, key)
//       return node
//     } else {
//       // 键等于node.key
//       // node是一个叶节点
//       if (node.left === null && node.right === null) {
//         return null
//       }
//       if (node.left === null) {
//         return node.right
//       }
//       if (node.right === null) {
//         return node.left
//       }
//       // 一个有两个子节点的叶节点
//       let aux = this.minNode(node.right)
//       node.key = aux.key
//       node.right = this.removeNode(node.right, aux.key)
//       return node
//     }
//   }
//   remove(key) {
//     this.root = this.removeNode(this.root, key)
//   }

// }

// let bst = new BinarySearchTree()
// bst.insert(11)
// bst.insert(7)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(15)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(6)

// console.log(bst.root);
// bst.inOrderTraverse(v => console.log(v))
// bst.preOrderTraverse(v => console.log(v))
// bst.postOrderTraverse(v => console.log(v))
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.search(6));
// console.log(bst.search(6));
// bst.remove(15)
// console.log(bst.search(15));

// Adelson-Velskii-Landi树（AVL树）自平衡二叉搜索树
// 红黑树

