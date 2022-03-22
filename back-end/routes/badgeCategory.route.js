const express = require('express');
const route = express.Router();
const {getBadgeCategory} = require('../controllers/badgeCategory.controller')

route.get('/getBadgeCategory',getBadgeCategory);

module.exports = route;