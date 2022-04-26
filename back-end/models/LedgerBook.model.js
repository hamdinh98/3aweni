const mongoose = require('mongoose');

const LedgerBookSchema = new mongoose.Schema({

    enable :{
       type:Number,
       default:1
    },

    expenses:[{
        expenseAmount :{
            type:Number,
            required:true
        },

        purpose:{
            type:String,
            required:true
        }
    }
    ],

    incomes:[{
        oneDonation:
        {
            incomeAmount : {
                type : Number,
                required : true
            },

            source :{
                type : String,
                required : true
            },
        }

    }],

    forProject :{type:mongoose.Schema.Types.ObjectId, ref: 'Project'},

},
    {
        timestamps:true
    })

module.exports = LedgerBook= mongoose.model('LedgerBook',LedgerBookSchema);