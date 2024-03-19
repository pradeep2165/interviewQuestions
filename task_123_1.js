//create a function add without using a function and arrow funciton

const a = 10;
const b = 20;
const add = new Function("a", "b", "console.log(a+b);");
add(10, 20);
