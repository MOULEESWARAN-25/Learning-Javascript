console.log(`Child started. PID = ${process.pid}`);

process.on("message", (message) => {
  console.log("Child received:", message);

  if (message.task === "double") {
    const result = message.number * 2;

    process.send({
      result: result,
    });
  }
});
