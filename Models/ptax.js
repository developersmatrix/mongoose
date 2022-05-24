const mongoose = require("mongoose");

const monthlyCollection = require("./monthlyCollection");

const mcSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  year: Number,
  month: Number,
  OBC: Number,
  CYD: Number,
});
// const monthlyC = mongoose.model("MC", mcSchema);

const propertyTaxSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  startYear: Number,
  endYear: Number,
  totalNoOfProperties: Number,
  openingBalance: Number,
  currentYearDemand: Number,

  monthlyCollection: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      year: Number,
      month: Number,
      OBC: Number,
      CYD: Number,
    },
  ],
});

module.exports = mongoose.model("PropertyTax", propertyTaxSchema);
