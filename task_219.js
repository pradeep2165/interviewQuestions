const arr = ["🐾", "📍", "🎦", "🤳", "🚌"];

const sortedArray = getSorted(arr);
function getSorted(data) {
  //   return data.sort();
  // return [...data].sort()
  return data.toSorted();
}

console.log("sorted", sortedArray);
console.log("before", arr);
