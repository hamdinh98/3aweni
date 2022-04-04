const express = require('express');
const route = express.Router();

const {displayLedger,createLedger,addExpense,addIncome} = require('../controllers/LedgerBook.controller');

route.get('/displayLedger',displayLedger);
route.post('/createLedger/:idProjet',createLedger);
route.post('/addExpense/:idLedger',addExpense);
route.post('/addIncome/:idLedger',addIncome);

module.exports = route;