let flag = 0;
setInterval(function () {
  console.log("InsideInterval");
  console.log(flag++);
}, 1000);
