async function getData() {
  return await Promise.resolve("🙉");
}

const data = getData();
console.log(data);
