const PostModel = require("../data/posts.model")
const postsService = require('../services/posts.service')

const postsController = {
    getPosts: async(req, res) => {
        const postsObj = await postsService.getPosts();

        res.status(201).send(postsObj);
    },
    createPost: async(req, res) => {
        const postToBeCreated = req.body;

        if( !postToBeCreated?.title ||
            !postToBeCreated?.description
        ) {
            res.status(400).send('Invalid post object.');
            return;
        }

        postToBeCreated.date = new Date().toString();

        postsService.createPost(postToBeCreated);
        res.status(201).send("Successfully created.");
    }
};

module.exports = postsController;