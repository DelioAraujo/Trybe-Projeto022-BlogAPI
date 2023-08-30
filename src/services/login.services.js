const { User } = require('../models');

const userExist = async (email, password) => {
    const result = await User.findOne({ where: { email, password } });
    // console.log(result.password);

    if (!result) return false;

    return result;
};

// const emailExist = async (email) => {
//     const result = await User.findOne({ where: { email } });
//     if (result) return true;
// };

module.exports = {
    userExist,
    // emailExist,
};