const magicObject = {
  val: 1,
  get a() {
    return this.val++;
  },
};
console.log(magicObject.a);
console.log(magicObject.a);
console.log(magicObject.a);
