function logThis() {
  console.log(this);
}
const obj = {
  logThis,
  logThis1() {
    return logThis();
  },
  logThis2() {
    return obj.logThis();
  },
};

//obj.logThis();
//obj.logThis1();
//obj.logThis2();
