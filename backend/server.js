const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//! database connection

const dbURL = "mongodb://localhost:27017/finalDB";

mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true, createIndexes: true },
  (err) => {
    if (err) {
      console.log("Error connecting to: " + dbURL);
    } else {
      console.log("Connected to: " + dbURL);
    }
  }
);
//! routing

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

app.use("/books", booksRouter);
app.use("/users", usersRouter);

//! listen to server

app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
