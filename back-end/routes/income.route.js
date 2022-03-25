const express = require ('express');
const route = express.Router();

const {getIncome} = require ('../controllers/income.controller');

route.get ('/getIncome',getIncome)

module.exports = route;
