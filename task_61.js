const user = {
  email: "abc@domain.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("lastest@email.in");
console.log(user.email);
