function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const numberGenerator = generateNumbers();

console.log(numberGenerator.next());

console.log(numberGenerator.next());

console.log(numberGenerator.next());

console.log(numberGenerator.next());

function* countTo(limit) {
  for (let number = 1; number <= limit; number++) {
    yield number;
  }
}

const firstFiveNumbers = [...countTo(5)];
console.log(firstFiveNumbers);

const range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let number = this.from; number <= this.to; number++) {
      yield number;
    }
  },
};

for (const number of range) {
  console.log(number);
}

function* readPages(pages) {
  for (const page of pages) {
    yield page;
  }
}

const pages = [["User 1", "User 2"], ["User 3", "User 4"], ["User 5"]];

for (const page of readPages(pages)) {
  console.log("Processing page:", page);
}

function* generateLetters() {
  yield* ["A", "B", "C"];
}

console.log([...generateLetters()]);
