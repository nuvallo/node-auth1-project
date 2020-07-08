const router = require("express").Router();
const Users = require("./user-model");
const restrict = require("../middleware/restrict");

// Get users
router.get("/", restrict(), async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// Get user by ID
router.get("/:id", restrict(), async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
