const { User } = require('../models');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    // test se email e senha vieram no corpo da requisição

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    // usando o modulo User, procura um user que tenha email E senha iguais ao da requisição.

    const userExist = await User.findOne({ email, password });
        if (!userExist) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

    next();
};
