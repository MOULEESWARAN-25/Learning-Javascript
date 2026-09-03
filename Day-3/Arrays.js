// let user = ["Moulee", "Mukesh", "Gowtham", "Adhavan", "Kanish"];
// console.log(user);
// user.push("Hari");
// console.log(user);
// user.unshift("Keerthivasan");
// console.log(user);
// user.pop();
// console.log(user);
// user.shift();
// console.log(user);
// let add = ["Abishek", "Monish"];
// user = [...user, ...add];
// console.log(user);

// //we need to use 'in' when we want to iterate over the objects

// const users = {
//   name: "Moulee",
//   age: 25,
//   email: "moulee@example.com",
// };

// for (let user in users) {
//   console.log(user);
// }

// //we need to use 'of' when we want to iterate over the values of an array or string
// for (let trav of user) {
//   console.log(trav);
// }

// for (let i of "Moulee") {
//   console.log(i);
// }

// let fruits = [];
// fruits[123] = "Apple";

// console.log(fruits);
// let arr = new Array(1);
// console.log(arr);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.concat(arr2));

// //concat() can accept arrays and single values directly, while the spread operator expands only iterable values; a non-iterable value can still be added as a regular array element after the spread.

// let numbers = [10, 20, 30];

// let trav = numbers[Symbol.iterator]();

// while (true) {
//   const result = trav.next();
//   if (result.done) {
//     break;
//   }
//   console.log(result.value);
// }

// // Arguments Object
// function display(firstName, lastName, dept, company) {
//   for (let trav of arguments) {
//     console.log(trav);
//   }
// }

// display(
//   "Moulee",
//   "Hari",
//   {
//     dept: "CSE",
//     count: 160,
//   },
//   "SurveySparrow",
// );

const products = [
  { name: "Keyboard", price: 1500, inStock: true, category: "Accessories" },
  { name: "Monitor", price: 12000, inStock: true, category: "Hardware" },
  { name: "Mouse", price: 800, inStock: false, category: "Accessories" },
];

const productNames = products.map((product) => {
  return { name: product.name, price: product.price };
});
console.log(productNames);

const availableProducts = products.filter((product) => product.inStock);
console.log(availableProducts);

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);
console.log(totalPrice);
