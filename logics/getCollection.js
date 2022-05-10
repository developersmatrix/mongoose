const mongoose = require("mongoose");

const getGeneralData = require("./getGeneralData");
const getMonthlyCollection = require("./getMonthlyCollection");

const PtaxGeneral = require("../Models/ptaxGeneral");

const getCollection = async (collectionType, year, month) => {
  let collection = [];
  let startYear,
    endYear = null;

  // logic to determine the financial year
  if (month < 3 && month > -1) {
    startYear = year - 1;
    endYear = year;
  } else if (month > 2 && month < 12) {
    startYear = year;
    endYear = year + 1;
  }

  try {
    let det = await getGeneralData(PtaxGeneral, startYear, endYear);
    console.log(`General data ${det}`);
  } catch (error) {
    console.log(`error ${error}`);
  }

  try {
    let det = await getMonthlyCollection(collectionType, startYear, 0);
    collection = det;
    det = await getMonthlyCollection(collectionType, endYear, 1);
    collection = collection.concat(det);
    console.log(collection);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCollection;
