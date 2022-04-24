const express = require('express');
const route = express.Router();
const { addCategory, deleteCategory, getAllCategories, getCategory, updateCategory } = require('../controllers/Category.controller')

route.get("/getAllCategories", getAllCategories)
route.get("/getCategory/:id", getCategory)
route.post("/addCategory", addCategory)
route.delete("/deleteCategory/:id", deleteCategory)
route.put("/updateCategory/:id", updateCategory)


module.exports = route;