const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    book_name: { type: String, required: true },
    book_description: { type: String, required: true },
    book_price: { type: Number, required: true },
    book_image: { type: String, required: true },
    book_content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
