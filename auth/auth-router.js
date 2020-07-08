const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/user-model");
const userExists = require("../middleware/userExists");

router.post("/register", userExists(), async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 14);

    const newUser = await Users.add({
      username,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
