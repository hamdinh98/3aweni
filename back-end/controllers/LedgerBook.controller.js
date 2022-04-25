const LedgerBook = require ('../models/LedgerBook.model');
const Project = require('../models/project.model');
const Donation = require("../models/donation.model");

const displayLedger = async (req,res)=>{
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    await Project.findById(req.params.idProjet).populate("donations").then(async project=>{
        if(project.hasLedger)
        {
            const ledger = await LedgerBook.findOne({forProject:req.params.idProjet});
            console.log(project)
            project.donations.map((don)=>{
                ledger.incomes.push({
                    incomeAmount:don.Money,
                    source:"donation"
                })

            });
            await LedgerBook.findOneAndUpdate({forProject:req.params.idProjet},{$set:{incomes:ledger.incomes}});

            return res.status(200).json(ledger);
        }
        else{
            return res.status(400).json("you need to create a ledger book first !");
        }
    })

}


//create a ledgerbook and associate it to a project

const createLedger = (req,res)=>{
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    Project.findOne({_id:req.params.idProjet}).then(project=>{
        if(!project.hasLedger)
        {            req.body.forProject=req.params.idProjet;
            const ledger={
                incomes:[],
                expenses:[],
                forProject:req.params.idProjet
            }
            LedgerBook.create(ledger,(error, result) => {
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

        else{
            return res.status(400).json("this project already has ledger !");
        }
    })}

const deleteLedger = (req,res)=>{
    if (!req.params.idLedger)
        return res.status(400).json("_id project required");

    LedgerBook.findByIdAndDelete(req.params.idLedger,async (error,result)=>{
        if(error){
            return res.status(500).json(error);
        }

        await Project.findOneAndUpdate({_id:result.forProject},{$unset:{hasLedger:1}})

        return res.status(200).json("success")
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



module.exports ={displayLedger,createLedger,addExpense,addIncome,deleteLedger};