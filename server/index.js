const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
