const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

//pt testat
const posts = [
    {id: 0, body: "wow primul post!"},
    {id: 1, body: "imi place mult la scoala de vara ^^"},
    {id: 2, body: "a castigat romania"}
];


router.get('/:id', (req, res) => {
    const reqPostId = parseInt(req.params.id);

    for(let i = 0 ; i < posts.length ; i++) {
        if(posts.at(i).id === reqPostId) {
            res.status(200).send(`Post with id ${reqPostId}: ${posts.at(i).body}`);
            return;
        }
    }

    res.status(404).send(`Cannot find post with id ${reqPostId}`);
});

router.post('/', (req, res) => {
    postsController.createPost(req.body);
    res.status(201).send("Succesfully created a post.");
});

router.delete('/:id', (req, res) => {
    const reqPostId = parseInt(req.params.id);
    postsController.deletePost(reqPostId);
    res.status(200).send();
})

module.exports = router;