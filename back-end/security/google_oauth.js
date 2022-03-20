
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
            ;
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return cb(err, user);

            // });

            // console.log(profile);


            request(`https://people.googleapis.com/v1/people/${profile.id}?personFields=birthdays,genders,locations&access_token=${accessToken}`, function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);

                User.findOne({ email: profile._json.email }).then(u => {
                    if (!u) {

                        const parsedBody = JSON.parse(body)
                        // console.log(parsedBody.birthdays[0].date);
                        const googleUser = new User({
                            password: "null",
                            enable: 1,
                            confirm: 1,
                            name: profile._json.name,
                            email: profile._json.email,
                            birthDate: `${parsedBody.birthdays[0].date.year}-${parsedBody.birthdays[0].date.month}-${parsedBody.birthdays[0].date.day}`,
                            country: "UNKOWN",
                            state: "UNKOWN",
                            img:
                            {
                                path: profile._json.picture,

                            },

                            gender: parsedBody.genders[0].value
                        })
                        // console.log(`${googleUser}`);
                        User.create(googleUser, (err, result) => {
                            if (err) {
                                return console.log(err);
                            }
                            return console.log(result);

                        })

                    }
                    else
                        return console.log(u);

                })

            });


        }));

}