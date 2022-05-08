const express = require('express');
const route = express.Router();
const passport = require("passport");
const { addPayement, deletePayement, getPayement, getAllPayements, updatePayement } = require('../controllers/Payement.controller');


route.get('/getPayement/:idProject', getPayement);
route.get('/getAllPayements',getAllPayements);
route.post('/addPayement/:idProject' ,addPayement);
route.put('/updatePayement/:idPayement', passport.authenticate('jwt', { session: false }) ,updatePayement);
route.delete('/deletePayement/:idPayement', passport.authenticate('jwt', { session: false }) ,deletePayement);

module.exports = route;
