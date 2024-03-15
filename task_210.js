//make sure no one can modify object

const obj = {
  name: "JS",
  engine: {
    chrome: "v8",
  },
};
function freeze(val) {
  Object.keys(val).forEach((key) => {
    if (typeof val[key] === "object") {
      freeze(val[key]);
    }
  });
  return Object.freeze(val);
}
freeze(obj);
obj.engine.chrome = "React";
console.log(obj);
