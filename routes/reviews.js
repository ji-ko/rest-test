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

router.get("/:reviewId", async (req, res) => {
  try {
    const review = await Review.findOne({
      kanji: req.params.reviewId,
    }).orFail();
    res.json(review);
  } catch (err) {
    res.send(`Error: '${req.params.reviewId}' was not found in the database.`)
  }
});

module.exports = router;
