function isPass() {
  console.log("inside isPass");
  return 0;
}
function isTopper() {
  console.log("inside isTopper");
  return false;
}

let msg = isPass() || isTopper();
console.log(`msg= {msg}`);
