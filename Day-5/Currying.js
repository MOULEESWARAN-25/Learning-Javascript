function buildApiUrl(server, version, resource, id) {
  return `${server}/api/${version}/${resource}/${id}`;
}

console.log(buildApiUrl("https://example.com", "v1", "users", 42));

function apiUrl(server) {
  return function (version) {
    return function (resource) {
      return function (id) {
        return `${server}/api/${version}/${resource}/${id}`;
      };
    };
  };
}

console.log(apiUrl("https://example.com")("v1")("users")(42));

const companyApi = apiUrl("https://example.com");
const companyApiV1 = companyApi("v1");
const userUrl = companyApiV1("users");
const orderUrl = companyApiV1("orders");

console.log(userUrl(42));
console.log(orderUrl(900));

function filterTasks(status) {
  return function (tasks) {
    return tasks.filter((task) => task.status === status);
  };
}

const completedTasks = filterTasks("completed");
const tasks = [
  { title: "Learn functions", status: "completed" },
  { title: "Practice currying", status: "in-progress" },
];

console.log(completedTasks(tasks));
