function addZero(n) {
    return n < 10 ? '0' + n : n;
}

/* 
 *格式化日期函数
 *支持输入毫秒数(时间戳)
 *new Date().format('2015/7/04 12:02:9', 'yyyy-mm-dd hh:ii:ss');
 *new Date().format(1463450259123, 'yyyy-mm-dd hh:ii:ss');
*/
function formatDate(str, date) {
  var d = date ? new Date(date) : new Date();
  if (isNaN(d.getDate())) {
    return 'Invalid Date';
  }
  var str = str || 'yyyy-mm-dd hh:ii:ss';
  str = str.replace(/yyyy/gi, d.getFullYear());
  str = str.replace(/mm/gi, addZero(d.getMonth() + 1));
  str = str.replace(/dd/gi, addZero(d.getDate()));
  str = str.replace(/hh/gi, addZero(d.getHours()));
  str = str.replace(/ii/gi, addZero(d.getMinutes()));
  str = str.replace(/ss/gi, addZero(d.getSeconds()));
  return str;
}

/*
 * 计算当前日期偏移 
 * offset 表示日期偏移量 
 * 'd-7' 过去7天 
 * 'm+1' 下个月 
 * 'y-2' 两年前
 */
function calcDate(offset, date) {
	var y, m, d, today = date ? new Date(date) : new Date();
	y = (y = offset.match(/y[+|-]\d+/)) ? parseInt(y[0].substring(1)) : 0;
	m = (m = offset.match(/m[+|-]\d+/)) ? parseInt(m[0].substring(1)) : 0;
	d = (d = offset.match(/d[+|-]\d+/)) ? parseInt(d[0].substring(1)) : 0;
	today.setFullYear(today.getFullYear() + y);
	today.setMonth(today.getMonth() + m);
	today.setDate(today.getDate() + d);
	return formatDate('YYYY-mm-dd', today.getTime());
}

// 中文转Unicode
String.prototype.toUnicode = function(str){
	var _arr = [];
    for(var i = str.length; i--;){
        _arr.unshift('\\u' + str.charCodeAt(i).toString(16));
    }
    return _arr.join('');
}
console.log(toUnicode('重置'));

//简单的获得代码执行的时间差
console.time(1)
// do something
console.timeEnd(1);

//打字机效果
function writeStr(str, id, step){
	var i = 0,
	el = document.getElementById(id),
	interval = setInterval(function () {
	  if (i < str.length) el.appendChild(document.createTextNode(str[i++]))
	  else clearInterval(interval)
	}, step || 100)
}
writeStr(str, 'p')

//判断字符串是否回文
function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str == str.split('').reverse().join('');
}

//每个单词首字母大写，其余小写
function titleCase(str){
  if(str = str.trim()){
    return str.toLowerCase().split(' ').map(function(item){
      return item[0].toUpperCase() + item.slice(1);
    }).join(' ');
  } else {
    return -1;
  }
}

function truncate(str, num){
	if(num > 0 && str.length > num ){
        	if(num > 3) num -= 3
        	return str.slice(0, num) + '...'  
	}
	return str
}

function chunk(arr, size){
	if(Array.isArray(arr) && size > 0){
		var res = [], len = Math.ceil(arr.length / size), offset;
		for(var i = 0; i < len; i++){
			offset = i * size;
			res.push(arr.slice(offset, offset + size))
        }
		return res
	}
}

//生成n个随机字母和数字
function getRandom(n){
	var str = '';
	for (var i = n; i > 0; i--) {
		str += parseInt(Math.random() * 36).toString(36);
	}
	return str;
}

//生成随机颜色
function getRandomColors(){
	var str = '#';
	for (var i = 6; i > 0; i--) {
		str += parseInt(Math.random() * 16).toString(16);
	}
	return str;
}

//数组中对象按照指定属性排序
var data = [
  {
    name: 'Zachary',
    age: 28
  },
  {
    name: 'Nicholas',
    age: 29
  }
];
function compareFun(prop) {
  return function (obj1, obj2) {
    var v1 = obj1[prop];
    var v2 = obj2[prop];
    if (v1 < v2) {
      return - 1;
    } else if (v1 > v2) {
      return 1;
    } else {
      return 0;
    }
  }
}
data.sort(compareFun('name'));

//计算阶乘
//方法一
function factorial(num) {
  if (num <= 1) return 1;
  //  return num * factorial(num - 1)
  return num * arguments.callee(num - 1);
}
//方法二,严格模式下可用
var factorial = (function f(n){
	if(n <= 1) return 1;
	else return n * f(n - 1);
});
factorial( 3)

function htmlEscape(text) {
	return text.replace(/[<>"&]/g, function(match, pos, originalText) {
		switch(match) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			case '&':
				return '&amp;';
		}
	});
}

document.write(htmlEscape('<h1 class="bold">h1&text</h1>'));

//callee和caller
function outer() {
  return inner();
}
function inner() {
  console.log(arguments.callee.caller);
  return arguments.callee.caller;
}
outer()

// 求数组最大(小)值
function maxOfArr(arr) {
	return Math.max.apply(Math, arr);
}
function minOfArr(arr) {
	return Math.min.apply(Math, arr);
}

/* 取指定范围的随机整数数
没有参数默认返回随机0/1
一个参数n,返回0~n的整数,包括0和n
两个参数a,b, 返回a~b之间的整数包括a和b
*/ 
function rangeNum() {
	var start = 0, end = 1;

	if(arguments.length === 1) {
		end = arguments[0];
	} else if(arguments.length === 2) {
		start = arguments[0];
		end = arguments[1];
	}
	
	var n = end - start + 1;
	return Math.floor(Math.random() * n + start);
}
