const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const usersRouter = require("./routes/users.route");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/users", usersRouter);
// route not found

app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "server not found",
  });
});

module.exports = app;
