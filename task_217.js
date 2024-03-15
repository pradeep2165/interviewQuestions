new Promise((resolve) => {
  resolve("1️⃣");
  Promise.resolve().then(() => console.log("2️⃣"));
}).then((d) => console.log(d));

console.log("3️⃣");
