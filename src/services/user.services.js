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

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

 if (!user) {
  return { status: 404, message: 'User does not exist' };
}

  return user;
};

module.exports = {
  emailExists,
  createUser,
  findAll,
  findById,
};