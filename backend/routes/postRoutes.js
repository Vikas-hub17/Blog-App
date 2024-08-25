const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// GET /posts - List all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve posts' });
  }
});

// GET /posts/:id - Get a specific post
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve the post' });
  }
});

// POST /posts - Create a new post
router.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create the post' });
  }
});

// PUT /posts/:id - Update a post
router.put('/posts/:id', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true, runValidators: true }
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update the post' });
  }
});

// DELETE /posts/:id - Delete a post
router.delete('/posts/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete the post' });
  }
});

module.exports = router;
