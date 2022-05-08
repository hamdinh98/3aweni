

const validationRegister = require('../../utils/validateRegister');
const validationLogin = require('../../utils/validateLogin');
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../../models/user.model');
const mailer = require('../../utils/mailer');
const Badge = require('../../models/Badge.model')





let refreshTokens = [];
// method that contain all of the process of registration
const registration = (req, res) => {
    // console.log(req.file);
    const { errors, isValid } = validationRegister(req.body)

    if (!isValid) {
        console.log(errors);
        return res.status(400).json(errors)
    }


    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json("Email already exists");
            }
            else {

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    img: '/uploads/' + req.files[0].filename,
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
                            .then(async u => {
                                mailer(u)
                                res.status(200).json("successfull registration");
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
        const userfounded = await User.findOne({ email: email }).populate('donations')
        // console.log(userfounded.donations);
        if (!userfounded) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        if (userfounded.enable == 0) {
            return res.status(400).json({ error: "this account was suspending by the admin" })
        }
        if (userfounded.confirm == 0) {
            return res.status(400).json({ error: "You must confirm your account check your email please !" })
        }

        let isMatch = await bcrypt.compare(password, userfounded.password)
        // console.log(userfounded);
        if (!isMatch) {
            return res.status(401).json({ error: "password invalid" })
        }

        const accessToken = JWT.sign(
            {
                email: userfounded.email,

            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "10s",
            }
        );

        const refreshToken = JWT.sign(
            {
                email: email,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "1d",
            }
        );


        // Set refersh token in refreshTokens array
        refreshTokens.push(refreshToken);
        console.log(refreshTokens);

        return res.json({
            accessToken,
            refreshToken,
            user: userfounded
        });
        // console.log(refreshTokens);
    }

}


const loginWithGoogle = async (req, res) => {
    if (!req.body)
        return res.status(400).json("body required")

    const accessToken = JWT.sign(
        {
            email: req.body.email,

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "10s",
        }
    );

    const refreshToken = JWT.sign(
        {
            email: req.body.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );


    const user = await User.find({ email: req.body.email })
    console.log(user);
    if (user) {
        refreshTokens.push(refreshToken);
        console.log("test");
        return res.status(200).json({
            accessToken,
            refreshToken,
            user: user[0]
        })
    } else {
        console.log(req.body);
        User.create(req.body)
            .then(result => {
                console.log("result" + result);
                refreshTokens.push(refreshToken);
                console.log(refreshToken);
                return res.status(200).json({
                    accessToken,
                    refreshToken,
                    user: result
                })
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json(err)
            })
    }

}



const generateAccessToken = async (req, res) => {

    // If token is not provided, send error message
    if (!req.body.refresh) {
        return res.status(401).json({ msg: "Token not found", });
    }

    //console.log(req.body.refresh);

    // If token does not exist, send error message
    if (!refreshTokens.includes(req.body.refresh)) {
        console.log(refreshTokens);
        return res.status(403).json({
            errors: [
                {
                    msg: "Invalid refresh token",
                },
            ],
        });
    }

    try {
        const user = JWT.verify(
            req.body.refresh,
            process.env.REFRESH_TOKEN_SECRET
        );
        //console.log(`user generate token ${user}`);
        const { email } = user;
        const accessToken = JWT.sign(
            { email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5s" }
        );
        return res.json(accessToken);
    } catch (error) {
        return res.status(403).json({
            errors: [
                {
                    msg: "Invalid token",
                },
            ],
        });
    }
}


const logout = (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body);
    console.log(refreshTokens);
    return res.status(204).json({ msg: "logout successfully" });

}

//confirm account 
const confirm = (req, res) => {


    User.updateOne({ _id: String(req.params.id) }, { $set: { confirm: 1 } })
        .then(result => res.status(200).json({ msg: "confirmed" }))
        .catch(err => res.status(500).json({ msg: "something is wrong !" }))

}






module.exports = {
    logout,
    generateAccessToken,
    login,
    registration,
    confirm,
    refreshTokens,
    loginWithGoogle


}