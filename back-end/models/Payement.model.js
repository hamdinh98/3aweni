
const mongoose = require('mongoose');

const PayementSchema = new mongoose.Schema({

    Money: {
        type: Number,
        required: true
    },

    Project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    Backer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},
    {
        timestamps: true,
    }

)


module.exports = Payement = mongoose.model('Payement', PayementSchema)