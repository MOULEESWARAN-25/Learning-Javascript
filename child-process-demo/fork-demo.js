const { fork } = require("node:child_process");

console.log(`Parent PID = ${process.pid}`);

const child = fork("./fork-child.js");

console.log(`Child PID = ${child.pid}`);

child.on("message", (message) => {
  console.log("Parent received:", message);

  child.disconnect();
});

child.send({
  task: "double",
  number: 10,
});

console.log("Parent continues...");
