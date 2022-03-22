
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


    },
    birthDate: {
        type: Date,
        required: true
    },
    country: {
        type: String,


    },
    state: {
        type: String,


    },
    img:
    {
        path: String,


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
    gender: {
        type: String,
        enum: ['male', 'female']
    },

},
    {
        timestamps: true,
    }


)


module.exports = User = mongoose.model('user', userSchema)