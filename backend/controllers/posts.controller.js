const PostModel = require("../data/posts.model")
const postsService = require('../services/posts.service')

const postsController = {
    getPosts: async(req, res) => {
        const postsObj = await postsService.getPosts();

        res.status(201).send(postsObj);
    },
    getPostByID: async(req, res) => {
        const postId = req.params.id;

        const postObj = await postsService.getPostByID(postId);

        res.status(200).send(postObj);
    },
    createPost: async(req, res) => {
        const postToBeCreated = req.body;

        if( !postToBeCreated ||
            !postToBeCreated?.author ||
            !postToBeCreated?.title ||
            !postToBeCreated?.description
        ) {
            res.status(400).send('Invalid post object.');
            return;
        }

        postsService.createPost(postToBeCreated);
        res.status(201).send("Successfully created.");
    }
};

module.exports = postsController;