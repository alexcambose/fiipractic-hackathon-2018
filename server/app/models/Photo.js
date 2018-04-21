const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;


const photoSchema = new mongoose.Schema({
    filename: {
        type: String,
    }
});

module.exports = mongoose.model('Photo', photoSchema);