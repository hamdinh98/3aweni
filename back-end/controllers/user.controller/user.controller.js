const User = require('../../models/user.model');

const bcrypt = require('bcryptjs')
const mailer = require('../../utils/mailer');

const Validator = require("validator");



const { registration, generateAccessToken, login, logout, confirm } = require('../user.controller/Auth')
const { genderStat, statusAccounts } = require('../user.controller/StatisticsUser');





// an admin can ban user
const suspend = (req, res) => {
    // console.log(req.body.email);
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
    // console.log("body" + req.body.email);
    if (!Validator.isEmail(req.body.email)) {
        return res.status(400).json({ msg: "invalid email" })
    }


    User.findOne({ email: req.body.email })
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ msg: "This email does not exist" })
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

            return res.status(200).json("code send with success")

        })
        .catch(err => res.status(500).json({ msg: "something wrong" }))
}
const verifCode = (req, res, next) => {
    //console.log(code);
    if (!req.body.code) {
        return res.status(400).json("please type you code to verify your identity")
    }


    if (req.body.code != code) {
        console.log(req.body.code, code);
        return res.status(500).json("invalid code")
    }
    return res.status(200).json("valid password")
}
const updatePassword = (req, res) => {

    //console.log(req.body.password);
    if (!Validator.isLength(req.body.password, { min: 8, max: 30 })) {
        return res.status(400).json("Password must be at least 8 characters")
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
    // console.log(req.user);
    return res.status(200).json(req.user)
}


module.exports = { registration, login, logout, generateAccessToken, suspend, listUsers, confirm, sendCode, updatePassword, verifCode, modifiePassword, statusAccounts, genderStat, profile };




