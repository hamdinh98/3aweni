
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const request = require('request')
const User = require('../models/user.model')
module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        callbackURL: `http://localhost:5000/auth/google/redirect`,  //same URI as registered in Google console portal
        clientID: process.env.GOOGLE_CLIENT_ID, //replace with copied value from Google console
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
        function (accessToken, refreshToken, profile, cb) {
            console.log(`access token : ${accessToken}`);
            // console.log(refreshToken);
            request(`https://people.googleapis.com/v1/people/${profile.id}?personFields=birthdays,genders,locations&access_token=${accessToken}`, function (error, response, body) {

                User.findOne({ email: profile._json.email })
                    .then(user => {
                        if (!user) {
                            const parsedBody = JSON.parse(body)
                            const googleUser = new User({
                                enable: 1,
                                confirm: 1,
                                name: profile._json.name,
                                email: profile._json.email,
                                birthDate: `${parsedBody.birthdays[0].date.year}-${parsedBody.birthdays[0].date.month}-${parsedBody.birthdays[0].date.day}`,

                                img:
                                {
                                    path: profile._json.picture,

                                },

                                gender: parsedBody.genders[0].value
                            })

                            User.create(googleUser, (err, result) => {
                                if (err) {
                                    cb(err, undefined)
                                }
                                else {

                                    return cb(undefined, result, { accessToken, refreshToken })
                                }
                            })

                        }
                        else
                            return cb(undefined, user, { accessToken, refreshToken })
                    })

            });


        }));

}