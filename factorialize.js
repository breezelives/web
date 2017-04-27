function factorialize(num) {
  var sum = 1;
  if(num > 0) sum = num * factorialize(num - 1);
  return sum;
}

factorialize(5);
