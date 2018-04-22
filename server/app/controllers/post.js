const Post = require('../models/Post');
const utils = require('../utils');


module.exports.getAll = (req, res) => {
    const userId = res.locals.user._id;
    Post.find({author: userId}, (err, posts) => {
        if (!err) {
            res.json({
                success: true,
                posts: posts,
            });
        } else {
            res.json({
                success: false,
                errors: err,
            });
        }
    });
}

module.exports.getPostsByUser = (req, res) => {
    const user = req.body.userId
    Post.find({author: user}, (err, posts) => {
        if (!err) {
            res.json({
                success: true,
                posts: posts,
            });
        } else {
            res.json({
                success: false,
                errors: err,
            });
        }
    });
}

module.exports.create = async (req, res) => {
    const { content, type } = req.body;

    const userId = res.locals.user._id;
    try {
        await req.asyncValidationErrors();
        const post = new Post({
            content,
            type,
            author: userId,
        });
        await post.save();
        res.json({success: true});
        utils.info(`Post '${content}...' added!`);
    } catch(error) {
        res.json({success: false, error});
    }
};

module.exports.delete = async (req, res) => {
    const { id } = req.body;
    try {
        await req.asyncValidationErrors();
        const post = await Post.findById(id);
        await post.remove();
        res.json({success: true});
        utils.info(`Post '${id}' removed!`);
    } catch(error) {
        res.json({success: false, error});
    }
};

module.exports.likeDislike = async (req, res) => {
    const { id } = req.body;
    const userId = res.locals.user._id;

    try {
        await req.asyncValidationErrors();
        const post = await Post.findById(id);
        const index = post.likes.findIndex(e => e == userId);
        console.log(post.likes);
        if(index !== -1) {
            post.likes.splice(index, 1);
        } else {
            post.likes.push(userId);
        }
        await post.save();
        res.json({success: true});
        utils.info(`User '${userId}' liked or disliked post ${post._id}!`);
    } catch(error) {
        res.json({success: false, error});
    }
};
