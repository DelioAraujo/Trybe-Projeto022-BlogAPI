const { CategoryServices } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const newCategory = await CategoryServices.createCategory(name);

  res.status(201).json(newCategory);
};

module.exports = {
    createCategory,
};