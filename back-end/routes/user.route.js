

const express = require('express');
const { login, registration, logout, generateAccessToken, authToken, blockUser, listUsers, confirm } = require('../controllers/user.controller')
const upload = require('../utils/uploadFileMulter')

const route = express.Router();

route.post('/signIn', upload.any("imgProfile"), registration)
route.post('/login', login)
route.get('/token', generateAccessToken)
route.delete('/logout', logout)
route.delete('/deleteUser', blockUser)
route.get('/list', listUsers)
route.get('/confirm/:id', confirm)
route.get('/private', authToken, (req, res) => {

    res.send(" access token valid")
})


module.exports = route