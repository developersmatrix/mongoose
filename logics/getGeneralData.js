const getGeneralData = (collectionName) => {
  collectionName.find().then((data) => console.log(`innr ${data}`));
};

module.exports = getGeneralData;
