const { PostServices } = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    const newPost = await PostServices.createPost(title, content, categoryIds);

    if (newPost.status === 400) {
 return res.status(newPost.status)
    .json({ message: newPost.message });
}

return res.status(newPost.status).json(newPost.data);
};

module.exports = {
    createPost,
};