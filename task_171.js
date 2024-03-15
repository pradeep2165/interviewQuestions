const arr = [1, 2, 5, [4, 5, [6, [3]]]];
//o/p [1,4,5,4,5,6,4]
//Complete flat function
function flat(data) {
  const ar = [];
  if (Array.isArray(data)) {
    data.forEach(function (e) {
      ar.push(...flat(e));
    });
  } else {
    ar.push(data);
  }
}

console.log(flat(arr));
