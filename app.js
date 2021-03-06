const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const reviewsRoute = require("./routes/reviews");
app.use("/reviews", reviewsRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URI}/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to database");
  }
);

app.listen(3333, () => console.log("Server started"));
