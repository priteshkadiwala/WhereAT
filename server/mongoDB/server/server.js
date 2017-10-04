var express = require("express");
var database = requre("../db.js");
var server = express();
var port = 3000;

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {

  console.log("Server is running...listening to port 3000");

});
