const getData = () => {
  console.log(this);
};

const obj = { user: 1 };
getData.call(obj);
