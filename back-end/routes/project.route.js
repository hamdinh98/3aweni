const express = require('express');
const route = express.Router();
const { getProject, AddProject } = require("../controllers/project.controller");

route.get('/project', getProject);


route.post('/addProject/:id', AddProject)
module.exports = route;