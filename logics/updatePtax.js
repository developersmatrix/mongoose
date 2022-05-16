const mongoose = require("mongoose");

const ptax = require("../Models/ptax");

const updatePtax = async () => {
  const query = await ptax.find({}).populate("monthlyCollection").exec();
  console.log(query);
};

module.exports = updatePtax;
