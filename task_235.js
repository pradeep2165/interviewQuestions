const obj = Object.create(null);
const keyToCheck = "randomkey";
if (obj.hasOwnProperty(keyToCheck)) {
  console.log("Key Found");
} else {
  console.log("Key Not Found");
}
