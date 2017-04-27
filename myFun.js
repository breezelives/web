/* 
 *格式化日期函数
 *支持输入毫秒数(时间戳)
 *new Date().format('YYYY-mm-dd HH:ii:ss', '2015/7/04 12:02:9');
 *new Date().format('YYYY-mm-dd HH:ii:ss', '1463450259123');
*/
Date.prototype.format = function (str, date) {
  return formatDate(str, date);
}
function formatDate(str, date) {
  var d = new Date();
  function addZero(n) {
    return n < 10 ? '0' + n : n;
  }
  if (date) {
    if (isNaN(date)) {
      d = new Date(date);
    } else {
      d.setTime(date);
    }
  }
  var str = str || 'YYYY-mm-dd HH:ii:ss';
  str = str.replace(/YYYY/ig, d.getFullYear());
  str = str.replace(/mm/ig, addZero(d.getMonth() + 1));
  str = str.replace(/dd/ig, addZero(d.getDate()));
  str = str.replace(/HH/ig, addZero(d.getHours()));
  str = str.replace(/ii/ig, addZero(d.getMinutes()));
  str = str.replace(/ss/ig, addZero(d.getSeconds()));
  return str;
}

// 中文转Unicode
String.prototype.toUnicode = function(str){
	var _arr = [];
    for(var i=str.length; i--;){
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
