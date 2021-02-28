const { createUser, signInUser } = require("../service/userService");

const signUp = async (req, res, next) => {
  try {
    console.log("new request");
    const newUser = req.body;
    const savedUser = await createUser(newUser);
    res.status(201).json({
      message: "user created succsessfully",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
  }
};

const singIn = async (req, res, next) => {
  try {
    const payload = req.body;
    const token = await signInUser(payload);
    res.status(200).json({
      message: "user loged in ",
      token,
    });
  } catch (error) {
    console.error(error);
  }
};
module.exports = { singIn, signUp };
