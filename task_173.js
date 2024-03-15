//consvert this set to array using 3 different ways

const mySet = new Set([1, 2, 3]);
const way1 = [...mySet];
const way2 = Array.from(mySet);
const way3 = new Array(...mySet);

console.log(`way1=${way1}, way2=${way2}, way3=${way3}`);
