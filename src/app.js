const express = require('express');
const jwt = require('jsonwebtoken');
const loginValidation = require('./middlewares/LoginValidation');
const newUserValidation = require('./middlewares/newUserValidation');
const { userExist, emailExist } = require('./validations/userExist');
const { User } = require('./models');

const { JWT_SECRET } = process.env;
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginValidation, async (req, res) => {
  const { email, password } = req.body;
  // userExist verifica a existencia do usuário e senha no banco de dados
  const userExists = await userExist(email, password);
  // console.log(userExists);
  if (userExists === false) {
    return res.status(400).json({ message: 'Invalid fields' });
}

  // gera o token usando email e a variável de ambiente
  const token = jwt.sign({
    email,
  }, JWT_SECRET);

  // reponde com o token gerado
  res.status(200).json({ token });
});

app.post('/user', newUserValidation, async (req, res) => {
const { displayName, email, password } = req.body;

const emailExists = await emailExist(email);
if (emailExists) {
  return res.status(409).json({ message: 'User already registered' });
}
console.log(displayName);
await User.create({
  displayName,
  email,
  password,
});

const token = jwt.sign({ email }, JWT_SECRET);

res.status(201).json({ token });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
