var God = {
  slogan: "JaiShreeRam",
};

var God2 = Object.create(God);
delete God2.slogan;
console.log(God2.slogan);
