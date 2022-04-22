

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
                // console.log(req.files[0].filename);
                //console.log(req.body.birthDate);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    img: '/back-end/uploads/' + req.body.img,
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
                                const accessToken = await JWT.sign({ user: u.email }, process.env.ACCESS_TOKEN_SECRET, {
                                    expiresIn: '15', algorithm: 'HS256'
                                })
                                const refreshToken = await JWT.sign({ user: u.email }, process.env.REFRESH_TOKEN_SECRET, {
                                    expiresIn: '2h', algorithm: 'HS256'
                                })
                                refreshTokens.push(refreshToken)

                                console.log(refreshTokens);
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
        const userfounded = await User.findOne({ email: email })

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

        const accessToken = await JWT.sign(
            {
                email: userfounded.email,
                role: userfounded.role
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



        return res.json({
            accessToken,
            refreshToken,
            userfounded
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
    refreshTokens


}