const http = require("http");
const { URL } = require("url");

let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "David", age: 30 },
];

function logger(req, res, next) {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

function sendJSON(res, statusCode, data) {
  console.log(data);
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

function getUsers(req, res) {
  sendJSON(res, 200, users);
}

function getUser(req, res, id) {
  const user = users.find((user) => user.id === id);

  if (!user) {
    sendJSON(res, 404, { message: "User not found" });
    return;
  }

  sendJSON(res, 200, user);
}

async function createUser(req, res) {
  try {
    const body = await getRequestBody(req);
    console.log(body);
    const newUser = {
      id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
      name: body.name,
      age: body.age,
    };

    users.push(newUser);
    sendJSON(res, 201, newUser);
  } catch (error) {
    sendJSON(res, 400, { message: "Invalid JSON" });
  }
}

async function updateUser(req, res, id) {
  try {
    const user = users.find((user) => user.id === id);

    if (!user) {
      sendJSON(res, 404, { message: "User not found" });
      return;
    }

    const body = await getRequestBody(req);
    console.log(body);
    user.name = body.name ?? user.name;
    user.age = body.age ?? user.age;
    sendJSON(res, 200, user);
  } catch (error) {
    sendJSON(res, 400, { message: "Invalid JSON" });
  }
}

function deleteUser(req, res, id) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    sendJSON(res, 404, { message: "User not found" });
    return;
  }

  const deletedUser = users.splice(index, 1)[0];
  sendJSON(res, 200, { message: "User deleted", user: deletedUser });
}

async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = url.pathname;
  const userMatch = pathname.match(/^\/users\/(\d+)$/);

  if (req.method === "GET" && pathname === "/users") {
    console.log(req.body);
    getUsers(req, res);
    return;
  }

  if (userMatch && req.method === "GET") {
    getUser(req, res, Number(userMatch[1]));
    return;
  }

  if (req.method === "POST" && pathname === "/users") {
    await createUser(req, res);
    return;
  }

  if (userMatch && req.method === "PUT") {
    await updateUser(req, res, Number(userMatch[1]));
    return;
  }

  if (userMatch && req.method === "DELETE") {
    deleteUser(req, res, Number(userMatch[1]));
    return;
  }

  sendJSON(res, 404, { message: "Route not found" });
}

const port = Number(process.env.PORT) || 3000;
const server = http.createServer((req, res) => {
  logger(req, res, () => {
    router(req, res).catch(() => {
      sendJSON(res, 500, { message: "Internal server error" });
    });
  });
});

server.listen(port, () => {
  console.log(`Node server running on http://localhost:${port}`);
});
