


const Project = require('../models/project.model');
const mongoose = require('mongoose')
const User = require('../models/user.model')
const toId = mongoose.Types.ObjectId
const getProject = (req, res) => {
        // res.send('post works');

        return res.status(200).json({ msg: "it works" })
}


// add a project + reference user & project 

//retation :  1 founder(user) -> * projects ; 1 project -> 1 founder(user)
const AddProject = (req, res) => {
        if (!req.body)
                return res.status(400).json({ err: "body required" })
        if (!req.params.id)
                return res.status(400).json({ err: "founder id required" })
        req.body.Founder = toId(req.params.id)

        Project.create(req.body)
                .then(project => {
                        // search for the founder and affect to him the project  
                        User.findByIdAndUpdate(req.params.id, { $push: { FoundedProjects: project._id } })
                                .catch(err => { return res.status(500).json({ msg: "error when updating user collection", err: err }) })
                        return res.status(201).json({ project: project })
                })
                .catch(err => { return res.status(500).json({ err: err }) })
}

module.exports = { getProject, AddProject };