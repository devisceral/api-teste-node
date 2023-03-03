const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/hello", (req, res) => {
  const data = { name: "John", age: 30, email: "john@example.com" };
  res.json(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
