const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send({ message: "Welcome to API" });
});

module.exports = server;
