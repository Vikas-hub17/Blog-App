const { Post } = require('../models');

async function seedDatabase() {
  await Post.bulkCreate([
    {
      title: 'First Post',
      content: 'This is the content of the first post',
      author: 'John Doe',
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post',
      author: 'Jane Doe',
    },
  ]);
}

seedDatabase().then(() => {
  console.log('Database seeded!');
  process.exit();
});
