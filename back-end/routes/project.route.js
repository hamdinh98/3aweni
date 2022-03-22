const express = require('express');
const route = express.Router();
const {getProject} = require("../controllers/project.controller");

route.get('/project',getProject);
module.exports = route;