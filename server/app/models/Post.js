const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true,
    },
    author: {
        type: ObjectId,
        required: true,
    },
    likes: {
        type: [ObjectId],
        default: [],
        unique: true,
    }
});
postSchema.statics.exists = function (id) {
    return new Promise((resolve, reject) => {
        this.findById(id)
            .exec((err, post) => {
                if (post) resolve();
                else reject();
            });
    });
};
module.exports = mongoose.model('Post', postSchema);