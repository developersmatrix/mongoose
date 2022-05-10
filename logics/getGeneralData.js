const getGeneralData = (collectionName, startYear, endYear) => {
  return collectionName.find().where({ startYear, endYear }).exec();
};

module.exports = getGeneralData;
