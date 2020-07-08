const express = require("express");
const helmet = require("helmet");
const userRouter = require("../users/user-router");
const authRouter = require("../auth/auth-router");
const db = require("../data/config");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const server = express();

server.use(helmet());
server.use(express.json());

server.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "keep it secret, keep it safe",
    store: new KnexSessionStore({
      knex: db,
      createtable: true,
    }),
  })
);

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Something went wrong...",
  });
});

server.get("/", (req, res) => {
  res.send({ message: "Welcome to API" });
});

module.exports = server;
