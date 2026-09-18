const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

async function main() {
  await sequelize.authenticate();
  console.log("Database connection authenticated.");

  await User.sync({ force: true });

  const createdUser = await User.create({
    name: "Moulee",
    email: "moulee@gmail.com",
  });
  console.log("createdUser:", createdUser);
  console.log("createdUser:", createdUser.toJSON());

  await User.bulkCreate([
    { name: "Hari", email: "hari@gmail.com" },
    { name: "Mukesh", email: "mukesh@gmail.com" },
    { name: "Adhavan", email: "adhavan@gmail.com" },
  ]);

  const user = await User.findByPk(createdUser.id);
  console.log("one user:", user.name);

  const firstUser = await User.findOne({ where: { name: "Moulee" } });
  console.log("findOne:", firstUser.email);

  const users = await User.findAll({ order: [["id", "ASC"]] });
  console.log("number of users:", users.length);
  users.forEach((currentUser) => console.log(currentUser.name));

  await user.update({ name: "Mouleeswaran" });
  user.email = "mouleeswaran@gmail.com";
  await user.save();
  await user.reload();
  console.log("updated instance:", user.toJSON());

  console.log("count:", await User.count());
  console.log("findAndCountAll:", await User.findAndCountAll({ limit: 2 }));
  console.log("max id:", await User.max("id"));
  console.log("min id:", await User.min("id"));
  console.log("sum ids:", await User.sum("id"));

  await User.update(
    { name: "Updated Mouleeswaran" },
    { where: { name: "Mouleeswaran" } },
  );
  await User.destroy({ where: { name: "Mouleeswaran" } });

  await user.destroy();
}

main().catch((error) => console.error(error));
