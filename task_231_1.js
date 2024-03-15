function isPass() {
  console.log("inside isPass");
  return "Pass";
}
function isTopper() {
  console.log("inside isTopper");
  return "Topper";
}

let msg = isPass() && isTopper();
console.log(`msg= {msg}`);
