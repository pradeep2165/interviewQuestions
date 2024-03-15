const obj = {
  result: 0,
  add: function (n1, n2) {
    this.result = n1 + n2;
    return this;
  },
  mul: function (num) {
    this.result = num + this.result;
    return this;
  },
  sub(num) {
    this.result = this.result - num;
  },
};
obj.add(2, 2).mul(2).sub(2);
console.log(obj.result);
