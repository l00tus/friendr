const PostModel = require('../data/posts.model');

const postsService = {
    getPosts: async () => {
        const response = await PostModel.find();
        return response;
    },
    createPost: async (postObj) => {
        console.log(postObj);
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created'));
    }
};

module.exports = postsService;