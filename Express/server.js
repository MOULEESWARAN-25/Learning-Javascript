const express = require("express");
const app = express();
const router = express.Router();

router.get("/:id", (req, res, next) => {
  if (req.params.id == 1) {
    next();
  } else next("router");
});

app.use("/api", router);

app.use("/api", (req, res) => {
  res.status(404).json({ message: "The parent router will not work" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
