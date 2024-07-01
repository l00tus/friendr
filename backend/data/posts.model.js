const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    {
        id: Number,
        userId: Number,
        title: String,
        description: String,
        date: Date
    });

module.exports = PostModel;