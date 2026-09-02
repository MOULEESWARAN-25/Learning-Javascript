// const click = (check, night, morning) => {
//   if (check === "Night") {
//     night();
//     return;
//   }
//   morning();
// };

// click(
//   "Night",
//   () => {
//     console.log("Good Night Sweet dreams");
//   },
//   () => {
//     console.log("Good Morning");
//   },
// );

// //hoisting

// // console.log(a);
// console.log(b);
// // expression();
// // expression2();

// declaration();

// // let a = 10;
// var b = 20;

// function declaration() {
//   console.log("This is Function declaration");
// }

// var expression = () => {
//   console.log("This is Function expression");
// };

// let expression2 = function () {
//   console.log("This is Function expression");
// };

let user = {
  name: "Moulee",
  age: 21,
  dept: "CSE",
  about: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Dept: ${this.dept}`);
  },
};

let admin = user;
user = null;
admin.about();
