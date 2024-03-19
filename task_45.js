function* generatorFn(i) {
  console.log("A");
  yield i;
  console.log("B");
  yield i * 2;
}

const gen = generatorFn(10);
console.log(gen.next().value);
console.log(gen.next().value);
