const Income = require ('../models/income.model');

const getIncome = (req,res)=>{
    res.send('income works!')
}

module.exports ={getIncome}