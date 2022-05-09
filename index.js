const mongoose = require("mongoose");

const connectDB = require('./createDBConnection');

connectDB();



const getCollection = require("./logics/getCollection");


const PtaxGeneral = require("./Models/ptaxGeneral");
const ptaxColl = require("./Models/monthlyCollection");

// const data = new PtaxGeneral({
//   _id: new mongoose.Types.ObjectId(),
//   startYear: "2021",
//   endYear: "2022",
//   totalNoOfProperties: "4546",
//   openingBalance: "5.08",
//   currentYearDemand: "75.00",
// });

const data = ptaxColl({
  _id: new mongoose.Types.ObjectId(),
  collectionType: 1,
  year: 2022,
  month: 2,
  OBC: 1.09,
  CYD: 5.01,
});

// data
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const startYear = 2021;
const endyear = 2023;
const currentMonth = "May";

// PtaxGeneral.find()
//   .where({ startYear: startYear })
//   .exec()
//   .then((data) => console.log(data));

getCollection();


