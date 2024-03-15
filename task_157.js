function test() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

const result = test();
console.log(result);
