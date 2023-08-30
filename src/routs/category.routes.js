const route = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');
const newCategoryValidation = require('../middlewares/newCategoryValidation');

route.post('/', tokenValidation, newCategoryValidation, categoryController.createCategory);

module.exports = route;