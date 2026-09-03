// let User = {
//   temp: "This is a temporary property",
//   canSee() {
//     console.log("Humans can see");
//   },
//   canHear(name) {
//     console.log(`Yes, ${name} can hear`);
//   },
//   canWalk() {
//     console.log("Humans can walk");
//   },
// };

// let moulee = Object.create(User);
// moulee.name = "Moulee";
// moulee.age = 21;
// moulee.temp = "This is a temporary property for Moulee";
// //   __proto__: User,
// console.log(moulee);
// moulee.canSee();
// moulee.canHear(moulee.name);
// moulee.canWalk();
// console.log(moulee.temp);

// let hari = {
//   __proto__: User,
// };

// hari.canHear("Hari");

// console.log("1. Object.create()");
// const arun = Object.create(User);
// arun.name = "Arun";
// arun.canSee();

// console.log("2. __proto__ in an object literal");
// const priya = {
//   name: "Priya",
//   __proto__: User,
// };
// priya.canWalk();

// console.log("3. Constructor function and prototype");
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.introduce = function () {
//   console.log(`I am ${this.name}`);
// };

// const person = new Person("Kumar");
// person.introduce();

// console.log("5. Class extends");
// class Employee {
//   constructor(name) {
//     this.name = name;
//   }

//   work() {
//     console.log(`${this.name} is working`);
//   }
// }

// class Manager extends Employee {
//   manage() {
//     console.log(`${this.name} is managing`);
//   }
// }

// const manager = new Manager("Meena");
// manager.work();
// manager.manage();

let parent = {
  name: "Lioness",
  husband: "Lion",
};

console.log(parent);

let child = Object.create(parent);
child.name = "Cub";
console.log(child);
