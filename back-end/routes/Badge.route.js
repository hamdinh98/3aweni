const express = require('express');
const route = express.Router();
const { addBadge, deleteBadge, updateBadge, getAllBadges, getBadge } = require('../controllers/Badge.controller')



module.exports = route;