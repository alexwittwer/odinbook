const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    filename: String,
    path: String,
    uploadDate: Date,
});

const PhotoData = mongoose.model('PhotoData', PhotoSchema);

module.exports = { PhotoData };
