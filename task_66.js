const person = {
  name: "FrontendMaster",
};

Object.seal(person);
person.name = "backendMaster";
person.skill = "js";

delete person.name;
console.log(person);
