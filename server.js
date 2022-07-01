const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const users = require("./routes/users");
const mongoose = require("./config/database");

app.set("secretKey", "qwerty");

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error")
);

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", users);

app.get("/", (req, res) => {
  res.json({ tutorial: "Crud app" });
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
