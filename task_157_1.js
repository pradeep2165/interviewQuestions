const obj = {
  data: [1, 2, 3],
  processData: function () {
    this.data.forEach(() => {
      console.log(num * this.factor);
    });
  },
  factor: 2,
};

obj.processData();
