const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

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
