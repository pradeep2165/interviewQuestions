function show() {
  console.log("0", arguments[0]);
  console.log("len", arguments.length);
  for (let x of arguments) {
    console.log("x", x);
  }
  console.log(Array.isArray(arguments));
}
show(21, "JS");
