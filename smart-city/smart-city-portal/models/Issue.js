const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  user: String,
  problem: String,
  location: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Issue", IssueSchema);
