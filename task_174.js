const Obj = {};
const set1 = new Set();
const set2 = new Set();
set1.add(Obj);
set1.add(Obj);
set2.add({});
set2.add({});
console.log(set1.size);
console.log(set2.size);
