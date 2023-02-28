const jwt = require("jsonwebtoken");
const User = require("../models/user");
const keys = require("../config/keys");

const requireUserAuth = async (req, res, next) => {
  const cookieName = keys.cookie_name.customer;
  const token = req.cookies[cookieName];

  console.log(req.cookies);

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, keys.secret_key);
    // req.user = decoded;
    req.user = await User.findById(decoded.id);
    console.log("decoded:", decoded);
    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid token, authorization denied" });
    // throw new Error("Invalid token, authorization denied");
  }
};

module.exports = {
  requireUserAuth,
};
