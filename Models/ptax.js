const mongoose = require("mongoose");

const ptaxSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startYear: String,
  endYear: String,
  totalNoOfProperties: String,
  openingBalance: String,
  currentYearDemand: String,
  monthlyCollection: [
    {
      year: String,
      month: Number,
      OBC: String,
      CYD: String,
    },
  ],
});

module.exports = mongoose.model("Ptax", ptaxSchema);
