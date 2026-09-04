// const database = {
//   users: [
//     {
//       id: 1,
//       name: "Arun",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//     },
//     {
//       id: 3,
//       name: "Priya",
//     },
//   ],

//   orders: [
//     {
//       id: 101,
//       userId: 1,
//       product: "Laptop",
//       amount: 75000,
//     },
//     {
//       id: 102,
//       userId: 1,
//       product: "Mouse",
//       amount: 1500,
//     },
//     {
//       id: 103,
//       userId: 2,
//       product: "Keyboard",
//       amount: 5000,
//     },
//     {
//       id: 104,
//       userId: 3,
//       product: "Monitor",
//       amount: 30000,
//     },
//   ],

//   payments: [
//     {
//       id: 1001,
//       userId: 1,
//       orderId: 101,
//       amount: 75000,
//       status: "success",
//     },
//     {
//       id: 1002,
//       userId: 1,
//       orderId: 102,
//       amount: 1500,
//       status: "success",
//     },
//     {
//       id: 1003,
//       userId: 2,
//       orderId: 103,
//       amount: 5000,
//       status: "failed",
//     },
//     {
//       id: 1004,
//       userId: 3,
//       orderId: 104,
//       amount: 30000,
//       status: "success",
//     },
//   ],
// };

// function getUser(userId, callback) {
//   setTimeout(() => {
//     const user = database.users.find((user) => user.id === userId);

//     if (!user) {
//       callback(new Error("User not found"));
//       return;
//     }

//     callback(null, user);
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     const orders = database.orders.filter((order) => order.userId === userId);

//     if (orders.length === 0) {
//       callback(new Error("No orders found"));
//       return;
//     }

//     callback(null, orders);
//   }, 1000);
// }

// function getPayments(userId, callback) {
//   setTimeout(() => {
//     const payments = database.payments.filter(
//       (payment) => payment.userId === userId,
//     );

//     if (payments.length === 0) {
//       callback(new Error("No payments found"));
//       return;
//     }

//     callback(null, payments);
//   }, 1000);
// }

// const userId = 1;

// getUser(userId, (error, user) => {
//   if (error) {
//     console.log("Error:", error.message);
//     return;
//   }

//   console.log("User found:");
//   console.log(user);

//   getOrders(user.id, (error, orders) => {
//     if (error) {
//       console.log("Error:", error.message);
//       return;
//     }

//     console.log("Orders found:");
//     console.log(orders);

//     getPayments(user.id, (error, payments) => {
//       if (error) {
//         console.log("Error:", error.message);
//         return;
//       }

//       console.log("Payments found:");
//       console.log(payments);
//     });
//   });
// });

// // Promises
// function getUserPromise(userId) {
//   return new Promise((resolve, reject) => {
//     getUser(userId, (error, user) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       resolve(user);
//     });
//   });
// }

// function getOrdersPromise(userId) {
//   return new Promise((resolve, reject) => {
//     getOrders(userId, (error, orders) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       resolve(orders);
//     });
//   });
// }

// function getPaymentsPromise(userId) {
//   return new Promise((resolve, reject) => {
//     getPayments(userId, (error, payments) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       resolve(payments);
//     });
//   });
// }

// getUserPromise(userId)
//   .then((user) => {
//     console.log("Promise user found:");
//     console.log(user);
//     return getOrdersPromise(user.id);
//   })
//   .then((orders) => {
//     console.log("Promise orders found:");
//     console.log(orders);
//     return getPaymentsPromise(userId);
//   })
//   .then((payments) => {
//     console.log("Promise payments found:");
//     console.log(payments);
//   })
//   .catch((error) => {
//     console.log("Promise error:", error.message);
//   })
//   .finally(() => {
//     console.log("Promise process finished");
//   });

// // Async and await
// async function loadUserData() {
//   try {
//     const user = await getUserPromise(userId);
//     console.log("Async user found:");
//     console.log(user);

//     const orders = await getOrdersPromise(user.id);
//     console.log("Async orders found:");
//     console.log(orders);

//     const payments = await getPaymentsPromise(user.id);
//     console.log("Async payments found:");
//     console.log(payments);
//   } catch (error) {
//     console.log("Async error:", error.message);
//   }
// }

// loadUserData();

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Arun");
    }, 2000);
  });
}

const result = await getUser();

console.log(result);
