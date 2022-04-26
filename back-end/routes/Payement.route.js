const express = require('express');
const route = express.Router();
const passport = require("passport");
const { addPayement, deletePayement, getPayement, getAllPayements, updatePayement } = require('../controllers/Payement.controller');


route.get('/getPayement/:idProject', passport.authenticate('jwt', { session: false }) ,getPayement);
route.get('/getAllPayements', passport.authenticate('jwt', { session: false }) ,getAllPayements);
route.post('/addPayement/:idProjet', passport.authenticate('jwt', { session: false }) ,addPayement);
route.put('/updatePayement/:idPayement', passport.authenticate('jwt', { session: false }) ,updatePayement);
route.delete('/deletePayement/:idPayement', passport.authenticate('jwt', { session: false }) ,deletePayement);

module.exports = route;