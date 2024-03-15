localStorage.setItem("pass", false);
const isPass = localStorage.getItem("pass");
if (isPass) {
  console.log("congrats you Cleared Exam");
} else {
  console.log(`Better Luck Next Time`);
}
