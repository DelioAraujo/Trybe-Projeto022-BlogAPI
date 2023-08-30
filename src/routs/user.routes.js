const route = require('express').Router();
const { userController } = require('../controllers');
const newUserValidation = require('../middlewares/newUserValidation');
const tokenValidation = require('../middlewares/tokenValidation');
// const LoginValidation = require('../middlewares/LoginValidation');

route.post('/', newUserValidation, userController.createUser);
route.get('/', tokenValidation, userController.findAll);
route.get('/:id', tokenValidation, userController.findById);

module.exports = route;