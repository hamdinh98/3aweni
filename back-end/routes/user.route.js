

const express = require('express');
const { login, registration, logout, generateAccessToken, blockUser, listUsers, confirm } = require('../controllers/user.controller')
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
route.delete('/deleteUser', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), blockUser)

//private ressource based on role 
route.get('/list', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), listUsers)

//private ressource based on role 
route.get('/user', passport.authenticate('jwt', { session: false }), inRole(ROLES.USER), (req, res) => {

    res.send("user")
})


module.exports = route



