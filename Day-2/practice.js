// if (true) {
//   const a = 10;
//   let b = 10;
//   var c = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log("1" + 1 + 5 / 2);
// console.log("Moulee" == "1");
// console.log(false == 0);

// let user = {
//   name: "Moulee",
// };
// user.id = 1;

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
// console.log(users);

// const a = {
//   name: "Moulee",
//   age: 21,
// };

// const b = a;
// a.dept = "CSE";
// b.name = "Hari";
// console.log(a);
// console.log(b);
// let name = "Moulee";
// let message = `Hello Moulee
// Welcome to our application.
// Have a great day!`;
// console.log(message);

// console.log(Number("Moulee"));
// console.log(Number("   123   "));
// console.log(Number("123z"));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(false));

// console.log(+"1" + +"2");
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n" - 2);

let height = null;
let width = null;
let area = height ?? 100 * width ?? 50;
console.log(area);
