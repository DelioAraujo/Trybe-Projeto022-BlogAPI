const { CategoryServices } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const newCategory = await CategoryServices.createCategory(name);

  res.status(201).json(newCategory);
};

const categoriesList = async (req, res) => {
    const list = await CategoryServices.categoryList();

res.status(200).json(list);
};

module.exports = {
    createCategory,
    categoriesList,
};