const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

  // optional way to connect to database
  // mongoose
  //   .connect(process.env.MONGODB_URI)
  //   .then(() => console.log("connected"))
  //   .catch((error) => console.log(error));
};

module.exports = connectDB;
