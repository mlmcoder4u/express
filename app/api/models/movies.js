const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  releaseDate: {
    type: Date,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
