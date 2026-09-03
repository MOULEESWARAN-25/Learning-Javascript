let user = {
  name: "Moulee",
  age: 21,
  get fullName() {
    return `Mr ${this.name}`;
  },
  set fullName(value) {
    this.name = value;
  },
};

console.log(user.fullName);

user.fullName = "Hari ram";

console.log(user.fullName);

