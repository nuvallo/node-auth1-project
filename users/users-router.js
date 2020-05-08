const router = require("express").Router();
const db = require("./users-model");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(await db.find());
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ errorMessage: "Could not retrieve users" });
  }
});

module.exports = router;
