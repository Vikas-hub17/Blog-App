const express = require('express');
const sequelize = require('./sequelize');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use('/api', postRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
