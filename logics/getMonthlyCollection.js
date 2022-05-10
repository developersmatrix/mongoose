const ptaxColl = require("../Models/monthlyCollection");

const getMonthlyCollection = (collectionType, year, yearType) => {
  if (yearType === 0) {
    return ptaxColl
      .find()
      .where({ year, collectionType })
      .where("month")
      .gt(2)
      .lt(12)
      .exec();
  } else if (yearType === 1) {
    return ptaxColl
      .find()
      .where({ year, collectionType })
      .where("month")
      .gt(-1)
      .lt(3)
      .exec();
  }
};

module.exports = getMonthlyCollection;
