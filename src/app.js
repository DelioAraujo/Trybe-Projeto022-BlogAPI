const express = require('express');

const { loginRoutes, userRoutes, categoryRoutes, postRoutes } = require('./routs');

const app = express();
app.use(express.json());
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
// -----------------------------------------------------------------------------------------------------------ok
app.use('/login', loginRoutes);
// -----------------------------------------------------------------------------------------------------------ok
app.use('/user', userRoutes);
// -----------------------------------------------------------------------------------------------------------ok
app.use('/categories', categoryRoutes);
// -----------------------------------------------------------------------------------------------------------
app.use('/post', postRoutes);
// app.post('/post', tokenValidation, newPostValidation, async (req, res) => {
// const { title, content, categoryIds } = req.body;

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
