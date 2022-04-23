const LedgerBook = require ('../models/LedgerBook.model');
const Project = require('../models/project.model')

const displayLedger = async (req,res)=>{

    if (!req.params.idProjet)
        return res.status(400).json("_id project required")



    /*try {
        const ledger = await LedgerBook.findById(req.params.idProjet)
        res.status(200).json(ledger);
    }
    catch (error) {
        res.status(404).json({message:error.message});
    }*/
}


//create a ledgerbook and associate it to a project

const createLedger = (req,res)=>{
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");
    if (!req.body)
        return res.status(400).json("body required");

    req.body.forProject=req.params.idProjet;

    LedgerBook.create(req.body,(error, result) => {
        if (error)
            return res.status(500).json(error);
        Project.findByIdAndUpdate(req.params.idProjet,{$set:{hasLedger:result._id}})
            .then(result2=>{
                return res.status(200).json("ledger book linked successfully")

            })
            .catch(error=>{
                return res.status(500).json(error);
            })
    })
}

const addExpense = async (req,res)=>
{
    if (!req.params.idLedger)
        return res.status(400).json("_id ledger required");
    if (!req.body)
        return res.status(400).json("body required");

    LedgerBook.findByIdAndUpdate(req.params.idLedger,{$push:{expenses:req.body}})
        .then(result=>{
            return res.status(200).json("expense added successfully")

        })
        .catch(error=>{
            return res.status(500).json(error);
        })
}

const addIncome = async (req,res)=>
{
    if (!req.params.idLedger)
        return res.status(400).json("_id ledger required");
    if (!req.body)
        return res.status(400).json("body required");

    LedgerBook.findByIdAndUpdate(req.params.idLedger,{$push:{incomes:req.body}})
        .then(result=>{
            return res.status(200).json("income added successfully")

        })
        .catch(error=>{
            return res.status(500).json(error);
        })
}


const displayExpenses = async (req,res)=>{

    if (!req.params.idProjet)
        return res.status(400).json("_id project required")

    try {
        const expenses = await LedgerBook.findById(req.params.idProjet,{expenses})
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(404).json({message:error.message});
    }
}

module.exports ={displayLedger,createLedger,addExpense,addIncome,displayExpenses};