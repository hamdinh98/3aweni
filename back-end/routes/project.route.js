const express = require('express');
const route = express.Router();
const passport = require("passport")
const { getProject, AddProject, donateToProject } = require("../controllers/project.controller");

route.get('/project', getProject);


route.post('/addProject', passport.authenticate('jwt', { session: false }), AddProject)
route.post("/donateProject/:idProject", passport.authenticate('jwt', { session: false }), donateToProject)
module.exports = route;