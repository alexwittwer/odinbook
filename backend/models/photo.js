const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    aliases: [String],
});

const PhotoData = mongoose.model('PhotoData', PhotoSchema);

module.exports = { Photo, PhotoData };
