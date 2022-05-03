

const express = require('express');
const { login, registration, logout, generateAccessToken, suspend, listUsers, confirm, sendCode, updatePassword,
    verifCode, modifiePassword, statusAccounts, genderStat, loginWithGoogle } = require('../controllers/user.controller/user.controller')
const upload = require('../utils/uploadFileMulter')
const passport = require("passport")
const route = express.Router();
const { ROLES, inRole } = require('../security/RoleMiddleware')

route.post('/signIn', upload.any("imgProfile"), registration)
route.post('/login', login)
route.post('/token', generateAccessToken)
route.delete('/logout', logout)
route.get('/confirm/:id', confirm)







//private ressource based on role 
route.delete('/suspend', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), suspend)

//private ressource based on role 
route.get('/list', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), listUsers)





//change forgetten password 
route.post('/sendVerifCode', sendCode)
route.post('/verifCode', verifCode)
route.post('/updatePassword', updatePassword)


//modifie password using old one 
route.put('/modifiePassword', passport.authenticate('jwt', { session: false }), inRole(ROLES.USER), modifiePassword)


// login with google 
route.post('/loginWithGoogle', loginWithGoogle)

//user stat 
route.get("/enables", passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), statusAccounts)
route.get("/genderStat", genderStat)


module.exports = route



