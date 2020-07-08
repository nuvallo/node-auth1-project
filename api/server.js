const express = require("express");
const userRouter = require("../users/user-router");
const authRouter = require("../auth/auth-router");

const server = express();
server.use(express.json());
server.use("/auth", authRouter);
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.send({ message: "Welcome to API" });
});

module.exports = server;
