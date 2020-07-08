const router = require("express").Router();
const Users = require("./user-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const addUser = await Users.add(req.body);

    res.status(201).json(addUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
