
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

    enable: {
        type: Number,
        default: 1
    },

    confirm: {
        type: Number,
        default: 0
    },

    Role:
    {
        type: String,
        enum: ['USER', 'ADMIN', 'MODERATOR'],
        default: 'USER'
    }
    ,

    addedDate: {
        type: Date,
        default: Date.now()
    }


})


module.exports = User = mongoose.model('user', userSchema)