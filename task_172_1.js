//write polyfill for map;
const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  const result = [];
  this.forEach(function (e, i) {
    const newElement = cb(e, i);
    result.push(newElement);
  });
  return result;
};
const newArray = arr.myMap(function (e, i) {
  return e * i;
});

console.log(newArray);
