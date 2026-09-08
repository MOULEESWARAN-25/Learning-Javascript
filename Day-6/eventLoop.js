console.log("Start");
let i = 0;
let range = 1e6;
function count() {
  for (; i < range; i++) {
    i++;
  }
  console.log("Counted to", range);
  if (range == 1e6) {
    range = 1e7;
    setTimeout(count);
  }
}
count();
console.log("End");
