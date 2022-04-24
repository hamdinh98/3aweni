const express = require('express');
const route = express.Router();
const { addPayement, deletePayement, getPayement, getAllPayements, updatePayement } = require('../controllers/Payement.controller');

route.get('/getPayement/:idProject',getPayement);
route.get('/getAllPayements',getAllPayements);
route.post('/addPayement',addPayement);
route.put('/updatePayement',updatePayement);
route.delete('/deletePayement',deletePayement);

module.exports = route;