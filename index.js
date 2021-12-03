var express = require("express");
var app = express();

var users = require("./dbs");

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    var user = users.filter((x) => x.name == req.query.name);
    if (user) res.send(user);
    else res.send(undefined);
  } else {
    res.send(users);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
