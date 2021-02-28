const express = require("express");
const router = express.Router();
let User = require("../models/user");

const { singIn, signUp } = require("../controller/user");

router.get("/", function (req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
router.post("/add", signUp);
router.post("/login", singIn);
router.delete("/delete/:id", function (req, res, next) {
  const { id } = req.params;

  User.findByIdAndRemove({ _id: id }, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
