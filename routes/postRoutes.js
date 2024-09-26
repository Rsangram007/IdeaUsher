const express = require('express');
const { createPost, getAllPosts, upload } = require('../controllers/postController');
const router = express.Router();

// Upload image and create post
router.post('/', upload.single('image'), createPost);

// Get all posts
router.get('/', getAllPosts);

module.exports = router;
