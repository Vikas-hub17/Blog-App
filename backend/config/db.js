const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect("mongodb://localhost:27017/BlogPost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
