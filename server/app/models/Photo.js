const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    filename: {
        type: String,
    }
});

module.exports = mongoose.model('Photo', photoSchema);