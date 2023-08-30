const express = require('express');
// const jwt = require('jsonwebtoken');
const { loginRoutes, userRoutes } = require('./routs');
// const loginValidation = require('./middlewares/LoginValidation');
// const newUserValidation = require('./middlewares/newUserValidation');
const tokenValidation = require('./middlewares/tokenValidation');
// const {
//   userExist,
//   emailExist } = require('./validations/userExist');
const { User, Category, BlogPost, PostCategory } = require('./models');
// const newCategoryValidation = require('./middlewares/newCategoryValidation');
// const newPostValidation = require('./middlewares/newPostValidation');

// const { JWT_SECRET } = process.env;

const app = express();
app.use(express.json());
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
// -----------------------------------------------------------------------------------------------------------
app.use('/login', loginRoutes);

// app.post('/login', loginValidation, async (req, res) => {
//   const { email, password } = req.body;
//   // userExist verifica a existencia do usuário e senha no banco de dados
//   const userExists = await userExist(email, password);
//   // console.log(userExists);
//   if (userExists === false) {
//     return res.status(400).json({ message: 'Invalid fields' });
// }

//   // gera o token usando email e a variável de ambiente
//   const token = jwt.sign({
//     email,
//   }, JWT_SECRET);

//   // reponde com o token gerado
//   res.status(200).json({ token });
// });
// -----------------------------------------------------------------------------------------------------------
app.use('/user', userRoutes);
// app.post('/user', newUserValidation, async (req, res) => {
// const { displayName, email, password } = req.body;

// const emailExists = await emailExist(email);
// if (emailExists) {
//   return res.status(409).json({ message: 'User already registered' });
// }

// await User.create({
//   displayName,
//   email,
//   password,
// });

// const token = jwt.sign({ email }, JWT_SECRET);

// res.status(201).json({ token });
// });
// -----------------------------------------------------------------------------------------------------------
// app.get('/user', tokenValidation, async (req, res) => {
// const usersList = await User.findAll({ attributes: { exclude: ['password'] } });

// res.status(200).json(usersList);
// });
// -----------------------------------------------------------------------------------------------------------
// app.get('/user/:id', tokenValidation, async (req, res) => {
//  const { id } = req.params;

//  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

//  if (!user) {
//   return res.status(404).json({ message: 'User does not exist' });
// }
// return res.status(200).json(user);
// });
// -----------------------------------------------------------------------------------------------------------
// app.post('/categories', tokenValidation, newCategoryValidation, async (req, res) => {
// const { name } = req.body;

// const newCategory = await Category.create({ name });

// return res.status(201).json(newCategory);
// });
// -----------------------------------------------------------------------------------------------------------
// app.get('/categories', tokenValidation, async (req, res) => {
//   const categoriesList = await Category.findAll();

//   res.status(200).json(categoriesList);
// });
// -----------------------------------------------------------------------------------------------------------
// app.post('/post', tokenValidation, newPostValidation, async (req, res) => {
// const { title, content, categoryIds } = req.body;

// // const token = req.headers.authorization.split(' ')[1]; // Assumindo que o token está no formato "Bearer token"
// // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
// // // console.log("delio", decodedToken);
// // const { email } = decodedToken;
// // const user = await User.findByEmail(email);
// // console.log('delio', user);

// // pega a lista de todas categorias.
// const categoriesList = await Category.findAll();

// // faz um array com todos ids
// const categoriesIdsList = categoriesList.map((category) => category.id);

// // confere se os ids que vieram na requisição estão presentes no array
// const allCategoryIdsExists = categoryIds.every((item) => categoriesIdsList.includes(item));

// if (!allCategoryIdsExists) {
//   return res.status(400).json({ message: 'one or more "categoryIds" not found' });
// }

// // cria o novo post
// const newPost = await BlogPost.create({
//   title,
//   content,
//   userId: 1,
//   // published: new Date(),
//   // updated: new Date(),
// });

// // Cria entradas correspondentes na tabela PostCategory.
// const postCategories = categoryIds.map((categoryId) => ({
//   postId: newPost.id,
//   categoryId,
// }));

// await PostCategory.bulkCreate(postCategories);

// return res.status(201).json(newPost);
// });

module.exports = app;
