const postsService = require('../services/posts.service')

const postsController = {
    createPost: (postObj) => {
        console.log("Creating post");
        console.log(postObj);
        postsService.createPost(postObj);
    },

    deletePost: (postId) => {
        console.log(`Deleting post with id ${postId}`);
        postsService.deletePost(postId);
    }
};

module.exports = postsController;