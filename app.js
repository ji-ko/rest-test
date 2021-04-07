const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Index");
});

mongoose.connect(
  "mongodb+srv://<user>:<pwd>@<url>/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to database");
  }
);

app.listen(3333, () => console.log("Server started"));
