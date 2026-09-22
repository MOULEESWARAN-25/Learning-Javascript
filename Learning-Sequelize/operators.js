const { DataTypes, Op } = require("sequelize");
const sequelize = require("./db");

const Employee = sequelize.define(
  "Employee",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "operator_employees",
  },
);

async function main() {
  await sequelize.authenticate();
  await Employee.sync();

  await Employee.bulkCreate(
    [
      { name: "Moulee", age: 22, email: "moulee@gmail.com" },
      { name: "Hari", age: 25, email: "hari@gmail.com" },
      { name: "Mukesh", age: 30, email: "mukesh@gmail.com" },
      { name: "Adhavan", age: 35, email: "adhavan@gmail.com" },
      { name: "Monish", age: 40, email: "monish@gmail.com" },
    ],
    { ignoreDuplicates: true },
  );

  console.log(
    "Op.eq",
    await Employee.findAll({ where: { age: { [Op.eq]: 25 } } }),
  );
  console.log(
    "Op.ne",
    await Employee.findAll({ where: { age: { [Op.ne]: 25 } } }),
  );
  console.log(
    "Op.gt",
    await Employee.findAll({ where: { age: { [Op.gt]: 30 } } }),
  );
  console.log(
    "Op.gte",
    await Employee.findAll({ where: { age: { [Op.gte]: 30 } } }),
  );
  console.log(
    "Op.lt",
    await Employee.findAll({ where: { age: { [Op.lt]: 30 } } }),
  );
  console.log(
    "Op.lte",
    await Employee.findAll({ where: { age: { [Op.lte]: 30 } } }),
  );
  console.log(
    "Op.in",
    await Employee.findAll({ where: { age: { [Op.in]: [22, 30, 40] } } }),
  );
  console.log(
    "Op.notIn",
    await Employee.findAll({ where: { age: { [Op.notIn]: [22, 30, 40] } } }),
  );
  console.log(
    "Op.like",
    await Employee.findAll({ where: { name: { [Op.like]: "M%" } } }),
  );
  console.log(
    "Op.iLike",
    await Employee.findAll({ where: { name: { [Op.iLike]: "%mou%" } } }),
  );
  console.log(
    "Op.between",
    await Employee.findAll({ where: { age: { [Op.between]: [25, 35] } } }),
  );
  console.log(
    "Op.notBetween",
    await Employee.findAll({ where: { age: { [Op.notBetween]: [25, 35] } } }),
  );
}

main()
  .catch((error) => console.error(error))
  .finally(() => sequelize.close());
