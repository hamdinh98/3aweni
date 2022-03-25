const express =require('express');
const route = express.Router();

const {getExpenses} = require ('../controllers/expenses.controller');

route.get('/getExpenses',getExpenses);

module.exports = route;