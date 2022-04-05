//user statistics
const statusAccounts = (req, res) => {

    User.find().count((err, result1) => {
        if (err)
            return res.status(500).json({ err: err })
        User.find({ enable: 0 }).count((err, result2) => {
            if (err)
                return res.status(500).json({ err: err })
            return res.status(200).json({ Total: result1, banned: result2, nonBanned: result1 - result2 })

        });
    })
}

const genderStat = (req, res) => {
    User.find().count((err, result1) => {
        if (err)
            return res.status(500).json({ err: err })
        User.find({ gender: "male" }).count((err, result2) => {
            if (err)
                return res.status(500).json({ err: err })
            return res.status(200).json({ Total: result1, Male: result2, Female: result1 - result2 })

        })
    })
}


module.exports = { genderStat, statusAccounts }