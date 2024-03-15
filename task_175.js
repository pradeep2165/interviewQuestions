//complete the function shuffle. It should return new array everytime.

function shuffle(data) {
  return data
    .map(function (a) {
      return { value: a, random: Math.random() };
    })
    .sort(function (a, b) {
      return a.random - b.random;
    })
    .map(function (d) {
      return d.value;
    });
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const a1 = shuffle(arr);
const a2 = shuffle(arr);
const a3 = shuffle(arr);
console.log(a1, a2, a3);
