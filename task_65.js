const person = {
  name: "FrontendMaster",
  address: {
    city: "MdnDocs",
  },
};

Object.freeze(person);
person.name = null;
person.address.city = null;
console.log(person);
