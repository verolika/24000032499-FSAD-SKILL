const mongoose = require("mongoose");

const SlideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Slide", SlideSchema);
