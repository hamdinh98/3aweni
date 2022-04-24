
const Category = require('../models/CategoryProject.model')


const addCategory = async (req, res) => {
    const category = await Category.create(req.body);

    if (category)
        return res.status(200).json(category)
    return res.status(500).json("something wrong")
}
const deleteCategory = async (req, res) => {
    const result = await Category.deleteOne({ _id: req.params.id })
    if (result)
        return res.status(200).json(result)
    return res.status(500).json("something wrong")
}

const updateCategory = async () => {
    const result = await Category.updateOne({ _id: req.params.id }, req.body)
    if (result)
        return res.status(200).json(result)
    return res.status(500).json("something wrong")
}

const getAllCategories = async () => {
    const list = await Category.find()

    if (list)
        return res.status(200).json(list)
    return res.status(500).json("something wrong")
}

const getCategory = async () => {
    const category = await Category.findById(req.params.id)
    if (category)
        return res.status(200).json(category)
    return res.status(500).json("something wrong")
}

module.exports = { addCategory, deleteCategory, updateCategory, getAllCategories, getCategory }