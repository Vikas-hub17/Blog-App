const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

const Item = require("./models/Post"); // Create the Item model

app.get("/api/Post", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', postRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
