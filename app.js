// app.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const authRoutes = require('./controllers/auth'); // Import your routes

const app = express();

// Set up middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use your routes
app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
