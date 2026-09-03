// let temp = setTimeout(() => {
//   console.log("This message is displayed after 5 seconds");
// }, 5000);

// // clearTimeout(temp);

// let timerId = setInterval(() => {
//   console.log("tick");
// }, 2000);

// // clearInterval(timerId);

// let timerId = setInterval(() => {
//   console.log("tick");
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("stopped");
// }, 12000);

// setTimeout(function run() {
//   console.log("tick");

//   setTimeout(run, 2000);
// });

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(() => user.sayHi(), 15000);

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// user.sayHi();

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi, 1000);

user = {
  firstName: "Jane",
  sayHi() {
    console.log("Another user in setTimeout!");
  },
};
