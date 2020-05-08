const express = require("express");
const helmet = require("helmet");
const usersRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());

server.use(express.json());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ message: "Welcome to API" });
});

module.exports = server;
