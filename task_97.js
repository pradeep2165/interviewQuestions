const Person = {
  lang: "js",
  show: function () {
    console.log(`Hi, ${this.lang}`);
  },
};

let fn = Person.show;
fn();
