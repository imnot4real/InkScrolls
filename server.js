// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Import your User model

// Create an Express app
const app = express();

// Connect to MongoDB (replace with your MongoDB connection URL)
mongoose.connect('mongodb://localhost:27017/myappdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up middleware and routes here

// server.js

// ... (previous code)

// Import your routes
const apiRoutes = require('./routes/api');

// Use middleware
// app.use(express.json()); // Parse JSON requests
// app.use('/api', apiRoutes); // Use the routes
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ... (rest of the code)

// Define a route for user sign-up
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
