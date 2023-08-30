const jwt = require('jsonwebtoken');
const { UserServices } = require('../services');

const { JWT_SECRET } = process.env;

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;

  const emailExists = await UserServices.emailExists(email);

  if (emailExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await UserServices.createUser(displayName, email, password);

  const token = jwt.sign({ email }, JWT_SECRET);

  res.status(201).json({ token });
};

const findAll = async (req, res) => {
  const { status, data } = await UserServices.findAll();

  res.status(status).json(data);
};

module.exports = {
    createUser,
    findAll,
};