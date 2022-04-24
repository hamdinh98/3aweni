const express = require('express');
const route = express.Router();

const {displayLedger,createLedger,addExpense,addIncome,deleteLedger} = require('../controllers/LedgerBook.controller');

route.get('/displayLedger/:idProjet',displayLedger);
route.post('/createLedger/:idProjet',createLedger);
route.post('/addExpense/:idLedger',addExpense);
route.post('/addIncome/:idLedger',addIncome);
route.delete('/deleteLedger/:idLedger',deleteLedger);

module.exports = route;