// const { Category, BlogPost, PostCategory } = require('../models');

// const createPost = async (title, content, categoryIds) => {
//     // pega a lista de todas categorias.
//     const categoriesList = await Category.findAll();

//     // faz um array com todos ids
//     const categoriesIdsList = categoriesList.map((category) => category.id);

//     // confere se os ids que vieram na requisição estão presentes no array
//     const allCategoryIdsExists = categoryIds.every((item) => categoriesIdsList.includes(item));
//     if (!allCategoryIdsExists) {
//           return {
//             status: 400,
//             message: 'one or more "categoryIds" not found',
//           };
//     }

//     // cria o novo post
//     const newPost = await BlogPost.create({
//     title,
//     content,
//     userId: 1,
//     // published: new Date(),
//     // updated: new Date(),
//     });

//     // Cria entradas correspondentes na tabela PostCategory.
//     const postCategories = categoryIds.map((categoryId) => ({
//     postId: newPost.id,
//     categoryId,
//     }));

//     await PostCategory.bulkCreate(postCategories);

//     return {
//         status: 201,
//         data: newPost,
//     };
// };

// module.exports = {
//     createPost,
// };