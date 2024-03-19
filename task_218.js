const arr = [
  { name: "X", age: 1 },
  { name: "D", age: 13 },
  { name: "U", age: 2 },
  { name: "A", age: 9 },
];
//sorting code
arr.sort(function (a, b) {
  if (a.age < b.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }
  return 0;
});

console.log(arr);
