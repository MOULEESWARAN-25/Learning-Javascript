function SurveySparrow(empName, empId, empSalary, empDept) {
  this.empName = empName;
  this.empId = empId;
  this.empSalary = empSalary;
  this.empDept = empDept;
  this.display = function () {
    console.log("Employee Name: " + this.empName);
    console.log("Employee Id: " + this.empId);
    console.log("Employee Salary: " + this.empSalary);
    console.log("Employee Dept: " + this.empDept);
  };
}

const emp1 = new SurveySparrow("Moulee", 1, 1000000, "CSE");
emp1.gender = "male";
// emp1.display();
console.log(emp1);

const emp2 = {
  empName: "Moulee",
  empId: 1,
  empSalary: 1000000,
  empDept: "CSE",
  display: function () {
    console.log(this.empName);
  },
};

// console.log(emp2.address ? emp2.address.street : "Nothing");

//optional chaining
// console.log(emp2?.address?.street);
if (emp1?.display) {
  console.log("True");
}

//Symbol
let empId = Symbol("empId");
// console.log(empId.description);
let employee = {
  [empId]: 1,
  empName: "Moulee",
  empSalary: 1000000,
  empDept: "CSE",
};

console.log(employee);
