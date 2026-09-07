const express = require("express");
const multer = require("multer");
// const { WebSocketServer } = require("ws");

const port = 3000;
const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const uploadSessions = new Map();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/api/data", (request, response) => {
  response.json({
    message: "Hello from fetch()",
    time: new Date().toISOString(),
  });
});

app.get("/api/search", (request, response) => {
  const query = request.query.query || "";
  response.json({
    query,
    results: [`Learn about ${query}`, `Practice ${query}`],
  });
});

app.get("/api/slow", (request, response) => {
  setTimeout(
    () => response.json({ message: "The slow request finished" }),
    5000,
  );
});

app.get("/api/download", (request, response) => {
  const chunks = [
    "First download chunk\n",
    "Second download chunk\n",
    "Final download chunk\n",
  ];
  const body = chunks.join("");
  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Content-Length", Buffer.byteLength(body));
  let index = 0;
  const timer = setInterval(() => {
    response.write(chunks[index]);
    index += 1;
    if (index === chunks.length) {
      clearInterval(timer);
      response.end();
    }
  }, 600);
  request.on("close", () => clearInterval(timer));
});

app.post("/api/form", upload.single("lessonFile"), (request, response) => {
  response.json({
    fields: request.body,
    file: request.file
      ? { name: request.file.originalname, size: request.file.size }
      : null,
  });
});

app.options("/api/cors", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.sendStatus(204);
});

app.get("/api/cors", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.json({
    message: "This response includes Access-Control-Allow-Origin: *",
  });
});

app.post("/api/upload/start", (request, response) => {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  uploadSessions.set(id, Buffer.alloc(0));
  response.json({ id, offset: 0 });
});

app.post(
  "/api/upload/:id",
  express.raw({ type: "application/octet-stream", limit: "50mb" }),
  (request, response) => {
    const existing = uploadSessions.get(request.params.id);
    if (!existing)
      return response.status(404).json({ message: "Upload session not found" });

    const offset = Number(request.headers["x-start-byte"] || 0);
    if (offset !== existing.length) {
      return response.status(409).json({ offset: existing.length });
    }

    uploadSessions.set(
      request.params.id,
      Buffer.concat([existing, request.body]),
    );
    response.json({ offset: uploadSessions.get(request.params.id).length });
  },
);

app.get("/api/upload/:id", (request, response) => {
  const data = uploadSessions.get(request.params.id);
  if (!data)
    return response.status(404).json({ message: "Upload session not found" });
  response.json({ offset: data.length });
});

/*
app.get("/events", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Connection", "keep-alive");
  response.setHeader("Content-Type", "text/event-stream");
  response.flushHeaders();

  response.write("data: Connected to the SSE server\n\n");
  console.log("SSE client connected");

  let count = 0;

  const interval = setInterval(() => {
    count += 1;
    response.write(`data: Server update ${count}\n\n`);
    console.log(`SSE update sent: ${count}`);
  }, 1000);

  request.on("close", () => {
    clearInterval(interval);
    console.log("SSE client disconnected");
  });
});
*/

const httpServer = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

/*
const webSocketServer = new WebSocketServer({ noServer: true });

httpServer.on("upgrade", (request, socket, head) => {
  webSocketServer.handleUpgrade(request, socket, head, (webSocket) => {
    webSocketServer.emit("connection", webSocket, request);
  });
});

webSocketServer.on("connection", (socket) => {
  console.log("Client connected");

  socket.send("Connected to the WebSocket server");

  socket.on("message", (message) => {
    console.log(`Client message: ${message}`);
    socket.send(`Server received: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error) => {
    console.error("WebSocket error:", error.message);
  });
});
*/
