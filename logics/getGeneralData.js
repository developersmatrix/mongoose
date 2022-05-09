const getGeneralData = (collectionName) => {
  return collectionName.find().where({ startYear: "2021", endYear: "2022" })
};

module.exports = getGeneralData;
