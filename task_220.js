const obj = { name: "js", lib: "React" };

//write polyfill
Object.prototype.forEach = function (cb) {
  Object.keys(this).forEach((key) => {
    cb(key, this[key]);
  });
};
// ---------------
obj.forEach(function (key, value) {
  console.log(key, value);
});
