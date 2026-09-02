// // reference object

// const user1 = {
//   name: "Moulee",
//   age: 21,
//   dept: "CSE",
//   address: {
//     street: "123 Main St",
//   },
// };

// const user2 = user1;

// user2.address.street = "456 Elm St";

// console.log(user1.address.street);
// console.log(user2.address.street);

// // shallow copy
// const user3 = {
//   name: "Moulee",
//   age: 21,
//   dept: "CSE",
//   address: {
//     street: "123 Main St",
//   },
// };

// const user4 = { ...user3 };
// user4.name = "Hari";
// user4.address.street = "456 Elm St";
// console.log(user3);
// console.log(user4);

// // deep copy
// const user5 = {
//   name: "Moulee",
//   age: 21,
//   dept: "CSE",
//   address: {
//     street: "123 Main St",
//   },
// };

// // const user6 = structuredClone(user5);
// const user6 = JSON.parse(JSON.stringify(user5));
// // console.log(JSON.stringify(user5));
// user6.name = "Hari";
// user6.address.street = "456 Elm St";
// console.log(user5);
// console.log(user6);

// // array of objects
// const users = [
//   {
//     name: "Moulee",
//     age: 21,
//   },
//   {
//     name: "Hari",
//     age: 20,
//   },
// ];

// const users2 = [...users];
// users2[0].name = "Moulee1";
// console.log(users);
// console.log(users2);
