const mongoose = require ('mongoose');

const expenseSchema = new mongoose.Schema({
    amount :{
        type:Number,
        required:true
    },

    purpose:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
    }
)

module.exports = Expenses = mongoose.model('Expenses',expenseSchema);