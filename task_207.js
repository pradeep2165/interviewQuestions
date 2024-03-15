const obj = {
  show: function () {
    console.log("js is heart");
  },
};
//call show funciton 2 diff ways with out using ()
// way1
obj.show``;
// way2
new obj.show();
