let user = {
  name: "Moulee",
  age: 21,

  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

function makeCall(callback) {
  callback();
}

makeCall(user.greet);
