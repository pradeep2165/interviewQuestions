function String2(val) {
  if (new.target) {
    return new String(val);
  }
  return String(val);
}
console.log(typeof new String(""));
console.log(typeof String(""));
console.log(typeof new String2(""));
console.log(typeof String2(""));
