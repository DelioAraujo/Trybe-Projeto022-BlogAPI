module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    // test se email e senha vieram no corpo da requisição

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};
