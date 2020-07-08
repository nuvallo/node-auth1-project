const express = require("express");
const userRouter = require("../users/user-router");
const authRouter = require("../auth/auth-router");

const server = express();
server.use(express.json());
server.use("/auth", authRouter);
server.use("/users", userRouter);
server.use(
  session({
    resave: false, // Aviods recreating sessions that have not changed
    saveUninitialized: false, //comply with GDPR laws
    secret: "keep it secret, keep it safe",
    store: new KnexSessionStore({
      knex: db, // Configured instance of knex
      createtable: true, // if the session table does not exist, will create one
    }),
  })
);

server.get("/", (req, res) => {
  res.send({ message: "Welcome to API" });
});

module.exports = server;
