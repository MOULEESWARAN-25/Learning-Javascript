const { execFile } = require("node:child_process");

console.log(`Parent PID = ${process.pid}`);

execFile(process.execPath, ["slow-output.js"], (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  console.log("----- CHILD COMPLETELY FINISHED -----");

  console.log("Child output:");
  console.log(stdout);
});

console.log("Parent continues running...");
