const Project = require('../models/project.model');

const getProject =(req, res) => {
       // res.send('post works');

        return res.status(200).json({ msg: "it works" })
}

module.exports= {getProject};