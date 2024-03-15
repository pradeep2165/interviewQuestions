//check if a given char is in uppercase
//give 2 solutions

function isUpperCase(char) {
  // sol1
  // return char.toUpperCase() === char;
  sol2;
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
}

console.log(isUpperCase("A"));
console.log(isUpperCase("a"));
console.log(isUpperCase("z"));
console.log(isUpperCase("Y"));
