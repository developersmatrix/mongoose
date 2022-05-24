const mongoose = require("mongoose");

const ptax = require("../Models/ptax");

const getMonthlyCollection = require("./getMonthlyCollection");

const updatePtax = () => {
  ptax
    .findOne({ startYear: 2021 })
    .then((doc) => console.log(doc.monthlyCollection));
};

module.exports = updatePtax;
