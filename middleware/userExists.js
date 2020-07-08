const Users = require("../users/user-model");

function userExists(req, res, next) {
  return async (req, res, next) => {
    try {
      const { username } = req.body;
      const user = await Users.findBy({ username });

      if (user) {
        return res.status(409).json({
          message: "Username is already taken",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userExists;
