class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    //some code
  }
}

const usr1 = new User("X");
const usr2 = new User("Y");
usr1.login === usr2.login;
