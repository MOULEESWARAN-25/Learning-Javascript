const express = require("express");

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(logger);
app.use(express.json());
app.use("/users", userRoutes);

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    res.status(400).json({ message: "Invalid JSON" });
    return;
  }

  next(error);
});

app.get("/user/:id", (req, res, next) => {
  if (req.params.id === "0") next();
  else next();
});

app.get("/user/:id", (req, res) => {
  res.send("special");
});
app.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found bro" });
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
