function getSummary(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const fName = "vasuki";
const age = 898;

getSummary`${fName} age is ${age}`;
