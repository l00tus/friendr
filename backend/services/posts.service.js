const PostModel = require('../data/posts.model');
const { v4: uuidv4 } = require('uuid');

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
        postObj.date = new Date().toISOString();
        postObj.id = uuidv4();
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created'));
    },
    removePostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$pull: {likes: username}});
    },
    addPostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$push: {likes: username}});
    }
};

module.exports = postsService;