
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: Number,

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

    FoundedProjects: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
    ],
    donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],


    backedProjects: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Project',
        badge: {
            type: String,
        }
    }]

},
    {
        timestamps: true,
    }


)

userSchema.plugin(findOrCreate)
module.exports = User = mongoose.model('User', userSchema)