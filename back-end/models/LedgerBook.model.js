const mongoose = require('mongoose');

const LedgerBookSchema = new mongoose.Schema({


    hasExpenses [{type:mongoose.Schema.Types.ObjectId, ref: 'Expenses'}]
})

module.exports = LedgerBook= mongoose.model('LedgerBook',LedgerBookSchema);