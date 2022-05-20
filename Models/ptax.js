const mongoose = require("mongoose");

const mcSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  collectionType: Number,
  year: Number,
  month: Number,
  OBC: Number,
  CYD: Number,
});
// const monthlyC = mongoose.model("MC", mcSchema);

const propertyTaxSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startYear: String,
  endYear: String,
  totalNoOfProperties: String,
  openingBalance: String,
  currentYearDemand: String,
  monthlyCollection: [mcSchema],

  startYear: Number,
  endYear: Number,
  totalNoOfProperties: Number,
  openingBalance: Number,
  currentYearDemand: Number,
  monthlyCollection: [monthlyCollection],
});

module.exports = mongoose.model("PropertyTax", propertyTaxSchema);
