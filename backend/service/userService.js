const User = require("../models/user");
const getSignedToken = require("../utils/signedToken");
const bcrypt = require("bcryptjs");
const createUser = async (payload) => {
  return User.find({ email: payload.email })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        throw new Error("user already exist");
      }
      return bcrypt
        .hash(payload.password, 10)
        .then((hashed) => {
          const newUser = new User({
            username: payload.username,
            password: hashed,
            email: payload.email,
          });
          return newUser.save();
        })
        .catch((err) => {
          throw new Error("All filed required");
        });
    });
};
const signInUser = (payload) => {
  console.log({ payload });
  return User.findOne({ email: payload.email })
    .exec()
    .then((user) => {
      if (!user) {
        console.log(user);
        throw new Error("Please enter email or password");
      } else {
        return bcrypt
          .compare(payload.password, user.password)
          .then((res) => {
            if (res) {
              const token = getSignedToken(user._id);
              return token;
            } else {
              throw new Error("incorect password or email,try again");
            }
          })
          .catch((err) => {
            console.error(err);
            console.log("error here ?");
            throw new Error("All field required");
          });
      }
    });
};

module.exports = { createUser, signInUser };
