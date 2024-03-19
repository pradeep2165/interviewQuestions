const obj = {};
Object.defineProperty(obj, "a", {
  value: "char",
});
console.log(obj.a);
console.log(Object.keys(obj));
