
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({

    Money: {
        type: Number,
        required: true
    },

    /*usableMoney:{
        type:Number,
        default:this.Money
    },*/

    Project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    Backer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},
    {
        timestamps: true,
    }

)


module.exports = Donation = mongoose.model('Donation', donationSchema)