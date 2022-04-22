const express = require('express');
const route = express.Router();
const { addBadge, deleteBadge, updateBadge, getAllBadges, getBadge } = require('../controllers/Badge.controller')
const upload = require('../utils/uploadFileMulter')
route.post("/addBadge", upload.any('badgeImg'), addBadge)

module.exports = route;