//how to make passing argument mandatory?
function check() {
  throw new Error("name is required");
}
function show(name = check()) {
  //Name is required
  console.log(name);
}
show();
