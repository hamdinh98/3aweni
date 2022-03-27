

const express = require('express');
const { login, registration, logout, generateAccessToken, suspend, listUsers, confirm, sendCode, updatePassword,
    verifCode, modifiePassword, statusAccounts, genderStat, profile, totalMoneyBacked } = require('../controllers/user.controller')
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


//modifie password using old one 
route.put('/modifiePassword', passport.authenticate('jwt', { session: false }), inRole(ROLES.USER), modifiePassword)



// google auth
route.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
route.get('/auth/google/redirect', passport.authenticate('google',
    { session: false, failureRedirect: `https://localhost:5000/login` }), (req, res) => {
        //console.log(req.user);
        res.status(200).redirect(req.user); //req.user has the redirection_url
    });


//user stat 

route.get("/enables", statusAccounts)
route.get("/genderStat", genderStat)


route.get("/profile", passport.authenticate('jwt', { session: false }), profile)

route.get("/totalMoneyBacked", passport.authenticate('jwt', { session: false }), totalMoneyBacked)

module.exports = route



