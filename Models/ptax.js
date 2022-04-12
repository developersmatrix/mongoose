const mongoose = require("mongoose");

const MonthlyCollection = require("./monthlyCollection.js");

const ptaxSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startYear: String,
  endYear: String,
  totalNoOfProperties: String,
  openingBalance: String,
  currentYearDemand: String,
  monthlyCollection: [
    { type: mongoose.Schema.Types.ObjectId, ref: MonthlyCollection },
  ],
});

module.exports = mongoose.model("Ptax", ptaxSchema);
