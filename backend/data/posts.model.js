const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    {
        id: String,
        author: String,
        title: String,
        description: String,
        date: Date,
        likes: [String],
    });

module.exports = PostModel;