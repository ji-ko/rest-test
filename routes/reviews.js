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

router.get("/:kanji", async (req, res) => {
  try {
    const review = await Review.findOne({
      kanji: req.params.kanji,
    }).orFail();
    res.json(review);
  } catch (err) {
    res.send(`Error: '${req.params.kanji}' was not found in the database.`);
  }
});

router.delete("/:kanji", async (req, res) => {
  try {
    const kanjiToFind = await Review.findOne({ kanji: req.params.kanji });
    const kanjiId = kanjiToFind._id;
    const kanjiToRemove = await Review.deleteOne({ kanji: req.params.kanji });
    res.json({ removedKanji: req.params.kanji });
  } catch (err) {
    res.json({ errorMessage: "Not found" });
  }
});

module.exports = router;
