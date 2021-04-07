const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.json({ errorMessage: err });
  }
});

router.post("/", async (req, res) => {
  const review = new Review({
    kanji: req.body.kanji,
    kana: req.body.kana,
  });

  const savedReview = await review.save();
  res.json(savedReview);
});

module.exports = router;
