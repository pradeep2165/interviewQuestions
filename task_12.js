function Human(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
const MrX = new Human("Mr.", "X");
const Rock = Human("The", "Rock");

console.log(MrX);
console.log(Rock);
