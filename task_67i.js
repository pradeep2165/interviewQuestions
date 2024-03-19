const handler = {
  set: () => console.log("Added a new property!"),
  get: () => {
    console.log("Accessed a property!");
  },
};
const person = new Proxy({}, handler);
person.name = "frontendMaster";
person.name;
