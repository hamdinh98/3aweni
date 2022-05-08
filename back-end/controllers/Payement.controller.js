const Project = require('../models/project.model');
const Payement = require('../models/Payement.model');

// GET LIST PAYEMENTS
/*const getPayement = asyncHandler(async (req , res) => {
    const Payement = await Payement.find()
    res.status(200).json(Payement)
})*/

const getPayement = (req, res) => {
    if (!req.params.idProject)
        return res.setStatus(400)
    Payement.find(req.params.Project, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(result)
    }
    )
}

const getAllPayements = (req, res) => {
    Payement.find({ _id: 0 }, (err, result) => {
        if (err)

            return res.status(500).json(err)
        return res.status(200).json(result)
    })

}

const addPayement = (req, res) => {
    if (!req.body)
    return res.status(400).json("Body required");
    if (!req.params.idProject)
        return res.status(400).json("id project required");
    Payement.create(req.body, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(201).json("Payement added with success")

    })
}

const deletePayement = (req, res) => {
    if (!req.params.idPayement)
        return res.status(400).json("Payement ID required")
    Badge.deleteOne(req.params.idPayement, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(202).json(result)
    })
}

const updatePayement = (req, res) => {
    if (!req.params.filter || !req.body)
        return res.setStatus(400)
    Payement.updateMany(req.params.filter, req.body, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(204).json(result)
    })
}

module.exports = {
    addPayement, deletePayement, getPayement, getAllPayements, updatePayement
  }
