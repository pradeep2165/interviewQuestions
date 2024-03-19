function Hero() {
  this.make = "Bhagat Singh";
  return { make: "Vivekanand" };
}

const myHero = new Hero();
console.log(myHero.make);
