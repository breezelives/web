// module.exports = function sum(a, b) {
//   return a + b
// }
let n = 0
let sum = (a, b) => {
  return a + b
}

let counter = () => {
  return ++n
}

module.exports = {
  sum,
  counter
}
