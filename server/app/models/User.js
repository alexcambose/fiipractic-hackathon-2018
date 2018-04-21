const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true, maxlength: 20, minlength: 5},
    password: {type: String, required: true},
    meta: {
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now},
    }
});


userSchema.statics.isEmailUnique = function (email) {
    return new Promise((resolve, reject) => {
        this.findOne({email})
            .exec((err, user) => {
                if (user) reject();
                else resolve();
            });
    });
};
userSchema.statics.isUsernameUnique = function (username) {
    return new Promise((resolve, reject) => {
        this.findOne({username})
            .exec((err, user) => {
                if (user) reject();
                else resolve();
            });
    });

};
module.exports = mongoose.model('User', userSchema);