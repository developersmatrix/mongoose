const mongoose = require("mongoose");

// const connectDB = require("./createDBConnection");

// connectDB();
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const getCollection = require("./logics/getCollection");

const PtaxGeneral = require("./Models/ptaxGeneral");
const ptaxColl = require("./Models/monthlyCollection");

const ptax = require("./Models/ptax");

const updatePtax = require("./logics/updatePtax");

// const data = new PtaxGeneral({
//   _id: new mongoose.Types.ObjectId(),
//   startYear: "2021",
//   endYear: "2022",
//   totalNoOfProperties: "4546",
//   openingBalance: "5.08",
//   currentYearDemand: "75.00",
// });

// const data = new ptax({
//   _id: new mongoose.Types.ObjectId(),

//   startYear: 2021,
//   endYear: 2022,
//   totalNoOfProperties: 4546,
//   openingBalance: 5.08,
//   currentYearDemand: 75.0,
//   monthlyCollection: [
//     {
//   startYear: 2021,
//   endYear: 2022,
//   totalNoOfProperties: 4546,
//   openingBalance: 5.08,
//   currentYearDemand: 75.0,
//   monthlyCollection: [
//     {
//       _id: new mongoose.Types.ObjectId(),
//       // collectionType: 1,
//       year: 2022,
//       month: 3,
//       OBC: 3.54,
//       CYD: 23.83,
//     },
//   ],
// });

// ptax
//   .findById()
//   .exec()
//   .then((data) => {
//     console.log(data);
//     data.monthlyCollection.push({
//       _id: new mongoose.Types.ObjectId(),
//       // collectionType: 1,
//       year: 2022,
//       month: 3,
//       OBC: 3.54,
//       CYD: 23.83,
//     },
//   ],
// });

// ptax
//   .findById()
//   .exec()
//   .then((data) => {
//     console.log(data);
//     data.monthlyCollection.push({
//       _id: new mongoose.Types.ObjectId(),
//       collectionType: 1,
//       year: 2022,
//       month: 4,
//       OBC: 2.5,
//       CYD: 6.23,
//     });
//     // data.save();
//   })
//   .catch((error) => console.log(error));

// console.log(data);

// data.monthlyCollection.push({
//   _id: new mongoose.Types.ObjectId(),
//   collectionType: 1,
//   year: 2022,
//   month: 4,
//   OBC: 2.5,
//   CYD: 6.23,
// });

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

// getCollection(1, 2022, 9);

updatePtax();
