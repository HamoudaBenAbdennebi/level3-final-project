const express = require("express");
const router = express.Router();
let Book = require("../models/book");

router.get("/", function (req, res) {
  Book.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});
router.post("/add", function (req, res) {
  const newBook = new Book(req.body);
  newBook
    .save()
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});
router.delete("/delete/:id", function (req, res, next) {
  const { id } = req.params;

  Book.findByIdAndRemove({ _id: id }, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});
module.exports = router;
