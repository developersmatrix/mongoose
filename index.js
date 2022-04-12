const mongoose = require("mongoose");

// const User = require('./Models/user');
// const PtaxCollection = require('./Models/ptaxCollection');
// const PtaxGeneral = require("./Models/ptaxGeneral");
// const Ptax = require("./Models/ptax");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));
