const express = require('express');
const sequelize = require('./sequelize');
const Post = require('./models/Post');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');

  // Start the server after the database sync is complete
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});

