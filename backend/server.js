const express = require('express');
const sequelize = require('./sequelize');
const Post = require('./models/Post');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sync the database
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');

  // Example route to create a post (you can remove or modify this as needed)
  app.post('/posts', async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Route to get all posts
  app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Start the server after the database sync is complete
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
