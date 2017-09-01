/* 规范说明
    1.变量,函数,属性,参数使用驼峰式命名(第一个字母小写,剩下每个单词的首字母大写)
    2.每条语句以分号(;)结尾
    3.使用4个空格缩进
    详细说明见下面示例
*/

// 变量必须先声明后使用,避免全局变量污染
var varName;

// 等号(=)左右加空格
var varName1 = 'string';

// 声明多个变量要换行
var varName2,
    varName3;
var varName4 = 4,
    varName5 = 5;

// typeof操作符后面不要加括号
typeof varName

// 字符串类型使用单引号('')
var str = 'string';

// number类型浮点数值.前面要加数字
var num = 0.2;

// 转换数值的(+, -)和变量之间不要加空格
var a = +num,
    b = -num;

// (++, --, !, !!)与变量之间不要加空格
a++;
flag = !isEmpty;

// (+, -, *, /, %, &&, ||, !=, !==, <, >, <=, >=, ==, ===, +=, -=, *=, /=, %=)操作符在两个变量之间左右加空格
var c = a + b;
a *= 2;

// 三元运算符
variable = booleanExpression ? trueValue : falseValue;

// if条件判断语句,始终使用花括号({})
if (a >= b && c > d) {
    // statement;
} else if(a < c) {
    // statement;
} else {
    // statement;
}

// 循环语句
do {
    // statement
} while (i < 10);

while (i < 10) {
    // statement
}

for (var i = 0; i < 10; i++) {
    // statement
}

//switch语句
switch (expression) {
    case value:
        // statement;
        break;
    case value2:
        // statement;
        break;
    default:
        // statement;
}

//函数声明
//函数表达式定义函数,后面加分号(;)
var fun = function (a, b, c) {
    // statement;
    return ret;
};

function funName(a, b, c) {
    // statement;
    return ret;
}

//关于多行字符串拼接的情况,在行尾添加反斜杠(\)
str = '<table>\
    <tr>\
        <td>1</td>\
        <td>2</td>\
        <td>3</td>\
    </tr>\
</table>';
