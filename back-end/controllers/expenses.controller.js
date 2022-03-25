const expenses = require ('../models/expenses.model')

const getExpenses = (req,res) =>{
    res.send('expenses work !');
}

module.exports = {getExpenses}