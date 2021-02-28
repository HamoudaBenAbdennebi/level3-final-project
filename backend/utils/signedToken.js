const jwt = require("jsonwebtoken");
const jwtSecret = require("./jwtSecret");

const getSignedToken = (_id) => {
  return jwt.sign({ _id }, jwtSecret, { expiresIn: "6hr" });
};
module.exports = getSignedToken;
