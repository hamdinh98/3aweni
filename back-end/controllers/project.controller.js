


const Project = require('../models/project.model');
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Donation = require("../models/donation.model")
const getProject = (req, res) => {
        // res.send('post works');

        return res.status(200).json({ msg: "it works" })
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

module.exports = { getProject, AddProject, donateToProject };