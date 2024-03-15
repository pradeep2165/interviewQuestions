//throw Error if user tries to set age with number less than 20
//show 2 ways

const obj = {
  age: 8,
  setage(newVal) {
    if (newVal < 20) {
      throw new Error();
    }
  },
};

const newAge = 19;

console.log("should not come");
obj.age = newAge;
