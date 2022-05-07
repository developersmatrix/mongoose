const mongoose = require("mongoose");

const getGeneralData = require("./getGeneralData");

const PtaxGeneral = require("../Models/ptaxGeneral");
const ptaxColl = require("../Models/monthlyCollection");

const getCollection = async (collectionType, year, month) => {
  let collection = [];
  let det = await getGeneralData(PtaxGeneral);
  console.log(`gahdg ${det}`);
  ptaxColl
    .find()
    .where({ year: 2021, collectionType: 2 })
    .where("month")
    .gt(2)
    .lt(12)
    .exec()
    .then((data) => {
      collection = [...data];
      console.log(collection);
    })
    .catch((error) => console.log(error));
};

module.exports = getCollection;
