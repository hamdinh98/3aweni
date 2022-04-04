const User = require('../models/user.model');
const validationRegister = require('../utils/validateRegister');
const validationLogin = require('../utils/validateLogin');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const mailer = require('../utils/mailer');
const fs = require('fs');
const Validator = require("validator");
const Project = require('../models/project.model')
const FormatDate = require('../utils/DateFormat');

const Donation = require('../models/donation.model')


// this array contains all the refreshTokens provided in the different methods 
let refreshTokens = [];


// method that contain all of the process of registration
const registration = (req, res) => {
    // console.log(req.file);
    const { errors, isValid } = validationRegister(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            }
            else {
                // console.log(req.files[0].filename);
                console.log(req.body.birthDate);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    img: {

                        path: '/back-end/uploads/' + req.files[0].filename,
                    },
                    birthDate: req.body.birthDate,
                    gender: req.body.gender,
                    country: req.body.country,
                    state: req.body.state,
                    phone: req.body.phone
                });
                // FormatDate(newUser.birthDate);
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err
                        }
                        newUser.password = hash;
                        User.create(newUser)
                            .then(async u => {
                                const accessToken = await JWT.sign({ user: u.email }, process.env.ACCESS_TOKEN_SECRET, {
                                    expiresIn: '15', algorithm: 'HS256'
                                })
                                const refreshToken = await JWT.sign({ user: u.email }, process.env.REFRESH_TOKEN_SECRET, {
                                    expiresIn: '2h', algorithm: 'HS256'
                                })
                                refreshTokens.push(refreshToken)

                                // console.log(refreshTokens);
                                mailer(u)
                                res.status(200).json({
                                    accessToken,
                                    refreshToken,
                                });
                            })

                    })


                })

            }
        })
        .catch(err => console.log(err));
}


// method that contain all of the process of login (verif + access token + refresh token )
const login = async (req, res) => {

    const { email, password } = req.body

    const { errors, isValid } = validationLogin(req.body)

    if (!isValid) {
        return res.status(400).json({ error: errors })
    } else {
        const userfounded = await User.find({ email: email })
        // console.log(` ${userfounded[0].confirm}`);
        if (!userfounded) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        if (userfounded[0].enable == 0) {
            return res.status(400).json({ error: "this account was suspending by the admin" })
        }
        if (userfounded[0].confirm == 0) {
            return res.status(400).json({ error: "You must confirm your account check your email please !" })
        }

        let isMatch = await bcrypt.compare(password, userfounded[0].password)

        if (!isMatch) {
            return res.status(401).json({ msg: "password invalid" })
        }

        const accessToken = await JWT.sign(
            {
                email: userfounded[0].email,
                role: userfounded[0].role
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "1h",
            }
        );

        const refreshToken = await JWT.sign(
            { email: email },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );


        // Set refersh token in refreshTokens array
        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken,
        });
        // console.log(refreshTokens);
    }

}

const generateAccessToken = async (req, res) => {
    const refreshToken = req.header("refresh-token");

    // If token is not provided, send error message
    if (!refreshToken) {
        res.status(401).json({
            errors: [
                {
                    msg: "Token not found",
                },
            ],
        });
    }

    // If token does not exist, send error message
    if (!refreshTokens.includes(refreshToken)) {
        res.status(403).json({
            errors: [
                {
                    msg: "Invalid refresh token",
                },
            ],
        });
    }

    try {
        const user = await JWT.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const { email } = user;
        const accessToken = await JWT.sign(
            { email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10s" }
        );
        res.json({ accessToken });
    } catch (error) {
        res.status(403).json({
            errors: [
                {
                    msg: "Invalid token",
                },
            ],
        });
    }
}


const logout = (req, res) => {
    const refreshToken = req.header("refresh-token");
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(204).json({ msg: "logout successfully" });
    console.log(refreshTokens);

}

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
//confirm registration 
const confirm = (req, res) => {


    User.updateOne({ _id: String(req.params.id) }, { $set: { confirm: 1 } }).then(result => res.status(200).json({ msg: "confirmed" })).catch(err => res.status(500).json({ msg: "something is wrong !" }))

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

    console.log(req.body.password);
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








module.exports = { registration, login, logout, generateAccessToken, suspend, listUsers, confirm, refreshTokens, sendCode, updatePassword, verifCode, modifiePassword, statusAccounts, genderStat, profile, totalMoneyBacked };




