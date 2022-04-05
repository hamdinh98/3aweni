const User = require('../../models/user.model');

const bcrypt = require('bcryptjs')
const mailer = require('../../utils/mailer');
const fs = require('fs');
const Validator = require("validator");
const Project = require('../../models/project.model')
const FormatDate = require('../../utils/DateFormat');

const Donation = require('../../models/donation.model')

const { registration, generateAccessToken, login, logout, confirm } = require('../user.controller/Auth')
const { genderStat, statusAccounts } = require('../user.controller/StatisticsUser')
// this array contains all the refreshTokens provided in the different methods 



// an admin can ban user
const suspend = (req, res) => {
    console.log(req.body.email);
    if (!req.body.email) {
        return res.status(400).json({ msg: "invalid email" })
    }
    User.updateOne({ email: String(req.body.email) }, { $set: { enable: 0 } }).then(result => res.status(200).json({ msg: result })).catch(err => res.status(500).json({ msg: err }))

}

const listUsers = async (req, res) => {


    const List = await User.find({}, { _id: 0, confirm: 0, enable: 0, Role: 0 })
    if (!List)
        return res.status(404).json({ msg: "error when retrieving list of users" })

    return res.status(200).json({ msg: List })
}


// changing forgotten password contains 3 methods
let code
let user
const sendCode = (req, res, next) => {
    // console.log(req.body.email);
    if (!Validator.isEmail(req.body.email)) {
        return res.status(400).json({ msg: "invalid email" })
    }


    User.findOne({ email: req.body.email })
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ msg: "user not found please verify your email" })
            }
            user = userData
            code = Math.floor(1000 + Math.random() * 9000)

            //send email contains a verif code 
            mailer(userData, false, code).catch(err => console.log(err))

            // lifetime of code is 20 min 
            setTimeout(() => {
                code = undefined
                console.log("code value set to undefiend");
            }, 1.2e+6)

            res.status(200).json({ code: code })
            next()

        })
        .catch(err => res.status(500).json({ msg: "something wrong" }))
}
const verifCode = (req, res, next) => {
    console.log(code);
    if (!req.body.code) {
        return res.status(400).json({ msg: "please type you code to verify your identity" })
    }

    if (code == undefined) {
        return res.status(500).json({ msg: 'code does not match' })
    }
    if (req.body.code != code) {
        return res.status(500).json({ msg: "invalid code" })
    }
    next()
}
const updatePassword = (req, res) => {

    //console.log(req.body.password);
    if (!Validator.isLength(req.body.password, { min: 6, max: 30 })) {
        return res.status(400).json({ msg: "Password must be at least 6 characters" })
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) {
                throw err
            }
            User.updateOne({ email: user.email }, { $set: { password: hash } })
                .then(result => { return res.status(200).json({ msg: "password updated with success" }) })
                .catch(err => { return res.status(500).json({ msg: err }) })

        })


    })



}



//modifie password using the old one 
const modifiePassword = async (req, res) => {

    const isMatch = await bcrypt.compare(req.body.oldPassword, req.user.password)

    if (!isMatch)
        return res.status(404).json({ msg: "invalid password" })

    if (!Validator.isLength(req.body.newPassword, { min: 6, max: 30 })) {
        return res.status(400).json({ msg: "Password must be at least 6 characters" })
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.newPassword, salt, (err, hash) => {
            if (err) {
                throw err
            }
            User.updateOne({ email: req.user.email }, { $set: { password: hash } })
                .then(result => { return res.status(200).json({ msg: "password updated with success" }) })
                .catch(err => { return res.status(500).json({ msg: err }) })

        })


    })

}








const profile = (req, res) => {
    return res.status(200).json(req.user)
}

// as a donor, i can see statistics about my spending and the number of projects i backed 
const totalMoneyBacked = (req, res) => {
    Donation.find({
        '_id': req.user.donations
    }, { _id: 0, Money: 1 }, function (err, docs) {
        if (err)
            return res.status(500).json(err)

        var total = 0;
        for (let i = 0; i < docs.length; i++) {
            total += docs[i].Money
        }
        return res.status(200).json({ total: total })
    });

}








module.exports = { registration, login, logout, generateAccessToken, suspend, listUsers, confirm, sendCode, updatePassword, verifCode, modifiePassword, statusAccounts, genderStat, profile, totalMoneyBacked };




