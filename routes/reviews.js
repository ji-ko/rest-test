const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/", (req, res) => {
  res.send("Reviews");
});

router.post("/", (req, res) => {
  const review = new Review({
    kanji: req.body.kanji,
    kana: req.body.kana,
  });

  review
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
