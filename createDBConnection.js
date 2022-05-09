const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (await mongoose.connect(process.env.MONGODB_URI))
            console.log('connected to  database');
    } catch (error) {
        console.log(error);
    }

    // optional way to connect to database
    // mongoose
    //   .connect(process.env.MONGODB_URI)
    //   .then(() => console.log("connected"))
    //   .catch((error) => console.log(error));
}

module.exports = connectDB;