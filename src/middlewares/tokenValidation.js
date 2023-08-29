const jwt = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers; // Bearer token
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;