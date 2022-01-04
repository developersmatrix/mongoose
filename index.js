const mongoose = require("mongoose");

// const User = require('./Models/user');
// const PtaxCollection = require('./Models/ptaxCollection');
const PtaxGeneral = require('./Models/ptaxGeneral');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));


const run = async () => {

    try {
        // const user = new User({
        //     name: 'Bodi',
        //     age: 30
        // })

        // const response = await user.save()
        // console.log(response);
        // const ptaxCollection = new PtaxCollection({
        //     _id: new mongoose.Types.ObjectId,
        //     year: "2021",
        //     month: "December",
        //     OBCollection: "1.32",
        //     CYDCollection: "2.96"
        // })

        // const response = await ptaxCollection.save()
        // console.log(response);
        const ptaxGeneral = new PtaxGeneral({
            _id: new mongoose.Types.ObjectId,
            startYear: "2020",
            endYear: "2021",
            totalNoOfProperties: "4546",
            openingBalance: "9.64",
            currentYearDemand: "98.23"
        })

        const response = await ptaxGeneral.save()
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }


}

// run()

// const user = new User({
//     name: 'eshaan',
//     age: 4
// })

// user.save().then(res => console.log(res)).catch(err => console.log(err))

PtaxGeneral.find({ startYear: "2021", endYear: "2022" }).exec().then(res => console.log(res)).catch(err => console.log(err))