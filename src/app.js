const express = require('express');
const jwt = require('jsonwebtoken');
const loginValidation = require('./middlewares/LoginValidation');

const { JWT_SECRET } = process.env;
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// usa o middeware loginValidation antes de requisição
app.post('/login', loginValidation, (req, res) => {
  const { email } = req.body;

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
