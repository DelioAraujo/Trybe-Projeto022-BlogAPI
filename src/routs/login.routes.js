const route = require('express').Router();
const { loginController } = require('../controllers');
// const LoginValidation = require('../middlewares/LoginValidation');

route.post('/', loginController.login);

module.exports = route;
