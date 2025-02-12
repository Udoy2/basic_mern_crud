const express = require("express");
const post_route = express()

const bodyParser = require('body-parser');
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require('path');
const { createPost, getPosts, deletePost } = require("../controllers/postController");
post_route.use(express.static('public'));


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const destPath = path.join(__dirname, "../public/postImages");
        cb(null, destPath);
    },
    filename: function(req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    }
});

const upload = multer({storage: storage});

post_route.post("/create-post",upload.single('image'),createPost)
post_route.get("/get-posts",getPosts)
post_route.get("/delete-post/:id",deletePost)

module.exports = post_route