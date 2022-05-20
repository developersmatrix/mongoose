const mongoose = require("mongoose");

const ptax = require("../Models/ptax");

const updatePtax = async () => {
  const query = await ptax.find();

  console.log(query);
};

module.exports = updatePtax;
