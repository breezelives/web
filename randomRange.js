//生成在两个指定的数之间的随机数
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
