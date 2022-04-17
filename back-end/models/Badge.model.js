const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    AmoutMoney: {
        type: Number,
    },

    nbBackedProject: {
        type: Number,
    },

    nbFoundedProject: {
        type: Number,
    },

    image: {
        path: {
            type: String
        }
    }


},
    {
        timestamps: true
    }
);

module.exports = Badge = mongoose.model('Badge', badgeSchema);