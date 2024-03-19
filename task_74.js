const obj = { name: "js" };
obj.ref = obj;

const str = JSON.stringify(obj);
console.log(str);
