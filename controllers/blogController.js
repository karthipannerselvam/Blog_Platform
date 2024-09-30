const Blog = require('../models/Blog');

// Create Blog Post
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Blog({
      title,
      content,
      author: req.user._id,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Blog Posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Single Blog Post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
