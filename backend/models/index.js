const sequelize = require('../sequelize');
const Post = require('./post');

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = {
  Post,
};
