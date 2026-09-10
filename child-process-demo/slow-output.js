console.log(`Child started. PID = ${process.pid}`);

let count = 0;

const timer = setInterval(() => {
  count++;

  console.log(`Child output ${count}. PID = ${process.pid}`);

  if (count === 3) {
    clearInterval(timer);
    console.log("Child finished");
  }
}, 1000);
