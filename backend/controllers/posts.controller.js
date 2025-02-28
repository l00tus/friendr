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
            res.status(400).send({ error: 'Invalid post object.' });
            return;
        }

        postsService.createPost(postToBeCreated);
        res.status(201).send({ message: "Successfully created." });
    },
    updatePostLikes: async(req, res) => {
        const postId = req.params.id;
        const username = req.body.username;

        if(!username) {
            res.status(400).send();
            return;
        }

        const postObj = await postsService.getPostByID(postId); //verifica getpostbyid

        if(!postObj) {
            res.status(404).send({ error: "Post not found." });
            return;
        }

        const likes = postObj.likes;

        if(likes.includes(username)) {
            await postsService.removePostLikes(postId, username);
        } else {
            await postsService.addPostLikes(postId, username);
        }

        const updatedPostObj = await postsService.getPostByID(postId);

        res.status(200).send({ message: updatedPostObj });
    }
};

module.exports = postsController;