//make sure sum function works with n numbe of arguments

function sum(n1, n2) {
  return n1 + n2;
}
//ans
// function sum(...nums) {
//   return nums.reduce(function (a, n) {
//     return a + n;
//   }, 0);
// }

console.log(sum(2, 3));
console.log(sum(2, 3, 4));
console.log(sum(2, 1, 1, 7));
console.log(sum(2, 3, 4, 66, 7));
console.log(sum(2, 3, -1, 2, 2, 4));
