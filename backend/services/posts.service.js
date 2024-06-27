const postsService = {
    createPost: (postObj) => {
        console.log("Created post in service");
        console.log(postObj);
    },

    deletePost: (postId) => {
        console.log(`Deleted post with id ${postId} in service`);
    }
};

module.exports = postsService;