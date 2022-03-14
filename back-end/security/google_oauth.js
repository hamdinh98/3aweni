
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        callbackURL: `http://localhost:5000/auth/google/redirect`,  //same URI as registered in Google console portal
        clientID: process.env.GOOGLE_CLIENT_ID, //replace with copied value from Google console
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
        function (accessToken, refreshToken, profile, cb) {
            // console.log(refreshToken);
            // console.log(accessToken);
            // console.log(profile);
            // console.log(refreshToken);


            // console.log(birthday, gender, country);
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return cb(err, user);

            // });

            cb(null, accessToken, refreshToken, profile)
        }));

}