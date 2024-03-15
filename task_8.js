class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}
const tommy = new Lizard({ newcolor: "orange" });

console.log(tommy.colorChange("blue"));
console.log(Lizard.colorChange("green"));
