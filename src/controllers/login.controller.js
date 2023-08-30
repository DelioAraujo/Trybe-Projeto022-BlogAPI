const jwt = require('jsonwebtoken');
const { LoginServices } = require('../services');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
}

  const userExists = await LoginServices.userExist(email, password);

  if (userExists === false) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwt.sign(
    {
      email,
    },
    JWT_SECRET,
  );

  res.status(200).json({ token });
};

module.exports = {
    login,
};