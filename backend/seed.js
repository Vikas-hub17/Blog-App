const sequelize = require('./sequelize');
const Post = require('./models/Post');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // This will drop and recreate the table
  
  const posts = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: 'John Doe',
      createdAt: new Date('2024-08-21 10:00:00')
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      author: 'Jane Smith',
      createdAt: new Date('2024-08-22 12:30:00')
    },
    {
      title: 'Third Post',
      content: 'This is the content of the third post.',
      author: 'Alice Johnson',
      createdAt: new Date('2024-08-23 15:45:00')
    }
  ];

  await Post.bulkCreate(posts);
  console.log('Data has been seeded');
  process.exit();
};

seedDatabase();
