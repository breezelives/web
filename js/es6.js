'use strict';

// 获取全局对象
let getGlobal = () => {
  if(typeof window !== 'undefined') { return window; }
  if(typeof self !== 'undefined') { return self; }
  if(typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object!');
}
const global = getGlobal();

const log = console.log;
const write = (s) => {
  document.write('<br>'+s);
}
let echo = write;

// 彻底冻结对象(递归)
// let freezeObj = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach((k) => {
//     if(typeof obj[k] === 'object') {
//       freezeObj(obj[k])  ;
//     }
//   })
// }

// let o = {a: 1, b: 2, c: {a: 3, c: 4}};
// freezeObj(o);

// o.c.a = 11;

// let [a, b, c] = [1,2,3];
// let [d = true, e = 'e'] = [,undefined];
// let f = function () { console.log('f'); return 'f'};
// let x = [1][1] === undefined ? f() : [1][0];

// let x;
// ({x} = {x: 1});

// ({} = [true, false]);
// ({} = {a: 'a'});
// ({} = 'a');
// ({} = 123);
// ({} = []);
// let {a} = 123;

// let {log, sin, cos} = Math;

// [[1, 2], [3, 4]].map(([a, b]) => a + b);
// [1, undefined, 3].map((x = 'yes') => x);

// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// move({})
// move({x: 1, y: 2})
// move({x: 1})

// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };

// let { id, status, data: number } = jsonData;

// console.log(id, status, number);

/* jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
}; */

// let ho = 'hh';
// log(h\u{6f});

// log('\u{1F680}' === '\uD83D\uDE80')

// log('\z' === 'z' ) // true
// log('\172' === 'z') // true
// log('\x7A' === 'z') // true
// log('\u007A' === 'z') // true
// log('\u{7A}' === 'z') // true

// let s = '𠮷a';
// for (let ch of s) {
//   log(ch.codePointAt(0).toString(16));
// }

// 测试32位字符
// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF;
// }

// String.fromCodePoint(0x20bb7)

// write(String.fromCodePoint(0x78, 0x1f680, 0x79))

// let text = String.fromCodePoint(0x20BB7, 0x1f680);

// for (let i = 0; i < text.length; i++) {
//   log(text[i]);
// }

// for (let c of text) {
//   log(c);
// }

// let basket = {
//   count: 10,
//   onSale: 20
// };
// $('body').append(`
//   There are <b>${basket.count}</b> items in your basket,
//   <em>${basket.onSale}</em>
//   are on sale!
// `);

// $('body').append(`

//   <ul>
//   <li>asdf</li>
//   <li>asdf</li>
//   <li>asdf</li>

//   </ul>
// `)

// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
// const data = [
//   { first: 'Jane', last: 'Bond' },
//   { first: 'Lars', last: 'Croft' },
// ];

// log(tmpl(data));

// let str = 'return ' + '`Hello ${name}!`';
// let f = new Function('name', str)
// f('jack')

// let str = (name) => `Hello ${name}`;
// let f = eval.call(null, str);
// f('jack')

/* let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}

let parse = eval(compile(template));
$('#list')[0].innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });
 */

/*
// 正确返回字符串长度
const strlen = str => {
  let res = str.match(/[\s\S]/gu);
  return res ? res.length : 0;
}

const strlen = str => [...str].length;
 */

/*
// 判断最小误差
function withinErrorMargin(left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}

Math.round(1.2) */

/* function f(x = 1, y) {
  return [x, y];
}

const sortNumbers = (...numbers) => numbers.sort();

function add(...values) {
  let sum = 0;
  for(let v of values) {
    sum += v;
  }
  return sum;
}*/

/* const push = (arr, ...items) => {
  arr.push(...items);
  return arr;
}

push([], 2, 3, 4); */

/* let id = 12;

function foo() {
  setTimeout(() => log('id', this.id), 100);
}

foo.call({id: 3}); */

/* const Timer = function() {
  this.s1 = 0;
  this.s2 = 0;

  setInterval(() => this.s1++, 1000);

  setInterval(function(){
    this.s2++;
  }, 1000);
}

let timer = new Timer(); */

// log(timer.s1)
// setInterval(() => log(timer.s1, timer.s2), 1000);

/* let handler = {
  id: 123,
  init() {
    document.addEventListener('click', event => this.doSomething(event.type), false);
  },
  doSomething(type) {
    log('Handling ' + type + ' for ' + this.id);
  }
}

handler.init(); */

/* function foo() {
  return () => {
    return () => {
      return () => {
        // console.log('id:', this.id);
        log(arguments)
      };
    };
  };
} */

/* (function() {
  return [
    (() => this.x).bind({ x: 'inner' })()
  ];
}).call({ x: 'outer' }); */

/* let insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }
  })
})

insert(12).into([11,3]).after(11) */

/* const pipeline = (...funcs) =>
  val =>
    funcs.reduce(
      (a, b) => b(a), val
    );


const a = a => a + 1;
const b = a => a * 2;
const c = pipeline(a, b)
b(a(6)) === c(6) // true */

/* const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj.hasOwnProperty(key);
}

let o = {
  a: 1,
  b: 'b'
} */

/* function factorial(n, total = 1) {
  if (isNaN(n) || n < 1) throw(new Error('The parameters must be number'))
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) */

// 计算 Fibonacci 数列
/* function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};
  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
} */

/* function f() {
  log(f.caller); //error
} */

// 求出一个数组最大元素
// Math.max(...[14, 3, 77]);

/* let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2); */

// new Date(...[2015, 1, 1]);

/* let map = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]);
let arr = [...map.keys()]; */

/* const go = function*() {
  yield 1;
  yield 2;
  yield 3;
};
[...go()] */

/* let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
Array.from(arrayLike, x => x+'$');

Array.from([1,,2,,3], x => x || 0);

let typesOf = function () {
  return Array.from(arguments, v => typeof v);
}
typesOf(1, null, undefined, [], NaN); */

// Array.from({length: 4}, x => 'js');

/* let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear }; */

/*const shallowMerge = (target, source) => Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

const shapeType = {
  triangle: Symbol()
};

const getArea = (shape, options) => {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, {width: 10, height: 5});*/

/*let iframe = document.createElement('iframe');
iframe.src = 'http://baidu.com/';
document.body.appendChild(iframe);
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
*/

/*const a = require('./mod.js');
log(a.foo);*/

/*class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}*/

// const s = new Set();

// [1,2,3,4,2,3,2,1,3].forEach(x => s.add(x));

// for (let i of s) {
//   log(i);
// }

