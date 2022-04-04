const express = require('express');
const route = express.Router();
const passport = require("passport")
const { getProject, AddProject, donateToProject, deleteProject, getFundingProgress, getDonationTrendByMonth, getListOfBackers} = require("../controllers/project.controller");

route.get('/project', getProject);


route.post('/addProject', passport.authenticate('jwt', { session: false }), AddProject);
route.post("/donateProject/:idProject", passport.authenticate('jwt', { session: false }), donateToProject);
route.delete('/deleteProject/:idProjet',deleteProject);
route.get('/getFundingProgress/:idProjet',getFundingProgress);
route.get('/getDonationTrendByMonth/:idProjet',getDonationTrendByMonth);
route.get('/getListOfBackers/:idProjet',getListOfBackers);
module.exports = route;