const { User } = require('../models');

const emailExists = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) return true;
};

const createUser = async (displayName, email, password) => {
    await User.create({
    displayName,
    email,
    password,
  });
};

const findAll = async () => {
  const usersList = await User.findAll({ attributes: { exclude: ['password'] } });

  return { status: 200, data: usersList };
};

module.exports = {
  emailExists,
  createUser,
  findAll,
};