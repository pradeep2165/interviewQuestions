const a = { fn: function () {} };
const b = [function () {}];
const strA = JSON.stringify(a);
const strB = JSON.stringify(b);
console.log(strA);
console.log(strB);
