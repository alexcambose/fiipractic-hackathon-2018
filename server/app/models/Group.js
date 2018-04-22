const Photo = require('./Photo');
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    urlname: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: ObjectId, ref: "Photo",
    },
    posts: {
        type: [ObjectId], ref: "Post",
    },
    author: {
        type: ObjectId, ref: "User",
    }
}, {
    usePushEach: true
});


groupSchema.statics.isUrlNameUnique = function (urlname) {
    return new Promise((resolve, reject) => {
        this.findOne({urlname})
            .exec((err, user) => {
                if (user) reject();
                else resolve();
            });
    });
};

module.exports = mongoose.model('Group', groupSchema);