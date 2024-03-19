const dataMap = new WeekSet();
let person = { name: "JS" };
dataMap.set(person, "TVA");
console.log(dataMap, get(person));
person = null;
console.log(dataMap.get(person));
