const mongoose = require("mongoose");

const PtaxGeneral = require("./Models/ptaxGeneral");
const ptaxColl = require("./Models/monthlyCollection");

const data = new PtaxGeneral({
  _id: new mongoose.Types.ObjectId(),
  startYear: "2021",
  endYear: "2022",
  totalNoOfProperties: "4546",
  openingBalance: "5.08",
  currentYearDemand: "75.00",
});

// const data = ptaxColl({
//   _id: new mongoose.Types.ObjectId(),
//   year: "2022",
//   month: "March",
//   OBC: "2.03",
//   CYD: "4.26",
// });

// data
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const startYear = 2022;
const endyear = 2023;
const currentMonth = "May";

PtaxGeneral.find().where({ startYear: startYear });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));
