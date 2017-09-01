/* 
 *格式化日期函数
 *支持输入毫秒数(时间戳)
 *new Date().format('2015/7/04 12:02:9', 'yyyy-mm-dd hh:ii:ss');
 *new Date().format(1463450259123, 'yyyy-mm-dd hh:ii:ss');
*/
Date.prototype.format = function (date, str) {
    return formatDate(date, str);
}
function addZero(n) {
    return n < 10 ? '0' + n : n;
}
function formatDate(date, str) {
  var d = date ? new Date(date) : new Date();
  var str = str || 'yyyy-mm-dd hh:ii:ss';
  str = str.replace(/yyyy/gi, d.getFullYear());
  str = str.replace(/mm/gi, addZero(d.getMonth() + 1));
  str = str.replace(/dd/gi, addZero(d.getDate()));
  str = str.replace(/hh/gi, addZero(d.getHours()));
  str = str.replace(/ii/gi, addZero(d.getMinutes()));
  str = str.replace(/ss/gi, addZero(d.getSeconds()));
  return str;
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
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    //     return num * factorial(num - 1)
    return num * arguments.callee(num - 1);
  }
}
factorial( 3)


//callee和caller
function outer() {
  return inner();
}
function inner() {
  console.log(arguments.callee.caller);
  return arguments.callee.caller;
}
outer()
