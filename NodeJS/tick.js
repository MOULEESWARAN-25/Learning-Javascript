console.log("Start");

setTimeout(() => {
  console.log("Timeout completed");
}, 1000);

fetch("https://jsonplaceholder.typicode.com/posts/1").then(async (response) => {
  console.log("Fetch completed:", response);
});

queueMicrotask(() => {
  console.log("Microtask completed");
});

setImmediate(() => {
  console.log("Immediate completed");
});

process.nextTick(() => {
  console.log("Next tick completed");
});

console.log("End");
