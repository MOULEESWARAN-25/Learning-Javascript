const { spawn } = require("node:child_process");

console.log(`Parent PID = ${process.pid}`);

const child = spawn(process.execPath, ["slow-output.js"]);

console.log(`Child PID = ${child.pid}`);

child.stdout.on("data", (data) => {
  console.log("[Parent received]:", data.toString().trim());
});

child.stderr.on("data", (data) => {
  console.log("[Child error]:", data.toString());
});

child.on("close", (code) => {
  console.log(`Child process closed with code ${code}`);
});

console.log("Parent continues running...");
