// index.js
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db');

const app = express();
app.use(bodyParser.json());

// GET /posts - List all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await knex('posts').select('*');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error });
  }
});

// GET /posts/:id - Get a specific post
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await knex('posts').where({ id: req.params.id }).first();
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving post', error });
  }
});

// POST /posts - Create a new post
app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const [id] = await knex('posts').insert({ title, content });
    const newPost = await knex('posts').where({ id }).first();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

// PUT /posts/:id - Update a post
app.put('/posts/:id', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const updated = await knex('posts').where({ id: req.params.id }).update({ title, content });
    if (!updated) return res.status(404).json({ message: 'Post not found' });

    const updatedPost = await knex('posts').where({ id: req.params.id }).first();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
});

// DELETE /posts/:id - Delete a post
app.delete('/posts/:id', async (req, res) => {
  try {
    const deleted = await knex('posts').where({ id: req.params.id }).del();
    if (!deleted) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});

let posts = [
  // Sample posts
  { id: 1, title: 'Post 1', content: 'Content 1', comments: [] },
  { id: 2, title: 'Post 2', content: 'Content 2', comments: [] },
];

// Fetch comments for a specific post
app.get('/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.json(post.comments);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Add a comment to a specific post
app.post('/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    const comment = {
      id: post.comments.length + 1,
      content: req.body.content,
      author: req.body.author,
    };
    post.comments.push(comment);
    res.status(201).json(comment);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
