function getMessage() {
  throw "Hello World";
}

function sayHello() {
  try {
    const data = getMessage();
    console.log("worked!", data);
  } catch (e) {
    console.log("an Error:", e);
  }
}

sayHello();
