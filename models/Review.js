const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  kanji: {
    type: String,
  },
  kana: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
