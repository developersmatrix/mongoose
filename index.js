const mongoose = require("mongoose");

const User = require('./Models/user');


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));


const run = async () => {

    try {
        const user = new User({
            name: 'Bodi',
            age: 30
        })

        const response = await user.save()
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

User.find().exec().then(res => console.log(res)).catch(err => console.log(err))