const Badge = require('../models/Badge.model')

// CRUD : badge 
//The badge collection represent all the available badges
// the badge affectation based on the amount of money donated per user

const addBadge = (req, res) => {
    if (!req.body)
        return res.status(400).json("Body required");

    Badge.create(req.body, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(201).json("Badge added with success")

    })
}

const deleteBadge = (req, res) => {
    if (!req.params.nomBagde)
        return res.status(400).json("badge name required")
    Badge.deleteOne(req.params.nomBagde, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(202).json(result)
    })
}

const updateBadge = (req, res) => {
    if (!req.params.filter || !req.body)
        return res.setStatus(400)
    Badge.updateMany(req.params.filter, req.body, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(204).json(result)
    })
}

const getBadge = (req, res) => {
    if (!req.params.idBadge)
        return res.setStatus(400)
    Badge.findById(req.params.idBadge, (err, result) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(result)
    })
}

const getAllBadges = (req, res) => {
    Badge.find({ _id: 0 }, (err, result) => {
        if (err)

            return res.status(500).json(err)
        return res.status(200).json(result)
    })

}

module.exports = { addBadge, updateBadge, deleteBadge, getBadge, getAllBadges }