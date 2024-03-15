function grandParent() {
  // console.log('grandParent');
  parent();
}

function parent() {
  // console.log('parent');
  child();
}

function child() {
  // console.log('child');
  innerChild();
}
function innerChild() {
  // console.log('innerChild')
  console.trace;
}
grandParent();
