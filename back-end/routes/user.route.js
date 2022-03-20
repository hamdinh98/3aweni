

const express = require('express');
const { login, registration, logout, generateAccessToken, suspend, listUsers, confirm, sendCode, updatePassword, verifCode } = require('../controllers/user.controller')
const upload = require('../utils/uploadFileMulter')
const passport = require("passport")
const route = express.Router();
const { ROLES, inRole } = require('../security/RoleMiddleware')

route.post('/signIn', upload.any("imgProfile"), registration)
route.post('/login', login)
route.get('/token', generateAccessToken)
route.delete('/logout', logout)
route.get('/confirm/:id', confirm)


//private ressources
route.get('/private', passport.authenticate('jwt', { session: false }), (req, res) => {

    res.send("hello")
})

//private ressource based on role 
route.get('/admin', passport.authenticate('jwt', { session: false }), inRole(ROLES.USER), (req, res) => {

    res.send("admin")
})

//private ressource based on role 
route.delete('/suspend', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), suspend)

//private ressource based on role 
route.get('/list', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), listUsers)





//change forgetten password 
route.post('/sendVerifCode', sendCode)
route.post('/updatePassword', verifCode, updatePassword)

// route.get("/test", (req, res, next) => {
//     console.log("first middleware");
//     req.var1 = "hello"
//     next()
// }, (req, res, next) => {
//     req.var2 = "world"
//     console.log("second middleware");
//     next()

// }, (req, res, next) => {
//     console.log("third middleware");
//     console.log(req.var1);
//     console.log(req.var2);
// })
// google auth
route.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
route.get('/auth/google/redirect', passport.authenticate('google',
    { session: false, failureRedirect: `https://localhost:5000/login` }), (req, res) => {
        //console.log(req.user);
        res.status(200).redirect(req.user); //req.user has the redirection_url
    });


module.exports = route



