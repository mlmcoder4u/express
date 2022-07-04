const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const users = require("./routes/users");
const movies = require("./routes/movie");
const mongoose = require("./config/database");

app.set("secretKey", "qwerty");

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error")
);

app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/movies", movies);

app.get("/", (req, res) => {
  res.json({ tutorial: "Crud app" });
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
