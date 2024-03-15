const key = "constructor";
const obj = {};
if (obj[key]) {
  console.log("Hello Admin");
} else {
  console.log("Hello Guest");
}

if (key in obj) {
  console.log("Hello Admin");
} else {
  console.log("Hello Guest");
}
