
const Project = require('../models/project.model');
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Donation = require("../models/donation.model");
const Ledger = require('../models/LedgerBook.model');
const getProject = async (req, res) => {

        try{
                const projects = await Project.find();
                res.status(200).json(projects);
        }
        catch (error) {
                res.status(404).json({message:error.message});
        }
}


// add a project + reference user & project 
// To add a project the Founder must be logged in
//retation :  1 founder(user) -> * projects ; 1 project -> 1 founder(user)
const AddProject = (req, res) => {
        if (!req.body)
                return res.status(400).json({ err: "project required" })

        Project.create(req.body)
                .then(project => {
                        // search for the founder and affect to him the project  
                        User.findByIdAndUpdate(req.user._id, { $push: { FoundedProjects: project._id } })
                                .catch(err => { return res.status(500).json({ msg: "error when updating user collection", err: err }) })
                        return res.status(201).json({ project: project })
                })
                .catch(err => { return res.status(500).json({ err: err }) })

}

// to donate to project user must be logged in 
// when the user start to donate , _id project was send from the front 
const donateToProject = (req, res) => {

        if (!req.body)
                return res.status(400).json("donation required")
        if (!req.params.idProject)
                return res.status(400).json("_id project required")

        // add the Backer _id to the donation----req.user : from the token i get the user
        req.body.Backer = req.user._id;
        // add the Project _id to the donation
        req.body.Project = req.params.idProject



        Donation.create(req.body).then(donation => {


                // add the _id of donation to founder(user) collection and add the project to the backedProjects List 
                User.findByIdAndUpdate(req.user._id, { $push: { donations: donation._id, backedProjects: req.params.idProject } })
                        .catch(err => { return res.status(500).json({ msg: "error when updating user collection", err: err }) })

                // add the _id of donation to project collection 
                Project.findByIdAndUpdate(req.params.idProject, { $push: { donations: donation._id } })
                        .catch(err => { return res.status(500).json({ msg: "error when updating project collection", err: err }) })

                return res.status(201).json({ donation: donation })
        }).catch(err => res.status(500).json(err))


}


const deleteProject = (req,res)=>{
    if (!req.params.idProjet)
         return res.status(400).json("_id project required");

    Project.findByIdAndDelete(req.params.idProjet,(error,result)=>{
            if(error){
                    return res.status(500).json(error);
            }
           Ledger.findByIdAndDelete(result.hasLedger)
               .then(result2=>{
                       return res.status(200).json("project deleted successfully")

               })
               .catch(error=>{
                       return res.status(500).json(error);
               })

    })
}

const getFundingProgress= async (req,res)=>{
    if (!req.params.idProjet)
         return res.status(400).json("_id project required");

    const {donations,askedAmount} = await Project.findById(req.params.idProjet,{
            _id:0,
            donations:1,
            askedAmount:1
    });

    let sum=0;

    for (let i=0;i<donations.length;i++)
    {
            const dont = await Donation.findById(donations[i],{_id:0,Money:1})
            sum+=dont.Money;

    }
        console.log(askedAmount);

    return res.status(200).json({progress : `${(sum/askedAmount)*100} %`} )
}


const getDonationTrendByMonth= async (req,res)=>{
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

   const dons = await Donation.aggregate([

       { $match: { "Project":  mongoose.Types.ObjectId(req.params.idProjet) } },

       { $group: {

                _id:
                    {
                        month:{
                            $month: '$createdAt'
                        }
                    },

               somme:{
                   $sum:'$Money'
               }
        }

        }
    ])
console.log (dons)


}


module.exports = { getProject, AddProject, donateToProject, deleteProject, getFundingProgress, getDonationTrendByMonth};