const code = {
  type: "web",
};
const reactJS = {
  name: "js",
  web: true,
};

console.log(reactJS[code.type]);
console.log(reactJS[reactJS["type"]]);
console.log(code.type.web);
console.log(code.type);
