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

router.delete("/", async (req, res) => {
  try {
    await Review.deleteOne({
      kanji: req.body.kanji,
    }).orFail();
    res.status(200).send('Kanji succesfully removed');
  } catch (err) {
    res.json({ errorMessage: "Not found" });
  }
});

router.patch("/", async (req, res) => {
  try {
    const kanjiToUpdate = await Review.findOne({ kanji: req.body.kanji });
    const kanjiToUpdateId = kanjiToUpdate._id;
    const updatedKanji = await Review.updateOne(
      { _id: kanjiToUpdateId },
      { $set: { kana: req.body.kana } }
    );
    res.json(updatedKanji);
  } catch (err) {
    res.json({ errorMessage: "Not found" });
  }
});

module.exports = router;
