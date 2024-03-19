function a() {
  var var1 = 1,
    var2 = 2;
}

function b() {
  var var1 = (var2 = 1);
}

a();
b();

console.log(var2);
// console.log(var1);
