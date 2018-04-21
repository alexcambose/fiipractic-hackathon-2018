const Photo = require('./Photo');
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    urlname: {
        type: String,
        unique: true,
    },
    photo: {
        // type: ObjectId, ref: "Photo",
    }
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