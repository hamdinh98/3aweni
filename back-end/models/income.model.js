const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    amount : {
        type : Number,
        required : true
    },

    source :{
        type : String,
        required : true
    },

},
    {
        timestamps: true,
    }
    )

module.exports = Income = mongoose.model('Income',incomeSchema);