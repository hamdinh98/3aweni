const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    minimumAmount: {
        type: Number,
        required: true
    },

    logo: {
        path: String
    }
},
    {
        timestamps: true
    }
);

module.exports = Badge = mongoose.model('BadgeCategory', badgeSchema);