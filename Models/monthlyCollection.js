const mongoose = require("mongoose");

const monthlyCollectionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // collectionType: Number,
  year: Number,
  month: Number,
  OBC: Number,
  CYD: Number,
});

module.exports = monthlyCollectionSchema;
