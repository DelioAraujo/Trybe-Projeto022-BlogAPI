const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });

    return newCategory;
};

const categoryList = async () => {
    const list = await Category.findAll();

    return list;
};

module.exports = {
    createCategory,
    categoryList,
};