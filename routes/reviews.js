const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/", (req, res) => {
  res.send("Reviews");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
