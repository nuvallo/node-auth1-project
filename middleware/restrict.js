function restrict(req, res, next) {
  const errorMessage = {
    message: "Invalid Credentials",
  };

  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json(errorMessage);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = restrict;
