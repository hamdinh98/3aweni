
const Project = require('../models/project.model');
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Donation = require("../models/donation.model");
const Ledger = require('../models/LedgerBook.model');


const getProject = async (req, res) => {

    try {
        const projects = await Project.find({enable:1}).populate("Founder")
            .populate("donations").populate("hasLedger").populate("comments");
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// add a project + reference user & project 
// To add a project the Founder must be logged in
//relation :  1 founder(user) -> * projects ; 1 project -> 1 founder(user)
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


    // console.log(req.user);
    //console.log(req.user._id);
    Donation.findOne({ Backer: mongoose.Types.ObjectId(req.user._id), Project: mongoose.Types.ObjectId(req.params.idProject) })
        .then(async result => {

            if (!result) {
                Donation.create(req.body).then(donation => {

                    // add the _id of donation to founder(user) collection and add the project to the backedProjects List
                    User.findByIdAndUpdate(req.user._id, { $push: { donations: donation._id, backedProjects: req.params.idProject } })
                        .catch(err => { return res.status(500).json({ msg: "error when updating user collection", err: err }) })

                    // add the _id of donation to project collection
                    Project.findByIdAndUpdate(req.params.idProject, { $push: { donations: donation._id } })
                        .catch(err => { return res.status(500).json({ msg: "error when updating project collection", err: err }) })

                    return res.status(201).json({ donation: donation })
                }).catch(err => { return res.status(500).json(err) })
            }

            else {
                result.Money += req.body.Money;
                Donation.updateOne({ _id: result._id }, { Money: result.Money })
                    .then(newResult => {
                        return res.status(200).json(newResult)
                    })
            }

        })

}


const deleteProject = (req, res) => {
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");


    Project.findByIdAndDelete(req.params.idProjet, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        Ledger.findByIdAndDelete(result.hasLedger)
            .then(result2 => {
                // lorsque on supprime un projet il faut supprimer ses donts 
                Donation.deleteMany({ Project: req.params.idProjet })
                    .then(re => {

                        return res.status(200).json("project deleted successfully")
                    })
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    })
}

const getFundingProgress = async (req, res) => {
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    const { donations, askedAmount } = await Project.findById(req.params.idProjet, {
        _id: 0,
        donations: 1,
        askedAmount: 1
    });

    let sum = 0;

    for (let i = 0; i < donations.length; i++) {
        const dont = await Donation.findById(donations[i], { _id: 0, Money: 1 })

        sum += dont.Money;
    }
    return res.status(200).json({ progress: `${(sum / askedAmount) * 100} %`,somme:sum })
}


const getDonationTrendByMonth = async (req, res) => {
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    const dons = await Donation.aggregate([

        { $match: { "Project": mongoose.Types.ObjectId(req.params.idProjet) } },

        {
            $group: {

                _id:
                {
                    month: {
                        $month: '$createdAt'
                    }
                },

                somme: {
                    $sum: '$Money'
                }
            }

        }
    ])
    //console.log (dons)

    return res.status(200).json(dons);
}

const getListOfBackers = async (req, res) => {
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    Donation.aggregate([

        { $match: { "Project": mongoose.Types.ObjectId(req.params.idProjet) } },
        {
            $project: {
                Backer: '$Backer',
                Money: '$Money',
            }
        }
    ]).then(async dons => {
        console.log(dons);
        for (var i = 0; i < dons.length; i++) {

            const name = await User.findOne({ _id: dons[i].Backer }, { _id: 0, name: 1 });
            console.log(name);

            dons[i] = {
                ...dons[i],
                name
            }
        }
        //console.log(dons)
        return res.status(200).json(dons)
    }
    )
}


const distributionByGender = async (req,res) => {
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");
    Donation.aggregate([
        { $match: { "Project": mongoose.Types.ObjectId(req.params.idProjet) } },
    ]).then(async dons => {
        var totalProj = 0;
        var totalMale = 0;
        var totalFemale = 0;
        for (var i = 0; i < dons.length; i++) {

            const {gender} = await User.findOne({ _id: dons[i].Backer }, { _id: 0, gender:1 });
            totalProj += dons[i].Money;

            if (gender=="male")
            {
                totalMale += dons[i].Money;
            }
            else
            {
                totalFemale += dons[i].Money;
            }
        }
        return res.status(200).json({totalProj:totalProj,totalMale:totalMale,totalFemale:totalFemale})
        }
    )
}

const distributionByAgeGroup = async (req,res) =>
{
    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    Donation.aggregate([

        { $match: { "Project": mongoose.Types.ObjectId(req.params.idProjet) } },

    ]).then(async dons => {
            const today = new Date();
            var totalProj = 0;
            var young = 0;
            var adult = 0;
            var old = 0;
            for (var i = 0; i < dons.length; i++) {

                const name = await User.findOne({ _id: dons[i].Backer }, { _id: 0, birthDate:1 });
                var age = today.getFullYear() - name.birthDate.getFullYear();

                totalProj += dons[i].Money;

                if(age<=25)
                {
                    young += dons[i].Money;
                }
                else if(age>25 && age<=45)
                {
                    adult += dons[i].Money;
                }
                else
                {
                    old += dons[i].Money;
                }
            }
            return res.status(200).json({totalProj:totalProj,young:young,adults:adult,old:old})
        }
    )
}


const enableProject =(req,res)=>{

    if (!req.params.idProjet)
        return res.status(400).json("_id project required");

    Project.updateOne({_id:req.params.idProjet},{$set:{enable:1}})
        .then(
            result => res.status(200).json({ msg: "confirmed" }))
        .catch(err => res.status(500).json({ msg: "something is wrong !" })
        )
}

// somme mta3 el money na7iha mel methodes lo5rin w 7otha fil donation (kol user 3andou entré wa7da w dima te7seb total)

module.exports = { getProject, AddProject, donateToProject, deleteProject, getFundingProgress, getDonationTrendByMonth, getListOfBackers,
                    distributionByGender,distributionByAgeGroup,enableProject};