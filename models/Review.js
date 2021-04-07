const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ReviewSchema = mongoose.Schema({
  kanji: {
    type: String,
    unique: true
  },
  kana: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

ReviewSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Review", ReviewSchema);
