function asyncTask() {
  return new Promise((res) => {
    res();
  });
}
const x = asyncTask()
  .then(() => {
    console.log("First");
  })
  .catch()
  .then(() => {
    console.log("Second");
  });
