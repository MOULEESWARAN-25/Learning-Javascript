const { exec } = require("node:child_process");

console.log(`Parent PID = ${process.pid}`);

exec("node slow-output.js", (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  console.log("----- CHILD COMPLETELY FINISHED -----");

  console.log("Child output:");
  console.log(stdout);
});

console.log("Parent continues running...");
