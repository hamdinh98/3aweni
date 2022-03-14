
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,

    },
    country: {
        type: String,

    },
    state: {
        type: String,

    },
    img:
    {
        data: Buffer,
        contentType: String,

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
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
},
    {
        timestamps: true,
    }


)


module.exports = User = mongoose.model('user', userSchema)