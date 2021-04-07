const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  kanji: {
    type: String,
  },
  kana: {
    type: String,
  },
  reviews: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
