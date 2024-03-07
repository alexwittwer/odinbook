const express = require("express");
const router = express.Router();
const multer = require("multer");
const Photo = require('../models/photo')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage })

router.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const photo = new Photo({
            filename: req.file.filename,
            path: req.file.path
        });

        await photo.save();
        res.status(200).send('Photo uploaded and saved successfully');
    } catch (error) {
        res.status(500).send('Error saving photo to the database');
    }

});

module.exports = router;