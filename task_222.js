let i = 0;
function show() {
  console.log(i++);
  show();
}
show();
//resolve the bug
