const User = require('../models/user.model');
const validationRegister = require('../utils/validateRegister');
const validationLogin = require('../utils/validateLogin');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const mailer = require('../utils/mailer');
const fs = require('fs');
const Validator = require("validator");
const path = require('path');
const FormatDate = require('../utils/DateFormat');

// this array contains all the refreshTokens provided in the different methods 
let refreshTokens = [];
// method that contain all of the process of registration
const registration = async (req, res) => {
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

                        path: path.join('back-end/uploads/' + req.files[0].filename),


                    },
                    birthDate: req.body.birthDate,
                    gender: req.body.gender,
                    country: req.body.country,
                    state: req.body.state,
                });
                // FormatDate(newUser.birthDate);
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err
                        }
                        newUser.password = hash;
                        User.create(newUser)
                            .then(u => {
                                JWT.sign(
                                    { user: u.email }
                                    ,
                                    process.env.ACCESS_TOKEN_SECRET,
                                    {
                                        expiresIn: '10s',
                                        algorithm: 'HS256'
                                    }
                                    , (err, token) => {
                                        if (err)
                                            throw err
                                        //console.log(JSON.stringify(u._id));
                                        mailer(u, true).catch(err => console.log(err))
                                        res.status(200).json({ msg: 'user added successfully', token: token })

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

        // Refresh token
        const refreshToken = await JWT.sign(
            { email: email },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "1d",
            }
        );

        // Set refersh token in refreshTokens array
        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken,
        });
        console.log(refreshTokens);
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
    const refreshToken = req.header("x-auth-token");
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


    const List = await User.find()
    if (!List)
        return res.status(404).json({ msg: "error when retrieving list of users" })
    return res.status(200).json({ msg: List })
}

const confirm = (req, res) => {


    User.updateOne({ _id: String(req.params.id) }, { $set: { confirm: 1 } }).then(result => res.status(200).json({ msg: "confirmed" })).catch(err => res.status(500).json({ msg: "something is wrong !" }))

}

// change forgotten password contains 2 method 
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
                .then(result => { res.status(200).json({ msg: "password updated with success" }) })
                .catch(err => { res.status(500).json({ msg: err }) })

        })


    })



}



module.exports = { registration, login, logout, generateAccessToken, suspend, listUsers, confirm, refreshTokens, sendCode, updatePassword, verifCode };




