const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

module.exports = (req, res, next) => {
  try {
    //get token
    const token = req.headers.authorization.split(" ")[1];
    //because token in header devided in two parts like this "Bearer xxxx.yyyy.zzz" so we should split Bearer

    //decod the token to get the userId
    const decodedToken = jwt.verify(token, process.env.JWT_RANDOM_STRING);

    //get user id
    const userId = decodedToken.userId;

    //add new parameter to request userId to use it in controller
    req.auth = { userId };

    //verifie if the user id decoded is same that the user id in request body
    if (req.body.userId && req.body.userId != userId) {
      throw "invalid userid";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: "Invalid request",
    });
  }
};
