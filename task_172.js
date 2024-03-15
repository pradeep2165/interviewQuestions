//make sure only numbers are possed in add function
//throw error if any other data type is passed

function check(...args) {
  for (let x of args) {
    if (typeof x !== "number") {
      throw new Error();
    }
  }
}

function add(n1, n2) {
  check(n1, n2);
  return n1 + n2;
}

console.log(add("a", 23));
console.log(add(23, 23));
