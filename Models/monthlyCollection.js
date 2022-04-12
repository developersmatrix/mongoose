const mongoose = require("mongoose");

const monthlyCollectionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  year: String,
  month: String,
  OBC: String,
  CYD: String,
});

module.exports = mongoose.model("MonthlyCollection", monthlyCollectionSchema);
