const express = require('express');
const { createPost, getAllPosts, getPostById } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Blog Post (protected route)
router.post('/', protect, createPost);

// Get All Blog Posts
router.get('/', getAllPosts);

// Get Single Blog Post by ID
router.get('/:id', getPostById);

module.exports = router;
