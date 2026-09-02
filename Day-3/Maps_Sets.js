const map = new Map();

const addUser = (userId, User) => {
  if (!map.has(userId)) {
    map.set(userId, User);
    return;
  }
  console.log("User already exists");
};

const getUser = (userId) => {
  if (!map.has(userId)) {
    console.log("User not found");
    return;
  }
  console.log(map.get(userId));
};

const deleteUser = (userId) => {
  if (!map.has(userId)) {
    console.log("User not found");
    return;
  }
  map.delete(userId);
  console.log("User deleted");
};

const clearMap = () => {
  map.clear();
  console.log("Map cleared");
};

function User(id, name, age, dept) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.dept = dept;
}

map.set(1, new User(1, "Moulee", 21, "CSE"));
map.set(2, new User(2, "Hari", 20, "CSE"));
map.set(3, new User(3, "Ravi", 22, "CSE"));
map.set(4, new User(4, "Karthik", 23, "CSE"));

// console.log(map);

for (let key in map) {
  console.log(key);
}
getUser(1);
getUser(5);

deleteUser(2);
deleteUser(5);

clearMap();

//WeakMap
// WeakMap is not iterable
// it has no keys(), values(), or entries() methods
// therefore you cannot loop through it with for...of
//The first difference between Map and WeakMap is that keys must be objects, not primitive values:

const normalMap = new Map();
let emp1 = {
  name: "Moulee",
  age: 21,
  dept: "CSE",
};

let Remark = {
  emp1: "Very Very Good",
};
// console.log(Remark);
normalMap.set(emp1, Remark);

const weakmap = new WeakMap();

weakmap.set(emp1, Remark);

console.log(weakmap);

// A WeakMap supports only these methods:

// set(key, value)
// get(key)
// has(key)
// delete(key)
console.log(weakmap.has(emp1));
console.log(weakmap.get(emp1));
console.log(normalMap);

emp1 = null;

console.log(weakmap.has(emp1));
console.log(weakmap.get(emp1));
console.log(normalMap);

// WeakMap is used for attaching data to objects in a memory-safe way, especially when you do not want the data to keep those objects alive.
console.log(normalMap.entries());
