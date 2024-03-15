//Print A-Z All Alphapets

const arr = [...new Array(26)];
let start = 65;
arr.forEach(function (_, i) {
  console.log(String.fromCharCode(start++));
});
