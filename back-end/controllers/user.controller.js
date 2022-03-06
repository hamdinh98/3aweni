const User = require('../models/user.model');
const validationRegister = require('../utils/validateRegister');
const validationLogin = require('../utils/validateLogin');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const mailer = require('../utils/mailer');
const fs = require('fs');
const path = require('path');

// this array contains all the refreshTokens provided in the different methods 
let refreshTokens = [];
// method that contain all of the process of registration
const registration = async (req, res) => {
    console.log(req.file);
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
                // console.log(req.files);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    img: {

                        data: fs.readFileSync(path.join(__dirname, '../uploads/' + req.files[0].filename)),
                        contentType: 'image/jpg || image/png'
                    }
                });

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
                                        //console.log(u.email);
                                        mailer(u.email).catch(err => console.log(err))
                                        res.json({ msg: 'user added successfully', token: token })

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
        console.log(userfounded);
        if (!userfounded) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        let isMatch = await bcrypt.compare(password, userfounded[0].password)

        if (!isMatch) {
            return res.status(401).json({ msg: "password invalid" })
        }
        const accessToken = await JWT.sign(
            { email: email },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "20s",
            }
        );

        // Refresh token
        const refreshToken = await JWT.sign(
            { email: email },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "10m",
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
        // user = { email: 'jame@gmail.com', iat: 1633586290, exp: 1633586350 }
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





const authToken = async (req, res, next) => {

    const accessToken = req.header("access-token");

    // If accessToken not found, send error message
    if (!accessToken) {
        return res.status(401).json({
            msg: "accessToken not found",
        },
        );
    }

    // Authenticate accessToken
    const user = JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

    if (!user) {
        return res.send(403).json({ msg: "invalid access token" })
    }
    // generateAccessToken(req, res)
    next()

};

module.exports = authToken;



module.exports = { registration, login, logout, generateAccessToken, authToken };



