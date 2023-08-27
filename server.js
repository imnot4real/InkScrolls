// server.js

const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Connect to MongoDB (replace with your MongoDB connection URL)
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up middleware and routes here

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// server.js

// ... (previous code)

// Import your routes
const apiRoutes = require('./routes/api');

// Use middleware
app.use(express.json()); // Parse JSON requests
app.use('/api', apiRoutes); // Use the routes

// ... (rest of the code)
