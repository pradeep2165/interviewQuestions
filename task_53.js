class Person {
  constructor() {
    this.name = "Frontend";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Master";
  }
};

const member = new Person();
console.log(member.name);
