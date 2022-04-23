

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
                    img: '/back-end/uploads/' + req.files[0].filename,
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
                expiresIn: "5s",
            }
        );

        const refreshToken = await JWT.sign(
            {
                email: email,
                role: userfounded.role
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "90d",
            }
        );


        // Set refersh token in refreshTokens array
        refreshTokens.push(refreshToken);
        console.log(refreshTokens);



        return res.json({
            accessToken,
            refreshToken,
        });
        // console.log(refreshTokens);
    }

}



const generateAccessToken = async (req, res) => {

    // If token is not provided, send error message
    if (!req.body.refresh) {
        return res.status(401).json({ msg: "Token not found", });
    }

    console.log(req.body.refresh);

    // If token does not exist, send error message
    if (!refreshTokens.includes(req.body.refresh)) {
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
        console.log(`user generate token ${user}`);
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