const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  kanji: {
    type: String,
    required: true,
  },
  kana: {
    type: String,
  },
  reviews: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
