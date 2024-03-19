const magicObject = {
  flag: 1,
  get value() {
    return this.flag++;
  },
};
if (magicObject.value === 1 && magicObject.value === 2 && magicObject.value === 3) {
  console.log("i love js");
}
