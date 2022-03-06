
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },
    password: {
        type: String
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    addedDate: {
        type: Date,
        default: Date.now()
    }
})


module.exports = User = mongoose.model('user', userSchema)