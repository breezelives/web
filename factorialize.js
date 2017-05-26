//计算阶乘
function factorialize(num) {
  var sum = 1;
  if(num > 0) sum = num * factorialize(num - 1);
  return sum;
}

function factorialize(num) {
  var sum = 1;
  while(num>0){
	  sum *= num--;
  }
  return sum;
}

factorialize(5);
