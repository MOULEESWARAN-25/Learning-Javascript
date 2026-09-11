let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "David", age: 30 },
];

function getUsers(req, res) {
  res.status(200).json(users);
}

function getUser(req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
}

function createUser(req, res) {
  const newUser = {
    id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  res.status(201).json(newUser);
}

function updateUser(req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name ?? user.name;
  user.age = req.body.age ?? user.age;
  res.status(200).json(user);
}

function deleteUser(req, res) {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.status(200).json({ message: "User deleted", user: deletedUser });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
