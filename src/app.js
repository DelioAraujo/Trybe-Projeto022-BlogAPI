const express = require('express');
const jwt = require('jsonwebtoken');
const loginValidation = require('./middlewares/LoginValidation');
const userExist = require('./validations/userExist');

const { JWT_SECRET } = process.env;
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// loginValidation verifica se o login foi preenchido
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

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
