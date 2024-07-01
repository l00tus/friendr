const PostModel = require('../data/posts.model');

const postsService = {
    getPosts: async () => {
        const response = await PostModel.find();
        return response;
    },
    getPostByID: async (postId) => {
        const response = await PostModel.findOne({id: postId})
        return response;
    },
    createPost: async (postObj) => {
        console.log(postObj);
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created'));
    }
};

module.exports = postsService;