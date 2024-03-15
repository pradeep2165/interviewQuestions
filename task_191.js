//Give 3 ways to differentiate between float and integer

function isInteger(num) {
  // sol1
  // return num %1 === 0;
  // sol2
  // return !`${num}`.includes(".");
  // sol3
  return Number.isInteger(num);
}

console.log(isInteger(2));
console.log(isInteger(12.5));
console.log(isInteger(-7.1));
