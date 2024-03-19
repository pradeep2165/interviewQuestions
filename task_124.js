const str = "hare krishna hare krishna krishna krishna hare hare";

//count the charactors

let obj = {};
for (x of str) {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
}

console.log(obj);
